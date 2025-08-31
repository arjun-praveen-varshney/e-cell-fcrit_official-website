import { NextRequest, NextResponse } from "next/server";
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";

// Create a client with write permissions for server-side operations
const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Don't use CDN for write operations
  token: process.env.SANITY_API_TOKEN, // Write token from environment
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, phone, type = "general" } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Name, email, and message are required fields",
        },
        { status: 400 }
      );
    }

    // Create contact submission in Sanity
    const contactSubmission = {
      _type: "contactSubmission",
      name,
      email,
      subject: subject || "Contact Form Submission",
      phone: phone || "",
      message,
      type,
      submittedAt: new Date().toISOString(),
      status: "new",
    };

    const result = await writeClient.create(contactSubmission);

    // Log the submission for tracking
    // console.log("New contact form submission:", {
    //   id: result._id,
    //   name,
    //   email,
    //   subject: subject || "Contact Form Submission",
    //   type,
    //   submittedAt: new Date().toISOString(),
    // });

    return NextResponse.json({
      success: true,
      message: "Thank you for your message! We will get back to you soon.",
      id: result._id,
    });
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit contact form. Please try again later.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Fetch all contact submissions (for admin purposes)
    const submissions = await writeClient.fetch(`
      *[_type == "contactSubmission"] | order(submittedAt desc) {
        _id,
        name,
        email,
        subject,
        phone,
        message,
        type,
        submittedAt,
        status
      }
    `);

    return NextResponse.json({
      success: true,
      submissions,
      total: submissions.length,
      message: "Contact submissions retrieved successfully",
    });
  } catch (error) {
    console.error("Error fetching contact submissions:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch contact submissions",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

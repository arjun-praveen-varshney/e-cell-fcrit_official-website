import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the form data
    const validatedData = contactSchema.parse(body);

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Log the submission

    // For now, we'll simulate database save and email sending
    console.log("Contact form submission:", validatedData);

    // Simulate email sending
    await sendEmailNotification(validatedData);

    // Simulate database save
    await saveContactSubmission(validatedData);

    return NextResponse.json(
      {
        message: "Thank you for your message! We'll get back to you soon.",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: "Validation error",
          errors: error.issues,
          success: false,
        },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        message: "Something went wrong. Please try again later.",
        success: false,
      },
      { status: 500 }
    );
  }
}

async function sendEmailNotification(data: z.infer<typeof contactSchema>) {
  // Mock email sending
  // In production, use services like SendGrid, AWS SES, or Nodemailer
  console.log("Sending email notification:", {
    to: "ecell@fcrit.ac.in",
    subject: `New Contact Form Submission: ${data.subject}`,
    content: `
      Name: ${data.name}
      Email: ${data.email}
      Subject: ${data.subject}
      Message: ${data.message}
    `,
  });
}

async function saveContactSubmission(data: z.infer<typeof contactSchema>) {
  // Mock database save
  // In production, save to your preferred database (PostgreSQL, MongoDB, etc.)
  console.log("Saving to database:", {
    ...data,
    submittedAt: new Date().toISOString(),
    status: "new",
  });
}

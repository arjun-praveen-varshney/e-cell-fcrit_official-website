import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Newsletter subscription schema
const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(2, "Name must be at least 2 characters").optional(),
  interests: z.array(z.string()).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the form data
    const validatedData = newsletterSchema.parse(body);

    // Check if email already exists
    const existingSubscription = await checkExistingSubscription(
      validatedData.email
    );

    if (existingSubscription) {
      return NextResponse.json(
        {
          message: "You are already subscribed to our newsletter!",
          success: true,
        },
        { status: 200 }
      );
    }

    // Save subscription
    await saveNewsletterSubscription(validatedData);

    // Send welcome email
    await sendWelcomeEmail(validatedData);

    return NextResponse.json(
      {
        message: "Successfully subscribed to our newsletter!",
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

    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      {
        message: "Subscription failed. Please try again later.",
        success: false,
      },
      { status: 500 }
    );
  }
}

async function checkExistingSubscription(email: string): Promise<boolean> {
  // Mock check for existing subscription
  // In production, check against your database
  console.log("Checking existing subscription for:", email);
  return false; // Mock: no existing subscription
}

async function saveNewsletterSubscription(
  data: z.infer<typeof newsletterSchema>
) {
  // Mock database save
  console.log("Saving newsletter subscription:", {
    ...data,
    subscribedAt: new Date().toISOString(),
    status: "active",
  });
}

async function sendWelcomeEmail(data: z.infer<typeof newsletterSchema>) {
  // Mock welcome email
  console.log("Sending welcome email:", {
    to: data.email,
    subject: "Welcome to E-Cell FCRIT Newsletter!",
    content: `
      Welcome to the E-Cell FCRIT community!
      
      You'll now receive updates about:
      - Upcoming events and workshops
      - Startup opportunities
      - Industry insights
      - Success stories from our community
      
      Thank you for joining us!
      
      Best regards,
      E-Cell FCRIT Team
    `,
  });
}

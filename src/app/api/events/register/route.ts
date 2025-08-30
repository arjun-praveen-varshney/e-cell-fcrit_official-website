import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Event registration validation schema
const registrationSchema = z.object({
  eventId: z.string().min(1, "Event ID is required"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  department: z.string().min(1, "Department is required"),
  year: z.string().min(1, "Academic year is required"),
  experience: z.enum(["beginner", "intermediate", "advanced"]).optional(),
  expectations: z.string().optional(),
  teamMembers: z
    .array(
      z.object({
        name: z.string(),
        email: z.string().email(),
        phone: z.string(),
      })
    )
    .optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the form data
    const validatedData = registrationSchema.parse(body);

    // Check if event exists and has available spots
    const eventAvailable = await checkEventAvailability(validatedData.eventId);

    if (!eventAvailable) {
      return NextResponse.json(
        {
          message: "Sorry, this event is full or registration is closed.",
          success: false,
        },
        { status: 400 }
      );
    }

    // Save registration to database
    const registrationId = await saveEventRegistration(validatedData);

    // Send confirmation email
    await sendRegistrationConfirmation(validatedData, registrationId);

    return NextResponse.json(
      {
        message: "Registration successful! Check your email for confirmation.",
        registrationId,
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

    console.error("Registration error:", error);
    return NextResponse.json(
      {
        message: "Registration failed. Please try again later.",
        success: false,
      },
      { status: 500 }
    );
  }
}

async function checkEventAvailability(eventId: string): Promise<boolean> {
  // Mock event availability check
  // In production, check against your database
  console.log("Checking availability for event:", eventId);
  return true; // Mock: event is available
}

async function saveEventRegistration(
  data: z.infer<typeof registrationSchema>
): Promise<string> {
  // Mock database save
  // In production, save to your database and return actual ID
  const registrationId = `REG_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  console.log("Saving registration:", {
    ...data,
    registrationId,
    registeredAt: new Date().toISOString(),
    status: "confirmed",
  });

  return registrationId;
}

async function sendRegistrationConfirmation(
  data: z.infer<typeof registrationSchema>,
  registrationId: string
) {
  // Mock email sending
  console.log("Sending registration confirmation:", {
    to: data.email,
    subject: "Event Registration Confirmation - E-Cell FCRIT",
    content: `
      Dear ${data.name},
      
      Thank you for registering for our event!
      
      Registration ID: ${registrationId}
      Event ID: ${data.eventId}
      
      We'll send you more details closer to the event date.
      
      Best regards,
      E-Cell FCRIT Team
    `,
  });
}

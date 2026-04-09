import { type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // For now, log the contact submission
    // In production, integrate with an email service (Resend, SendGrid, etc.)
    console.log("Contact form submission:", { name, email, message });

    // TODO: Add email service integration here
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'portfolio@kaliprlabs.in',
    //   to: 'pratikanpat89@gmail.com',
    //   subject: `Portfolio Contact: ${name}`,
    //   text: `From: ${name} (${email})\n\n${message}`,
    // });

    return Response.json(
      { success: true, message: "Message received" },
      { status: 200 }
    );
  } catch {
    return Response.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}

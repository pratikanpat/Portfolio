import { type NextRequest } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
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

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "pratikkalipr003@gmail.com",
      replyTo: email,
      subject: `[Portfolio] Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family: monospace; background: #0a0a0a; color: #e5e5e5; padding: 32px; max-width: 600px;">
          <div style="color: #00f0ff; font-size: 12px; letter-spacing: 3px; margin-bottom: 24px;">PRATIK.SYS // INCOMING_TRANSMISSION</div>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="color: #666; font-size: 11px; padding: 8px 0; border-bottom: 1px solid #222; width: 80px;">FROM</td>
              <td style="color: #e5e5e5; font-size: 13px; padding: 8px 0; border-bottom: 1px solid #222;">${name}</td>
            </tr>
            <tr>
              <td style="color: #666; font-size: 11px; padding: 8px 0; border-bottom: 1px solid #222;">EMAIL</td>
              <td style="color: #00f0ff; font-size: 13px; padding: 8px 0; border-bottom: 1px solid #222;">${email}</td>
            </tr>
          </table>
          <div style="color: #666; font-size: 11px; letter-spacing: 2px; margin-bottom: 12px;">MESSAGE</div>
          <div style="color: #e5e5e5; font-size: 14px; line-height: 1.7; border-left: 2px solid #00f0ff33; padding-left: 16px;">${message.replace(/\n/g, "<br>")}</div>
          <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #222; color: #444; font-size: 11px;">
            Reply directly to this email to respond to ${name}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return Response.json(
      { success: true, message: "Message sent" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

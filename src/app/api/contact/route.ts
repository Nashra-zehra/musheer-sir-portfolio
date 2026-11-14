
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { PROF } from '@/content/professor';

export async function POST(req: Request) {
  try {
    const { name, email, affiliation, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Check SMTP configuration
    if (
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      return NextResponse.json(
        {
          success: false,
          message: 'Email service is not configured yet.',
        },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Academic Website" <${process.env.SMTP_USER}>`,
      to: PROF.email,
      replyTo: email,
      subject: `Academic Inquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Affiliation: ${affiliation || 'Not provided'}

Message:
${message}
      `,
      html: `
        <h2>New Academic Inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Affiliation:</strong> ${escapeHtml(affiliation || 'Not provided')}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully!',
    });

  } catch (error) {
    console.error('Contact API Error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Unable to send your message. Please try again later.',
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };

    return entities[char];
  });
}

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    // Récupération des données de la requête
    const { user_name, user_email, message } = await req.json();

    // Créer le contenu HTML du message
    const emailContent = `
      <div>
        <h1>Nouveau Contact :D</h1>
        <p><strong>Name:</strong> ${user_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    `;

    // Envoi de l'email
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "charleszecevic@gmail.com",
      subject: "New Contact Form Submission",
      html: emailContent,
    });

    // Réponse en cas de succès
    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    // Réponse en cas d'échec
    return NextResponse.json(
      { message: "Failed to send email.", error },
      { status: 500 }
    );
  }
}

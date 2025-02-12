import nodemailer from "nodemailer";

export const POST = async (req) => {
  try {
    const { name, email } = await req.json();

    // Validate email
    if (!name || !email) {
      return Response.json(
        { success: false, message: "Name and email are required." },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail email
        pass: process.env.EMAIL_PASS, // Your App Password (16-character)
      },
    });

    // Email content
    const mailOptions = {
      from: `"Mahesh Nayak (Maphy)" <${process.env.EMAIL_USER}>`,
      to: email, // Send email to client
      bcc: process.env.EMAIL_USER, // Keep a copy for yourself
      subject: `Thanks for reaching out, ${name}!`,
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for getting in touch through my website! I’m a full-stack web developer specializing in modern, high-performance websites. Whether you need a simple landing page or a full-featured e-commerce store, I have flexible packages to fit your needs.</p>
        
        <h3>Service Packages:</h3>
        <ul>
          <li><strong>Basic:</strong> A clean, responsive 3-page website – perfect for small businesses or personal brands.</li>
          <li><strong>Standard:</strong> A fully functional website with API integration – great for growing businesses.</li>
          <li><strong>Premium:</strong> A complete e-commerce solution with a payment gateway – ideal for online stores.</li>
        </ul>

        <p>You can hire me on:</p>
        <p>👉 <a href="https://www.fiverr.com/s/8zYl8bg">Fiverr</a></p>
        <p>👉 <a href="https://www.upwork.com/freelancers/~019c4e8bbe1881f9cd">Upwork</a></p>
        <p>Let me know what you’re looking for, and we can discuss the best approach for your project. Looking forward to working with you!</p>

        <p>Best,<br>
        <strong>Mahesh Nayak (Maphy)</strong><br>
        <a href="https://maphy.vercel.app">Website</a><br>
        +918658533493</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return Response.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Email sending error:", error);
    return Response.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
};

import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://maphy.vercel.app"), // Replace with your actual domain
  title: "Mahesh Nayak – MERN Stack Developer | Next.js & WordPress Expert",
  description:
    "Looking for a MERN stack developer, Next.js expert, and UI/UX designer? I build fast, responsive, and SEO-friendly web apps, e-commerce sites, and WordPress websites. Need a custom website or a high-converting landing page? Let's collaborate!",
  openGraph: {
    title: "Mahesh Nayak – MERN Stack Developer | Next.js & WordPress Expert",
    description:
      "Looking for a MERN stack developer, Next.js expert, and UI/UX designer? I build fast, responsive, and SEO-friendly web apps, e-commerce sites, and WordPress websites.",
    url: "https://maphy.vercel.app",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // This will now resolve to "https://yourdomain.com/og-image.jpg"
        width: 1200,
        height: 630,
        alt: "Mahesh Nayak Portfolio Preview",
      },
    ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@yourTwitterHandle",
  //   title: "Mahesh Nayak – MERN Stack Developer | Next.js & WordPress Expert",
  //   description:
  //     "Looking for a MERN stack developer, Next.js expert, and UI/UX designer? I build fast, responsive, and SEO-friendly web apps, e-commerce sites, and WordPress websites.",
  //   images: ["/og-image.jpg"], // Resolved using `metadataBase`
  // },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body className="m-0 box-border p-0">{children}</body>
    </html>
  );
}

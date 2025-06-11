import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Correct usage without variable
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply the font class from the Poppins font object */}
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}

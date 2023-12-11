import "./globals.css";
import type { Metadata } from "next";
import localFont from 'next/font/local'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const myFont = localFont({ src: './../assets/fonts/Campton-Bold.woff2' })

export const metadata: Metadata = {
  title: "Developer Routes - Community",
  description:
    "Empowering Developers to Excel 🚀 | Building Connections at Developer Routes Community | Passionate about Fostering Growth in the Software Development World 🌐",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

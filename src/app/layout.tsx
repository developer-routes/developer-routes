import { Metadata } from "next";

import NavBar from "@developer-routers/common/components/navbar.component";
import Footer from "@developer-routers/common/components/footer.component";
import { metadata as globalMetadata } from "@developer-routers/common/constants/meta.constant";
import "@developer-routers/app/globals.css";

export async function generateMetadata() {
  return {
    ...globalMetadata,
  } as Metadata;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="p-5">
        <NavBar />
        <main className="flex flex-col p-3 h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "@assets/scss/_global.scss";
import Header from "@components/portal/Header";
import Footer from "@components/portal/Footer";

export const metadata: Metadata = {
  title: "Developer Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

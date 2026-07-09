import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { schoolInfo } from "@/data/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${schoolInfo.nameTh} | ${schoolInfo.nameEn}`,
    template: `%s | ${schoolInfo.nameTh}`,
  },
  description:
    "เว็บไซต์ทางการโรงเรียนประชารัฐพัฒนศึกษา สำหรับประชาสัมพันธ์ข่าวสาร กิจกรรม ดาวน์โหลดเอกสาร และช่องทางติดต่อโรงเรียน",
  openGraph: {
    title: schoolInfo.nameTh,
    description:
      "เว็บไซต์ทางการโรงเรียนประชารัฐพัฒนศึกษา สังกัดสำนักงานเขตพื้นที่การศึกษามัธยมศึกษากาฬสินธุ์",
    images: ["/images/og-placeholder.svg"],
    locale: "th_TH",
    type: "website",
  },
  icons: {
    icon: "/images/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className="min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

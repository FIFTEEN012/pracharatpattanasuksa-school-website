import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { ContactPanel } from "@/components/ContactPanel";
import { PageHeader } from "@/components/PageHeader";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "ติดต่อเรา",
  description: "ช่องทางติดต่อ ที่อยู่ แผนที่ และฟอร์มติดต่อโรงเรียนประชารัฐพัฒนศึกษา",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="ติดต่อเรา"
        description="สอบถามข้อมูล ติดต่อประสานงาน หรือส่งข้อความถึงโรงเรียนประชารัฐพัฒนศึกษา"
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle title="ข้อมูลติดต่อและแผนที่" />
        <ContactPanel />

        <div className="mt-10">
          <SectionTitle
            title="ฟอร์มติดต่อโรงเรียน"
            description="ฟอร์มนี้เป็น mock interaction สำหรับหน้าเว็บไซต์ รอเชื่อมต่อระบบรับข้อความจริง"
          />
          <ContactForm />
        </div>
      </section>
    </>
  );
}

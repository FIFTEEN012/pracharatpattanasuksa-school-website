import type { Metadata } from "next";
import { DownloadTable } from "@/components/DownloadTable";
import { PageHeader } from "@/components/PageHeader";
import { SectionTitle } from "@/components/SectionTitle";
import { downloads } from "@/data/site";

export const metadata: Metadata = {
  title: "ดาวน์โหลดเอกสาร",
  description: "ตารางเอกสารดาวน์โหลด แบบฟอร์มราชการ เอกสารนักเรียน เอกสารครู และแผนปฏิบัติการ",
};

export default function DownloadsPage() {
  return (
    <>
      <PageHeader
        title="ดาวน์โหลดเอกสาร"
        description="รวมแบบฟอร์มและเอกสารสำคัญของโรงเรียน โดยใช้ลิงก์ placeholder จนกว่าจะอัปโหลดไฟล์จริง"
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle
          title="รายการเอกสาร"
          description="สามารถแก้ไขชื่อเอกสาร หมวดหมู่ วันที่เผยแพร่ และลิงก์ดาวน์โหลดได้จากไฟล์ data"
        />
        <DownloadTable items={downloads} />
      </section>
    </>
  );
}

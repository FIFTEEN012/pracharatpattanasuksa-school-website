import type { Metadata } from "next";
import { ActivityCard } from "@/components/ActivityCard";
import { PageHeader } from "@/components/PageHeader";
import { SectionTitle } from "@/components/SectionTitle";
import { activities } from "@/data/site";

export const metadata: Metadata = {
  title: "กิจกรรมโรงเรียน",
  description: "แกลเลอรีและรายการกิจกรรมของโรงเรียนประชารัฐพัฒนศึกษา",
};

export default function ActivitiesPage() {
  return (
    <>
      <PageHeader
        title="กิจกรรมโรงเรียน"
        description="รวบรวมกิจกรรมสำคัญของโรงเรียน พร้อมพื้นที่รออัปโหลดภาพกิจกรรมจริง"
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle
          title="แกลเลอรีกิจกรรม"
          description="ใช้ภาพ placeholder ก่อน เมื่อต้องการเผยแพร่จริงสามารถเปลี่ยนภาพและคำอธิบายในไฟล์ data ได้"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((item) => (
            <ActivityCard key={item.title} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { NewsFilterList } from "@/components/NewsFilterList";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "ข่าวประชาสัมพันธ์",
  description: "ข่าวประชาสัมพันธ์ ประกาศ กิจกรรมโรงเรียน และข้อมูลรับสมัครนักเรียนของโรงเรียนประชารัฐพัฒนศึกษา",
};

export default function NewsPage() {
  return (
    <>
      <PageHeader
        title="ข่าวประชาสัมพันธ์"
        description="ติดตามข่าวทั่วไป กิจกรรมโรงเรียน ประกาศ และข้อมูลรับสมัครนักเรียน"
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <NewsFilterList />
      </section>
    </>
  );
}

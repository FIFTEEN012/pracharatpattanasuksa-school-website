import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PersonnelCard } from "@/components/PersonnelCard";
import { SectionTitle } from "@/components/SectionTitle";
import { director, personnelGroups } from "@/data/site";

export const metadata: Metadata = {
  title: "ผู้บริหารและบุคลากร",
  description: "ข้อมูลผู้บริหารและบุคลากรของโรงเรียนประชารัฐพัฒนศึกษา พร้อมพื้นที่ placeholder สำหรับแก้ไขภายหลัง",
};

export default function PersonnelPage() {
  return (
    <>
      <PageHeader
        title="ผู้บริหารและบุคลากร"
        description="ข้อมูลบุคลากรเป็น placeholder เพื่อรอเพิ่มชื่อ ตำแหน่ง และภาพถ่ายจริงจากโรงเรียน"
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle
          title="ผู้บริหารสถานศึกษา"
          description="กรุณาแทนที่ข้อมูลตัวอย่างด้วยข้อมูลผู้บริหารจริงเมื่อพร้อมเผยแพร่"
        />
        <PersonnelCard member={director} featured />

        <div className="mt-12 grid gap-8">
          {personnelGroups.map((group) => (
            <section key={group.groupName}>
              <SectionTitle title={group.groupName} />
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {group.members.map((member, index) => (
                  <PersonnelCard key={`${group.groupName}-${index}`} member={member} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}

import { ActivityCard } from "@/components/ActivityCard";
import { ContactPanel } from "@/components/ContactPanel";
import { Hero } from "@/components/Hero";
import { NewsCard } from "@/components/NewsCard";
import { QuickLinks } from "@/components/QuickLinks";
import { SectionTitle } from "@/components/SectionTitle";
import { StatsStrip } from "@/components/StatsStrip";
import { activities, news, schoolInfo } from "@/data/site";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="-mt-2">
        <StatsStrip />
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle
          title="ข่าวประชาสัมพันธ์"
          description="ติดตามประกาศ ข่าวสาร และข้อมูลสำคัญจากโรงเรียนประชารัฐพัฒนศึกษา"
          action={{ label: "ดูทั้งหมด", href: "/news" }}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {news.slice(0, 4).map((item) => (
            <NewsCard key={item.slug} item={item} />
          ))}
        </div>
      </section>

      <section className="bg-school-light/70 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="กิจกรรมเด่น"
            description="ภาพรวมกิจกรรมเพื่อส่งเสริมผู้เรียน คุณธรรม จิตอาสา และความร่วมมือกับชุมชน"
            action={{ label: "ดูกิจกรรมทั้งหมด", href: "/activities" }}
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {activities.slice(0, 4).map((item) => (
              <ActivityCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="rounded-md border border-school-line bg-white p-6 shadow-sm">
          <SectionTitle
            title="แนะนำโรงเรียน"
            description="โรงเรียนประชารัฐพัฒนศึกษาเป็นสถานศึกษาที่มุ่งพัฒนาผู้เรียนให้มีความรู้ คุณธรรม มีวินัย และมีจิตอาสา พร้อมดำรงชีวิตในสังคมอย่างมีคุณภาพ"
          />
          <div className="grid gap-3 text-sm leading-7 text-school-muted">
            <p>
              ข้อมูลประวัติ วิสัยทัศน์ พันธกิจ และแผนพัฒนาสถานศึกษายังเป็นข้อความตัวอย่าง
              เพื่อรอเพิ่มข้อมูลจริงจากโรงเรียน
            </p>
            <p>
              คำขวัญของโรงเรียนคือ <strong className="text-school-purple">{schoolInfo.motto}</strong>{" "}
              และอัตลักษณ์คือ <strong className="text-school-purple">{schoolInfo.identity}</strong>
            </p>
          </div>
        </div>
        <div>
          <SectionTitle title="ลิงก์ด่วน" description="เข้าถึงระบบและข้อมูลสำคัญได้อย่างรวดเร็ว" />
          <QuickLinks />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <SectionTitle title="ติดต่อโรงเรียน" description="ช่องทางติดต่อและตำแหน่งที่ตั้งของโรงเรียน" />
        <ContactPanel />
      </section>
    </>
  );
}

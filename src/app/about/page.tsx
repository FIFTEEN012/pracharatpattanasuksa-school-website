import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SectionTitle } from "@/components/SectionTitle";
import { schoolInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "ข้อมูลโรงเรียน",
  description: "ประวัติ วิสัยทัศน์ พันธกิจ เป้าประสงค์ และข้อมูลสำคัญของโรงเรียนประชารัฐพัฒนศึกษา",
};

const missions = [
  "จัดการศึกษาให้ผู้เรียนมีคุณภาพตามมาตรฐานการศึกษา",
  "ส่งเสริมคุณธรรม จริยธรรม ระเบียบวินัย และจิตอาสา",
  "พัฒนาครูและบุคลากรให้มีความรู้ ทักษะ และสมรรถนะตามวิชาชีพ",
  "ส่งเสริมการมีส่วนร่วมของผู้ปกครอง ชุมชน และภาคีเครือข่าย",
];

const goals = [
  "ผู้เรียนมีผลสัมฤทธิ์ทางการเรียนและทักษะชีวิตที่เหมาะสม",
  "โรงเรียนมีระบบบริหารจัดการที่โปร่งใส มีประสิทธิภาพ และตรวจสอบได้",
  "สถานศึกษามีสภาพแวดล้อมที่ปลอดภัย เอื้อต่อการเรียนรู้",
  "ชุมชนมีส่วนร่วมในการพัฒนาคุณภาพการศึกษาอย่างต่อเนื่อง",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="ข้อมูลโรงเรียน"
        description="ข้อมูลพื้นฐาน ประวัติ และทิศทางการพัฒนาของโรงเรียนประชารัฐพัฒนศึกษา"
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="h-fit rounded-md border border-school-line bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-school-ink">ข้อมูลพื้นฐาน</h2>
            <dl className="mt-4 grid gap-4 text-sm">
              <div>
                <dt className="font-medium text-school-purple">ชื่อโรงเรียน</dt>
                <dd className="mt-1 text-school-muted">{schoolInfo.nameTh}</dd>
              </div>
              <div>
                <dt className="font-medium text-school-purple">ชื่ออังกฤษ</dt>
                <dd className="mt-1 text-school-muted">{schoolInfo.nameEn}</dd>
              </div>
              <div>
                <dt className="font-medium text-school-purple">สังกัด</dt>
                <dd className="mt-1 text-school-muted">{schoolInfo.affiliation}</dd>
              </div>
              <div>
                <dt className="font-medium text-school-purple">ที่ตั้ง</dt>
                <dd className="mt-1 text-school-muted">{schoolInfo.address}</dd>
              </div>
            </dl>
          </aside>

          <div className="grid gap-6">
            <div className="rounded-md border border-school-line bg-white p-6 shadow-sm">
              <SectionTitle title="ประวัติโรงเรียน" />
              <p className="text-sm leading-8 text-school-muted">
                โรงเรียนประชารัฐพัฒนศึกษาเป็นสถานศึกษาที่ให้บริการทางการศึกษาแก่ผู้เรียนในพื้นที่
                อำเภอสมเด็จ จังหวัดกาฬสินธุ์ โดยมุ่งพัฒนาผู้เรียนให้มีความรู้คู่คุณธรรม
                มีระเบียบวินัย และมีจิตอาสาต่อสังคม
              </p>
              <p className="mt-3 text-sm leading-8 text-school-muted">
                ข้อความส่วนนี้เป็นข้อมูลตัวอย่างแบบเป็นทางการ รอเพิ่มประวัติโรงเรียนฉบับจริง
                ปีที่ก่อตั้ง ผู้บริหารในอดีต และเหตุการณ์สำคัญของสถานศึกษา
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-md border border-school-line bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-school-ink">วิสัยทัศน์</h2>
                <p className="mt-3 text-sm leading-8 text-school-muted">
                  โรงเรียนมุ่งพัฒนาผู้เรียนให้มีคุณภาพตามมาตรฐานการศึกษา
                  เป็นคนดี มีความรู้ มีทักษะชีวิต และดำรงตนอย่างมีความสุขในสังคม
                </p>
              </div>
              <div className="rounded-md border border-school-line bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-school-ink">พันธกิจ</h2>
                <ol className="mt-3 grid list-decimal gap-2 pl-5 text-sm leading-7 text-school-muted">
                  {missions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="rounded-md border border-school-line bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-school-ink">เป้าประสงค์</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {goals.map((item) => (
                  <div key={item} className="rounded-md bg-school-light p-4 text-sm leading-7 text-school-muted">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-md border border-school-line bg-white p-5 shadow-sm">
                <h2 className="font-semibold text-school-ink">คำขวัญ</h2>
                <p className="mt-2 text-lg font-semibold text-school-purple">{schoolInfo.motto}</p>
              </div>
              <div className="rounded-md border border-school-line bg-white p-5 shadow-sm">
                <h2 className="font-semibold text-school-ink">ปรัชญา</h2>
                <p className="mt-2 text-lg font-semibold text-school-purple">{schoolInfo.philosophy}</p>
              </div>
              <div className="rounded-md border border-school-line bg-white p-5 shadow-sm">
                <h2 className="font-semibold text-school-ink">อัตลักษณ์</h2>
                <p className="mt-2 text-lg font-semibold text-school-purple">{schoolInfo.identity}</p>
              </div>
            </div>

            <div className="rounded-md border border-school-line bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-school-ink">สีประจำโรงเรียน</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {schoolInfo.colors.map((color) => (
                  <div key={color.name} className="flex gap-3 rounded-md bg-school-light p-4">
                    <span
                      className="h-12 w-12 rounded-md border border-white shadow-sm"
                      style={{ backgroundColor: color.value }}
                    />
                    <div>
                      <p className="font-semibold text-school-ink">{color.name}</p>
                      <p className="mt-1 text-sm leading-6 text-school-muted">{color.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

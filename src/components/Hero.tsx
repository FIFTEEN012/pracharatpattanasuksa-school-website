import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { schoolInfo } from "@/data/site";
import { MediaFrame } from "./MediaFrame";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-16">
        <div className="animate-fade-up">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-school-ink sm:text-5xl lg:text-6xl">
            {schoolInfo.nameTh}
          </h1>
          <p className="mt-3 text-xl font-medium text-school-deep sm:text-2xl">
            {schoolInfo.nameEn}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-school-muted">
            {schoolInfo.affiliation}
          </p>
          <div className="mt-5 grid gap-3 text-sm text-school-ink sm:grid-cols-2">
            <p className="rounded-md border border-school-line bg-white px-4 py-3">
              คำขวัญ: <span className="font-semibold text-school-purple">{schoolInfo.motto}</span>
            </p>
            <p className="rounded-md border border-school-line bg-white px-4 py-3">
              อัตลักษณ์: <span className="font-semibold text-school-purple">{schoolInfo.identity}</span>
            </p>
          </div>
          <p className="mt-5 flex items-start gap-2 text-sm leading-7 text-school-muted">
            <MapPin className="mt-1 h-4 w-4 shrink-0 text-school-purple" />
            {schoolInfo.address}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/news"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-school-purple px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-school-deep"
            >
              ดูข่าวประชาสัมพันธ์
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-school-yellow px-5 py-3 text-sm font-semibold text-school-deep shadow-sm transition hover:-translate-y-0.5 hover:bg-yellow-300"
            >
              ติดต่อโรงเรียน
            </Link>
          </div>
        </div>

        <div className="relative animate-fade-up lg:pl-6" style={{ animationDelay: "120ms" }}>
          <MediaFrame
            src={schoolInfo.heroImage}
            label="รออัปโหลดภาพอาคารเรียน"
            className="aspect-[16/10] shadow-soft"
          />
          <div className="absolute -bottom-4 left-6 right-6 h-8 rounded-md bg-school-yellow" />
          <div className="absolute -bottom-7 left-14 right-14 h-8 rounded-md bg-school-purple" />
        </div>
      </div>
    </section>
  );
}

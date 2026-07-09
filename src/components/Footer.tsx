import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { navItems, quickLinks, schoolInfo } from "@/data/site";
import { SchoolMark } from "./SchoolMark";

export function Footer() {
  return (
    <footer className="bg-school-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <SchoolMark compact />
            <div>
              <p className="font-semibold">{schoolInfo.nameTh}</p>
              <p className="text-sm text-white/70">{schoolInfo.nameEn}</p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-7 text-white/75">
            {schoolInfo.affiliation}
          </p>
          <p className="mt-3 flex gap-2 text-sm leading-7 text-white/75">
            <MapPin className="mt-1 h-4 w-4 shrink-0 text-school-yellow" />
            {schoolInfo.address}
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold text-school-yellow">เมนู</h2>
          <div className="grid gap-2 text-sm text-white/75">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold text-school-yellow">ลิงก์ด่วน</h2>
          <div className="grid gap-2 text-sm text-white/75">
            {quickLinks.map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold text-school-yellow">ติดต่อ</h2>
          <div className="grid gap-3 text-sm text-white/75">
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-school-yellow" />
              {schoolInfo.phone}
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-school-yellow" />
              {schoolInfo.email}
            </p>
            <p className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-school-yellow" />
              {schoolInfo.facebook}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/65">
        Copyright © 2026 {schoolInfo.nameTh}. สงวนลิขสิทธิ์.
      </div>
    </footer>
  );
}

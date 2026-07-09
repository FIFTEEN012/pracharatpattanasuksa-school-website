import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { schoolInfo } from "@/data/site";
import { MediaFrame } from "./MediaFrame";

export function ContactPanel() {
  const rows = [
    { icon: MapPin, label: "ที่อยู่", value: schoolInfo.address },
    { icon: Phone, label: "โทรศัพท์", value: schoolInfo.phone },
    { icon: Mail, label: "อีเมล", value: schoolInfo.email },
    { icon: MessageCircle, label: "Facebook", value: schoolInfo.facebook },
    { icon: Clock, label: "เวลาทำการ", value: schoolInfo.officeHours },
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-md bg-school-deep p-5 text-white">
        <h3 className="text-xl font-semibold">ช่องทางติดต่อโรงเรียน</h3>
        <div className="mt-5 grid gap-4">
          {rows.map((row) => {
            const Icon = row.icon;
            return (
              <div key={row.label} className="flex gap-3 text-sm leading-7 text-white/78">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-white/10 text-school-yellow">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-semibold text-white">{row.label}</p>
                  <p>{row.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <MediaFrame
        src="/images/map-placeholder.svg"
        label="รอเพิ่ม Google Maps Embed"
        className="min-h-72"
      />
    </div>
  );
}

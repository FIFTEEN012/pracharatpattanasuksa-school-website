import { CalendarDays } from "lucide-react";
import type { ActivityItem } from "@/data/site";
import { MediaFrame } from "./MediaFrame";

export function ActivityCard({ item }: { item: ActivityItem }) {
  return (
    <article className="group overflow-hidden rounded-md border border-school-line bg-white transition hover:-translate-y-1 hover:shadow-soft">
      <MediaFrame
        src={item.image}
        label="รออัปโหลดภาพกิจกรรม"
        className="aspect-[4/3] rounded-none border-0 border-b border-school-line"
      />
      <div className="p-4">
        <p className="mb-2 flex items-center gap-1 text-xs font-medium text-school-purple">
          <CalendarDays className="h-3.5 w-3.5" />
          {item.date}
        </p>
        <h3 className="text-base font-semibold leading-7 text-school-ink">{item.title}</h3>
        <p className="mt-2 text-sm leading-7 text-school-muted">{item.description}</p>
      </div>
    </article>
  );
}

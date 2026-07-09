import { CalendarDays, ChevronRight } from "lucide-react";
import Link from "next/link";
import type { NewsItem } from "@/data/site";
import { MediaFrame } from "./MediaFrame";

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="group overflow-hidden rounded-md border border-school-line bg-white transition hover:-translate-y-1 hover:shadow-soft">
      <MediaFrame
        src={item.image}
        label="รออัปโหลดภาพข่าว"
        className="aspect-[4/3] rounded-none border-0 border-b border-school-line"
      />
      <div className="p-4">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-school-muted">
          <span className="rounded bg-school-light px-2 py-1 font-medium text-school-purple">
            {item.category}
          </span>
          <span className="flex items-center gap-1">
            <CalendarDays className="h-3.5 w-3.5" />
            {item.date}
          </span>
        </div>
        <h3 className="line-clamp-2 text-base font-semibold leading-7 text-school-ink">
          {item.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-7 text-school-muted">
          {item.excerpt}
        </p>
        <Link
          href={`/news/${item.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-school-purple transition group-hover:gap-2"
        >
          อ่านต่อ
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

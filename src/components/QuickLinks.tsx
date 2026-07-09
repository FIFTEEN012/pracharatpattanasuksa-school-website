import { BookOpen, Download, ExternalLink, MessageCircle } from "lucide-react";
import Link from "next/link";
import { quickLinks } from "@/data/site";

const icons = [ExternalLink, BookOpen, Download, MessageCircle];

export function QuickLinks() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {quickLinks.map((item, index) => {
        const Icon = icons[index] ?? ExternalLink;
        return (
          <Link
            key={item.label}
            href={item.href}
            className="group rounded-md border border-school-line bg-white p-4 transition hover:-translate-y-1 hover:border-school-purple hover:shadow-soft"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-school-light text-school-purple">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-xs text-school-muted">{item.status}</span>
            </div>
            <h3 className="font-semibold text-school-ink">{item.label}</h3>
            <p className="mt-2 text-sm leading-6 text-school-muted">{item.description}</p>
          </Link>
        );
      })}
    </div>
  );
}

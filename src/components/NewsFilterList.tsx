"use client";

import { useMemo, useState } from "react";
import { news, newsCategories, type NewsCategory } from "@/data/site";
import { cn } from "@/lib/utils";
import { NewsCard } from "./NewsCard";

const allLabel = "ทั้งหมด" as const;

export function NewsFilterList() {
  const [active, setActive] = useState<NewsCategory | typeof allLabel>(allLabel);
  const categories: Array<NewsCategory | typeof allLabel> = [
    allLabel,
    ...newsCategories,
  ];

  const visibleNews = useMemo(() => {
    if (active === allLabel) {
      return news;
    }
    return news.filter((item) => item.category === active);
  }, [active]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn(
              "rounded-md border px-4 py-2 text-sm font-medium transition",
              active === category
                ? "border-school-purple bg-school-purple text-white"
                : "border-school-line bg-white text-school-muted hover:border-school-purple hover:text-school-purple",
            )}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleNews.map((item) => (
          <NewsCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}

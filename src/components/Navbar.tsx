"use client";

import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, schoolInfo } from "@/data/site";
import { cn } from "@/lib/utils";
import { SchoolMark } from "./SchoolMark";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-school-line/80 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <SchoolMark compact />
          <div className="leading-tight">
            <p className="text-sm font-semibold text-school-deep sm:text-base">
              {schoolInfo.nameTh}
            </p>
            <p className="hidden text-xs text-school-muted sm:block">
              {schoolInfo.nameEn}
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-school-ink transition hover:bg-school-light hover:text-school-purple",
                  active && "bg-school-light text-school-purple",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <button
            className="ml-2 grid h-9 w-9 place-items-center rounded-md border border-school-line text-school-muted transition hover:border-school-purple hover:text-school-purple"
            aria-label="ค้นหา"
            type="button"
          >
            <Search className="h-4 w-4" />
          </button>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-md border border-school-line text-school-deep lg:hidden"
          type="button"
          aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-school-line bg-white px-4 py-3 shadow-soft lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-3 text-sm font-medium text-school-ink transition hover:bg-school-light hover:text-school-purple",
                    active && "bg-school-light text-school-purple",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

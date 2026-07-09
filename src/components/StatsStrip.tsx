import { Building2, GraduationCap, School, UsersRound } from "lucide-react";
import { schoolStats } from "@/data/site";

const icons = [UsersRound, GraduationCap, UsersRound, Building2];

export function StatsStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-3 rounded-md border border-school-line bg-white p-3 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
        {schoolStats.map((item, index) => {
          const Icon = icons[index] ?? School;
          return (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-md bg-school-light px-4 py-4"
            >
              <span className="grid h-11 w-11 place-items-center rounded-md bg-white text-school-purple">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-school-muted">{item.label}</p>
                <p className="text-xl font-semibold text-school-deep">
                  {item.value} <span className="text-sm font-medium">{item.unit}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

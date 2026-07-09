import type { PersonnelMember } from "@/data/site";
import { MediaFrame } from "./MediaFrame";

export function PersonnelCard({
  member,
  featured = false,
}: {
  member: PersonnelMember;
  featured?: boolean;
}) {
  return (
    <article
      className={`rounded-md border border-school-line bg-white p-4 text-center transition hover:-translate-y-1 hover:shadow-soft ${
        featured ? "mx-auto max-w-sm border-school-purple/30" : ""
      }`}
    >
      <MediaFrame
        src={member.image}
        label="รออัปโหลดภาพบุคลากร"
        className="mx-auto mb-4 aspect-square w-full max-w-48"
      />
      <h3 className="text-lg font-semibold text-school-ink">{member.name}</h3>
      <p className="mt-1 text-sm leading-6 text-school-muted">{member.position}</p>
    </article>
  );
}

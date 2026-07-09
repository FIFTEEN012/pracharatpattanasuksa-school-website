export function SchoolMark({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`grid shrink-0 place-items-center rounded-full border-2 border-school-yellow bg-white text-school-deep shadow-sm ${
        compact ? "h-10 w-10 text-[10px]" : "h-12 w-12 text-xs"
      }`}
      aria-label="ตราโรงเรียนรออัปโหลด"
    >
      <span className="font-semibold leading-none">ตรา</span>
    </div>
  );
}

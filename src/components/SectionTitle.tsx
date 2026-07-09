import Link from "next/link";

type SectionTitleProps = {
  title: string;
  description?: string;
  action?: {
    label: string;
    href: string;
  };
};

export function SectionTitle({ title, description, action }: SectionTitleProps) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-school-ink sm:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="mt-2 max-w-2xl text-sm leading-7 text-school-muted sm:text-base">
            {description}
          </p>
        )}
      </div>
      {action && (
        <Link
          href={action.href}
          className="inline-flex w-fit items-center justify-center rounded-md border border-school-purple px-4 py-2 text-sm font-medium text-school-purple transition hover:bg-school-purple hover:text-white"
        >
          {action.label}
        </Link>
      )}
    </div>
  );
}

type PageHeaderProps = {
  title: string;
  description: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="bg-school-deep">
      <div className="mx-auto max-w-7xl px-4 py-10 text-white sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-white/75 sm:text-base">
          {description}
        </p>
      </div>
    </section>
  );
}

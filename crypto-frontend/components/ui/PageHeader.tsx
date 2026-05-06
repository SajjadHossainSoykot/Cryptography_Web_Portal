type PageHeaderProps = {
  badge?: string;
  title: string;
  description: string;
};

export function PageHeader({ badge, title, description }: PageHeaderProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-16 pb-10">
      {badge ? (
        <div className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-600 dark:text-cyan-200">
          {badge}
        </div>
      ) : null}

      <h1 className="max-w-5xl text-4xl font-bold tracking-tight text-[var(--foreground)] md:text-5xl">
        {title}
      </h1>

      <p className="mt-5 max-w-6xl text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
        {description}
      </p>
    </section>
  );
}
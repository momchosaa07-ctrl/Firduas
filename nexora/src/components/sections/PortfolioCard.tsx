import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/config/portfolio";
import { getService } from "@/config/services";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { cn } from "@/lib/cn";

/**
 * Visual placeholder used while there is no real project photography.
 * A generated panel is more honest than a stock photo of someone else's work,
 * and costs nothing to load. Swap in a real image by setting `project.image`.
 */
function ProjectThumbnail({ project }: { project: Project }) {
  const primary = project.services[0] ?? "website";

  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`${project.name} — ${project.category} project`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 grid place-items-center bg-gradient-to-br from-surface-2 to-bg"
    >
      <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_65%_65%_at_50%_50%,black,transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_45%,color-mix(in_oklab,var(--color-accent)_14%,transparent),transparent_70%)]" />
      <span className="relative grid size-14 place-items-center rounded-2xl border border-line bg-bg/80 text-accent backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
        <ServiceIcon id={primary} className="size-6" />
      </span>
    </div>
  );
}

export function PortfolioCard({ project }: { project: Project }) {
  const hasCaseStudy = Boolean(project.caseStudy);
  const href = `/work/${project.slug}`;

  const body = (
    <>
      <div className="relative aspect-16/10 overflow-hidden rounded-t-2xl border-b border-line">
        <ProjectThumbnail project={project} />

        {project.placeholder ? (
          <span className="absolute top-3 left-3 rounded-full border border-line bg-bg/85 px-2.5 py-1 font-sans text-[0.62rem] font-medium tracking-[0.12em] text-fg-subtle uppercase backdrop-blur-sm">
            Sample project
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-[0.7rem] tracking-[0.12em] text-fg-subtle uppercase">
          <span className="text-accent">{project.category}</span>
          <span aria-hidden="true">·</span>
          <span>{project.sector}</span>
        </div>

        <h3 className="mt-3 font-display text-[1.15rem] tracking-tight text-fg transition-colors group-hover:text-accent">
          {project.name}
        </h3>

        <p className="mt-2.5 text-[0.875rem] leading-relaxed text-fg-muted">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.services.map((id) => (
            <li
              key={id}
              className="rounded-full border border-line bg-bg/60 px-2.5 py-0.5 text-[0.72rem] text-fg-muted"
            >
              {getService(id).shortName}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center gap-1.5 pt-6 text-[0.82rem] font-medium text-fg-muted transition-colors group-hover:text-accent">
          {hasCaseStudy ? "View project" : "Case study coming soon"}
          {hasCaseStudy ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
            </svg>
          ) : null}
        </div>
      </div>
    </>
  );

  const classes = cn(
    "group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/40 transition-all duration-300",
    hasCaseStudy
      ? "hover:-translate-y-1 hover:border-line-strong hover:bg-surface"
      : "cursor-default",
  );

  if (!hasCaseStudy) {
    return <article className={classes}>{body}</article>;
  }

  return (
    <article className={classes}>
      <Link href={href} className="flex h-full flex-col">
        {body}
      </Link>
    </article>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projectsWithCaseStudies } from "@/config/portfolio";
import { getService } from "@/config/services";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";

/**
 * Case study detail page. The structure — Challenge, Solution, Result,
 * Services — is ready for real content; what is in it today is placeholder
 * text, clearly labelled as such.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return projectsWithCaseStudies().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return buildMetadata({ title: "Not found", noIndex: true });

  return buildMetadata({
    title: `${project.name} — ${project.category}`,
    description: project.description,
    path: `/work/${project.slug}`,
    // Placeholder case studies stay out of the index until they are real.
    noIndex: project.placeholder,
  });
}

export default async function CaseStudyRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.caseStudy) notFound();

  const { caseStudy } = project;
  const blocks = [
    { heading: "The Challenge", body: caseStudy.challenge },
    { heading: "The Solution", body: caseStudy.solution },
    { heading: "The Result", body: caseStudy.result },
  ];

  return (
    <>
      <article className="pt-32 pb-20 sm:pt-40">
        <Container className="max-w-4xl">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-[0.85rem] text-fg-muted transition-colors hover:text-accent"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="size-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13.5 8h-11M7 3.5 2.5 8 7 12.5" />
            </svg>
            All work
          </Link>

          <div className="mt-8 flex items-center gap-2 text-[0.72rem] tracking-[0.12em] text-fg-subtle uppercase">
            <span className="text-accent">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.sector}</span>
          </div>

          <h1 className="mt-4 text-h1 text-gradient">{project.name}</h1>
          <p className="mt-5 max-w-2xl text-lead text-fg-muted">
            {project.description}
          </p>

          {project.placeholder ? (
            <div className="mt-8 rounded-xl border border-dashed border-line-strong bg-surface/40 px-5 py-4">
              <p className="text-[0.85rem] leading-relaxed text-fg-muted">
                <span className="font-medium text-fg">Placeholder case study.</span>{" "}
                This page shows the structure a real case study will follow. The
                sections below are not describing a real client engagement, and
                no result is being claimed.
              </p>
            </div>
          ) : null}

          <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            <div className="bg-bg p-6">
              <dt className="text-[0.7rem] tracking-[0.14em] text-fg-subtle uppercase">
                Category
              </dt>
              <dd className="mt-2 font-display text-[1.05rem] tracking-tight text-fg">
                {project.category}
              </dd>
            </div>
            <div className="bg-bg p-6">
              <dt className="text-[0.7rem] tracking-[0.14em] text-fg-subtle uppercase">
                Sector
              </dt>
              <dd className="mt-2 font-display text-[1.05rem] tracking-tight text-fg">
                {project.sector}
              </dd>
            </div>
            <div className="bg-bg p-6">
              <dt className="text-[0.7rem] tracking-[0.14em] text-fg-subtle uppercase">
                Services
              </dt>
              <dd className="mt-2.5 flex flex-wrap gap-1.5">
                {project.services.map((id) => (
                  <Link
                    key={id}
                    href={`/${getService(id).slug}`}
                    className="flex items-center gap-1.5 rounded-full border border-line bg-surface/60 py-1 pr-2.5 pl-2 text-[0.75rem] text-fg-muted transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    <ServiceIcon id={id} className="size-3" />
                    {getService(id).shortName}
                  </Link>
                ))}
              </dd>
            </div>
          </dl>

          <div className="mt-14 space-y-12">
            {blocks.map((block) => (
              <section key={block.heading}>
                <h2 className="text-h3 text-fg">{block.heading}</h2>
                <p className="mt-4 text-[0.975rem] leading-relaxed text-fg-muted">
                  {block.body}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-14 border-t border-line pt-10">
            <h2 className="text-h3 text-fg">Want something like this?</h2>
            <p className="mt-3 max-w-xl text-[0.95rem] text-fg-muted">
              Tell us what you are trying to improve and we will come back with a
              recommendation and a realistic price.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                href="/#contact"
                withArrow
                event="cta_click"
                eventProps={{ location: "case_study", project: project.slug }}
              >
                Get Started
              </Button>
              <Button href="/#work" variant="secondary">
                See more work
              </Button>
            </div>
          </div>
        </Container>
      </article>

      <ConsultationCTA />
    </>
  );
}

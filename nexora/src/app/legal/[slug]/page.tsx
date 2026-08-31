import { notFound } from "next/navigation";
import Link from "next/link";
import { getLegalPage, legalPages, legalPlaceholders } from "@/config/legal";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import type { Metadata } from "next";

export function generateStaticParams() {
  return legalPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getLegalPage(slug);
  if (!page) return buildMetadata({ title: "Not found", noIndex: true });

  return buildMetadata({
    title: page.title,
    description: page.description,
    path: `/legal/${page.slug}`,
    // Draft policies should not be indexed.
    noIndex: !page.reviewed,
  });
}

export default async function LegalPageRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getLegalPage(slug);
  if (!page) notFound();

  return (
    <article className="pt-32 pb-24 sm:pt-40">
      <Container className="max-w-3xl">
        <Link
          href="/"
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
          Back to home
        </Link>

        <h1 className="mt-8 text-h1 text-gradient">{page.title}</h1>
        <p className="mt-5 text-lead text-fg-muted">{page.intro}</p>

        {!page.reviewed ? (
          <div className="mt-8 rounded-xl border border-line bg-surface/50 p-6">
            <h2 className="font-display text-[1.02rem] tracking-tight text-fg">
              This is a draft, not legal advice.
            </h2>
            <p className="mt-2.5 text-[0.875rem] leading-relaxed text-fg-muted">
              This page is a working placeholder. It has not been written or
              reviewed by a lawyer and it is not a legally binding document. It
              sets out the structure and the commercial terms as we intend them,
              so that final text can be drafted against it.
            </p>
            <h3 className="mt-5 font-sans text-[0.68rem] font-semibold tracking-[0.16em] text-fg-subtle uppercase">
              Still to be filled in
            </h3>
            <ul className="mt-3 grid gap-1.5 text-[0.82rem] text-fg-muted sm:grid-cols-2">
              {legalPlaceholders.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-line-strong" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-12 space-y-10">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-h3 text-fg">{section.heading}</h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[0.95rem] leading-relaxed text-fg-muted"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <nav
          aria-label="Other legal pages"
          className="mt-16 border-t border-line pt-8"
        >
          <h2 className="font-sans text-[0.68rem] font-semibold tracking-[0.16em] text-fg-subtle uppercase">
            Other policies
          </h2>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {legalPages
              .filter((other) => other.slug !== page.slug)
              .map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/legal/${other.slug}`}
                    className="text-[0.875rem] text-fg-muted transition-colors hover:text-accent"
                  >
                    {other.title}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </Container>
    </article>
  );
}

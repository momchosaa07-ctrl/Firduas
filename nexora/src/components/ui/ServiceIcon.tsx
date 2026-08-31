import type { ServiceId } from "@/config/services";
import { cn } from "@/lib/cn";

const paths: Record<ServiceId, React.ReactNode> = {
  website: (
    <>
      <rect x="2.75" y="4" width="18.5" height="15" rx="2.5" />
      <path d="M2.75 8.5h18.5M6 6.25h.01M8.5 6.25h.01" />
    </>
  ),
  logo: (
    <>
      <path d="M12 3.25 20 7.5v9L12 20.75 4 16.5v-9z" />
      <path d="M12 8.5 15.5 14h-7z" />
    </>
  ),
  automation: (
    <>
      <circle cx="5.5" cy="6" r="2.25" />
      <circle cx="18.5" cy="12" r="2.25" />
      <circle cx="5.5" cy="18" r="2.25" />
      <path d="M7.75 6h4.5a2 2 0 0 1 2 2v2.25M7.75 18h4.5a2 2 0 0 0 2-2v-2.25" />
    </>
  ),
  application: (
    <>
      <rect x="3" y="3.25" width="11" height="17.5" rx="2.5" />
      <path d="M17 8h4M17 12h4M17 16h4M7 17.5h3" />
    </>
  ),
};

export function ServiceIcon({
  id,
  className,
}: {
  id: ServiceId;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={cn("size-5", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[id]}
    </svg>
  );
}

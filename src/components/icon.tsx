import type { SVGProps } from "react";

const icons: Record<string, string> = {
  /* ── Navigation / UI ── */
  menu: "M4 6h16M4 12h16M4 18h16",
  x: "M18 6L6 18M6 6l12 12",
  "chevron-down": "M6 9l6 6 6-6",
  "chevron-right": "M9 18l6-6-6-6",
  "arrow-right": "M5 12h14M12 5l7 7-7 7",
  "external-link": "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3",
  check: "M20 6L9 17l-5-5",
  search: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",

  /* ── Service Icons ── */
  globe: "M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 014 9 15.3 15.3 0 01-4 9 15.3 15.3 0 01-4-9 15.3 15.3 0 014-9z",
  code: "M16 18l6-6-6-6M8 6l-6 6 6 6",
  smartphone: "M7 2h10a1 1 0 011 1v18a1 1 0 01-1 1H7a1 1 0 01-1-1V3a1 1 0 011-1zM12 18h.01",
  layers: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  sparkles: "M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3zM5 19l1 3 1-3 3-1-3-1-1-3-1 3-3 1 3 1z",
  wrench: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",

  /* ── Process Icons ── */
  palette: "M12 2a10 10 0 000 20 2 2 0 002-2v-.09a2 2 0 00-2-1.91H8.5a1.5 1.5 0 010-3H10a1 1 0 001-1V12a1 1 0 00-1-1H7.5a1.5 1.5 0 010-3H9a1 1 0 001-1V5.41a10 10 0 002 0z",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  rocket: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zM12 15l-3-3M22 2l-7.5 7.5M15 9a1 1 0 11-2 0 1 1 0 012 0z",

  /* ── Feature / Why Choose Us ── */
  zap: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  target: "M12 12m-2 0a2 2 0 104 0 2 2 0 10-4 0M12 12m-6 0a6 6 0 1012 0 6 6 0 10-12 0M12 12m-10 0a10 10 0 1020 0 10 10 0 10-20 0",
  "trending-up": "M23 6l-9.5 9.5-5-5L1 18",
  users: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
  clock: "M12 6v6l4 2M12 2a10 10 0 100 20 10 10 0 000-20z",
  "check-circle": "M22 11.08V12a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3",

  /* ── Contact ── */
  mail: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6",
  phone: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z",
  "map-pin": "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 7a3 3 0 100 6 3 3 0 000-6z",

  /* ── Tech Categories ── */
  monitor: "M2 3h20v14H2zM8 21h8M12 17v4",
  server: "M2 2h20v8H2zM2 14h20v8H2zM6 6h.01M6 18h.01",
  database: "M12 2C6.48 2 2 4.02 2 6.5v11C2 19.98 6.48 22 12 22s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2zM2 6.5C2 8.98 6.48 11 12 11s10-2.02 10-4.5M2 12c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5",
  cloud: "M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z",
  brain: "M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 017-7zM9 21h6M10 17v4M14 17v4",

  /* ── Admin ── */
  "bar-chart": "M12 20V10M18 20V4M6 20v-4",
  logout: "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9",
  trash: "M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2",
  eye: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 9a3 3 0 100 6 3 3 0 000-6z",
  filter: "M22 3H2l8 9.46V19l4 2v-8.54L22 3z",

  /* ── Misc ── */
  "quote": "M3 21c3 0 7-1 7-8V5c0-1.25-.8-2-2-2H5C3.8 3 3 3.8 3 5v6c0 1.25.8 2 2 2h2c0 4-3 6-3 6zM15 21c3 0 7-1 7-8V5c0-1.25-.8-2-2-2h-3c-1.2 0-2 .8-2 2v6c0 1.25.8 2 2 2h2c0 4-3 6-3 6z",
  "message-circle": "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z",
  "headphones": "M3 18v-6a9 9 0 0118 0v6M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z",
};

type IconName = keyof typeof icons;

interface IconProps extends SVGProps<SVGSVGElement> {
  name: string;
  size?: number;
}

export function Icon({ name, size = 24, className = "", ...props }: IconProps) {
  const path = icons[name as IconName];
  if (!path) return null;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {path.split(/(?=[A-Z])/).length > 1
        ? path.split("M").filter(Boolean).map((segment, i) => (
            <path key={i} d={`M${segment}`} />
          ))
        : <path d={path} />
      }
    </svg>
  );
}

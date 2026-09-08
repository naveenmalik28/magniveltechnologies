import React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export function GoogleLogo({ className = "h-8 w-auto", ...props }: LogoProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" {...props}>
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

export function MetaLogo({ className = "h-7 w-auto", ...props }: LogoProps) {
  return (
    <svg viewBox="0 0 100 68" className={className} aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="meta-grad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#0064e0" />
          <stop offset="50%" stopColor="#0064e0" />
          <stop offset="100%" stopColor="#007df1" />
        </linearGradient>
      </defs>
      <path
        fill="url(#meta-grad)"
        d="M50 33.7C46.8 24.3 40.5 17 32.7 17 21 17 13 26.2 13 38.3c0 10.8 7.3 19 16.9 19 8.2 0 15-5.9 20.1-15.3 5.1 9.4 11.9 15.3 20.1 15.3 9.6 0 16.9-8.2 16.9-19 0-12.1-8-21.3-19.7-21.3-7.8 0-14.1 7.3-17.3 17zm-18.7 14c-4.9 0-8.5-4.2-8.5-9.8 0-6.1 4.2-11.4 9.9-11.4 5.3 0 9.8 4.7 12.5 12.3-3.6 5.8-8.6 8.9-13.9 8.9zm37.4 0c-5.3 0-10.3-3.1-13.9-8.9 2.7-7.6 7.2-12.3 12.5-12.3 5.7 0 9.9 5.3 9.9 11.4 0 5.6-3.6 9.8-8.5 9.8z"
      />
    </svg>
  );
}

export function MicrosoftLogo({ className = "h-7 w-auto", ...props }: LogoProps) {
  return (
    <svg viewBox="0 0 88 88" className={className} aria-hidden="true" {...props}>
      <path fill="#F25022" d="M0 0h41.6v41.6H0z" />
      <path fill="#7FBA00" d="M46.4 0H88v41.6H46.4z" />
      <path fill="#00A4EF" d="M0 46.4h41.6V88H0z" />
      <path fill="#FFB900" d="M46.4 46.4H88V88H46.4z" />
    </svg>
  );
}

export function AWSLogo({ className = "h-7 w-auto", ...props }: LogoProps) {
  return (
    <svg viewBox="0 0 120 72" className={className} aria-hidden="true" {...props}>
      {/* "aws" text */}
      <path
        fill="#232F3E"
        d="M28.4 39.5c0 .9-.5 1.5-1.4 1.5h-4.3c-.9 0-1.5-.5-1.7-1.3l-1.3-5.2h-9.8l-1.3 5.2c-.2.8-.8 1.3-1.7 1.3H2.6c-.9 0-1.4-.6-1.4-1.5 0-.2.1-.5.2-.8L9.9 11.2c.4-1.3 1.5-2.2 2.9-2.2h5c1.4 0 2.5.9 2.9 2.2l8.5 27.5c.1.3.2.6.2.8zm-10.2-12.4l-3.3-12.7h-.2l-3.3 12.7h6.8zM61.1 39.5c0 .9-.6 1.5-1.6 1.5h-4.3c-.9 0-1.6-.6-1.8-1.5L48.1 19l-5.3 20.5c-.2.9-.9 1.5-1.8 1.5h-4.3c-1 0-1.6-.6-1.6-1.5 0-.3.1-.6.2-.9l7.7-27.4c.3-1.2 1.4-2.1 2.7-2.1h4.9c1.3 0 2.4.9 2.7 2.1l5.5 19.8h.2l5.5-19.8c.3-1.2 1.4-2.1 2.7-2.1h4.9c1.3 0 2.4.9 2.7 2.1l7.7 27.4c.1.3.2.6.2.9 0 .9-.6 1.5-1.6 1.5h-4.3c-.9 0-1.6-.6-1.8-1.5L80.4 19l-5.3 20.5c-.2.9-.9 1.5-1.8 1.5h-4.3c-1 0-1.6-.6-1.6-1.5 0-.3.1-.6.2-.9l4.5-15.6h-.2l-4.9 17.5c-.2.9-.9 1.5-1.8 1.5h-4.3zm56.8-9.4c0 6.6-4.5 10.9-12.1 10.9-4.8 0-9.2-1.8-11.8-4.5-.6-.7-.5-1.6.2-2.2l3-2.6c.6-.6 1.5-.5 2.2.1 1.8 1.8 4.2 2.9 6.8 2.9 4.1 0 5.6-2 5.6-4.2 0-2.3-1.6-3.6-5.8-5-6-2-10.4-4.5-10.4-10.3 0-5.6 4.3-9.7 11.2-9.7 4.1 0 7.8 1.4 10.3 3.6.6.6.6 1.5 0 2.1l-2.8 2.7c-.6.6-1.5.5-2.1 0-1.5-1.3-3.4-2.2-5.5-2.2-3.6 0-4.8 1.8-4.8 3.5 0 2.1 1.7 3.3 5.9 4.7 6.4 2.1 10.2 4.6 10.2 10.4z"
      />
      {/* Orange smile curve */}
      <path
        fill="#FF9900"
        d="M102.7 54.4C88.6 64.9 69.1 70.3 50.8 70.3c-23.7 0-44.5-8.5-50.6-11.1-.7-.3-.8-1.1-.3-1.6.6-.6 1.4-.4 2 .1C7.6 60.1 27.8 67.9 50.8 67.9c16.3 0 34.2-5 47.3-14.8.8-.6 1.7-.1 1.9.8.2.9-.3 1.8-.9 2.2"
      />
      {/* Arrow tip */}
      <path
        fill="#FF9900"
        d="M106.6 49.3c-1.3-.9-8.4-1.2-12.8-.7-.9.1-1.1-1-.2-1.5 5.5-3.3 14.5-2.4 15.6-1.1 1.1 1.3-.3 10.5-5.5 14.2-.8.6-1.6.2-1.3-.7 1.3-4.3 2.9-9.3 4.2-10.2"
      />
    </svg>
  );
}

export function CloudflareLogo({ className = "h-7 w-auto", ...props }: LogoProps) {
  return (
    <svg viewBox="0 0 100 45" className={className} aria-hidden="true" {...props}>
      <path
        fill="#F38020"
        d="M68.3 15.4c-1.5-6.8-7.5-11.9-14.8-11.9-6.3 0-11.8 3.9-14 9.6-1.5-.7-3.2-1.1-5-1.1-6.4 0-11.7 5.1-11.9 11.5-6.1.5-10.9 5.6-10.9 11.8 0 .5 0 1 .1 1.5h63.2c4.8 0 8.7-3.9 8.7-8.7 0-4.6-3.6-8.4-8.1-8.7-.3-1.4-1-2.7-1.9-4h-5.4z"
      />
      <path
        fill="#FAAE40"
        d="M75.1 23.3c-.2-1.2-.6-2.3-1.3-3.2l-3.3 5.8c.2.6.4 1.3.4 2 0 3.3-2.7 6-6 6H2.8c.5 4.6 4.4 8.2 9.2 8.2h52.8c6.6 0 12-5.4 12-12 0-2.6-.8-5-2.2-7z"
      />
    </svg>
  );
}

export function VercelLogo({ className = "h-6 w-auto", ...props }: LogoProps) {
  return (
    <svg viewBox="0 0 116 100" className={className} aria-hidden="true" {...props}>
      <path fill="#000000" d="M57.5 0L115 100H0L57.5 0z" />
    </svg>
  );
}

export function DigitalOceanLogo({ className = "h-7 w-auto", ...props }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" {...props}>
      <path
        fill="#0080FF"
        d="M50 0C22.4 0 0 22.4 0 50c0 16.5 8 31.1 20.3 40.2l12.7-12.7C26 73 21.8 63 21.8 50c0-15.6 12.6-28.2 28.2-28.2s28.2 12.6 28.2 28.2c0 14.8-11.5 27-26 28.1v17.4c24-1.2 43.3-21.2 43.3-45.5C95.5 22.4 75.1 0 50 0z"
      />
      <path fill="#0080FF" d="M37.3 95.5h15.2V80.3H37.3v15.2zM22.1 80.3h15.2V65.1H22.1v15.2zM9.5 65.1h12.6V52.5H9.5v12.6z" />
    </svg>
  );
}

export function HostingerLogo({ className = "h-7 w-auto", ...props }: LogoProps) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true" {...props}>
      <path
        fill="#673DE6"
        d="M40 0L6.7 19.2v41.6L40 80l33.3-19.2V19.2L40 0zm0 15.4l20 11.5v26.2L40 64.6 20 53.1V26.9L40 15.4z"
      />
      <path
        fill="#673DE6"
        d="M33 28h14v24H33V28z"
      />
    </svg>
  );
}

export function ShopifyLogo({ className = "h-8 w-auto", ...props }: LogoProps) {
  return (
    <svg viewBox="0 0 109 124" className={className} aria-hidden="true" {...props}>
      <path
        fill="#95BF47"
        d="M74.3 17.5c-.3 0-.6 0-.8.1-.4-2.8-1.7-7.4-5.5-10.2C64.6 4.8 60.5 4.7 58 5.7c-.3.1-.6.3-.9.5-2.7-2-5.7-2.9-8.7-2.9-9.1 0-13.6 7.6-14.8 12.3-5.5 1.7-9.4 6.8-9.4 12.9v1.6L6.5 44.5c-.4.1-.7.4-.8.7s-.1.7.1 1l27.8 72.8c.2.6.8 1 1.4 1h48c.6 0 1.2-.4 1.4-1l27.8-72.8c.2-.3.2-.7.1-1s-.4-.6-.8-.7L96.2 30.1v-1.6c0-6.1-3.9-11.2-9.4-12.9-1.2-4.7-5.7-12.3-14.8-12.3-2.9 0-6 .9-8.7 2.9-.3-.2-.6-.4-.9-.5-2.5-1-6.6-.9-10 1.6-3.8 2.8-5.1 7.4-5.5 10.2-.2-.1-.5-.1-.8-.1-7.2 0-13.1 5.9-13.1 13.1v1.6H19.7l15.3 40.1 8.8-23.1-6.1-2.4 8.7-16.2h16.2l8.7 16.2-6.1 2.4 8.8 23.1 15.3-40.1H74.3V30.6c0-7.2-5.9-13.1-13.1-13.1z"
      />
      <path
        fill="#5E8E3E"
        d="M54.5 119.9l29.4-76.9H54.5v76.9z"
      />
      <path
        fill="#FFFFFF"
        d="M56.4 56.6c-4.4.7-9.3 2.5-12.3 5.4-2.4 2.3-3.6 5.5-3.6 8.7 0 7.9 6.7 12.7 13.7 16.6 6.3 3.6 7.9 5.8 7.9 8.6 0 3.3-2.6 5.7-6.9 5.7-4.8 0-8.9-2.3-12.1-5.3l-3.5 6.6c4.2 3.8 9.8 6.4 15.8 6.4 8.7 0 14.8-5.3 14.8-13.7 0-8.2-6.4-12.8-13.8-16.8-6.1-3.4-7.5-5.5-7.5-8.2 0-3 2.3-5.2 6-5.2 3.6 0 7 1.6 9.6 3.6l3.5-6.6c-3.6-2.8-7.7-4.6-11.6-5.2z"
      />
    </svg>
  );
}

export function HubSpotLogo({ className = "h-8 w-auto", ...props }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" {...props}>
      <path
        fill="#FF7A59"
        d="M72.2 41.7V31.3c3.4-1.7 5.7-5.2 5.7-9.3 0-5.8-4.7-10.4-10.4-10.4-5.8 0-10.4 4.7-10.4 10.4 0 4 2.3 7.5 5.6 9.3v10.4c-4.2 1.2-8 3.5-11 6.5l-25.2-19c.4-1.2.7-2.6.7-4 0-6.9-5.6-12.5-12.5-12.5S4.6 18.3 4.6 25.2s5.6 12.5 12.5 12.5c2.6 0 5-.8 7-2.2l24.4 18.4c-1.8 3.6-2.8 7.6-2.8 11.9 0 4.9 1.4 9.5 3.8 13.4L37.1 88.5c-.8-.3-1.6-.4-2.5-.4-4.8 0-8.7 3.9-8.7 8.7s3.9 8.7 8.7 8.7 8.7-3.9 8.7-8.7c0-1.8-.6-3.5-1.5-4.9l12.4-9.3c3.8 2.2 8.3 3.4 13 3.4 14.5 0 26.2-11.7 26.2-26.2 0-13.4-10.1-24.5-23.2-26.1zm-4.7-22.9c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5zM17.1 30.7c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5zm50.4 48.7c-9.1 0-16.5-7.4-16.5-16.5s7.4-16.5 16.5-16.5 16.5 7.4 16.5 16.5-7.4 16.5-16.5 16.5z"
      />
    </svg>
  );
}

export function AtlassianLogo({ className = "h-7 w-auto", ...props }: LogoProps) {
  return (
    <svg viewBox="0 0 100 90" className={className} aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="atl-g1" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#0052CC" />
          <stop offset="100%" stopColor="#2684FF" />
        </linearGradient>
      </defs>
      <path
        fill="#0052CC"
        d="M48.8 38.6c-1.3-1.6-3.7-1.7-5.1-.3L1.5 79.5c-1.6 1.6-1.7 4.2-.1 5.9 1.6 1.7 4.2 1.7 5.9.1L48.5 44c1.4-1.4 1.5-3.8.3-5.4z"
      />
      <path
        fill="url(#atl-g1)"
        d="M49.6 1.3c-2-1.7-5-1.6-6.7.4L1.7 49.3c-1.7 2-1.6 5 .4 6.7 2 1.7 5 1.6 6.7-.4L50 8c1.7-2 1.6-5-.4-6.7z"
      />
      <path
        fill="#2684FF"
        d="M98.5 79.5L56.3 38.3c-1.4-1.4-3.8-1.3-5.1.3-1.3 1.6-1.1 4 .3 5.4l41.2 41.2c1.7 1.7 4.3 1.6 5.9-.1 1.6-1.7 1.5-4.3-.1-5.6z"
      />
    </svg>
  );
}

export function StripeLogo({ className = "h-7 w-auto", ...props }: LogoProps) {
  return (
    <svg viewBox="0 0 80 34" className={className} aria-hidden="true" {...props}>
      <path
        fill="#635BFF"
        d="M74.9 14.8c0-5.7-4.1-9.9-10.4-9.9-6.5 0-10.8 4.4-10.8 10.4 0 7.2 5.3 10.3 11.6 10.3 3.3 0 5.8-.7 7.7-1.8v-4.4c-1.9 1-4.2 1.5-6.9 1.5-3.4 0-5.9-1.2-6.5-3.8h15.2c.1-.8.1-1.6.1-2.3zm-15.3-2c.3-2.3 2.1-3.6 4.9-3.6 2.7 0 4.5 1.3 4.8 3.6h-9.7zm-14.7-7.5l-5.6 1.2v3.7h-3.4v4.4h3.4v8c0 4.1 2.3 6.3 6.6 6.3 1.8 0 3.2-.4 4-1v-4.3c-.7.3-1.5.5-2.5.5-1.6 0-2.3-.7-2.3-2.4v-7.1h4.8V14.7h-4.8l-.2-9.4zM32.6 9.4c-2.4 0-4 1.1-4.9 2.5V9.7h-5.6v21.5h5.8v-9.7c0-2.9 1.7-4.5 4.3-4.5 1.1 0 2 .2 2.6.5v-5.2c-.6-.6-1.4-.9-2.2-.9zM19.1 5.2c0-1.8-1.5-3.1-3.6-3.1-2 0-3.6 1.4-3.6 3.1 0 1.8 1.5 3.1 3.6 3.1 2.1 0 3.6-1.3 3.6-3.1zm-6.5 4.5h5.8v21.5h-5.8V9.7zm-4.7 4.1c-1.3-.9-3.2-1.4-5.2-1.4-2.4 0-3.8.9-3.8 2.2 0 1.5 1.7 2.1 4.5 2.9 4.3 1.2 6.9 2.7 6.9 6.2 0 4.4-3.7 7.2-9 7.2-2.7 0-5.3-.8-7.1-2.2v-5c1.6 1.3 3.9 2.1 6.3 2.1 2.5 0 4-.9 4-2.3 0-1.6-1.7-2.3-4.6-3.1-4.1-1.2-6.7-2.7-6.7-6 0-4.1 3.5-6.8 8.6-6.8 2.5 0 4.6.6 6.1 1.7v4.5z"
      />
    </svg>
  );
}

export function TwilioLogo({ className = "h-7 w-auto", ...props }: LogoProps) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true" {...props}>
      <circle cx="40" cy="40" r="38" fill="none" stroke="#F22F46" strokeWidth="6" />
      <circle cx="28" cy="28" r="6" fill="#F22F46" />
      <circle cx="52" cy="28" r="6" fill="#F22F46" />
      <circle cx="28" cy="52" r="6" fill="#F22F46" />
      <circle cx="52" cy="52" r="6" fill="#F22F46" />
    </svg>
  );
}

export function GitHubLogo({ className = "h-7 w-auto", ...props }: LogoProps) {
  return (
    <svg viewBox="0 0 98 96" className={className} aria-hidden="true" {...props}>
      <path
        fill="#24292F"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.215-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
      />
    </svg>
  );
}

export function MongoDBLogo({ className = "h-8 w-auto", ...props }: LogoProps) {
  return (
    <svg viewBox="0 0 64 128" className={className} aria-hidden="true" {...props}>
      <path
        fill="#00ED64"
        d="M32 0C32 0 7.8 38.5 7.8 74.3c0 27.2 16.5 46.4 23.3 53.7.6.6 1.4.1 1.4-.7V.8c-.2-.6-.4-.8-.5-.8z"
      />
      <path
        fill="#00684A"
        d="M32 0c.1 0 .3.2.5.8v126.5c0 .8.8 1.3 1.4.7 6.8-7.3 23.3-26.5 23.3-53.7C57.2 38.5 32 0 32 0z"
      />
      <path
        fill="#023430"
        d="M31.3 125.7c-.5.5-.8 1-.8 1.6 0 .5.3.7.8.7.6 0 .8-.2.8-.7 0-.6-.3-1.1-.8-1.6z"
      />
    </svg>
  );
}

export function PostgreSQLLogo({ className = "h-8 w-auto", ...props }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" {...props}>
      {/* Slonik Elephant head */}
      <path
        fill="#336791"
        d="M50 8c-23.2 0-42 18.8-42 42 0 15.6 8.5 29.2 21.1 36.4 1.1-6.1 3.2-13.4 6.2-18.7-2.8-3.1-4.5-7.3-4.5-11.8 0-9.6 7.8-17.3 17.3-17.3s17.3 7.8 17.3 17.3c0 4.5-1.7 8.6-4.5 11.8 3 5.3 5.1 12.6 6.2 18.7C81.5 79.2 90 65.6 90 50c0-23.2-18.8-42-42-42z"
      />
      <path
        fill="#FFFFFF"
        d="M40.5 45.2c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2zm19 0c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2z"
      />
      {/* Trunk */}
      <path
        fill="#264e70"
        d="M50 54c-5 0-9 4-9 9v18c0 3.9 3.1 7 7 7h4c3.9 0 7-3.1 7-7V63c0-5-4-9-9-9zm2 28h-4c-1.7 0-3-1.3-3-3v-7h10v7c0 1.7-1.3 3-3 3z"
      />
    </svg>
  );
}

export function RazorpayLogo({ className = "h-7 w-auto", ...props }: LogoProps) {
  return (
    <svg viewBox="0 0 130 36" className={className} aria-hidden="true" {...props}>
      {/* Razorpay Emblem */}
      <path
        fill="#0C2340"
        d="M9.8 30.5L20.6 5.5h10.2L20 30.5H9.8z"
      />
      <path
        fill="#3395FF"
        d="M20.2 30.5l6.8-15.8h10.2l-6.8 15.8H20.2z"
      />
      <path
        fill="#528FF0"
        d="M17.1 19.5h8.2l-2.4 5.5h-8.2l2.4-5.5z"
      />
      {/* Razorpay Brand Typography in vector paths */}
      <g fill="#0C2340">
        {/* R */}
        <path d="M43.5 8.5h6.2c3.4 0 5.4 1.8 5.4 4.5 0 2.2-1.3 3.7-3.2 4.2l3.6 7.3h-3.4l-3.2-6.6h-2.5v6.6h-2.9V8.5zm2.9 6.8h3c1.7 0 2.7-.9 2.7-2.3 0-1.4-1-2.2-2.7-2.2h-3v4.5z" />
        {/* a */}
        <path d="M60.8 24.5h-2.6v-1.8c-.8 1.3-2.2 2-3.8 2-2.6 0-4.3-1.6-4.3-4.1 0-2.8 2.3-4.1 5.6-4.1h2.2v-.8c0-1.2-.8-1.9-2.2-1.9-1.2 0-2.2.5-2.8 1.2l-1.6-1.6c1.1-1.2 2.7-1.9 4.6-1.9 3.1 0 4.9 1.6 4.9 4.3v6.7zm-2.6-3.8v-1.7h-1.9c-1.8 0-3 .6-3 2.1 0 1.2.9 1.9 2.2 1.9 1.6 0 2.7-.9 2.7-2.3z" />
        {/* z */}
        <path d="M63 12h8.5v2.3l-5.6 7.6h5.8v2.6H63v-2.3l5.6-7.6H63V12z" />
        {/* o */}
        <path d="M78.5 11.6c3.7 0 6.2 2.7 6.2 6.5s-2.5 6.5-6.2 6.5-6.2-2.7-6.2-6.5 2.5-6.5 6.2-6.5zm0 10.4c2.1 0 3.4-1.7 3.4-3.9s-1.3-3.9-3.4-3.9-3.4 1.7-3.4 3.9 1.3 3.9 3.4 3.9z" />
        {/* r */}
        <path d="M86.8 12h2.7v2.2c.7-1.5 2-2.4 3.5-2.4.4 0 .7.1 1 .2v2.8c-.4-.1-.8-.2-1.3-.2-1.9 0-3.1 1.4-3.1 3.7v6.2h-2.8V12z" />
        {/* p */}
        <path d="M96 12h2.6v1.8c.8-1.3 2.3-2 3.9-2 3.3 0 5.6 2.6 5.6 6.4s-2.3 6.4-5.6 6.4c-1.6 0-3-.7-3.9-2v6H96V12zm5.8 10.2c2 0 3.4-1.6 3.4-3.8s-1.4-3.8-3.4-3.8-3.4 1.6-3.4 3.8 1.4 3.8 3.4 3.8z" />
        {/* a */}
        <path d="M117.8 24.5h-2.6v-1.8c-.8 1.3-2.2 2-3.8 2-2.6 0-4.3-1.6-4.3-4.1 0-2.8 2.3-4.1 5.6-4.1h2.2v-.8c0-1.2-.8-1.9-2.2-1.9-1.2 0-2.2.5-2.8 1.2l-1.6-1.6c1.1-1.2 2.7-1.9 4.6-1.9 3.1 0 4.9 1.6 4.9 4.3v6.7zm-2.6-3.8v-1.7h-1.9c-1.8 0-3 .6-3 2.1 0 1.2.9 1.9 2.2 1.9 1.6 0 2.7-.9 2.7-2.3z" />
        {/* y */}
        <path d="M120.2 12h3l2.8 7.8 2.7-7.8h3l-4.5 11.8c-1.1 2.9-2.5 4.3-5 4.3-.6 0-1.2-.1-1.7-.3v-2.4c.4.1.8.2 1.2.2 1.3 0 2.1-.7 2.7-2.3l.3-.8-4.5-10.5z" />
      </g>
    </svg>
  );
}

export function PartnerLogo({ id, className = "h-8 w-auto" }: { id: string; className?: string }) {
  switch (id) {
    case "google":
      return <GoogleLogo className={className} />;
    case "meta":
      return <MetaLogo className={className} />;
    case "microsoft":
      return <MicrosoftLogo className={className} />;
    case "aws":
      return <AWSLogo className={className} />;
    case "cloudflare":
      return <CloudflareLogo className={className} />;
    case "vercel":
      return <VercelLogo className={className} />;
    case "digitalocean":
      return <DigitalOceanLogo className={className} />;
    case "hostinger":
      return <HostingerLogo className={className} />;
    case "shopify":
      return <ShopifyLogo className={className} />;
    case "hubspot":
      return <HubSpotLogo className={className} />;
    case "atlassian":
      return <AtlassianLogo className={className} />;
    case "stripe":
      return <StripeLogo className={className} />;
    case "razorpay":
      return <RazorpayLogo className={className} />;
    case "twilio":
      return <TwilioLogo className={className} />;
    case "github":
      return <GitHubLogo className={className} />;
    case "mongodb":
      return <MongoDBLogo className={className} />;
    case "postgresql":
      return <PostgreSQLLogo className={className} />;
    default:
      return null;
  }
}

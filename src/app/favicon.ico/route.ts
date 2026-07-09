const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#3b176b"/>
  <circle cx="32" cy="30" r="18" fill="#f6c945"/>
  <path d="M32 12l14 10v16c0 8-6 14-14 18-8-4-14-10-14-18V22z" fill="#ffffff" opacity="0.92"/>
  <path d="M25 31h14M25 38h14M32 24v21" stroke="#5b259f" stroke-width="3" stroke-linecap="round"/>
</svg>`;

export function GET() {
  return new Response(icon, {
    headers: {
      "content-type": "image/svg+xml",
      "cache-control": "public, max-age=31536000, immutable",
    },
  });
}

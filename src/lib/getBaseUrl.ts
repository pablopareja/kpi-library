export const getBaseUrl = () =>
  typeof window === 'undefined' ? process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000' : ''

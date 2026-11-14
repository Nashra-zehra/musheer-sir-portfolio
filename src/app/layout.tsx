import type { Metadata } from 'next';
import { PROF } from '@/content/professor';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: `%s | ${PROF.name}`,
    default: `${PROF.name} — ${PROF.title} | ${PROF.department}, ${PROF.institutionShort}`,
  },
  description: PROF.bio,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

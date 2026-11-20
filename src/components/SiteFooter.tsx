import { PROF } from '@/content/professor';
import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-container">
        <nav className="social-row" aria-label="Social profiles">
          {PROF.profiles.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer">
              {p.name}
            </a>
          ))}
        </nav>

        <div className="site-footer__cta">
          <Link href="/contact" className="btn-pill btn-primary">
            Get in touch
          </Link>
        </div>

        <p className="site-footer__copy">
          &copy; {new Date().getFullYear()} {PROF.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
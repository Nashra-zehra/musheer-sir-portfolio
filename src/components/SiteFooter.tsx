import { PROF } from '@/content/professor';
import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer style={{ padding: '3rem 0 2rem', textAlign: 'center' }}>
      <div className="page-container">
        <div className="social-row">
          {PROF.profiles.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer">
              {p.name}
            </a>
          ))}
        </div>
        <div style={{ marginTop: '1.5rem' }}>
          <Link href="/contact" className="btn-pill btn-primary">
            Get in touch
          </Link>
        </div>
        <p style={{
          marginTop: '2rem',
          fontSize: '0.8rem',
          color: 'var(--color-text-secondary)',
        }}>
          &copy; {new Date().getFullYear()} {PROF.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

import type { Metadata } from 'next';
import { PROF } from '@/content/professor';

export const metadata: Metadata = { title: 'Honors & Distinctions' };

export default function HonorsPage() {
  return (
    <>
      <section style={{ padding: '3.5rem 0 2rem' }}>
        <div className="page-container">
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '2.25rem',
            fontWeight: 600,
            color: '#1b3050',
            marginBottom: '0.25rem',
          }}>
            Honors &amp; Distinctions
          </h1>
          <p className="section-subtitle">
            Stanford Top 2% &middot; {PROF.honors.length} Distinctions &middot; 2022&ndash;2025
          </p>
        </div>
      </section>

      {/* ---------- Distinctions: minimal alternating timeline ---------- */}
      <section style={{ padding: '2rem 0 3rem' }}>
        <div className="page-container">
          <h2 className="section-heading" style={{ color: '#1b3050' }}>Distinctions</h2>

          <div className="ht">
            {PROF.honors.map((h, i) => (
              <div key={i} className={`ht-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                <span className="ht-dot" />
                <div className="ht-year">{h.year}</div>
                <div className="ht-org">{h.org}</div>
                <h3 className="ht-title">{h.title}</h3>
                <p className="ht-desc">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }} />

      {/* ---------- Recent Announcements (same as homepage) ---------- */}
      <section className="announcements-section">
        <div className="page-container">
          <h2 className="section-heading">Recent Announcements</h2>
          <p className="section-subtitle">
            Highlights, achievements and latest updates
          </p>

          <ul className="ann-list">
            {PROF.announcements.map((a, i) => (
              <li key={i} className="ann-item">
                <div className="ann-meta">
                  <span className="ann-date">{a.date}</span>
                  <span className={`timeline-tag badge-${
                    a.tag === 'DISTINCTION' ? 'blue' :
                    a.tag === 'EDITORIAL' ? 'purple' :
                    a.tag === 'PUBLICATION' ? 'teal' :
                    a.tag === 'AWARD' ? 'green' : 'gray'
                  }`}>
                    {a.tag}
                  </span>
                </div>
                <h3 className="ann-title">{a.title}</h3>
                <p className="ann-description">{a.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
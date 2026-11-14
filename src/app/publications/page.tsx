
import type { Metadata } from 'next';
import { PROF } from '@/content/professor';

export const metadata: Metadata = { title: 'Publications' };

export default function PublicationsPage() {
  return (
    <>
      <section style={{ padding: '3.5rem 0 2rem' }}>
        <div className="page-container">
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2.25rem',
              fontWeight: 600,
              color: '#1b3050',
              marginBottom: '0.25rem',
            }}
          >
            Publications
          </h1>

          <p className="section-subtitle">
            157+ research papers in SCI/SCIE-indexed journals &amp; conferences
          </p>
        </div>
      </section>


      {/* ---------- Scholarly Impact (same as homepage) ---------- */}
      <section className="si-section">
        <svg
          className="si-wave"
          viewBox="0 0 1440 520"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <rect width="1440" height="520" fill="#e8ebf1" />

          <path
            d="M520 0 C 640 0, 700 120, 760 230 C 840 380, 1000 330, 1160 300 C 1280 280, 1380 300, 1440 340 L1440 0 Z"
            fill="#ffffff"
          />

          <path
            d="M900 520 C 940 400, 1060 360, 1180 380 C 1300 400, 1380 380, 1440 330 L1440 520 Z"
            fill="#f6f7fa"
          />
        </svg>

        <div className="page-container si-inner">
          <h2 className="si-title">Scholarly Impact</h2>

          <p className="si-subtitle">
            Recognised research contributions backed by global citations and rankings
          </p>

          <div className="si-grid">
            {[
              {
                val: PROF.impact.citations,
                label: 'Google Scholar Citations',
                desc: 'Total citations of published research across journals and conferences.',
                size: 170,
              },
              {
                val: PROF.impact.hIndex,
                label: 'h-index',
                desc: 'A measure of both productivity and citation impact of the publications.',
                size: 150,
              },
              {
                val: PROF.impact.papers,
                label: 'Papers Published',
                desc: 'Peer-reviewed papers in international journals and conferences.',
                size: 130,
              },
              {
                val: 'Top 2%',
                label: 'Stanford / Elsevier',
                desc: 'Ranked among the world’s top scientists in the Stanford / Elsevier list.',
                size: 112,
              },
            ].map((s) => (
              <div key={s.label} className="si-item">
                <div className="si-slot">
                  <div
                    className="si-bubble"
                    style={{
                      ['--size' as string]: `${s.size}px`,
                    }}
                  >
                    <div className="si-core">{s.val}</div>
                  </div>
                </div>

                <h3 className="si-label">{s.label}</h3>
                <p className="si-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ---------- Editorial Board Memberships (bullets) ---------- */}
      <section style={{ padding: '3rem 0' }}>
        <div className="page-container">
          <h2
            className="section-heading"
            style={{ color: '#1b3050' }}
          >
            Editorial Board Memberships
          </h2>

          <ul className="eb-list">
            {PROF.editorialBoards.map((e) => (
              <li key={e.journal} className="eb-item">
                <div>
                  <strong>{e.journal}</strong>
                  <span> — {e.role} · {e.publisher}</span>
                </div>

                <em className="eb-index">{e.indexing}</em>
              </li>
            ))}
          </ul>
        </div>
      </section>


      {/* ---------- Guest Editorships ---------- */}
      <section style={{ padding: '1rem 0 3rem' }}>
        <div className="page-container">
          <h2
            className="section-heading"
            style={{ color: '#1b3050' }}
          >
            Guest Editorships
          </h2>

          <div className="ge-grid">
            {PROF.guestEditorships.map((g) => (
              <div key={g.topic} className="ge-card">
                <span className="ge-deadline">
                  Deadline: {g.deadline}
                </span>

                <h4 className="ge-topic">{g.topic}</h4>

                <p className="ge-meta">
                  {g.journal} · {g.publisher}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ---------- Academic Profiles ---------- */}
      <section style={{ padding: '2rem 0 4rem' }}>
        <div className="page-container">
          <h2
            className="section-heading"
            style={{ color: '#1b3050' }}
          >
            Academic Profiles
          </h2>

          <p
            style={{
              color: 'var(--color-text-secondary)',
              marginBottom: '1.5rem',
            }}
          >
            Full publication lists, citation metrics, and article-level data are
            available through the following profiles.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap',
            }}
          >
            {PROF.profiles.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-secondary"
                style={{
                  padding: '8px 20px',
                  fontSize: '0.85rem',
                  background: '#1b3050',
                  borderColor: '#1b3050',
                }}
              >
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

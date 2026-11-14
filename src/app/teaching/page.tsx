import type { Metadata } from 'next';
import { PROF } from '@/content/professor';

export const metadata: Metadata = { title: 'Teaching' };

const MENTOR_DESC: Record<string, string> = {
  'Ph.D. Scholars': 'Doctoral researchers guided through to thesis completion.',
  'M.Tech Theses': 'Postgraduate dissertations supervised in cryptography and security.',
  'B.Tech Projects': 'Undergraduate projects mentored from idea to implementation.',
};

export default function TeachingPage() {
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
            Teaching
          </h1>
          <p className="section-subtitle">18+ years of pedagogy in Computer Engineering</p>
        </div>
      </section>

      {/* ---------- Current Position ---------- */}
      <section className="cp-section">
        <div className="page-container">
          <div className="cp-card">
            <div className="cp-art" aria-hidden="true">
              <svg viewBox="0 0 460 400" preserveAspectRatio="xMinYMid slice">
                <path d="M0 0 H150 C 95 90, 90 310, 150 400 H0 Z" fill="#1b3050" />
                <g fill="none" transform="rotate(0 230 200)">
                  <circle cx="230" cy="200" r="160" pathLength="100" strokeDasharray="80 20"
                          transform="rotate(36 230 200)" stroke="#cdd5e3" strokeWidth="3" />
                  <circle cx="230" cy="200" r="118" pathLength="100" strokeDasharray="62 38"
                          transform="rotate(68 230 200)" stroke="#b3bed4" strokeWidth="10" strokeLinecap="round" />
                  <circle cx="230" cy="200" r="82" pathLength="100" strokeDasharray="70 30"
                          transform="rotate(54 230 200)" stroke="#d3d9e8" strokeWidth="8" strokeLinecap="round" />
                  <circle cx="230" cy="200" r="48" pathLength="100" strokeDasharray="68 32"
                          transform="rotate(58 230 200)" stroke="#1b3050" strokeWidth="14" strokeLinecap="round" />
                </g>
                <circle cx="248" cy="200" r="12" fill="#1b3050" />
              </svg>
            </div>

            <div className="cp-content">
              <h2 className="cp-heading">Current Position</h2>
              <p className="cp-role">{PROF.title}</p>
              <p className="cp-dept">{PROF.department}, {PROF.institution}</p>
              <ul className="cp-list">
                <li>Over 18 years of teaching and research experience</li>
                <li>M.Tech Coordinator &amp; CBCS Advisor</li>
                <li>Courses in Cryptography, Information Security, Data Structures, and Algorithm Design</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Mentorship Record ---------- */}
      <section className="si-section">
        <svg className="si-wave" viewBox="0 0 1440 520" preserveAspectRatio="none" aria-hidden="true">
          <rect width="1440" height="520" fill="#e8ebf1" />
          <path d="M520 0 C 640 0, 700 120, 760 230 C 840 380, 1000 330, 1160 300 C 1280 280, 1380 300, 1440 340 L1440 0 Z" fill="#ffffff" />
          <path d="M900 520 C 940 400, 1060 360, 1180 380 C 1300 400, 1380 380, 1440 330 L1440 520 Z" fill="#f6f7fa" />
        </svg>

        <div className="page-container si-inner">
          <h2 className="si-title">Mentorship Record</h2>
          <p className="si-subtitle">Scholars, theses and projects guided over 18+ years of teaching</p>

          <div className="si-grid si-grid-3">
            {[
              { n: PROF.mentorship.phd, l: 'Ph.D. Scholars', size: 170 },
              { n: PROF.mentorship.mtech, l: 'M.Tech Theses', size: 145 },
              { n: PROF.mentorship.btech, l: 'B.Tech Projects', size: 120 },
            ].map((m) => (
              <div key={m.l} className="si-item">
                <div className="si-slot">
                  <div className="si-bubble" style={{ ['--size' as string]: `${m.size}px` }}>
                    <div className="si-core">{m.n}</div>
                  </div>
                </div>
                <h3 className="si-label">{m.l}</h3>
                <p className="si-desc">{MENTOR_DESC[m.l]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Education (bullets) ---------- */}
      <section style={{ padding: '3rem 0' }}>
        <div className="page-container">
          <h2 className="section-heading tp-heading">Education</h2>
          <ul className="ed-list">
            {PROF.education.map((e) => (
              <li key={e.degree}>
                <strong>{e.degree}</strong>
                <span> — {e.institution}{e.year ? ` (${e.year})` : ''}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
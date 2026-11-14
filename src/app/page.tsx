
import { PROF } from '@/content/professor';
import Link from 'next/link';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';

const rsIcon = (children: React.ReactNode) => (
  <svg
    viewBox="0 0 48 48"
    width="38"
    height="38"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const RS_ICONS: Record<string, React.ReactNode> = {
  'Bijective S-Boxes': rsIcon(
    <>
      <rect x="5" y="6" width="8" height="8" />
      <rect x="17" y="6" width="8" height="8" />
      <rect x="29" y="6" width="8" height="8" />
      <rect x="5" y="18" width="8" height="8" />
      <rect x="17" y="18" width="8" height="8" />
      <rect x="5" y="30" width="8" height="8" />
      <rect x="17" y="30" width="8" height="8" />
      <rect
        x="29"
        y="28"
        width="14"
        height="12"
        rx="2"
        fill="currentColor"
      />
      <path d="M32 28v-3a4 4 0 0 1 8 0v3" />
    </>
  ),

  '2D/3D/4D Chaos': rsIcon(
    <>
      <path d="M24 5 40 14v20L24 43 8 34V14z" />
      <path d="M8 14l16 9 16-9M24 23v20" />
    </>
  ),

  'DICOM Encryption': rsIcon(
    <>
      <rect x="5" y="6" width="38" height="26" rx="3" />
      <path d="M18 42h12M24 32v10" />
      <path d="M24 12c-5 0-9 3-9 8 0 3 2 5 4 6h10c2-1 4-3 4-6 0-5-4-8-9-8zM24 12v14" />
    </>
  ),

  'PRNG Keystreams': rsIcon(
    <>
      <path d="M24 4 41 14v20L24 44 7 34V14z" />
      <path d="M7 14l17 10 17-10M24 24v20" />
      <circle cx="24" cy="14" r="1.5" fill="currentColor" />
      <circle cx="16" cy="30" r="1.5" fill="currentColor" />
      <circle cx="32" cy="30" r="1.5" fill="currentColor" />
    </>
  ),

  'Lightweight Cryptography': rsIcon(
    <>
      <path d="M40 6C26 6 14 14 12 30l-4 11M40 6c0 14-8 24-22 26M20 28l10-4M16 34l12-5" />
    </>
  ),

  'IoT Security': rsIcon(
    <>
      <circle cx="24" cy="16" r="3" />
      <path d="M24 19v5M18 42l6-18 6 18M20 36h8" />
      <path d="M17 10a10 10 0 0 0 0 12M31 10a10 10 0 0 1 0 12M12 6a17 17 0 0 0 0 20M36 6a17 17 0 0 1 0 20" />
    </>
  ),

  'Medical Image Encryption': rsIcon(
    <>
      <rect x="6" y="8" width="30" height="24" rx="2" />
      <path d="M10 40h30V16" />
      <path d="M6 28l9-9 8 8 5-5 8 8" />
      <circle cx="26" cy="15" r="2.5" />
    </>
  ),

  'Smart Grid Security': rsIcon(
    <>
      <path d="M24 4v6M18 10h12M20 10l-6 34M28 10l6 34M16 20h16M13 32h22" />
      <path d="M14 44h20M20 20l12 12M28 20 16 32" />
      <path d="M10 18h8M30 18h8" />
    </>
  ),
};

const RS_DESC: Record<string, string> = {
  'Bijective S-Boxes':
    'Designing nonlinear substitution boxes with strong cryptographic properties.',

  '2D/3D/4D Chaos':
    'Higher-dimensional chaotic maps for secure and unpredictable encryption.',

  'DICOM Encryption':
    'Protecting DICOM medical files and metadata during storage and transfer.',

  'PRNG Keystreams':
    'Chaos-based pseudo-random generators for robust keystream creation.',

  'Lightweight Cryptography':
    'Efficient ciphers suited to resource-constrained devices.',

  'IoT Security':
    'Securing connected devices and their communication networks.',

  'Medical Image Encryption':
    'Safeguarding patient images with fast, high-security schemes.',

  'Smart Grid Security':
    'Cyber defenses for reliable and trustworthy power infrastructure.',
};


export default function HomePage() {
  return (
    <>
      {/* Hero — crescent + circular photo */}
      <section className="hs">
        <div className="hs-art">
          <div className="hs-stage">
            <div className="hs-navy" />
            <div className="hs-cut" />

            <div className="hs-photo">
              <img src={PROF.photo} alt={PROF.name} />
            </div>

            <a
              href="#about"
              className="hs-chevron"
              aria-label="Scroll to About"
            >
              <svg
                viewBox="0 0 24 24"
                width="30"
                height="30"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hs-content">
          <p className="hs-label">{PROF.title}</p>
          <h1 className="hs-name">{PROF.name}</h1>
          <p className="hs-sub">{PROF.institutionShort}</p>
          <p className="hs-text">{PROF.tagline}</p>
        </div>

        <a href="#my-journey" className="hs-start">
          My Journey
        </a>
      </section>


      {/* About Me — navy panel */}
      <section id="about" className="ab-section">
        <div className="page-container">
          <div className="ab-panel">
            <span className="ab-vertical" aria-hidden="true">
              {PROF.institutionShort}
            </span>

            <div className="ab-photo-ring">
              <img
                src="/images/about.png"
                alt={PROF.name}
                className="ab-photo"
              />
            </div>

            <div className="ab-content">
              <h2 className="ab-heading">About me</h2>

              <p className="ab-bio">{PROF.bio}</p>

              <div className="ab-tags">
                {PROF.roles.map((r) => (
                  <span key={r} className="ab-tag">
                    {r}
                  </span>
                ))}
              </div>

              <div className="ab-actions">
                <Link href="/files/cv.pdf" className="ab-btn">
                  Download CV
                </Link>

                <a
                  href={`mailto:${PROF.email}`}
                  className="ab-email"
                >
                  {PROF.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Scholarly Impact */}
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


      <hr
        className="divider"
        style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
        }}
      />


      {/* My Journey */}
<section id="my-journey" className="jn-section">
  <div className="page-container">
    <h2 className="section-heading journey-heading">My Journey</h2>

    <p className="jn-subtitle">
      From Research to Recognition: A Career of Continuous Discovery
    </p>

    <div className="journey-grid">
      {/* Professional */}
      <div className="journey-col">
        <div className="journey-cat">
          <span className="journey-cat-icon">
            <Briefcase size={28} strokeWidth={1.6} />
          </span>
          <div className="journey-cat-label">Professional Experience</div>
        </div>

        <div className="journey-card">
          <div className="journey-year">2006 – Present</div>
          <h4>{PROF.title}</h4>
          <p>{PROF.department}, {PROF.institutionShort}</p>
        </div>

        <div className="journey-card">
          <div className="journey-year">Ongoing</div>
          <h4>M.Tech Coordinator &amp; CBCS Advisor</h4>
          <p>{PROF.institution}</p>
        </div>

        <div className="journey-card">
          <div className="journey-year">Ongoing</div>
          <h4>Senior Member, IEEE</h4>
          <p>Institute of Electrical and Electronics Engineers</p>
        </div>
      </div>

      {/* Teaching */}
      <div className="journey-col">
        <div className="journey-cat">
          <span className="journey-cat-icon">
            <GraduationCap size={28} strokeWidth={1.6} />
          </span>
          <div className="journey-cat-label">Teaching Experience</div>
        </div>

        <div className="journey-card">
          <div className="journey-year">18+ Years</div>
          <h4>Cryptography &amp; Information Security</h4>
          <p>Data Structures, Algorithm Design</p>
        </div>

        <div className="journey-card">
          <div className="journey-year">Supervised</div>
          <h4>
            {PROF.mentorship.phd} Ph.D. &middot;{' '}
            {PROF.mentorship.mtech} M.Tech &middot;{' '}
            {PROF.mentorship.btech} B.Tech
          </h4>
          <p>Research scholars mentored</p>
        </div>
      </div>

      {/* Education */}
      <div className="journey-col">
        <div className="journey-cat">
          <span className="journey-cat-icon">
            <MapPin size={28} strokeWidth={1.6} />
          </span>
          <div className="journey-cat-label">Education</div>
        </div>

        {PROF.education.map((e) => (
          <div key={e.degree} className="journey-card">
            <div className="journey-year">{e.year || 'Completed'}</div>
            <h4>{e.degree}</h4>
            <p>{e.institution}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Research Areas */}
      <section className="rs-section">
        <svg
          className="rs-wave"
          viewBox="0 0 1440 640"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <rect width="1440" height="640" fill="#ffffff" />

          <path
            d="M0 0 L380 0 C450 120, 470 260, 560 380 C660 510, 900 420, 1100 380 C1250 350, 1380 360, 1440 420 L1440 640 L0 640 Z"
            fill="#dfe3ea"
          />
        </svg>

        <div className="page-container rs-inner">
          <h2 className="rs-title">
            <strong>Research</strong> Areas
          </h2>

          <span className="rs-bar" />

          <p className="rs-subtitle">
            Nonlinear dynamical mappings, Galois field algebra &amp; cyber defenses.
          </p>

          <div className="rs-grid">
            {PROF.researchAreas.map((area, i) => (
              <div key={area} className="rs-item">
                <div
                  className={`rs-ring ${
                    i % 2 === 0 ? 'rs-dark' : 'rs-blue'
                  }`}
                >
                  <div className="rs-disc">
                    <div className="rs-core">
                      {RS_ICONS[area]}
                    </div>
                  </div>
                </div>

                <h3 className="rs-label">{area}</h3>
                <p className="rs-desc">
                  {RS_DESC[area] ?? ''}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <hr
        className="divider"
        style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
        }}
      />


      {/* Recent Announcements */}
      <section className="announcements-section">
        <div className="page-container">
          <h2 className="section-heading">
            Recent Announcements
          </h2>

          <p className="section-subtitle">
            Highlights, achievements and latest updates
          </p>

          <ul className="ann-list">
            {PROF.announcements.map((a, i) => (
              <li key={i} className="ann-item">
                <div className="ann-meta">
                  <span className="ann-date">{a.date}</span>

                  <span
                    className={`timeline-tag badge-${
                      a.tag === 'DISTINCTION'
                        ? 'blue'
                        : a.tag === 'EDITORIAL'
                          ? 'purple'
                          : a.tag === 'PUBLICATION'
                            ? 'teal'
                            : a.tag === 'AWARD'
                              ? 'green'
                              : 'gray'
                    }`}
                  >
                    {a.tag}
                  </span>
                </div>

                <h3 className="ann-title">{a.title}</h3>

                <p className="ann-description">
                  {a.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </>
  );
}

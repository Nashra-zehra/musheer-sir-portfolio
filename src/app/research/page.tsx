
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { PROF } from '@/content/professor';
import Link from 'next/link';
import {
  MessagesSquare,
  ShieldCheck,
  Lock,
  Cpu,
  Network,
  Layers,
  Activity,
  GraduationCap,
  Target,
  Lightbulb,
  Users,
  BookOpen,
  Award,
} from 'lucide-react';

export const metadata: Metadata = { title: 'Research' };
import RevealItem from './RevealItem';


/* ---------- Research Areas: icons + descriptions ---------- */

const svg = (children: ReactNode) => (
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

const ICONS: Record<string, ReactNode> = {
  'Bijective S-Boxes': svg(
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

  '2D/3D/4D Chaos': svg(
    <>
      <path d="M24 5 40 14v20L24 43 8 34V14z" />
      <path d="M8 14l16 9 16-9M24 23v20" />
    </>
  ),

  'DICOM Encryption': svg(
    <>
      <rect x="5" y="6" width="38" height="26" rx="3" />
      <path d="M18 42h12M24 32v10" />
      <path d="M24 12c-5 0-9 3-9 8 0 3 2 5 4 6h10c2-1 4-3 4-6 0-5-4-8-9-8zM24 12v14" />
    </>
  ),

  'PRNG Keystreams': svg(
    <>
      <path d="M24 4 41 14v20L24 44 7 34V14z" />
      <path d="M7 14l17 10 17-10M24 24v20" />
      <circle cx="24" cy="14" r="1.5" fill="currentColor" />
      <circle cx="16" cy="30" r="1.5" fill="currentColor" />
      <circle cx="32" cy="30" r="1.5" fill="currentColor" />
    </>
  ),

  'Lightweight Cryptography': svg(
    <>
      <path d="M40 6C26 6 14 14 12 30l-4 11M40 6c0 14-8 24-22 26M20 28l10-4M16 34l12-5" />
    </>
  ),

  'IoT Security': svg(
    <>
      <circle cx="24" cy="16" r="3" />
      <path d="M24 19v5M18 42l6-18 6 18M20 36h8" />
      <path d="M17 10a10 10 0 0 0 0 12M31 10a10 10 0 0 1 0 12M12 6a17 17 0 0 0 0 20M36 6a17 17 0 0 1 0 20" />
    </>
  ),

  'Medical Image Encryption': svg(
    <>
      <rect x="6" y="8" width="30" height="24" rx="2" />
      <path d="M10 40h30V16" />
      <path d="M6 28l9-9 8 8 5-5 8 8" />
      <circle cx="26" cy="15" r="2.5" />
    </>
  ),

  'Smart Grid Security': svg(
    <>
      <path d="M24 4v6M18 10h12M20 10l-6 34M28 10l6 34M16 20h16M13 32h22" />
      <path d="M14 44h20M20 20l12 12M28 20 16 32" />
      <path d="M10 18h8M30 18h8" />
    </>
  ),
};

const FALLBACK_ICON = svg(
  <>
    <circle cx="24" cy="24" r="14" />
    <path d="M24 14v10l7 4" />
  </>
);

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


/* icons cycled for pillars and requirements */

const PILLAR_ICONS = [ShieldCheck, Lock, Cpu, Network, Layers, Activity];
const REQ_ICONS = [GraduationCap, Target, Lightbulb, Users, BookOpen, Award];


export default function ResearchPage() {
  return (
    <>
     {/* ---------- Hero ---------- */}
<section style={{ padding: '3.5rem 0 2rem' }}>
  <div className="page-container">
    <h1 style={{
      fontFamily: 'var(--font-heading)',
      fontSize: '2.25rem',
      fontWeight: 600,
      color: '#1b3050',
      marginBottom: '0.25rem',
    }}>
      Research
    </h1>
    <p className="section-subtitle">Nonlinear Chaos in Cryptographic Engineering</p>
    <p style={{ color: 'var(--color-text-secondary)', maxWidth: 600, lineHeight: 1.8 }}>
      {PROF.researchDescription}
    </p>
  </div>
</section>


      {/* ---------- Core Research Pillars ---------- */}
      <section className="cr-section">
        <div className="page-container">
          <div className="cr-wrap">
            <div className="cr-left">
              <h2 className="cr-heading">Core Research Pillars</h2>

              <div className="cr-circle">
                <MessagesSquare size={48} strokeWidth={1.8} />
                <span>What we do</span>
              </div>
            </div>

            <ul className="cr-list">
             {PROF.researchPillars.map((p, i) => {
             const Icon = PILLAR_ICONS[i % PILLAR_ICONS.length];
              return (
               <RevealItem key={p.title} className="cr-item">
                 <div className="cr-bubble">
                  <Icon size={20} strokeWidth={2} />
                  <span>{p.title}</span>
                 </div>
                 <p className="cr-desc">{p.description}</p>
             </RevealItem>
                );
              })}
            </ul>
          </div>
        </div>
      </section>


      {/* ---------- Research Areas ---------- */}
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
                      {ICONS[area] ?? FALLBACK_ICON}
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


      {/* ---------- Prospective Researchers ---------- */}
      <section className="pr-section">
        <div className="page-container pr-inner">
          <h2 className="pr-heading">Prospective Researchers</h2>

          <p className="pr-intro">{PROF.admissions.intro}</p>

          <div className="pr-pills">
            {PROF.admissions.positions.map((pos) => (
              <span key={pos} className="pr-pill">
                {pos}
              </span>
            ))}
          </div>

          <div className="pr-grid">
            {PROF.admissions.requirements.map((r, i) => {
              const Icon = REQ_ICONS[i % REQ_ICONS.length];

              return (
                <div key={r.title} className="pr-item">
                  <span className="pr-icon">
                    <Icon size={22} strokeWidth={2} />
                  </span>

                  <div>
                    <h4 className="pr-title">{r.title}</h4>
                    <p className="pr-desc">{r.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pr-cta">
            <Link href="/contact" className="btn-pill pr-btn">
              Inquire for Openings
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

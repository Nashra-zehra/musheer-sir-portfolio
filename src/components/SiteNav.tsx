
'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { PROF } from '@/content/professor';

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research' },
  { label: 'Teaching', href: '/teaching' },
  { label: 'Publications', href: '/publications' },
  { label: 'Honors', href: '/honors' },
  { label: 'Contact', href: '/contact' },
];

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: '#FFFFFF',
      backdropFilter: 'blur(8px)',
      borderBottom: 'none',
      height: 'var(--nav-height)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 clamp(20px, 5vw, 48px)',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Link href="/" style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.15rem',
          fontWeight: 600,
          color: 'var(--color-primary)',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}>
          <img
            src={PROF.photo}
            alt={PROF.name}
            style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover' }}
          />
          {PROF.name}
        </Link>

        {/* Desktop nav */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '28px',
        }} className="desktop-nav">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontSize: '0.9rem',
                fontWeight: pathname === item.href ? 600 : 400,
                color: pathname === item.href ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Hamburger for mobile */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="mobile-menu-btn"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 8,
          }}
        >
          <span style={{
            display: 'block',
            width: 22,
            height: 2,
            background: 'var(--color-text)',
            marginBottom: 5,
            transition: 'transform 0.2s',
            transform: open ? 'rotate(45deg) translate(3px, 3px)' : 'none',
          }} />
          <span style={{
            display: 'block',
            width: 22,
            height: 2,
            background: 'var(--color-text)',
            marginBottom: 5,
            opacity: open ? 0 : 1,
            transition: 'opacity 0.2s',
          }} />
          <span style={{
            display: 'block',
            width: 22,
            height: 2,
            background: 'var(--color-text)',
            transition: 'transform 0.2s',
            transform: open ? 'rotate(-45deg) translate(3px, -3px)' : 'none',
          }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{
          position: 'absolute',
          top: 'var(--nav-height)',
          left: 0,
          right: 0,
          background: '#FFFFFF',
          borderBottom: '1px solid var(--color-border)',
          padding: '16px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: '0.95rem',
                fontWeight: pathname === item.href ? 600 : 400,
                color: pathname === item.href ? 'var(--color-primary)' : 'var(--color-text)',
                textDecoration: 'none',
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

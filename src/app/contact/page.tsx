
'use client';

import { useState } from 'react';
import { PROF } from '@/content/professor';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({
    type: '',
    message: '',
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setResponse({ type: '', message: '' });

    const form = e.currentTarget;
    const fd = new FormData(form);

    const formData = {
      name: fd.get('name'),
      email: fd.get('email'),
      affiliation: fd.get('affiliation'),
      message: fd.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong.');
      }

      setResponse({
        type: 'success',
        message: 'Your message has been sent successfully!',
      });

      form.reset();

    } catch (error) {
      setResponse({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Unable to send your message. Please try again.',
      });

    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section style={{ padding: '3.5rem 0 2rem' }}>
        <div className="page-container">
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2.25rem',
              fontWeight: 600,
              color: 'var(--color-primary-dark)',
              marginBottom: '0.25rem',
            }}
          >
            Academic Contact
          </h1>

          <p className="section-subtitle">
            Connect with the Department of Computer Engineering at Jamia Millia Islamia.
          </p>
        </div>
      </section>

      <section style={{ padding: '2rem 0 4rem' }}>
        <div className="page-container">
          <div
            className="grid-2"
            style={{ gap: '3rem', alignItems: 'start' }}
          >
            {/* Left — Contact Details */}
            <div>
              <h2
                className="section-heading"
                style={{ marginBottom: '1.25rem' }}
              >
                Academic Department
              </h2>

              <div className="card" style={{ marginBottom: '2rem' }}>
                <p style={{ lineHeight: 1.8 }}>
                  {PROF.address.department}<br />
                  {PROF.address.faculty}<br />
                  {PROF.address.institution}, {PROF.address.city}<br />
                  <span style={{ color: 'var(--color-text-secondary)' }}>
                    ({PROF.address.type})
                  </span>
                  <br />
                  <span style={{ color: 'var(--color-text-secondary)' }}>
                    {PROF.address.locality}
                  </span>
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '4px' }}>
                  Office Location
                </h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  {PROF.office}
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '4px' }}>
                  Official Correspondence
                </h3>
                <p>
                  <a href={`mailto:${PROF.email}`}>{PROF.email}</a>
                </p>
                <p>
                  <a href={`mailto:${PROF.emailAlt}`}>{PROF.emailAlt}</a>
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '4px' }}>
                  Office Telephone
                </h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  {PROF.phone}
                </p>
              </div>

              <div>
                <h3 style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '4px' }}>
                  Consultation Hours
                </h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  {PROF.officeHours}
                </p>
              </div>
            </div>

            {/* Right — Contact Form */}
            <div>
              <h2
                className="section-heading"
                style={{ marginBottom: '0.5rem' }}
              >
                Send Direct Message
              </h2>

              <p
                style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: '0.9rem',
                  marginBottom: '1.5rem',
                }}
              >
                Inquiries are delivered directly to Dr. Ahmad&apos;s university mailbox.
              </p>

              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem',
                  }}
                >
                  <div>
                    <label>Full Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label>Email Address</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label>Affiliation</label>
                    <input
                      name="affiliation"
                      type="text"
                      placeholder="University or Organization"
                    />
                  </div>

                  <div>
                    <label>Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Your message..."
                    />
                  </div>

                  {/* Response Message */}
                  {response.message && (
                    <div
                      role="status"
                      aria-live="polite"
                      style={{
                        padding: '0.85rem 1rem',
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        backgroundColor:
                          response.type === 'success'
                            ? '#e8f5e9'
                            : '#fdecec',
                        color:
                          response.type === 'success'
                            ? '#216e39'
                            : '#b42318',
                      }}
                    >
                      {response.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn-pill btn-primary"
                    style={{
                      alignSelf: 'flex-start',
                      opacity: loading ? 0.7 : 1,
                      cursor: loading ? 'not-allowed' : 'pointer',
                    }}
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Correspondence'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { PERSONAL } from '../data'

const LINKS = [
  { href: `mailto:${PERSONAL.email}`, icon: '✉', cls: '', label: 'Email', val: PERSONAL.email },
  { href: PERSONAL.linkedin, icon: 'in', cls: 'alt', label: 'LinkedIn', val: 'linkedin.com/in/biharibhau', blank: true },
  { href: PERSONAL.github, icon: '⌥', cls: '', label: 'GitHub', val: 'github.com/bihari-bhau', blank: true },
  { href: PERSONAL.resumeUrl, icon: '↓', cls: 'alt', label: 'Resume', val: 'View & Download on Google Drive', blank: true },
  { href: '#', icon: '📍', cls: '', label: 'Location', val: PERSONAL.location },
]

export default function Contact() {
  return (
    <section id="contact" className="section-wrap no-top">
      <div className="contact-grid">
        <div className="r">
          <div className="s-tag">// let's_connect</div>
          <div className="contact-big">
            Let's build<br />something <em>great.</em>
          </div>
          <p className="contact-sub">
            Open to full-stack engineering, AI/ML, and LLM evaluation roles. Based in Gurugram —
            available for on-site, hybrid, or remote positions.
          </p>
          <a href={`mailto:${PERSONAL.email}`} className="btn btn-primary">
            Send an Email ↗
          </a>
        </div>
        <div className="contact-links r" data-d="2">
          {LINKS.map((l) => (
            <a
              key={l.label}
              className="c-link"
              href={l.href}
              target={l.blank ? '_blank' : undefined}
              rel={l.blank ? 'noreferrer' : undefined}
            >
              <div className={`c-icon ${l.cls}`}>{l.icon}</div>
              <div>
                <div className="c-label">{l.label}</div>
                <div className="c-val">{l.val}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

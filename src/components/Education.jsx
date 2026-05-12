import { EDUCATION } from '../data'

export default function Education() {
  return (
    <section id="education" className="section-wrap no-top">
      <div className="s-tag r">// education</div>
      <h2 className="s-title r">Academic <em>Background.</em></h2>

      <div className="edu-grid">
        <div className="edu-card r">
          <div className="edu-badge-sm">{EDUCATION.level}</div>
          <div className="edu-deg">{EDUCATION.degree}</div>
          <div className="edu-inst">{EDUCATION.institution}</div>
          <div className="edu-year">{EDUCATION.period}</div>
        </div>
        <div className="edu-card current r" data-d="1">
          <div className="edu-badge-sm">CURRENTLY</div>
          <div className="edu-deg">LLM Post-Training Intern</div>
          <div className="edu-inst">Ethara AI, Gurugram</div>
          <div className="edu-year">Jan 2026 – Present</div>
        </div>
      </div>

      <div className="s-tag r" style={{ marginTop: '8px' }}>// certifications</div>
      <div className="certs-grid r" data-d="1">
        {EDUCATION.certifications.map((cert) => (
          <div className="cert" key={cert}>{cert}</div>
        ))}
      </div>
    </section>
  )
}

import { EXPERIENCE } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="section-wrap no-top">
      <div className="s-tag r">// experience</div>
      <h2 className="s-title r">Where I've <em>Worked.</em></h2>
      <div className="timeline">
        {EXPERIENCE.map((job, i) => (
          <div className="exp-card r" data-d={String(i + 1)} key={job.company}>
            <div className={`tl-dot dot-${job.color}`} />
            <div className="exp-company">{job.company}</div>
            <div className="exp-role">{job.role}</div>
            <div className="exp-meta">📍 {job.location} &nbsp;·&nbsp; {job.period}</div>
            <ul className="exp-bullets">
              {job.bullets.map((b, j) => (
                <li key={j} dangerouslySetInnerHTML={{ __html: b }} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

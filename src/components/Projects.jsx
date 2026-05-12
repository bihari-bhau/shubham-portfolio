import { PROJECTS } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="section-wrap no-top">
      <div className="s-tag r">// projects</div>
      <h2 className="s-title r">What I've <em>Built.</em></h2>
      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <div className="proj-card r" data-d={String(i + 1)} key={p.num}>
            <div className="proj-bg">{p.num}</div>
            <div className="proj-header">
              <span className="proj-badge">{p.period}</span>
              <div className="proj-links-top">
                <a className="proj-link-sm" href={p.github} target="_blank" rel="noreferrer">
                  ⌥ GitHub
                </a>
                <a className="proj-link-sm" href={p.live} target="_blank" rel="noreferrer">
                  {p.isLive && <span className="live-dot" />}
                  {p.isLive ? 'Live' : 'Demo'}
                </a>
              </div>
            </div>
            <div className="proj-title">{p.title}</div>
            <p className="proj-desc">{p.desc}</p>
            <div className="proj-stack">
              {p.stack.map((s) => (
                <span className="stack-pill" key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

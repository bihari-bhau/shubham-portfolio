const PILLS = [
  { icon: '🧠', cls: 'o', title: 'AI Post-Training',   sub: 'RLHF evaluation, agent benchmarking, multi-turn analysis' },
  { icon: '⚡', cls: 'c', title: 'Full-Stack Dev',       sub: 'React · Django REST · PostgreSQL · Vercel · Railway' },
  { icon: '🏗️', cls: 'o', title: 'Real-World Builder',   sub: '2 live products · CI/CD · payments · auth systems' },
  { icon: '📍', cls: 'c', title: 'Based in Gurugram',    sub: 'Haryana, India · Open to remote & on-site roles' },
]

export default function About() {
  return (
    <section id="about" className="section-wrap">
      <div className="s-tag r">// about_me</div>
      <h2 className="s-title r">Who I <em>Am.</em></h2>
      <div className="about-grid">
        <div className="about-text r">
          <p>
            I'm a <span className="hl-o">LLM Post-Training Engineer</span> currently at Ethara AI in
            Gurugram, where I evaluate AI responses across 6 quality dimensions and benchmark coding
            agents — Claude, GPT, and Kimi — on real Python library reconstruction tasks using the
            Commit0 framework.
          </p>
          <p>
            Beyond AI evaluation, I'm a full-stack developer who builds and ships things. I created{' '}
            <span className="hl-c">Bihar Skill Hub</span>, a live educational platform serving students
            across Bihar with 33 courses, JWT auth, and Razorpay payments — deployed across Vercel and
            Railway.
          </p>
          <p>
            I come from an EEE background, which taught me to think in systems. I write Python for AI,
            Django for APIs, React for UIs, and reach for Docker and PostgreSQL when things need to
            scale.
          </p>
        </div>
        <div className="about-pills r" data-d="2">
          {PILLS.map((p) => (
            <div className="pill" key={p.title}>
              <div className={`pill-icon ${p.cls}`}>{p.icon}</div>
              <div>
                <div className="pill-title">{p.title}</div>
                <div className="pill-sub">{p.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

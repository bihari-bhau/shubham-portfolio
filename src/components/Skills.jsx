import { SKILLS } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="section-wrap no-top">
      <div className="s-tag r">// skills</div>
      <h2 className="s-title r">What I <em>Know.</em></h2>
      {SKILLS.map((cat, i) => (
        <div className="skill-cat r" data-d={String((i % 4) + 1)} key={cat.category}>
          <div className="cat-name">{cat.category}</div>
          <div className="skills-row">
            {cat.items.map((item) => (
              <div className="sk" key={item}>{item}</div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

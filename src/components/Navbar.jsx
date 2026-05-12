export default function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        &lt;<em>SS</em> /&gt;
      </div>
      <ul className="nav-links">
        <li><a href="#about">about</a></li>
        <li><a href="#experience">exp</a></li>
        <li><a href="#skills">skills</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
      <div className="nav-badge">available now</div>
    </nav>
  )
}

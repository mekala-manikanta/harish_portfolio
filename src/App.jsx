import { useEffect, useState } from 'react'
import {
  Activity, ArrowUp, Blocks, Briefcase, Building2, Calendar, Check, CircleCheck, Cloud, Copy,
  Database, Download, FileText, Gauge, GitBranch, GraduationCap, Layers, Mail, MapPin, Menu,
  Moon, Phone, Send, ShieldCheck, Sun, Terminal, Workflow, X,
} from 'lucide-react'
import {
  profile, stats, heroPipeline, currentJob, previousJobs, projects, approach, skills, education, domains,
} from './data.js'

const ICONS = { Activity, Blocks, Cloud, Database, Gauge, GitBranch, Layers, ShieldCheck, Terminal, Workflow }

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

/* Turns "**bold**" markers in data strings into <strong> */
function Rich({ text }) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part))
}

function Eyebrow({ num, label }) {
  return (
    <p className="eyebrow">
      {num} · {label}
    </p>
  )
}

function Chips({ items }) {
  return (
    <ul className="chips">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  )
}

function Bullets({ points }) {
  return (
    <ul className="bullets">
      {points.map((p) => (
        <li key={p}>
          <Rich text={p} />
        </li>
      ))}
    </ul>
  )
}

/* ---------------- Header ---------------- */
function Header({ theme, onToggleTheme }) {
  const [active, setActive] = useState('about')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#about" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">{profile.initials}</span>
          {profile.firstName}
        </a>

        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Main">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={active === n.id ? 'is-active' : ''}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          {profile.resume && (
            <a className="btn-outline" href={profile.resume} download>
              <Download size={16} /> Resume
            </a>
          )}
          <button className="icon-btn" onClick={onToggleTheme} aria-label="Toggle dark mode">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="icon-btn menu-btn" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
    </header>
  )
}

/* ---------------- Hero ---------------- */
function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="visual-frame">
        {profile.photo ? (
          <img src={profile.photo} alt={profile.name} className="visual-photo" />
        ) : (
          <div className="pipeline">
            <div className="pipeline-top">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="mono">IICS taskflow</span>
            </div>
            <ol>
              {heroPipeline.map((p) => (
                <li key={p.step}>
                  <CircleCheck size={18} className="ok" />
                  <div>
                    <strong>{p.step}</strong>
                    <span>{p.detail}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>

      <div className="float-card float-top">
        <span className="tile tile-dark">
          <Database size={18} />
        </span>
        <div>
          <small>ETL & data integration</small>
          <strong>4+ years</strong>
        </div>
      </div>

      <div className="float-card float-bottom">
        <span className="tile">
          <Briefcase size={18} />
        </span>
        <div>
          <small>Most recently at {currentJob.company}</small>
          <strong>{currentJob.role}</strong>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section id="about" className="hero">
      <div className="container hero-grid">
        <div>
          <p className="status">
            <span className="status-dot" />
            {profile.status}
          </p>
          <p className="mono hero-tags">{profile.tags.join('  ·  ')}</p>
          <h1>
            Hi, I&apos;m <span className="mark">{profile.firstName}</span>.
          </h1>
          <p className="lead">
            {profile.leadBefore}
            <span className="underline">{profile.leadHighlight}</span>
          </p>
          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-actions">
            {profile.resume && (
              <a className="btn btn-dark" href={profile.resume} download>
                <Download size={18} /> Download resume
              </a>
            )}
            <a className="btn btn-light" href="#contact">
              <Mail size={18} /> Get in touch
            </a>
          </div>
          {profile.resume && (
            <p className="resume-note">
              <FileText size={15} /> Resume: PDF ·{' '}
              <a href={profile.resume} target="_blank" rel="noreferrer">
                View in browser
              </a>
            </p>
          )}

          <p className="mono label">Daily stack</p>
          <Chips items={profile.stack} />
        </div>
        <HeroVisual />
      </div>

      <div className="container">
        <dl className="stats">
          {stats.map((s) => (
            <div key={s.label}>
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

/* ---------------- Experience ---------------- */
function Experience() {
  return (
    <section id="experience" className="section surface">
      <div className="container">
        <Eyebrow num="01" label="Experience" />
        <h2>Where I&apos;ve worked</h2>

        <article className="card job">
          <div className="job-head">
            <span className="tile">
              <Briefcase size={20} />
            </span>
            <div>
              <h3>{currentJob.role}</h3>
              <p className="sub">{currentJob.company}</p>
            </div>
            <span className="pill">
              <Calendar size={14} /> {currentJob.period}
            </span>
          </div>
          <p className="job-summary">{currentJob.summary}</p>

          <div className="job-groups">
            {currentJob.groups.map((g) => {
              const Icon = ICONS[g.icon]
              return (
                <div key={g.title}>
                  <h4 className="group-title">
                    <Icon size={17} /> {g.title}
                  </h4>
                  <Bullets points={g.points} />
                </div>
              )
            })}
          </div>
          <div className="divider" />
          <Chips items={currentJob.tools} />
        </article>

        <h3 className="before-title">Before ValueMomentum</h3>
        <div className="before-grid">
          {previousJobs.map((j) => (
            <article key={j.company} className="card before">
              <span className="pill small">{j.period}</span>
              <h4>{j.company}</h4>
              <p className="sub">{j.role}</p>
              <p>{j.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Projects ---------------- */
function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Eyebrow num="02" label="Projects" />
        <h2>Things I&apos;ve worked on</h2>
        <p className="section-intro">
          Client work from my earlier roles. The code belongs to the clients, so there&apos;s nothing to
          link, but each card shows what I built and how the data moved.
        </p>

        <div className="project-list">
          {projects.map((p) => (
            <article key={p.title} className="card project">
              <div>
                <p className="project-meta">
                  <span className="tag">{p.tag}</span>
                  {p.kind}
                </p>
                <h3>{p.title}</h3>
                <p className="project-intro">{p.intro}</p>
                <Bullets points={p.points} />
                <Chips items={p.tools} />
              </div>

              <div className="flow">
                <p className="mono flow-title">{p.flowTitle}</p>
                <ol>
                  {p.flow.map((f, i) => (
                    <li key={f.step}>
                      <span className={`num ${i === p.flow.length - 1 ? 'num-accent' : ''}`}>{i + 1}</span>
                      <div>
                        <strong>{f.step}</strong>
                        <span>{f.detail}</span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Approach ---------------- */
function Approach() {
  return (
    <section className="section surface">
      <div className="container">
        <Eyebrow num="03" label="Approach" />
        <h2>How I work</h2>
        <p className="section-intro">{approach.intro}</p>
        <div className="approach-grid">
          {approach.items.map((a) => {
            const Icon = ICONS[a.icon]
            return (
              <article key={a.title} className="card approach">
                <span className="tile">
                  <Icon size={20} />
                </span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
                <p className="mono approach-tags">{a.tags}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Skills ---------------- */
function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Eyebrow num="04" label="Skills" />
        <h2>What I work with</h2>
        <div className="skills-grid">
          {skills.map((s) => {
            const Icon = ICONS[s.icon]
            return (
              <article key={s.title} className="card skill">
                <div className="skill-head">
                  <span className="tile">
                    <Icon size={20} />
                  </span>
                  <h3>{s.title}</h3>
                </div>
                <Chips items={s.items} />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Education ---------------- */
function Education() {
  return (
    <section id="education" className="section surface">
      <div className="container">
        <Eyebrow num="05" label="Education" />
        <h2>Education &amp; domains</h2>
        <div className="edu-grid">
          <div>
            <h3 className="col-title">
              <GraduationCap size={20} /> Education
            </h3>
            <ol className="timeline">
              {education.map((e, i) => (
                <li key={e.school} className={i === 0 ? 'is-first' : ''}>
                  <p className="mono year">{e.year}</p>
                  <h4>{e.school}</h4>
                  <p>{e.degree}</p>
                  <span className="score">{e.score}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="col-title">
              <Building2 size={20} /> Industry domains
            </h3>
            <div className="domain-list">
              {domains.map((d) => (
                <article key={d.name} className="card domain">
                  <h4>{d.name}</h4>
                  <p>{d.clients}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Contact ---------------- */
function Contact() {
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  const send = (e) => {
    e.preventDefault()
    const subject = `Portfolio enquiry from ${form.name || 'a visitor'}`
    const body = `${form.message}\n\n${form.name}\n${form.email}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  return (
    <section id="contact" className="section">
      <div className="container contact-grid">
        <aside className="contact-card">
          <div className="contact-visual">
            {profile.photo ? <img src={profile.photo} alt={profile.name} /> : <span>{profile.initials}</span>}
          </div>
          <div className="contact-body">
            <h3>{profile.name}</h3>
            <p className="contact-sub">ETL Developer · Informatica IICS · Snowflake</p>
            <ul>
              <li>
                <span className="round">
                  <Mail size={17} />
                </span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <button className="copy-btn" onClick={copy} aria-label="Copy email address">
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </li>
              {profile.resume && (
                <li>
                  <span className="round">
                    <Download size={17} />
                  </span>
                  <a href={profile.resume} download>
                    Download resume (PDF)
                  </a>
                </li>
              )}
              <li>
                <span className="round">
                  <Phone size={17} />
                </span>
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
              </li>
              <li>
                <span className="round">
                  <MapPin size={17} />
                </span>
                <span>{profile.location}</span>
              </li>
            </ul>
          </div>
        </aside>

        <div>
          <Eyebrow num="06" label="Contact" />
          <h2>Let&apos;s talk</h2>
          <p className="section-intro">
            If you&apos;re hiring for an Informatica, IICS or cloud data engineering role, I&apos;d like to hear
            about it. Email is the quickest way to reach me. The form below opens your email app with your
            message filled in.
          </p>
          <form className="contact-form" onSubmit={send}>
            <label>
              Your name
              <input value={form.name} onChange={update('name')} placeholder="Jane Doe" required />
            </label>
            <label>
              Your email
              <input type="email" value={form.email} onChange={update('email')} placeholder="jane@company.com" required />
            </label>
            <label className="full">
              Message
              <textarea
                value={form.message}
                onChange={update('message')}
                placeholder="What's the role, and how can I help?"
                rows={6}
                required
              />
            </label>
            <button className="btn btn-dark full-right" type="submit">
              <Send size={17} /> Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

/* ---------------- App ---------------- */
function initialTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
  } catch {
    /* storage blocked */
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function App() {
  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* storage blocked; theme still applies for this visit */
    }
  }, [theme])

  return (
    <>
      <Header theme={theme} onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Approach />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <nav aria-label="Footer">
            <a href={`mailto:${profile.email}`}>Email</a>
            {profile.resume && (
              <a href={profile.resume} target="_blank" rel="noreferrer">
                Resume (PDF)
              </a>
            )}
            <a href="#about">
              Back to top <ArrowUp size={14} />
            </a>
          </nav>
        </div>
      </footer>
    </>
  )
}

"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  Command,
  Download,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Search,
  Sparkles,
  Sun,
  X
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useSpring
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  certifications,
  experiences,
  focusAreas,
  milestones,
  microgreens,
  navItems,
  profile,
  researchTopics,
  skills,
  stats,
  type Experience
} from "@/data/portfolio";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Reveal({
  children,
  className,
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <Reveal className="section-heading">
      <span className="eyebrow"><span />{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </Reveal>
  );
}

function Counter({
  value,
  suffix
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const started = performance.now();
    const duration = 1200;
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - started) / duration, 1);
      setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return <span ref={ref}>{display}{suffix}</span>;
}

function Portrait() {
  return (
    <div className="portrait-shell portrait-photo-shell">
      <div className="portrait-glow" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${basePath}/images/piyush-more-profile.jpg`}
        alt="Piyush More"
        width="1254"
        height="1254"
      />
      <span className="portrait-label"><Sparkles size={14} /> Software · Automation · AI</span>
    </div>
  );
}

function ArchitectureVisual({ type }: { type: Experience["visual"] }) {
  if (type === "analytics") {
    return (
      <div className="project-evidence" aria-label="CGM spike detection result">
        <div className="evidence-bar"><span><i /> Experiment output</span><b>CGM spike detection</b></div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${basePath}/images/cgm-spike-detection.png`} alt="CGM glucose chart showing detected meal and spike markers" />
      </div>
    );
  }

  if (type === "imaging") {
    return (
      <div className="project-evidence evidence-dark" aria-label="Kidney stone detection interface">
        <div className="evidence-bar"><span><i /> System output</span><b>Real-time detection study</b></div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${basePath}/images/kidney-stone-detection.jpg`} alt="Endoscopic kidney stone detection interface with highlighted target" />
      </div>
    );
  }

  const nodes =
    type === "automation"
      ? ["Test data", "UI driver", "Validation", "Evidence"]
      : ["Trigger", "Orchestrate", "Verify", "Notify"];

  return (
    <div className={cx("architecture", `architecture-${type}`)}>
      {nodes.map((node, index) => (
        <div className="arch-step" key={node}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <b>{node}</b>
          {index < nodes.length - 1 && <i>→</i>}
        </div>
      ))}
    </div>
  );
}

function ProjectCard({ item, index }: { item: Experience; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <motion.article
      layout
      className={cx("project-card", open && "project-card-open")}
      transition={{ layout: { duration: 0.35 } }}
    >
      <button className="project-summary" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        <span className="project-number">{item.number}</span>
        <span>
          <small>Featured project</small>
          <strong>{item.title}</strong>
          <em>{item.summary}</em>
        </span>
        <span className="project-toggle"><ChevronDown size={20} /></span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="project-detail"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <ArchitectureVisual type={item.visual} />
            <div className="project-columns">
              <div><small>Problem</small><p>{item.problem}</p></div>
              <div><small>Approach</small><p>{item.approach}</p></div>
            </div>
            <div className="outcomes">
              {item.outcomes.map((outcome) => <span key={outcome}><Check size={14} />{outcome}</span>)}
            </div>
            <div className="tags">{item.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

function CommandPalette({
  open,
  close
}: {
  open: boolean;
  close: () => void;
}) {
  const [query, setQuery] = useState("");
  const results = useMemo(
    () => navItems.filter(([label]) => label.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="palette-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={close}>
          <motion.div className="palette" initial={{ opacity: 0, y: -16, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10, scale: .98 }} onMouseDown={(event) => event.stopPropagation()}>
            <div className="palette-input"><Search size={18} /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the portfolio..." /><kbd>ESC</kbd></div>
            <div className="palette-results">
              <small>Navigate</small>
              {results.map(([label, id]) => (
                <a key={id} href={`#${id}`} onClick={close}><span>{label}</span><ArrowUpRight size={15} /></a>
              ))}
              {results.length === 0 && <p>No matching section.</p>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 30 });

  useMotionValueEvent(scrollYProgress, "change", () => {
    const sections = navItems.map(([, id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const current = [...sections].reverse().find((section) => section.getBoundingClientRect().top <= 180);
    if (current) setActive(current.id);
  });

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const useDark = saved ? saved === "dark" : true;
    setDark(useDark);
    document.documentElement.dataset.theme = useDark ? "dark" : "light";
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((value) => !value);
      }
      if (event.key === "Escape") setPaletteOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <main>
      <motion.div className="reading-progress" style={{ scaleX: progress }} />
      <div className="noise" />
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Piyush More home"><span>PM</span><b>Piyush More</b></a>
        <nav className="desktop-nav">
          {navItems.slice(0, 7).map(([label, id]) => <a className={active === id ? "active" : ""} href={`#${id}`} key={id}>{label === "Publications & IP" ? "IP" : label}</a>)}
        </nav>
        <div className="nav-actions">
          <button onClick={() => setPaletteOpen(true)} className="command-button" aria-label="Open search"><Command size={15} /><span>Search</span><kbd>Ctrl K</kbd></button>
          <button onClick={toggleTheme} className="icon-button" aria-label="Toggle color theme">{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
          <button onClick={() => setMenuOpen((value) => !value)} className="icon-button menu-button" aria-label="Toggle menu">{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
              {navItems.map(([label, id]) => <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>{label}</a>)}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <section id="home" className="hero">
        <div className="hero-orb hero-orb-a" /><div className="hero-orb hero-orb-b" /><div className="hero-grid" />
        <div className="container hero-layout">
          <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
            <span className="availability"><i /> Open to software engineering opportunities</span>
            <p className="hero-kicker">Hello, I&apos;m</p>
            <h1>Piyush<br /><span>More.</span></h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-statement">{profile.statement}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View projects <ArrowDown size={17} /></a>
              <a className="button button-secondary" href={`${basePath}/resume_trial2.pdf`} download>Resume <Download size={17} /></a>
            </div>
            <div className="social-row">
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} />LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} />GitHub</a>
              <a href={`mailto:${profile.email}`}><Mail size={17} />Email</a>
            </div>
          </motion.div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: .15 }}>
            <Portrait />
            <div className="floating-chip chip-one"><Code2 size={16} /><span><b>Building</b>practical systems</span></div>
            <div className="floating-chip chip-two"><Sparkles size={16} /><span><b>Exploring</b>applied AI</span></div>
          </motion.div>
        </div>
        <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDown size={16} /></a>
      </section>

      <section className="stats-strip">
        <div className="container stats-grid">
          {stats.map((stat) => <div className="stat" key={stat.label}><Counter value={stat.value} suffix={stat.suffix} /><small>{stat.label}</small></div>)}
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <SectionHeading eyebrow="About" title="Curious by default. Practical by design." copy="A software engineer who learns unfamiliar domains quickly, compares approaches carefully, and turns promising ideas into working systems." />
          <div className="about-grid">
            <Reveal className="about-story">
              <p className="lead">I work where <strong>software engineering</strong>, <strong>automation</strong>, and <strong>applied AI</strong> meet real operational problems.</p>
              <p>Currently, I&apos;m a System Design and Development Intern at Bio-Rad Medisys, contributing to healthcare software validation, automation frameworks, analytics research, and product feasibility studies.</p>
              <p>My focus is software-led: reliable systems, useful automation, interpretable analytics, and research that can survive contact with product constraints.</p>
              <div className="education-card">
                <GraduationCap size={23} />
                <div><small>Education</small><b>{profile.education.degree}</b><span>{profile.education.university} · CGPA {profile.education.cgpa}</span><em>{profile.education.graduation}</em></div>
              </div>
            </Reveal>
            <div className="focus-grid">
              {focusAreas.map(([title, text], index) => <Reveal className="focus-card" key={title} delay={index * .06}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></Reveal>)}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section section-tinted">
        <div className="container">
          <SectionHeading eyebrow="Experience" title="Engineering inside healthcare." copy="Bio-Rad Medisys · System Design and Development Intern · January 2026 - Present" />
          <div className="experience-layout">
            <Reveal className="experience-aside">
              <span className="company-mark">BR</span>
              <h3>Bio-Rad Medisys</h3>
              <p>Healthcare Technology & Medical Devices</p>
              <div className="timeline-line"><i /></div>
            </Reveal>
            <div className="experience-list">
              {experiences.map((item, index) => (
                <Reveal className="experience-item" key={item.id} delay={index * .06}>
                  <span className="experience-index">{item.number}</span>
                  <div><h3>{item.title}</h3><p>{item.summary}</p><div className="tags">{item.technologies.slice(0, 5).map((tag) => <span key={tag}>{tag}</span>)}</div></div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <SectionHeading eyebrow="Selected Work" title="Projects with a reason to exist." copy="Open each case study for the problem, approach, evidence, and technical stack." />
          <div className="project-list">{experiences.slice(0, 3).map((item, index) => <ProjectCard item={item} index={index} key={item.id} />)}</div>
          <Reveal className="microgreens-card">
            <div className="microgreens-copy">
              <span className="eyebrow"><span />Academic product project</span>
              <h3>{microgreens.title}</h3>
              <p>{microgreens.overview}</p>
              <div className="tags">{microgreens.technologies.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="project-columns"><div><small>Role</small><p>{microgreens.role}</p></div><div><small>Outcomes</small><p>IEEE publication and Government of India industrial design registration.</p></div></div>
            </div>
            <div className="plant-visual">
              <div className="sensor-card"><span>Growth index</span><b>Tracking</b><i /></div>
              <svg viewBox="0 0 400 310"><path d="M200 278V119" stroke="#6ee7d2" strokeWidth="9" strokeLinecap="round" /><path d="M200 166c-70 4-106-32-108-88 67-5 106 26 108 88zM201 124c65 2 100-29 103-81-64-4-101 27-103 81zM200 220c-51 3-79-23-81-65 50-4 80 22 81 65z" fill="#6ee7d2" opacity=".78" /><path d="M72 279h256" stroke="#7380b7" strokeWidth="3" /><path d="M96 279l22-38h164l22 38" fill="#19213c" stroke="#7380b7" strokeWidth="3" /></svg>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="research" className="section section-tinted">
        <div className="container">
          <SectionHeading eyebrow="Research" title="Evidence before excitement." copy="A repeatable process for moving from an open question to a defensible technical direction." />
          <div className="research-process">
            {["Frame", "Review", "Prototype", "Evaluate", "Refine"].map((step, index) => <Reveal className="process-step" key={step} delay={index * .08}><span>{index + 1}</span><b>{step}</b>{index < 4 && <i />}</Reveal>)}
          </div>
          <div className="research-grid">
            {researchTopics.map((topic, index) => <Reveal className="research-card" key={topic.title} delay={index * .08}><span className="research-icon">{index === 0 ? <Sparkles /> : index === 1 ? <BookOpen /> : index === 2 ? <Search /> : <Command />}</span><h3>{topic.title}</h3><p>{topic.text}</p><span className="research-status">Research & feasibility</span></Reveal>)}
          </div>
        </div>
      </section>

      <section id="publications" className="section">
        <div className="container">
          <SectionHeading eyebrow="Publications & IP" title="Ideas carried through to formal outcomes." />
          <div className="achievement-grid">
            <Reveal className="achievement-card publication-card">
              <span className="achievement-icon"><BookOpen /></span><small>Peer-reviewed publication</small><h3>IEEE ICCDS 2025</h3><p>Research related to smart monitoring and growth detection for microgreens cultivation using IoT and AI-enabled technologies.</p><span className="achievement-foot">Conference publication <ExternalLink size={14} /></span>
            </Reveal>
            <Reveal className="achievement-card ip-card" delay={.1}>
              <span className="achievement-icon"><Award /></span><small>Industrial design registration</small><h3>Microgreens Monitoring and Growth Detection System</h3><p>Government of India registration issued in April 2025.</p><span className="registration">445226-001</span>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="skills" className="section section-tinted">
        <div className="container">
          <SectionHeading eyebrow="Capabilities" title="A toolkit built around useful outcomes." />
          <div className="skills-layout">
            <Reveal className="skill-orbit">
              <div className="orbit orbit-one" /><div className="orbit orbit-two" />
              <div className="orbit-core"><Code2 /><b>Software</b><span>Engineering</span></div>
              <span className="orbit-label label-one">Automation</span><span className="orbit-label label-two">Applied AI</span><span className="orbit-label label-three">Analytics</span><span className="orbit-label label-four">Testing</span>
            </Reveal>
            <div className="skill-groups">
              {Object.entries(skills).map(([category, items], index) => <Reveal className="skill-group" key={category} delay={index * .05}><h3>{category}</h3><div className="skill-pills">{items.map((item) => <span key={item}>{item}</span>)}</div></Reveal>)}
            </div>
          </div>
        </div>
      </section>

      <section id="certifications" className="section">
        <div className="container">
          <SectionHeading eyebrow="Certifications" title="Structured learning, applied perspective." />
          <div className="cert-grid">
            {certifications.map((certificate, index) => <Reveal className="cert-card" key={certificate.title} delay={index * .07}><span className="cert-code">{certificate.code}</span><div><small>{certificate.issuer}</small><h3>{certificate.title}</h3></div><Award size={18} /></Reveal>)}
          </div>
        </div>
      </section>

      <section id="timeline" className="section section-tinted">
        <div className="container">
          <SectionHeading eyebrow="Timeline" title="The path so far." />
          <div className="journey">
            {milestones.map((milestone, index) => <Reveal className="milestone" key={`${milestone.year}-${milestone.title}`} delay={index * .05}><div className="milestone-date">{milestone.year}</div><div className="milestone-dot"><span /></div><div className="milestone-content"><small>{milestone.label}</small><h3>{milestone.title}</h3><p>{milestone.text}</p></div></Reveal>)}
          </div>
        </div>
      </section>

      <section id="resume" className="section resume-section">
        <div className="container">
          <Reveal className="resume-card">
            <div className="resume-icon"><FileText /></div>
            <div><span className="eyebrow"><span />Resume</span><h2>The complete professional profile.</h2><p>Education, experience, research, publications, intellectual property, certifications, and technical skills in one document.</p></div>
            <a className="button button-primary" href={`${basePath}/resume_trial2.pdf`} download>Download resume <Download size={17} /></a>
          </Reveal>
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <div><span className="eyebrow"><span />Let&apos;s connect</span><h2>Building practical software for complex problems.</h2></div>
          <div className="contact-cards">
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /><span><small>Professional network</small><b>LinkedIn</b></span><ArrowUpRight /></a>
            <a href={profile.github} target="_blank" rel="noreferrer"><Github /><span><small>Code & experiments</small><b>GitHub</b></span><ArrowUpRight /></a>
            <a href={`mailto:${profile.email}`}><Mail /><span><small>Start a conversation</small><b>{profile.email}</b></span><ArrowUpRight /></a>
          </div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Piyush More</span><span>Software Engineering · Automation · Applied AI</span><a href="#home">Back to top <ArrowUpRight size={14} /></a></div>
      </footer>
      <CommandPalette open={paletteOpen} close={() => setPaletteOpen(false)} />
    </main>
  );
}

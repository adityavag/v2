import { useEffect, useMemo, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import Card from "./components/Card";
import Skill from "./components/Skill";
import projects from "./assets/projects.json";

const experience = [
  {
    role: "Software Developer Intern",
    company: "WeCredit",
    location: "Jaipur, India",
    period: "Nov 2025 - Jan 2026",
    points: [
      "Automated daily workflows with Python and Apache Airflow, reducing manual effort by 40%.",
      "Deployed Kuma on AWS EC2 and integrated Slack alerts to improve visibility and incident response."
    ]
  },
  {
    role: "Tech Consultant Intern",
    company: "Ernst & Young",
    location: "Jaipur, India",
    period: "Jan 2024 - Mar 2024",
    points: [
      "Supported technology transformation initiatives for the RGHS project.",
      "Implemented secure authentication and authorization with Spring Security and JWT."
    ]
  },
  {
    role: "Research Assistant",
    company: "SRM Institute of Science and Technology",
    location: "Chennai, India",
    period: "Jun 2023 - Apr 2024",
    points: [
      "Contributed to GUI development for a BARC DAE-sponsored computational fluid dynamics project.",
      "Delivered 50+ commits across bug fixes, UI enhancements, and feature implementations."
    ]
  }
];

const education = [
  {
    school: "University of New South Wales",
    degree: "Master of Information Technology",
    period: "Feb 2026 - Jan 2028 (expected)",
    location: "Sydney, Australia"
  },
  {
    school: "SRM Institute of Science and Technology",
    degree: "B.Tech. in Computer Science & Engineering (GPA: 9.07/10.0)",
    period: "May 2021 - May 2025",
    location: "Chennai, India"
  }
];

export default function App() {
  const sections = useMemo(
    () => [
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "skills", label: "Skills" },
      { id: "education", label: "Education" },
      { id: "publication", label: "Publication" }
    ],
    []
  );

  const [activeSection, setActiveSection] = useState("experience");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDepth, setScrollDepth] = useState(0);

  useEffect(() => {
    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]?.target?.id) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.1, 0.3, 0.6]
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, nextProgress)));
      setScrollDepth(window.scrollY);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [sections]);

  return (
    <main
      className="min-h-screen bg-page px-6 py-10 text-zinc-100 md:px-10 lg:px-14"
      style={{
        "--scroll-drift": `${Math.min(scrollDepth * 0.045, 36)}px`
      }}
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[330px,1fr] lg:gap-14">
        <aside className="reveal lg:sticky lg:top-10 lg:self-start">
          <p className="mb-4 text-[11px] uppercase tracking-[0.24em] text-zinc-500">Backend Engineering Portfolio</p>
          <h1 className="mb-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">Aditya Vardhan Agarwal</h1>
          <p className="mb-6 text-sm leading-relaxed text-zinc-300">
            Master of Information Technology student at UNSW focused on backend development and scalable systems.
            Experienced with Spring Boot and production-minded engineering practices, currently seeking a
            Engineering Internship opportunity.
          </p>

          <div className="space-y-3 border-l border-white/15 pl-4 text-sm text-zinc-300">
            <a className="contact-link" href="mailto:adityavagarwal7@gmail.com">
              <FaEnvelope /> adityavagarwal7@gmail.com
            </a>
            <a className="contact-link" href="tel:+610422347519">
              <FaPhone /> +61 0422 347 519
            </a>
            <a className="contact-link" href="https://github.com/adityavag" target="_blank" rel="noreferrer">
              <FaGithub /> github.com/adityavag
            </a>
            <a className="contact-link" href="https://linkedin.com/in/adityacse" target="_blank" rel="noreferrer">
              <FaLinkedin /> linkedin.com/in/adityacse
            </a>
          </div>

          <nav className="left-nav mt-8" aria-label="Section navigation">
            <div className="scroll-meter" aria-hidden="true">
              <span className="scroll-meter-fill" style={{ height: `${scrollProgress}%` }} />
            </div>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={`nav-link ${activeSection === section.id ? "is-active" : ""}`}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="content-column">
          <section
            id="experience"
            className={`reveal section-block scroll-mt-12 ${activeSection === "experience" ? "is-current" : ""}`}
            style={{ animationDelay: "80ms" }}
          >
          <h2 className="section-title">Experience</h2>
          <div className="space-y-4">
            {experience.map((item) => (
              <article key={item.role} className="line-item">
                <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold text-white md:text-lg">
                    {item.role} · <span className="font-medium text-zinc-300">{item.company}</span>
                  </h3>
                  <p className="text-xs uppercase tracking-wide text-zinc-500">{item.period}</p>
                </div>
                <p className="mb-3 text-sm text-zinc-500">{item.location}</p>
                <ul className="space-y-2 text-sm leading-relaxed text-zinc-300">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          </section>

          <section
            id="projects"
            className={`reveal section-block scroll-mt-12 ${activeSection === "projects" ? "is-current" : ""}`}
            style={{ animationDelay: "140ms" }}
          >
          <h2 className="section-title section-title-right">Projects</h2>
          <div className="space-y-3">
            {projects.map((project) => (
              <Card
                key={project.title}
                title={project.title}
                description={project.description}
                link={project.link}
                tags={project.tags}
              />
            ))}
          </div>
          </section>

          <section
            id="skills"
            className={`reveal section-block scroll-mt-12 ${activeSection === "skills" ? "is-current" : ""}`}
            style={{ animationDelay: "190ms" }}
          >
          <h2 className="section-title">Skills</h2>
          <Skill />
          </section>

          <section
            id="education"
            className={`reveal section-block scroll-mt-12 ${activeSection === "education" ? "is-current" : ""}`}
            style={{ animationDelay: "240ms" }}
          >
          <h2 className="section-title section-title-right">Education</h2>
          <div className="space-y-4">
            {education.map((item) => (
              <article key={item.school} className="line-item">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold text-white md:text-lg">{item.school}</h3>
                  <p className="text-xs uppercase tracking-wide text-zinc-500">{item.period}</p>
                </div>
                <p className="mt-2 text-sm text-zinc-300">{item.degree}</p>
                <p className="mt-1 text-sm text-zinc-500">{item.location}</p>
              </article>
            ))}
          </div>
          </section>

          <section
            id="publication"
            className={`reveal section-block scroll-mt-12 ${activeSection === "publication" ? "is-current" : ""}`}
            style={{ animationDelay: "280ms" }}
          >
          <h2 className="section-title">Publication</h2>
          <article className="line-item">
            <h3 className="text-base font-semibold text-white md:text-lg">Forecasting Malarial Parasite using ML</h3>
            <p className="mt-2 text-sm text-zinc-300">AIP Proceedings · ICICOT 2025</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              Collaborated on a custom CNN model to detect malaria parasites from blood smear images, supporting early
              and automated diagnosis in low-resource settings.
            </p>
          </article>
          </section>
        </div>
      </div>
    </main>
  );
}


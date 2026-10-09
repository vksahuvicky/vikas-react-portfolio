import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUp, ArrowDown, ArrowUpRight, CheckCircle2, Code2, Github, Linkedin,
  Mail, Menu, Moon, Phone, Sun, X, ExternalLink
} from "lucide-react";
import "./styles.css";

const skills = [
  ["React.js", "Advanced"],
  ["JavaScript ES6+", "Advanced"],
  ["Redux / Saga", "Advanced"],
  ["HTML5 / CSS3", "Advanced"],
  ["Tailwind CSS", "Strong"],
  ["Material UI / Bootstrap", "Strong"],
  ["Node.js / Express", "Working knowledge"],
  ["MongoDB / Mongoose", "Working knowledge"],
  ["REST APIs / Postman", "Strong"],
  ["Git / Agile", "Strong"],
  ["Unit Testing", "Strong"],
  ["WCAG / Accessibility", "Strong"]
];

const organizations = [
  {
    id: "capgemini",
    company: "Capgemini",
    role: "Software Engineer(Frontend)",
    duration: "2019 — 2022",
    summary: "Worked in a client-facing delivery environment building scalable user interfaces and modernization-focused front-end solutions.",
    projects: [
      {
        id: "capgemini-banking",
        title: "Nordea (Banking Platform - Frontend)",
        type: "Client Delivery • Banking Platform",
        duration: "2019 — 2022",
        techUsed: ["React", "Redux", "JavaScript", "SCSS", "REST APIs", "TypeScript", "Zeplin", "Axios", "Jira", "GitHub"],
        description: [
          "Engineered secure, transactional React-based web views for core consumer payment rails, structuring robust data binding and input form validation.",
          "Configured optimized asynchronous REST API integrations via Axios for dynamicviews and low-latency client-server client syncs.",
          "Crafted device-agnostic layouts from Zeplin wireframes using SASS and precise media breakpoint handling to maximize mobile responsiveness.",
          "Maintained full feature ownership throughout tight sprint deadlines, driving zero defect deployments and fixing high-priority UI bugs."
        ]
      }
    ]
  },
  {
    id: "globallogic",
    company: "GlobalLogic",
    role: "Senior Software Engineer - Frontend & MERN",
    duration: "2022 — 2026",
    summary: "Delivered multiple enterprise and customer-facing web applications across banking, e-commerce, and internal platform modernization initiatives.",
    projects: [
      {
        id: "verizon",
        title: "Verizon Ecommerce Platform - Frontend",
        type: "E-commerce Experience",
        duration: "2022 — 2025",
        techUsed: ["React", "Redux", "Saga", "Kibana", "Figma", "SonarQube", "Jira", "GitLab", "WCAG", "React Testing Library"],
        description: [
          "UI Architecture: Designed and implemented highly scalable, modular UI components utilizing ReactJS, Redux, and Saga Middleware for complex state management.",
          "Design-to-Code Mastery: Partnered with UI/UX teams to transform high-fidelity Figma design specifications into responsive, pixel-perfect user interfaces."
        ]
      },
      {
        id: "ace",
        title: "ACE Enterprise System Platform - Frontend",
        type: "Enterprise Workflow",
        duration: "2025 — 2026",
        techUsed: ["React", "redux", "WCAG", "Mateial UI", "Azure DevOps", "Azure Pipelines"],
        description: [
          "Accessibility Compliance: Ensured strict compliance with WCAG accessibility standards, performing rigorous screen-reader compatibility validations using NVDA and JAWS.",
          "Designed and developed high scalable User Interface using React and Redux.",
          "Cross-Functional Collaboration: Partnered with cross-functional teams to deliver scalable, accessible, and user-friendly front-end web application modules."
        ]
      },
      {
        id: "akira",
        title: "Akira Learning Platform - MERN",
        type: "Learning Platform • MERN",
        duration: "2025 — 2026",
        techUsed: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "Azure DevOps", "Postman"],
        description: [
          "Designed and engineered a centralized backend micro-utility using Node.js, Express.js, and MongoDB to provision live user-access control and feature-flag definitions.",
          "Developed dynamic Postman test suites with environment variables to automate regression testing pipelines across Dev, QA, and Production target instances.",          
          "Utilized Jira, GitLab, and Kibana log monitoring to track, isolate, and debug application anomalies within rapid Agile delivery intervals."
        ]
      }
    ]
  }
];

const projectOptions = organizations.flatMap((company) =>
  company.projects.map((project) => ({
    ...project,
    companyId: company.id,
    companyName: company.company
  }))
);

const projects = [
  {
    title: "Nordea (Banking Platform - Frontend)",
    type: "React • Redux • Zeplin • Javascript • SASS",
    description: `o Engineered secure, transactional React-based web views for core consumer payment rails, structuring robust data binding and input form validation.
      o Configured optimized asynchronous REST API integrations via Axios for dynamic views and low-latency client-server client syncs.
      o Crafted device-agnostic layouts from Zeplin wireframes using SASS and precise media breakpoint handling to maximize mobile responsiveness.
      o Maintained full feature ownership throughout tight sprint deadlines, driving zero-defect deployments and fixing high-priority UI bugs.`,
    tags: ["React", "Redux", "JavaScript", "REST API"]
  },
  {
    title: "Verizon (Ecommerce Platform — Frontend)",
    type: "React • Node.js • Express • MongoDB",
    description: `o UI Architecture: Designed and implemented highly scalable, modular UI components
      utilizing ReactJS, Redux, and Saga Middleware for complex state management.
      o Design-to-Code Mastery: Partnered with UI/UX teams to transform high-fidelity
      Figma design specifications into responsive, pixel-perfect user interfaces.`,
    tags: ["React", "Node.js", "Express", "MongoDB"]
  },
  {
    title: "ACE (Enterprise System Platform - Frontend)",
    type: "React • WCAG • Testing",
    description: `o Designed and engineered a centralized backend micro-utility using Node.js,
      Express.js, and MongoDB to provision live user-access control and feature-flag
      definitions.
      o Developed dynamic Postman test suites with environment variables to automate
      regression testing pipelines across Dev, QA, and Production target instances.
      o Utilized Jira, GitLab, and Kibana log monitoring to track, isolate, and debug
      application anomalies within rapid Agile delivery intervals.`,
    tags: ["React", "WCAG", "NVDA", "Testing"]
  },
  {
    title: "Akira (Learning Platform - MERN stack)",
    type: "Senior Software Engineer / Full-Stack Engineer | May 2022 –  (4 Years)",
    description: `o Designed and engineered a centralized backend micro-utility using Node.js,
      Express.js, and MongoDB to provision live user-access control and feature-flag
      definitions.
      o Developed dynamic Postman test suites with environment variables to automate
      regression testing pipelines across Dev, QA, and Production target instances.
      o Utilized Jira, GitLab, and Kibana log monitoring to track, isolate, and debug
      application anomalies within rapid Agile delivery intervals.`,
    tags: ["React", "WCAG", "NVDA", "Testing"]
  }
];

function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectDropdownOpen, setProjectDropdownOpen] = useState(false);
  const [selectedCompanyId, setSelectedCompanyId] = useState("capgemini");
  const [selectedProjectId, setSelectedProjectId] = useState("capgemini-banking");

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const activeCompany = organizations.find((company) => company.id === selectedCompanyId) || organizations[0];
  const activeProject = activeCompany.projects.find((project) => project.id === selectedProjectId) || activeCompany.projects[0];

  const closeMenu = () => {
    setMenuOpen(false);
    setProjectDropdownOpen(false);
  };

  const handleProjectSelect = (companyId, projectId) => {
    setSelectedCompanyId(companyId);
    setSelectedProjectId(projectId);
    closeMenu();
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="app">
      <header className="header">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">VK</span>
          <span>Vikas Kumar</span>
        </a>

        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {[
            { label: "About", href: "#about" },
            { label: "Skills", href: "#skills" },
            { label: "Experience", href: "#experience" }
          ].map((item) => (
            <a key={item.label} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}

          <div className="nav-dropdown-wrap">
            <button
              type="button"
              className="nav-dropdown-toggle"
              onClick={() => setProjectDropdownOpen((prev) => !prev)}
              aria-expanded={projectDropdownOpen}
            >
              Projects
            </button>

            {projectDropdownOpen && (
              <div className="nav-dropdown">
                {projectOptions.map((project) => (
                  <button
                    key={`${project.companyId}-${project.id}`}
                    type="button"
                    className="nav-dropdown-item"
                    onClick={() => handleProjectSelect(project.companyId, project.id)}
                  >
                    {project.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="header-actions">
          <button className="icon-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="header-cta" href="#contact">Let's talk <ArrowUpRight size={16} /></a>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-cards">
            <img src="/vikas.jpg" alt="Vikas Kumar" className="profile-photo" />
          </div>
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Available for opportunities</p>
            <h1>Senior <span>React</span> Developer building fast, scalable web experiences.</h1>
            <p className="hero-text">
              7 years of IT experience specializing in React.js, JavaScript and responsive
              web performance, complemented by hands-on backend integration with Node.js,
              Express and MongoDB.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#projects">View my work <ArrowUpRight size={18} /></a>
              <a className="secondary-btn" href="#contact">Contact me <Mail size={18} /></a>
            </div>
            <div className="socials">
              <a href="https://github.com/vksahuvicky" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
              <a href="https://linkedin.com/in/vikas-kumar-4a5b8831a/"><Linkedin size={18} /> LinkedIn</a>
            </div>
          </div>



          <div className="hero-card">

            <div className="code-window">

              <div className="window-bar"><i></i><i></i><i></i><span>developer.js</span></div>
              <pre>
                {`const developer = {
                  name: "Vikas Kumar",
                  role: "Senior React Developer",
                  experience: "7 years",

                  frontend: [
                    "React", "JavaScript", "Redux", "Saga"
                    "WCAG", "Responsive Design"
                  ],

                  backend: [
                    "Node.js", "Express",
                    "MongoDB", "REST APIs", "Postman"
                  ],

                  mindset: "Build. Optimize. Improve."
                };`}
              </pre>

            </div>

          </div>
          <div className="achievements">
            <p className="ach-title">Key achievements</p>
            <div><strong>20%</strong><small>faster page loads with React optimization</small></div>
            <div><strong>30%</strong><small>faster team velocity with a WCAG-compliant UI library</small></div>
            <div><strong>100%</strong><small>stable automated API tests with Postman and Node.js</small></div>
          </div>
        </section>

        <section className="stats">
          <div><strong>7</strong><span>Years IT Experience</span></div>
          <div><strong>React</strong><span>Primary Expertise</span></div>
          <div><strong>MERN</strong><span>Backend Integration</span></div>
          <div><strong>WCAG</strong><span>Accessibility Focus</span></div>
        </section>

        <section id="about" className="section two-col">
          <div>
            <p className="section-kicker">ABOUT ME</p>
            <h2>Frontend-first. Product-minded. <span>Always improving.</span></h2>
          </div>
          <div className="about-copy">
            <p>
              I am a Senior Front-End & MERN-capable Engineer focused on creating reliable,
              maintainable and high-performance web applications.
            </p>
            <p>
              My core strength is React.js architecture and modern JavaScript. I also bring
              practical backend integration experience with Node.js, Express and MongoDB/Mongoose,
              including REST API development and Postman-based API lifecycle testing.
            </p>
            <div className="check-list">
              {["Reusable React architecture", "Performance optimization", "Responsive UI development",
                "WCAG accessibility and NVDA", "REST API integration", "Agile collaboration"].map(x =>
                  <div key={x}><CheckCircle2 size={18} />{x}</div>
                )}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <div><p className="section-kicker">TECHNICAL SKILLS</p><h2>Tools I use to <span>ship quality.</span></h2></div>
            <Code2 size={42} className="heading-icon" />
          </div>
          <div className="skills-grid">
            {skills.map(([name, level]) => (
              <div className="skill-card" key={name}>
                <div className="skill-icon"><Code2 size={19} /></div>
                <div><strong>{name}</strong><small>{level}</small></div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <p className="section-kicker">EXPERIENCE</p>
          <h2>Projects that show how I <span>think and build.</span></h2>

          <div className="experience-module">
            <div className="experience-company-list" aria-label="Experience companies">
              {organizations.map((company) => (
                <button
                  key={company.id}
                  type="button"
                  className={`experience-company-card ${selectedCompanyId === company.id ? "active" : ""}`}
                  onClick={() => {
                    setSelectedCompanyId(company.id);
                    setSelectedProjectId(company.projects[0].id);
                  }}
                >
                  <div className="company-header">
                    <div>
                      <p className="company-name">{company.company}</p>
                      <p className="company-role">{company.role}</p>
                    </div>
                  </div>
                  <div className="company-meta">
                    <span>{company.duration}</span>
                    <span>{company.projects.length} project{company.projects.length > 1 ? "s" : ""}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="experience-project-panel">
              <div className="project-header">
                <div>
                  <p className="section-kicker small-kicker">{activeCompany.company}</p>
                  <h3>{activeCompany.role}</h3>
                </div>
                <span className="company-duration">{activeCompany.duration}</span>
              </div>

              <p className="company-summary">{activeCompany.summary}</p>

              <div className="project-selector" aria-label="Projects">
                {activeCompany.projects.map((project) => (
                  <button
                    key={project.id}
                    type="button"
                    className={`project-pill ${selectedProjectId === project.id ? "active" : ""}`}
                    onClick={() => setSelectedProjectId(project.id)}
                  >
                    {project.title}
                  </button>
                ))}
              </div>

              <div className="project-details">
                <div className="project-title-row">
                  <h4>{activeProject.title}</h4>
                  <span className="detail-tag">{activeProject.type}</span>
                </div>

                <div className="detail-meta">
                  <div className="detail-badge">
                    <span className="label">Duration</span>
                    <strong>{activeProject.duration}</strong>
                  </div>
                  <div className="detail-badge">
                    <span className="label">Project Type</span>
                    <strong>{activeProject.type}</strong>
                  </div>
                </div>

                <div className="tech-list">
                  {activeProject.techUsed.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <ul className="detail-description">
                  {activeProject.description.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section philosophy">
          <div className="quote-mark">“</div>
          <blockquote>Good frontend engineering is not just about making a UI work. It is about making it <span>fast, accessible, maintainable and easy to evolve.</span></blockquote>
          <p>— Vikas Kumar</p>
        </section>

        <section id="contact" className="section contact">
          <div>
            <p className="section-kicker">CONTACT</p>
            <h2>Let's build something <span>great.</span></h2>
            <p className="contact-text">
              Open to Senior React / Front-End opportunities and roles where strong UI
              engineering and modern JavaScript can make an impact.
            </p>
          </div>
          <div className="contact-card">
            <a href="mailto:vksahuvicky@gmail.com"><Mail size={19} /><span><small>Email</small>vksahuvicky@gmail.com</span></a>
            <a href="tel:+919174343907"><Phone size={19} /><span><small>Phone</small>+91 91743 43907</span></a>
            <a href="https://github.com/vksahuvicky" target="_blank" rel="noreferrer"><Github size={19} /><span><small>GitHub</small>github.com/vksahuvicky</span></a>
            <a href="https://linkedin.com/in/vikas-kumar-4a5b8831a/" target="_blank" rel="noreferrer"><Linkedin size={19} /><span><small>LinkedIn</small>linkedin.com/in/vikas-kumar-4a5b8831a/</span></a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Vikas Kumar</span>
        <a href="#home">Back to top <ArrowUp size={15} /></a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);

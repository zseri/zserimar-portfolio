
import { useState } from "react";
import "./App.css";

function App() {
  const [sending, setSending] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  async function handleContactSubmit(event) {
    event.preventDefault();
    if (sending) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    setSending(true);
    setFormStatus("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send your message.");
      }
      form.reset();
      setFormStatus("Your message has been sent successfully!");
    } catch (error) {
      setFormStatus(error.message || "Unable to send your message. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#" className="logo">
          dev<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="mailto:hello@example.com" className="nav-button">
          Let's Talk ↗
        </a>
      </nav>

      <main id="home" className="hero">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot"></span>
            WELCOME TO MY PORTFOLIO
          </div>

          <p className="eyebrow">
  ASPIRING FULL-STACK DEVELOPER
</p>
          <h1>
            Crafting digital
            <br />
            experiences with
            <br />
            <span>purpose & precision.</span>
          </h1>

          
          <p className="hero-description">
  I'm Zserimar A. Secretario, an aspiring Full-Stack
  Developer passionate about building modern,
  responsive, and meaningful digital experiences
  through thoughtful design and clean code. </p>


          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              Explore My Work <span>↗</span>
            </a>
            <a href="#about" className="secondary-button">
              More About Me →
            </a>
          </div>

          <div className="tech-stack">
            <span>TECHNOLOGIES I WORK WITH</span>
            <div className="tech-list">
              <span>React</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>Prisma</span>
              <span>PostgreSQL</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glow"></div>
          <div className="code-card">
            <div className="code-header">
              <div className="dots">
                <i></i><i></i><i></i>
              </div>
              <span>developer.js</span>
            </div>
            <div className="code-body">
              <p><em>const</em> developer = {"{"}</p>
              <p>  name: <strong>"Zserimar A. Secretario"</strong>,</p>
              <p>  role: <strong>"Web Developer"</strong>,</p>
              <p>  passion: <strong>"Building the Web"</strong>,</p>
              <p>  skills: [</p>
              <p>    <strong>"React"</strong>, <strong>"Node.js"</strong>,</p>
              <p>    <strong>"Prisma"</strong>, <strong>"PostgreSQL"</strong></p>
              <p>  ]</p>
              <p>{"}"};</p>
            </div>
          </div>
        </div>
      </main>
<section id="about" className="about-section">
  <div className="section-heading">
    <p className="section-label">01 / ABOUT ME</p>
    <h2>
      Get to <span>know me.</span>
    </h2>
  </div>

  <div className="about-layout">
    <div className="about-text">
      <h3>
        A passionate learner with a vision
        for the digital world.
      </h3>

      <p>
        I'm Zserimar A. Secretario, a Third-year
        Bachelor of Science in Information Technology
        student at Laguna State Polytechnic University
        – Siniloan (Host) Campus.
      </p>

      <p>
        As an aspiring Full-Stack Developer, I'm
        passionate about learning how to build modern,
        responsive, and functional web applications.
        I'm continuously strengthening my programming
        skills and exploring both frontend and backend
        development.
      </p>

      <p>
        I believe that becoming a great developer
        requires continuous learning, creativity,
        and the willingness to solve challenging
        problems.
      </p>
    </div>

    <div className="about-details">
      <div className="detail-card">
        <span>EDUCATION</span>
        <h4>BS Information Technology</h4>
      </div>

      <div className="detail-card">
        <span>YEAR LEVEL</span>
        <h4>3rd Year</h4>
      </div>

      <div className="detail-card">
        <span>UNIVERSITY</span>
        <h4>Laguna State Polytechnic University</h4>
        <p>Siniloan (Host) Campus</p>
      </div>

      <div className="detail-card">
        <span>CAREER GOAL</span>
        <h4>Full-Stack Developer</h4>
      </div>
    </div>
  </div>
</section>
<section id="skills" className="skills-section">
  <div className="section-heading">
    <p className="section-label">02 / TECHNICAL SKILLS</p>
    <h2>
      My technical <span>expertise.</span>
    </h2>
    <p className="skills-intro">
      Technologies I'm learning and using to build
      my foundation in web development.
    </p>
  </div>

  <div className="skills-grid">
    {[
      {
        name: "HTML",
        icon: "</>",
        description: "Structure & semantics",
        details: "Building accessible and organized web pages."
      },
      {
        name: "CSS",
        icon: "{ }",
        description: "Styling & responsive design",
        details: "Creating modern layouts and visual experiences."
      },
      {
        name: "JavaScript",
        icon: "JS",
        description: "Logic & interactivity",
        details: "Adding dynamic behavior to websites."
      },
      {
        name: "Python",
        icon: "Py",
        description: "Programming & problem-solving",
        details: "Developing logic and solving coding challenges."
      }
    ].map((skill) => (
      <div className="skill-card" key={skill.name}>
        <div className="skill-icon">{skill.icon}</div>
        <h3>{skill.name}</h3>
        <p className="skill-description">
          {skill.description}
        </p>
        <p className="skill-details">
          {skill.details}
        </p>
      </div>
    ))}
  </div>
</section>
<section id="projects" className="projects-section">
  <div className="section-heading">
    <p className="section-label">03 / FEATURED PROJECTS</p>
    <h2>
      Things I've <span>built.</span>
    </h2>
    <p className="projects-intro">
      A selection of my work and projects that reflect
      my journey as an aspiring Full-Stack Developer.
    </p>
  </div>

  <div className="projects-grid">
    <article className="project-card">
      <div className="project-image">
        <img
          src="/bao-preview.png"
          alt="BAO Web System screenshot"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
        <div className="project-placeholder">
          <span>BAO</span>
          <p>WEB SYSTEM</p>
        </div>
      </div>

      <div className="project-content">
        <div className="project-top">
          <span className="project-category">
            WEB APPLICATION
          </span>
          <span className="project-number">01</span>
        </div>

        <h3>BAO Web System</h3>

        <p className="project-description">
          A web-based system project that I've worked
          on as part of my software development journey.
          It has helped me gain practical experience
          in building and working with web applications.
        </p>

        <div className="project-footer">
          <a
            href="http://127.0.0.1:8080/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Open Local Project ↗
          </a>
          <span className="project-status">
            LOCAL DEVELOPMENT
          </span>
        </div>
      </div>
    </article>
  </div>
</section>
<section id="contact" className="contact-section">
  <div className="section-heading">
    <p className="section-label">04 / GET IN TOUCH</p>
    <h2>
      Let's build something <span>together.</span>
    </h2>
    <p className="contact-intro">
      Have a project in mind or want to connect?
      I'd love to hear from you.
    </p>
  </div>

  <div className="contact-layout">
    <div className="contact-info">
      <h3>Let's connect.</h3>
      <p>
        I'm always interested in learning new things,
        collaborating on projects, and connecting
        with fellow developers.
      </p>

      <div className="contact-info-card">
        <span>NAME</span>
        <h4>Zserimar A. Secretario</h4>
      </div>

      <div className="contact-info-card">
        <span>ROLE</span>
        <h4>Aspiring Full-Stack Developer</h4>
      </div>

      <div className="contact-info-card">
        <span>EDUCATION</span>
        <h4>Laguna State Polytechnic University</h4>
        <p>Siniloan (Host) Campus</p>
      </div>
    </div>

    <form
      className="contact-form"
      onSubmit={handleContactSubmit}
    >
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="contact-name">Your Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact-email">
            Email Address
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="contact-subject">Subject</label>
        <input
          id="contact-subject"
            name="subject"
          type="text"
          placeholder="What's this about?"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="contact-message">
          Your Message
        </label>
        <textarea
          id="contact-message"
            name="message"
          rows="6"
          placeholder="Write your message here..."
          required
        ></textarea>
      </div>

      <button type="submit" className="contact-submit" disabled={sending}>
        {sending ? "Sending..." : "Send Message ↗"}
      </button>
      {formStatus && <p role="status" aria-live="polite">{formStatus}</p>}
    </form>
  </div>
</section>
    </div>
  );
}

export default App;

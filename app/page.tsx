"use client";

import { useState } from "react";

const navItems = [
  ["Profile", "profile"],
  ["Expertise", "expertise"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Contact", "contact"],
] as const;

const expertise = [
  ["01", "Plant operations & performance optimization"],
  ["02", "Availability, reliability & efficiency improvement"],
  ["03", "KPI governance & operational cost control"],
  ["04", "Owner/operator-side contract management"],
  ["05", "Tender obligations & progress-payment control"],
  ["06", "EPC, OEM, vendor & contractor coordination"],
  ["07", "Commissioning, handover & acceptance testing"],
  ["08", "Low-NCV waste management & RDF integration"],
  ["09", "HV/MV/LV, protection, MCC, PLC, DCS & SCADA"],
  ["10", "ISO 50001 energy management"],
  ["11", "HSE leadership, PTW, LOTO & risk assessment"],
  ["12", "ISO 9001, 14001 & 45001 management systems"],
];

const experiences = [
  { period: "2025—Present", role: "Technical Advisor to the Chairman", company: "“Təmiz Şəhər” OJSC · Baku, Azerbaijan", detail: "Technical advisory across energy-from-waste operations, plant performance, operational priorities, contract optimization and owner-side coordination." },
  { period: "2019—2024", role: "Energy Plants Operation Chief", company: "İSTAÇ AŞ · Istanbul, Türkiye", detail: "Plant operations, performance optimization, availability and reliability improvement, HSE leadership, contractor coordination and operational cost control." },
  { period: "2014—2019", role: "Energy Management Chief", company: "İSTAÇ AŞ · Istanbul, Türkiye", detail: "Energy management, KPI governance, efficiency improvement, ISO 50001 activities and coordination across energy plant systems." },
  { period: "2003—2014", role: "Engineer / Technician", company: "İSTAÇ AŞ · Istanbul, Türkiye", detail: "Electrical and instrumentation work spanning HV/MV/LV systems, protection, MCC, PLC, DCS, SCADA, commissioning, maintenance and technical documentation." },
];

const projects = [
  { tag: "2018—2021", title: "Istanbul MSW Waste-to-Energy Plant", detail: "Electrical systems control lead; employer-side plant acceptance." },
  { tag: "2018—2021", title: "Istanbul Biomethanization Plant", detail: "Electrical systems control lead; employer-side acceptance." },
  { tag: "2020—2022", title: "Seymen Landfill Leachate Treatment Plant", detail: "6,000 m³/day · E&I lead during construction and commissioning." },
  { tag: "ENERGY PLANTS", title: "Silivri, Odayeri & Kömürcüoda LFG Plants", detail: "37 MW, 45 MW and 24 MW-class facilities · ORC upgrade exposure." },
];

function Icon({ name, size = 18 }: { name: "mail" | "phone" | "pin" | "arrow" | "download" | "menu" | "close"; size?: number }) {
  const paths = {
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"/>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    arrow: <><path d="M7 17 17 7"/><path d="M7 7h10v10"/></>,
    download: <><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <path d="M6 6l12 12M18 6 6 18"/>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const printCv = () => window.print();

  const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:firatsarp@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Fırat Sarp — home">Fırat Sarp<span>.</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="button button-ghost desktop-action" onClick={printCv}><Icon name="download" /> Download CV</button>
          <a className="button button-primary desktop-action" href="#contact">Contact Me</a>
          <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? "close" : "menu"} size={21} /></button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <button className="button button-primary" onClick={printCv}><Icon name="download" /> Download CV</button>
          </nav>
        )}
      </header>

      <section className="hero" id="top">
        <div className="hero-glow" />
        <div className="shell hero-inner">
          <div className="eyebrow status"><span className="status-dot" /> Technical leadership · Energy systems</div>
          <p className="hero-kicker">Electronics Engineer</p>
          <h1>FIRAT<br/><span>SARP</span></h1>
          <p className="hero-subtitle">Technical Advisor <i /> Waste-to-Energy, Energy Plants &amp; Operational Excellence</p>
          <div className="contact-strip" aria-label="Contact details">
            <span><Icon name="pin" /> Baku, Azerbaijan / Istanbul, Türkiye</span>
            <a href="tel:+994552020640"><Icon name="phone" /> +994 55 202 06 40</a>
            <a href="tel:+905311040201"><Icon name="phone" /> +90 531 104 02 01</a>
            <a href="mailto:firatsarp@gmail.com"><Icon name="mail" /> firatsarp@gmail.com</a>
          </div>
          <div className="hero-bottom">
            <p className="hero-statement">Delivering safer, more reliable and efficient energy-from-waste operations through engineering expertise, owner-side leadership and performance-focused management.</p>
            <div className="hero-cta">
              <button className="button button-primary" onClick={printCv}><Icon name="download" /> Download CV</button>
              <a className="button button-ghost" href="#contact">Contact Me <Icon name="arrow" /></a>
            </div>
          </div>
          <div className="metrics" aria-label="Career highlights">
            <div><strong>20+</strong><span>Years of experience</span></div>
            <div><strong>4</strong><span>Energy disciplines</span></div>
            <div><strong>360°</strong><span>Plant lifecycle view</span></div>
          </div>
        </div>
      </section>

      <section className="section" id="profile">
        <div className="shell split profile-grid">
          <div>
            <p className="section-label">01 · Profile</p>
            <h2>Engineering with an <em>operator’s perspective.</em></h2>
            <div className="prose">
              <p>Electronics Engineer with 20+ years’ experience across municipal solid-waste energy-from-waste, landfill-gas-to-energy and anaerobic digestion / biomethanization.</p>
              <p>Proven strength in commissioning and O&amp;M, contractor and OEM management, acceptance testing, performance improvement and owner-side technical governance.</p>
              <p>Since 2025, Technical Advisor to the Chairman of “Təmiz Şəhər” OJSC in Baku, supporting waste-to-energy strategy, contract optimization and operational excellence.</p>
            </div>
          </div>
          <aside className="panel glance">
            <div className="panel-heading"><span>AT A GLANCE</span><small>Professional highlights</small></div>
            {[
              "20+ years of experience",
              "WtE, LFG & biomethanization",
              "Owner / employer-side leadership",
              "Commissioning & O&M",
              "Electrical, I&C & performance optimization",
              "ISO-based management systems",
            ].map((item, index) => <div className="glance-row" key={item}><i className={`tone-${index % 3}`} />{item}</div>)}
          </aside>
        </div>
      </section>

      <section className="section section-alt" id="expertise">
        <div className="shell">
          <p className="section-label green">02 · Expertise</p>
          <div className="section-title-row"><h2>Systems thinking, <em>applied.</em></h2><p>Technical capabilities across the full operating lifecycle.</p></div>
          <div className="expertise-grid">
            {expertise.map(([number, title]) => <article className="expertise-card" key={number}><span>{number}</span><h3>{title}</h3></article>)}
          </div>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="shell">
          <p className="section-label">03 · Experience</p>
          <h2>Built close to <em>the plant.</em></h2>
          <div className="timeline">
            {experiences.map((job, index) => (
              <article className="timeline-item" key={job.period}>
                <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
                <time>{job.period}</time>
                <div><h3>{job.role}</h3><p className="company">{job.company}</p><p>{job.detail}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="projects">
        <div className="shell">
          <p className="section-label green">04 · Selected projects</p>
          <h2>Selected field <em>experience.</em></h2>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-meta"><span>{project.tag}</span><b>{String(index + 1).padStart(2, "0")}</b></div>
                <h3>{project.title}</h3><p>{project.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="education">
        <div className="shell">
          <p className="section-label">05 · Education & training</p>
          <div className="education-grid">
            <div>
              <h2>Education</h2>
              {[
                ["2004—2008", "B.Sc., Electronics Engineering", "Kadir Has University, Istanbul"],
                ["2000—2002", "Associate Degree, Technical Education", "Marmara University"],
                ["1994—1999", "Electrical Department", "Sultanahmet Anatolian Technical High School"],
              ].map(([period, title, school]) => <article className="education-item" key={period}><time>{period}</time><h3>{title}</h3><p>{school}</p></article>)}
            </div>
            <div>
              <h2>Certifications <em>& training</em></h2>
              <ul className="cert-list">
                <li>Certified Energy Manager, YEGEM</li>
                <li>Waste Incineration Facility Operation, Maintenance and Process Training — Hitachi Zosen Inova, 2022</li>
                <li>ISO 9001, ISO 14001 and ISO 45001 training and internal auditing</li>
                <li>ISO 50001 training and internal auditing</li>
                <li>UNFCCC COP22, COP23 and COP24 participation, 2016–2018</li>
              </ul>
            </div>
          </div>
          <div className="info-grid">
            <article><span>TOOLS</span><p>MS Office, MS Project, Visio, AutoCAD, MATLAB, SketchUp, SAP, MCC, DCS, PLC and P&amp;ID / document-control systems</p></article>
            <article><span>LANGUAGE</span><p>English</p></article>
            <article><span>MEMBERSHIPS</span><p>Chamber of Electrical Engineers, Türkiye<br/>Sustainable Production and Consumption Association, Türkiye</p></article>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="shell contact-grid">
          <div>
            <p className="section-label">06 · Contact</p>
            <h2>Start a technical <em>conversation.</em></h2>
            <p className="contact-intro">For advisory, plant management, operational excellence and waste-to-energy project opportunities.</p>
            <div className="contact-list">
              <a href="mailto:firatsarp@gmail.com"><Icon name="mail" /><span>firatsarp@gmail.com</span></a>
              <a href="tel:+994552020640"><Icon name="phone" /><span>+994 55 202 06 40</span></a>
              <a href="tel:+905311040201"><Icon name="phone" /><span>+90 531 104 02 01</span></a>
            </div>
          </div>
          <form className="contact-form panel" onSubmit={sendMessage}>
            <div className="form-pair">
              <label>Name<input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} /></label>
              <label>Email<input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} /></label>
            </div>
            <label>Subject<input required value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} /></label>
            <label>Message<textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} /></label>
            <button className="button button-primary" type="submit">Prepare Message <Icon name="arrow" /></button>
          </form>
        </div>
      </section>

      <footer><div className="shell"><strong>Fırat Sarp<span>.</span></strong><p>Electronics Engineer · Baku / Istanbul</p><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}

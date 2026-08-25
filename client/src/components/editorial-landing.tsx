import { useState } from "react";
import { achievements, contact, experience, press, speaking } from "@/lib/data";

type WorkItem = {
  company: string;
  role: string;
  tags?: string[];
  description: string;
  url: string;
  period: string;
  proof: string[];
};

const ansden: WorkItem = {
  company: "Ansden",
  role: "Founder",
  tags: ["Venture"],
  description:
    "An AI triage layer for UK telecare alarm centres. It absorbs false pendant activations and welfare calls so human operators handle the real emergencies.",
  url: "https://ansden.com",
  period: "2026 — present",
  proof: ["AI triage for UK telecare alarm centres", "Built for the January 2027 PSTN switch-off"],
};

const featuredCompanies = [
  "Afriktrip / Direx",
  "Ansden",
  "Panlit",
  "Oxford University Press",
  "TN Naija",
  "SHL Capital",
  "GTVAdvice",
];

const workDetails: Record<string, { period: string; proof: string[] }> = {
  "Afriktrip / Direx": {
    period: "2020 — 2024",
    proof: ["7,500+ tours across 28 countries", "Phocuswire Hot 25 Travel Startup, 2024"],
  },
  Panlit: {
    period: "2025 — present",
    proof: ["AI voice and messaging agent for hospitality", "Live across five countries"],
  },
  "Oxford University Press": {
    period: "2024 — present",
    proof: ["600k+ pieces of content across 200+ partners", "£1m+ portfolio of enterprise platforms"],
  },
  "TN Naija": {
    period: "Community",
    proof: ["Annual convenings in London and Birmingham", "UK–Africa founders and tech community"],
  },
  "SHL Capital": {
    period: "Venture",
    proof: ["Pre-seed and seed stage, global mandate", "$15m deployed annually"],
  },
  GTVAdvice: {
    period: "Community",
    proof: ["UK Global Talent Visa guidance", "Built from personal experience of the route"],
  },
  Coremaker: {
    period: "Professional",
    proof: ["Fintech, open-source and investment technology", "London-based software consultancy"],
  },
  Quabbly: {
    period: "Professional",
    proof: ["African no-code automation platform", "Product marketing and go-to-market"],
  },
  AfroScanner: {
    period: "Project",
    proof: ["Travel intelligence for Africa", "Visa, health and entry guidance"],
  },
  "Tour Guide Africa Series": {
    period: "Community",
    proof: ["Founder stories from Africa's tourism economy", "Editor-in-Chief"],
  },
  StopTheSpread: {
    period: "Project",
    proof: ["50,000 daily active users at peak", "Adopted by 100+ GP practices"],
  },
  "Andela Learning Community": {
    period: "Community",
    proof: ["ALC x Microsoft 4Afrika Skillslab", "Cloud mentoring"],
  },
  "First City Monument Bank": {
    period: "Professional",
    proof: ["Production SQL and data integration", "$5bn in assets"],
  },
  Cralocs: {
    period: "Venture",
    proof: ["Airbnb for film locations", "Top 5 Product of the Day on Product Hunt"],
  },
  BoxPlay: {
    period: "Venture",
    proof: ["Netflix for movie rentals in Nigeria", "Built at 18"],
  },
};

function buildWorkItem(company: string): WorkItem {
  if (company === "Ansden") return ansden;
  const item = experience.find((job) => job.company === company);
  if (!item) {
    throw new Error(`Missing experience entry for ${company}`);
  }

  return {
    ...item,
    period: workDetails[company]?.period ?? item.tags?.join(" · ") ?? "Experience",
    proof: workDetails[company]?.proof ?? [],
  };
}

const featuredWork = featuredCompanies.map(buildWorkItem);
const additionalWork = experience
  .filter((item) => !featuredCompanies.includes(item.company))
  .map((item) => buildWorkItem(item.company));

const footnotes = [
  {
    number: "1",
    title: "MEA Winner, Global Traveltech Startup Pitch",
    source: "Web in Travel · 2023",
    url:
      achievements.find((item) => item.title.includes("Middle East and Africa"))?.url ??
      "https://witevents.com/globalstartuppitch/",
  },
  {
    number: "2",
    title: "Winner, Pioneer.app Tournament",
    source: "Pioneer.app · 2021",
    url: achievements.find((item) => item.title.includes("Pioneer"))?.url ?? "https://pioneer.app/winners/ibukunoluwa-salau",
  },
  {
    number: "3",
    title: "Rising Stars 5.0 City Winner",
    source: "Tech Nation · 2023",
    url: achievements.find((item) => item.title.includes("Tech Nation"))?.url ?? "https://technation.io/programmes/rising-stars/",
  },
  {
    number: "4",
    title: "Global Talent, Digital Technology",
    source: "UK Home Office · 2021",
    url: achievements.find((item) => item.title.includes("Global Talent"))?.url ?? "https://technation.io/visa-tech-nation-visa-guide/",
  },
];

function yearFromTitle(title: string) {
  return title.match(/20\d{2}/)?.[0] ?? "Selected";
}

function ExternalLink({
  children,
  href,
  className = "",
  id,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  id?: string;
}) {
  return (
    <a id={id} className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function EditorialLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFootnote, setActiveFootnote] = useState<string | null>(null);

  const toggleFootnote = (number: string, active: boolean) => {
    setActiveFootnote(active ? number : null);
  };

  return (
    <div className="editorial-site" id="top">
      <nav className="editorial-nav" aria-label="Main navigation">
        <div className="editorial-wrap nav-inner">
          <a className="editorial-mark" href="#top" onClick={() => setMenuOpen(false)}>
            IBUKUNOLUWA<span>.</span>
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
          <div id="primary-navigation" className={`editorial-navlinks ${menuOpen ? "is-open" : ""}`}>
            <a href="#now" onClick={() => setMenuOpen(false)}>Current</a>
            <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
            <a href="#recognition" onClick={() => setMenuOpen(false)}>Recognition</a>
            <a href="#press" onClick={() => setMenuOpen(false)}>Press</a>
            <a className="kit-link" href="#speaking" onClick={() => setMenuOpen(false)}>Speaking</a>
          </div>
        </div>
      </nav>

      <main className="editorial-wrap">
        <header className="editorial-hero">
          <div className="status"><span className="status-dot" /> London, United Kingdom</div>
          <h1 className="claim">
            I build{" "}
            <span
              className={`cited ${activeFootnote === "1" ? "lit" : ""}`}
              onMouseEnter={() => toggleFootnote("1", true)}
              onMouseLeave={() => toggleFootnote("1", false)}
              onFocus={() => toggleFootnote("1", true)}
              onBlur={() => toggleFootnote("1", false)}
            >
              products for the markets<a href="#fn1" className="sup">1</a>
            </span>{" "}
            everyone else finds <span className="claim-accent">too operational</span> to bother with
            <span
              className={`cited ${activeFootnote === "2" ? "lit" : ""}`}
              onMouseEnter={() => toggleFootnote("2", true)}
              onMouseLeave={() => toggleFootnote("2", false)}
              onFocus={() => toggleFootnote("2", true)}
              onBlur={() => toggleFootnote("2", false)}
            >
              <a href="#fn2" className="sup">2</a>
            </span>
            .
          </h1>
          <p className="subclaim">
            Product leader at <strong>Oxford University Press</strong>. Ten years building in markets most people overlook,
            from African travel to UK telecare. Founder of <strong>Afriktrip</strong>, a traveltech startup that scaled to
            <strong> 28 African countries</strong>.
          </p>

          <div className="footnote-rail">
            {footnotes.map((footnote) => (
              <ExternalLink
                key={footnote.number}
                href={footnote.url}
                id={`fn${footnote.number}`}
                className={`footnote ${activeFootnote === footnote.number ? "is-active" : ""}`}
              >
                <span className="footnote-number">{footnote.number}</span>
                <span>
                  {footnote.title}
                  <span className="footnote-source">{footnote.source}</span>
                </span>
              </ExternalLink>
            ))}
          </div>

          <div className="hero-actions">
            <a className="editorial-button primary-button" href="#work">See selected work <span>→</span></a>
            <a className="editorial-button ghost-button" href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
        </header>

        <section className="editorial-section" id="now">
          <SectionHeading title="Current work" note="Updated Aug 2026" />
          <p className="section-lede">Where my time goes at the moment. Everything below this section is history.</p>
          <div className="current-grid">
            {[
              {
                role: "Product Manager",
                company: "Oxford University Press",
                description: "Five enterprise content platforms, a £1m+ portfolio, serving 200+ global partners including Apple, Google, Amazon and Spotify.",
                url: buildWorkItem("Oxford University Press").url,
              },
              {
                role: "Founder · Pre-pilot",
                company: "Ansden",
                description: ansden.description,
                url: ansden.url,
              },
              {
                role: "Creator · Live",
                company: "Panlit",
                description: buildWorkItem("Panlit").description,
                url: buildWorkItem("Panlit").url,
              },
            ].map((item) => (
              <ExternalLink key={item.company} href={item.url} className="current-card">
                <span className="work-role">{item.role}</span>
                <h3>{item.company}</h3>
                <p>{item.description}</p>
              </ExternalLink>
            ))}
          </div>
        </section>

        <section className="editorial-section" id="work">
          <SectionHeading title="Selected work" note={`${featuredWork.length} of ${experience.length + 1}`} />
          <p className="section-lede">The things I&apos;d want judged. Each links through to the full account.</p>
          <div className="work-list">
            {featuredWork.map((item) => (
              <WorkRow key={item.company} item={item} />
            ))}
          </div>
          <details className="editorial-details">
            <summary>Show the full record · {additionalWork.length} more</summary>
            <div className="minimal-grid">
              {additionalWork.map((item) => (
                <ExternalLink key={item.company} href={item.url} className="minimal-link">
                  {item.company}<span>{item.role}</span>
                </ExternalLink>
              ))}
            </div>
          </details>
        </section>

        <section className="editorial-section" id="recognition">
          <SectionHeading title="Recognition" note="Externally verified" />
          <p className="section-lede">Selected. Each was awarded by a panel I did not sit on.</p>
          <div className="awards-grid">
            {achievements.slice(0, 8).map((item) => (
              <ExternalLink key={item.title} href={item.url} className="award-row">
                <span className="award-year">{yearFromTitle(item.title)}</span>
                <span className="award-title">{item.title}</span>
              </ExternalLink>
            ))}
          </div>
          <details className="editorial-details">
            <summary>Show all {achievements.length} honours</summary>
            <div className="minimal-grid">
              {achievements.slice(8).map((item) => (
                <ExternalLink key={item.title} href={item.url} className="minimal-link">
                  {item.title}<span>{yearFromTitle(item.title)}</span>
                </ExternalLink>
              ))}
            </div>
          </details>
        </section>

        <section className="editorial-section" id="press">
          <SectionHeading title="Press" note={`Selected · ${Math.min(10, press.length)} of ${press.length}`} />
          <p className="section-lede">Independent coverage of the work, most recent first.</p>
          <div className="press-list">
            {press.slice(0, 10).map((item) => (
              <ExternalLink key={item.url} href={item.url} className="press-row">
                <span className="press-publisher">{item.publisher}</span>
                <span className="press-headline">{item.title}</span>
                <span className="press-year">{yearFromTitle(item.title)}</span>
              </ExternalLink>
            ))}
          </div>
          <details className="editorial-details">
            <summary>Show all {press.length} mentions</summary>
            <div className="minimal-grid">
              {press.slice(10).map((item) => (
                <ExternalLink key={item.url} href={item.url} className="minimal-link">
                  {item.publisher}<span>{item.title}</span>
                </ExternalLink>
              ))}
            </div>
          </details>
        </section>

        <section className="editorial-section" id="speaking">
          <SectionHeading title="Speaking" note="Available for 2026–27" />
          <p className="section-lede">On African travel infrastructure, AI in operational industries, and building across the UK–Africa corridor.</p>
          <div className="talks-grid">
            {speaking.map((event) => (
              <ExternalLink key={event.url} href={event.url} className="talk-card">
                <span className="eyebrow">Speaker</span>
                <h3>{event.title}</h3>
                <span className="talk-arrow">Visit event →</span>
              </ExternalLink>
            ))}
            <a className="talk-card invite-card" href={`mailto:${contact.email}?subject=Speaking invitation`}>
              <h3>Invite me to speak <span>→</span></h3>
            </a>
          </div>
        </section>

        <section className="contact-panel" id="contact">
          <div>
            <span className="eyebrow contact-eyebrow">Let&apos;s work together</span>
            <h2>Have a problem that&apos;s too operational?</h2>
            <p>Tell me what you&apos;re building, where it gets stuck, or what the market keeps getting wrong.</p>
            <div className="contact-actions">
              <a className="editorial-button contact-primary" href={`mailto:${contact.email}`}>Start a conversation <span>→</span></a>
              <ExternalLink className="editorial-button contact-ghost" href={contact.linkedin}>LinkedIn</ExternalLink>
            </div>
          </div>
          <div className="contact-links">
            <span className="eyebrow contact-eyebrow">Elsewhere</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <ExternalLink href={contact.linkedin}>LinkedIn profile ↗</ExternalLink>
          </div>
        </section>
      </main>

      <footer className="editorial-wrap editorial-footer">
        <div><span className="footer-name">Ibukunoluwa Salau</span> <span className="footer-separator">·</span> London, United Kingdom <span className="footer-separator">·</span> <a href={`mailto:${contact.email}`}>{contact.email}</a></div>
        <div>Ibukunoluwa: &quot;God&apos;s blessing&quot;, from Yoruba <span className="footer-separator">·</span> © {new Date().getFullYear()}</div>
      </footer>
    </div>
  );
}

function SectionHeading({ title, note }: { title: string; note: string }) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      <span className="eyebrow">{note}</span>
    </div>
  );
}

function WorkRow({ item }: { item: WorkItem }) {
  return (
    <ExternalLink href={item.url} className="work-row">
      <div>
        <div className="work-period">{item.period} · {item.tags?.join(" · ")}</div>
        <h3>{item.company} <span className="work-tag">{item.role}</span></h3>
        <p className="work-description">{item.description}</p>
        <span className="row-arrow">Visit website →</span>
      </div>
      <div className="proof-list">
        {item.proof.map((proof) => (
          <span key={proof}><i />{proof}</span>
        ))}
      </div>
    </ExternalLink>
  );
}
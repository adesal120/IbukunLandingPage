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
    "Conversational AI triage for telecare alarm receiving centres. It absorbs false pendant activations, welfare calls and technical alerts, and escalates genuine emergencies to human operators with a structured handover, so control room staff spend their time on the calls that matter.",
  url: "https://ansden.com",
  period: "2026 — present",
  proof: ["1.8m UK telecare households affected by the Jan 2027 PSTN switch-off", "100+ housing associations and councils mapped as buyers"],
};

const featuredCompanies = [
  "Afriktrip / Direx",
  "Ansden",
  "Panlit",
  "Oxford University Press",
  "TN Naija",
  "GTVAdvice",
];

const workDetails: Record<string, { period: string; proof: string[] }> = {
  "Afriktrip / Direx": {
    period: "2020 — 2024",
    proof: [
      "Phocuswire Hot 25 Travel Startups, 2024",
      "Regional winner, Middle East & Africa, Global Startup Pitch 2023",
      "Top 5, Africa Youth in Tourism Innovation Challenge 2023",
      "Covered by Disrupt Africa, BenjaminDada, TechBuild",
    ],
  },
  Panlit: {
    period: "2025 — present",
    proof: ["Live merchants across five countries on three continents"],
  },
  "Oxford University Press": {
    period: "2024 — present",
    proof: [
      "Platforms: CoreSource, Scout, PoolParty, ELT PMD, ELT PDRS",
      "Academic, Education and English Language Teaching across 10+ countries",
    ],
  },
  "TN Naija": {
    period: "Community",
    proof: ["3 editions organised, 2024 to 2026", "Covered by TechEconomy, BusinessDay, BenjaminDada"],
  },
  "SHL Capital": {
    period: "Venture",
    proof: ["Pre-seed and seed stage, global mandate"],
  },
  GTVAdvice: {
    period: "Community",
    proof: [
      "70% endorsement success rate among applicants who used the guidance",
      "Endorsed on the Digital Technology route personally",
    ],
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
    role:
      company === "TN Naija"
        ? "Ops & Logistics Lead"
        : company === "Panlit"
          ? "Founder"
          : item.role,
    description:
      company === "Afriktrip / Direx"
        ? "Built the booking marketplace for African tours and experiences, from zero to 7,500+ listed tours across 28 countries. Raised from Daniel Gross's Pioneer, shipped book-now-pay-later, and took it through Barclays Black Founder Accelerator and Envision."
        : company === "Panlit"
          ? "Took an AI concierge for independent hospitality businesses from nothing to launch in twelve months, clearing Meta App Review and UK telecoms regulatory approval along the way."
          : company === "Oxford University Press"
            ? "Own five enterprise content platforms at the world's largest university press, a £1m+ portfolio covering metadata, taxonomy, rights and permissions, and digital distribution. They govern how 600k+ pieces of content are described, classified, licensed and delivered to 200+ partners including Apple, Google, Amazon and Spotify."
            : company === "TN Naija"
              ? "Run end-to-end operations for one of the UK's most prominent UK–Africa tech communities, including its annual convening. Organised three editions across London and Birmingham, bringing together 400+ founders, operators and investors across the corridor."
              : company === "SHL Capital"
                ? "Sourced pre-seed and seed deals for a fund deploying $15m a year, into a portfolio that includes Clubhouse, Notion and Figma."
                : company === "GTVAdvice"
                  ? "The reference resource for technologists applying for the UK Global Talent Visa, built after coming through the route myself. Demystifies eligibility, evidence and recommendation letters on one of the UK's most competitive immigration routes, for people who have no one to ask."
                  : item.description,
    period: workDetails[company]?.period ?? item.tags?.join(" · ") ?? "Experience",
    proof: workDetails[company]?.proof ?? [],
  };
}

const featuredWork = featuredCompanies.map((company) => {
  const item = buildWorkItem(company);
  return {
    ...item,
    tags: company === "Afriktrip / Direx" || company === "Panlit" || company === "Ansden" ? ["Venture"] : item.tags,
  };
});
const additionalWork = experience
  .filter((item) => !featuredCompanies.includes(item.company))
  .map((item) => buildWorkItem(item.company));

const featuredRecognition = [
  {
    year: "2024",
    title: "Hot 25 Travel Startups",
    source: "Phocuswire, annual global selection",
    url: press.find((item) => item.title.includes("Hot 25"))?.url ?? "https://www.phocuswire.com/Hot-25-Travel-Startups-for-2024-Direx",
  },
  {
    year: "2023",
    title: "MEA Winner, Global Traveltech Startup Pitch",
    source: "Web in Travel",
    url: achievements.find((item) => item.title.includes("Middle East and Africa"))?.url ?? "https://witevents.com/globalstartuppitch/",
  },
  {
    year: "2023",
    title: "City Winner and Regional Finalist, Rising Stars 5.0",
    source: "Tech Nation, Midlands",
    url: achievements.find((item) => item.title.includes("Tech Nation"))?.url ?? "https://technation.io/programmes/rising-stars/",
  },
  {
    year: "2023",
    title: "Barclays Black Founder Accelerator, Cohort 4.0",
    source: "Selected cohort",
    url: achievements.find((item) => item.title.includes("Barclays"))?.url ?? "https://www.foundervine.com/barclays-accelerator-cohort",
  },
  {
    year: "2021",
    title: "Winner, Pioneer.app Tournament",
    source: "Global weekly founder tournament, backed by Daniel Gross",
    url: achievements.find((item) => item.title.includes("Pioneer"))?.url ?? "https://pioneer.app/winners/ibukunoluwa-salau",
  },
  {
    year: "2021",
    title: "Global Talent, Digital Technology",
    source: "UK Home Office endorsement for exceptional talent",
    url: achievements.find((item) => item.title.includes("Global Talent"))?.url ?? "https://technation.io/visa-tech-nation-visa-guide/",
  },
  {
    year: "2021",
    title: "Finalist, Financial Times × Seedstars SDG Challenge",
    source: "Global finalist",
    url: achievements.find((item) => item.title.includes("Financial Times"))?.url ?? "https://drive.google.com/file/d/11qmPCiSVUZSHPPGE4PwVFqh4Zje-A1cX/view?usp=sharing",
  },
  {
    year: "2024",
    title: "AFRISE Challenge, Cohort #2",
    source: "Top 30 startups",
    url: achievements.find((item) => item.title.includes("AFRISE"))?.url ?? "https://hindsightventures.co/flagship-programs/afrise-challenge-2024",
  },
];

const achievementYears: Array<[string, string]> = [
  ["Envision", "2023"],
  ["Africa Youth", "2023"],
  ["Azure AI", "2021"],
  ["Azure Fundamentals", "2021"],
  ["BSc", "2018"],
  ["Computer Professional", "2021"],
  ["RoundtripAfrika", "2021"],
  ["Wimbart", "2021"],
  ["Handball", "2018"],
  ["Volleyball", "2018"],
];

function yearFromTitle(title: string) {
  return title.match(/20\d{2}/)?.[0] ?? achievementYears.find(([key]) => title.includes(key))?.[1] ?? "—";
}

const pressYears: Array<[string, string]> = [
  ["tn-naija-announces-connect-ignite-2026", "2026"],
  ["connect-ignite-nigerian-uk-tech-professionals", "2026"],
  ["Hot-25-Travel-Startups-for-2024-Direx", "2024"],
  ["african-founders-in-uk-get-new-platform", "2024"],
  ["5-startups-advance-grand-finals", "2023"],
  ["top-3-african-youth", "2023"],
  ["12-days-of-scaleups", "2023"],
  ["nigerian-startup-afriktrip-launches", "2021"],
  ["501-ibukunoluwa-salau", "2021"],
  ["meet-the-pioneers-january-2021", "2021"],
  ["aytis-unveils", "2023"],
  ["Meet-the-15-semifinalists", "2023"],
  ["meet-the-25-pitching", "2023"],
  ["south-african-airways-partners", "2023"],
  ["afriktrip-africa-tour-book", "2021"],
  ["global-accelerators-nigerian", "2021"],
  ["wimbart-office-hours", "2021"],
  ["ibukunoluwa-salau-afriktrip", "2021"],
  ["startup-afriktrip-africa-world", "2021"],
  ["cralocs", "2021"],
];

function pressYear(url: string) {
  return pressYears.find(([key]) => url.includes(key))?.[1] ?? "—";
}

const selectedPressTitles = [
  "TN Naija Announces Connect & Ignite",
  "Connect and Ignite: Celebrating Nigerian Tech Professionals",
  "Presenting the Hot 25",
  "African founders in UK get new platform",
  "5 startups advance to grand finals",
  "Top 3 African youth entrepreneurs",
  "Meet our Rising Stars 5.0",
  "Nigerian startup Afriktrip launches an online travel marketplace",
  "Ibukunoluwa Salau (Afriktrip) On Booking Trips to Africa",
  "Meet the Pioneers: January 2021",
];

const selectedPress = selectedPressTitles
  .map((title) => press.find((item) => item.title.includes(title)))
  .filter((item): item is (typeof press)[number] => Boolean(item));

const additionalPress = press.filter((item) => !selectedPress.some((selected) => selected.url === item.url));

function ExternalLink({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function EditorialLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <h1 className="claim">I start and build things. Some of them work.</h1>
          <p className="subclaim">
            Employed, founding and organising, at the same time, most weeks. Ten years across travel, film, hospitality,
            education and publishing, finance and investment, and healthcare.
          </p>

          <div className="hero-actions">
            <a className="editorial-button primary-button" href="#work">See selected work <span>→</span></a>
            <a className="editorial-button ghost-button" href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
        </header>

        <section className="editorial-section" id="now">
          <SectionHeading title="Current work" note="Updated Aug 2026" />
          <p className="section-lede">Where my time goes at the moment.</p>
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
                role: "Founder · Live",
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
          <p className="section-lede">Curated, not comprehensive.</p>
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
            {featuredRecognition.map((item) => (
              <ExternalLink key={item.title} href={item.url} className="award-row">
                <span className="award-year">{item.year}</span>
                <span>
                  <span className="award-title">{item.title}</span>
                  <span className="award-source">{item.source}</span>
                </span>
              </ExternalLink>
            ))}
          </div>
          <details className="editorial-details">
            <summary>Show all {achievements.length} honours</summary>
            <div className="minimal-grid">
              {achievements
                .filter((item) => !featuredRecognition.some((featured) => featured.url === item.url))
                .map((item) => (
                <ExternalLink key={item.title} href={item.url} className="minimal-link">
                  {item.title}<span>{yearFromTitle(item.title)}</span>
                </ExternalLink>
              ))}
            </div>
          </details>
        </section>

        <section className="editorial-section" id="press">
          <SectionHeading title="Press" note={`Selected · ${selectedPress.length} of ${press.length}`} />
          <p className="section-lede">Independent coverage of the work, most recent first.</p>
          <div className="press-list">
            {selectedPress.map((item) => (
              <ExternalLink key={item.url} href={item.url} className="press-row">
                <span className="press-publisher">{item.publisher}</span>
                <span className="press-headline">{item.title}</span>
                <span className="press-year">{pressYear(item.url)}</span>
              </ExternalLink>
            ))}
          </div>
          <details className="editorial-details">
            <summary>Show all {press.length} mentions</summary>
            <div className="minimal-grid">
              {additionalPress.map((item) => (
                <ExternalLink key={item.url} href={item.url} className="minimal-link">
                  {item.publisher}<span>{item.title} · {pressYear(item.url)}</span>
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
        <div className="work-period">
          {item.period}
          {item.tags?.length && !item.period.includes(item.tags[0]) ? ` · ${item.tags.join(" · ")}` : ""}
        </div>
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
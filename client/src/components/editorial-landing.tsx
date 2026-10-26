import { useState, type AnchorHTMLAttributes, type ReactNode } from "react";
import { achievements, contact, experience, press, speaking } from "@/lib/data";
import { travelCountries } from "@/lib/travel-data";
import visitedMap from "@/assets/visited-map.svg";
import "./editorial-refresh.css";

const featuredCompanies = ["Afriktrip / Direx", "Panlit", "Oxford University Press", "TN Naija"];
const pressOrder = [
  "Presenting the Hot 25",
  "5 startups advance to grand finals",
  "African founders in UK get new platform",
  "Meet our Rising Stars 5.0",
  "Nigerian startup Afriktrip launches",
  "TN Naija Announces Connect & Ignite",
  "Connect and Ignite: Celebrating Nigerian",
  "Top 3 African youth entrepreneurs",
  "Meet the Pioneers",
  "Ibukunoluwa Salau (Afriktrip)",
];

const awards = [
  {
    group: "Won",
    year: "2024",
    title: "Hot 25 Travel Startups, PhocusWire",
    description: "PhocusWire's annual list of the 25 travel startups worldwide its editors expect to shape the industry in the year ahead.",
    url: press.find((item) => item.title.includes("Hot 25"))?.url,
  },
  {
    group: "Won",
    year: "2023",
    title: "MEA Winner, Phocuswright × Web in Travel Global Startup Pitch",
    description: "Won the Middle East and Africa round of one of travel tech's best-known pitch competitions, earning a place in the global grand final.",
    url: achievements.find((item) => item.title.includes("Middle East and Africa"))?.url,
  },
  {
    group: "Won",
    year: "2023",
    title: "Top 5, Africa Youth in Tourism Innovation Challenge",
    description: "Named among the five standout startups at the continent's summit for young innovators in tourism.",
    url: achievements.find((item) => item.title.includes("Africa Youth"))?.url,
  },
  {
    group: "Won",
    year: "2023",
    title: "City Winner and Regional Finalist, Tech Nation Rising Stars 5.0",
    description: "Won the city round, then reached the Midlands regional final, of Tech Nation's national competition for the UK's most promising early-stage tech startups.",
    url: achievements.find((item) => item.title.includes("Tech Nation"))?.url,
  },
  {
    group: "Won",
    year: "2021",
    title: "Winner, Pioneer Tournament",
    description: "Won Pioneer, the global online founder tournament backed by Daniel Gross, where startups from around the world are ranked on their weekly progress.",
    url: achievements.find((item) => item.title.includes("Pioneer"))?.url,
  },
  {
    group: "Selected for",
    year: "2024",
    title: "AFRISE Challenge, Cohort #2",
    description: "Selected among the top 30 startups for Hindsight Ventures' AFRISE Challenge.",
    url: achievements.find((item) => item.title.includes("AFRISE"))?.url,
  },
  {
    group: "Selected for",
    year: "2023",
    title: "Barclays Black Founder Accelerator, Cohort 4.0",
    description: "The Barclays and Foundervine accelerator for high-potential Black founders, with mentoring, expert support and access to investors.",
    url: achievements.find((item) => item.title.includes("Barclays"))?.url,
  },
  {
    group: "Selected for",
    year: "2023",
    title: "Envision Accelerator, Cohort #6",
    description: "",
    url: achievements.find((item) => item.title.includes("Envision"))?.url,
  },
  {
    group: "Selected for",
    year: "2021",
    title: "Global Talent, Digital Technology",
    description: "Endorsed by Tech Nation for the UK Global Talent Visa, the route reserved for leaders and emerging leaders in digital technology.",
    url: achievements.find((item) => item.title.includes("Global Talent"))?.url,
  },
  {
    group: "Selected for",
    year: "2021",
    title: "Global Finalist, Financial Times × Seedstars SDG Challenge",
    description: "Startups tackling the UN Sustainable Development Goals, judged by the Financial Times and Seedstars.",
    url: achievements.find((item) => item.title.includes("Financial Times"))?.url,
  },
  {
    group: "Selected for",
    year: "2021",
    title: "Fellow, RoundtripAfrika Fellowship",
    description: "Part of the inaugural class of fellows.",
    url: achievements.find((item) => item.title.includes("RoundtripAfrika"))?.url,
  },
  {
    group: "Selected for",
    year: "2021",
    title: "Alumni, Wimbart Africa PR Programme",
    description: "Wimbart's programme for African tech founders on telling their story to press and investors.",
    url: achievements.find((item) => item.title.includes("Wimbart"))?.url,
  },
];

const credentials = [
  { year: "2021", title: "Certified, Microsoft Azure AI Fundamentals", url: achievements.find((item) => item.title.includes("Azure AI"))?.url },
  { year: "2021", title: "Certified, Microsoft Azure Fundamentals", url: achievements.find((item) => item.title.includes("Azure Fundamentals"))?.url },
  { year: "2021", title: "General Member, Computer Professionals of Nigeria", url: achievements.find((item) => item.title.includes("Computer Professional"))?.url },
  { year: "2018", title: "BSc (Hons) Computer Science, Federal University of Agriculture, Abeokuta", url: achievements.find((item) => item.title.includes("BSc"))?.url },
  { year: "2018", title: "Intercollegiate Silver Medallist, Handball", description: "Not strictly tech, still counts.", url: achievements.find((item) => item.title.includes("Handball"))?.url },
  { year: "2018", title: "Intercollegiate Bronze Medallist, Volleyball", url: achievements.find((item) => item.title.includes("Volleyball"))?.url },
];

function LinkOut({ href, children, className = "", ...props }: { href: string; children: ReactNode; className?: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
}

function SectionTitle({ title, note }: { title: string; note?: string }) {
  return (
    <div className="portfolio-section-heading">
      <h2>{title}</h2>
      {note ? <span className="portfolio-section-note portfolio-eyebrow">{note}</span> : null}
    </div>
  );
}

function AwardRow({ year, title, description, url }: { year: string; title: string; description?: string; url?: string }) {
  const titleNode = url ? <LinkOut className="portfolio-award-title" href={url}>{title}</LinkOut> : <strong className="portfolio-award-title">{title}</strong>;
  return (
    <div className="portfolio-award">
      <span className="portfolio-award-year">{year}</span>
      <div>{titleNode}{description ? <p className="portfolio-award-desc">{description}</p> : null}</div>
    </div>
  );
}

export default function EditorialLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [countryIndex, setCountryIndex] = useState(0);
  const [recordOpen, setRecordOpen] = useState(false);
  const [credentialsOpen, setCredentialsOpen] = useState(true);
  const [pressOpen, setPressOpen] = useState(true);
  const currentCountry = travelCountries[countryIndex];
  const selectedPress = pressOrder
    .map((needle) => press.find((item) => item.title.includes(needle)))
    .filter((item): item is (typeof press)[number] => Boolean(item));
  const allPress = [...selectedPress, ...press.filter((item) => !selectedPress.some((selected) => selected.url === item.url))];
  const additionalWork = experience.filter((item) => !featuredCompanies.includes(item.company));
  const pressYear = (title: string) => {
    if (title.includes("Connect & Ignite") || title.includes("Connect and Ignite")) return "2026";
    if (title.includes("Hot 25") || title.includes("UK get new platform")) return "2024";
    if (title.includes("grand finals") || title.includes("Rising Stars") || title.includes("AYTIS") || title.includes("youth") || title.includes("semifinalists") || title.includes("pitching") || title.includes("South African Airways")) return "2023";
    return "2021";
  };
  const orderedSpeaking = [
    ...speaking.filter((event) => event.tag === "Speaker"),
    ...speaking.filter((event) => event.tag === "Organiser").sort((a, b) => Number(b.title.match(/20\d{2}/)?.[0] ?? 0) - Number(a.title.match(/20\d{2}/)?.[0] ?? 0)),
  ];

  return (
    <div className="portfolio" id="top">
      <header className="portfolio-nav">
        <nav className="portfolio-shell portfolio-nav-inner" aria-label="Main navigation">
          <a className="portfolio-brand" href="#top" onClick={() => setMenuOpen(false)}>IBUKUNOLUWA<span>.</span></a>
          <button className="portfolio-menu" type="button" aria-expanded={menuOpen} aria-controls="portfolio-nav-links" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? "Close" : "Menu"}
          </button>
          <div className={`portfolio-navlinks${menuOpen ? " is-open" : ""}`} id="portfolio-nav-links">
            {[
              ["Now", "#now"],
              ["Work", "#work"],
              ["Places", "#travel"],
              ["Recognition", "#recognition"],
              ["Contact", "#contact"],
            ].map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </div>
        </nav>
      </header>

      <main>
        <section className="portfolio-shell portfolio-hero" aria-labelledby="portfolio-title">
          <div className="portfolio-hero-copy">
            <p className="portfolio-kicker"><span className="portfolio-kicker-dot" /> UK · Founder · Product · Operator</p>
            <h1 id="portfolio-title">I build the systems things quietly run on.<br /><span>You&apos;d only notice if I got it wrong.</span></h1>
            <p className="portfolio-hero-intro">My favourite problems are too unglamorous for most people and too important to ignore. I&apos;ve built products, companies and communities around them, in more industries than is strictly sensible.</p>
            <div className="portfolio-actions">
              <a className="portfolio-button portfolio-button-dark" href="#now">See the bet <span aria-hidden="true">→</span></a>
              <a className="portfolio-button" href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          </div>
          <aside className="portfolio-brief" aria-label="The short version">
            <p className="portfolio-brief-title portfolio-mono">The short version</p>
            <div className="portfolio-brief-rows">
              <div className="portfolio-brief-row"><b>NOW</b><span>Building Ansden, AI for telecare and independent living</span></div>
              <div className="portfolio-brief-row"><b>ALSO</b><span>Running Connect x Ignite, 400+ in the room each edition</span></div>
              <div className="portfolio-brief-row"><b>BEFORE</b><span>Built Afriktrip, Phocuswire Hot 25</span></div>
            </div>
          </aside>
        </section>

        <section className="portfolio-shell portfolio-section" id="now">
          <SectionTitle title="Current work" note="Updated Oct 2026" />
          <p className="portfolio-eyebrow portfolio-bet-label">The bet</p>
          <article className="portfolio-bet">
            <div className="portfolio-bet-copy">
              <p className="portfolio-bet-status portfolio-mono">Founder · Pilot · 2026 to present</p>
              <h3>Ansden</h3>
              <p>Technology for telecare and independent living, starting in the control room. First up: AI that takes the routine calls, inbound and outbound, so operators can focus on the real emergencies. After that, whatever else it takes to keep people safe at home.</p>
              <p className="portfolio-bet-italic">Nobody dreams of building for telecare control rooms. That&apos;s rather the point.</p>
              <LinkOut className="portfolio-button" href="https://ansden.com">Visit ansden.com <span aria-hidden="true">→</span></LinkOut>
            </div>
          </article>
          <div className="portfolio-current-grid">
            <div>
              <p className="portfolio-eyebrow portfolio-current-group-label">The day job</p>
              <LinkOut className="portfolio-current-card" href={experience.find((item) => item.company === "Oxford University Press")!.url}>
                <p className="portfolio-role portfolio-eyebrow">Product Manager</p>
                <h3>Oxford University Press</h3>
                <p>Five enterprise content platforms, a £1m+ portfolio, serving 200+ partners including Apple, Google, Amazon and Spotify.</p>
              </LinkOut>
            </div>
            <div>
              <p className="portfolio-eyebrow portfolio-current-group-label">Also, because I can&apos;t help myself</p>
              <div className="portfolio-current-cards">
                <LinkOut className="portfolio-current-card" href={experience.find((item) => item.company === "TN Naija")!.url}>
                  <p className="portfolio-role portfolio-eyebrow">Ops &amp; Logistics Lead</p>
                  <h3>TN Naija</h3>
                  <p>Connect x Ignite, the flagship gathering for Africans building in UK tech, and the community behind it. 400+ founders, operators and investors each edition. I run the operations.</p>
                  <span className="portfolio-card-link">Visit <span aria-hidden="true">→</span></span>
                </LinkOut>
                <LinkOut className="portfolio-current-card" href={experience.find((item) => item.company === "GTVAdvice")!.url}>
                  <p className="portfolio-role portfolio-eyebrow">Founder</p>
                  <h3>GTVAdvice</h3>
                  <p>The Global Talent Visa is one of the UK&apos;s most competitive immigration routes for digital technology professionals. I went through the process myself, and now I help other technologists do the same, with a 70% endorsement rate: a guide for those going solo, and tailored support for those who&apos;d rather not.</p>
                  <p>70% endorsement rate.</p>
                  <span className="portfolio-card-link">Visit <span aria-hidden="true">→</span></span>
                </LinkOut>
              </div>
            </div>
          </div>
        </section>

        <div className="portfolio-work-wrap">
          <section className="portfolio-shell portfolio-section" id="work">
            <SectionTitle title="Selected work" note="4 of 16" />
            <p className="portfolio-section-intro">Curated, not comprehensive.</p>
            <article className="portfolio-work-row">
              <div className="portfolio-work-meta">
                <p className="portfolio-work-date portfolio-mono">2020 to 2024 · Venture</p>
                <h3>Afriktrip / Direx</h3>
                <p className="portfolio-work-role portfolio-mono">Founder · Closed</p>
                <LinkOut href={experience.find((item) => item.company === "Afriktrip / Direx")!.url}>Watch <span aria-hidden="true">→</span></LinkOut>
              </div>
              <div className="portfolio-work-content">
                <p>Built an online booking marketplace for African tours and experiences, from zero to 7,500+ listed tours, helping 1,000+ tourism businesses sell their packages across 28 countries.</p>
                <p>Afriktrip was the online marketplace for tours and experiences; Direx was the booking management software operators used to run them.</p>
                <div className="portfolio-proof"><span>Phocuswire Hot 25, 2024</span><span>MEA winner, Global Startup Pitch 2023</span><span>Top 5, AYTIS 2023</span></div>
              </div>
            </article>
            <article className="portfolio-work-row">
              <div className="portfolio-work-meta">
                <p className="portfolio-work-date portfolio-mono">2025 to present · Venture</p>
                <h3>Panlit</h3>
                <p className="portfolio-work-role portfolio-mono">Founder · Live</p>
                <LinkOut href={experience.find((item) => item.company === "Panlit")!.url}>Visit <span aria-hidden="true">→</span></LinkOut>
              </div>
              <div className="portfolio-work-content">
                <p>AI guest experience platform for restaurants, wellness businesses and activity providers in the UK and US, answering calls and messages across WhatsApp, Instagram, Messenger, web chat and contact forms.</p>
                <p>It&apos;s where I learned what conversational AI gets right and wrong on real calls, before taking it somewhere the stakes are higher.</p>
                <div className="portfolio-proof"><span>5 countries, 3 continents</span></div>
              </div>
            </article>
            <article className="portfolio-work-row">
              <div className="portfolio-work-meta">
                <p className="portfolio-work-date portfolio-mono">2024 to present · Professional</p>
                <h3>Oxford University Press</h3>
                <p className="portfolio-work-role portfolio-mono">Product Manager</p>
                <LinkOut href={experience.find((item) => item.company === "Oxford University Press")!.url}>Visit <span aria-hidden="true">→</span></LinkOut>
              </div>
              <div className="portfolio-work-content">
                <p>Own five enterprise content platforms at the world&apos;s largest university press, a £1m+ portfolio covering metadata, taxonomy, rights and permissions, and digital distribution. They govern how 600k+ pieces of content are described, classified, licensed and delivered to 200+ partners including Apple, Google, Amazon and Spotify.</p>
                <div className="portfolio-proof"><span>CoreSource, Scout, PoolParty, ELT PMD, ELT PDRS</span><span>10+ countries</span></div>
              </div>
            </article>
            <article className="portfolio-work-row">
              <div className="portfolio-work-meta">
                <p className="portfolio-work-date portfolio-mono">2024 to present · Community</p>
                <h3>TN Naija</h3>
                <p className="portfolio-work-role portfolio-mono">Ops &amp; Logistics Lead</p>
                <LinkOut href={experience.find((item) => item.company === "TN Naija")!.url}>Visit <span aria-hidden="true">→</span></LinkOut>
              </div>
              <div className="portfolio-work-content">
                <p>Connect x Ignite, the flagship gathering for Africans building in UK tech, and the community behind it. 400+ founders, operators and investors each edition. I run the operations.</p>
                <div className="portfolio-proof"><span>3 editions</span><span>400+ per conference</span><span>London · Birmingham</span></div>
              </div>
            </article>
            <button className="portfolio-toggle" type="button" aria-expanded={recordOpen} onClick={() => setRecordOpen((open) => !open)}>
              {recordOpen ? "Hide full record" : `Show the full record · ${additionalWork.length + 1} more`}
            </button>
            {recordOpen ? (
              <div className="portfolio-more-grid" aria-label="Full work record">
                <LinkOut className="portfolio-more-link" href="https://ansden.com"><strong>Ansden</strong><span>Founder</span></LinkOut>
                {additionalWork.map((item) => (
                  <LinkOut className="portfolio-more-link" href={item.url} key={item.company}>
                    <strong>{item.company}</strong><span>{item.role}</span>
                  </LinkOut>
                ))}
              </div>
            ) : null}
          </section>
        </div>

        <section className="portfolio-shell portfolio-travel" id="travel">
          <div className="portfolio-travel-header">
            <div className="portfolio-travel-title">
              <p className="portfolio-eyebrow">Off the clock</p>
              <h2>Countries I&apos;ve been to</h2>
            </div>
            <div className="portfolio-stats" aria-label="Travel totals">
              <div className="portfolio-stat"><strong>13</strong><span>countries</span></div>
              <div className="portfolio-stat"><strong>30</strong><span>cities</span></div>
              <div className="portfolio-stat"><strong>3</strong><span>continents</span></div>
            </div>
          </div>
          <div className="portfolio-map-card">
            <div className="portfolio-map" aria-label="World map and visited countries">
              <img src={visitedMap} alt="World map with the 13 countries visited highlighted" />
              {travelCountries.map((country, index) => (
                <button
                  className={`portfolio-map-marker${countryIndex === index ? " is-active" : ""}`}
                  key={country.id}
                  type="button"
                  aria-label={`Select ${country.name}`}
                  aria-pressed={countryIndex === index}
                  style={{ left: country.left, top: country.top }}
                  onClick={() => setCountryIndex(index)}
                />
              ))}
            </div>
            <div className="portfolio-map-info" aria-live="polite">
              <div>
                <p className="portfolio-eyebrow">{currentCountry.continent} · {countryIndex + 1} of {travelCountries.length}</p>
                <p className="portfolio-map-country">{currentCountry.name}</p>
                <p className="portfolio-map-cities">{currentCountry.cities}</p>
              </div>
              <div className="portfolio-map-controls">
                <button type="button" aria-label="Previous country" onClick={() => setCountryIndex((index) => (index - 1 + travelCountries.length) % travelCountries.length)}>←</button>
                <button type="button" aria-label="Next country" onClick={() => setCountryIndex((index) => (index + 1) % travelCountries.length)}>→</button>
              </div>
            </div>
          </div>
        </section>

        <div className="portfolio-recognition">
          <section className="portfolio-shell portfolio-section" id="recognition">
            <div className="portfolio-recognition-head">
              <h2>Recognition</h2>
              <p>Mostly from the Afriktrip years. Working on the sequel.</p>
            </div>
            <div className="portfolio-recognition-columns">
              {["Won", "Selected for"].map((group) => (
                <div className="portfolio-recognition-group" key={group}>
                  <h3>{group}</h3>
                  {awards.filter((award) => award.group === group).map((award) => <AwardRow key={award.title} {...award} />)}
                </div>
              ))}
              <div className="portfolio-recognition-group portfolio-credentials">
                <h3>Credentials</h3>
                {credentialsOpen ? (
                  <div className="portfolio-credentials-list">
                    {credentials.map((credential) => <AwardRow key={credential.title} {...credential} />)}
                  </div>
                ) : null}
                <button className="portfolio-toggle" type="button" aria-expanded={credentialsOpen} onClick={() => setCredentialsOpen((open) => !open)}>
                  {credentialsOpen ? "Hide credentials" : `Show credentials · ${credentials.length}`}
                </button>
              </div>
            </div>
          </section>
        </div>

        <section className="portfolio-press" id="press">
          <div className="portfolio-shell portfolio-section">
            <SectionTitle title="Press" note="21 mentions" />
            <p className="portfolio-section-intro">Independent coverage.</p>
            <div className="portfolio-press-grid">
              {(pressOpen ? allPress : selectedPress).map((item) => (
                <LinkOut className="portfolio-press-row" href={item.url} key={item.url}>
                  <span className="portfolio-press-meta">
                    <span className="portfolio-press-publisher">{item.publisher}</span>
                    <span className="portfolio-press-year">{pressYear(item.title)}</span>
                  </span>
                  <span className="portfolio-press-title">{item.title}</span>
                </LinkOut>
              ))}
            </div>
            <button className="portfolio-toggle" type="button" aria-expanded={pressOpen} onClick={() => setPressOpen((open) => !open)}>
              {pressOpen ? "Show less" : `Show all ${press.length} mentions`}
            </button>
          </div>
        </section>

        <div className="portfolio-talks">
          <section className="portfolio-shell portfolio-section" id="speaking">
            <SectionTitle title="Speaking & organising" note="Available for 2026–27" />
            <div className="portfolio-talks-grid">
              {orderedSpeaking.map((event) => {
                const year = event.title.match(/20\d{2}/)?.[0] ?? "";
                const title = event.title.replace(/\s20\d{2}/, "");
                const content = <>
                  <span className="portfolio-eyebrow">{event.tag} · {year}</span>
                  <h3>{title.replace("Connect and Ignite", "Connect x Ignite")}</h3>
                </>;
                return event.url
                  ? <LinkOut className="portfolio-talk" href={event.url} key={event.title}>{content}</LinkOut>
                  : <div className="portfolio-talk" key={event.title}>{content}</div>;
              })}
            </div>
            <a className="portfolio-button portfolio-button-dark portfolio-invite-cta" href={`mailto:${contact.email}?subject=Speaking%20invitation`}>Invite me to speak <span aria-hidden="true">→</span></a>
          </section>
        </div>

        <section className="portfolio-contact-band" id="contact">
          <div className="portfolio-shell portfolio-contact">
            <p className="portfolio-eyebrow">Let&apos;s work together</p>
            <h2>Have a problem that&apos;s too operational? <span>Good.</span></h2>
            <p className="portfolio-contact-copy">If you&apos;re building, backing or writing about something hard and unglamorous, I&apos;d like to hear about it.</p>
            <div className="portfolio-contact-actions">
              <a className="portfolio-button" href={`mailto:${contact.email}`}>{contact.email} <span aria-hidden="true">→</span></a>
              <LinkOut className="portfolio-button portfolio-linkedin-button" href={contact.linkedin}>LinkedIn</LinkOut>
            </div>
            <footer className="portfolio-dark-footer">
              <span>Ibukunoluwa Salau · United Kingdom</span>
              <span>Ibukunoluwa: &quot;God&apos;s blessing&quot;, from Yoruba · © 2026</span>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}

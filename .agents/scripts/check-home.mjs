import assert from "node:assert/strict";
import { createServer } from "vite";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

const vite = await createServer({ server: { middlewareMode: true, hmr: false }, appType: "custom" });
try {
  const { default: Home } = await vite.ssrLoadModule("/src/components/editorial-landing.tsx");
  const { press, speaking, achievements, contact } = await vite.ssrLoadModule("/src/lib/data.ts");
  const { travelCountries } = await vite.ssrLoadModule("/src/lib/travel-data.ts");
  const html = renderToStaticMarkup(React.createElement(Home));
  assert.match(html, /I build the systems things quietly run on/);
  assert.match(html, /You&#x27;d only notice if I got it wrong/);
  assert.equal(press.length, 21);
  assert.equal(travelCountries.length, 13);
  assert.equal(speaking.length, 8);
  assert.equal((html.match(/class="portfolio-work-row"/g) ?? []).length, 4);
  assert.equal((html.match(/class="portfolio-press-row"/g) ?? []).length, 21);
  assert.equal((html.match(/aria-pressed=/g) ?? []).length, 13);
  assert.match(html, /aria-label="Previous country"/);
  assert.match(html, /aria-label="Next country"/);
  for (const item of [...press, ...speaking, ...achievements]) {
    if (item.url) assert.ok(html.includes(item.url.replaceAll("&", "&amp;")), `Missing destination: ${item.url}`);
  }
  assert.ok(html.includes(`mailto:${contact.email}`));
  assert.ok(html.includes(contact.linkedin));
  assert.ok(!html.includes('href="#"'));
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
  for (const [, id] of html.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(ids.has(id), `Missing internal destination: ${id}`);
  }
  console.log("Home smoke check passed: copy, 4 work entries, 21 press links, 8 events, all award destinations, 13 country controls, contact links, and internal anchors.");
} finally {
  await vite.close();
}

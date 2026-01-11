import React, { useMemo, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import styles from "./output.module.css";

const TABS = [
  { key: "bias", label: "Bias" },
  { key: "satire", label: "Satire" },
  { key: "misinformation", label: "Misinformation" },
  { key: "disinformation", label: "Disinformation" },
  { key: "credibility", label: "Credibility" },
  { key: "cross_refs", label: "Cross-refs" },
];

function clamp01(n) {
  if (Number.isNaN(n)) return 0;
  return Math.min(1, Math.max(0, n));
}

function scoreToLevel(score0to100) {
  const s = Number(score0to100);
  if (Number.isNaN(s)) return "Unknown";
  if (s < 25) return "Low";
  if (s < 50) return "Moderate";
  if (s < 75) return "High";
  return "Very High";
}

function formatDateTime(iso) {
  try {
    const d = iso ? new Date(iso) : new Date();
    return d.toLocaleString();
  } catch {
    return "";
  }
}

// Fallback mock response (so the page works even before backend)
const MOCK_RESULT = {
  meta: {
    title: "Sample Article Title",
    source_url: "https://example.com/article",
    analyzed_at: new Date().toISOString(),
  },
  clean_text:
    "This is sample article text. Later you will highlight evidence spans inside this reader.\n\nSecond paragraph of content goes here.",
  scores: {
    bias: 62,
    satire: 14,
    misinformation: 31,
    disinformation: 9,
    credibility: 55,
  },
  explanations: {
    bias: "The language includes subjective framing and emotionally loaded terms that may influence perception.",
    satire: "Few satire markers detected; tone is mostly serious and informational.",
    misinformation: "Some claims lack support in the text, but intent is unclear from content alone.",
    disinformation: "No strong indicators of deliberate deception were found in this sample.",
    credibility: "Some trust signals are present, but sourcing and author transparency could be stronger.",
  },
  evidence: {
    bias: [
      { id: "e1", text: "‘Everyone knows’ style phrasing suggests certainty without evidence." },
      { id: "e2", text: "Emotionally loaded adjectives appear in key claims." },
    ],
    satire: [{ id: "e3", text: "No obvious satire cues in headline or body." }],
    misinformation: [{ id: "e4", text: "Claim presented without a citation or source link." }],
    disinformation: [{ id: "e5", text: "No coordinated manipulation patterns detected in text alone." }],
    credibility: [
      { id: "e6", text: "No named author and few outbound sources to primary materials." },
    ],
  },
  cross_refs: {
    similar: [
      { title: "Related coverage (similar)", url: "https://example.com/similar" },
    ],
    different: [
      { title: "Different framing (contrast)", url: "https://example.com/different" },
    ],
    fact_checks: [
      { title: "Fact check / primary source", url: "https://example.com/factcheck" },
    ],
  },
};

function ScoreCard({ title, score }) {
  const pct = clamp01(Number(score) / 100) * 100;
  const level = scoreToLevel(score);

  return (
    <div className={styles.scoreCard}>
      <div className={styles.scoreTop}>
        <div className={styles.scoreTitle}>{title}</div>
        <div className={styles.scoreNumber}>
          {Number.isFinite(Number(score)) ? `${Math.round(score)}%` : "—"}
        </div>
      </div>

      <div className={styles.scoreBarOuter} aria-label={`${title} score`}>
        <div className={styles.scoreBarInner} style={{ width: `${pct}%` }} />
      </div>

      <div className={styles.scoreMeta}>
        <span className={styles.levelPill}>{level}</span>
        <span className={styles.scaleHint}>0 (low) → 100 (high)</span>
      </div>
    </div>
  );
}

function EvidenceList({ items = [] }) {
  if (!items?.length) {
    return <div className={styles.emptyBox}>No evidence items for this tab (yet).</div>;
  }

  return (
    <ul className={styles.evidenceList}>
      {items.map((it) => (
        <li key={it.id || it.text} className={styles.evidenceItem}>
          <div className={styles.evidenceBullet} />
          <div className={styles.evidenceText}>{it.text}</div>
        </li>
      ))}
    </ul>
  );
}

function LinksGroup({ title, links = [] }) {
  return (
    <div className={styles.linksGroup}>
      <div className={styles.linksTitle}>{title}</div>
      {(!links || links.length === 0) ? (
        <div className={styles.emptyBox}>No links yet.</div>
      ) : (
        <ul className={styles.linkList}>
          {links.map((l) => (
            <li key={l.url} className={styles.linkItem}>
              <a href={l.url} target="_blank" rel="noreferrer" className={styles.linkA}>
                {l.title}
              </a>
              <span className={styles.linkUrl}>{l.url}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Output() {
  const location = useLocation();
  const data = location.state?.result ?? location.state ?? null;

  const result = useMemo(() => {
    // If you navigate with { state: result } or { state: { result } }, both work.
    return data && typeof data === "object" ? data : MOCK_RESULT;
  }, [data]);

  const [activeTab, setActiveTab] = useState("bias");

  const meta = result.meta ?? {};
  const title = meta.title ?? "Untitled";
  const sourceUrl = meta.source_url ?? "";
  const analyzedAt = formatDateTime(meta.analyzed_at);

  const scores = result.scores ?? {};
  const explanations = result.explanations ?? {};
  const evidence = result.evidence ?? {};
  const cleanText = result.clean_text ?? "";

  const isCrossRefs = activeTab === "cross_refs";

  return (
    <div className={styles.WebPage}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.projectName}>New Lense</div>
          <div className={styles.pageTitle}>Results</div>
        </div>

        <div className={styles.headerRight}>
          <Link to="/" className={styles.backLink}>← Back</Link>
        </div>
      </header>

      <section className={styles.summary}>
        <div className={styles.summaryMain}>
          <div className={styles.articleTitle}>{title}</div>
          <div className={styles.metaRow}>
            {sourceUrl ? (
              <>
                <a className={styles.sourceLink} href={sourceUrl} target="_blank" rel="noreferrer">
                  {sourceUrl}
                </a>
                <span className={styles.dot}>•</span>
              </>
            ) : null}
            <span className={styles.metaText}>Analyzed: {analyzedAt}</span>
          </div>
        </div>

        <div className={styles.summaryScores}>
          <ScoreCard title="Bias" score={scores.bias} />
          <ScoreCard title="Credibility" score={scores.credibility} />
        </div>
      </section>

      <nav className={styles.tabs} aria-label="Result categories">
        {TABS.map((t) => (
          <button
            key={t.key}
            className={`${styles.tabBtn} ${activeTab === t.key ? styles.tabActive : ""}`}
            onClick={() => setActiveTab(t.key)}
            type="button"
          >
            {t.label}
          </button>
        ))}
      </nav>

      <main className={styles.mainGrid}>
        {/* Left: Tab content */}
        <section className={styles.leftPane}>
          {!isCrossRefs ? (
            <>
              <div className={styles.sectionTitle}>Score</div>
              <ScoreCard title={TABS.find(t => t.key === activeTab)?.label ?? "Score"} score={scores[activeTab]} />

              <div className={styles.sectionTitle}>Description</div>
              <div className={styles.descriptionBox}>
                {explanations[activeTab] ?? "Description placeholder: explain why this score was assigned."}
              </div>

              <div className={styles.sectionTitle}>Evidence</div>
              <EvidenceList items={evidence[activeTab]} />
            </>
          ) : (
            <>
              <div className={styles.sectionTitle}>Cross-references</div>
              <div className={styles.descriptionBox}>
                Placeholder: show links that help users compare coverage and verify claims.
              </div>

              <div className={styles.linksGrid}>
                <LinksGroup title="Similar coverage" links={result.cross_refs?.similar} />
                <LinksGroup title="Different framing" links={result.cross_refs?.different} />
                <LinksGroup title="Fact checks / primary sources" links={result.cross_refs?.fact_checks} />
              </div>
            </>
          )}
        </section>

        {/* Right: Article reader */}
        <aside className={styles.rightPane}>
          <div className={styles.sectionTitle}>Article text</div>
          <div className={styles.readerHint}>
            Placeholder reader. Later: highlight evidence spans + click evidence to scroll here.
          </div>

          <pre className={styles.reader}>
            {cleanText || "No text available yet."}
          </pre>
        </aside>
      </main>
    </div>
  );
}

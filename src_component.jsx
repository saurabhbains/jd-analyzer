import { useState } from "react";

const MASTER_BANK = `
=== SAURABH BAINS — MASTER RESUME BANK ===

Five active versions:
- AMEX_DIRECTOR: leadership/director-level framing, strategy emphasis, reports to CPO/Director
- SPM_INSURTECH: fintech senior PM, platform architecture, API systems, user research
- VISA: execution/delivery, PRDs, backlog, sprints, agile, ATS-optimised for process-heavy orgs
- NORTHZONE: VC/entrepreneurial, richest CSF bullets, team sizes, investment/fund language
- ANTHROPIC: rare/specific — partnerships + tech + EdTech non-profit combination

--- LITTA (2025, London) ---
[ALL] Redesigned growth strategy and product roadmap, reallocating ~20% budget toward high-conversion channels
[NORTHZONE] Redesigned firm-wide growth strategy; modelled scenarios and defined product roadmap, driving ~20% budget reallocation toward high-conversion channels; reported to Board of Directors
[ALL] Developed a dynamic pricing engine (from cost-plus to willingness-to-pay), increasing retail margins by 12%

--- VFX FINANCIAL (2025, London) ---
[ALL] Partnered with the CEO to transition to a product-first operating model; restructured engineering into three focused domains, accelerating delivery timelines by 20%, unlocking faster feature rollout
[AMEX_DIRECTOR/SPM_INSURTECH] Led end-to-end solution redesign of a payments compliance and risk platform, defining modular architecture for onboarding and transaction monitoring; strengthened auditability, translating to ~300-500k annual savings
[VISA] Led end-to-end redesign of payments compliance and risk platform, introducing modular APIs for onboarding and transaction monitoring; strengthening trust and improving auditability, ~300-500k annual savings
[NORTHZONE] Led end-to-end redesign of the compliance platform, introducing modular APIs, cutting onboarding time and improving audit traceability, translating to ~300-500k annualised cost savings

--- PAYPAY (2022-2024) — Company descriptions ---
[AMEX_DIRECTOR] SoftBank payments arm, 70M+ users, $100B GMV — Co-led $80M merchant business across product, engineering, and design, translating business problems into structured roadmaps and execution strategy; led team of 15, reported to Director and CPO
[SPM_INSURTECH] SoftBank payments arm, 70M+ users, $100B GMV — Co-led $80M merchant business, owning strategy and roadmap for trusted financial and marketplace experiences across SoftBank; reporting to Director and CPO
[VISA] SoftBank payments arm, 70M+ users, $100B GMV — Co-led $80M merchant business; owned end-to-end delivery across discovery, checkout and transaction flows; defined PRDs, managed backlog and sprints, agile environment; reported to Director and CPO
[NORTHZONE] Japan largest payments app with 70M+ users, 10M+ stores and 8B+ payments/yr — One of two leaders of $80M merchant business; led cross-functional team of 15

--- PAYPAY Bullet 1 — Marketplace ---
[AMEX_DIRECTOR] Defined and launched a multi-product payments-enabled marketplace, integrating offline merchant inventory into a unified ecosystem across 50k stores; designed end-to-end solutions spanning payments, discovery and merchant systems, reducing friction in store discovery; generated $3M GMV in 3 months; product awarded two patents
[SPM_INSURTECH] Launched a digital commerce and two-sided payments-enabled marketplace, integrating offline merchant inventory into a scalable platform used by 50k stores, improving transaction confidence and reducing friction in store discovery; generated $3M GMV in 3 months; product awarded two patents
[VISA] Launched a two-sided payments-enabled marketplace; partnered with engineering, CX and merchant teams to iterate on discovery and checkout flows through data-driven experiments and user feedback, optimising transaction conversion, scaling to 50k stores, generating $3M GMV in 3 months; product awarded two patents
[NORTHZONE] Spearheaded launch of retail discovery platform, transforming offline inventory into digital records across 50k stores, increasing transaction visibility and driving $3M GMV in 3 months; product awarded two patents

--- PAYPAY Bullet 2 — Store Discovery ---
[AMEX_DIRECTOR] Led redesign of a declining store discovery product, a core platform capability; defined new architecture and realigned senior leadership on new strategy; improved trust and relevance in merchant recommendations, reversing churn and scaling MAU to 8M; awarded two patents
[SPM_INSURTECH] Led rebuild of a declining store discovery product by redesigning core user and data flows; realigned senior leadership on new strategy and improved relevance and user trust in merchant recommendations, reversing churn and scaling MAU to 8M; awarded two patents
[VISA] Rebuilt a declining store discovery product by analysing user behaviour and transaction data to identify drop-offs; realigned senior leadership; partnered with engineering and data teams to test relevance, reversing churn, scaling MAU to 8M; awarded two patents
[NORTHZONE] Led rebuild of a declining legacy store discovery product; created new product and data flow; realigned senior leadership; reversed churn and increased MAU to 8M; awarded patents for discovery workflow

--- PAYPAY Bullet 3 — Shopping Assist ---
[AMEX_DIRECTOR] Led cross-platform design of a shopping assist product across SoftBank (PayPay, Yahoo, LINE) to standardize merchant interactions; managed complex stakeholder trade-offs to improve interoperability across the ecosystem, increasing user engagement by 30%
[SPM_INSURTECH] Led product development of shopping assist product across SoftBank (PayPay, Yahoo, Line), standardizing merchant interactions, improving interoperability and increasing cross-platform user engagement by 30%
[VISA] Led delivery of cross-platform Shopping Assist by aligning requirements and coordinating execution across multiple product and engineering teams; standardized merchant interactions, improving interoperability and increasing user engagement by 30%
[NORTHZONE] Designed and led the expansion of Shopping Assist across SoftBank, standardizing merchant interactions and increasing cross-platform user engagement by 30%

--- PAYPAY Bullet 4 — Digital Wallet ---
[AMEX_DIRECTOR] Launched government-backed prepaid digital wallet navigating complex partner and regulatory constraints and cross-functional dependencies; enabled cashless payments for 60k SMBs and $1M+ transactions at launch
[SPM_INSURTECH] Launched a government-backed prepaid digital wallet in a regulated environment, enabling secure cashless payments for 60k SMBs; led cross-functional delivery across regulators and partners, processing $1M+ transactions at launch
[VISA] Delivered a government-backed prepaid digital wallet in a regulated payments environment; translated partner requirements into product specifications; managed dependencies across regulators, banks, and internal teams; launched secure real-time payments for 60k SMBs ($1M+ transactions at launch)
[NORTHZONE] Launched a government-backed prepaid digital wallet, driving adoption of cashless payments for 60k small businesses, coordinating with public institutions for operational rollout, processing $1M+ in transactions on launch

--- CSF (2018-2022) ---
[ALL] Incubated Rocket Learning, an AI start-up for public schools; scaled across five states; recognised as 1 of 15 global winners of Google AI for Global Goals award
[ALL] Led product and rollout of a home learning app to 150k+ households; grew MAU by 40% through onboarding redesign; reached #2 on the App Store
[AMEX_DIRECTOR/NORTHZONE] Led design of CSF four-year $8M strategic roadmap targeting impact across 100M children; drove org-wide OKR implementation
[ANTHROPIC] Raised $4M from India largest corporate funder; built targeted funnel, pitched, and built stakeholder relationships; established CSF fundraising coaching for 20 non-profits
[ANTHROPIC] Led widespread adoption of TicTacLearn across 500 low-resourced schools; expanded to 20 states and 50M total content views
[ANTHROPIC] Developed enterprise product for Chimple, a gamified app (Global Learning XPrize finalist); expanded student reach by 40% and developed 2 corporate partnerships
[NORTHZONE] Designed and deployed a covid-response playbook for portfolio startups, enabling pivot to remote-first delivery; expanding collective reach to 5M students
[NORTHZONE] Raised and structured a $3M flagship investment fund; led sourcing and evaluation of 10 startups; formalized capital allocation strategy with board

--- PAYTM (2015-2017) ---
[AMEX_DIRECTOR/SPM_INSURTECH] Led product for launch of one of India largest licensed digital banks, building secure compliant payment flows and identity-linked transactions, integrating with banks and regulators to ensure reliability at scale (60M users)
[VISA] Defined and owned product delivery for one of India largest licensed digital banks; built compliant real-time payments (UPI); collaborated with banks and regulators to ensure reliability at scale (60M users)
[NORTHZONE] Led a product team of four; worked with regulators and partner banks to build biometric-based payments and compliant transaction flows, scaling to 60M users
[NORTHZONE] Designed payment lifecycle flows including settlement, reconciliation and error handling across user journeys
[AMEX_DIRECTOR/SPM_INSURTECH] Founding PM for online-to-offline marketplace (events and movies); built two-sided consumer and merchant platforms, secured three national partnerships, scaled to 2M+ transactions; business later exited for $250M
[NORTHZONE] Founding PM for Paytm O2O business; managed team of six; led consumer and merchant product flows and partnerships; scaled early adoption to 2M+ transactions

--- SKILLS LINE VARIANTS ---
[AMEX_DIRECTOR] AI Applied Tools (Claude Code, Vercel), Product and strategy (solutions design, platform strategy, roadmap ownership), Jira, Miro, Figma, Mixpanel, SQL, experimentation, payments, marketplaces, digital wallets, API-based systems, modular platforms
[SPM_INSURTECH] AI Applied Tools (Claude Code, Vercel), Product (backlog prioritisation, agile, Mixpanel, Jira, Miro, Figma), Analytics (SQL), Payments (digital wallet ecosystem, prepaid systems, payment flows)
[VISA] Backlog prioritisation, Agile/Scrum, Miro, Jira, Figma, PPT, Excel, SQL, payments (digital wallet ecosystem, payment flows, compliance led systems), Claude Code, Vercel
[NORTHZONE/ANTHROPIC] Solutions design, platform strategy, roadmap ownership, user research, rapid experimentation, Jira, Miro, Figma, SQL, experimentation, API-based systems, modular platforms, Claude Code, Vercel

--- PROJECTS ---
[ALL] Pathwise (Dec 2025): AI-powered simulation engine for executive coaching; 2nd Prize UC Berkeley AI Hackathon
[ALL] FareShare (2013): early ride-sharing app in India; scaled to 3k users; finalist (top 30/800) in Google and MIT accelerator; presented to VCs at national pitch event
[MOST] BerkeleyRides (2025): AI ride-sharing app at UC Berkeley; 100+ users, ~50% signup conversion
[SPM_INSURTECH] Aisle (Mar 2026): wedding planning AI assistant that automates venue discovery and outreach
[MOST] Mentorship: Instructor to 50+ PM students on Upgrad flagship PM course (2018-2019)
`;

const SYSTEM_PROMPT = `You are an expert PM recruiter and resume coach helping Saurabh Bains optimise his resume for specific job applications.

You have access to Saurabh's MASTER RESUME BANK with all bullet variants across all resume versions:

${MASTER_BANK}

FIVE ACTIVE RESUME VERSIONS:
1. AMEX_DIRECTOR: leadership/director-level framing, strategy emphasis. Best for: director+ roles, large orgs, strategy-heavy JDs
2. SPM_INSURTECH: fintech senior PM, platform architecture, API systems, user research. Best for: fintech senior PM roles, insurtech, platform companies
3. VISA: execution/delivery focused. PRDs, backlog, sprints, agile language. ATS-optimised. Best for: Visa, Mastercard, Expedia, process-heavy orgs
4. NORTHZONE: VC/entrepreneurial framing. Richest CSF bullets, team sizes, investment/fund language. Best for: VC firms, strategy roles, early-stage
5. ANTHROPIC: rare/specific — partnerships + tech + EdTech non-profit. Best for: partnerships roles requiring social impact + tech background

If the user has added a custom version (GOOGLE or other), it will appear in ADDITIONAL VERSIONS below — treat it with equal weight.

When given a job description, respond ONLY with a JSON object in this exact structure:
{
  "fitScore": <integer 0-100>,
  "fitLabel": <"Strong Match" | "Good Match" | "Partial Match" | "Weak Match">,
  "fitRationale": "<1-2 sentence summary>",
  "recommendedBase": <"AMEX_DIRECTOR" | "SPM_INSURTECH" | "VISA" | "NORTHZONE" | "ANTHROPIC" | or name of any custom version added>,
  "baseRationale": "<one sentence explaining why this base version fits best>",
  "bulletSwaps": [
    {
      "role": "<company name e.g. PAYPAY>",
      "swapFrom": "<version name the base uses>",
      "swapTo": "<version name to pull from instead>",
      "reason": "<why this swap improves ATS/fit>"
    }
  ],
  "missingKeywords": [
    { "keyword": "<exact keyword from JD>", "suggestion": "<where to add it>" }
  ],
  "skillsLineVariant": "<which skills variant to use, or a new combined version incorporating JD keywords>",
  "quickActions": ["<concise action item>"],
  "applyRecommendation": <"Apply now" | "Apply with tweaks" | "Low priority">,
  "applyReason": "<one sentence>"
}

Rules:
- bulletSwaps: only suggest swaps where a different version bullet genuinely matches the JD better. Max 4 swaps.
- missingKeywords: only keywords genuinely in the JD and absent from ALL versions. Max 6.
- quickActions: 3-5 items in priority order, very concise.
- Be direct and specific. No padding.
- Return ONLY valid JSON. No markdown fences, no preamble, no trailing text.`;

const fitColors = {
  "Strong Match": { bg: "#EAF3DE", text: "#3B6D11", border: "#639922" },
  "Good Match": { bg: "#E6F1FB", text: "#185FA5", border: "#378ADD" },
  "Partial Match": { bg: "#FAEEDA", text: "#854F0B", border: "#BA7517" },
  "Weak Match": { bg: "#FCEBEB", text: "#A32D2D", border: "#E24B4A" },
};

const applyColors = {
  "Apply now": { bg: "#EAF3DE", text: "#3B6D11" },
  "Apply with tweaks": { bg: "#E6F1FB", text: "#185FA5" },
  "Low priority": { bg: "#FCEBEB", text: "#A32D2D" },
};

const versionColors = {
  AMEX_DIRECTOR: { bg: "#E6F1FB", text: "#185FA5" },
  SPM_INSURTECH: { bg: "#FAEEDA", text: "#854F0B" },
  VISA: { bg: "#FCEBEB", text: "#A32D2D" },
  NORTHZONE: { bg: "#EAF3DE", text: "#3B6D11" },
  ANTHROPIC: { bg: "#EEEDFE", text: "#3C3489" },
};
function getVersionColor(name) {
  return versionColors[name] || { bg: "#F1EFE8", text: "#5F5E5A" };
}

export default function JDAnalyzer() {
  const [jd, setJd] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(null);
  const [showAddVersion, setShowAddVersion] = useState(false);
  const [newVersionName, setNewVersionName] = useState("");
  const [newVersionText, setNewVersionText] = useState("");
  const [customVersions, setCustomVersions] = useState([]);

  function addVersion() {
    if (!newVersionName.trim() || !newVersionText.trim()) return;
    setCustomVersions(function(prev) { return prev.concat([{ name: newVersionName.trim().toUpperCase().replace(/\s+/g, "_"), text: newVersionText.trim() }]); });
    setNewVersionName("");
    setNewVersionText("");
    setShowAddVersion(false);
  }

  async function analyse() {
    if (!jd.trim()) return;
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-haiku-4-5-20251001",
          max_tokens: 1500,
          system: SYSTEM_PROMPT + (customVersions.length > 0 ? "\n\nADDITIONAL VERSIONS:\n" + customVersions.map(function(v) { return v.name + ":\n" + v.text; }).join("\n\n") : ""),
          messages: [{ role: "user", content: "Analyse this job description:\n\n" + jd }],
        }),
      });
      const data = await res.json();
      if (data.error) { setError("API error: " + data.error.message); return; }
      const raw = (data.content || []).filter(function(b) { return b.type === "text"; }).map(function(b) { return b.text; }).join("");
      if (!raw) { setError("Empty response. Please try again."); return; }
      const clean = raw.replace(/```json|```/g, "").trim();
      const match = clean.match(/\{[\s\S]*\}/);
      if (!match) { setError("Could not parse response: " + clean.slice(0, 200)); return; }
      setResult(JSON.parse(match[0]));
    } catch (e) {
      setError("Error: " + e.message);
    } finally {
      setLoading(false);
    }
  }

  function copyText(text, id) {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(function() { setCopied(null); }, 1500);
  }

  const fc = result ? (fitColors[result.fitLabel] || fitColors["Partial Match"]) : null;
  const ac = result ? (applyColors[result.applyRecommendation] || applyColors["Apply with tweaks"]) : null;
  const vc = result ? getVersionColor(result.recommendedBase) : null;

  return (
    React.createElement("div", { style: { padding: "1.5rem 1rem", maxWidth: 720, margin: "0 auto" } },
      React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem", gap: 12, flexWrap: "wrap" } },
        React.createElement("p", { style: { fontSize: 13, color: "var(--color-text-secondary)", margin: 0, flex: 1 } },
          "Paste a job description to get your best-matched resume version, bullet swaps, missing keywords, and action items."
        ),
        React.createElement("button", {
          onClick: function() { setShowAddVersion(function(v) { return !v; }); },
          style: {
            fontSize: 12, padding: "5px 12px", borderRadius: "var(--border-radius-md)",
            border: "0.5px solid var(--color-border-secondary)", background: "transparent",
            color: "var(--color-text-secondary)", cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0,
          }
        }, showAddVersion ? "Cancel" : "+ Add resume version")
      ),

      customVersions.length > 0 && React.createElement("div", { style: { marginBottom: 12, display: "flex", gap: 6, flexWrap: "wrap" } },
        React.createElement("span", { style: { fontSize: 12, color: "var(--color-text-secondary)", alignSelf: "center" } }, "Custom versions:"),
        customVersions.map(function(v, i) {
          return React.createElement("span", {
            key: i,
            style: {
              fontSize: 12, padding: "3px 10px", borderRadius: "var(--border-radius-md)",
              background: "var(--color-background-secondary)", color: "var(--color-text-secondary)",
              border: "0.5px solid var(--color-border-secondary)", display: "flex", alignItems: "center", gap: 6,
            }
          },
            v.name,
            React.createElement("span", {
              onClick: function() { setCustomVersions(function(prev) { return prev.filter(function(_, j) { return j !== i; }); }); },
              style: { cursor: "pointer", opacity: 0.6, fontSize: 14, lineHeight: 1 }
            }, "×")
          );
        })
      ),

      showAddVersion && React.createElement("div", {
        style: {
          marginBottom: 16, padding: "14px 16px", borderRadius: "var(--border-radius-lg)",
          border: "0.5px solid var(--color-border-secondary)", background: "var(--color-background-secondary)",
          display: "flex", flexDirection: "column", gap: 10,
        }
      },
        React.createElement("input", {
          value: newVersionName,
          onChange: function(e) { setNewVersionName(e.target.value); },
          placeholder: "Version name (e.g. GOOGLE)",
          style: {
            padding: "8px 12px", fontSize: 13, borderRadius: "var(--border-radius-md)",
            border: "0.5px solid var(--color-border-secondary)", background: "var(--color-background-primary)",
            color: "var(--color-text-primary)", fontFamily: "var(--font-sans)",
          }
        }),
        React.createElement("textarea", {
          value: newVersionText,
          onChange: function(e) { setNewVersionText(e.target.value); },
          placeholder: "Paste the full resume text for this version...",
          style: {
            padding: "10px 12px", fontSize: 13, minHeight: 120, borderRadius: "var(--border-radius-md)",
            border: "0.5px solid var(--color-border-secondary)", background: "var(--color-background-primary)",
            color: "var(--color-text-primary)", resize: "vertical", fontFamily: "var(--font-sans)", lineHeight: 1.6,
          }
        }),
        React.createElement("button", {
          onClick: addVersion,
          disabled: !newVersionName.trim() || !newVersionText.trim(),
          style: {
            alignSelf: "flex-start", padding: "7px 18px", fontSize: 13, fontWeight: 500,
            borderRadius: "var(--border-radius-md)", border: "0.5px solid var(--color-border-secondary)",
            background: "transparent", color: "var(--color-text-primary)",
            cursor: (newVersionName.trim() && newVersionText.trim()) ? "pointer" : "not-allowed",
            opacity: (newVersionName.trim() && newVersionText.trim()) ? 1 : 0.5,
          }
        }, "Save version")
      ),

      React.createElement("textarea", {
        value: jd,
        onChange: function(e) { setJd(e.target.value); },
        placeholder: "Paste the full job description here...",
        style: {
          width: "100%", minHeight: 160, padding: "12px 14px", fontSize: 14,
          borderRadius: "var(--border-radius-md)", border: "0.5px solid var(--color-border-secondary)",
          background: "var(--color-background-primary)", color: "var(--color-text-primary)",
          resize: "vertical", boxSizing: "border-box", fontFamily: "var(--font-sans)", lineHeight: 1.6,
        }
      }),
      React.createElement("button", {
        onClick: analyse,
        disabled: loading || !jd.trim(),
        style: {
          marginTop: 12, padding: "9px 24px", fontSize: 14, fontWeight: 500,
          borderRadius: "var(--border-radius-md)", border: "0.5px solid var(--color-border-secondary)",
          background: "transparent", color: "var(--color-text-primary)",
          cursor: (jd.trim() && !loading) ? "pointer" : "not-allowed",
          opacity: (jd.trim() && !loading) ? 1 : 0.5,
        }
      }, loading ? "Analysing..." : "Analyse JD \u2197"),

      error && React.createElement("p", { style: { marginTop: 16, fontSize: 14, color: "var(--color-text-danger)" } }, error),

      result && React.createElement("div", { style: { marginTop: 28, display: "flex", flexDirection: "column", gap: 20 } },

        React.createElement("div", { style: { display: "flex", gap: 12, flexWrap: "wrap" } },
          React.createElement("div", {
            style: {
              flex: "0 0 auto", padding: "14px 20px", borderRadius: "var(--border-radius-lg)",
              border: "1.5px solid " + fc.border, background: fc.bg, minWidth: 110, textAlign: "center",
            }
          },
            React.createElement("div", { style: { fontSize: 32, fontWeight: 500, color: fc.text, lineHeight: 1 } }, result.fitScore),
            React.createElement("div", { style: { fontSize: 12, color: fc.text, marginTop: 4, opacity: 0.85 } }, result.fitLabel)
          ),
          React.createElement("div", {
            style: {
              flex: 1, padding: "14px 16px", borderRadius: "var(--border-radius-lg)",
              border: "0.5px solid var(--color-border-tertiary)", background: "var(--color-background-secondary)",
              display: "flex", flexDirection: "column", gap: 8, minWidth: 200,
            }
          },
            React.createElement("p", { style: { margin: 0, fontSize: 14, color: "var(--color-text-primary)", lineHeight: 1.6 } }, result.fitRationale),
            React.createElement("span", {
              style: { padding: "3px 10px", borderRadius: "var(--border-radius-md)", fontSize: 12, fontWeight: 500, background: ac.bg, color: ac.text, alignSelf: "flex-start" }
            }, result.applyRecommendation)
          )
        ),

        React.createElement(Section, { title: "Recommended base version" },
          React.createElement("div", {
            style: {
              padding: "14px 16px", borderRadius: "var(--border-radius-lg)",
              border: "1.5px solid " + vc.text + "30", background: vc.bg,
            }
          },
            React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 6 } },
              React.createElement("span", {
                style: {
                  padding: "3px 12px", borderRadius: "var(--border-radius-md)", fontSize: 13, fontWeight: 500,
                  background: "var(--color-background-primary)", color: vc.text, border: "1px solid " + vc.text + "40",
                }
              }, result.recommendedBase)
            ),
            React.createElement("p", { style: { margin: 0, fontSize: 13, color: vc.text, lineHeight: 1.6 } }, result.baseRationale)
          )
        ),

        React.createElement(Section, { title: "Quick actions" },
          React.createElement("ol", { style: { margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 } },
            (result.quickActions || []).map(function(a, i) {
              return React.createElement("li", { key: i, style: { fontSize: 14, color: "var(--color-text-primary)", lineHeight: 1.6 } }, a);
            })
          )
        ),

        result.bulletSwaps && result.bulletSwaps.length > 0 && React.createElement(Section, { title: "Bullet swaps — pull from other versions" },
          React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8 } },
            result.bulletSwaps.map(function(s, i) {
              return React.createElement("div", {
                key: i,
                style: {
                  padding: "12px 14px", borderRadius: "var(--border-radius-md)",
                  border: "0.5px solid var(--color-border-tertiary)", background: "var(--color-background-primary)",
                }
              },
                React.createElement("div", { style: { display: "flex", gap: 8, alignItems: "center", marginBottom: 6, flexWrap: "wrap" } },
                  React.createElement("span", { style: { fontSize: 11, fontWeight: 500, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.04em" } }, s.role),
                  React.createElement("span", { style: { fontSize: 12, padding: "2px 8px", borderRadius: "var(--border-radius-md)", background: "#FCEBEB", color: "#A32D2D" } }, "from " + s.swapFrom),
                  React.createElement("span", { style: { fontSize: 12, color: "var(--color-text-secondary)" } }, "\u2192"),
                  React.createElement("span", { style: { fontSize: 12, padding: "2px 8px", borderRadius: "var(--border-radius-md)", background: "#EAF3DE", color: "#3B6D11" } }, "use " + s.swapTo)
                ),
                React.createElement("p", { style: { margin: 0, fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.5 } }, s.reason)
              );
            })
          )
        ),

        result.missingKeywords && result.missingKeywords.length > 0 && React.createElement(Section, { title: "Missing keywords — not in any version" },
          React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8 } },
            result.missingKeywords.map(function(k, i) {
              return React.createElement("div", {
                key: i,
                style: {
                  padding: "10px 14px", borderRadius: "var(--border-radius-md)",
                  border: "0.5px solid var(--color-border-tertiary)", background: "var(--color-background-primary)",
                }
              },
                React.createElement("span", {
                  style: {
                    display: "inline-block", padding: "2px 8px", borderRadius: "var(--border-radius-md)",
                    fontSize: 12, fontWeight: 500, background: "#EEEDFE", color: "#3C3489", marginBottom: 4,
                  }
                }, k.keyword),
                React.createElement("p", { style: { margin: 0, fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.5 } }, k.suggestion)
              );
            })
          )
        ),

        result.skillsLineVariant && React.createElement(Section, { title: "Skills line to use" },
          React.createElement("div", {
            style: {
              padding: "12px 14px", borderRadius: "var(--border-radius-md)",
              border: "0.5px solid var(--color-border-tertiary)", background: "var(--color-background-primary)",
              display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12,
            }
          },
            React.createElement("p", { style: { margin: 0, fontSize: 13, color: "var(--color-text-primary)", lineHeight: 1.6, flex: 1 } }, result.skillsLineVariant),
            React.createElement("button", {
              onClick: function() { copyText(result.skillsLineVariant, "skills"); },
              style: {
                fontSize: 12, padding: "4px 10px", borderRadius: "var(--border-radius-md)",
                border: "0.5px solid var(--color-border-secondary)", background: "transparent",
                color: "var(--color-text-secondary)", cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0,
              }
            }, copied === "skills" ? "Copied" : "Copy")
          )
        ),

        React.createElement("p", {
          style: {
            margin: 0, fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6,
            borderTop: "0.5px solid var(--color-border-tertiary)", paddingTop: 16,
          }
        }, result.applyReason)
      )
    )
  );
}

function Section(props) {
  return React.createElement("div", null,
    React.createElement("p", {
      style: {
        margin: "0 0 10px", fontSize: 12, fontWeight: 500, color: "var(--color-text-secondary)",
        textTransform: "uppercase", letterSpacing: "0.05em",
      }
    }, props.title),
    props.children
  );
}

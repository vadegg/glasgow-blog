---
title: "Heuristic Evaluation in UX Research: A Practitioner's Guide"
description: "Learn how to plan, run, and report a heuristic evaluation in real product teams — including exactly when it beats usability testing and when it doesn't."
pubDate: 2026-07-13
updatedDate: 2026-07-13
readingTime: 14
slug: "heuristic-evaluation-ux-research"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "UX researcher annotating a digital interface with sticky notes during a heuristic evaluation session"
tags:
  - "UX Research Methods"
  - "how to run a heuristic evaluation"
  - "heuristic evaluation vs usability testing"
  - "Nielsen heuristics UX"
  - "expert review UX research"
---
<!-- gr:toc -->

## On this page

- [What Is a Heuristic Evaluation (and What It Isn't)](#what-is-a-heuristic-evaluation-and-what-it-isnt)
- [Heuristic Evaluation vs Usability Testing: When to Use Which](#heuristic-evaluation-vs-usability-testing-when-to-use-which)
- [Planning a Heuristic Evaluation: Scope, Evaluators, and Heuristic Set](#planning-a-heuristic-evaluation-scope-evaluators-and-heuristic-set)
- [Running the Evaluation: A Step-by-Step Process](#running-the-evaluation-a-step-by-step-process)
- [From Issue Log to Stakeholder Report: What Good Reporting Looks Like](#from-issue-log-to-stakeholder-report-what-good-reporting-looks-like)
- [A Real-World Example: Heuristic Evaluation on a B2B SaaS Onboarding Flow](#a-real-world-example-heuristic-evaluation-on-a-b2b-saas-onboarding-flow)
- [Common Mistakes That Undermine a Heuristic Evaluation](#common-mistakes-that-undermine-a-heuristic-evaluation)
- [Frequently Asked Questions](#frequently-asked-questions)

## What Is a Heuristic Evaluation (and What It Isn't)

A heuristic evaluation is a structured expert inspection of an interface against a defined set of usability principles. That qualifier matters. It is not a freeform design critique, a stakeholder review session, or a designer riffing on colour choices. Every finding must be traceable to a named principle — a heuristic — and the output is a prioritised issue list, not a bag of qualitative user insights.

Two adjacent methods are worth separating out. A UX audit is broader in scope, often covering content strategy, information architecture, and accessibility alongside usability heuristics. A cognitive walkthrough is narrower: it follows a single user persona through a specific task, step by step, asking at each point whether the interface supports the right mental model. Heuristic evaluation sits between the two — task-informed but not task-locked, applying a consistent framework across an entire scoped flow rather than one user perspective.

The dominant framework comes from Nielsen and Molich's 1990 work, which eventually became Nielsen's 10 heuristics: visibility of system status, match between system and the real world, user control and freedom, consistency and standards, error prevention, recognition rather than recall, flexibility and efficiency of use, aesthetic and minimalist design, help with errors, and help and documentation. For most web and mobile product work, these 10 cover the ground. Alternative sets — Gerhardt-Powals' cognitive engineering principles, platform-specific guidelines for voice UI, or WCAG-anchored accessibility heuristics — are worth reaching for when the interface type or the evaluation goal sits outside standard screen-based interaction. See our [UX research methods comparison](https://blog.glasgow.works/blog/ux-research-methods-comparison) for how heuristic evaluation fits into a broader research toolkit.

---

## Heuristic Evaluation vs Usability Testing: When to Use Which

The two methods answer different questions. Heuristic evaluation asks: does this interface violate established usability principles? Usability testing asks: can real users accomplish real tasks with this product? Conflating them is one of the more common mistakes in research planning.

Here is how they compare across practical dimensions:

| Dimension | Heuristic evaluation | Usability testing |
|---|---|---|
| Cost | Low–medium | Medium–high |
| Speed | Fast (days) | Slower (weeks including recruitment) |
| Recruitment burden | None | Significant |
| Best design stage | Early prototype to live product | Mid-fidelity prototype or live product |
| Type of insight | Principle violations, surface issues | Behavioural patterns, mental models, task success |

**Heuristic evaluation wins when:** you have no user access, the timeline is tight, you are working with an early prototype that would not survive a moderated session, or you need to triage a long issue backlog before committing recruitment budget to a usability study.

**Usability testing wins when:** you need to validate actual task completion rates, understand how users form mental models, or uncover unexpected behaviour that no expert would predict. Users routinely surprise even experienced evaluators — that is the point of the method.

**The hybrid approach:** run a heuristic evaluation first to surface and fix the obvious violations, then run usability sessions on a cleaner interface. Surface issues — unlabelled icons, missing error messages, inconsistent navigation — tend to dominate usability sessions and obscure the deeper behavioural patterns you actually need to understand. Clear them first and your sessions surface richer insight per participant.

One misconception is worth correcting directly: heuristic evaluation does not replace usability testing. It compresses the issue list so that when you do spend recruitment budget, every session is working harder. For more on when to reach for each method, see our guides on [usability testing vs user interviews](https://blog.glasgow.works/blog/usability-testing-vs-user-interviews) and [remote usability testing best practices](https://blog.glasgow.works/blog/remote-usability-testing-best-practices).

---

## Planning a Heuristic Evaluation: Scope, Evaluators, and Heuristic Set

Good planning heads off three common failure modes: scope creep, evaluator homogeneity, and aimless interface touring. Deal with each before the evaluation begins.

**Define scope first.** A full product evaluation produces an unmanageable wall of findings. A single critical flow — onboarding, checkout, a core task — produces actionable depth. Narrower scope means evaluators spend their attention where it counts. If the product has several high-stakes flows, run sequential evaluations rather than one sprawling pass.

**Evaluator count.** Research into the method consistently points to 3–5 evaluators as the practical sweet spot. A single evaluator catches roughly 35% of usability issues; five evaluators working independently catch somewhere around 75%. Beyond five, diminishing returns set in and consolidation becomes unwieldy. A single-evaluator evaluation should never be treated as definitive — it is a starting point, not a verdict.

**Evaluator profiles.** A homogeneous panel of UX generalists will miss domain-specific issues. Pairing a UX generalist with someone who has deep knowledge of the product's domain — a financial services specialist on a fintech flow, for example — consistently produces a richer, more credible issue set. The generalist spots heuristic violations; the domain specialist spots cases where the interface misrepresents the real-world process it is meant to support.

**Heuristic set.** Default to Nielsen's 10 for web and native app work. For voice interfaces, add platform-specific conventions for feedback and error recovery. For data-dense enterprise tools, consider supplementing with principles around progressive disclosure and information density. When accessibility is a priority, layer in the relevant WCAG success criteria alongside the core heuristics. See our piece on [inclusive UX research methods](https://blog.glasgow.works/blog/inclusive-ux-research-methods) for more on integrating accessibility into evaluation practice.

**Pre-evaluation briefing.** Give evaluators a user persona and 3–5 representative task scenarios before they begin. Without this framing, evaluators tour the interface as curious experts rather than inspecting it as a proxy user trying to accomplish something. Keep the briefing to one page. Don't pre-load evaluators with opinions about where the problems are.

**Logistics.** Independent reviews must be completed before any consolidation session. If evaluators compare notes mid-evaluation, anchoring bias shapes the findings: the first person to name an issue influences whether others log it and how severely they rate it.

---

## Running the Evaluation: A Step-by-Step Process

**Step 1 — Solo walk-through pass.** Each evaluator independently inspects the scoped flow, working through the task scenarios in the briefing. For each screen and interaction, they ask: which heuristics are violated here? They log issues as they go, without consulting other evaluators.

**Step 2 — Issue logging format.** Each logged issue needs four elements: a screenshot or screen reference, the heuristic violated (by name and number), a plain-English description of the problem, and an initial severity score. This structure matters for stakeholder reporting. "Error messages lack clear recovery guidance (Heuristic 9 — help users recognise, diagnose and recover from errors)" is actionable. "The error messages are bad" is not.

**Step 3 — Severity scoring.** Use Nielsen's 0–4 scale: 0 means not actually a usability problem; 1 is cosmetic; 2 is a minor issue that users can work around; 3 is a significant problem that impairs task completion; 4 is a usability catastrophe that users cannot recover from. To build a priority rank, weight severity against the frequency with which users will encounter the issue and the impact on their goal. A severity-3 issue on a screen every user sees every session outranks a severity-3 issue on a rarely visited settings panel.

**Step 4 — Consolidation session.** The facilitator (typically the lead researcher) brings evaluators together to merge duplicate issues and resolve severity disagreements. Do not average scores — discuss them. An evaluator who rates an issue 4 while another rates it 2 has seen something different; that disagreement is itself a finding and should be resolved by examining the issue together rather than settling on a 3 by arithmetic.

**Step 5 — Issue deduplication.** Group findings by interaction pattern, not by screen. An absent confirmation step might appear at three different points in a checkout flow: log it once as a root-cause issue affecting multiple screens, not three separate issues. Fragmenting one root cause inflates the issue count and hides the structural problem.

**Tooling.** A shared spreadsheet or Notion database works well for most teams and is easy for stakeholders to access. FigJam or Dovetail add richer tagging and visual annotation if the team already uses them. The process does not require specialised software. What it requires is consistent logging structure and a single master log that everyone works from.

---

## From Issue Log to Stakeholder Report: What Good Reporting Looks Like

Most heuristic evaluation reports fail for one of three reasons: they are too long, too jargon-heavy, or presented as a flat list with no priority signal. A 47-issue spreadsheet with no severity tiers lands as a complaint list. No-one acts on it.

**Report structure that works:**

1. **Executive summary.** The top 3–5 severity-4 issues, each with a screenshot and a one-sentence plain-English description of the consequence for the user. This section should be readable by a product director in under five minutes.
2. **Full issue log by severity tier.** Severity 4 and 3 issues first, then 2, then 1. Each entry follows the logging format from the evaluation: screenshot, heuristic, description, severity, affected flow.
3. **Recommended next steps.** Which issues go straight to the design backlog? Which warrant a usability study before a fix decision? Which need an engineering scoping call first?

**Framing for different audiences.** Product teams need findings framed in terms of impact on user goals: "Users cannot recover from payment errors without abandoning the flow" is useful. Engineering teams need reproduction steps and affected components: "On the checkout confirmation screen, the error state returns a generic 500 message rather than specifying the failed step."

**When to escalate to a usability study.** If a severity-3 or 4 issue involves a complex interaction pattern where the fix is non-obvious, design a usability study to test proposed solutions rather than shipping a guess. The heuristic evaluation tells you there is a problem; the usability study tells you whether the fix works. Where findings cluster into thematic patterns across heuristics — a systemic failure in error prevention and recovery across an entire flow, for instance — [thematic analysis in qualitative research](https://blog.glasgow.works/blog/thematic-analysis-qualitative-research) techniques can help structure that synthesis before you brief the design team.

**Delivery format.** Avoid PDF-only reports. A live Notion page or a Jira-linked issue log sustains momentum: the team can update status as issues are addressed, which keeps findings from disappearing into a shared drive folder after the first read.

---

## A Real-World Example: Heuristic Evaluation on a B2B SaaS Onboarding Flow

A product team at a B2B SaaS company came to us with a familiar constraint. They had a usability study planned for the following month but suspected the onboarding flow had significant issues that would dominate the sessions and obscure deeper findings. Recruitment time with their user segment was limited. The ask was to run a heuristic evaluation on the onboarding flow before participants came in, so the sessions could focus on higher-order questions about workflow fit.

We scoped the evaluation to the onboarding flow only — account creation through to the user's first completed core task. Three evaluators: a UX generalist from our team, a researcher with domain knowledge of the enterprise software space, and a third evaluator with accessibility expertise. Each received a one-page briefing with two task scenarios and a persona representing the product's primary user role.

The internal team expected findings to cluster around visual design consistency and labelling. What surfaced was different. The two severity-4 issues were both in error handling: the flow gave no indication of what had gone wrong when a configuration step failed, and offered no route back to the point of failure without restarting onboarding entirely — a clear violation of user control and freedom and of help with error recovery. The internal team had lived with these states long enough that they had stopped registering them as problems.

Eight severity-2 issues covered inconsistent terminology across steps, missing progress indicators, and a help link that appeared only on the first screen. These were queued for the usability study rather than fast-tracked: the team wanted to understand whether users noticed the terminology inconsistency or adapted to it.

The two severity-4 issues were fixed before the usability sessions ran. When the sessions took place, error recovery did not come up once — because the recovery path now worked. What the sessions did surface was what the team actually needed to understand: how users conceptualised the product's core task and where their mental model diverged from the design team's assumptions. That insight shaped a significant structural change to the onboarding sequence.

For teams weighing whether a lightweight evaluation pass is worth the time before a study, that outcome is a reasonable answer. See also our [guerrilla usability testing guide](https://blog.glasgow.works/guerrilla-usability-testing-guide) for pairing low-cost evaluation methods in constrained timelines.

---

## Common Mistakes That Undermine a Heuristic Evaluation

**One evaluator.** A single-evaluator pass misses the majority of issues. Treat it as a preliminary scan, not a definitive evaluation.

**No task scenarios.** Without scenarios, evaluators tour the interface rather than inspect it through a user lens. The findings are less targeted and harder to prioritise.

**Comparing notes before independent passes are complete.** The first evaluator to name an issue anchors the rest. Independent passes must be fully logged before the consolidation session begins.

**No severity scoring.** A flat list of issues with no priority signal produces a report that reads like a complaint register. Stakeholders cannot act on it without doing prioritisation work themselves — work they rarely do.

**Evaluating the entire product in one pass.** The output is an unactionable volume of findings. Scope tightly, then repeat for other flows if needed.

**Logging design opinions as heuristic violations.** Every issue must cite the heuristic it violates. "The button colour is wrong" is an opinion. "The primary action button is visually indistinct from secondary actions, reducing recognition of available options (Heuristic 6 — recognition rather than recall)" is an evaluation finding.

---

## Frequently Asked Questions

### How many evaluators do you need for a heuristic evaluation?

Three to five is the evidence-backed range. A single evaluator misses too large a proportion of issues to be reliable; beyond five, the incremental catch rate drops off and consolidation becomes unwieldy. For best coverage, pair at least one UX generalist with a domain specialist — the combination catches both interface-level violations and domain-specific misrepresentations that a generalist alone would miss.

### How long does a heuristic evaluation take?

For a scoped flow such as onboarding or checkout, allow 2–3 hours per evaluator for the solo pass, plus a 1–2 hour consolidation session. Full-product evaluations can run to 1–2 days per evaluator. The consolidation session is often underestimated — severity disagreements take time to resolve properly, and deduplication across a large issue set requires careful judgement.

### Is a heuristic evaluation qualitative or quantitative?

Primarily qualitative. The output is a described list of usability issues tied to principles, not a statistical measure of performance. Severity scores introduce an ordinal ranking, but they do not produce metrics comparable to task completion rates or time-on-task figures from a usability study. Think of it as structured expert judgement, not measurement. If you need quantitative baselines, pair the evaluation with a benchmark usability study.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Heuristic Evaluation in UX Research: A Practitioner's Guide",
  "description": "Learn how to plan, run, and report a heuristic evaluation in real product teams — including exactly when it beats usability testing and when it doesn't.",
  "datePublished": "2026-07-13",
  "dateModified": "2026-07-13",
  "author": {
    "@type": "Person",
    "name": "Vadim Glazkov",
    "url": "https://blog.glasgow.works/authors/vadim/",
    "sameAs": [
      "https://www.linkedin.com/in/vadim-glazkov/"
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "Glasgow Research",
    "sameAs": [
      "https://www.linkedin.com/company/glasgow-research"
    ]
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://blog.glasgow.works/blog/heuristic-evaluation-ux-research"
  },
  "keywords": "heuristic evaluation in UX research, how to run a heuristic evaluation, heuristic evaluation vs usability testing, Nielsen heuristics UX, expert review UX research, heuristic evaluation process"
}
</script>

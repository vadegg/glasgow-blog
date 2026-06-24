---
title: "Assumption & Opportunity Mapping in Product Discovery"
description: "Learn how product teams surface, categorise, and prioritise assumptions and opportunities before committing to solutions — a practical walkthrough for"
pubDate: 2026-06-24
updatedDate: 2026-06-24
readingTime: 11
slug: "assumption-mapping-product-discovery"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "Product team plotting assumptions on a two-axis prioritisation grid during a discovery workshop"
tags:
  - "assumption & opportunity mapping"
  - "opportunity mapping ux"
  - "assumption mapping framework"
  - "product discovery assumptions"
  - "opportunity solution tree"
---
<!-- gr:toc -->

## On this page

- [Why Teams Need to Map Before They Build](#why-teams-need-to-map-before-they-build)
- [What Is Assumption Mapping? Core Concepts and Framework](#what-is-assumption-mapping-core-concepts-and-framework)
- [What Is Opportunity Mapping? From Problems to the Opportunity Solution Tree](#what-is-opportunity-mapping-from-problems-to-the-opportunity-solution-tree)
- [Running an Assumption and Opportunity Mapping Session: Step by Step](#running-an-assumption-and-opportunity-mapping-session-step-by-step)
- [Prioritising What to Test Next](#prioritising-what-to-test-next)
- [Integrating Assumption and Opportunity Mapping into Continuous Discovery](#integrating-assumption-and-opportunity-mapping-into-continuous-discovery)
- [Frequently Asked Questions](#frequently-asked-questions)

## Why Teams Need to Map Before They Build

Committing to a solution before you understand the assumptions underneath it is one of the most reliably expensive mistakes a product team can make. You build, you ship, and then you discover the core belief was wrong from the start.

Assumption mapping and opportunity mapping act as a structured pause between research signals and solution ideation. Instead of leaping from "we heard something interesting in interviews" to "let's design a feature", they force the team to make implicit beliefs explicit and to frame user needs clearly before any solution thinking begins.

The two practices are distinct but complementary. Assumption mapping asks: *what must be true for this idea to work?* Opportunity mapping asks: *what user needs, pain points, or desired outcomes have we actually surfaced?* Used together, they bridge raw research data and the experiments that test whether you are solving the right problem in the right way.

Neither practice is a one-off workshop. Both belong inside a [continuous discovery process](https://blog.glasgow.works/blog/product-discovery) — a rhythm of ongoing learning where maps are updated as evidence arrives rather than archived after a single session.

---

## What Is Assumption Mapping? Core Concepts and Framework

An assumption is any belief the team holds that has not yet been validated by evidence. That definition is deliberately broad. Assumptions live in stakeholder briefs, in PRDs, in discovery interviews, and in analytics interpretations. Until you have evidence, all of these are beliefs — not facts.

Teams typically sort assumptions into four categories:

- **Desirability** — does anyone actually want this?
- **Viability** — can the business sustain it?
- **Feasibility** — can the team build it?
- **Ethical and legal** — is it responsible and compliant?

Categorising by type helps because different functions own different risks. Engineering will spot feasibility assumptions a PM might overlook; legal will flag ethical ones that neither notices.

Once assumptions are surfaced and categorised, you prioritise them using a two-axis grid. The horizontal axis measures *importance to the outcome* — how much would this assumption being wrong derail the entire initiative? The vertical axis measures *current level of evidence* — how much data do you already hold? Assumptions that are high-importance and low-evidence sit in the risky quadrant. These are the ones you test first, before committing any significant resource.

The practical output of assumption mapping is a ranked list. The top items drive your next round of experiments. Everything else waits.

Assumptions come from everywhere. Reviewing research artefacts before a session — interview transcripts, support tickets, behavioural analytics, stakeholder alignment documents — surfaces far more raw material than relying on memory alone. When [synthesising qualitative research signals](https://blog.glasgow.works/blog/affinity-mapping-in-qualitative-research), you will often find latent assumptions embedded in how themes were labelled or how conclusions were drawn. Surfacing those is part of the work.

---

## What Is Opportunity Mapping? From Problems to the Opportunity Solution Tree

An opportunity is an unmet need, pain point, or desired outcome surfaced in research. The word "opportunity" is deliberate: it frames the user's situation as something the product could address, without prescribing how.

The opportunity solution tree (OST), developed by Teresa Torres, gives teams a visual structure for organising this thinking. At the top sits the **outcome** the team is targeting — a specific, measurable change in user or business behaviour. Below that are **opportunities**: the needs and pains that, if addressed, would drive that outcome. Below opportunities sit **solutions** — specific ideas for addressing each opportunity. And below solutions sit **experiments** — the tests that determine whether a solution actually works.

You populate the tree from multiple sources: interview data (what did people describe struggling with?), support tickets (what problems recur?), and behavioural analytics (where do users drop off or abandon tasks?). Each node should be stated in the user's language, not the product team's.

The parent–child structure matters. A parent opportunity might be broad: "I struggle to trust that the advice I'm getting is independent." A child opportunity unpacks one specific facet: "I can't tell whether the recommendation is influenced by supplier relationships." Breaking opportunities down to this level of specificity is what makes them actionable.

The most common failure mode is writing solution-shaped opportunities. "Users need a dashboard" is a solution. "Users cannot quickly assess whether their portfolio is on track" is an opportunity. The distinction controls whether you explore the space or close it prematurely.

Not every node on the tree deserves equal investment. [Prioritising opportunities in product research](https://blog.glasgow.works/blog/opportunity-prioritisation-product-research) involves weighing factors such as how frequently the pain occurs, how severely it affects the user, and how closely addressing it connects to the team's stated outcome.

---

## Running an Assumption and Opportunity Mapping Session: Step by Step

A productive session runs for roughly two to three hours. The pre-work is non-negotiable: without it, the session becomes a memory exercise rather than a structured analysis.

**Pre-work.** Gather existing research artefacts — interview notes, synthesis documents, analytics reports, stakeholder briefs. Align the group on the single outcome the team is targeting. If the outcome is ambiguous, resolve that before the session starts, not during it.

**Step 1 — Brain-dump assumptions.** Each participant generates assumptions silently, one per sticky note, for ten minutes. Silence prevents anchoring on the first idea spoken aloud. Prompt the group: *what must be true about the user, the market, the technology, and the business model for this to succeed?*

**Step 2 — Categorise by type.** Group notes into the four categories: desirability, feasibility, viability, ethical/legal. This step often reveals which voices were missing from the room — if there are no feasibility assumptions, engineering may not have been included.

**Step 3 — Plot on the importance vs evidence grid.** Move each assumption onto the two-axis grid. Timebox this phase; teams can debate placement indefinitely. You're after a rough signal, not a precise ranking. Flag the risky quadrant clearly.

**Step 4 — Surface opportunities from research data.** Switch source material. Using interview excerpts and support data, articulate user needs and pain points as opportunity statements. Place them on the OST under the agreed outcome. Check each one: is this a need or a solution in disguise?

**Step 5 — Link high-risk assumptions to specific opportunities.** This step is frequently skipped and should not be. An assumption like "users will share financial data with the platform" does not float free — it sits inside a specific opportunity node. Making the dependency explicit reveals that invalidating the assumption collapses not just a solution but an entire branch of the tree.

**Facilitation tips.** Timebox each phase strictly — teams lose momentum without it. Use a shared digital board so remote and in-person participants work from the same surface. Include at least one engineer and one designer alongside the PM; the product trio catches categories of risk that any single function misses.

**Common failure modes.** The most frequent is conflating assumptions with facts. If someone says "we know users want faster onboarding", probe the evidence base. A second is writing solutions as opportunities. Both errors collapse the value of the session.

In sessions we have facilitated for teams working on complex B2B products, the silent generation step consistently surfaces two to three times more assumptions than participants expected. Teams often enter believing they hold five or six open questions; they typically produce twenty or more. The risky quadrant then becomes genuinely selective rather than a list of everything, which is where its value lies. These sessions also tend to surface significant disagreement between PM and engineering on feasibility assumptions — disagreements that were politely unspoken before the notes went on the board.

Treating [product discovery as a continuous process](https://blog.glasgow.works/blog/product-discovery) means this session is not a stand-alone event. It is the first iteration of a living artefact.

---

## Prioritising What to Test Next

The risky-assumption quadrant gives you a sequenced queue, not a to-do list you can address in any order. Start with the assumptions that are both highest importance and lowest evidence. Testing a low-importance assumption first because it is easier to test is a common and costly bias.

Match the fidelity of the test to the level of uncertainty. For assumptions in the riskiest quadrant, use the lowest-fidelity method that can give you a signal. Smoke tests, fake-door experiments, or a handful of structured interviews are appropriate when uncertainty is high. Committing to a prototype at this stage locks in too much before the ground is stable.

Distinguish between two different questions. If you are uncertain whether the problem exists or how significant it is, loop back to discovery interviews. If you believe the problem is real but need to know whether your proposed solution addresses it, move to prototype experiments. Conflating these two questions leads to testing the wrong thing.

As evidence returns, update the grid. An assumption that was low-evidence last sprint may now have enough data to move it out of the risky quadrant — or to confirm it was wrong and retire the opportunity it underpinned. The map is only useful if it reflects current knowledge. For a fuller treatment of how to sequence and weight this work, see [opportunity prioritisation in product research](https://blog.glasgow.works/blog/opportunity-prioritisation-product-research).

---

## Integrating Assumption and Opportunity Mapping into Continuous Discovery

These sessions fit naturally into a bi-weekly discovery cadence. The first session builds the initial map. Later sessions update it: new evidence shifts assumptions along the grid, new research data adds or removes opportunity nodes, and completed experiments retire entries from the queue.

Ownership sits with the product trio — PM, designer, and engineer. All three should be present and contributing, not observing. The PM does not own the assumption map alone; assumptions about feasibility and ethics require other perspectives to surface accurately.

The output of each session connects directly to experiment design. The highest-risk assumptions become the hypotheses that the next round of experiments tests. This connection — from map to experiment to updated map — is what makes discovery continuous rather than episodic.

External research partners can facilitate early sessions, calibrate whether opportunity statements are solution-free, and quality-check whether assumptions have been categorised correctly. We find this is particularly useful when a team is running the process for the first time and needs a reference point for what good looks like.

For tooling, Miro and FigJam both replicate the sticky-note grid format reliably. Notion works for teams that prefer a database structure over a visual board. The format matters more than the software. Explore the wider context for this work in our [product research hub](https://blog.glasgow.works/blog/product-research).

---

## Frequently Asked Questions

**What is the difference between assumption mapping and opportunity mapping?**

Assumption mapping identifies beliefs the team holds that need validation. Opportunity mapping identifies user needs and pain points that solutions could address. They are complementary: risky assumptions often live inside specific opportunities on the opportunity solution tree. Invalidating an assumption can close an entire branch of opportunities, which is why linking them explicitly matters.

**How often should a product team run assumption mapping sessions?**

Most teams revisit the assumption map at least bi-weekly within a continuous discovery cadence, updating it as experiments return evidence rather than starting fresh each time. The map is a living document, not a workshop deliverable.

**What makes an opportunity 'good' on an opportunity solution tree?**

A good opportunity is stated as a user need or pain point, not a solution. It should be grounded in research evidence, scoped to a level where the team can act on it, and linked to the desired product outcome at the top of the tree. "Users need a notification centre" is a solution. "Users miss time-sensitive updates because they are not monitoring the platform continuously" is an opportunity.

**How do you prioritise which assumptions to test first?**

Plot assumptions on a two-axis grid of importance-to-outcome versus current evidence level. Assumptions that are both high importance and low evidence are the riskiest and should be tested before any significant resources are committed. Assumptions that are low importance or already well-evidenced can wait.

**Can assumption mapping be done remotely?**

Yes. Digital whiteboard tools such as Miro or FigJam replicate the sticky-note grid format effectively. Timeboxing each phase strictly is more important in remote sessions than in person — without a physical room to close, phases tend to drift. Keep phases to ten to fifteen minutes and move on even if the group feels unfinished.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Assumption & Opportunity Mapping in Product Discovery",
  "description": "Learn how product teams surface, categorise, and prioritise assumptions and opportunities before committing to solutions — a practical walkthrough for",
  "datePublished": "2026-06-24",
  "dateModified": "2026-06-24",
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
    "@id": "https://blog.glasgow.works/blog/assumption-mapping-product-discovery"
  },
  "keywords": "assumption mapping product discovery, opportunity mapping ux, assumption mapping framework, product discovery assumptions, opportunity solution tree, assumption testing product"
}
</script>

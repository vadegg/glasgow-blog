---
title: "Product Discovery: A Continuous, Evidence-Led Process"
description: "A practical guide to product discovery: continuous discovery, jobs-to-be-done, assumption and opportunity mapping, and experiment design woven into one"
pubDate: 2026-05-18
updatedDate: 2026-05-18
readingTime: 14
slug: "product-discovery"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "Diagram of an opportunity solution tree with sticky notes showing continuous discovery loops connecting customer interviews to experiment cards"
tags:
  - "Product Discovery (pillar hub)"
  - "continuous discovery"
  - "jobs to be done"
  - "assumption mapping"
  - "opportunity solution tree"
---
<!-- gr:toc -->

## On this page

- [What Product Discovery Actually Means](#what-product-discovery-actually-means)
- [Continuous Discovery: Making Research a Weekly Habit](#continuous-discovery-making-research-a-weekly-habit)
- [Jobs to Be Done: Understanding Why Customers Hire Your Product](#jobs-to-be-done-understanding-why-customers-hire-your-product)
- [Assumption Mapping and the Opportunity Solution Tree](#assumption-mapping-and-the-opportunity-solution-tree)
- [Experiment Design: Testing Assumptions Before You Build](#experiment-design-testing-assumptions-before-you-build)
- [How the Four Practices Connect Into One System](#how-the-four-practices-connect-into-one-system)
- [Frequently Asked Questions](#frequently-asked-questions)

## What Product Discovery Actually Means

Most teams treat discovery as a phase — something that happens before the "real work" begins. A few weeks of interviews, a deck handed to stakeholders, then on to building. That framing is the source of most preventable product failures.

Product discovery is the ongoing process of identifying which problems are worth solving and validating which solutions are worth building — before committing engineering effort to them. It is not a project phase. It is a continuous discipline that runs in parallel with delivery, for the life of the product.

The distinction between discovery and delivery matters. Delivery executes on decisions already made. Discovery reduces the risk that those decisions are wrong. Without sustained discovery, delivery optimises for building the wrong thing faster.

Four interconnected practices make discovery work as a system:

1. **Continuous discovery** — a weekly cadence of customer contact that replaces periodic research sprints.
2. **Jobs to be done (JTBD)** — a framing that reveals why customers behave the way they do, not just what they do.
3. **Assumption and opportunity mapping** — structured techniques for organising evidence and surfacing the beliefs a team needs to test.
4. **Experiment design** — the discipline of testing specific assumptions with the smallest credible test before building.

Each practice is useful alone. Together they form a loop: insight from customers shapes opportunities, opportunities surface assumptions, assumptions become experiments, experiment results feed back into customer conversations.

One enabling condition cuts across all four: a reliable way to [recruit B2B interview participants](/blog/how-to-recruit-b2b-interview-participants). Without a steady supply of willing customers to speak with, the entire system stalls before it starts.

The rest of this post walks through each practice and shows how they connect.

---

## Continuous Discovery: Making Research a Weekly Habit

The central argument Teresa Torres makes in *Continuous Discovery Habits* is straightforward: if a product team speaks to at least one customer every week, it accumulates insight faster than any quarterly research cycle can match. The compounding effect is the point — each conversation builds on the last, patterns emerge within weeks rather than months, and the team never has to make a major decision on stale evidence.

**The product trio**

Torres assigns ownership of continuous discovery to a *product trio*: a product manager, a designer, and an engineer. All three attend customer conversations, not just the PM or researcher. The reason is practical. Engineers who hear a customer describe a workaround directly are far more motivated to remove it than engineers who read about it in a slide. Cross-functional ownership also reduces the gap between what research finds and what delivery prioritises.

This does not mean every engineer joins every interview. It means rotating participation so that each trio member has direct customer contact at least once a fortnight.

**Lightweight interview formats**

A weekly cadence only survives if each touchpoint is short enough not to exhaust participants or researchers. Thirty-minute focused conversations work better than ninety-minute sessions for ongoing use. The goal is not to answer every question in one sitting but to make incremental progress on a defined set of opportunity areas.

Structured topic guides help keep sessions on track without making them feel scripted. Keep two or three core questions consistent across sessions so you can compare responses over time. Leave room for follow-up probes; that is where the most useful signals tend to surface.

[UX research methods that support weekly cadences](/blog/ux-research-methods) vary by research question — some weeks call for a brief usability observation, others for a timeline-based JTBD interview.

**Contrast with quarterly cycles**

A team running quarterly discovery typically completes one research cycle per product roadmap cycle. By the time findings are synthesised and socialised, the team is already several sprints into building. Adjustments are costly. Continuous discovery eliminates the long feedback loop: an insight captured on Tuesday can inform Wednesday's sprint planning.

The operational cost of sustaining this rhythm is real. Participant recruitment, scheduling, note-taking, and synthesis all need to run reliably without consuming a researcher's entire week. That is a [research operations infrastructure needed to sustain this rhythm](/blog/research-operations) problem as much as a research methods problem.

For teams working in B2B SaaS specifically, continuous discovery often begins with [jobs-to-be-done interviews for B2B SaaS](/blog/jtbd-interviews-b2b-saas) — a format designed to surface switching moments and unmet needs from the buyer's perspective rather than feature preferences.

---

## Jobs to Be Done: Understanding Why Customers Hire Your Product

The jobs-to-be-done lens rests on a single idea: customers do not buy products. They *hire* them to make progress in a specific situation. Understanding that situation — rather than cataloguing user demographics — is what enables a team to build something customers will consistently choose.

**The three dimensions of a job**

Every job has a functional dimension (the practical task a customer is trying to complete), an emotional dimension (how they want to feel, or avoid feeling, while doing it), and a social dimension (how they want to appear to others as a result). A workflow tool hired to consolidate fragmented data has a functional job. The same tool is also hired to reduce the anxiety of presenting incomplete figures to leadership — an emotional job. And it may be hired to signal competence to a new manager — a social job.

Solutions that address only the functional dimension often struggle with adoption even when they work technically. The emotional and social dimensions determine whether a customer experiences the product as actually solving their problem.

**The JTBD interview structure**

JTBD interviews reconstruct the decision-making timeline around a specific moment: the moment a customer switched from doing nothing (or using a previous solution) to adopting something new. Key lines of questioning include:

- *Timeline questions*: Walk me through what was happening in the weeks before you decided to change how you approached this.
- *Struggling moments*: What was the specific situation that made your old approach feel insufficient?
- *Switching moments*: What finally made you take action? What did you try first?

The goal is a rich, chronological account of the circumstances that created demand — not a generalised description of what the customer "needs."

For a practical guide to conducting this kind of interview, see our notes on [running JTBD interviews in B2B SaaS contexts](/blog/product-research).

**The job statement**

A well-formed job statement structures what you learn into a reusable format: *When I [situation], I want to [motivation], so I can [outcome]*. This format anchors the opportunity solution tree (covered in the next section) by keeping team discussions tethered to customer motivation rather than internal assumptions.

**JTBD vs. personas**

Personas describe who a customer is. Jobs describe why they behave as they do. A 45-year-old procurement manager and a 28-year-old startup founder can share the same job — reducing the risk of committing to a supplier who might not deliver — even though their personas are entirely different. JTBD is the more useful frame when you are trying to understand motivation and demand, not when you are designing for specific accessibility or literacy constraints, where persona detail still matters.

---

## Assumption Mapping and the Opportunity Solution Tree

Teams that collect good JTBD data and do nothing structured with it are only slightly better off than teams that do not collect it at all. The opportunity solution tree (OST) and assumption mapping are the tools that turn interview outputs into auditable, testable decisions.

**The opportunity solution tree**

The OST, developed by Teresa Torres, is a visual framework with four levels:

1. **Desired outcome** — the metric the product team is trying to move, expressed from the business's perspective.
2. **Opportunities** — unmet customer needs, pain points, or desires surfaced from research. These are framed from the customer's perspective and derived directly from interview data.
3. **Solutions** — candidate features or interventions the team might build to address an opportunity.
4. **Experiments** — tests that validate or invalidate assumptions about each solution before it is built.

The tree makes the team's reasoning visible. If a solution on the tree cannot be traced back to an opportunity, and that opportunity cannot be traced back to interview evidence, the solution has no legitimate place on the roadmap. This is the mechanism by which the OST reduces HiPPO-driven decisions — the Highest Paid Person's Opinion loses authority when the conversation shifts to "which customer evidence supports this?"

**Deriving opportunities from interview data**

Opportunities are not invented in a workshop. They are extracted from interview transcripts using [affinity mapping to cluster raw interview data into opportunities](/blog/affinity-mapping-in-qualitative-research). Recurring themes, friction points, and unresolved struggles that appear across multiple conversations become candidate opportunities. The more frequently and intensely a theme appears, the stronger the case for prioritising it on the tree.

**Assumption mapping**

For each candidate solution on the OST, the team surfaces its underlying assumptions across four categories:

- **Desirability** — Do customers actually want this?
- **Viability** — Can we build a business around it?
- **Feasibility** — Can we build it with current capabilities and constraints?
- **Usability** — Will customers be able to use it as intended?

Each assumption is then placed on a 2×2 matrix: importance to the solution's success on one axis, strength of current evidence on the other. Assumptions that are both important and poorly evidenced are the ones to test first. Assumptions that are important but already well-evidenced — by existing research, data, or analogous products — need less urgent attention.

**In practice**

In a discovery engagement for an early-stage B2B software product, we worked with a product trio to map approximately thirty candidate solutions drawn from six weeks of JTBD interviews. Assumption mapping in a structured workshop identified four assumptions — all in the desirability category — that the team had treated as settled but that had no supporting evidence beyond internal consensus. Two of those assumptions were subsequently tested and not validated. The team deprioritised the corresponding solutions before a single sprint of engineering effort had been committed.

The OST gave the team a concrete artefact to bring to stakeholders, which made it easier to explain why certain features were dropped. The conversation shifted from defending decisions to reviewing evidence. For guidance on [turning mapped opportunities into stakeholder decisions](/blog/insight-to-impact), the communication layer matters as much as the analytical one.

---

## Experiment Design: Testing Assumptions Before You Build

An assumption mapping exercise produces a ranked list of beliefs that need testing. Experiment design is the discipline of testing them cheaply and quickly enough that the results actually change what the team builds.

**What a discovery experiment is**

A discovery experiment is the smallest test that generates sufficient evidence to update a team's belief about one specific assumption. Smaller and faster is better, provided the test produces credible signal. A test that runs in two days and gives a clear answer is more valuable than a six-week study that produces ambiguity.

The constraint is specificity: each experiment targets one assumption. Testing multiple assumptions simultaneously makes it impossible to know which variable drove the result.

**The experiment card**

A simple experiment card format keeps the design rigorous:

- **Assumption** — state the belief being tested, precisely.
- **Metric** — what observable outcome will indicate whether the assumption holds.
- **Method** — how the test will be run.
- **Threshold** — the result that would cause the team to act differently.

The threshold must be set before the test runs. Deciding what counts as success after seeing the results is one of the most common sources of confirmation bias in product teams. A threshold agreed in advance — "if fewer than 30% of participants attempt to complete this task unaided, we will reconsider the design" — removes the temptation to reinterpret borderline results in a favourable direction.

**Matching methods to assumption types**

Different assumption categories call for different test designs:

- **Desirability**: Fake-door tests (a button or feature link that does not yet exist, measuring click-through) and landing page variants reveal whether customers are drawn to a proposed solution before it is built.
- **Feasibility**: Concierge tests (delivering the service manually before automating it) and Wizard-of-Oz tests (a human simulating software behaviour) validate whether the team can deliver the outcome without building the full system first.
- **Viability**: Pricing page variants, willingness-to-pay surveys, and structured pricing conversations test whether a solution can support a business model. For a detailed treatment, see [pricing research as a viability experiment in B2B SaaS](/blog/pricing-research-b2b-saas).
- **Usability**: Moderated task-based sessions with low-fidelity prototypes surface interaction problems before they are built into a codebase.

**Feeding results back into the tree**

Experiment results have two outputs. If an assumption is not validated, the corresponding solution is pruned from the OST — or redesigned and retested. If the assumption is validated, confidence in the solution increases and the team moves it closer to delivery. Either way, the experiment generates a new question that feeds back into the continuous discovery loop: why did customers respond as they did, and what does that reveal about the underlying opportunity?

---

## How the Four Practices Connect Into One System

The four practices described above are not interchangeable tools to pick from a menu. They form a sequential, reinforcing loop.

Continuous customer interviews generate raw material. JTBD framing organises that material around customer motivation rather than surface behaviour. Affinity mapping and the opportunity solution tree convert organised data into prioritised, auditable decisions. Experiment design tests the assumptions behind those decisions before engineering effort is committed. The results of experiments surface new questions, which re-enter the interview cadence.

No single practice works in isolation. JTBD interviews without experiment design produce rich insight and untested assumptions — the team understands customers better but still guesses at solutions. Experiment design without JTBD risks testing the wrong things: optimising a solution to a problem customers do not actually have. Assumption mapping without continuous discovery is a workshop of opinions. Continuous discovery without structured synthesis produces an accumulating backlog of unprocessed notes.

The connective tissue between all four is a research repository — a searchable, maintained store of interview transcripts, synthesis outputs, OST snapshots, and experiment results. Without it, insight degrades. Team members who were not in a particular interview cannot access its findings. Patterns identified six months ago are not surfaced when a similar question arises today. A repository compounds the value of every research activity the team runs.

Product discovery, understood this way, is the upstream layer of the broader product research function. It sets the agenda for what gets built and why. Getting it right — making it continuous, evidence-led, and structurally connected to delivery — is one of the highest-leverage investments a product team can make.

---

## Frequently Asked Questions

**How is product discovery different from user research?**

User research is one input method — interviews, usability tests, surveys — used to generate evidence. Product discovery is the broader, ongoing process that uses research alongside experiments and data analysis to decide which problems to solve and validate which solutions are worth building. Research informs discovery; it does not replace it.

**How often should a team run discovery activities?**

The continuous discovery model recommends at least one structured customer conversation per week per product trio. Lightweight experiments should run in parallel rather than in separate cycles. This is not a quarterly sprint — it is a standing commitment built into how the team works.

**What is an opportunity solution tree?**

A visual framework that maps a desired outcome to customer opportunities (unmet needs surfaced from research), candidate solutions, and the experiments that test assumptions about those solutions. It keeps the team focused on evidence rather than opinions and makes the reasoning behind product decisions visible and auditable.

**Do you need a dedicated researcher to run continuous discovery?**

No, but research operations infrastructure helps. The product trio — product manager, designer, and engineer — owns discovery jointly. A researcher can coach the process, maintain quality guardrails, and lead more rigorous synthesis work, particularly around assumption mapping and experiment design. A dedicated researcher is not a prerequisite; consistent access to customers is.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Product Discovery: A Continuous, Evidence-Led Process",
  "description": "A practical guide to product discovery: continuous discovery, jobs-to-be-done, assumption and opportunity mapping, and experiment design woven into one",
  "datePublished": "2026-05-18",
  "dateModified": "2026-05-18",
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
    "@id": "https://blog.glasgow.works/blog/product-discovery"
  },
  "keywords": "product discovery, continuous discovery, jobs to be done, assumption mapping, opportunity solution tree, experiment design"
}
</script>

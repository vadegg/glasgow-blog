---
title: "Experiment Design for Product Discovery"
description: "Learn how to design lean experiments that test your riskiest product assumptions before you build — a practical framework bridging assumption mapping to"
pubDate: 2026-06-25
updatedDate: 2026-06-25
readingTime: 11
slug: "experiment-design-product-discovery"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "A product team clustered around a whiteboard mapping assumptions to experiment types on sticky notes"
tags:
  - "experiment design"
  - "product experiment design"
  - "how to design product experiments"
  - "assumption testing product discovery"
  - "lean experiment design"
---
<!-- gr:toc -->

## On this page

- [Why Experiment Design Sits at the Heart of Product Discovery](#why-experiment-design-sits-at-the-heart-of-product-discovery)
- [Start With the Riskiest Assumption, Not the Loudest Idea](#start-with-the-riskiest-assumption-not-the-loudest-idea)
- [The Four-Part Experiment Brief](#the-four-part-experiment-brief)
- [Choosing the Right Experiment Method](#choosing-the-right-experiment-method)
- [Running the Experiment: Minimising Bias Without Slowing Down](#running-the-experiment-minimising-bias-without-slowing-down)
- [Translating Experiment Results Into Build Decisions](#translating-experiment-results-into-build-decisions)
- [Common Experiment Design Mistakes and How to Avoid Them](#common-experiment-design-mistakes-and-how-to-avoid-them)
- [Frequently Asked Questions](#frequently-asked-questions)

## Why Experiment Design Sits at the Heart of Product Discovery

Most product teams don't lack ideas. They lack evidence. Experiment design is the discipline that turns assumptions — the beliefs sitting underneath every product decision — into observable signals before a single line of production code gets written.

This is not the same as A/B testing or feature flagging, which optimise something already in front of real users. Experiment design for product discovery happens earlier. It is pre-build validation. The experiment sits between an assumption map and a build decision, acting as the filter that decides whether engineering effort is warranted at all.

The cost of skipping the step is concrete. Teams that go straight from idea to build, on untested assumptions, regularly find out at launch that nobody wanted the thing, the pricing didn't hold, or the technical approach wasn't feasible in the real environment. The rework — or the write-off — always costs more than the experiment would have.

Done well, [continuous, evidence-led product discovery](https://blog.glasgow.works/blog/product-discovery) makes that waste structural rather than occasional. Experiment design is how the structure gets enforced in practice.

---

## Start With the Riskiest Assumption, Not the Loudest Idea

The upstream input to any experiment is an assumption map: a prioritised list of the beliefs your team holds about desirability, viability, and feasibility that the product depends on. If you don't yet have one, [assumption and opportunity mapping](https://blog.glasgow.works/blog/assumption-mapping-product-discovery) is where to start.

From that map, you need to surface the assumption that deserves the first experiment. The right tool is a risk-effort matrix. Plot each assumption on two axes: how consequential it would be if you're wrong, and how weak your current evidence is. The assumption sitting in the high-consequence, low-evidence quadrant is your starting point — not the one that's easiest to test, and not the one your stakeholders are most excited about.

A useful shorthand is the *criticality threshold*: a rough score combining uncertainty and consequence. If an assumption fails and the product idea survives, the assumption wasn't critical. If an assumption fails and the idea has to be abandoned or substantially pivoted, it is. Test critical assumptions first.

The most common mistake we see in discovery work: teams gravitate toward testable-but-safe assumptions — interface preference, feature labelling — while the core desirability or viability questions stay untouched. This produces activity without risk reduction. [Opportunity prioritisation in product research](https://blog.glasgow.works/blog/opportunity-prioritisation-product-research) goes deeper on how to sequence these choices rationally rather than politically.

---

## The Four-Part Experiment Brief

Every experiment should be documented in a consistent, lightweight format before it runs. The goal is a single page — or a large sticky note — that any team member can read and understand without a briefing meeting.

**Part 1 — Assumption statement.** Write one falsifiable sentence in this form: *We believe that [user segment] will [behaviour] because [reason].* Falsifiable means someone could, in principle, prove it wrong. If the sentence can't be disproved by any evidence, it isn't a testable assumption; it's a preference.

**Part 2 — Success metric.** Identify the single observable signal that would confirm or refute the assumption. Be specific: "three out of five participants voluntarily ask how to sign up" is a success metric. "Positive reaction" is not. Distinguish leading indicators — signals you can observe during the experiment — from vanity metrics that look good in a report but don't change the decision. One metric per experiment. If you have two metrics, you have two experiments.

**Part 3 — Method choice.** Match the method to the type of assumption. Desirability assumptions are best tested through interviews and prototypes. Viability assumptions call for pricing probes, landing pages, or smoke tests. Feasibility assumptions require technical spikes or architecture reviews, which need a different briefing format and sit primarily with engineering.

**Part 4 — Decision rule.** Pre-commit to what "validated" and "invalidated" look like before any data is collected. Write it in the brief. If the threshold is set after seeing results, the experiment isn't a test — it's a post-hoc justification. A decision rule might read: "If fewer than two of five target participants can articulate the problem unprompted, the desirability assumption is invalidated."

The brief should feel uncomfortably short. If it runs to several paragraphs, the thinking isn't yet clear enough to run an experiment.

---

## Choosing the Right Experiment Method

Method selection sits on two axes: how much fidelity the assumption requires, and how quickly you need a signal. Start at the low-fidelity, fast end and only move right when the cheap version can't generate a credible answer.

**Desirability experiments** test whether real people have the problem you believe they have, and whether your framing of a solution resonates. Concept interviews and solution-framing interviews are the workhorse methods. Paper prototypes and fake-door tests — a linked button that tracks clicks before the feature exists — are appropriate when you need a behavioural signal rather than a stated one.

**Viability experiments** test whether the economics of the idea hold. Willingness-to-pay probes embedded in an interview script, demand-testing landing pages, and smoke tests all generate evidence about whether users would transact — not just engage. When you need structured quantitative data to size a viability signal, [survey design best practices for UX research](https://blog.glasgow.works/blog/survey-design-best-practices-ux) covers how to construct those instruments without introducing bias.

**Feasibility experiments** are technical spikes and architecture reviews. They're scoped differently from user-facing experiments and need a brief that specifies the technical question, the timebox, and the engineering resources allocated.

The governing principle across all three is the smallest-possible-experiment rule: what's the cheapest artefact that will produce a credible signal on the riskiest assumption? A Keynote mockup walked through in five interviews almost always costs less than a coded prototype — and for desirability questions, it's usually sufficient.

The common failure mode is over-engineering the test artefact. Teams build a polished prototype before confirming whether the core problem is real. The prototype work is wasted; the riskiest assumption was never tested.

---

## Running the Experiment: Minimising Bias Without Slowing Down

**Participant selection** is the first control. Recruit from the specific segment named in the assumption statement, not from whoever is available. Convenience sampling — colleagues, existing customers who already love the product, friends of the founding team — introduces selection bias that makes it easy to validate assumptions that would fail with the real target audience. This is one of the most consistent patterns we see across discovery engagements: teams who recruit from convenience report higher validation rates and lower post-launch success rates than teams who recruit to spec.

**Script discipline** matters in interviews. Keep the assumption-testing questions separate from general discovery questions. If you open with broad exploratory prompts and then move to assumption testing, you risk priming participants — they've already absorbed your framing and will respond to the assumption through that lens rather than independently.

**Data capture** should be structured. Record decisions and observations directly in the experiment brief, not in a separate document that may not be linked back. Over time, this creates an auditable assumption log — a record of what was tested, what was found, and what was decided. That log has compounding value as a team grows or a product enters its second discovery cycle.

**Timebox every experiment.** A useful default is five interview sessions for qualitative desirability work, or a two-week run for a landing page or smoke test. Without a fixed endpoint, discovery expands to fill available time and delays the roadmap without adding proportionate value.

**Know when to stop early.** A decisive invalidation signal isn't ambiguous: if four of the first four participants show no recognition of the problem you believe exists, the fifth interview is unlikely to reverse that. Stop, document, and feed the finding back into the assumption map.

---

## Translating Experiment Results Into Build Decisions

Every experiment produces one of three outcomes, and each has a defined response.

*Validated* means the evidence met the pre-committed threshold. Proceed with the next assumption in the priority stack. This isn't a signal to start building immediately — it's a signal that this assumption no longer carries the same risk it did.

*Invalidated* means the evidence failed to meet the threshold. The right response is to pivot the assumption — adjust the user segment, the problem framing, or the proposed mechanism — or kill the idea. Stakeholder conversations are easier when the decision rule was agreed upfront: the data did not meet the standard we set together.

*Inconclusive* means the experiment design was flawed — wrong participants, ambiguous success metric, or insufficient sample. The response is to redesign the experiment, not the product. An inconclusive result is information about your research method, not about the assumption.

When presenting results to stakeholders, anchor the conversation on the pre-committed decision rule. Avoid handing over a stack of quotes or data points and asking stakeholders to form their own view; that recreates exactly the subjective disagreement the decision rule was designed to prevent.

Validated assumptions frequently surface new unknowns. A confirmed desirability finding often raises a viability question, and vice versa. Feed each new unknown back into the assumption map via [assumption and opportunity mapping in product discovery](https://blog.glasgow.works/blog/assumption-mapping-product-discovery) and sequence the next experiment accordingly. Don't treat a single validated assumption as proof that the whole idea is de-risked.

The handoff from discovery to delivery should be a validated assumption log — a documented record of what was tested, what was found, and what was decided — alongside any user stories. A user story without a linked assumption and evidence is a build instruction with no stated reason.

---

## Common Experiment Design Mistakes and How to Avoid Them

**Testing the solution before the problem.** Running prototype tests while the core desirability assumption remains untested inverts the logic of discovery. Confirm the problem exists before asking whether your solution addresses it.

**Confirmation-biased success metrics.** Setting the threshold for "validated" after seeing the data isn't analysis — it's rationalisation. Write the decision rule before the experiment runs.

**Treating a single positive result as market validation.** One experiment generates one signal from one sample. It's a reason to continue, not a reason to build.

**Conflating qualitative and quantitative signals.** Five interview participants can tell you *why* a behaviour exists or doesn't; they can't tell you *how many* people behave that way. Use qualitative evidence to generate and refine hypotheses, then quantitative methods to size them.

**Discarding invalidated experiments.** Negative results are institutional knowledge. An assumption log that only records successful experiments will lead future teams to test the same things again.

---

## Frequently Asked Questions

**How many experiments should a product team run per discovery cycle?**

There's no fixed number. Sequencing by risk matters more than volume. Most teams can complete two to three lightweight experiments within a two-week cycle without stalling the roadmap. Start with the assumption that would kill the product if wrong, and work down from there.

**What is the difference between a product experiment and an A/B test?**

A product discovery experiment tests an assumption before anything is built, using the cheapest artefact that generates a credible signal — an interview, a prototype, a smoke test. An A/B test optimises a live feature with real users and requires sufficient traffic to reach statistical significance. Discovery experiments decide whether a build decision is warranted; A/B tests improve something you've already decided to build.

**How do I convince stakeholders to slow down and run experiments?**

Frame the experiment as risk reduction, not delay. Calculate the cost of building the wrong thing — engineering days multiplied by day rate — and compare it to the cost of five interview sessions or a two-week landing page test. Agree a decision rule upfront so stakeholders know the experiment has a fixed endpoint and a clear output. An experiment with a defined endpoint is a schedule commitment, not an open-ended research exercise.

**Can qualitative experiments ever validate an assumption on their own?**

Qualitative experiments — interviews, prototype sessions — generate directional evidence and explain the reasoning behind behaviour. They can confidently invalidate a desirability assumption: if five target users show no recognition of the problem you believe they have, the assumption is in serious trouble. They rarely provide the confidence needed for viability or adoption claims, where the question is "how many" rather than "why". Use qualitative methods first to sharpen the hypothesis, then quantitative methods to size the signal.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Experiment Design for Product Discovery",
  "description": "Learn how to design lean experiments that test your riskiest product assumptions before you build — a practical framework bridging assumption mapping to",
  "datePublished": "2026-06-25",
  "dateModified": "2026-06-25",
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
    "@id": "https://blog.glasgow.works/blog/experiment-design-product-discovery"
  },
  "keywords": "experiment design product discovery, product experiment design, how to design product experiments, assumption testing product discovery, lean experiment design, product discovery experiments"
}
</script>

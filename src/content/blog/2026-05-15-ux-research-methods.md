---
title: "UX Research Methods: How to Choose the Right One"
description: "A practical guide to UX research methods and when each one fits: moderated versus unmoderated, qualitative versus quantitative, and generative versus evaluative"
pubDate: 2026-05-15
updatedDate: 2026-05-15
readingTime: 14
slug: "ux-research-methods"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "Decision framework diagram showing UX research methods mapped across generative vs evaluative and qualitative vs quantitative axes"
tags:
  - "UX Research Methods (pillar hub)"
  - "moderated vs unmoderated research"
  - "qualitative vs quantitative ux research"
  - "generative vs evaluative research"
  - "user research methods comparison"
---
<!-- gr:toc -->

## On this page

- [Why Method Choice Makes or Breaks Your Research](#why-method-choice-makes-or-breaks-your-research)
- [Axis 1 — Generative vs Evaluative Research](#axis-1-generative-vs-evaluative-research)
- [Axis 2 — Qualitative vs Quantitative Research](#axis-2-qualitative-vs-quantitative-research)
- [Axis 3 — Moderated vs Unmoderated Research](#axis-3-moderated-vs-unmoderated-research)
- [The Decision Framework: A Comparison Table](#the-decision-framework-a-comparison-table)
- [Real-World Method Selection: A Project Example](#real-world-method-selection-a-project-example)
- [Common Mistakes When Choosing a UX Research Method](#common-mistakes-when-choosing-a-ux-research-method)
- [Frequently Asked Questions](#frequently-asked-questions)

## Why Method Choice Makes or Breaks Your Research

The wrong research method does not simply produce unhelpful data — it produces confidently wrong answers. A team that runs a usability test when they do not yet understand the problem will optimise the wrong surface. A team that relies on a survey when they need depth will misread the numbers. Both mistakes are expensive, and both are avoidable.

This post is a decision tool, not a catalogue. It walks through three axes that govern almost every method choice a practitioner faces:

1. **Generative vs evaluative** — are you discovering a problem or assessing a solution?
2. **Qualitative vs quantitative** — do you need meaning or measurement?
3. **Moderated vs unmoderated** — do you need a researcher in the room or scale and speed?

For each axis you will find definitions, decision cues, and common failure modes. Where a method warrants a deeper treatment, we link to the dedicated post rather than repeat it here.

One scope note: this post covers methods in regular practitioner use — interviews, usability tests, surveys, card sorting, tree testing, diary studies, analytics reviews, and A/B tests. Academic or specialist methods such as eye-tracking or biometric testing are outside this scope.

---

## Axis 1 — Generative vs Evaluative Research

The single most important question before choosing a method is this: do you already understand the problem you are trying to solve?

**Generative research** is used when the answer is no. It explores unknown territory — user needs, mental models, motivations, and the context in which a problem arises. There is no design to test yet. The goal is to understand what is actually going on before anyone starts sketching solutions.

**Evaluative research** is used when you have something concrete to assess — a wireframe, a prototype, or a live product — and you want to measure how well it performs against real user behaviour.

### The classic mistake

Teams under time pressure routinely skip generative work and jump straight to evaluation. They commission a usability test because it feels productive and tangible. But if the underlying problem has not been understood, the test will surface symptoms rather than causes. You will learn that users struggle on a particular screen; you will not learn whether that screen is the right screen to be building at all.

Generative research is not a luxury front-loaded onto a project for the sake of process. It is the foundation that prevents evaluative research from answering the wrong question well.

### Generative methods

- **User interviews** — open-ended conversations that surface needs, behaviours, and mental models. See our guide on [how to conduct user interviews](/blog/how-to-conduct-user-interviews) for a full walkthrough.
- **Diary studies** — participants self-report over days or weeks, capturing context that a one-hour session cannot.
- **Contextual inquiry** — observing users in their actual environment, which reveals workarounds and habits they would never think to mention in an interview.
- **Jobs-to-be-done (JTBD) interviews** — a structured variant of the user interview that focuses on the progress a person is trying to make, not their demographic profile.

### Evaluative methods

- **Usability testing** — participants attempt realistic tasks with a design while a researcher observes where they succeed, fail, or hesitate.
- **Tree testing** — assesses navigation structure by asking participants to locate items in a text-only hierarchy.
- **Card sorting** — reveals how users categorise information; see our post on [card sorting in UX research](/blog/card-sorting-ux-research) for method detail.
- **A/B testing** — compares two variants at scale using live traffic and behavioural metrics.

### Decision cue

If you cannot yet sketch even a rough solution to the problem, you need generative research first. If you have a concrete thing to put in front of users, you are ready for evaluation.

---

## Axis 2 — Qualitative vs Quantitative Research

This axis is frequently misunderstood as a choice. For most mature research programmes it is not a choice — it is a sequence.

**Qualitative research** answers *why* and *how*. It produces rich, contextual data from relatively small samples. Interviews, moderated usability sessions, and diary studies are qualitative. The output is words, patterns, and meaning.

**Quantitative research** answers *how many* and *how often*. It requires larger samples to reach statistical confidence. Surveys, analytics, and A/B tests are quantitative. The output is numbers and distributions.

### Why the false binary is dangerous

Organisations that run only quantitative research know what is happening but not why. Analytics might show a sharp drop in conversion on a pricing page. The metric is unambiguous. But only qualitative interviews will reveal whether users are confused by the pricing tiers, distrustful of the brand, or simply not ready to buy. Without that context, a product team might redesign the wrong element repeatedly.

The reverse problem is equally common. Teams that run only qualitative research accumulate rich insight but cannot tell stakeholders whether the issue affects 3% or 30% of their user base. That gap matters for prioritisation.

### Sample size in practice

For qualitative work, 5–8 participants per distinct user segment is typically sufficient to identify the major themes. Adding more sessions beyond that point produces diminishing returns on new insight — you will hear the same patterns restated rather than discover new ones.

For quantitative work, sample size depends on the statistical power you need and the effect size you are trying to detect. As a rough practitioner baseline, surveys need at least 100 responses before you can make reliable comparisons between groups; smaller samples should be treated as directional only.

### The bridge between qual and quant

When qualitative data starts to accumulate, the risk is that individual vivid quotes distort interpretation. [Affinity mapping in qualitative research](/blog/affinity-mapping-in-qualitative-research) is the structured process for clustering raw observations into patterns before drawing conclusions — and it is the point where qual insight becomes comparable across participants.

Once themes are identified through affinity mapping, a survey can quantify their prevalence across a larger population. That combination — qual for discovery, quant for sizing — is the most reliable research programme design available to practitioners working under normal commercial constraints.

---

## Axis 3 — Moderated vs Unmoderated Research

The third axis concerns who is present during data collection.

**Moderated research** has a researcher present in real time, whether in the same room or over a video call. The researcher can ask follow-up questions, redirect a participant who has gone off-task, and probe for the reasoning behind a behaviour. This depth comes at a cost: sessions take longer to schedule, run, and analyse, and throughput is limited by researcher availability.

**Unmoderated research** has participants complete tasks independently via a dedicated tool. Sessions are recorded automatically. The researcher defines the tasks and questions in advance, then analyses the recordings after the fact. This approach is faster and cheaper per participant and scales to larger samples without proportional increases in researcher time.

### When to choose moderated

Choose moderated research when:

- **The task is complex or ambiguous.** Participants may need clarification that a pre-written prompt cannot anticipate.
- **The topic is sensitive.** Financially distressing or health-related subjects benefit from a researcher who can build rapport and respond to participant discomfort.
- **The prototype is early-stage.** Low-fidelity prototypes often break or behave unexpectedly; a researcher can intervene rather than letting a session collapse.
- **The audience is specialist.** B2B research with expert users — clinicians, engineers, finance professionals — often involves domain-specific reasoning that only a skilled moderator can follow and probe effectively.

### When to choose unmoderated

Choose unmoderated research when:

- **You need a benchmark.** Consistent, repeatable task scenarios across many participants produce comparable metrics over time.
- **Your timeline is tight.** Unmoderated studies can field and return data within 24–48 hours.
- **The tasks are clearly defined.** When there is no ambiguity in what a participant should do, the absence of a moderator does not compromise data quality.
- **You need a larger sample.** Statistical comparisons between user groups require more participants than moderated studies can typically deliver within budget.

### The hybrid approach

In practice, moderated and unmoderated methods work well in sequence. Running 5–6 moderated sessions first allows you to identify the task scenarios that genuinely challenge users. Those scenarios can then be standardised and run at scale as an unmoderated study. The moderated phase improves the quality of the unmoderated one; the unmoderated phase confirms whether what you observed in six sessions holds across sixty.

A low-cost entry point worth noting: [guerrilla usability testing](/blog/guerrilla-usability-testing-guide) is a moderated variant in which a researcher approaches willing participants in a public setting. It sacrifices control and participant targeting but can surface obvious usability failures quickly and cheaply.

---

## The Decision Framework: A Comparison Table

With the three axes defined, the table below consolidates them into a single reference. Use it to check your method choice against the research question you are actually trying to answer.

| Method | Gen / Eval | Data type | Moderation | Best for | Typical timeline | Typical cost |
|---|---|---|---|---|---|---|
| User interviews | Generative | Qualitative | Moderated | Understanding needs, mental models, context | 2–4 weeks | Medium |
| Usability testing (moderated) | Evaluative | Qualitative | Moderated | Deep task observation, early prototypes, specialist users | 2–4 weeks | Medium–High |
| Unmoderated usability test | Evaluative | Qual + some quant | Unmoderated | Benchmarking, larger samples, replicable tasks | 3–7 days | Low–Medium |
| Survey / questionnaire | Evaluative / Generative | Quantitative | Unmoderated | Sizing problems, validating patterns, satisfaction tracking | 1–2 weeks | Low |
| Card sorting | Generative / Evaluative | Qual + quant | Either | Information architecture, categorisation models | 1–2 weeks | Low |
| Tree testing | Evaluative | Quantitative | Unmoderated | Navigation structure validation | 1–2 weeks | Low |
| Diary / longitudinal study | Generative | Qualitative | Unmoderated | Behaviours over time, infrequent or habitual tasks | 2–6 weeks | Medium–High |
| Analytics review | Evaluative | Quantitative | N/A | Identifying where users drop off; sizing issues | Days | Low |
| A/B test | Evaluative | Quantitative | Unmoderated | Comparing variants at scale on live product | 2–6 weeks | Medium |

### A plain-language decision flowchart

Work through these questions in order:

> **Question 1: Do you understand the problem well enough to sketch a solution?**
> - No → start with **generative** methods (user interviews, diary study, contextual inquiry).
> - Yes → move to **evaluative** methods (usability test, tree test, A/B test).
>
> **Question 2: Do you need to understand why, or measure how many?**
> - Why / how → **qualitative** (interviews, moderated sessions).
> - How many / how often → **quantitative** (survey, analytics, A/B test).
> - Both → sequence them: qual first, quant to validate.
>
> **Question 3: Do you have the time and budget for a researcher in the room?**
> - Yes, and depth matters → **moderated**.
> - No, or scale matters more → **unmoderated**.
> - Both → run moderated first to define tasks, then unmoderated at scale.

### A note on the "we need numbers quickly" situation

When stakeholders want quantitative evidence rapidly, the temptation is to field a survey immediately. Resist running a survey without at least three user interviews alongside it. Surveys measure what you ask — if your questions are based on assumptions rather than genuine user language, the data will confirm those assumptions rather than challenge them. Three short interviews take two to three days and will sharpen your survey questions enough to make the quantitative results trustworthy.

One factor that affects all methods equally is recruitment quality. Recruiting the wrong participants makes every method unreliable, regardless of how well it is executed. See our guide on [how to recruit participants for user research](/blog/how-to-recruit-participants-for-user-research) for practical detail on screening and sourcing.

---

## Real-World Method Selection: A Project Example

A mid-market B2B SaaS team came to us with a clear brief: run a usability test on their checkout flow. Conversion had dropped and they were confident the problem was in the UI — buttons in the wrong place, a confusing form, that kind of thing.

Before scoping the usability test, we ran a short generative phase: six user interviews with existing customers who had recently been through the purchase process. The interviews were structured around the job the users were trying to do and the moment they decided — or hesitated — to proceed.

The sessions made the picture clear. The friction was not in the checkout UI. Users were arriving at the checkout page already uncertain. Pricing tiers were described in internal product terminology that did not map to how buyers thought about their own needs. Several participants described going back to compare the product against a competitor specifically because they could not work out which tier applied to them. By the time they returned, some had not returned at all.

The problem was upstream: the pricing page, not the checkout flow.

We redirected the evaluative work accordingly. A moderated usability test on the pricing page, combined with a short survey to existing customers to size how widespread the confusion was, confirmed the interviews were pointing at the right surface. The qualitative sessions explained *why* users stalled; the quantitative survey confirmed this was not a minority experience.

The original usability test on the checkout flow would have produced valid findings about a secondary problem. But it would have left the primary problem — the one causing the conversion drop — untouched. The generative phase cost less than the usability test would have, and it redirected the entire research programme before budget was committed to the wrong surface.

For teams working on pricing questions specifically, our post on [pricing research for B2B SaaS](/blog/pricing-research-b2b-saas) covers the method options in more depth.

---

## Common Mistakes When Choosing a UX Research Method

**Defaulting to usability testing for every brief.** Usability testing is valuable but evaluative. It cannot tell you whether you are building the right thing, only whether the thing you have built is easy to use. If the research question is about problem discovery, a usability test is the wrong tool.

**Skipping qualitative research because "we have analytics".** Behavioural data tells you what users did, not why. A page with a high exit rate might be confusing, or it might be exactly where satisfied users go after completing a task. Without qualitative context, the same metric supports opposite interpretations.

**Treating a survey as a substitute for interviews when your sample is small.** A survey with 25 responses is not quantitative research — it is qualitative data in a numerical costume. Small-n surveys give false precision. If you cannot achieve a meaningful sample, run interviews instead and be honest about what the findings represent.

**Choosing the method before defining the research question.** Method selection follows from the question, not the other way around. "We want to run five user interviews" is not a research plan. "We want to understand why returning users are not engaging with the new dashboard feature" is a research question — and it may or may not call for interviews.

**Over-engineering the method mix.** One well-executed method beats three poorly executed ones. Teams with limited time and budget should choose the method that most directly answers their research question and execute it rigorously, rather than assembling a mixed-method programme that stretches resources too thin to do any of it well.

---

## Frequently Asked Questions

**What is the difference between generative and evaluative UX research?**

Generative research explores unknown problems and user needs before any solution is defined. Evaluative research tests a specific design, prototype, or product against real user behaviour. Most projects need both in sequence — generative work first to establish what problem is worth solving, evaluative work later to confirm that the solution addresses it.

**When should I use qualitative vs quantitative UX research?**

Use qualitative methods when you need to understand why users behave a certain way and to surface unexpected insights. Use quantitative methods when you need to measure how many users are affected and to validate patterns at scale. The most reliable research programmes combine both: qualitative methods for discovery and sense-making, quantitative methods for validation and sizing.

**What is the difference between moderated and unmoderated usability testing?**

In moderated testing a researcher is present — in person or remotely — to probe, redirect, and observe in real time. This produces richer data but is slower and more resource-intensive. In unmoderated testing, participants complete tasks independently via a recording tool. The researcher reviews sessions after the fact. Unmoderated studies are faster and cheaper per participant but offer less contextual depth. The two approaches work well together: run a small moderated study first to identify the right tasks, then run those tasks at scale without a moderator.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "UX Research Methods: How to Choose the Right One",
  "description": "A practical guide to UX research methods and when each one fits: moderated versus unmoderated, qualitative versus quantitative, and generative versus evaluative",
  "datePublished": "2026-05-15",
  "dateModified": "2026-05-15",
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
    "@id": "https://blog.glasgow.works/blog/ux-research-methods"
  },
  "keywords": "ux research methods, moderated vs unmoderated research, qualitative vs quantitative ux research, generative vs evaluative research, user research methods comparison, when to use which ux research method"
}
</script>

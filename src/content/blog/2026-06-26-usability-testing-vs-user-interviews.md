---
title: "Usability Testing vs User Interviews: How to Choose"
description: "Struggling to pick between usability testing and user interviews? Learn the decision logic behind each method and choose the right one for your research"
pubDate: 2026-06-26
updatedDate: 2026-06-26
readingTime: 12
slug: "usability-testing-vs-user-interviews"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "Split diagram showing a usability testing session with a participant navigating a screen on the left, and a user interview conversation on the right, illustrating the behavioral vs attitudinal research distinction"
tags:
  - "UX Research Methods"
  - "when to use usability testing"
  - "user interviews vs usability testing"
  - "ux research method selection"
  - "qualitative ux research methods"
---
<!-- gr:toc -->

## On this page

- [Why the Choice Matters More Than the Method](#why-the-choice-matters-more-than-the-method)
- [What Each Method Actually Does](#what-each-method-actually-does)
- [The Core Decision Framework: Four Questions to Ask First](#the-core-decision-framework-four-questions-to-ask-first)
- [When Usability Testing Wins](#when-usability-testing-wins)
- [When User Interviews Win](#when-user-interviews-win)
- [A Real Project Example: Choosing the Wrong Method First](#a-real-project-example-choosing-the-wrong-method-first)
- [Can You Run Both? Combining Methods Strategically](#can-you-run-both-combining-methods-strategically)
- [Quick-Reference Comparison Table](#quick-reference-comparison-table)
- [Frequently Asked Questions](#frequently-asked-questions)

## Why the Choice Matters More Than the Method

Pick the wrong research method and you don't just lose time — you generate misleading data. Run user interviews to diagnose interface friction and you'll collect confident, articulate explanations from participants that may have nothing to do with where users actually struggle. Run usability testing to work out whether you're solving the right problem and you'll get task-completion rates for a product nobody wants.

Both usability testing and user interviews are qualitative [UX research methods](https://blog.glasgow.works/blog/ux-research-methods), but they answer fundamentally different questions. Usability testing observes what people *do*. User interviews surface what people *think, feel, and believe*. The choice between them hinges on whether your research question is behavioural or attitudinal — and getting that wrong costs more than the time spent on the wrong method.

This post gives you a decision framework, a comparison table, and a worked example of a method mismatch so you can make the call quickly.

---

## What Each Method Actually Does

**Usability testing** puts a participant in front of a product or prototype and asks them to attempt realistic tasks. You watch what happens: where they succeed, where they hesitate, where they make errors, and how they recover. The output is behavioural evidence — task success rates, error patterns, time-on-task, and friction points anchored to specific interface moments.

**User interviews** are structured or semi-structured conversations. You aren't watching someone use a product; you're asking about their context, motivations, mental models, and attitudes. A well-run interview — particularly one grounded in jobs-to-be-done thinking — can reveal why different people adopt different solutions to the same underlying problem, and what they are actually trying to accomplish before your product ever enters the picture. The output is attitudinal evidence: themes, mental models, vocabulary, and the logic behind decisions.

The core distinction: interviews tell you what users *say*; usability testing tells you what users *do*. Neither is a proxy for the other. Use one when you need the other and you produce a category error in your data, not just a gap.

Within usability testing, the moderated vs unmoderated distinction matters for logistics. Moderated sessions involve a facilitator present in real time — useful when tasks are complex or you need to probe unexpected behaviour. Unmoderated sessions are collected asynchronously via remote tools, which lifts throughput and cuts scheduling friction. Both are usability testing; the choice between them is operational, not methodological. See our guide on [how to conduct user interviews](https://blog.glasgow.works/how-to-conduct-user-interviews) for the interview-side equivalent.

---

## The Core Decision Framework: Four Questions to Ask First

Before choosing a method, answer these four questions. Work through them in order and the right method usually becomes obvious.

**1. What type of research question are you asking?**

| Question shape | Points to |
|---|---|
| "Can users complete X?" | Usability testing |
| "Do users find X clear?" | Usability testing |
| "Why do users do X?" | User interviews |
| "What problem are users trying to solve?" | User interviews |
| "How do users currently think about this domain?" | User interviews |

If your question contains *can*, *do*, or *how well*, it is probably behavioural. If it contains *why*, *what motivates*, or *how do they decide*, it is attitudinal.

**2. Where are you in the design process?**

- **Early discovery / problem definition:** You don't have a testable artefact yet, and you're still establishing whether a problem is worth solving. Interviews belong here.
- **Concept or prototype stage:** You have something to show, but it isn't finished. Either method can apply — use the question type above to decide.
- **Evaluative / pre-launch:** You have a working interface and need to know whether it works before shipping. Usability testing belongs here.

**3. What decision does this research need to support?**

- Prioritising features, defining scope, shaping messaging, or entering a new segment → interviews give you the attitudinal grounding for those calls.
- Shipping, iterating, or killing a specific UI element → usability testing gives you the behavioural evidence stakeholders need to act.

**4. What are your timeline and resource constraints?**

- Unmoderated usability testing is the fastest option — results can be collected within 24–48 hours using remote tooling.
- Moderated usability testing and user interviews require comparable scheduling effort, but interviews typically take longer to synthesise because the data is richer and less structured.
- When time is genuinely short and the question is evaluative, lean towards unmoderated testing. When time is short and the question is attitudinal, a smaller number of focused interviews beats a large survey.

Use this framework when [structuring your research plan](https://blog.glasgow.works/blog/user-research-plan-template) — it reduces the risk of arriving at fieldwork having designed the wrong study.

---

## When Usability Testing Wins

Usability testing is the right choice when you have a testable artefact and an evaluative question.

**You have something to test.** A low-fidelity prototype, a live product, a competitor's interface, or even a paper mockup can serve as the stimulus. The artefact doesn't need to be finished — it needs to be specific enough that a participant can attempt a task on it.

**The question is about performance, not opinion.** Navigation clarity, task completion, error recovery, and onboarding comprehension are all usability questions. The answers come from watching participants, not asking them.

**Stakeholders need behavioural evidence.** Attitudinal data — "users said they liked it" — rarely moves a ship decision. Observational data — "four out of five participants failed to locate the primary action on screen two" — does.

**You're working in sprint cycles.** When validation needs to fit inside a two-week sprint, usability testing can be scoped tightly: five participants, three tasks, one prototype variant. Guerrilla testing — lightweight, informal sessions with available participants — is a viable option when budget or timeline is constrained. Our [guerrilla usability testing guide](https://blog.glasgow.works/guerrilla-usability-testing-guide) covers the trade-offs.

One firm watch-out: usability testing will not tell you whether you are building the right thing. It tells you whether what you have built works. If the underlying problem definition is shaky, fixing the interface does not fix the product.

---

## When User Interviews Win

User interviews are the right choice when the problem space is still open and assumptions are untested.

**You don't have a validated problem yet.** If you're entering a new market segment, launching a new product category, or questioning whether your current framing of the problem is correct, interviews are where you start. They give you the raw material — jobs, frustrations, mental models — before any design work begins.

**You need to understand context and workflow.** How users currently do a job, what tools they use, what workarounds they've built, and what they consider good enough — this is interview territory. It cannot be observed in a usability test because it predates any specific interface.

**Mental model mapping matters.** The vocabulary users use, the categories they think in, and the logic they apply to decisions in a domain are all surfaced in interviews. This data shapes information architecture, navigation labels, and onboarding copy.

**You're in a B2B context.** In business-to-business research, the person using the interface is often not the person making the purchase decision. Interviews are the right method for understanding the buying process, the stakeholder dynamics, and the organisational constraints that shape adoption — none of which show up in a usability test.

The watch-out here is significant: interviews surface what users *say*, not what they *do*. Participants are susceptible to social desirability bias — giving answers they believe are expected — and to post-hoc rationalisation, where they construct a plausible explanation for a decision after the fact. Treat interview data as a map of attitudes and mental models, not as a record of behaviour. For more on how to use interview data to guide product decisions, see our post on [opportunity prioritisation in product research](https://blog.glasgow.works/blog/opportunity-prioritisation-product-research).

---

## A Real Project Example: Choosing the Wrong Method First

A product team came to us with a specific problem: drop-off was occurring at a known point in their onboarding flow, and they needed to understand why. The team had already run user interviews on the onboarding experience and collected detailed participant accounts of where they felt confused or uncertain.

The interview data was coherent and confident. Participants described their experience clearly, identified the moments they found difficult, and offered explanations. The team used this to prioritise a redesign of one section of the flow.

The redesign did not move the drop-off metric.

We ran moderated usability testing on the same flow with a comparable participant profile. What we observed diverged sharply from what participants had described in interviews. The section participants had cited as confusing was not where they actually struggled — behaviour told a different story. The real friction was a form field three steps earlier that participants consistently misread, triggering an error state they could not recover from. Nobody had mentioned it in interviews, because by the time they were asked, they had already rationalised past it.

Switching methods and running the usability test cost two weeks. Applying the decision framework upfront would have surfaced the right method immediately: the question was "where is the friction?" — a behavioural question about a live interface, at the evaluative stage, in support of a ship/iterate decision. All four filters point to usability testing.

The interviews weren't wasted — they had been run earlier in the project lifecycle and had genuinely informed the overall onboarding design. The error was applying them to a question they could not answer.

---

## Can You Run Both? Combining Methods Strategically

The most defensible research programmes use both methods, sequenced to match the design stage.

**Sequential combination** is the most common pattern: user interviews in discovery to define the problem and map mental models, followed by usability testing in the evaluative phase to validate whether the designed solution works. This isn't redundant — the two methods address different questions at different moments.

**Concurrent combination** — running both methods in parallel — is harder to justify. It risks diluting focus in sessions and increases cognitive load on participants if you're trying to do both in a single sitting. Use sparingly.

**Hybrid session design** can work well in B2B research: open with a short contextual interview to capture the participant's role, workflow, and framing, then move into a task-based usability test on the actual interface. The first part gives you the context to interpret what you observe in the second. Keep the interview segment focused — 10 to 15 minutes — or it crowds out observation time.

When budget or timeline forces a choice between the two, go back to the four-question framework. There is no universal default.

For synthesis, [affinity mapping in qualitative research](https://blog.glasgow.works/blog/affinity-mapping-in-qualitative-research) works well when you're merging insights from both methods — it lets you surface patterns across attitudinal and behavioural data without forcing them into the same analytical frame prematurely.

---

## Quick-Reference Comparison Table

| | **Usability testing** | **User interviews** |
|---|---|---|
| **Primary question** | Can users do X? How well? | Why do users do X? What do they need? |
| **Artefact required** | Yes — prototype or live product | No |
| **Typical session length** | 30–60 minutes | 45–75 minutes |
| **Participants needed** | 5 per distinct user segment | 8–12 before thematic saturation |
| **Output type** | Behavioural evidence | Attitudinal evidence |
| **Best design stage** | Evaluative / pre-launch | Discovery / problem definition |
| **Key limitation** | Does not validate problem–solution fit | Does not predict actual behaviour |

Once you're ready to plan your study, participant recruitment is the next operational step. See our guide on [how to recruit participants for user research](https://blog.glasgow.works/blog/how-to-recruit-participants-for-user-research).

---

## Frequently Asked Questions

**Can I use user interviews to test a prototype?**

You can show a prototype during an interview to prompt discussion, but that's concept testing or feedback elicitation — not usability testing. Usability testing requires the participant to attempt tasks independently so you can observe behaviour. Show a prototype in an interview and ask "what do you think of this?" and you're collecting opinions, not behavioural data. Conflating the two undermines both methods.

**How many participants do I need for each method?**

Usability testing typically surfaces the majority of critical usability issues with five participants per distinct user segment — adding more beyond that tends to produce diminishing returns on new issue types within a homogeneous group. User interviews generally require 8–12 participants before thematic saturation, where new conversations stop introducing new themes. Both figures assume relatively homogeneous participant groups; if you have two or more meaningfully different user segments, apply those numbers per segment.

**Which method is faster to run?**

Unmoderated usability testing is the fastest option — results can be collected within 24–48 hours using remote tools. Moderated usability testing and user interviews are broadly comparable in scheduling effort. Interviews typically require more synthesis time, because the data is richer, less structured, and less immediately parseable than task-completion observations.

**Do user interviews require a prototype?**

No. User interviews can be conducted with no artefact at all. They are conversation-based and focus on the participant's context, experience, and attitudes. A prototype or stimulus material can be introduced to prompt specific discussion, but the absence of one doesn't prevent a productive interview — particularly in early discovery, where the point is to understand the problem before any design exists.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Usability Testing vs User Interviews: How to Choose",
  "description": "Struggling to pick between usability testing and user interviews? Learn the decision logic behind each method and choose the right one for your research",
  "datePublished": "2026-06-26",
  "dateModified": "2026-06-26",
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
    "@id": "https://blog.glasgow.works/blog/usability-testing-vs-user-interviews"
  },
  "keywords": "usability testing vs user interviews, when to use usability testing, user interviews vs usability testing, ux research method selection, qualitative ux research methods, moderated usability testing vs interviews"
}
</script>

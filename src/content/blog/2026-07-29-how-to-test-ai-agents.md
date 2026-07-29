---
title: "How to Test AI Agents: A UX Research Playbook"
description: "Learn how to test AI agents with a UX research playbook: observe how real users trust, correct, and hand off control—task design, metrics, and synthesis."
pubDate: 2026-07-29
updatedDate: 2026-07-29
readingTime: 13
slug: "how-to-test-ai-agents"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "UX researcher observing a participant review and correct an AI agent's suggested actions during a moderated usability test"
tags:
  - "usability testing (emerging: agentic/AI features)"
  - "UX research for AI agents"
  - "testing agentic features"
  - "usability testing for AI agents"
  - "how to evaluate AI agent UX"
---
<!-- gr:toc -->

## On this page

- [Why testing AI agents needs a new playbook](#why-testing-ai-agents-needs-a-new-playbook)
- [What to observe: trust, correction, and control handoff](#what-to-observe-trust-correction-and-control-handoff)
- [Choose the right method for agentic testing](#choose-the-right-method-for-agentic-testing)
- [Design realistic tasks and seeded failure scenarios](#design-realistic-tasks-and-seeded-failure-scenarios)
- [Moderate the session: think-aloud and intervention rules](#moderate-the-session-think-aloud-and-intervention-rules)
- [Metrics and signals that matter for agents](#metrics-and-signals-that-matter-for-agents)
- [A field example: testing an agentic scheduling feature](#a-field-example-testing-an-agentic-scheduling-feature)
- [From findings to design and further testing](#from-findings-to-design-and-further-testing)
- [Common pitfalls when testing AI agents](#common-pitfalls-when-testing-ai-agents)
- [Frequently asked questions](#frequently-asked-questions)

## Why testing AI agents needs a new playbook

An agentic feature doesn't wait for a click. It reads your calendar, drafts the email, books the slot, or reshuffles a project plan — often before you've decided whether you agree with it. That changes what you're testing. A click path tells you whether someone found a button. It tells you nothing about whether they trusted the system enough to let it act, noticed when it got something wrong, or knew how to take control back.

This is a different exercise from an ML evaluation. Model accuracy benchmarks measure whether the agent is *right*. UX research measures whether the person using it can tell when it's wrong, and what they do next. Both matter. They're separate disciplines with separate methods.

Knowing how to test AI agents comes down to watching three observable behaviours: **trust calibration** (does the user's confidence match the agent's actual reliability), **error correction** (can they catch and fix a mistake), and **control handoff** (how cleanly authority moves between person and system). This playbook builds on [core UX research methods](/blog/ux-research-methods) rather than replacing them. We've written it for teams who already run usability testing and now need to extend their protocols to features that act on the user's behalf.

## What to observe: trust, correction, and control handoff

Trust calibration is the first thing to watch, and it fails in two directions. Over-trust looks like rubber-stamping: the participant approves whatever the agent proposes without reading it, because the interface feels confident. Under-trust is the mirror image — the person lets the agent run, then quietly redoes the work by hand anyway, defeating the point of automation. Neither shows up in a satisfaction score. Both are visible if you watch what someone actually does with the output.

Correction behaviour is the second signal. When the agent makes a mistake — books the wrong time, misreads a request, drops a step — can the participant notice it at all? And if they notice, do they understand why well enough to fix it, or do they abandon the task and start over manually?

Control handoff is the third. Delegation (user hands a task to the agent) and escalation (agent hands a decision back to the user) both need to be clean. Watch whether the agent gives the user enough context at the handoff point to act. A vague "I need your input" with no explanation forces the person to reconstruct what happened before they can respond.

Then there's transparency. When an agent explains its reasoning ("I booked this because…"), does that help the user decide whether to accept the action, or does confident-sounding language mask a wrong decision?

## Choose the right method for agentic testing

Moderated think-aloud sessions are where you learn *why* someone trusted or distrusted an agent — that reasoning rarely surfaces in behavioural logs alone. Unmoderated testing earns its place when you need scale: task success rates, drop-off points, and acceptance rates across a larger sample than a moderated round can afford. Neither replaces the other; they answer different questions, much as with [usability testing vs user interviews](https://blog.glasgow.works/blog/usability-testing-vs-user-interviews).

Add a short interview alongside the task-based session when you suspect a say/do gap — and with AI features, that gap tends to be wider than usual. Participants often state a trust preference ("I'd always check its work") that their behaviour contradicts within minutes. A five-minute retrospective interview, asking what they'd do differently next time, surfaces that gap directly.

Trust also isn't fixed at first contact. It shifts with repeated exposure. A single session tells you how a stranger reacts to an agent, not how a returning user's trust settles once they've seen it succeed and fail a few times. Where the roadmap allows, run two or three shorter sessions with the same participants, spaced across days or weeks, rather than one long one.

For scale on quantitative signals, purpose-built [unmoderated usability testing tools](https://blog.glasgow.works/blog/unmoderated-usability-testing-tools) can capture completion and acceptance rates. They need careful task design — covered next — to mean anything for an agent.

## Design realistic tasks and seeded failure scenarios

Write tasks around outcomes, not steps. "Get the agent to move next week's client call to Thursday" exercises delegation. "Click the calendar icon, then select reschedule" doesn't — it just tests whether someone can follow instructions. Outcome-based tasks force the participant to decide how much control to hand over, which is the behaviour you're actually studying.

The happy path won't show you correction or escalation, so seed a failure or an ambiguous instruction into at least one task per session. Give the agent a request with a genuine gap in it — a missing detail, a conflicting constraint — and watch what the participant does when the output doesn't quite fit.

Before you test correction, test discoverability. Some participants never engage the agent at all; they default to the manual controls they already trust, and the feature goes unused not because it fails, but because no one found it. A quick round of [first-click testing](https://blog.glasgow.works/blog/first-click-testing-ux-research) on the entry point tells you whether people even locate the agent before you invest in deeper protocol design.

Use the highest-fidelity prototype the timeline allows. Agent behaviour is hard to fake convincingly with static screens, so a wizard-of-oz setup — a researcher manually operating the "agent" behind the scenes, following a script — often produces more honest reactions than a mocked-up interface, provided the data feels real to the participant.

Test a full workflow too, not one isolated agent response. Trust and correction behaviour compound across a sequence of actions. How someone reacts to the fourth agent decision depends on what happened with the first three.

## Moderate the session: think-aloud and intervention rules

At each decision moment — accept, undo, edit, ignore — ask directly: "What made you accept that?" or "What made you undo it?" This is the single most useful question in agent research. It converts a silent click into a reason you can design against.

Decide your intervention rules before the session starts, not during it. While the agent is running, stay quiet — jumping in changes what the participant would naturally do or say next. Once an action completes, that's your window to probe.

Long-running agent tasks create dead air, and dead air tempts moderators to fill it. Resist the urge to narrate or reassure ("it's still thinking") — that framing shapes trust before the participant has formed their own view. A neutral prompt like "talk me through what you're expecting" keeps them thinking aloud without steering the outcome.

For remote sessions, standard screen-share setups need one adjustment: record the agent's output and the participant's reaction as separate, timestamped streams, so you can later match a facial reaction or a pause to the exact moment the agent acted. The general principles in [remote usability testing best practices](https://blog.glasgow.works/blog/remote-usability-testing-best-practices) still apply — this is simply an additional layer of capture.

## Metrics and signals that matter for agents

Three clusters of behavioural signal matter here, distinct from standard usability metrics.

**Trust signals**: acceptance rate (how often the participant approves the agent's action without edits), undo/redo rate, and — most important — whether trust is *calibrated*. A participant who accepts everything isn't necessarily satisfied; they may simply not be checking. Cross-reference acceptance rate against the agent's actual accuracy in that session to see whether confidence tracks reality.

**Correction signals**: time-to-notice an error, recovery success (did the fix work, or did the participant give up), and abandonment rate after a failure. A short time-to-notice with a high recovery rate is the profile you want. A long time-to-notice paired with abandonment is a design failure, not a user error.

**Handoff signals**: escalation success rate (does the user complete the task once the agent passes control back), time-to-escalate, and — qualitatively — whether the participant had enough context at handoff to act without re-investigating from scratch.

None of these numbers mean much alone on a small qualitative sample. Pair every rate with a quote that explains it. A cluster of abandonments after an error tells you it happened; the transcript tells you whether the error itself or a confusing recovery path caused it — and those need different fixes.

## A field example: testing an agentic scheduling feature

In a moderated study for a consumer service piloting an agent-assisted booking flow, the agent identified a returning user, pre-filled their details from a previous visit, and proposed a slot without asking the person to re-enter anything. Most participants liked it on the surface — fewer forms, a faster path to done.

The failure we seeded was small: the agent carried over an outdated detail from the user's last visit. Most participants accepted the proposed booking without checking the pre-filled information at all — a clean example of silent over-trust, invisible unless you'd deliberately broken something to test for it.

That behaviour, not the acceptance rate itself, changed the design. The team added a short, mandatory confirmation step where the user had to actively verify the carried-over details rather than passively accept a pre-filled screen. The sample was small and the setting specific, so we treated the finding as directional — enough to justify the change, not enough to claim a fixed proportion of users would behave the same way at scale. A follow-up unmoderated round was planned to check whether the confirmation step held up with a larger group.

## From findings to design and further testing

Every gap you observe in trust, correction, or handoff should translate into a specific interface change, not a general note to "build more trust." If participants rubber-stamped a high-stakes action, the fix might be a mandatory confirmation step, a plainer summary of what's about to happen, or removing one-click acceptance entirely for that action type.

Prioritise by risk. A miscategorised email draft is recoverable; an autonomous payment or an irreversible booking is not. Reserve the tightest human-in-the-loop controls — explicit confirmation, visible undo, clear escalation paths — for actions with the highest cost of being wrong, and spend less design effort on the ones a user can easily reverse.

Once you've made a change, test the specific interaction again rather than re-running the full protocol. A focused follow-up round — same seeded failure, same decision moment — tells you whether the fix worked, faster and cheaper than a full re-test. For a deeper walkthrough of this loop, see our guide to [testing agentic features in depth](https://blog.glasgow.works/blog/how-to-test-agentic-features).

These findings belong in the product conversation, not just a usability bug tracker. A pattern of silent over-trust is a product risk, and it should reach leadership framed as one.

## Common pitfalls when testing AI agents

**Only testing the happy path.** If nothing goes wrong during the session, you'll never see how someone corrects the agent or escalates a decision — usually the part of the feature that matters most for trust.

**Treating one session as proof.** Trust calibrates over repeated exposure. A participant's reaction in their first five minutes with an agent tells you about first impressions, not how they'll behave once they've seen it succeed and fail a few times.

**Leading participants during long agent runs.** Filling silence with reassurance or commentary shapes the trust judgement you're trying to measure. Set intervention rules in advance and stick to them.

**Confusing model accuracy with user experience.** An agent can be highly accurate and still produce a poor experience if users can't tell when to trust it, or can't recover when it's wrong. These are separate evaluations, and conflating them hides the UX problem.

## Frequently asked questions

### How is testing AI agents different from normal usability testing?

Traditional usability testing evaluates how someone interacts with an interface — can they find, understand, and complete a task. Agent testing uses the same core methods but shifts the focus to delegation and outcomes: how much control the user hands over, whether they notice when the agent gets something wrong, and how cleanly they can take control back. The toolkit doesn't change much; what you're watching for does.

### How many participants do I need to test an AI agent?

Five to eight participants per user segment in a moderated qualitative round will surface most trust, correction, and handoff issues, in line with standard usability testing guidance. Add an unmoderated round with a larger sample when you need behavioural rates rather than reasoning. Because trust builds over repeated exposure, plan at least one follow-up session with a subset of the same participants rather than treating a single round as final.

### What metrics show whether users trust an AI agent?

Track acceptance rate against undo/redo rate, time-to-notice an error, recovery success, and escalation success rate at handoff points. The number alone isn't the finding — check whether acceptance is calibrated to the agent's actual accuracy in that session. High acceptance paired with low accuracy signals over-trust, not satisfaction.

### Should I use AI agents to test AI agents?

Simulated LLM-based testers are useful early — piloting task wording, stress-testing edge cases, and catching obvious protocol problems before you spend budget on human sessions. They don't replace human participants for the behaviours this playbook is built around: trust, correction, and handoff are human judgements, shaped by context an LLM tester doesn't hold. Use simulated runs to sharpen the study design, not to draw conclusions about how real users will behave.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How to Test AI Agents: A UX Research Playbook",
  "description": "Learn how to test AI agents with a UX research playbook: observe how real users trust, correct, and hand off control—task design, metrics, and synthesis.",
  "datePublished": "2026-07-29",
  "dateModified": "2026-07-29",
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
    "@id": "https://blog.glasgow.works/blog/how-to-test-ai-agents"
  },
  "keywords": "how to test AI agents, UX research for AI agents, testing agentic features, usability testing for AI agents, how to evaluate AI agent UX, AI agent trust and handoff testing"
}
</script>

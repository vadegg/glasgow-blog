---
title: "How to Test AI Agents: A UX Research Playbook"
description: "Classic usability tests break for autonomous features. Use this UX research playbook to test AI agents with mental models, Wizard-of-Oz, and trust checks."
pubDate: 2026-07-28
updatedDate: 2026-07-28
readingTime: 12
slug: "how-to-test-ai-agents"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "UX researcher running a Wizard-of-Oz session to test an autonomous AI agent's actions and user trust"
tags:
  - "Emerging methods: researching AI/agentic features (extends UX Research Methods pillar)"
  - "UX research for agentic features"
  - "evaluating AI agent usability"
  - "Wizard of Oz testing for AI agents"
  - "user mental models of AI agents"
---
<!-- gr:toc -->

## On this page

- [Why task-completion testing breaks down for AI agents](#why-task-completion-testing-breaks-down-for-ai-agents)
- [What you're actually evaluating in agentic UX](#what-youre-actually-evaluating-in-agentic-ux)
- [Map user mental models before you test flows](#map-user-mental-models-before-you-test-flows)
- [Run Wizard-of-Oz tests for agentic features](#run-wizard-of-oz-tests-for-agentic-features)
- [Design transparency and trust-calibration checks](#design-transparency-and-trust-calibration-checks)
- [Choose metrics beyond task success](#choose-metrics-beyond-task-success)
- [A field example: testing an agentic feature end to end](#a-field-example-testing-an-agentic-feature-end-to-end)
- [Build your agentic UX test plan](#build-your-agentic-ux-test-plan)
- [FAQ](#faq)

## Why task-completion testing breaks down for AI agents

A user hands an agent a goal and watches it work. Success rate and time on task won't tell you whether the agent did the right thing — they tell you whether a screen loaded. That's the flaw in bolting classic usability methods onto agentic features.

[Moderated and unmoderated usability testing](https://blog.glasgow.works/blog/usability-testing-vs-user-interviews) were built to answer one question: can a person complete a task through an interface? The moment an agent completes the task instead, that question loses its grip. The unit of evaluation moves — from interaction quality to outcome quality, from "did they click the right button" to "was delegating this the right call, and can the user tell?"

The say-do gap gets wider, too. Ask a user whether the agent got it right and most say yes, because verifying autonomous work costs more effort than trusting it. Self-report alone won't catch that.

This playbook lays out how to test AI agents with a repeatable set of methods — mental models, Wizard-of-Oz, trust calibration, metrics. It isn't about benchmarking a model's raw capability. It's about whether people can use, supervise, and trust what you've built around it.

## What you're actually evaluating in agentic UX

Before you write a test script, pin down what "working" means for an agent. Four things matter, and they pull apart from each other:

- **Mental model accuracy** — does the user's idea of what the agent does match what it actually does?
- **Transparency and legibility** — can the user see and understand what the agent did, and why?
- **Trust calibration** — does reliance track actual capability, rather than running consistently high or low?
- **Controllability** — can the user interrupt, correct, or undo an action mid-flight?

None of these collapse into "is the output correct?" A correct output nobody can verify is a trust problem in waiting. An incorrect output a user catches and fixes in seconds is a controllability success. Test the agent's behaviour and the user's ability to read that behaviour separately — they fail independently.

Where you aim depends on autonomy level. An agent that only suggests needs less controllability testing than one that acts without approval. Place your feature on the spectrum — suggest, draft, act-with-approval, act-autonomously — before you pick methods; that placement decides which approach you run first and how much each one carries.

For a wider walkthrough of method selection across that spectrum, see [how to test agentic features](https://blog.glasgow.works/blog/how-to-test-agentic-features).

## Map user mental models before you test flows

Mismatched expectations make technically correct output feel wrong. Say a user assumes an agent reads their entire inbox, and it only reads the last week. An accurate summary will feel incomplete — not because it's wrong, but because it doesn't match what they pictured. So map user mental models of AI agents before you test any flow.

**Prediction tasks** earn their keep here. Describe a scenario, ask the user what the agent will do and why, then show them the real behaviour and measure the gap. Where prediction and reality split sharply, you've found a design risk, not just a research finding.

**Elicitation** fills in the rest. Ask users to sketch or describe, in their own words, how they think the system works, then concept-test the feature's name and description against that sketch. Probe where the agent gets its information and what it can't do — users are usually far more confident about the second question than the evidence warrants.

[First-click testing](https://blog.glasgow.works/blog/first-click-testing-ux-research) on a task summary or confirmation screen adds a light signal: it shows where a user expects control to sit, before or after the agent acts, and catches silent misunderstandings before they surface in a live session.

You come out with a mental-model map: a ranked list of the misconceptions most likely to cause harm, weighted by how many users hold them and how costly they are if the agent acts on a wrong assumption. Design against the top two or three before you build anything further.

## Run Wizard-of-Oz tests for agentic features

You don't need a working model to learn whether people will trust and correctly supervise an agent. Wizard-of-Oz (WoZ) testing for AI agents — a hidden facilitator simulates the agent's actions in real time — lets you validate delegation, transparency, and trust before you've built the integrations that would make mistakes expensive to fix.

**Set it up simply.** One researcher runs the session with the participant; a second, out of sight, plays the "wizard" and fires responses from a prepared script that mixes correct and imperfect behaviour: a wrong recommendation, a moment of visible uncertainty, a request for confirmation mid-task. Real agents fail. Test what failure looks like from the user's seat, not only the happy path.

**Failure and recovery are the point.** Hand the wizard a scripted error partway through a task. Does the participant notice? How? Do they correct it themselves, ask the agent to redo the step, or miss it entirely until later? That single moment tells you more about your controllability design than several clean runs.

**Build a practical protocol:** task scenarios spanning suggest-to-autonomous behaviours, a wizard response bank that includes realistic delays, and a note-taking template tracking where each participant hands over control and where they take it back.

Deciding what a facilitator scripts versus what a participant discovers unprompted is a moderation choice as much as a scripting one — [when to use AI-moderated interviews](https://blog.glasgow.works/blog/ai-moderated-interviews-when-how-to-run) covers where that line sits.

## Design transparency and trust-calibration checks

The goal isn't maximum trust. It's appropriate trust — reliance that tracks actual capability. Test for both failure modes: over-trust, where users approve a wrong action because the interface looks confident, and under-trust, where users abandon a genuinely capable agent because they can't tell it's working correctly.

**Legibility probes** test whether an explanation actually explains. After the agent shows its reasoning or citations, ask the user to state, unprompted, what it did, why, and what they expect next. If they can't rebuild the logic from what's on screen, the explanation is decorative rather than functional.

**Measure trust calibration directly.** Track reliance decisions (did the user check, or approve on sight?), willingness to authorise fully autonomous action after a run of correct behaviour, and confidence ratings set against actual correctness. A user highly confident in an agent that's frequently wrong is a design problem, not a training problem.

Treat explanation and control affordances — undo, edit, escalate to a human — as first-class objects to test, not settings bolted on late. Ask users to find and use them mid-task, unprompted, and watch whether they know the options exist at all.

Watch closely for **silent failures**: moments where the agent gets something wrong and the interface gives no signal anything happened. A user who never notices a failure can't be interviewed about it — you catch it by observing the trace, not by asking. This is where [AI-moderated vs human-moderated research](https://blog.glasgow.works/blog/ai-moderated-vs-human-moderated-research) matters for AI agent transparency and trust research: know which method actually surfaces what a participant can't self-report.

## Choose metrics beyond task success

Task success is one input among several. Build a metrics set that blends behavioural and perceptual signals: outcome correctness, trajectory or reasoning coherence, error-recovery rate, and self-aware failure rate (does the agent flag its own uncertainty?), alongside trust ratings and comprehension scores from the legibility probes above.

Run enough trials to see a distribution, not a demo. Agentic systems are non-deterministic — the same prompt can take different reasoning paths on different runs. One successful session tells you almost nothing about reliability; five to eight participants completing several tasks each gives you a spread worth acting on.

Add supervision metrics on purpose: intervention rate (how often a user steps in), correction effort (how much work it takes when they do), and the one teams most often skip — approval-without-checking rate. That number is your clearest over-trust indicator.

Because agents shift as models and data shift, treat evaluation as a cycle rather than a one-off validation before launch. Re-run core scenarios whenever the underlying model or a key integration changes materially.

In B2B settings, weight verifiability heavily. Outcomes are often multi-stakeholder — one person approves what another team will be held to — and higher-stakes than a single consumer decision. [UX research for B2B SaaS](https://blog.glasgow.works/blog/ux-research-b2b-saas) covers how that context reshapes sample size and stakeholder mapping.

## A field example: testing an agentic feature end to end

In one engagement for a B2B marketing platform, the brief matched a pattern we hear often in discovery work: teams want AI to draft campaign creative and flag compliance issues automatically, while a human still signs off before anything ships. The autonomy level sat at act-with-approval — the agent could draft and flag, but publishing needed approval. The risk hypothesis was simple. If the compliance flag reads as more authoritative than it is, a human signature can land on non-compliant creative without a genuine check happening.

We ran the sequence in order: a mental-model prediction task, then Wizard-of-Oz sessions simulating the drafting and flagging behaviour (with a scripted false negative), then transparency and trust checks on the approval screen, then metric synthesis across the trials.

The prediction task surfaced the risk first. Participants commonly assumed "flagged clean" meant a human reviewer had also checked the creative, when no second check existed in the workflow — a misreading that echoes what we hear directly from marketing teams asking for AI compliance checks to replace manual review, not sit alongside it. That gap explained most of the over-trust the later sessions measured. The fix didn't touch the workflow: relabelling "compliance check passed" as "AI compliance check passed — no human review yet" corrected the mental model instead of adding a step.

What the first round missed: nobody had tested what a user did when they disagreed with a flag. A short second round closed that gap.

## Build your agentic UX test plan

Match method to autonomy level and risk, not to habit. Run mental-model work early, before flows are fixed. Run Wizard-of-Oz before the model and integrations exist, while changes are still cheap. Run transparency and trust checks just before launch, on close-to-final interfaces. Keep metrics ongoing, not a pre-launch checkbox.

A one-page plan keeps this disciplined: research questions, the autonomy level under test, task scenarios, a wizard response bank where relevant, your metric set, and explicit go/no-go criteria — an approval-without-checking rate above a set bar, for instance, is a no-go.

Bring in specialist help when the stakes justify it — regulated industries, financial actions, health data — or when you need Wizard-of-Oz infrastructure you haven't built before. Keep it in-house when you're iterating fast on lower-stakes, suggest-only features. Start with [choosing the right UX research method](https://blog.glasgow.works/blog/ux-research-methods) for the full decision tree, and see [outsource user research vs building in-house](https://blog.glasgow.works/blog/when-to-outsource-user-research-agency-vs-in-house) if you're weighing capacity.

## FAQ

### How is testing AI agents different from normal usability testing?
Traditional usability testing measures whether someone can complete a task through an interface — click paths, time on task, success rate. Agents act on the user's behalf, so those signals measure the wrong layer. Evaluate outcome correctness, mental-model accuracy, trust calibration, and controllability instead — whether the user can supervise, correct, or stop something acting autonomously.

### Can you test an AI agent before it's built?
Yes. Wizard-of-Oz testing puts a hidden facilitator behind the agent, triggering scripted responses — including errors and requests for confirmation — in real time. That lets you validate delegation, transparency, and trust with real participants before you've committed to a model or built the integrations, while changes are still cheap.

### Which metrics matter most for agentic features?
Combine behavioural and perceptual metrics: outcome correctness, trajectory coherence, error-recovery rate, and self-aware failure rate, alongside trust ratings and comprehension scores from legibility probes. Add supervision metrics — intervention rate and approval-without-checking rate — since these catch over-trust that outcome metrics alone miss. Run enough trials to see a distribution; a single session tells you little about a non-deterministic system.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How to Test AI Agents: A UX Research Playbook",
  "description": "Classic usability tests break for autonomous features. Use this UX research playbook to test AI agents with mental models, Wizard-of-Oz, and trust checks.",
  "datePublished": "2026-07-28",
  "dateModified": "2026-07-28",
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
  "keywords": "how to test AI agents, UX research for agentic features, evaluating AI agent usability, Wizard of Oz testing for AI agents, user mental models of AI agents, AI agent transparency and trust research"
}
</script>

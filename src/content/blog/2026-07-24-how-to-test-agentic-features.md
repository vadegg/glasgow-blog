---
title: "How to Test Agentic Features: A UX Research Guide"
description: "Standard usability scripts break on AI agents. Learn how to test agentic features with Wizard of Oz, multi-turn scenario tasks, and failure-mode probing."
pubDate: 2026-07-24
updatedDate: 2026-07-24
readingTime: 11
slug: "how-to-test-agentic-features"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "UX researcher observing a multi-turn conversation with an AI agent during a usability test session"
tags:
  - "usability testing — testing AI & agentic features (specialised method)"
  - "testing AI agents UX"
  - "usability testing for AI features"
  - "multi-turn conversation testing"
  - "wizard of oz testing for AI"
---
<!-- gr:toc -->

## On this page

- [Why standard usability scripts break on agentic features](#why-standard-usability-scripts-break-on-agentic-features)
- [Scope the test: what counts as an agentic feature](#scope-the-test-what-counts-as-an-agentic-feature)
- [Method 1: Wizard of Oz testing for AI features](#method-1-wizard-of-oz-testing-for-ai-features)
- [Method 2: multi-turn scenario tasks](#method-2-multi-turn-scenario-tasks)
- [Method 3: failure-mode and recovery probing](#method-3-failure-mode-and-recovery-probing)
- [Metrics and signals worth capturing](#metrics-and-signals-worth-capturing)
- [Putting it together: a lightweight test plan](#putting-it-together-a-lightweight-test-plan)
- [Common pitfalls when testing AI agents](#common-pitfalls-when-testing-ai-agents)
- [Frequently asked questions](#frequently-asked-questions)

## Why standard usability scripts break on agentic features

A standard usability script assumes a fixed interface: click here, expect that, measure whether the user found it. That assumption falls apart for agentic features — AI systems that plan, choose tools, and act across multiple steps rather than respond to a single input. Ask the same question twice and you can get two different paths, two different tool calls, two different outcomes. The system is probabilistic, not deterministic.

Failures compound rather than stay put. An agent that misreads intent on turn two carries that error into turn five, and by the time it surfaces, the user has lost the thread of what went wrong. A task tested in isolation won't catch that.

You're also measuring something different: whether the agent exercised good judgement, acted with appropriate autonomy, and earned or lost trust along the way — related to but distinct from [how usability testing differs from user interviews](https://blog.glasgow.works/blog/usability-testing-vs-user-interviews).

None of this calls for a new discipline. It calls for adapting three methods from the existing [UX research methods](/blog/ux-research-methods) toolkit — Wizard of Oz, multi-turn scenario tasks, and failure-mode probing — run alongside the evaluative methods you already use, not instead of them. That's what this guide covers: how to test agentic features, method by method.

## Scope the test: what counts as an agentic feature

Not everything with a chat window is agentic. A chatbot answers; an autocomplete predicts. An agentic feature takes multi-step action on a user's behalf — it plans, selects tools, calls APIs, and works toward a goal with limited supervision. If your feature produces one response to one input, standard usability testing already has you covered.

Before you write a single task, map the decision boundary: where does the agent act on its own, and where does it stop and ask for confirmation? That boundary is what you're actually testing. A feature that books a meeting autonomously carries a different risk profile — and needs a different test — than one that drafts the invite and waits for approval.

Define "good" before you script anything: a correct outcome, the right level of autonomy for the stakes involved, errors that are recoverable rather than silent, and expressed confidence that matches actual reliability.

Then match fidelity to the question. A rough prototype or Wizard of Oz setup suits early concept and autonomy questions; a live model suits questions about real-world reliability and failure rate. Don't reach for the expensive option before you need it.

## Method 1: Wizard of Oz testing for AI features

Wizard of Oz testing puts a hidden human behind the interface, playing the agent, while the participant believes they're talking to a working AI system. It's a long-standing research technique, adapted here to test agentic behaviour before a model exists.

Use it early, before you've built or fine-tuned anything. A wizard lets you validate desirability and probe how much autonomy people actually want, without spending model budget on a feature nobody trusts yet. It pairs well with lighter methods like [guerrilla usability testing](https://blog.glasgow.works/guerrilla-usability-testing-guide) for a fast, low-cost read before you commit to build.

Setup matters. Clear response guidelines and a defined persona keep the wizard's answers consistent across sessions, and deliberate latency stops the illusion breaking — a wizard who replies instantly skews how much "processing" participants expect later from a real agent. Log every wizard decision in real time so you can trace which choices produced which reactions.

The biggest risk is a wizard who's better than the model you'll ship. A skilled researcher solving problems a first-generation agent never could inflates desirability findings and sets a bar you can't hit at launch. Cap the wizard's capability at what a realistic model could plausibly do, mistakes included.

What you're really watching for is trust: at what point does a participant hand over a task without checking the output, and what disclosure would they need before letting it act unsupervised?

## Method 2: multi-turn scenario tasks

A single fixed task — find X, click Y — tells you almost nothing about an agent. Replace it with goal-based scenarios that unfold over several turns: the user states an outcome, not a step, and the agent has to get there through ambiguity, follow-up questions, and mid-task changes of mind.

Score the whole conversation, not any one response: coherence (does it stay logically consistent), context retention (does it remember what was said three turns ago), role adherence (does it stay within its defined scope), and task completion (did the goal actually get met, not just acknowledged).

Build in branch points on purpose: incomplete information, a changed goal halfway through, a contradicted earlier statement. These curveballs are where compounding failures show up — an agent quietly working from outdated context looks fine on turn two and breaks by turn six.

Choose moderated sessions when you need to understand why a conversation went off track — you can pause and ask in the moment. Choose unmoderated testing, using [unmoderated usability testing tools](https://blog.glasgow.works/blog/unmoderated-usability-testing-tools) built for scale, when you want natural pacing across more participants and can code the transcripts afterwards.

Log the full trace either way: every user turn, every agent turn, every tool call. Without it, you can see that a session failed but not the exact turn where the experience diverged from what the user expected.

## Method 3: failure-mode and recovery probing

Happy-path testing shows an agent can succeed, not what happens when it doesn't — and agents fail in more varied ways than standard interfaces do. Test the edges on purpose: ambiguous input, a tool or API error, an out-of-scope request, a hallucinated fact, a wrong tool call.

Build an error taxonomy before you run sessions, so observers tag failures the same way: fabrication (stating something untrue as fact), reasoning drift (losing the thread of the goal), retrieval mismatch (the wrong or outdated source), and over-autonomy (acting without the confirmation the stakes required). Skip the shared categories and two observers watching the same failure will describe it differently, and the findings won't aggregate.

The failure itself matters less than what happens next. Does the user notice the agent got it wrong? Can they correct it mid-conversation, or do they have to start over? Does the agent recognise its own error and offer a graceful way out — a rollback, a handoff to a human, a plain "I got that wrong" — or does it carry on as if nothing happened?

What the agent says immediately after a mistake often decides whether a user keeps going or abandons the task. Plain acknowledgement retains more trust than a confident non-answer, even for the same underlying error. That nuance mostly shows up in session recordings, which is why [remote usability testing best practices](https://blog.glasgow.works/blog/remote-usability-testing-best-practices) — consent, reliable capture, a moderator who can probe in the moment — matter as much for agents as for any other feature.

Flag one category separately: any moment where the agent takes an irreversible action — sending, spending, deleting — without asking first. These are safety findings, not usability findings, and they should go straight to the team rather than wait for a report.

## Metrics and signals worth capturing

Blend behavioural and attitudinal measures, as you would for any usability study, but extend both for the agentic context: task success across the full conversation, recovery rate after a visible error, and time or turns to goal, alongside trust, confidence in the outcome, and how much control participants felt they had.

Then add signals specific to agents: appropriate autonomy (did the system act and check in at the right moments, given the stakes), transparency of intent (could the participant tell what the agent was about to do before it did it), and calibration (did expressed confidence match how often the agent was actually right).

Think-aloud protocol earns its keep here. A number can tell you trust dropped after turn four; a participant talking through their reasoning tells you why — usually a specific phrase or action that read as overconfident.

Automated and LLM-as-judge evaluations scale scoring across conversation traces in a way no human panel can, but they miss what a person feels watching an agent hesitate, overcorrect, or apologise unconvincingly. Reserve human-moderated sessions for the questions eval scores can't answer — our comparison of [AI-moderated vs human-moderated research](https://blog.glasgow.works/blog/ai-moderated-vs-human-moderated-research) is a useful starting point for deciding which layer to run first.

## Putting it together: a lightweight test plan

A workable plan needs six parts: a research question, a fidelity decision, four to six multi-turn scenarios, two or three seeded failure moments per scenario, a metrics list covering behavioural and agent-specific signals, and an observer tagging sheet built from your error taxonomy. That's enough structure to run consistently without over-scripting a system that won't behave the same way twice.

Sequence the methods with the build: Wizard of Oz at concept stage, before the model exists, to test desirability and autonomy appetite cheaply; multi-turn scenario tasks once you have a working model, to test real behaviour under realistic conversation; and failure-mode probing before launch, then on a continuous cadence after, because models and their underlying data drift.

We've seen this pattern in client discovery work for marketing and advertising. Stakeholders often ask for an agent that recommends media placements and then buys them automatically, collapsing two decisions most teams keep separate. Test that assumption with an early Wizard-of-Oz session — rather than asking about it directly — and you learn whether people are actually comfortable handing over budget without a checkpoint, or only think they are until the moment arrives.

## Common pitfalls when testing AI agents

**Treating one happy-path run as representative.** A probabilistic system doesn't behave the same way twice; one clean run shows the agent can succeed, not that it reliably does.

**Letting the wizard outperform the model.** A skilled human standing in for an unbuilt agent solves problems the real system can't, inflating desirability scores you won't hit at launch.

**Scoring individual responses instead of the conversation.** A single reply can look fine alone while the conversation has quietly gone off the rails by turn five.

**Ignoring recovery and trust repair.** Log only whether an error happened — not whether the user noticed it or the agent recovered — and some failures look worse than they are, others better.

**Running one test before launch and calling it done.** Models and the data behind them change after release; a plan that stops at launch stops measuring the thing that's still moving.

## Frequently asked questions

### How is testing agentic features different from normal usability testing?
Agents are probabilistic and multi-turn: the same input can produce a different path or output on each run, so a fixed task-and-success script doesn't hold. Instead of scoring clicks on one screen, you evaluate autonomy, trust calibration, and recovery across a whole conversation.

### Can I test an AI feature before the model is built?
Yes. Wizard of Oz testing — a hidden human simulating the agent's responses — lets you judge desirability, appropriate autonomy, and what disclosure users expect, before you've committed engineering time to the model itself.

### How many participants do I need to test an agentic feature?
The same small-n logic that applies to qualitative usability testing holds here: roughly 5–8 participants per segment surfaces most usability issues. Plan for multiple runs per participant, though, since the same prompt can produce different agent behaviour session to session.

### Should I use AI evals or human usability testing for agents?
Both, run as complementary layers. Automated and LLM-as-judge evaluations scale scoring across large volumes of conversation traces; human sessions surface the trust, recovery, and abandonment signals that scored metrics alone don't capture.

Next step: pick one agentic feature already in build, define what "good" looks like using the four criteria above, and run a single Wizard-of-Oz or failure-mode session before you commit more engineering time to it.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How to Test Agentic Features: A UX Research Guide",
  "description": "Standard usability scripts break on AI agents. Learn how to test agentic features with Wizard of Oz, multi-turn scenario tasks, and failure-mode probing.",
  "datePublished": "2026-07-24",
  "dateModified": "2026-07-24",
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
    "@id": "https://blog.glasgow.works/blog/how-to-test-agentic-features"
  },
  "keywords": "how to test agentic features, testing AI agents UX, usability testing for AI features, multi-turn conversation testing, wizard of oz testing for AI"
}
</script>

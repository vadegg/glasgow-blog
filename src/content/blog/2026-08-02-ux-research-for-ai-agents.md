---
title: "UX Research for AI Agents: A Testing Playbook"
description: "Learn UX research for AI agents: what to measure (trust, delegation, recovery), how to design supervision tasks, and where usability testing breaks. Read on."
pubDate: 2026-08-02
updatedDate: 2026-08-02
readingTime: 11
slug: "ux-research-for-ai-agents"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "UX researcher observing a participant supervising an AI agent completing a multi-step task, with a trust and recovery scorecard on screen"
tags:
  - "UX Research Methods — testing agentic/AI products (new emerging subtopic)"
  - "how to test agentic features"
  - "usability testing AI agents"
  - "evaluating agentic AI products"
  - "UX metrics for AI agents"
---
<!-- gr:toc -->

## On this page

- [Why classic usability testing breaks for agentic features](#why-classic-usability-testing-breaks-for-agentic-features)
- [Start with the delegation the user is actually making](#start-with-the-delegation-the-user-is-actually-making)
- [What to measure: a trust, delegation and recovery metric set](#what-to-measure-a-trust-delegation-and-recovery-metric-set)
- [Designing supervision tasks (and seeding failures on purpose)](#designing-supervision-tasks-and-seeding-failures-on-purpose)
- [Moderating when the agent is doing the work](#moderating-when-the-agent-is-doing-the-work)
- [Handling non-determinism: sample runs and score trajectories](#handling-non-determinism-sample-runs-and-score-trajectories)
- [A one-page agentic UX scorecard you can reuse](#a-one-page-agentic-ux-scorecard-you-can-reuse)
- [Frequently asked questions](#frequently-asked-questions)

## Why classic usability testing breaks for agentic features

Run a standard usability test on an agentic feature and the write-up feels thin. You scripted a task around a fixed sequence of screens; the agent had other plans. It worked out its own route, asked a clarifying question, or acted before the participant expected it to.

That gap is the whole shift behind UX research for AI agents. The user stops clicking through an interface and starts supervising something that acts on their behalf. Three assumptions behind classic usability testing quietly stop holding. Task success is no longer a single click path you can map in advance. Outputs vary across runs, so the same task can pass on Tuesday and fail on Wednesday with nothing wrong in your script. And the moments worth watching aren't "did they find the button" — they're whether someone let the agent proceed, when they stepped in, and how they recovered from a mistake.

This isn't about tools that use AI to run usability tests for you, and it isn't a guide to chat-bubble design. It's narrower: what to measure, how to write supervision tasks, how to moderate when you're not the only one watching the agent work, and a scorecard for the go/no-go meeting. Our [UX research methods hub](/blog/ux-research-methods) holds the wider toolkit this sits inside.

## Start with the delegation the user is actually making

Before you write a task, define what you're studying. It isn't a screen — it's a delegated goal. "Book the cheapest refundable flight for these dates" is a unit of study. "Click through the booking wizard" is the old one, and it drags research back toward navigation questions that no longer matter.

Name the autonomy level you're testing. It changes everything downstream. A suggest-only agent that proposes and waits needs different tasks and metrics from one that acts after a single confirmation, which differs again from one that acts autonomously and reports back. Conflate the three in one study and you muddy both the tasks and the metrics you read from them.

Decide, too, what kind of evidence answers your question. Attitudinal depth — how much someone says they'd trust an agent with their calendar or their money — comes from interviews. Behavioural evidence — what they actually do when the agent gets something wrong in front of them — comes from task-based testing. Most agentic questions need both. Treating [usability testing vs user interviews](https://blog.glasgow.works/blog/usability-testing-vs-user-interviews) as complementary rather than interchangeable saves you from picking the wrong one first.

Write your research questions accordingly. Not "can they find the button" but "how much do they let it do before checking," "what makes them trust the plan," and "what does recovery look like when it's wrong."

## What to measure: a trust, delegation and recovery metric set

Six metrics do most of the work in agentic UX research, and none of them is "satisfaction." A single score tells you how someone felt, not whether they were right to feel that way.

**Trust calibration** compares what someone says about the agent's reliability against how they actually behave with it. Ask participants to rate how much they trust the output, then watch what they do. Over-reliance looks like acting on a wrong answer without checking. Under-reliance looks like double-checking work the agent already got right. Both are calibration failures worth flagging.

**Delegation depth** tracks how much autonomy a participant grants, and whether that widens or narrows across a session. Someone who starts by approving every step and ends by letting three run unchecked is telling you the agent earned trust. The reverse is worth chasing in the debrief.

**Acceptance vs override ratio** is the proportion of agent actions a participant accepts outright versus corrects. You want this high and stable. A rising override rate partway through usually points to a model failure or a transparency gap — the agent stopped explaining itself clearly enough to be trusted.

**Intervention frequency** and **time-to-recovery** measure how often a participant has to pause or redirect the agent, and how much effort it takes to recover once something goes wrong. **Plan-recall accuracy** — whether someone can correctly restate what the agent is about to do, seconds after previewing it — is a clean proxy for whether your transparency UI is actually working, not just present.

The mechanics of building tasks around these metrics live in [how to test agentic features](https://blog.glasgow.works/blog/how-to-test-agentic-features). The rule that matters most: pair self-report, behavioural, and calibration measures. Any one alone will mislead you.

## Designing supervision tasks (and seeding failures on purpose)

Write tasks at the level of the goal, not the instruction. "Find a flight" gives the agent nothing to interpret. "Book something for a long weekend away, budget's flexible" forces it to ask a question, make an assumption, or propose a plan — exactly the behaviour you need to observe. Spoon-fed instructions test whether the agent can follow orders. Ambiguous goals test whether it can be trusted with judgement.

Build a preview-and-approve moment into every task, where the agent proposes a plan before acting. This is where you watch how someone evaluates intent. Do they read it, skim it, or wave it through? It's also where plan-recall accuracy gets measured, so don't let it happen off-screen.

Then seed failure on purpose. A study that only runs happy-path tasks tells you the agent works when everything goes right, which nobody doubted. Write at least one scenario where the agent makes a wrong assumption, hits a tool error, or proposes something mildly risky, and watch what the participant does with it. Recovery is where agentic products actually differentiate themselves.

Include at least one high-stakes task — spending money, sending a message on the user's behalf, deleting something. These are the moments where people who happily let an agent browse for them suddenly want a confirmation step, and that threshold is exactly what you're trying to find before launch.

Borrow one more thing from [first-click testing](https://blog.glasgow.works/blog/first-click-testing-ux-research): before the agent moves, ask what participants expect it to do next. Where their prediction and the agent's actual move diverge, you've found a spot where the handoff doesn't feel safe.

## Moderating when the agent is doing the work

Standard think-aloud starts to feel forced the moment the agent takes over. Ask someone to narrate their thoughts while they watch a progress bar and you get silence, or filler. The fix isn't to drop moderation. It's to move it — save your prompts for decision points instead of constant narration.

Three prompts do most of the work. "What do you expect it to do next?" before the agent acts. "Would you let it continue?" at a natural pause. "What made you step in?" the moment they intervene. Each asks about a decision, not commentary on autopilot.

For the stretches where the agent works autonomously and there's nothing to narrate, retrospective think-aloud beats live commentary. Play the recording back afterwards and ask what the participant was thinking at each pause or intervention. You get the reasoning without breaking their concentration mid-supervision.

Keep sessions short and cheap enough to run more of them where you can. Rare failure states only surface with volume, and a [guerrilla usability testing](https://blog.glasgow.works/guerrilla-usability-testing-guide) approach to recruitment gets you there faster than a fully moderated study of five people.

Watch, too, for automation bias: participants approving actions without reading them, or checking out entirely once the agent starts working.

## Handling non-determinism: sample runs and score trajectories

One session on one task tells you what happened once. Agentic systems don't behave identically twice — the same prompt can take a different route, call a different tool, or land on a different answer run to run. Treat a single pass as an anecdote. Run each task multiple times, ideally across different participants, before drawing a conclusion.

Score the trajectory, not just the final output. An agent that reaches the right answer by nearly deleting the wrong file, or by silently retrying a failed step three times, has failed the test even though the deliverable looks fine.

Keep model variance and UX variance separate in your notes. An inconsistent answer across runs is a model or prompt problem. Users unable to tell what the agent is doing, or unable to intervene cleanly, is an interface problem. Blur the two and the fix goes to the wrong team.

Log every action the agent takes, every confirmation the user gives, and every override, timestamped where you can. Without a log, an agentic finding is a memory of something that happened once. With one, it's reproducible, and you can hand it to engineering as a diagnosis rather than an impression.

## A one-page agentic UX scorecard you can reuse

Take the six metrics above and put them on one page, with a pass, watch, or fail threshold for each. Trust calibration: does behaviour match stated trust, within a reasonable margin. Acceptance vs override ratio: a target percentage, flagged if it drifts downward mid-session. Intervention frequency and time-to-recovery: a ceiling on both. Plan-recall accuracy: a minimum proportion who can correctly restate the plan. Delegation depth: whether it trends up or down across the session. Six rows, a colour per row, built to end an argument rather than start one.

We saw this pay off in a recent round of supervision testing for a service piloting a check-in agent — the kind that greets a returning visitor, pre-fills their paperwork, and asks them to confirm a few details. Participants approved the agent's identity match without checking it against their own name. A textbook over-trust signal, and one a satisfaction survey would have missed entirely. The fix was moving the confirmation step earlier, before the agent could act on the match, and shortening the plan preview so people had a reason to read it — changes made before any production code touched the identity logic.

That's the value of testing supervision early: a confirmation-flow gap is cheaper to find in a scorecard than in a support queue. If you're still deciding whether the agent concept is worth building at all, pair this method with [concept testing that yields a decision](https://blog.glasgow.works/blog/concept-testing) before you invest in the autonomy itself.

## Frequently asked questions

### How is UX research for AI agents different from normal usability testing?

Classic usability testing checks whether someone can complete a task by clicking through fixed screens. UX research for AI agents checks whether someone can safely delegate a goal to something acting on their behalf. The unit of study becomes the goal, not the screen; outputs vary across runs; and the signals that matter shift to trust calibration, delegation, and recovery.

### What UX metrics should I track for agentic features?

Six: trust calibration, acceptance vs override ratio, intervention frequency, time-to-recovery, plan-recall accuracy, and delegation depth across a session. Pair a self-reported measure like stated trust with a behavioural one like override rate — a single satisfaction score hides the over-reliance and under-reliance problems this set exists to catch.

### How many participants and runs do I need?

Because an agent can behave differently across identical runs, one session isn't evidence for that task on its own — run each scenario multiple times, ideally across different participants, before drawing a conclusion. Keep sessions short and cheap where you can, so the budget stretches to more scenarios; rare failure states only surface with volume.

### How do I test whether users trust the agent too much?

Seed a task with a wrong assumption or a subtly risky action, then watch what participants do rather than what they say they'd do. Over-reliance looks like acting on flawed output without checking it; under-reliance looks like double-checking work that was already correct. The gap between stated trust and actual behaviour is the calibration problem you're looking for.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "UX Research for AI Agents: A Testing Playbook",
  "description": "Learn UX research for AI agents: what to measure (trust, delegation, recovery), how to design supervision tasks, and where usability testing breaks. Read on.",
  "datePublished": "2026-08-02",
  "dateModified": "2026-08-02",
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
    "@id": "https://blog.glasgow.works/blog/ux-research-for-ai-agents"
  },
  "keywords": "UX research for AI agents, how to test agentic features, usability testing AI agents, evaluating agentic AI products, UX metrics for AI agents"
}
</script>

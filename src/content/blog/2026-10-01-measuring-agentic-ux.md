---
title: "Measuring Agentic UX: Oversight, Trust and Recovery"
description: "Measure whether users can supervise, trust, interrupt and recover from AI agents with a practical usability-testing scorecard."
pubDate: 2026-10-01
updatedDate: 2026-10-01
readingTime: 8
slug: "measuring-agentic-ux"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
hub: "ux-research-methods"
draft: false
heroImageAlt: "UX researcher reviewing an AI agent task timeline with oversight, intervention and recovery checkpoints"
tags:
  - "UX Research Methods — usability testing and emerging AI interaction evaluation"
  - "agentic UX metrics"
  - "AI agent usability testing"
  - "human oversight of AI agents"
  - "AI agent trust calibration"
---
## What does measuring agentic UX mean?

Measuring agentic UX means testing whether people can delegate a goal to an AI agent while retaining appropriate awareness and control over its actions and consequences.

A correct output is only part of the result. An agent can complete a task accurately but still be a poor teammate if the user cannot see what it is doing, challenge a doubtful action or recover from an unwanted outcome. NIST’s [human-centred AI use taxonomy](https://www.nist.gov/publications/ai-use-taxonomy-human-centered-approach) recommends examining human-AI tasks through human goals and outcomes.

Assess task outcome alongside appropriate reliance, usable intervention and recovery. A generic trust or satisfaction score cannot answer all of those questions. Use established [UX research methods](/blog/ux-research-methods/) to observe behaviour, gather explanations and test realistic conditions.

## Use four dimensions to evaluate human-agent collaboration

Measure the working relationship, not only the model output.

**Oversight** asks whether participants can explain the agent’s goal, current state, evidence, pending side effects and approval requirements at meaningful moments.

**Calibrated reliance** examines whether a decision to rely on, reject or verify the agent fits the available evidence and scenario conditions. High self-reported trust is not automatically positive. Research on human-AI collaboration treats trust as observable choice behaviour, making reliance decisions useful evidence of over-trust or under-trust ([PLOS ONE](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0229132)).

**Intervention** tests whether participants recognise when to pause, edit, deny, override or escalate, and whether the relevant control is available before an avoidable consequence.

**Recovery** covers what follows a failure: whether participants can diagnose the problem, restore a safe state, complete the goal manually or with bounded assistance, and understand what changed. Microsoft Research advises making it easy to edit, refine or recover when an AI system is wrong ([Microsoft Research](https://www.microsoft.com/en-us/research/blog/guidelines-for-human-ai-interaction-design/)).

Weight these dimensions according to task risk and context. NIST advises using human judgement when selecting specific metrics and thresholds ([NIST AI RMF](https://airc.nist.gov/airmf-resources/airmf/3-sec-characteristics/)). There is no defensible universal benchmark for measuring agentic UX.

For study-design detail, see [how to test AI agents](https://blog.glasgow.works/blog/how-to-test-ai-agents/).

## Design a study that tests supervision, not just happy paths

Choose one consequential delegated workflow. Define the user goal, the agent’s decision boundary and a reversible test environment before recruiting participants.

Create scenarios that expose supervision work:

- A routine task the agent completes correctly.
- An uncertainty that needs clarification before action.
- An incorrect or out-of-scope proposed action.
- A partial failure that needs recovery.

Set simulation limits, observer roles, stopping rules and ground truth in advance. Ground truth lets you judge whether reliance or intervention was appropriate. Do not expose participants to a realistic-looking risk they cannot safely reverse.

Capture the screen, event timestamps, relevant trace or audit-log references, participant statements and final task state. Use think-aloud sparingly during action, as continuous narration can alter how participants inspect the agent. Follow the task with retrospective questions such as: “What did you think the agent was about to do?” and “Why did you approve or leave that step alone?”

Here is a hypothetical example. In a sandboxed procurement-research study, participants delegate supplier shortlisting. The agent may summarise public sources and draft a shortlist, but must seek approval before recording a recommendation. One scenario includes conflicting evidence; another includes an irrelevant supplier. The researcher observes whether participants inspect evidence, seek clarification or remove the out-of-scope item.

A [cognitive walkthrough](https://blog.glasgow.works/blog/how-to-run-a-cognitive-walkthrough/) can identify likely breakdowns before sessions begin. Pair it with observation rather than relying on interviews alone; see [usability testing versus user interviews](https://blog.glasgow.works/blog/usability-testing-vs-user-interviews/).

## The Agentic UX Scorecard: metrics and calculations

Use one worksheet row for every participant and scenario. Keep event definitions stable across sessions and iterations.

| Dimension | Event definition and measure | Calculation |
|---|---|---|
| Oversight | Participant accurately states the goal, action status and next consequential action at an assessment point. | Accurate assessments ÷ assessed tasks |
| Calibrated reliance | Participant relies on, rejects or seeks verification, with a recorded rationale and known scenario condition. | Cross-tabulate decisions against scenario correctness or reliability; review rationale alongside the table |
| Intervention | Participant pauses, edits, denies, overrides or escalates before an avoidable consequence when intervention is warranted. | Warranted runs interrupted in time ÷ warranted runs |
| Intervention | Participant interrupts a correct, in-scope run without task evidence requiring intervention. | Unnecessary interruptions ÷ correct in-scope runs |
| Recovery | Participant restores a safe, goal-completing state after a failure scenario. | Safely restored failure scenarios ÷ failure scenarios |
| Recovery | Time from failure discovery to a safe state. | Report the median time to safe state |

For each consequential event, record the trigger noticed, control attempted, barrier, explanation used, residual uncertainty and recommended design change. This makes the scorecard a usable task-by-task worksheet, rather than a set of percentages without explanation.

### Filled fictional example

Every figure below is illustrative, not benchmark data.

A hypothetical low-stakes procurement-research agent is tested with eight participants across four scenarios. At assessment points, participants give 24 accurate explanations from 32 assessments. Oversight comprehension is 24 ÷ 32 = **75%**.

Two scenarios contain a risky or erroneous action, creating 16 warranted intervention opportunities. Participants stop 11 runs before the simulated consequence: 11 ÷ 16 = **68.75%**. Across eight correct, in-scope runs, participants interrupt twice without supporting task evidence: 2 ÷ 8 = **25%** unnecessary intervention.

Seven of eight failure scenarios end with the record restored to a safe, goal-completing state: 7 ÷ 8 = **87.5%** recovery completion. Median time to safe state is 2 minutes 40 seconds. The reliance cross-tab shows that some participants accept an ambiguous recommendation without opening its cited evidence. The resulting design question is whether uncertainty is sufficiently visible, not whether trust is automatically too high or too low.

Reuse the same scorecard in later rounds, much like a [UX benchmarking study](https://blog.glasgow.works/blog/how-to-run-a-ux-benchmarking-study/). It is not a universal pass mark.

## Run the sessions and analyse the evidence

Start with a capability-and-boundaries check. Ask what participants think the agent can do, which actions need approval and what they expect if it is wrong. This reveals initial mental models without teaching the intended response.

Present scenarios in a counterbalanced order where practical. Code the same timeline in every session:

1. Delegate
2. Inspect
3. Approve
4. Intervene
5. Error discovered
6. Recovery begun
7. Safe state restored
8. Task completed

Code both the action and its reason. “Participant clicked cancel” records an event. “Participant noticed an unsupported claim and cancelled before submission” records evidence that can guide a design decision.

Report results by scenario and participant segment before creating an overall view. Aggregate rates can hide a serious failure in a high-consequence scenario. Place each rate beside its observed barrier, such as unclear state, hidden evidence, delayed warning, inaccessible control, confusing error explanation or missing manual handoff.

Compare iterations using the same scenarios, definitions and stopping rules. Do not compare one product’s percentage with another product’s unsupported percentage. Conversational systems also need tests of turn-taking and repair; see [how to test voice AI and conversational UI](https://blog.glasgow.works/blog/how-to-test-voice-ai-conversational-ui/).

Google PAIR identifies feedback and user control as important to communication and trust ([Google PAIR](https://pair.withgoogle.com/guidebook-v2/chapter/feedback-controls/)). Test whether those controls work under task pressure.

## Turn findings into safer autonomy decisions

Use the scorecard to decide what to change.

| Pattern | Design response |
|---|---|
| Low oversight comprehension | Clarify current state, evidence, next action and approval requirements. |
| Missed necessary interventions | Improve risk signalling, approval timing and access to pause or override controls. |
| High unnecessary intervention | Clarify scope, confidence and evidence so users do not defensively stop routine work. |
| Poor recovery completion or long recovery time | Strengthen undo, error explanation, handoff and manual-completion paths. |

Low intervention is positive only when users had enough visibility and the agent behaved appropriately. If people miss harmful actions because they assume the system is safe, a low rate may indicate over-reliance.

Prioritise issues by consequence severity, frequency, recoverability and confidence in the evidence. A rare failure may still require action when it is irreversible. A [heuristic evaluation](https://blog.glasgow.works/blog/heuristic-evaluation-ux-research/) can help develop fixes, but it cannot replace observed supervision behaviour.

Before release, check that you have:

- Tested realistic consequences safely in a reversible environment.
- Observed reliance and rejection choices, not only stated trust.
- Tested at least one recovery path.
- Documented scenario-specific thresholds and decision boundaries.
- Retested after changing autonomy, approvals or recovery controls.

## Frequently asked questions

### What are the most useful agentic UX metrics?

Use a context-specific set: oversight comprehension, appropriate intervention, unnecessary intervention, recovery completion, median time to safe state and evidence about reliance decisions. Report measures by scenario when consequences differ.

### How do you measure trust in an AI agent?

Treat self-report as context, not proof. Compare decisions to rely on, reject or verify the agent with known task conditions and outcome evidence. The participant’s rationale helps show whether reliance was calibrated.

### What is agent intervention rate?

It is the proportion of relevant agent runs in which a user pauses, corrects, overrides, denies or escalates. Separate necessary intervention from unnecessary interruption; otherwise, a high rate can be mistaken for good supervision.

### How many participants are needed for AI agent usability testing?

There is no universal number. Recruit enough participants to cover key roles, risk scenarios and repeated testing rounds. Use observed patterns, consequence severity and confidence in the evidence to decide what to address next.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://blog.glasgow.works/services/).

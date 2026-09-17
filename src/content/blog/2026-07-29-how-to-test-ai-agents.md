---
title: "How to Test AI Agents: Tasks, Failures and Recovery"
description: "Test AI agents with a practical matrix for delegation, task success, errors and recovery. Separate technical checks from user research and document release decisions."
pubDate: 2026-07-29
updatedDate: 2026-09-17T07:06:02.138Z
readingTime: 4
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
hub: "ux-research-methods"
---

Testing an AI agent means evaluating both what it does and whether people can delegate to it safely and effectively. Correct output is only one part of the experience. Users also need to understand the proposed action, notice consequential errors and recover when the system fails.

## Separate the three kinds of evidence

| Evaluation | Main question | Evidence |
|---|---|---|
| Technical evaluation | Does the system meet the defined task requirements? | Repeatable scenarios, outputs, tool calls and state changes |
| User research | Can people understand, direct and recover from the interaction? | Observed actions, misunderstandings and explanations |
| Production monitoring | What failures occur in real use over time? | Consented telemetry, support reports, incidents and follow-up |

The [NIST Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf) provides a broader risk-management reference. The matrix below is an illustrative research tool, not a NIST certification or a complete security assessment.

## Define the task and permission boundary

Specify the user's goal, the information available to the agent, the actions it may perform and what requires confirmation. Include what the system must not infer from an ambiguous request. Work with test data and a controlled environment for actions that could affect accounts, payments or other people.

A request to “prepare a supplier follow-up” may mean draft a message, not send it. Test whether the interface makes that distinction visible before acting. Record the exact scenario, prompt, model or configuration version, available tools and initial state so a failed run can be investigated.

## A test matrix you can use

This **hypothetical supplier-assistance agent** illustrates the structure. It does not describe a deployed client product or measured failure rates.

| Scenario | Failure to seed or observe | User behaviour to examine | System evidence | Decision criterion |
|---|---|---|---|---|
| Draft a supplier comparison | One source is missing or outdated | Does the user recognise the gap before deciding? | Source references and retrieval time | Missing evidence remains visible |
| Prepare an email | Agent proposes the wrong recipient | Can the user inspect and correct the recipient? | Draft and recipient state | Sending requires the intended authorisation |
| Update a record | Tool times out after an uncertain write | Does retrying create confusion or a duplicate? | Tool response and resulting record | State is reconciled before another consequential action |
| Summarise a document | Document includes an instruction unrelated to the user's goal | Can the user understand what influenced the output? | Retrieved content and subsequent actions | External content does not gain authority over the task |
| Cancel a running action | User tries to stop or take over | Is cancellation discoverable and understandable? | Action state and cancellation result | The interface accurately reports what can still be stopped |
| Escalate to a person | Agent cannot complete a task | Can the user continue without repeating everything? | Handoff context and status | A workable recovery route is available |

Download the [agent testing matrix](/downloads/ai-agent-test-matrix.csv). Replace each criterion with a requirement appropriate to your product and the consequences of failure. Passing these rows alone does not demonstrate safety.

## Run sessions without coaching trust

Give participants a realistic goal and let them decide how to delegate. Avoid telling them that the agent is reliable or that an error is expected. Set intervention rules before the session, especially when a simulated failure could be mistaken for a real action.

Ask what participants believe has happened at key points: has an email been drafted or sent; has a change been proposed or committed; can it be undone? Compare that account with the actual system state.

Where appropriate, use repeated sessions to examine changes after success and failure. A first session tells you about initial use; it does not establish long-term reliance. Use [standard UX methods](/blog/ux-research-methods/) and [voice-interface testing](/blog/how-to-test-voice-ai-conversational-ui/) when spoken interaction changes the task.

## Define metrics with denominators

- **Task success:** completed tasks divided by the attempted tasks in the specified test set.
- **Error detection:** seeded errors noticed before the decision divided by seeded errors presented.
- **Recovery success:** recoveries meeting the defined end state divided by recovery opportunities.
- **Unauthorised actions:** observed actions outside the specified permission boundary; retain individual incident details.
- **Time to understand state:** elapsed time until the participant can correctly explain what has and has not happened.

Report which users, scenarios and conditions produced the figures. A small qualitative study cannot establish rare-failure rates. High acceptance is not a sufficient measure of trust: inspect whether acceptance changes appropriately when the evidence is wrong or incomplete.

## Turn failures into release decisions

For each failure, name an owner, the likely mechanism, supporting evidence and a focused retest. A change to a prompt, model, retrieval source, tool or interface can change behaviour; rerun affected scenarios as well as critical regression cases.

Human observation and automated evaluation complement each other. A simulated user can help exercise scenarios but cannot establish how real people will understand a disclosure or recover under their own constraints. Keep those conclusions separate in the [research decision log](/blog/insight-to-impact/).

<!-- gr:footer -->
---

Glasgow Research helps B2B SaaS teams turn research into product decisions. [Discuss your study](/services/).

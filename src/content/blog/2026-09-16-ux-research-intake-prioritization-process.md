---
title: "UX Research Intake and Prioritization Process"
description: "Build a transparent UX research intake and prioritization process with a practical form, scoring worksheet, triage rules and governance workflow."
pubDate: 2026-09-16
updatedDate: 2026-09-16
readingTime: 9
slug: "ux-research-intake-prioritization-process"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
hub: "research-operations"
draft: false
heroImageAlt: "UX research requests moving from an intake form through triage and scoring into a prioritised research queue"
tags:
  - "tooling & templates — research intake, triage, and prioritisation"
  - "UX research intake form"
  - "research request prioritisation framework"
  - "UX research request scoring"
  - "ResearchOps intake process"
---
## What a UX research intake and prioritization process must do

Research requests arrive through meetings, messages and planning documents, often with inconsistent claims of urgency. With finite capacity, you need a defensible way to decide what to research next.

A UX research intake and prioritization process provides a visible route from request to decision: capture, clarify, triage, score, allocate and review. Rank the unanswered decision or knowledge gap, rather than the perceived importance of a product feature. [Research Operations](/blog/research-operations/) provides the structure for keeping requests, evidence and decisions connected over time.

The copyable worksheet below supports accountable judgement. It does not replace it.

## Build a UX research intake form people can complete

Keep the form short, but collect enough detail to assess the request. Use these eight fields:

1. **Requester and accountable decision-maker** — who submitted the request, and who will act on the findings?
2. **Decision to be made** — state the choice, not a preferred research activity.
3. **Decision deadline and reason** — when is the decision needed, and why is that date fixed?
4. **Research question** — what must the team learn to make the decision?
5. **Affected users** — which users, journeys or segments are affected?
6. **Consequence of acting without evidence** — what could go wrong for users, delivery or the organisation?
7. **Existing evidence** — relevant studies, analytics, support themes or assumptions already available.
8. **Requested support** — full research, advice, plan review, recruitment support or another defined need.

Ask for the decision deadline rather than a preferred completion date. This lets you test whether urgency is tied to a real decision. Do not require requesters to prescribe a method: choose the method after clarifying the decision and evidence gap.

Use conditional flags for accessibility, vulnerable groups, sensitive topics, personal data, recruitment constraints, and legal or ethics review. Collect only the information needed to route the request. The ICO advises organisations to identify the minimum personal data needed for their purpose ([ICO](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/data-minimisation/)).

Set expectations after submission: “We will acknowledge your request, complete triage, and update you with an outcome or clarification question.” Where recording tools may be involved, link to [AI notetaker consent and privacy](https://blog.glasgow.works/blog/ai-notetaker-consent-privacy-user-research/).

## Triage each request before scoring it

Do not score every submission. Apply these five gates first:

1. Is there a real decision with a named decision-maker?
2. Is the question answerable through research?
3. Does suitable evidence already exist?
4. Is the timing feasible?
5. Are governance prerequisites identifiable?

Return vague requests with one specific next action, such as: “Please name the decision that will change after this work.” Search the repository and consult relevant teams before commissioning new work. If existing evidence answers the question, link to it and mark the request as answered elsewhere. Merge requests that concern the same users, decision or research question. A maintained [UX research repository](https://blog.glasgow.works/blog/how-to-build-a-ux-research-repository/) supports this check.

Each request should leave triage with one outcome:

- Score now
- Merge with an existing request
- Answer from existing evidence
- Redirect to another function
- Decline with a recorded reason

Treat privacy, legal and ethics concerns as routing gates, not score deductions. Specialist review may be needed before research begins.

## Score competing UX research requests with one worksheet

Use one shared model for requests that pass triage. This weighted model is a starting template, not a universally validated formula. Its purpose is to make criteria, evidence and trade-offs visible.

Score each benefit criterion from 1 to 5 and score effort separately.

| Criterion | Weight | A high score means |
|---|---:|---|
| Decision consequence | ×3 | The decision has substantial user, delivery, financial, regulatory or reputational consequences. |
| Affected users | ×2 | Many users, or a small but critical or underserved segment, are affected. |
| Strategic alignment | ×2 | The decision directly supports an agreed organisational or product priority. |
| Evidence gap | ×2 | Existing evidence is weak, old, conflicting or does not apply to the decision. |
| Effort | −1 | More researcher-days are needed, including recruitment, fieldwork, analysis and communication. |

Calculate:

`Priority = (decision consequence × 3) + (affected users × 2) + (strategic alignment × 2) + (evidence gap × 2) − effort`

Add a short evidence note beside every rating. It exposes the assumption behind the number.

| Hypothetical request | Consequence ×3 | Users ×2 | Alignment ×2 | Evidence gap ×2 | Effort | Total | Evidence note |
|---|---:|---:|---:|---:|---:|---:|---|
| Checkout usability before a committed release | 4×3 = 12 | 4×2 = 8 | 5×2 = 10 | 3×2 = 6 | −3 | **33** | A release decision is approaching; earlier testing does not cover the changed checkout flow. |
| Exploratory dashboard research with no pending decision | 2×3 = 6 | 3×2 = 6 | 3×2 = 6 | 4×2 = 8 | −4 | **22** | There is a learning need, but no named decision or fixed planning point. |
| Accessibility barrier affecting a critical segment | 5×3 = 15 | 3×2 = 6 | 5×2 = 10 | 4×2 = 8 | −3 | **36** | A reported barrier may prevent a critical segment completing an essential task; the cause is not yet understood. |

These are hypothetical requests. Their order is accessibility barrier (36), checkout (33), then dashboard work (22). If evidence review changes the accessibility consequence rating from 5 to 3, its score becomes 30 and checkout moves first. Record the changed assumption rather than quietly rearranging the queue.

Do not score claimed urgency as a separate criterion. Verify the decision date and use it as a scheduling constraint after value scoring. Agree tie-breakers before using the model:

1. Compliance exposure or serious user-harm exposure
2. Earlier immovable decision date
3. Lower effort

GitLab describes a six-question research-priority calculator using 1-to-5 scores ([GitLab](https://handbook.gitlab.com/handbook/upstream-studios/experience-research/research-prioritization/)). When capacity is full, a new priority decision must also identify lower-priority work that moves. The point is a real queue decision, followed by [turning insight into impact](/blog/insight-to-impact/), not research completion alone.

## Turn scores into capacity and support decisions

Estimate effort after triage using one unit, such as researcher-days. Include recruitment, preparation, fieldwork, analysis, stakeholder discussion and communication.

Match accepted work to the support required:

- **Full-service research** for high-consequence decisions with a material evidence gap.
- **Task-specific support** for a defined need, such as a discussion guide or synthesis workshop.
- **Consultation** for teams choosing an approach.
- **Self-serve with guardrails** where risk is low and a reviewed plan is sufficient.

Sequence accepted work against actual capacity. A published score is not a delivery promise. If urgent work enters a full queue, name the item that will pause or move, record why, and obtain agreement from the relevant decision owner.

For scheduled work, create a plan covering the owner, questions, method, participants, risks, milestones and output. A [user research plan template](https://blog.glasgow.works/blog/user-research-plan-template/) makes that handover explicit. Where specialist capability or internal capacity is the constraint, assess [when to outsource user research](https://blog.glasgow.works/blog/when-to-outsource-user-research-agency-vs-in-house/).

## Govern the queue without creating a black box

Name the responsibilities:

- The requester supplies context and answers clarification questions.
- The research lead validates scope, checks evidence and facilitates scoring.
- The accountable decision owner resolves strategic trade-offs.
- Privacy, legal, ethics and safeguarding specialists review flagged work.

Acknowledge submissions as they arrive, hold a regular triage session, and review the wider queue alongside planning cycles. GOV.UK advises leaders to use a clear prioritisation method involving delivery teams and stakeholders ([GOV.UK](https://www.gov.uk/service-manual/agile-delivery/deciding-on-priorities)). It also advises revisiting research questions as knowledge changes ([GOV.UK](https://www.gov.uk/service-manual/user-research/capturing-research-questions)).

Keep statuses visible and consistent:

`needs clarification → triage → scored → scheduled → active → deferred → answered elsewhere → declined`

For every queue decision, publish the score, evidence notes, owner, decision, next review date and reason for any override. Re-score only when a material input changes, such as new evidence, a confirmed deadline or revised capacity. Log the old and new decision.

Use this requester message template:

> **Outcome:** Scheduled for the next available research slot.  
> **Rationale:** The request scored 33 because it supports a committed decision with meaningful user impact.  
> **Dependencies:** Recruitment confirmation and prototype readiness.  
> **Next review:** [date]

## Pilot and improve the ResearchOps intake process

Pilot the ResearchOps intake process with recent requests before automating it or buying another tool. Check whether people interpret fields consistently and whether reviewers produce materially different ratings.

Track incomplete submissions, time awaiting clarification, duplicate requests, decisions served before their deadlines, and reasons for overrides. Remove fields that never affect routing or prioritisation. Revise scoring anchors that repeatedly create disagreement.

Run one governance cycle:

- Name the research queue owner.
- Publish the eight-field form.
- Define the five triage gates.
- Calibrate the worksheet using recent requests.
- Set triage and queue-review cadence.
- Expose statuses and decisions.
- Review the process after the pilot.

## Frequently asked questions

### What should a UX research intake form include?

Include the accountable owner, decision, genuine deadline, research question, affected users, consequence of uncertainty, existing evidence and support required. Add conditional governance flags for personal data, accessibility, vulnerable groups and sensitive topics.

### How do you prioritise UX research requests?

Triage requests for suitability first. Score those that pass against shared criteria, write an evidence note for every rating, apply declared tie-breakers, then sequence accepted work against real capacity.

### Should UX research requests be scored with RICE?

You can adapt RICE if it suits your organisation, but make the decision, user consequence, strategic alignment, evidence gap and effort explicit. A research request prioritisation framework should show why a request is being ranked.

### Who should make the final prioritisation decision?

The research lead facilitates the assessment and makes implications visible. The accountable product or business decision owner resolves strategic trade-offs, while privacy, legal and ethics owners retain authority over relevant gates.

### How should urgent research requests be handled?

Confirm the immovable decision date and consequence, then apply the same triage. If the queue is full, document which lower-priority commitment will move.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://blog.glasgow.works/services/).

---
title: "Stakeholder Interviews for UX Research Planning"
description: "Learn how to interview stakeholders, reconcile competing priorities and turn internal evidence into a focused, actionable UX research scope."
pubDate: 2026-11-10
updatedDate: 2026-11-10
readingTime: 8
slug: "stakeholder-interviews-ux-research-planning"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
hub: "research-operations"
draft: false
heroImageAlt: "UX researcher converting stakeholder interview notes into prioritised research questions and a focused study scope"
tags:
  - "tooling & templates — stakeholder discovery and research scoping"
  - "UX research stakeholder interview questions"
  - "stakeholder interviews before user research"
  - "how to scope UX research with stakeholders"
  - "research planning stakeholder alignment"
---
## What stakeholder interviews should achieve

Stakeholder interviews for UX research planning help you turn scattered internal knowledge into a research scope the team can act on. They are semi-structured conversations with people who influence, fund, deliver or act on research findings.

Stakeholders provide organisational context, existing evidence, constraints and hypotheses. They do not prove what users need or how they behave. Treat claims about users as questions until you have relevant user evidence.

Set the intended output before scheduling interviews: the decision ahead, evidence already held, assumptions, constraints and unresolved questions. GOV.UK advises teams to turn unfounded assumptions and opinions into prioritised research questions ([GOV.UK Service Manual](https://www.gov.uk/service-manual/user-research/plan-user-research-for-your-service)).

Use interviews when people hold different parts of the evidence or do not share a view of the decision. If the decision, evidence and ownership are already clear, a short alignment workshop may be enough. We treat this as part of [research operations](/blog/research-operations/), not a ceremonial kick-off.

## Choose stakeholders by knowledge, influence and action

Choose interviewees for the knowledge they hold, their influence on scope and their responsibility for acting on findings. Seniority alone is not a reason to include someone.

Map relevant perspectives across product, design, engineering, commercial, support, compliance and delivery. Not every project needs every function, but each interview should add something distinct: operational evidence, technical constraints, customer contact, commercial exposure or decision ownership.

Sponsors can explain strategic intent, but they may not see friction reported by customers or frontline teams. Avoid combining reporting levels in one conversation where hierarchy may limit disagreement.

Where the stakeholder group is large, speak to representatives and record missing perspectives. Influence mapping can help identify whom to involve and surface disagreement about objectives ([Digital.gov](https://digital.gov/guides/research-collaboration/aligning/consensus-building)).

## Prepare a neutral stakeholder interview guide

A stakeholder guide should focus on decisions and evidence, not steer people towards a preferred solution. Organise prompts around the decision, desired outcome, current evidence, users, assumptions, previous attempts, risks, constraints and ownership.

Use this question bank:

- What decision will this research inform?
- What outcome are you trying to achieve?
- What evidence already exists, and where can we find it?
- What are we assuming about users or their behaviour?
- What would change your mind?
- What happens if no action is taken?
- Who may be overlooked?
- Who will act on the findings?

Ask what a stakeholder has observed, then ask how they know. Open, non-leading prompts help test assumptions rather than confirm a preferred answer ([Digital.gov](https://digital.gov/resources/how-create-user-interview-checklist)).

Send themes in advance and request relevant artefacts, such as support summaries, analytics, policy documents, previous research or delivery plans. Do not circulate questions that imply an answer. Plan the introduction, note-taking or recording disclosure, prompts, follow-ups and a final question: “Who else should we speak to?” Then [structure the resulting study with a research plan template](https://blog.glasgow.works/blog/user-research-plan-template/).

## Run the interviews without turning them into approval meetings

Explain the purpose, how notes will be used and the limits of confidentiality. Make clear that you are gathering context to shape a research scope, not seeking approval for a solution or promising to include every request.

Use individual interviews where candour, commercial sensitivity or power dynamics matter. A notetaker can help the interviewer listen and follow useful threads. If you record, get agreement and explain who can access the recording.

Follow broad claims with questions such as:

- What makes you say that?
- What evidence have you seen?
- Tell me about the last time that happened.
- Which users does this affect?
- What decision depends on this being true?

Treat proposed features and methods as hypotheses. “We need a redesigned onboarding flow” may conceal a different question: where people stop, whether they understand the task or whether investment in that journey is justified.

Capture exact terminology, named evidence sources, contradictions, constraints and follow-up owners. Debrief promptly and adapt later interviews if a genuine evidence gap emerges. Stakeholder interviews frame the work; [user interview methods](/blog/ux-research-methods/) gather evidence directly from people affected.

## Separate evidence, assumptions and requests

Stakeholder notes often mix facts, interpretations and preferences. Separate them before deciding what research should cover.

Use this completed stakeholder-evidence-to-research-scope worksheet:

| Source | Internal evidence | Assumption | Decision at stake | Risk | Constraint | Proposed research question | Priority |
|---|---|---|---|---|---|---|---|
| Support lead | Support contacts describe difficulty with an early account task; ticket themes and dates are available | People leave because the steps are unclear | Whether to change the early journey before the next release | Investment may address the wrong problem | Limited release window | Where do relevant users encounter difficulty, and what causes it? | High |
| Product manager | A delivery decision is due | A redesigned flow is required | Whether to fund design and engineering work | A solution may be chosen before the problem is understood | Constrained team capacity | What evidence is needed to decide whether journey changes are justified? | High |
| Engineering lead | The current flow has technical dependencies | A full rebuild is necessary | Whether to plan incremental or larger changes | Feasibility may narrow options too early | Some components cannot change this quarter | Which user problems could be addressed within current technical limits? | Medium |
| Commercial lead | No direct user evidence supplied | Faster completion will improve conversion | Whether this work takes priority | A forecast may rely on an untested link | Incomplete measurement | What relationship, if any, exists between user friction and completion? | Medium |

This is a hypothetical example, not a client case. Ticket themes are internal evidence; the explanation for user behaviour is an assumption; a redesign is a requested solution. The decision remains open.

Check whether operational data, desk research or previous studies can answer part of a question before commissioning new research. Record who supplied each item and the artefact that supports it. This keeps uncertainty visible during [product discovery](/blog/product-discovery/).

## Reconcile conflicting priorities into one scope

A defensible scope does not need to accommodate every stakeholder request. It needs to make the priority decisions visible.

Apply this decision matrix to each candidate question:

| Candidate question | Decision urgency | User risk if wrong | Evidence gap | Feasibility | Scope decision |
|---|---:|---:|---:|---:|---|
| Where do users struggle in the current journey? | High | High | High | High | Include now |
| Which future concept do users prefer? | Medium | Medium | High | Medium | Defer |
| Which internal team owns implementation? | High | Low | Low | High | Resolve outside research |
| Can a constrained component change this quarter? | High | Medium | Low | High | Confirm with delivery team |

High, medium and low are discussion aids, not precise measurements. In this hypothetical example, the current journey comes first because it supports a nearer, higher-risk decision. Concept evaluation can wait.

Identify whether disagreement concerns facts, strategy, ownership or preferred solutions. Research can examine whether users understand a process; it cannot decide whether leadership should accept a commercial risk.

Group overlapping questions, write one summary question for each group and rank the groups. GOV.UK recommends combining similar questions and refining unclear ones before prioritising them ([GOV.UK Service Manual](https://www.gov.uk/service-manual/user-research/capturing-research-questions)). Record what is included, deferred and excluded, with a rationale. Escalate unresolved strategic choices to the accountable decision-maker. Clear ownership makes [turning insight into action](/blog/insight-to-impact/) more likely.

## Turn the output into an actionable research plan

Turn the completed worksheet and matrix into a short scope containing:

- The decision the research will support
- Prioritised research questions
- Relevant user groups
- Known evidence and remaining assumptions
- Included, deferred and excluded questions
- Constraints, owners and decision timing

Choose methods after deciding what the team needs to learn. A requested method should not define the problem. Check feasibility, recruitment, accessibility, ethics, timing, budget and how findings will enter a real decision.

A useful research round identifies what the team needs to know to make its next informed decision ([GOV.UK Service Manual](https://www.gov.uk/service-manual/user-research/plan-round-of-user-research)). Involve the delivery team in objectives, previous evidence, feasibility, methodology, recruitment and intended decisions ([Department for Education User Research Manual](https://user-research.education.gov.uk/guidance/planning/)).

Circulate the scope for factual corrections and ownership confirmation, not for stakeholders to prescribe findings. Set a checkpoint for meaningful new evidence. If you need external support, a [market research RFP template](https://blog.glasgow.works/blog/market-research-rfp-template-hiring-agency/) can help define the decisions and evidence required.

Copy the worksheet, add evidence from your interview notes and use the matrix to agree what the next research round will investigate.

## Frequently asked questions

### When should stakeholder interviews happen in UX research?

Run them before finalising the research scope. Repeat them when a major decision, stakeholder group or constraint changes. Their purpose is to gather organisational context before participant-facing research begins.

### How many stakeholders should you interview?

There is no universal number. Speak to enough people to cover distinct knowledge, influence and implementation roles. Use representatives where necessary and document missing perspectives.

### What questions should you ask stakeholders before user research?

Ask about the decision, desired outcomes, existing evidence, assumptions, affected users, previous attempts, risks, constraints, success measures and who will act on the findings.

### Are stakeholder interviews the same as user interviews?

No. Stakeholders explain organisational knowledge, priorities and constraints. Users provide evidence about their own contexts, behaviour and needs. Stakeholder claims about users remain hypotheses until evidence supports them.

### How do you handle stakeholders who want different research outcomes?

Make the disagreement explicit. Separate evidence from preferences, prioritise questions by decision urgency, user risk, evidence gap and feasibility, then send unresolved strategic conflicts to the accountable decision-maker.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://blog.glasgow.works/services/).

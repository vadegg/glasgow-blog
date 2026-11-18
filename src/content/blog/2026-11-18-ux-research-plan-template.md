---
title: "UX Research Plan Template: Decision-Led Example"
description: "Use this UX research plan template and completed example to connect research questions, methods and evidence directly to product decisions."
pubDate: 2026-11-18
updatedDate: 2026-11-18
readingTime: 10
slug: "ux-research-plan-template"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
hub: "research-operations"
draft: false
heroImageAlt: "Decision-led UX research plan template linking questions, methods, participants, evidence thresholds and product actions"
tags:
  - "tooling & templates"
  - "research plan template"
  - "research plan templates"
  - "research planning template"
  - "user research plan"
---
## Copy the UX research plan template

A loose request is difficult to review, run and act on. A UX research plan template turns it into a study-level working document: it records the goals, methods and logistics of a research study, as described by [Nielsen Norman Group](https://www.nngroup.com/articles/pm-research-plan/). This version also makes the product decision, evidence rules and resulting actions explicit.

Copy and adapt this worksheet:

```text
Study context:
Pending decision:
Decision owner and decision deadline:
Known facts, observed signals and assumptions:
Research questions:

Decision-to-evidence matrix:
- Pending decision:
- Current assumption:
- Research question:
- Method and rationale:
- Participant inclusion and exclusion criteria:
- Evidence threshold:
- Contradictory evidence:
- Decision owner:
- Resulting action:

Recruitment, pilot and accessibility responsibilities:
Schedule, dependencies, incentives, tools and observer roles:
Procedure and analysis approach:
Consent, data collected, storage, access, withdrawal and deletion:
Outputs:
Decision-outcome actions:
Links: screener, consent materials, stimuli and discussion guide:
```

Use the UX research plan template for one study. It is different from a research strategy, which sets longer-term direction; a roadmap, which sequences work; and a discussion guide, which contains session activities and prompts.

The broader [user research plan template](https://blog.glasgow.works/blog/user-research-plan-template/) covers the standard structure. This worksheet adds decision governance: each question has a named decision, a way to identify evidence that challenges the team’s view, and an agreed response. It gives delivery teams and [research operations](/blog/research-operations/) one shared record of why the work exists.

## Start with the decision, not the method

Start by naming the choice: what is still open, who owns it, and when must evidence arrive? GOV.UK recommends planning around the information needed to make the next informed decision, rather than beginning with a preferred method ([GOV.UK Service Manual](https://www.gov.uk/service-manual/user-research/plan-round-of-user-research)).

Before writing research questions, separate:

- **Known facts:** information already verified.
- **Observed signals:** patterns from support contacts, product data or previous research.
- **Assumptions:** explanations or predictions that need testing.

“Talk to customers about onboarding” is a request, not a research question. It does not state the decision the team needs to make.

A weak formulation:

> We need interviews to learn whether users like onboarding.

A decision-led formulation:

> **Decision:** simplify the setup flow or add implementation support.  
> **Assumption:** new administrators abandon setup because the flow is unclear.  
> **Research question:** where do administrators stop, what do they try next, and which constraints prevent completion?  
> **Action:** prioritise flow changes, support changes or further discovery.

Keep research questions separate from interview questions. “What did you find confusing?” may be a useful session prompt, but it does not define the learning need or the product choice.

Use this traceability chain throughout the research planning template:

```text
Decision → assumption → research question → evidence → action
```

This gives stakeholders a proposition to test during [stakeholder interviews for research planning](https://blog.glasgow.works/blog/stakeholder-interviews-ux-research-planning/). It also prevents a study becoming a collection of observations with no agreed route into prioritisation.

## Match methods, participants and evidence to each question

Choose a method according to the evidence needed, the decision’s risk, participant access, time and cost. GOV.UK advises teams to state which questions a research round will answer and how the answers will help them make decisions ([GOV.UK Service Manual](https://www.gov.uk/service-manual/user-research/plan-user-research-for-your-service)).

| Question type | Suitable method family | Evidence sought |
|---|---|---|
| What needs or constraints shape behaviour? | Semi-structured interviews, contextual enquiry | Accounts of context, motivations and constraints |
| Where does someone struggle in a task? | Moderated usability testing, observation | Observable actions, workarounds and failures |
| Does a proposed direction make sense? | Concept or prototype testing | Whether people understand, value and can use the proposition |
| How widespread or measurable is a pattern? | Product-data analysis, surveys, experiments | Comparable measures across a defined population |

Our guide to [UX research methods](/blog/ux-research-methods/) can help you choose a method family. Interviews can explain context, but they are weak evidence that someone can complete an unfamiliar task unaided. Equally, recurrence in a small qualitative study is not a population estimate.

Define inclusion criteria through behaviour or experience relevant to the decision. “People responsible for initial account setup in the past 90 days” is more useful than a broad job-title or age filter. Add exclusions where they protect the study, such as people who designed the product or cannot access the required system.

An evidence threshold is a decision rule agreed before fieldwork, not a universal sample-size formula. State what pattern would support action, what would challenge the current interpretation, and what uncertainty would require further work. Assign owners for the pilot, recruitment, accessibility adjustments, observation and analysis so the plan is executable.

## Add logistics, consent and a data plan

Record dates, owners, dependencies, incentives, tools, observer roles, and links to the screener, consent materials, stimuli and discussion guide. Reserve analysis time as well as session time.

Answer these questions in the plan:

- What personal data will be collected, and why is it needed?
- Where will it be stored, and who can access it?
- How can participants withdraw, and what happens to their data?
- When will recordings, notes and contact details be deleted?

GOV.UK says user research requires informed consent, so participants need clear information about what they are agreeing to ([GOV.UK Service Manual](https://www.gov.uk/service-manual/user-research/getting-users-consent-for-research)). The ICO’s data-minimisation principle requires personal data to be adequate, relevant and limited to what is necessary for the stated purpose ([ICO](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/data-minimisation/)).

Use participant codes in the shared plan. Keep names, contact details and consent records in an appropriately restricted system. Plan for accessibility needs and foreseeable participant risks before recruitment begins.

This is practical guidance, not legal advice. Ask your organisation’s privacy or legal specialist how its obligations apply. For retention decisions, read [deleting user research notes and transcripts](https://blog.glasgow.works/blog/deleting-user-research-data-ai-notetaker-transcripts-notes/).

## Completed example: choosing a B2B onboarding direction

This completed UX research plan template is hypothetical. Its numbers and thresholds are illustrative, not generally recommended.

**Study context:** A B2B SaaS team sees that some newly created accounts remain incomplete after initial setup.

**Pending decision:** Simplify guided onboarding, introduce implementation support for suitable accounts, or retain the current flow while gathering more evidence.

**Decision owner and deadline:** Product lead; prioritisation meeting in three weeks.

**Known facts, observed signals and assumptions:** Product records show incomplete setup for some new accounts. The team assumes unclear instructions are the main cause. Other explanations include missing permissions, unavailable source data, internal approval processes and account-specific complexity.

| Pending decision | Current assumption | Research question | Method and rationale | Participant criteria | Evidence threshold | Contradictory evidence | Decision owner | Resulting action |
|---|---|---|---|---|---|---|---|---|
| Simplify the guided flow, add support, or defer | Unclear instructions cause incomplete setup | Where do administrators pause, stop or seek help? What do they try next? Which constraints prevent completion? | Six moderated remote setup observations, followed by short interviews. Observation examines interaction with the flow; follow-up questions establish account context. | Administrators responsible for setup in the previous 60 days; include completed and incomplete setups and accounts with multiple configuration requirements. Exclude observers and people joining after setup. | Consider flow simplification if a similar, addressable interaction barrier appears in at least four of six illustrative sessions. | Participants understand the flow but cannot progress because of external dependencies; or most complete key steps without difficulty. | Product lead | Simplify affected steps, define a support hand-off, segment accounts for follow-up, or retain the flow while checking the original signal. |

**Recruitment, pilot and accessibility responsibilities:** Product operations owns recruitment against the criteria. The researcher pilots one session, moderates and analyses. The team confirms access needs before sessions. Design prepares prototype material or other stimuli.

**Schedule, dependencies and tools:** Recruitment begins once the screener, consent information, setup access and session schedule are approved. Shared notes use participant codes. The team reserves analysis time before the prioritisation meeting.

**Procedure and analysis:** Ask participants to work through setup where appropriate. Follow-up questions explore permissions, data readiness and internal coordination. Record barriers, attempted recovery actions and relevant account conditions. Look for recurring and dissenting patterns rather than assigning every difficulty to one cause.

**Consent and data plan:** Participants receive clear consent information and can withdraw. Shared outputs use participant codes; directly identifying details and consent records are held in the organisation’s restricted system. Retention and deletion follow its approved policy.

**Outputs:** A decision read-out, journey evidence, barrier map and prioritised recommendations.

| Plausible finding | Decision outcome | Resulting action |
|---|---|---|
| Similar interaction barriers recur and participants cannot recover unaided | Simplify guided onboarding | Prioritise affected steps and test a revised flow |
| External setup dependencies dominate | Add targeted implementation support | Define eligibility and the support hand-off |
| Barriers differ materially by account conditions | Defer a single direction | Segment accounts and plan focused follow-up |
| The current flow works for the study group | Retain the flow for now | Recheck account data and recruitment assumptions |

The decision-outcome table makes the rules visible before fieldwork starts. That is the practical work of [turning insight into impact](/blog/insight-to-impact/). For a guide to standard research-plan components and reusable templates, see [Maze’s research-plan guide](https://maze.co/guides/ux-research/plan/).

## Run a pre-flight review and keep the plan current

Review the plan with the people who will act on the findings before recruitment begins.

- Is the decision owner confirmed, and is the decision still open?
- Are questions prioritised and tied to a specific choice?
- Is the method-question fit explained?
- Are inclusion and exclusion criteria clear?
- Are supporting, contradictory and inconclusive outcomes agreed?
- Are consent, accessibility, participant risks and data handling covered?
- Is analysis time booked, with a named owner?
- Have stakeholders identified assumptions they would revise?

Create a new version when recruitment, method, stimuli or prompts change. After fieldwork, update the plan so it records what actually happened.

Stop, split or deprioritise a study when the decision is unclear, already fixed or too low-value to justify the work. A clear intake process supports those calls; see our [UX research intake and prioritisation process](https://blog.glasgow.works/blog/ux-research-intake-prioritization-process/).

## Frequently asked questions

### What should a UX research plan include?

Include context, a pending decision, assumptions, research questions, methods, participant criteria, evidence rules, logistics, ethics, analysis, owners, outputs and intended actions.

### How long should a UX research plan be?

Use the shortest plan that aligns the team and makes the study reproducible. Complexity, risk and data sensitivity matter more than page count.

### What is the difference between a research plan and a discussion guide?

A research plan explains why the study exists, how it will run and how evidence will inform a decision. A discussion guide contains the activities, prompts and probes used in a session.

### How do you choose an evidence threshold for UX research?

Base it on the decision’s risk, method and plausible evidence patterns. Define supporting and contradictory outcomes before fieldwork; do not apply one participant count to every study.

### Should a UX research plan change after research starts?

Yes. Record justified changes to recruitment, procedure or questions, then preserve the final version as an accurate account of the completed study.

Choose one unresolved decision and complete the matrix before booking research. If the team cannot name the action that each outcome would trigger, sharpen the decision first.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://blog.glasgow.works/services/).

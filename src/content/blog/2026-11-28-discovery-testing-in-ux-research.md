---
title: "Discovery Testing in UX Research: What to Test First"
description: "Learn what to test before building, choose methods that fit your riskiest assumption, and separate discovery research from usability testing."
pubDate: 2026-11-28
updatedDate: 2026-11-28
readingTime: 8
slug: "discovery-testing-in-ux-research"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
hub: "product-discovery"
draft: false
heroImageAlt: "UX researcher and product team prioritising assumptions on a discovery testing matrix before building a feature"
tags:
  - "continuous discovery — early-stage discovery testing"
  - "discovery research vs usability testing"
  - "what to test in product discovery"
  - "early-stage concept testing"
  - "exploratory UX research"
---
## What discovery testing in UX research means

Discovery testing in UX research reduces uncertainty while you can still change the problem framing, audience, concept or direction. Its purpose is to inform a decision: proceed, adapt, pause or learn more.

It is not a single method or a request for general feedback. Depending on the question, it can include exploratory interviews, contextual observation, concept testing, lightweight demand tests and research with an early prototype. Nielsen Norman Group describes discovery as the stage for illuminating what a team does not yet know, including validating or discarding assumptions before building. [Source: Nielsen Norman Group](https://www.nngroup.com/articles/ux-research-cheat-sheet/)

Discovery testing sits within [product discovery](https://blog.glasgow.works/blog/product-discovery/): the wider work of deciding what is worth building and why. Treat the research as decision support, not as a hurdle an existing idea must clear.

## Discovery research vs usability testing: choose the question first

Start with the question, not the method. Discovery research asks whether a problem, audience or proposed direction is worth pursuing. Usability testing asks whether people can use a sufficiently defined interface, journey or workflow.

| If you need to learn… | Start with… |
| --- | --- |
| How people behave now, what frustrates them and which alternatives they use | Discovery research |
| Whether an idea is relevant and understandable | Concept or message testing |
| Whether people can complete a realistic task in a design | Usability testing |
| How one established experience compares with another | [competitive usability testing](https://blog.glasgow.works/blog/competitive-usability-testing/) |

Move to task-based usability testing when the concept has enough detail for participants to attempt realistic tasks. A low-fidelity prototype can be suitable when the question concerns sequence, labels or the information needed to act.

A positive reaction to an idea does not establish demand or task success. Someone may understand the proposed benefit but lack the need, authority or confidence to act. Equally, difficulty with a prototype task may indicate a design problem rather than a weak opportunity.

If you need to understand current behaviour and unmet needs, begin with exploratory UX research. If you need to assess task completion in an artefact, run evaluative research. Keep that distinction in view when comparing [AI product evals vs user testing](https://blog.glasgow.works/blog/ai-product-evals-vs-user-testing/): system performance and human understanding answer different questions.

## What to test before you build

Prioritise assumptions that would invalidate the direction if they proved wrong, especially where existing evidence is weak. GOV.UK advises teams not to test every assumption equally, but to focus on critical assumptions with limited evidence. [Source: GOV.UK](https://www.gov.uk/government/publications/the-magenta-book/test-and-learn-html)

Use this checklist to turn a feature idea into testable questions.

| Assumption type | Neutral question | Decision informed |
| --- | --- | --- |
| Problem and frequency | What situation creates this problem, and how often does it occur? | Whether the problem merits attention |
| Audience and context | Who encounters it, in what role and under which constraints? | Who to design for first |
| Current alternatives | How do people solve it now, including workarounds? | Whether there is a meaningful gap |
| Value and comprehension | What do people think this proposition offers, and why would it matter? | Whether to refine the proposition |
| Demand or willingness to act | What action would someone take to access this outcome? | Whether to test demand further |
| Feasibility and operations | Which policy, data, service or delivery constraints affect the experience? | Whether the direction is viable |
| Early interaction | Can people understand and progress through the proposed flow? | Whether to improve the design |

Avoid asking whether someone “would use” a feature in the abstract. Ask about a recent relevant situation, the process they follow now and what would need to change for the proposed option to become useful.

[Continuous discovery interviews](https://blog.glasgow.works/blog/continuous-discovery-interviews-product-teams/) can help build an ongoing picture of behaviour. Each round should still support a clear decision. Evidence may support proceeding, adapting, pausing or returning to problem exploration; it does not need to validate the original idea.

## Use the Discovery Test Selection Matrix

Use this matrix to make priorities visible. Score each assumption from 1 (low) to 5 (high) for impact if wrong, uncertainty, cost of being wrong and reversibility. Address assumptions that combine serious consequences, weak evidence and commitments that would be difficult to reverse. The scores prompt discussion; they are not precise measurements.

### Illustrative example: B2B reporting alerts

This fictional example concerns a proposed alert feature for people responsible for business reporting.

| Assumption | Impact | Uncertainty | Cost if wrong | Reversibility | Evidence held | Smallest suitable method | Participant criterion | Disconfirming signal | Decision |
| --- | ---: | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| Users frequently miss reporting changes that require action | 5 | 4 | 5 | 3 | Internal belief; no direct user evidence | Exploratory interviews with workflow mapping | People who regularly review reports | Recent examples show the issue is rare or existing alerts work adequately | Learn more |
| “Get alerted before a report changes” communicates useful value | 4 | 3 | 3 | 4 | Draft proposition only | [concept testing](https://blog.glasgow.works/blog/concept-testing/) with alternative messages | People affected by reporting changes | Participants interpret it differently or prefer another benefit | Adapt |
| Users can set an alert and act on it in a proposed flow | 4 | 3 | 4 | 4 | Low-fidelity prototype | Task-based usability sessions | People who would configure or receive alerts | Participants cannot find setup or explain what happens next | Adapt |

The first row tests the underlying problem before interface work begins. The second tests comprehension and relevance. The third becomes appropriate once the team has a tangible workflow.

For demand questions, [fake door testing](https://blog.glasgow.works/blog/fake-door-testing/) may suit an ethical live-product context. It can measure attempted actions, but those actions alone do not explain motivation or show that an eventual feature will solve the problem.

Copy this worksheet into a document or spreadsheet:

| Assumption | Impact if wrong (1–5) | Uncertainty (1–5) | Cost if wrong (1–5) | Reversibility (1–5) | Evidence held | Smallest suitable method | Participant criterion | Disconfirming evidence | Decision: proceed, adapt, pause or learn more |
| --- | ---: | ---: | ---: | ---: | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |

The matrix identifies the next learning step. It does not prescribe a universal sample size or a single pass-or-fail threshold.

## Match the method to the uncertainty

Define the decision and the evidence that would change it before recruiting participants or building a stimulus. Then choose the smallest method capable of producing that evidence.

Use exploratory interviews and contextual observation when uncertainty concerns the problem, workflow or context. Observation can surface practical constraints that reported behaviour may not reveal.

Use early-stage concept testing and message testing to investigate comprehension, relevance or comparative direction. Nielsen Norman Group describes concept testing as a method used early in discovery to understand whether a product idea meets users’ needs and expectations. [Source: Nielsen Norman Group](https://www.nngroup.com/articles/research-methods-glossary/) For proposition questions, see [message testing for value propositions](https://blog.glasgow.works/blog/message-testing-value-propositions/) and [message testing research](https://blog.glasgow.works/blog/message-testing-research/).

Use a fake-door test only where a live context can capture a behavioural demand signal ethically. It is unsuitable where the action would mislead people about access, availability or a consequential service.

Choose low-fidelity prototypes and task-based usability studies for questions about interaction, comprehension or workflow in a proposed experience. GOV.UK notes that observation, think-aloud tasks and short interviews can uncover confusion, workarounds and unexpected barriers. [Source: GOV.UK](https://www.gov.uk/government/publications/the-magenta-book/test-and-learn-html)

## Illustrative walkthrough: from assumption to changed direction

We do not have a substantiated, permissioned Glasgow Research engagement example for this article. The following walkthrough is hypothetical, not a client case study.

A team must decide whether to invest in a reporting-alert feature. Its riskiest assumption is that report owners discover changes too late to act. The team begins with exploratory interviews among people who manage recurring reports, asking for recent examples and mapping the current workflow.

Suppose those conversations indicate that people usually see changes in time but cannot judge their significance. The team should adapt the direction from “more alerts” to “clearer change significance”. A later prototype test can assess whether people understand and configure those signals.

This sequence also defines its limitation. Interviews provide reported experiences and context; they do not establish future adoption. The next study should address the uncertainty that remains.

## Frequently asked questions

### What is discovery testing in UX research?

Discovery testing in UX research examines important product assumptions before commitment. Match the method to the uncertainty and the decision the evidence must inform.

### Is discovery research the same as usability testing?

No. Discovery research investigates problems, contexts and possible directions. Usability testing evaluates whether people can complete tasks in a specific design or prototype.

### What should you test before building a feature?

Test problem importance, audience and context, current alternatives, value proposition, demand signals and operational constraints. Once the idea is tangible, test the proposed task flow.

### How do you choose a discovery research method?

Start with the decision and the riskiest assumption supported by the weakest evidence. Define what would change the decision, then select the smallest suitable method.

Choose one proposed feature, complete the matrix with your team, and commission the next research activity it identifies before committing to design or development.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://blog.glasgow.works/services/).

---
title: "UX Research Screeners: Questions and Branching Logic"
description: "Write UX research screeners that qualify relevant experience without revealing the desired answers. Includes a filled B2B example, branching rules and a downloadable worksheet."
pubDate: 2026-07-14
updatedDate: 2026-09-13T14:51:29Z
readingTime: 4
slug: "screener-survey-best-practices-ux-research"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "A UX researcher reviewing a printed screener survey with branching logic and highlighted disqualification criteria"
tags:
  - "participant recruitment & panels"
  - "how to write a screener survey"
  - "participant screening criteria UX"
  - "screener questions for user research"
  - "how to screen research participants"
hub: "research-operations"
---

A research screener establishes whether a person has the experience needed for a study. It should identify relevant situations and participation requirements without teaching applicants how to qualify. It is not a test of how well someone can guess your preferred answer.

## Start with behavioural selection criteria

Define the study question before choosing demographics or job titles. For a study of invoice approvals, “worked in finance” is less precise than “personally prepared, reviewed or authorised an invoice during the relevant period”. Pick that period to match the product's real usage cycle.

[NN/g's guidance on selection criteria](https://www.nngroup.com/articles/selection-criteria/) explains why recruitment needs to connect with the research question. Translate each criterion into an observable experience, not a desirable opinion about your product.

## A filled B2B screener

The following is a **hypothetical study of a web-based invoice approval flow**. It is a starting template, not a validated screener or a universal eligibility policy.

| Question shown to the applicant | Why ask it? | Researcher-only decision rule |
|---|---|---|
| Which of these activities have you personally done in the past three months? Include preparing, checking, approving and none of these | Establish recent involvement without a qualifying yes/no question | Continue for the activities needed by this study; do not reveal which answers qualify |
| Thinking about the most recent time, what happened from receiving the invoice to its next step? | Check concrete experience and sequence | Review relevance; allow concise answers and accessible alternatives |
| What part was your responsibility, and who handled the next step? | Distinguish an approver from someone observing a colleague | Route to the role quota; a job title alone does not decide eligibility |
| Which tools or channels did you use? | Establish workflow context | Compare with the study's supported contexts, not a single preferred brand |
| Which device would you normally use for this task? | Plan a realistic session | Route or schedule an appropriate setup |
| Is there anything we should arrange to make participation accessible? | Identify participation needs | Arrange support; do not equate access needs with ineligibility |
| After reading the session information, would you like to participate? | Establish willingness separately from experience | Obtain consent through the study's agreed process |

Three months is an illustrative window. A task performed weekly may need a shorter recall period; an annual procurement decision may need a longer one. Download the [screener worksheet](/downloads/ux-screener-worksheet.csv) and adapt the question, rationale and branching rule together.

## Apply branching without leaking the target profile

Use an invitation that explains the general research purpose without listing every qualifying characteristic. [NN/g's screening-question guidance](https://www.nngroup.com/articles/screening-questions-select-research-participants/) discusses the role and limitations of question formats.

For the example above, the researcher workflow is:

1. If the person has no relevant recent activity, end politely.
2. If the activity is relevant, assign the appropriate role rather than treating every applicant as an approver.
3. If a response is ambiguous, offer a short clarification before rejecting it.
4. If the relevant quota is full, explain that the study is full for that group; do not suggest that the person failed.
5. Confirm scheduling, access requirements and consent separately from eligibility.

Keep answer options balanced and include plausible alternatives, “none” and “not sure” where appropriate. Do not require a named tool unless that tool is genuinely essential to the question.

## Check consistency without creating an exclusion machine

A plausible open-text answer does not establish authenticity, and an awkward one does not establish fraud. Language fluency, disability, device constraints and unfamiliarity with research can affect how someone responds.

Compare the activity, sequence and responsibility answers. Ask a proportionate clarification when something does not fit. Do not automatically reject people because they share an IP address, use assistive technology or respond quickly. For suspected low-quality responses, use the [survey quality guide](/blog/how-to-detect-fake-survey-respondents/) and document reasons for exclusions.

## Pilot before opening recruitment

Try the screener with people whose eligibility is already understood, including a borderline case. Check whether the questions route them correctly and whether any wording reveals the desired answer. Review the actual text that applicants see after each branch.

Record screener version, recruitment channel, role, decision and reason. Keep only data needed for the study, with appropriate access and retention. [GOV.UK's participant-recruitment guidance](https://www.gov.uk/service-manual/user-research/find-user-research-participants) is a useful operational reference.

## Use the result to improve the study

If almost nobody qualifies, investigate the criteria and channel before loosening the screener. If people qualify but cannot discuss the task, examine whether the criteria captured direct experience. If a group is systematically missing, change how you reach it.

For specialist audiences, see [recruiting B2B participants](/blog/recruiting-b2b-interview-participants/). Record the screening decisions in your [research plan](/blog/user-research-plan-template/) and carry the sample's limitations into the final report.

<!-- gr:footer -->
---

Glasgow Research helps B2B SaaS teams turn research into product decisions. [Discuss your study](/services/).

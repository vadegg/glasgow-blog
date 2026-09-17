---
title: "How to Detect Fake Survey Respondents in Research"
description: "Review suspicious survey responses using available metadata, a documented worksheet and sensitivity checks. Separate review flags from evidence of fraud."
pubDate: 2026-07-19
updatedDate: 2026-09-17T07:11:35.613Z
readingTime: 5
slug: "how-to-detect-fake-survey-respondents"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "Researcher reviewing survey response data on a laptop, flagging suspicious respondent patterns"
tags:
  - "surveys & questionnaire design"
  - "survey fraud detection for researchers"
  - "bot respondents in online surveys"
  - "data quality checks for research surveys"
  - "screening out fraudulent survey responses"
hub: "research-operations"
---

Review suspected fake survey responses by combining available evidence, checking alternative explanations and recording a decision for each case. A fast response, shared IP address or polished paragraph is a reason to investigate, not proof of a bot or dishonest participant.

This guide covers **manual review of an exported dataset**. For controls that must exist before responses are collected, use the separate [survey collection and bot-control workflow](/blog/survey-bots-fake-responses-ux-research/).

## Start with the data you actually have

Keep an access-controlled original export and create a review copy with stable response IDs. List the fields available, what each field measures and which checks your dataset can support.

For example, the [Google Forms API response schema](https://developers.google.com/workspace/forms/api/reference/rest/v1/forms.responses) includes response IDs, submission timestamps, answers and email if collected. It does **not expose respondent IP addresses, browser fingerprints or device IDs**. Its submission timestamp is not a survey start time, so it cannot by itself establish completion duration. Additional instrumentation would be a separate implementation.

Other products and plans expose different fields. Inspect their current documentation and a sample export before planning a check. Treat a missing duration or device field as unavailable, not as zero or as evidence of suspicious behaviour.

## Separate eligibility, response quality and fraud

An ineligible participant, a misunderstood question, an interrupted session and deliberate fabrication require different interpretations. A dataset may need an exclusion without establishing the respondent's intent.

[Pew Research Center's study of bogus online responses](https://www.pewresearch.org/methods/2020/02/18/assessing-the-risks-to-online-polls-from-bogus-respondents/) found differences across the sample sources it tested and explains the difficulty of distinguishing bots from people answering carelessly. Its findings are tied to that study's population, recruitment and field period; they are not a universal contamination rate for your UX survey.

Define eligibility and review rules before interpreting the substantive findings. Preserve exceptions and reasons when a rule proves inappropriate. Use [behavioural screening criteria](/blog/screener-survey-best-practices-ux-research/) and review whether [question wording](/blog/survey-design-best-practices-ux/) itself caused confusion.

## Use a signal as a review question

| Signal, if available | What to investigate | Plausible alternative explanation |
|---|---|---|
| Short recorded duration | Whether the person saw the relevant questions and followed the route | Short branching path, familiarity or a timing implementation error |
| Identical matrix answers | Whether agreement across those particular statements is implausible | The person genuinely holds the same view across related items |
| Repeated or generic open text | Relevance to the question and consistency with the rest of the account | A short but valid answer, copied prompt wording or language support |
| Conflicting role or experience answers | Whether the questions refer to the same event and period | Multiple responsibilities, a role change or ambiguous wording |
| Shared IP or device signal | Whether independent records establish a duplicate submission | Shared workplace, network, household or equipment |
| Repeated recruitment identifier | Whether the identifier is intended to represent a single participation | A technical retry, resumption or an integration error |

Compare duration against the relevant survey route and pilot conditions. Do not apply a universal “half the median” cutoff. An unusually long session may simply have been interrupted. Neither grammatical fluency nor an AI-detector label establishes authenticity.

Read open-ended answers in context and inspect apparent contradictions before excluding them. The [qualitative analysis workflow](/blog/how-to-analyse-survey-data-qualitatively/) can help organise that review. Several correlated signals may reflect the same underlying cause, so adding flags together does not automatically produce a validated fraud probability.

## Keep a review log with defensible decisions

Download the [survey response review worksheet](/downloads/survey-response-review.csv). Its filled rows are **hypothetical examples**, not records from a client study. Replace them with your own response IDs and restricted evidence references; avoid copying unnecessary participant information into the log.

| Example | Evidence and verification | Decision in this example | Reason |
|---|---|---|---|
| example-001 | Short route and identical matrix answers; reviewer checks that the answers are relevant and mutually compatible | Retain | The flags have an adequate explanation |
| example-002 | Same single-participation invitation appears twice; collection log confirms one completed response was exported twice | Remove the duplicate copy from analysis | This is a verified processing duplicate, not proof of respondent fraud |
| example-003 | Role answers conflict; wording may refer to different periods and clarification is unavailable | Mark unresolved | Evidence does not justify an authenticity claim |

Keep the review signal separate from the final decision. Record the rule version, reviewer, evidence checked, reason and whether the response enters the primary analysis. Give difficult cases a second review where practical. A reviewer should be able to understand an exclusion without knowing whether it helps the expected conclusion.

## Check what exclusions change

Report received responses, verified duplicates, eligibility exclusions, quality exclusions, unresolved cases and the final analytical sample. Use non-overlapping categories or explain overlaps so the counts reconcile.

Compare coverage of the intended roles and situations before and after cleaning. For unresolved records, examine whether reasonable inclusion and exclusion choices change the finding. Describe that sensitivity alongside the primary result instead of hiding uncertainty behind a single clean total.

Weighting is not a repair for fabricated answers. A weighting plan can adjust for specified sampling imbalances under assumptions; it cannot make an invented account truthful. Do not retain a known-invalid response just to preserve a demographic quota.

## Decide whether additional fieldwork is needed

The decision depends on which groups were affected, what evidence remains and the precision or coverage required by the research question. A small number of exclusions concentrated in a critical subgroup may matter more than a larger number spread across the sample.

There is no universal contamination percentage that automatically requires re-fielding, and no guaranteed time in which a spreadsheet review catches most fraud. Document why the remaining evidence is adequate, why a conclusion needs qualification, or which recruitment gap must be filled. Carry that decision into your [research operations](/blog/research-operations/) record.

<!-- gr:footer -->
---

Glasgow Research helps B2B SaaS teams turn research into product decisions. [Discuss your study](/services/).

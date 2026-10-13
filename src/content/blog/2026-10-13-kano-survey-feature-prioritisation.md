---
title: "How to Run a Kano Survey for Feature Prioritisation"
description: "Learn how to design, analyse and interpret a Kano survey, with a worked example that turns paired responses into defensible roadmap decisions."
pubDate: 2026-10-13
updatedDate: 2026-10-13
readingTime: 8
slug: "kano-survey-feature-prioritisation"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
hub: "insight-to-impact"
draft: false
heroImageAlt: "Kano survey workflow from paired feature questions through the evaluation matrix to a roadmap decision"
tags:
  - "opportunity prioritisation"
  - "Kano survey questions"
  - "Kano model questionnaire"
  - "Kano evaluation matrix"
  - "Kano analysis for product features"
---
## What a Kano survey can—and cannot—decide

How to run a Kano survey for feature prioritisation starts with a narrow question: how would a feature’s presence or absence affect customer satisfaction? Kano does not estimate delivery effort, revenue, technical risk or strategic fit.

The model uses a two-dimensional view of quality rather than assuming that more of every feature always increases satisfaction ([Japanese Society for Quality Control](https://www.jstage.jst.go.jp/article/quality/14/2/14_KJ00002952366/_article)).

| Category | Meaning |
|---|---|
| Must-be (M) | Expected as standard. Absence causes dissatisfaction; presence may not delight. |
| One-dimensional (O) | Better delivery raises satisfaction and absence lowers it. Also called Performance. |
| Attractive (A) | Unexpected value. Presence delights; absence does not normally disappoint. |
| Indifferent (I) | Makes little difference to satisfaction. |
| Reverse (R) | Some respondents prefer the feature not to exist. |
| Questionable (Q) | The paired answers conflict or suggest misunderstanding. |

Use Kano for externally meaningful feature concepts where customer reaction is genuinely uncertain. It works alongside [opportunity prioritisation in product research](https://blog.glasgow.works/blog/opportunity-prioritisation-product-research/) and a wider process for [turning insight into impact](/blog/insight-to-impact/).

Do not use it to rank technical debt, justify a predetermined roadmap or compare vague ideas that participants cannot picture.

## Step 1: Choose features, participants and segments

Start with one roadmap decision. For example: which self-service support features should we validate next? Include features that users can understand, imagine using and assess independently.

Describe one stable concept at a time: its context, behaviour and user value. Keep the wording neutral. Careful feature descriptions are central to a useful study ([GitLab Handbook](https://handbook.gitlab.com/handbook/upstream-studios/experience-research/kano-model/)). Split bundles before fieldwork. “Custom alerts with sharing and automated reports” is three concepts, not one.

Recruit target users or credible prospects. Define segments before analysis when they may change the decision, such as role, usage frequency or account type. Set targets from the precision required, audience diversity, planned comparisons and expected exclusions; no universal response count suits every Kano survey.

Record eligibility criteria, segment definitions and usable base sizes in your [product research planning](/blog/product-research/). A segment difference without its underlying base is hard to interpret.

## Step 2: Write functional and dysfunctional question pairs

A Kano model questionnaire presents one concrete feature description, then asks about its presence and absence using the same five response options ([Microsoft Research](https://www.microsoft.com/en-us/research/articles/lots-of-ideas-but-not-sure-how-to-prioritize-the-kano-model-can-help/)).

- Functional: “How would you feel if [feature or outcome] were present?”
- Dysfunctional: “How would you feel if [feature or outcome] were absent?”

Use these responses consistently:

1. I like it
2. I expect it / it must be that way
3. I am neutral
4. I can tolerate it
5. I dislike it

This hypothetical example is suitable for testing:

> **Feature:** On the order-history page, users can download a CSV file of their organisation’s orders for a selected date range.  
> **Functional:** How would you feel if you could download this order history as a CSV file?  
> **Dysfunctional:** How would you feel if you could not download this order history as a CSV file?

Avoid: “How would you feel if our industry-leading Smart Export tool gave you beautiful CSV reports and automatically emailed them to your team?” It is leading, branded and double-barrelled. The dysfunctional question must describe absence, not poor implementation.

Randomise feature blocks where the platform permits, while keeping each pair together. Pretest comprehension and response-option interpretation through [cognitive interviewing for survey pretesting](https://blog.glasgow.works/blog/cognitive-interviewing-survey-pretesting/).

## Step 3: Pilot, field and clean the survey

Pilot the full questionnaire with target participants. Check completion time, drop-off, repeated patterns, contradictory answers and comments that reveal uncertainty.

Keep Reverse and Questionable classifications visible. High Questionable counts may indicate unclear wording or misunderstanding of the paired format. Inspect Reverse responses by segment: they can reveal a real preference conflict.

Apply documented checks for inattentive or fraudulent responses, including the practices in [detecting and preventing fake survey responses](https://blog.glasgow.works/blog/fake-survey-responses-detection-prevention/). Record every exclusion and retain an untouched raw export beside the analysis file.

## Step 4: Classify every response with the Kano evaluation matrix

Map each functional–dysfunctional pair through the Kano evaluation matrix. Rows are functional answers; columns are dysfunctional answers.

| Functional \ Dysfunctional | Like | Expect | Neutral | Can tolerate | Dislike |
|---|---:|---:|---:|---:|---:|
| Like | Q | A | A | A | O |
| Expect | R | I | I | I | M |
| Neutral | R | I | I | I | M |
| Can tolerate | R | I | I | I | M |
| Dislike | R | R | R | R | Q |

For the hypothetical CSV feature, a functional **Like** and dysfunctional **Dislike** maps to **O**; **Like** plus **Neutral** maps to **A**; and **Expect** plus **Dislike** maps to **M**. The matrix is a coding rule, not a judgement call.

A reproducible worksheet begins with response rows:

| Respondent | Segment | Functional | Dysfunctional | Matrix output |
|---|---|---|---|---|
| 01 | Frequent user | Like | Dislike | O |
| 02 | Frequent user | Like | Neutral | A |
| 03 | Occasional user | Expect | Dislike | M |
| 04 | Occasional user | Like | Like | Q |

Tally A, O, M, I, R and Q for each feature. Report the full distribution, not only the mode. Repeat it for planned segments where usable bases support interpretation. An overall mode can conceal different reactions among frequent and occasional users.

## Step 5: Calculate category strength and satisfaction coefficients

The following synthetic teaching data are not research findings.

| Kano category | Count | Percentage of 50 responses |
|---|---:|---:|
| Attractive (A) | 18 | 36% |
| One-dimensional (O) | 12 | 24% |
| Must-be (M) | 6 | 12% |
| Indifferent (I) | 10 | 20% |
| Reverse (R) | 2 | 4% |
| Questionable (Q) | 2 | 4% |
| **Total** | **50** | **100%** |

Attractive is the mode and One-dimensional is the runner-up. Category strength is the gap between the most and second-most frequent classifications ([Journal of Retailing and Consumer Services](https://epub.uni-bayreuth.de/8885/1/1-s2.0-S0969698925003753-main.pdf)): `36% − 24% = 12 percentage points`.

For counts in a spreadsheet:

`=MAX(A_count,O_count,M_count,I_count,R_count,Q_count)/Total-LARGE({A_count,O_count,M_count,I_count,R_count,Q_count},2)/Total`

Check first that `=A_count+O_count+M_count+I_count+R_count+Q_count` equals the usable response total.

Better and Worse describe the direction of satisfaction effects: `Better=(A+O)/(A+O+M+I)` and `Worse=-(O+M)/(A+O+M+I)` ([Center for Quality of Management Journal](https://studylib.net/doc/13322921/c--q-m)).

- `Better = (18+12)/(18+12+6+10) = 0.65`
- `Worse = -(12+6)/(18+12+6+10) = -0.39`

Reverse and Questionable responses remain visible for quality control but sit outside these denominators. These coefficients are not probabilities, revenue forecasts or proof of demand. For automated discrete and continuous categorisation, see the comparison guide from [Folding Burritos](https://foldingburritos.com/blog/kano-model/); retain the auditable response-to-decision path shown here.

## Step 6: Turn Kano results into a roadmap decision

Kano analysis informs a roadmap decision; it does not make one automatically. Combine it with strategy, evidence confidence, effort and dependencies.

| Decision factor | Completed record for the synthetic CSV feature |
|---|---|
| Modal category / runner-up | Attractive / One-dimensional |
| Category strength | 12 percentage points |
| Better / Worse | 0.65 / -0.39 |
| Segment check | Compare frequent and occasional users before commitment |
| Strategic fit | Supports self-service administration |
| Evidence confidence | Moderate: leading categories are mixed |
| Effort and dependencies | Estimate engineering effort; check permissions and order-data access |
| Roadmap decision | Validate next |

Use **build or protect** when satisfaction evidence is clear and delivery conditions support it. Use **validate next** when categories are mixed, segments differ or the concept needs sharper definition. Use **defer** when fit, evidence or dependencies are not ready. Use **do not prioritise** when the feature is largely Indifferent or conflicts with strategy.

Archive the questionnaire, raw export, coding matrix, formulas, segment cuts, assumptions and decision owner. If the remaining question is forced relative preference, use [MaxDiff analysis for feature prioritisation](https://blog.glasgow.works/blog/maxdiff-analysis-feature-prioritisation/). For feature and price trade-offs, use [conjoint analysis for feature prioritisation and pricing](https://blog.glasgow.works/blog/conjoint-analysis-feature-prioritisation-pricing/).

## Frequently asked questions

### What questions do you ask in a Kano survey?

For each feature, ask how the respondent feels if it is present and if it is absent, using the same five response options.

### How many responses does a Kano survey need?

There is no universal number. Set the target from required precision, audience heterogeneity, planned segment comparisons and expected exclusions.

### How do you calculate a feature’s Kano category?

Map every paired response through the evaluation matrix, tally A, O, M, I, R and Q, then report the mode, runner-up and category strength.

### What is category strength in Kano analysis?

It is the percentage-point difference between the most frequent and second-most frequent classifications. A small gap signals an ambiguous or mixed result.

### Should Must-be features always be built first?

No. Kano describes satisfaction effects, not feasibility or business priority. Consider strategy, confidence, effort, dependencies and segment relevance.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://blog.glasgow.works/services/).

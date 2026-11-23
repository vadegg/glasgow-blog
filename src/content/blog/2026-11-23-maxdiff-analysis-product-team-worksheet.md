---
title: "MaxDiff Analysis: Product-Team Decision Worksheet"
description: "Plan a defensible MaxDiff survey and turn relative feature preferences into a clear product decision with a practical worksheet."
pubDate: 2026-11-23
updatedDate: 2026-11-23
readingTime: 8
slug: "maxdiff-analysis-product-team-worksheet"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
hub: "ux-research-methods"
draft: false
heroImageAlt: "Product team reviewing a MaxDiff feature-prioritisation worksheet with best and worst choices"
tags:
  - "surveys & questionnaire design — stated-preference prioritisation"
  - "MaxDiff survey"
  - "best-worst scaling"
  - "feature prioritisation research"
  - "MaxDiff analysis example"
---
## What MaxDiff analysis answers for product teams

A roadmap is difficult to defend when stakeholders use different definitions of priority. MaxDiff analysis gives you a structured way to compare relative preference within one defined list.

MaxDiff, also called best-worst scaling, presents respondents with small subsets of items and asks them to select the best and worst options. It can rank features, messages and claims. [Qualtrics](https://marketing-prod.qualtrics.com/support/conjoint-project/getting-started-conjoints/getting-started-maxdiff/maxdiff-analysis-white-paper/) describes this subset-and-choice approach, while [Cambridge University Press](https://www.cambridge.org/core/books/abs/bestworst-scaling/preface/5E9A0A4370A476A50DCB42EE7B8810D8) identifies MaxDiff as a name used for best-worst scaling.

The result is a relative priority signal. It does not, on its own, establish willingness to pay, delivery effort, feasibility or absolute demand. Combine it with product strategy, qualitative evidence and engineering constraints.

If you are still deciding which research approach fits the question, see [UX research methods](/blog/ux-research-methods/).

## Use MaxDiff only when the decision fits

Use MaxDiff to prioritise a finite list of comparable, standalone options. Those options might be workflow improvements, feature concepts, customer benefits or product claims.

Start with one test: can every respondent assess every item against the same criterion? If not, revise the question or choose another method.

| Decision question | Suitable method |
|---|---|
| Which of six clearly understood items comes first? | Simple ranking |
| Which items have the strongest relative priority in a longer comparable list? | MaxDiff |
| Which combination of features and price creates the strongest trade-off? | Conjoint analysis |

The prompt needs one evaluative criterion. “For your daily work, which improvement would be most valuable and least valuable?” is interpretable. “Which is most important, easiest to use and most likely to buy?” asks three questions at once.

The questionnaire still needs careful design. Use [survey design best practices for UX research](https://blog.glasgow.works/blog/survey-design-best-practices-ux/) while drafting questions. If respondents may interpret an item differently from your team, use [cognitive interviewing for survey pretesting](https://blog.glasgow.works/blog/cognitive-interviewing-survey-pretesting/).

## Build a MaxDiff survey brief with the worksheet

Complete this worksheet before programming the survey. This completed fictional example is for a B2B SaaS team deciding which workflow improvements to investigate in its next planning cycle.

| Worksheet field | Completed fictional example |
|---|---|
| Decision statement | Decide which workflow improvements warrant discovery and delivery sizing next quarter. |
| Decision owner | Product director |
| Decision deadline | Planning review, 18 June |
| Respondents | Current weekly users who create, review or approve work in the platform |
| Eligibility | Used the relevant workflow in the past 90 days |
| Evaluation prompt | “For your daily work, which improvement would be most valuable and which would be least valuable?” |
| Planned segments | Primary role and workflow frequency |
| Action owner | Product manager |

Give each item its own row. Alternatives should stand alone, be mutually exclusive and sit at a comparable level of abstraction.

| Avoid | Use instead |
|---|---|
| Better reporting | Export a scheduled report to CSV |
| Faster approvals and notifications | Receive an alert when an approval is overdue |
| Improve collaboration | Assign a task to a named colleague |

The fictional list contains 12 workflow improvements: save filtered views; duplicate a previous workflow; assign a task to a named colleague; receive overdue approval alerts; export scheduled reports to CSV; comment on a specific task step; see changes since last review; restore a prior version; bulk update task owners; create reusable workflow templates; search by customer reference; and set an approval deadline.

A MaxDiff score identifies items for further attention. It does not decide whether an item is technically feasible, commercially sensible or ready to build. Before fielding, hold a short stakeholder or qualitative review to remove duplicates and bundled ideas. This work belongs within [product discovery](/blog/product-discovery/); MaxDiff does not replace it.

## Turn the item list into a defensible MaxDiff design

The worksheet defines the decision; it does not create the experimental design. Use appropriate software or work with a statistician to generate task sets.

Before fielding, check that:

- Each task presents a manageable subset of the full list.
- Every item receives comparable exposure.
- Item pairs appear together with reasonable balance.
- Option order is randomised.
- A pilot tests comprehension, completion time and fatigue.
- The generated design and QA export are saved with the research record.

Two design checks are useful. Item frequency is the number of times each alternative appears. Pairwise frequency is how often two alternatives appear together. [Displayr](https://displayrdocs.zendesk.com/hc/en-us/articles/8115234591247-Marketing-MaxDiff-Experimental-Design) recommends checking both measures.

There is no universal task count or subset size. Pilot a manageable configuration with the intended audience. If people struggle with wording or lose attention, revise the design. The appropriate configuration depends on the item list, audience and research context.

Keep the design, QA output and pilot notes in your [research operations](/blog/research-operations/) process. Another researcher should be able to see how the result was produced.

## Analyse relative preferences without overclaiming

Keep descriptive choice counts separate from model-based outputs. Research teams use different modelling approaches, so set the analysis plan before promising a particular score, model or software output.

Read the result as an ordering within the tested list and respondent population. If an item leads, respondents preferred it more often relative to the tested alternatives. That is not proof that it should be built.

Agree action rules before results arrive.

| Preference tier | Evidence to check next | Possible action | Owner | Decision date |
|---|---|---|---|---|
| Clear leaders | Delivery sizing, qualitative evidence, strategic fit | Fund discovery or build planning | Product manager | Planning review |
| Middle cluster | Feasibility, segment patterns, dependencies | Investigate or hold | Product and design leads | Planning review |
| Low relative priorities | Future strategy, changed customer need | Defer and document a revisit condition | Product manager | Planning review |

Pre-specify meaningful segments, such as role or workflow frequency, and report the base size for every group. Treat small apparent differences as directional unless the analysis supports a stronger conclusion.

Standard MaxDiff results are relative rather than absolute. [Sawtooth Software](https://content.sawtoothsoftware.com/assets/fd59aab3-ce6e-43ee-ba4a-d5022d42e415) identifies this relative-scaling limitation. If a decision needs an absolute threshold, add calibration or a follow-up evidence step. A high rank alone does not demonstrate absolute demand.

Move findings through an [insight to impact](/blog/insight-to-impact/) process. Where the sample needs adjustment, consider [survey weighting and raking](https://blog.glasgow.works/blog/survey-weighting-raking-market-research/).

## Worked MaxDiff analysis example: from choices to a roadmap conversation

In the fictional worksheet, eligible weekly users assess the 12 normalised workflow improvements against the same value prompt. The team agrees its action rules before reviewing results.

An illustrative output might place reusable workflow templates and overdue approval alerts among the clear leaders. Restore a prior version, scheduled CSV exports and saved filtered views might form a middle cluster. Bulk owner updates and search by customer reference might sit among lower relative priorities.

This illustrative ranking is not a build commitment. The team can validate leaders with qualitative evidence and delivery sizing. It can check whether middle-cluster items differ meaningfully by role before describing one as niche, then record deferred items with conditions for revisiting them.

Before the roadmap conversation, retain:

- Final item wording and respondent prompt
- Recruitment criteria and exclusions
- Design QA export and pilot notes
- Analysis assumptions and result tables
- Final decision log, owners and revisit conditions

Fieldwork quality also matters. Include appropriate checks, such as those covered in [how to detect fake survey respondents](https://blog.glasgow.works/blog/how-to-detect-fake-survey-respondents/).

## MaxDiff survey pre-field checklist

Name the decision. Normalise the item list. Define the respondent and one evaluation prompt. Generate and QA the design. Pilot it. Set analysis, segment and action rules. Then field.

Do not field if items overlap, answer different questions, or no stakeholder can state which decision the findings will change. For the wider method, see the [MaxDiff analysis for feature prioritisation guide](https://blog.glasgow.works/blog/maxdiff-analysis-feature-prioritisation/).

## Frequently asked questions

### What is MaxDiff analysis?

MaxDiff analysis is a best-worst scaling approach. Respondents repeatedly select the most and least preferred item from subsets of a list. Their choices produce relative priorities for the tested alternatives.

### How is MaxDiff different from conjoint analysis?

MaxDiff compares standalone items against one stated criterion. Conjoint analysis suits questions about combinations of attributes and levels, often including price.

### Can MaxDiff tell us which feature to build?

No. It provides relative customer preference, not feasibility, strategic fit, risk or absolute demand. Combine the result with those inputs before making a build decision.

### How should product teams prepare MaxDiff items?

Write mutually exclusive, standalone alternatives at a comparable level of abstraction. Use one consistent prompt, then remove duplicate and double-barrelled items before generating the design.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://blog.glasgow.works/services/).

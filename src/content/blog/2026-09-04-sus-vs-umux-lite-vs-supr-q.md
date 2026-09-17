---
title: "SUS vs UMUX-Lite vs SUPR-Q: Which One to Use"
description: "Compare SUS, UMUX-Lite and SUPR-Q by constructs, scales and study design. Choose a measure for competitor comparisons, website benchmarks or repeated tracking."
pubDate: 2026-09-04
updatedDate: 2026-09-17T07:14:37.146Z
readingTime: 6
slug: "sus-vs-umux-lite-vs-supr-q"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "Comparison of SUS, UMUX-Lite and SUPR-Q usability questionnaires by length, scope and benchmark"
tags:
  - "surveys & questionnaire design (standardised UX metrics)"
  - "standardised usability metrics"
  - "SUS score interpretation"
  - "UMUX-Lite"
  - "SUPR-Q"
hub: "ux-research-methods"
---

Choose SUS, UMUX-Lite or SUPR-Q by the experience you need to measure, the available questionnaire space and the comparison you intend to make. All three capture reported perceptions. None replaces observing whether people can complete the task.

**SUS can be used to compare competing products.** SUPR-Q is relevant when you want broader website-experience measures and, if licensed, comparison with its normative website database. Those are different study requirements.

## Compare the instruments and their outputs

| Instrument | Items and response scales | What it measures | What to record |
|---|---|---|---|
| SUS | 10 items; five-point agreement | Perceived usability | Instrument version, scoring method, mean and uncertainty |
| UMUX-Lite | 2 items; seven-point agreement in the original version | Perceived usefulness and ease of use | Exact wording, scale and whether the score is transformed or used to estimate SUS |
| SUPR-Q | 8 items; seven five-point items and one 0–10 likelihood-to-recommend item | Website usability, trust, appearance and loyalty | Raw scoring procedure and, where used, the normative database and percentile comparison |

Select the instrument within your [UX research method](/blog/ux-research-methods/) and specify when participants answer it. Post-study ratings, an intercept from established users and a general retrospective survey have different contexts; a standard questionnaire does not erase those differences.

## SUS: perceived usability and a published reference distribution

The System Usability Scale has positively and negatively worded items. Apply the appropriate reverse scoring and transformation to obtain a 0–100 score. Alternating wording does not guarantee attentive responses or prevent straight-lining.

A SUS score is not a percentage of usability. MeasuringU's [guide to interpreting SUS](https://measuringu.com/interpret-sus-score/) describes a historical reference mean of about 68 and the distinction between raw scores, percentiles and grades. A percentile describes standing within the chosen reference distribution; it is not a universal pass mark for every product.

SUS can support a comparison between versions, products or competitors when the study conditions support that comparison. Define the tasks, participant groups, experience and study design. A change in the sample or tasks can change a score even when the interface has not changed.

## UMUX-Lite: a shorter measure with an explicit scoring convention

UMUX-Lite uses two items concerning whether the system meets requirements and is easy to use. Its original version uses seven-point agreement scales. State the wording and scale you actually administer, particularly if you adopt a modified questionnaire.

Published work has related UMUX-Lite scores to SUS, but an estimated SUS value is not a directly collected SUS score. MeasuringU's [account of the move from UMUX-Lite to UX-Lite](https://measuringu.com/from-umux-lite-to-ux-lite/) explains changes to wording, response scales and transformations. UX-Lite and the original UMUX-Lite should not be silently treated as the same instrument.

Use a shorter instrument when questionnaire space or repeated measurement makes length consequential. Keep it consistent across waves. Do not claim that two questions diagnose the cause of a usability problem; use observed tasks and follow-up research for that.

## SUPR-Q: website experience and a licensed comparison database

SUPR-Q covers website usability, trust, appearance and loyalty. The [publisher's documentation](https://measuringu.com/product/suprq/) describes its eight items, use of the questions and licensing of the normative comparison tool. Check the current terms and the database's relevance to your website before budgeting for it.

The recommendation item has 11 options, from 0 to 10, while the other seven items use five-point scales. The documented overall raw-score calculation halves the recommendation score before averaging it with the other seven responses. Follow the specified procedure; averaging the unadjusted recommendation score with the others changes its contribution.

A percentile from the normative database describes relative standing in that database. Distinguish it from the raw score and from a direct comparison you have collected against selected competitors. SUPR-Q's website norms do not automatically generalise to hardware or every internal application.

## Choose the measure by the decision

| Decision | Suitable starting point | Check before proceeding |
|---|---|---|
| Compare perceived usability of two competing products | SUS, or a consistently specified shorter usability measure | Comparable users, tasks, exposure and a design appropriate to the comparison |
| Add a brief usability measure to an existing survey | UMUX-Lite | Exact version, response scale and scoring convention |
| Assess website trust and appearance alongside usability | SUPR-Q | Whether the constructs and website context fit the decision |
| Compare a website with an existing normative database | SUPR-Q's licensed tool where appropriate | Reference population, database coverage and current access terms |
| Track change across releases | Keep the chosen suitable instrument consistent | Stable measurement conditions and an adequate plan for uncertainty |

Length alone does not make SUS a better longitudinal measure or UMUX-Lite suitable only for a one-off pulse. Choose an instrument that measures the intended construct and maintain its wording, scoring and administration. If a change is necessary, document it and plan how the old and new series can be interpreted.

## Plan the sample for uncertainty and the comparison

For an estimate, plan the desired precision. For a comparison, specify the smallest difference that would affect the decision, expected variability, confidence level, statistical power and whether the same or different participants rate the alternatives. MeasuringU's [SUS comparison sample-size guide](https://measuringu.com/sample-sizes-for-sus-comparisons/) explains how those choices affect sample requirements.

There is no universal participant count that makes a score reliable for every purpose. Report the sample, recruitment, missing responses and uncertainty. A small qualitative usability study may expose useful problems without estimating a precise population score.

## Worked example: an onboarding and website review

This is a **hypothetical study plan**. A software team wants to compare the perceived usability of its onboarding with a competitor and understand website trust separately.

The team could run comparable onboarding tasks and administer SUS for the usability comparison. It would plan participant allocation and task order to address differences in experience and learning. If the website-level decision additionally concerns trust, appearance and loyalty, SUPR-Q may provide a suitable second measure; a licensed percentile comparison is optional if that is not the study's goal.

Record these as separate outcomes. If usability ratings improve while trust ratings do not, investigate the difference rather than assuming that a questionnaire establishes its cause. Connect the follow-up to [UX benchmarking](/blog/how-to-run-a-ux-benchmarking-study/) and [behavioural research](/blog/product-analytics-vs-user-research/).

## Review the measurement before reporting

Check item wording, response coding, reverse scoring where applicable, transformations and treatment of missing responses. Keep raw scores, percentiles and grades separate. Review [survey wording and response quality](/blog/survey-design-best-practices-ux/) without assuming that an identical answer pattern proves fraud.

Report what the instrument measured and the conditions under which it was collected. A clear account of those limits makes a comparison usable; a single score without its measurement context does not.

<!-- gr:footer -->
---

Glasgow Research helps B2B SaaS teams turn research into product decisions. [Discuss your study](/services/).

---
title: "How to Run a Customer Segmentation Research Study"
description: "Design customer segmentation research around a decision. Separate interview-based groups from quantitative clusters, plan validation and document uncertainty."
pubDate: 2026-09-03
updatedDate: 2026-09-17T07:11:35.640Z
readingTime: 6
slug: "how-to-run-a-customer-segmentation-research-study"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "Researcher grouping survey responses into distinct customer segments on a whiteboard with cluster charts"
tags:
  - "customer segmentation (market research)"
  - "customer segmentation research methods"
  - "needs-based segmentation"
  - "segmentation survey design"
  - "how to build customer segments from research"
hub: "product-research"
---

A customer segmentation research study should explain which groups need different product, service or marketing decisions, and provide evidence for that distinction. The design depends on whether you are exploring possible groups or estimating their prevalence in a defined market.

## State the decision and the population

Define who the study covers, the decision owner and the action a useful segmentation could change. A roadmap study might separate customers by the work they need to complete. A targeting study may also need variables that let sales identify and reach those groups.

Write a test for each proposed distinction: what would we do differently if these groups exist? If the answer is unclear, investigate the underlying need before commissioning a large survey. Place the study within the wider [product research programme](/blog/product-research/).

## Separate qualitative exploration from quantitative segmentation

| Approach | Working output | What it can support | What it does not establish on its own |
|---|---|---|---|
| Interviews and observation | Evidence-backed candidate needs and buying situations | Explanations, contradictions and hypotheses about meaningful groups | Market share or statistically validated clusters |
| Survey or behavioural model | A documented grouping based on specified variables | Comparisons and estimates under the sampling and modelling assumptions | Why a pattern exists or whether a team can serve it differently |
| Follow-up research | Revised descriptions, classification rules and tests of use | Whether the groups help answer the original decision | A permanent model that will remain valid after the market changes |

These approaches can be combined, but the evidence does not become interchangeable. Coding interviews into groups is not the same procedure as fitting a cluster model to a quantitative dataset.

## Discover the variables before writing a survey

Use interviews to reconstruct recent situations: the trigger, intended outcome, current workaround, constraints and alternatives. Include people who challenge the initial grouping. Separate what participants report from the researcher's interpretation.

Needs, behaviours and firmographics answer different questions. A company-size category may be directly relevant to procurement or service delivery; a shared need may span several company sizes. Choose variables because they can explain or operationalise the decision, not because one category is always superior.

Our documented qualitative work for an on-demand learning marketplace included **28 JTBD interviews** and identified **four candidate customer segments**. That account supports an interview-based segmentation example. Estimating the groups' prevalence in a market or testing statistical cluster stability would require a separate quantitative design.

## Design a survey and sample for the intended analysis

If the decision requires quantitative estimates, define the target population, sampling approach, variables and subgroup comparisons. Plan the sample around the model, expected variation, precision and recruitment constraints. A fixed rule such as “30 per segment” or “300–500 overall” does not guarantee stable clusters.

Pilot the questionnaire to check comprehension, response variation and burden. Revise confusing or redundant items rather than assuming a particular survey duration ensures quality. Keep segmentation variables distinct from descriptors used later to profile the groups, and retain the reasons for that choice.

Document recruitment channels, eligibility, exclusions and missing data. A model built from an accessible customer list does not automatically describe the whole prospective market. Simulated responses may help exercise analysis code, but do not establish the needs or prevalence of real customer groups.

## Fit and challenge the model

Choose a method appropriate to the data and question. For example, k-means groups numeric observations using distances to centres and requires a chosen cluster count; scaling and cluster shape matter. Hierarchical methods involve choices about distance and linkage. The [scikit-learn clustering guide](https://scikit-learn.org/stable/modules/clustering.html) explains these assumptions and their limitations.

Inspect distributions, missingness and correlated variables before fitting. Standardisation or dimensionality reduction may be appropriate, but neither should be an automatic preprocessing step without considering what the transformed variables mean.

Compare plausible alternatives and document why they were considered. A [silhouette score](https://scikit-learn.org/stable/auto_examples/cluster/plot_kmeans_silhouette_analysis.html) can help inspect separation and compactness for a fitted solution. It does not establish business usefulness or prove that natural customer types exist.

Assess sensitivity to reasonable choices of variables, preprocessing and fitting settings. Where the data support it, use a planned resampling or holdout procedure and define how clusters will be compared across fits. Splitting a small sample in half can leave both fits poorly supported; visual similarity alone is not a stability test.

## Review interpretability, actionability and uncertainty

Use a decision record for each candidate solution. The following entries are **hypothetical**, illustrating what to record rather than reporting measured customer segments.

| Candidate distinction | Evidence needed | Alternative explanation to examine | Decision before activation |
|---|---|---|---|
| Customers working to an external deadline versus routine users | Recent event accounts and relevant usage patterns | Both are the same people at different moments | Decide whether the unit is a customer or a situation |
| Teams needing external approval versus teams able to act alone | Accounts of actual approval steps | Company size is standing in for an unmeasured constraint | Test a classification rule based on the constraint |
| High-support versus self-directed users | Support context and task difficulty | Poor onboarding created the difference | Investigate the experience before treating it as a stable segment |

Record contrary cases and uncertain assignments. A small group may warrant attention because its need is consequential, even when it is not the largest commercial opportunity. Conversely, a mathematically distinct group may not require a different product or message.

## Turn findings into usable profiles

Give each group a plain-language name and describe its situation, needs, evidence, boundaries and uncertainty. Report market or revenue shares only where the data and sampling design support those estimates. Do not turn interview counts into population percentages.

Link descriptions to source material and explain contradictions. [Qualitative survey analysis](/blog/how-to-analyse-survey-data-qualitatively/) and [empathy mapping](/blog/empathy-mapping-ux-research/) can help organise the supporting accounts; they do not validate a statistical model. Use [journey mapping](/blog/b2b-customer-journey-mapping-research/) when the distinction depends on a stage in the customer's work.

If teams need to classify new accounts, build and test a practical assignment procedure. Evaluate ambiguous cases and allow an unknown or mixed assignment when the evidence is insufficient. Check performance on accounts not used to design the rule before treating it as reliable.

## Activate and revisit the segmentation

Assign an owner to each proposed change in product, messaging, support or targeting. State how the team will evaluate it and what would cause the segmentation to be revised. Conversion differences do not automatically prove that segment membership caused the outcome.

Revisit the model when the product, market, recruitment source or customer behaviour changes, or when classification stops supporting decisions. Choose the review schedule from those risks and the cost of being wrong, rather than a universal refresh interval.

<!-- gr:footer -->
---

Glasgow Research helps B2B SaaS teams turn research into product decisions. [Discuss your study](/services/).

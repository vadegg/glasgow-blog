---
title: "Survey Weighting and Raking: A Practical Guide"
description: "Learn how to select targets, rake survey data, trim extreme weights and diagnose whether weighting improves your market research estimates."
pubDate: 2026-11-15
updatedDate: 2026-11-15
readingTime: 8
slug: "survey-weighting-raking-market-research"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
hub: "ux-research-methods"
draft: false
heroImageAlt: "Survey weighting worksheet showing raking cycles, target margins, trimmed weights and effective sample size diagnostics"
tags:
  - "surveys & questionnaire design"
  - "raking survey data"
  - "iterative proportional fitting"
  - "survey weighting example"
  - "weight trimming"
---
## What survey weighting can—and cannot—correct

Survey weighting and raking for market research changes how much each respondent contributes to an estimate. It does not create respondents, repair a coverage gap or make an exploratory sample suitable for population inference.

Use weights where the achieved sample differs from a clearly defined target population and you have compatible population targets. Matching age or region margins does not prove that an attitude or behaviour estimate is unbiased. Useful adjustment variables should plausibly relate to both survey inclusion or response and the outcomes being estimated, as the [AAPOR methods report](https://aapor.org/wp-content/uploads/2023/01/AAPOR_Reassessing_Survey_Methods_Report_Final.pdf) explains.

Do not proceed if a required target category is absent, definitions cannot be aligned, or the sample was not designed for the intended inference. Address fieldwork causes first: [detect and reduce nonresponse bias](https://blog.glasgow.works/blog/nonresponse-bias-customer-surveys/).

## Choose the right weighting method

Choose the least complex method supported by the sample and benchmarks. Where selection probabilities are known and unequal, use design weights as the starting point. UK Government guidance states that design weights are the starting weights for rim weighting when they are used ([source](https://www.gov.uk/government/publications/survey-methods-and-technical-details/technical-report)).

| Method | Required input | Best use | Main risk |
|---|---|---|---|
| Design weighting | Known selection probabilities | Probability samples with unequal selection | Does not address nonresponse on its own |
| Post-stratification | Population counts for joint cells | A credible age × region table exists | Sparse or empty cells |
| Raking | Separate population margins | Reliable margins but no full joint table | Extreme weights or unsupported combinations |
| Nonresponse adjustment | Response-propensity data or cells | A documented sampling frame | Misses unobserved drivers |

Raking, rim weighting and iterative proportional fitting describe the same family of repeated adjustments ([Census Bureau and BLS technical paper](https://www.census.gov/housing/hvs/files/CPS-Tech-Paper-77.pdf)). Final weights can combine design, nonresponse and calibration adjustments; they are stages, not interchangeable labels.

Apply the same discipline used in [UX research methods](/blog/ux-research-methods/): select a method that fits the decision and available evidence.

## Select variables and population targets

Write the target population in one sentence before calculating anything. State eligibility, geography and reference period. A benchmark for all residents in one year is not automatically compatible with a survey of eligible adults in another.

Create a target-source register.

| Variable | Categories | Source URL | Period | Denominator | Recoding |
|---|---|---|---|---|---|
| Age | 18–34; 35+ | Public benchmark URL | Record it | Eligible adults | Record collapsed bands |
| Region | North; South | Public benchmark URL | Record it | Same population | Record mapping |

Prioritise accurately measured variables with credible targets and a plausible relationship to participation and key outcomes. Do not add every available demographic. Align survey categories with benchmark definitions before fieldwork where possible, inspect unweighted counts after any collapse, and document missing values. Use justified imputation, a missing category or documented exclusion; never silently discard cases.

Weighting cannot repair poor measurement. Test categories and response options through [survey design best practices](https://blog.glasgow.works/blog/survey-design-best-practices-ux/) and [cognitive interviewing for survey pretesting](https://blog.glasgow.works/blog/cognitive-interviewing-survey-pretesting/).

## Worked survey weighting example: rake two margins

This is a synthetic, spreadsheet-style worksheet. It contains 100 respondents and illustrative targets only; it is not an external population benchmark.

| Age | Region | Respondents | Positive responses | Positive rate | Starting weight |
|---|---|---:|---:|---:|---:|
| 18–34 | North | 10 | 2 | 20% | 1.000 |
| 18–34 | South | 20 | 8 | 40% | 1.000 |
| 35+ | North | 50 | 30 | 60% | 1.000 |
| 35+ | South | 20 | 16 | 80% | 1.000 |

The targets are 40% aged 18–34, 60% aged 35+, 50% North and 50% South. The unweighted positive result is 56%.

For each pass:

`adjustment factor = target proportion / current weighted proportion`

`new weight = existing weight × adjustment factor`

The starting age shares are 30% and 70%, so the first age factors are `40/30 = 1.333333` and `60/70 = 0.857143`. After that pass, the weighted North and South totals are 56.190 and 43.810. The first region factors are therefore `50/56.190 = 0.889831` and `50/43.810 = 1.141304`.

| Cell | Weight after age pass | Weight after region pass: cycle 1 |
|---|---:|---:|
| 18–34 / North | 1.333 | 1.186 |
| 18–34 / South | 1.333 | 1.522 |
| 35+ / North | 0.857 | 0.763 |
| 35+ / South | 0.857 | 0.978 |

The region pass fixes region margins but shifts age margins, so raking survey data repeats the passes using unrounded values.

| Cycle | Age factor: 18–34 | Age factor: 35+ | Region factor: North | Region factor: South | Largest residual |
|---|---:|---:|---:|---:|---:|
| 1 | 1.333333 | 0.857143 | 0.889831 | 1.141304 | 2.299 percentage points |
| 2 | 0.945648 | 1.039852 | 0.982794 | 1.017654 | 0.315 percentage points |
| Converged | Continue to the declared tolerance |  |  |  | Below tolerance |

At convergence, the approximate cell weights are 1.089, 1.455, 0.782 and 1.045. The weighted result is 54.0%:

`=SUMPRODUCT(weight_range, outcome_range)/SUM(weight_range)`

Keep full-precision weights, starting weights, targets, pass order and stopping tolerance. Raking repeatedly adjusts weights until specified weighted margins match their targets ([Pew Research Center](https://www.pewresearch.org/methods/2018/01/26/how-different-weighting-methods-work/)).

## Diagnose, trim or reject the weights

Target alignment is necessary, not sufficient. Review weight spread, effective sample size, subgroup support and sensitivity of priority estimates.

| Diagnostic | Raw | Raked | Illustrative trimmed and rescaled |
|---|---:|---:|---:|
| Largest target residual | 20.0pp | Below tolerance | Recalculate after trimming |
| Minimum weight | 1.000 | 0.782 | 0.802 |
| Maximum weight | 1.000 | 1.455 | 1.403 |
| Weight ratio | 1.00 | 1.86 | 1.75 |
| Weight CV | 0.000 | 0.258 | 0.231 |
| Kish unequal-weighting design effect | 1.000 | 1.066 | 1.053 |
| Effective sample size | 100.0 | 93.8 | 94.9 |
| Positive estimate | 56.0% | 54.0% | 54.2% |

Use these worksheet formulas:

`CV = STDEV.S(weight_range) / AVERAGE(weight_range)`

`design effect ≈ 1 + CV^2`

`effective sample size = unweighted n / design effect`

In this synthetic comparison, weights are capped at 0.8 and 1.4 before rescaling. Trimming reduces variability but can move margins away from their targets, a trade-off documented by [Pew Research Center](https://www.pewresearch.org/decoded/2020/03/26/weighting-survey-data-with-the-pewmethods-r-package/). There is no universal cap. Set a project-specific influence and precision rule, then retain the sensitivity results.

| Decision | Conditions |
|---|---|
| Release | Margins meet tolerance; cells have support; precision and estimate sensitivity are acceptable |
| Revise | A diagnosable issue permits defensible recoding, target correction or category collapse |
| Stop | Coverage gaps, absent categories or unsupported cells make population inference indefensible |

Check data quality before weighting: [detect fake survey respondents before weighting](https://blog.glasgow.works/blog/how-to-detect-fake-survey-respondents/).

## Interpret and report weighted market research

Report weighted percentages or means alongside unweighted respondent bases. A weighted total is not the number interviewed. Compare priority outputs across raw, raked and trimmed specifications; a large movement requires investigation, not an automatic claim that the weighted estimate is better.

For non-probability samples, raking does not create a probability sample, correct unmeasured selection differences or validate a conventional margin of sampling error. Your methodology note should record:

- target population, fieldwork period and sample source;
- starting weights, variables, benchmark URLs, dates and denominators;
- recodes and missing-data treatment;
- algorithm, pass order, tolerance and trimming rule;
- diagnostics, subgroup bases, sensitivity checks and limitations.

AAPOR disclosure standards call for an explanation of how weights were calculated, the variables used and the sources of weighting parameters ([source](https://aapor.org/standards-and-ethics/disclosure-standards/)). Weight closed-question estimates separately from open text, which needs its own approach to [analyse open-ended survey data qualitatively](https://blog.glasgow.works/blog/how-to-analyse-survey-data-qualitatively/).

## Survey weighting release checklist

**Population**

- [ ] Eligibility, geography and reference period are stated.
- [ ] Intended inference matches sample coverage.

**Targets and support**

- [ ] Sources, denominators and category mappings were independently checked.
- [ ] Every required category has unweighted sample support.
- [ ] Missing weighting variables have explicit treatment.

**Calculation and disclosure**

- [ ] Starting weights, recodes, pass order and tolerance are recorded.
- [ ] Full-precision weights and a versioned calculation record are retained.
- [ ] Weight range, CV, design effect, effective sample size and target residuals were reviewed.
- [ ] Raw, raked and trimmed priority estimates were compared.

Use the least complex defensible specification, and publish enough detail for another analyst to reproduce it.

## Frequently asked questions

### What is raking in survey weighting?

Raking is iterative proportional fitting: repeated weight adjustments to match known population margins when a full joint population table is unavailable.

### How is raking different from post-stratification?

Post-stratification uses known joint cells, such as age by region. Raking uses separate age and region margins and alternates adjustments until they align.

### Which variables should be used to weight a market research survey?

Use accurately measured variables with credible benchmarks and a plausible relationship to inclusion or response and important outcomes.

### When should survey weights be trimmed?

Consider trimming when extreme weights create unacceptable influence or precision loss. Compare target fit and priority estimates before and after trimming.

### Does raking make an opt-in survey representative?

No. It aligns measured margins but cannot repair unmeasured selection differences, coverage gaps or absent groups.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://blog.glasgow.works/services/).

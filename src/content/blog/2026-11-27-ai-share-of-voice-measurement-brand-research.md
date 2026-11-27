---
title: "Measure AI Share of Voice for Brand Research"
description: "Build a repeatable AI share-of-voice study that reveals how often your brand appears, competes and is recommended in AI answers."
pubDate: 2026-11-27
updatedDate: 2026-11-27
readingTime: 8
slug: "ai-share-of-voice-measurement-brand-research"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
hub: "insight-to-impact"
draft: false
heroImageAlt: "Researcher reviewing an AI brand share-of-voice worksheet with competitor mentions, citations and decision matrix"
tags:
  - "measuring research ROI & impact — AI visibility measurement"
  - "AI search visibility measurement"
  - "brand visibility in AI-generated answers"
  - "LLM brand tracking"
  - "generative engine optimisation measurement"
---
## What AI share of voice measures—and what it does not

AI share of voice measurement for brand research shows a brand’s observed presence in a declared sample of AI-generated answers. It is not market share, a search ranking or a traffic metric.

Define the sample before interpreting the result: prompt set, AI surface, market, language and run period. Then separate four outcomes:

- Answer completion: whether the surface returned an eligible answer.
- Brand mention: whether it named the brand.
- Explicit recommendation: whether it suggested choosing or considering the brand.
- Owned-domain citation: whether it displayed a citation to the brand’s domain.

These outcomes can diverge. A brand may be named without being cited, cited as a source without being recommended, or absent from an otherwise valid answer. Treat the results as evidence about the sampled answers, not as a universal score. This distinction matters when [measuring research impact](/blog/insight-to-impact/).

## Write the measurement contract before collecting answers

Use one prompt × one defined AI surface × one scheduled run as the unit of measurement. Write the contract before collection and keep it stable across the baseline.

Record brand aliases, a fixed competitor cohort, market, language, account state where relevant, date window, retry rule and eligibility rule. A Research Square audit reports that results are sensitive to paraphrasing, query language and the number of draws, so the sampling and reporting protocol needs to be explicit ([Research Square](https://assets-eu.researchsquare.com/files/rs-11390685/v1/7a35ad53-1e7d-410f-9103-19f868753dbe.pdf?c=1792393038)). A comparable guide also recommends freezing questions, competitors, surfaces and coding rules ([AEO Table](https://www.aeotable.com/en/blog/ai-share-of-voice)).

Build prompts from customer language, sales objections, search data and research findings. Use this prompt-sampling frame:

| Prompt class | Purpose | Example prompt |
|---|---|---|
| Discovery | Finds solutions before a brand is known | “What tools help teams understand product adoption?” |
| Comparison | Tests evaluation-stage alternatives | “What are alternatives to [category] platform?” |
| Use case | Connects a job to a solution | “How can a B2B team identify onboarding friction?” |
| Problem | Captures a buyer’s stated difficulty | “Why are trial users not reaching activation?” |

Keep branded prompts separate from unbranded discovery prompts. Naming a brand changes the task from discovery to evaluation. A [voice-of-customer program framework](https://blog.glasgow.works/blog/voice-of-customer-program-b2b-saas/) can help turn recurring customer language into a defensible sampling frame.

Log refusals, errors and unavailable surfaces. They are collection outcomes, not evidence that a brand was absent.

## Use the worksheet to capture comparable answer evidence

The following worksheet is a copyable 30-day AI brand-visibility study record. It preserves the answer behind every coded result. Vendor dashboards can assist collection, but they do not replace review of the underlying answer.

| Field | What to record |
|---|---|
| Run ID | Unique identifier for the scheduled run |
| Verbatim prompt | Exact submitted wording |
| Prompt class | Discovery, comparison, use case or problem |
| Surface | Named AI answer surface |
| Timestamp | Date, time and time zone |
| Eligibility | Eligible, failed, refused or unavailable |
| Raw answer archive | Saved answer text or permitted capture location |
| Brands present | Cohort brands named, including aliases |
| Recommendation language | Exact supporting phrase and binary code |
| Displayed citations | Domains shown beside the answer |
| Coder | Person who coded the answer |
| Coding version | Version of definitions used |

Code each cohort brand as present or absent, at most once per eligible answer. Keep aliases, partial names and ambiguous references for review. Use a second reviewer for ambiguity, or define an adjudication rule before coding begins. The same care applies when you [validate AI-generated research insights](https://blog.glasgow.works/blog/validate-ai-generated-research-insights/).

### Completed illustrative example

This fictional B2B analytics example illustrates the coding method. It is not a tool test or client engagement.

| Run ID | Prompt | Surface | Eligible | Target mentioned | Explicitly recommended | Target domain cited |
|---|---|---|---:|---:|---:|---:|
| 2026-01-A03 | “How can a B2B analytics team find activation drop-off?” | Surface A | Yes | Yes | No | Yes |
| 2026-01-A04 | “Best platforms for product adoption analysis” | Surface A | Yes | No | No | No |

The first answer contributes to mention and citation measures, but not recommendation. The second remains in the denominator for coverage measures and records no target outcome.

## Calculate four metrics that answer different questions

Calculate each measure separately and show its denominator alongside the result.

**Brand mention rate** asks: “How often did the target appear?”

Target-brand mentions in completed eligible answers ÷ completed eligible answers × 100.

**Competitive mention share** asks: “Of all cohort appearances, what share belonged to the target?”

Target-brand binary appearances ÷ binary appearances for all fixed cohort brands × 100.

**Recommendation rate** asks: “How often was the target explicitly recommended?”

Target recommendation outcomes ÷ completed eligible answers × 100.

**Owned-domain citation rate** asks: “How often did the answer cite our domain?”

Eligible answers displaying a target-domain citation ÷ completed eligible answers × 100.

You can also calculate recommendation or citation share using all cohort recommendation or citation appearances as the denominator. Label that choice clearly.

Report each surface before producing a combined view. Google Search, Copilot and other experiences should not be treated as interchangeable. Repeat runs where answers vary and report the observed range. A small prompt sample can show where to investigate; it cannot establish statistically meaningful change. Apply the same discipline used in [how to measure UX research ROI](https://blog.glasgow.works/blog/how-to-measure-ux-research-roi/): connect a measure to a decision, not a vanity dashboard.

## Turn visibility gaps into a research-backed decision

The useful output of AI search visibility measurement is a decision about evidence, not a demand to publish more content.

| Visibility pattern | Evidence quality | Business relevance | Next action |
|---|---|---|---|
| Low unbranded mention | Customer need is well evidenced | High | Investigate whether owned material answers the buyer’s actual question |
| Incorrect claim | Source conflict is clear | High | Correct factual sources and review affected pages |
| Strong mentions, low citations | Claims are supported but proof is hard to locate | Medium or high | Review owned proof, page structure and discoverability |
| Stable strong visibility | Coding and prompts remain comparable | Any | Monitor; do not publish merely to create activity |
| Low visibility | Buyer relevance is weak or uncertain | Low | Take no content action until research establishes relevance |

Validate the interpretation against customer research and sources named or cited in answers before changing content. A missing mention may reflect an irrelevant prompt, a weak competitor definition or a genuine evidence gap.

Use owned-site signals alongside the manual sample. Google directs site owners to the Generative AI performance report in Search Console for content performance in generative Search features ([Google Search Central](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)). Microsoft’s AI Performance Report shows how site content is used in AI-generated answers across Copilot and partner experiences ([Microsoft Bing Webmaster Tools](https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c)). These are provider-specific signals; neither replaces answer-level competitive coding across named surfaces.

Turn the selected next step into a named action and owner, then carry it into a [research report that drives action](https://blog.glasgow.works/blog/how-to-write-a-ux-research-report/).

## Report the baseline without false precision

Use this confidence-aware reporting template, replacing the figures with your own coded results:

> Across [completed eligible answers] from [planned prompt-surface runs], the target brand was mentioned in [numerator] answers ([rate]), explicitly recommended in [numerator] ([rate]) and cited from its owned domain in [numerator] ([rate]). Competitive mention share was [rate] of [fixed-cohort brand appearances]. The sample covered [prompt classes] in [market and language], across [named surfaces], from [dates]. Results [did/did not] vary across [number] scheduled runs and describe this sample only.

Set a monthly or quarterly cadence only after the baseline protocol is stable. If prompts, competitors, models, surfaces or account conditions change, label the result as a new baseline or contract break.

Before reporting, check:

- Raw answer evidence is retained.
- Failures and exclusions are disclosed.
- Mention, recommendation and citation measures remain separate.
- Comparisons use like-for-like prompts and surfaces.
- Each proposed action has a named decision owner.

Use this worksheet for the next baseline, then retain the same contract until a documented change is needed. It forms a practical starting point for reliable [research operations guidance](/blog/research-operations/).

### What is AI share of voice?

It is the relative share of observed brand appearances within a fixed competitor cohort and declared AI-answer sample. It is not a universal market-share figure.

### How do you calculate AI share of voice?

Divide the target brand’s binary appearances by binary appearances for all brands in the fixed cohort. Report mention coverage, recommendation and citation measures separately.

### Is AI share of voice the same as AI referral traffic?

No. Share of voice records visibility in observed answers. Referral traffic records visits. They have different denominators and biases, so use them as complementary signals.

### How many prompts should an AI visibility study include?

There is no universal number. Start with a manageable, evidence-backed sample covering key buyer situations. Preserve it for repeated runs, then expand only with a documented sampling rationale.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://blog.glasgow.works/services/).

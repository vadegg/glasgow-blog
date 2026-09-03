---
title: "How to Run a Customer Segmentation Research Study"
description: "Learn how to run a customer segmentation research study: frame the decision, design the survey, run cluster analysis, and ship segments teams can act on."
pubDate: 2026-09-03
updatedDate: 2026-09-03
readingTime: 13
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
---
<!-- gr:toc -->

## On this page

- [What a segmentation study delivers (and when to run one)](#what-a-segmentation-study-delivers-and-when-to-run-one)
- [Start with the decision, not the data](#start-with-the-decision-not-the-data)
- [Choose your segmentation bases: needs, behaviour, demographics, firmographics](#choose-your-segmentation-bases-needs-behaviour-demographics-firmographics)
- [Designing the segmentation survey](#designing-the-segmentation-survey)
- [Sampling and data collection](#sampling-and-data-collection)
- [Running the cluster analysis](#running-the-cluster-analysis)
- [Choosing the winning solution: interpretability, actionability, stability](#choosing-the-winning-solution-interpretability-actionability-stability)
- [From clusters to actionable segments](#from-clusters-to-actionable-segments)
- [Activating segments across product and GTM](#activating-segments-across-product-and-gtm)
- [Common pitfalls to avoid](#common-pitfalls-to-avoid)
- [Frequently asked questions](#frequently-asked-questions)

## What a segmentation study delivers (and when to run one)

Plenty of segmentation projects end as a slide deck nobody opens twice. The groups look plausible. No team can act on them. Whether you know how to run a customer segmentation research study that shifts a roadmap or a message comes down to choices you make before a single data point is collected.

A good study produces a small set of groups — usually three to seven — that are genuinely different from each other, large enough to matter, and reachable through channels you control. It tells a product or go-to-market team who to build for, who to talk to, and who to leave alone.

This is not database slicing by recency, frequency and monetary value (RFM) or by firmographics. Those show you *that* groups behave differently. A research study explains *why* — the needs and attitudes under the behaviour — and that is what lets you change a roadmap or a message with confidence.

Run one when a real decision forces it: a repositioning, a new market entry, roadmap prioritisation inside a wider [product research programme](/blog/product-research), or messaging that has stopped converting. Budget four to eight weeks and a real research spend. Confirm the decision is live before you commit.

## Start with the decision, not the data

A segmentation study is won or lost here, not at the clustering algorithm. Write down the business decision the segments must inform, in a single sentence.

Be specific. Which accounts sales should chase. What the next three roadmap bets are. How many pricing tiers to offer. Which message goes on the homepage. A segmentation built to inform targeting looks nothing like one built to inform the roadmap, and one design cannot serve both well.

Draft three to five research questions and the hypotheses behind them. If you believe there is an underserved group who would pay more for speed, say so — then design the study to confirm or kill it.

Agree a "so-what" test up front. For each candidate segment, what would have to be true for you to treat it differently — different features, different price, different channel? If the honest answer is "nothing", it is not a segment.

Get product, sales, marketing and customer success in one room and hold them to this before you field anything. Misalignment found after analysis is the most common — and most expensive — way a segmentation fails.

## Choose your segmentation bases: needs, behaviour, demographics, firmographics

Every study rests on a choice of clustering basis: the variables you group people on. Customer segmentation research methods differ mainly in that choice, and four bases are common.

**Needs-based** segmentation groups people by the outcomes they are trying to achieve — often framed as a "job to be done" the product is hired for. Two people with the same job tend to value the same improvements, however different they look on paper.

**Behavioural** segmentation uses observed actions: features used, purchase frequency, channel. It is precise and easy to operationalise. But it describes the present rather than the motivation behind it, which makes it weak ground for a repositioning.

**Demographic and firmographic** segmentation uses age, role, company size, industry and tech stack. Cheap to collect, easy to target, rarely predictive of what someone actually needs.

**Attitudinal** segmentation uses beliefs and priorities — risk tolerance, price sensitivity, brand attitudes. Best used alongside a needs model, not instead of one.

For product teams, needs-based segmentation is the strongest basis because it drives strategy. We lead with needs and attitudes as the clustering basis, then treat everything else as *descriptors*: variables used to describe and find each segment, not to form it. A segment defined by need but described by firmographics is both strategic and addressable.

In B2B, resist the urge to lead with firmographics. Company size and industry belong on top of a needs model, as a way to size and reach segments — not as the thing that defines them.

## Designing the segmentation survey

Good segmentation survey design keeps the questionnaire to 10–15 minutes. Go longer and data quality drops, especially in the needs battery, where respondents have to concentrate.

Structure it in three blocks:

- **Basis questions:** the needs and attitude items you will cluster on.
- **Descriptor questions:** behaviour, category spend, firmographics and demographics — everything you will use to profile and target.
- **Validation questions:** current product use, satisfaction, spend and intent, so you can sanity-check the segments afterwards.

Write the needs and attitude battery as agree–disagree statements or, better, as MaxDiff items — a forced trade-off where respondents pick the most and least important option from a set. MaxDiff forces discrimination. Flat Likert batteries often produce items nearly everyone agrees with, which adds no signal and pulls clusters together.

Every item should earn its place by separating people. Cut statements that are double-barrelled ("fast and affordable"), leading ("how much do you value excellent support?"), or so agreeable that 90% tick the top box. Low-variance items hide real structure.

Build in attention checks ("select 'somewhat agree' for this item") and logic traps, so you can remove inattentive respondents before analysis. Our guide to [survey design best practices](https://blog.glasgow.works/blog/survey-design-best-practices-ux) covers wording in more detail, and [detect fake survey respondents](https://blog.glasgow.works/blog/how-to-detect-fake-survey-respondents) covers the quality screening that keeps a segmentation clean.

## Sampling and data collection

Recruit a representative, verified sample of real customers and prospects. As a rule of thumb, aim for at least 30 respondents per expected segment and 300–500 in total for a detailed study. Below 30 per segment, clusters get unstable and hard to profile.

Set screening criteria that match the market you actually serve — or the one you intend to serve. Screen too loosely and you segment a population that is not your market.

Manage quotas on the descriptors you care about — region, company size, category — so the sample is not dominated by whichever group is easiest to recruit. A skew here becomes a skew in your segment sizes.

Be wary of panel-only or synthetic samples. Synthetic respondents smooth over the messy variance that segmentation depends on, and they can invent structure that is not there. If you use them at all, validate every segment against real respondents. We have written separately about the [risks of synthetic participants](https://blog.glasgow.works/blog/synthetic-users-ux-research).

## Running the cluster analysis

Cluster analysis for segmentation is the step where discipline matters most, because the method will always return an answer — whether or not real groups exist.

**Prepare the data first.** Run a factor analysis on the needs battery to collapse 30-odd items into a handful of underlying dimensions; this removes redundancy and stops correlated items dominating the solution. Standardise every variable to the same scale, so a 1–7 item and a 1–100 item carry equal weight. Check for multicollinearity and combine or drop variables that measure the same thing.

**Match the method to the data.**

- *k-means* is fast and works well on continuous factor scores. It needs you to set the number of clusters and assumes roughly spherical groups.
- *Hierarchical clustering* builds a tree you can inspect, which helps while you are still exploring how many groups might exist. It struggles at large sample sizes.
- *Latent class analysis* models segment membership as a probability and handles categorical and mixed data. It gives a cleaner basis for choosing the number of segments, at the cost of complexity.

**Test several solutions.** Run three, four, five and six clusters. Compare them on statistical fit — a silhouette score for k-means, the Bayesian information criterion (BIC) for latent class — but do not let fit decide alone. The best-fitting solution is often one giant cluster and a few slivers, which no team can use. Bring business judgement to every candidate before you shortlist.

## Choosing the winning solution: interpretability, actionability, stability

Score each shortlisted solution on three criteria.

**Interpretability.** Can you tell a clear story about how each segment differs? If describing a cluster takes five caveats, it is not real.

**Actionability.** Is each segment big enough to serve, and distinct enough to serve *differently*? A 4% segment that would need its own product is usually not worth it.

**Stability.** Split the sample in half at random, re-run the clustering, and check the same structure appears. Segments that dissolve on a random half will dissolve in your market.

A usable solution beats a statistically cleaner one nobody can act on. On a needs-based study for an on-demand learning marketplace, we ran 28 jobs-to-be-done interviews with people across 13 fields and 15 US states, then compared cluster solutions from three groups up to six. We chose on actionability rather than fit alone and landed on four segments, each with a recurring monthly need and up to $1,000 of current spend on workaround solutions full of pain points. Two of those segments looked close on the numbers but needed different pricing and different messaging, so we kept them apart — and the solution held together on a random half of the sample.

Pressure-test the winner against the "so-what" criteria you set at the start, then document the trade-offs — why this number, what you gave up — so stakeholders understand the choice rather than just receive it.

## From clusters to actionable segments

Building customer segments from research that teams actually use is mostly a translation problem: turn the statistical model into portraits people remember.

Profile each segment on its needs, behaviours and descriptors, building each description from the sharpest contrasts with the overall average. Name each segment in plain language a salesperson would recall — "deadline-driven upskillers", not "Segment 3". Avoid names that flatter or judge.

Triangulate the clusters with qualitative material. Pull verbatim comments from the open-ended survey questions, and run a handful of interviews per segment where you can. The model gives you the shape of a group; the words give it a face and stop it feeling like a spreadsheet artefact. Our guide to [analyse open-ended survey data](https://blog.glasgow.works/blog/how-to-analyse-survey-data-qualitatively) covers coding those responses, and [empathy mapping](https://blog.glasgow.works/blog/empathy-mapping-ux-research) is a quick way to synthesise what each segment thinks, feels and does.

Build a one-page portrait per segment: size as a share of market and revenue, top three needs, buying triggers, common objections, and where to reach them. One page, not ten — the constraint forces clarity.

Place each segment on the customer journey so teams can see where it gets stuck and where it converts. [B2B customer journey mapping](https://blog.glasgow.works/blog/b2b-customer-journey-mapping-research) shows how to connect segment needs to specific stages.

## Activating segments across product and GTM

A segmentation that lives in a slide deck changes nothing.

Build a typing tool: a short set of questions — often five to eight — or a lightweight model that classifies any new customer into a segment. Wire it into your CRM, onboarding flow or sign-up so every account carries a segment label.

Map each segment to concrete plays. Which roadmap bets serve which segment. Which message and proof points go to each. Whether pricing tiers should track the segments. What onboarding looks like for each. If two segments get identical plays, question whether they are really two segments.

Set up feedback loops: track conversion, retention and expansion by segment, and refresh the segmentation every 18–24 months — or sooner after a major product or pricing change.

## Common pitfalls to avoid

- **Segmenting on descriptors.** Clustering on age, role or company size gives you groups that are easy to target and rarely different in what they need. Cluster on needs; describe with the rest.
- **Leading with firmographics in B2B.** Layer company size and industry on top of a needs model, not underneath it.
- **Chasing statistical purity.** The best silhouette score often hides an unusable solution. Fit is a filter, not the decision.
- **Shipping without a typing tool.** No classification method means no activation, and the work decays within a quarter.
- **Skipping stability checks and buy-in.** Segments that fail a random-half re-run, or that product and sales never signed off, will not survive contact with the business.

Start by writing the single business decision your segments need to inform. If you cannot say it in one sentence, you are not ready to field a survey — and that sentence will save you weeks later.

## Frequently asked questions

### How many customer segments should a study produce?

Most studies land on three to seven. In consumer markets, four to six is the usual range. Fewer than three tends to mean the groups are not really differentiated; more than seven becomes impractical to serve with distinct products, messages and journeys. Choose the number on actionability and stability, not on statistical fit alone.

### What sample size do I need for a segmentation study?

For a detailed segmentation survey, aim for a representative, verified sample of roughly 300–500 respondents, with at least 30 in each expected segment. Below that per-segment floor, clusters become unstable and hard to profile with confidence. If you expect six segments, 500 is a safer target than 300.

### What is the difference between needs-based and demographic segmentation?

Needs-based segmentation groups people by what they are trying to achieve and the attitudes that shape those goals; it predicts what people will value, so it drives strategy. Demographic and firmographic segmentation describes who people are — age, role, company size, industry. That description helps you find and target a segment, but it rarely tells you what to build.

### Which cluster analysis method is best?

There is no single best method. k-means is fast, well understood and works on continuous data. Hierarchical clustering helps you explore how much structure exists. Latent class analysis handles mixed data types and treats membership as a probability. Run more than one, test several cluster counts, and choose on interpretability, actionability and stability.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How to Run a Customer Segmentation Research Study",
  "description": "Learn how to run a customer segmentation research study: frame the decision, design the survey, run cluster analysis, and ship segments teams can act on.",
  "datePublished": "2026-09-03",
  "dateModified": "2026-09-03",
  "author": {
    "@type": "Person",
    "name": "Vadim Glazkov",
    "url": "https://blog.glasgow.works/authors/vadim/",
    "sameAs": [
      "https://www.linkedin.com/in/vadim-glazkov/"
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "Glasgow Research",
    "sameAs": [
      "https://www.linkedin.com/company/glasgow-research"
    ]
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://blog.glasgow.works/blog/how-to-run-a-customer-segmentation-research-study"
  },
  "keywords": "how to run a customer segmentation research study, customer segmentation research methods, needs-based segmentation, segmentation survey design, how to build customer segments from research, cluster analysis for segmentation"
}
</script>

---
title: "MaxDiff Analysis for Feature Prioritisation Guide"
description: "Design and analyse a MaxDiff study that actually prioritises features: item counts, set design, sample size, TURF and turning scores into roadmap decisions."
pubDate: 2026-09-05
updatedDate: 2026-09-05
readingTime: 11
slug: "maxdiff-analysis-feature-prioritisation"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "Product team reviewing a MaxDiff preference chart to prioritise features on a roadmap"
tags:
  - "opportunity prioritisation (quantitative prioritisation methods)"
  - "MaxDiff survey design"
  - "MaxDiff vs conjoint"
  - "maximum difference scaling"
  - "MaxDiff sample size"
---
<!-- gr:toc -->

## On this page

- [What MaxDiff analysis is (and why it beats rating scales)](#what-maxdiff-analysis-is-and-why-it-beats-rating-scales)
- [When to use MaxDiff (vs conjoint, ranking and scoring)](#when-to-use-maxdiff-vs-conjoint-ranking-and-scoring)
- [Step 1: Choose and word your item list (12–25 items)](#step-1-choose-and-word-your-item-list-1225-items)
- [Step 2: Design the sets (items per set, number of tasks, balance)](#step-2-design-the-sets-items-per-set-number-of-tasks-balance)
- [Step 3: Sample size and data quality](#step-3-sample-size-and-data-quality)
- [Step 4: Analyse the results (counting, HB and anchored MaxDiff)](#step-4-analyse-the-results-counting-hb-and-anchored-maxdiff)
- [From scores to decisions: TURF, exclusive vs shared demand and segments](#from-scores-to-decisions-turf-exclusive-vs-shared-demand-and-segments)
- [Common MaxDiff mistakes to avoid](#common-maxdiff-mistakes-to-avoid)
- [FAQ](#faq)

## What MaxDiff analysis is (and why it beats rating scales)

You have 18 features and roadmap room for four. A survey that asks people to rate each one 1–5 won't get you there: most respondents mark almost everything a 4 or 5, and you end up with a flat list where nothing clearly wins.

MaxDiff analysis for feature prioritisation fixes that. MaxDiff — maximum difference scaling, also called best-worst scaling — shows respondents a small set of items, usually four or five, and asks for the most and least important. Repeat that across a dozen or so sets drawn from the same list, and each person has made a run of forced trade-offs instead of a row of independent ratings.

Forcing the trade-off removes what flattens rating-scale data: straight-lining, scale-use bias, and the pull towards marking everything important. Nobody can rate everything highly, so the scores come out ratio-scaled. An item scoring 15 is genuinely three times as preferred as one scoring 5.

That separation is the whole point. This guide runs the method end to end — choosing items, designing sets, sizing the sample, analysing the output, and turning scores into a decision.

## When to use MaxDiff (vs conjoint, ranking and scoring)

Reach for MaxDiff when you have one list of features, messages, or benefits and need to know which matter most. People sometimes call it "conjoint-lite", which undersells it. MaxDiff ranks items within a single dimension. Conjoint analysis models attributes that have levels — price, storage tier, delivery speed — and simulates how people trade one against another, including willingness to pay. "Which of these 18 features should we build first" is a MaxDiff question. "How much is faster delivery worth against a lower price" is a conjoint question.

Set it against simple ranking or point allocation and MaxDiff is less fatiguing, and it discriminates better once you pass about 15 items. Hand-ranking a long list produces noisy orderings. Point allocation collapses into even splits.

Best-fit uses: roadmap feature prioritisation, value-proposition and message testing, benefit selection for positioning, and quantifying opportunities that surfaced in qualitative work. Our guide to [opportunity prioritisation in product research](https://blog.glasgow.works/blog/opportunity-prioritisation-product-research) covers getting from a long backlog to a shortlist worth testing.

Skip MaxDiff with fewer than eight items — just rank them — when you need absolute willingness-to-pay figures, or when a qualitative opportunity map already gives you a defensible answer.

## Step 1: Choose and word your item list (12–25 items)

Twelve to 25 items is the working range. Below 12, a simple ranking exercise does the job. Above 25, you need more design versions to keep coverage even, or you push fatigue to the point where late answers stop being reliable.

Curate the list with stakeholders before fielding. Keep items at a comparable level of abstraction — don't put "better onboarding" next to "export to CSV", because respondents judge them on different criteria. Cut overlap: if two items could read as the same thing, merge them or sharpen the distinction. Steer clear of double-barrelled wording like "faster and more secure login", where someone who wants one half and not the other has no way to answer.

Match the prompt to the decision. "Most and least important" suits roadmap prioritisation. "Most and least appealing" suits early concept or benefit testing. "Most and least likely to influence purchase" suits packaging and pricing. The wording defines what the scores mean, so choose it deliberately.

Pre-test the list with five to eight people from your target audience, with the same care you'd give any instrument — see our [survey design best practices for UX research](https://blog.glasgow.works/blog/survey-design-best-practices-ux). An ambiguous item pollutes every trade-off it appears in, not just its own score.

## Step 2: Design the sets (items per set, number of tasks, balance)

Show four or five items per set. Three gives respondents too little to trade off; six or more raises cognitive load and slows completion without adding statistical value. Four or five is what most platforms default to, and it holds across item-list sizes.

Every item needs to appear at least three times across a respondent's tasks. Fewer, and the individual-level estimate for that item is shaky before modelling even starts. Most studies run 10 to 15 tasks per respondent and cap at about 20 — past that, disengagement sets in and later tasks carry less reliable data.

A balanced MaxDiff survey design controls one-way frequency, so every item appears about equally often overall, and two-way frequency, so every pair of items appears together about equally often. Doing this by hand past a handful of items is impractical, so studies generate 10 to 30 randomised balanced versions and rotate respondents through them.

You rarely build this yourself. Sawtooth, Qualtrics, Conjointly, and SurveyMonkey all include MaxDiff design modules that generate the set structure. Your job is to get item count, set size, and task count right, then let the software handle the combinations.

## Step 3: Sample size and data quality

For robust aggregate results, plan for 300 or more completed responses. If you need to report scores by segment — role, customer tier, market — budget 100 to 200 completes for each segment you want to analyse on its own. Split an undersized total sample and you get segment scores too noisy to act on.

Hierarchical Bayes (HB) estimation is what makes these MaxDiff sample sizes workable. HB borrows statistical strength across the whole sample to stabilise each respondent's utilities, so scores hold up at modest sizes — provided the design showed each item at least three times per respondent. A weak design can't be rescued by modelling.

Recruitment matters as much as size. If the people answering aren't the ones who'll use or buy the feature, you get a confidently ranked list of the wrong priorities. Screen for the role, tenure, or usage pattern that matches your real decision-makers.

Guard against low-quality respondents. Bots, speeders, and inattentive participants don't just add noise — they flatten scores towards the middle, because careless answering carries no real preference. Add attention checks, response-time thresholds, and straight-line detection, and read our guide on how to [detect fake survey respondents](https://blog.glasgow.works/blog/how-to-detect-fake-survey-respondents) before you field.

## Step 4: Analyse the results (counting, HB and anchored MaxDiff)

Counting analysis is the quick look: for each item, tally how often it was picked best minus how often it was picked worst. It gives you an aggregate score in minutes, but it can't produce reliable individual- or segment-level estimates.

HB estimation can. It produces a score for every respondent on every item, which is what lets you cut by segment or feed the data into TURF. HB scores are usually rescaled to sum to 100 across the list, so each score is that item's share of preference. An item scoring 10 is twice as preferred as one scoring 5 — the ratio-scale property that makes MaxDiff more decisive than a rating scale.

Read past the raw order to the shape of the curve. A steep drop after the top three or four items means a clear must-have tier. A long, gentle tail means diminishing returns — those items are roughly equally (un)important, and small rank differences there shouldn't drive big decisions.

Standard MaxDiff scores are relative to the list you tested. The top item on a list of genuinely important features and the top item on a list of weak ones both win their list, but they don't mean the same thing. Anchored MaxDiff adds a calibration question — typically "would you actually use this?" for each item — that converts relative scores into an absolute threshold. Without it, you know what people prefer; with it, you know whether anything clears the bar for "worth building".

## From scores to decisions: TURF, exclusive vs shared demand and segments

A ranked list tells you what people prefer. It doesn't tell you what to ship, because the top five items often overlap in the demand they satisfy — building all five may reach no more customers than building the top two.

TURF analysis (Total Unduplicated Reach and Frequency) handles that. It takes the individual-level data and finds the combination of items that reaches the most people at least once, not the one with the highest average score. For MVP (minimum viable product) scope, a feature bundle, or the three messages to lead a campaign, TURF answers the real question: which set, together, covers the widest slice of the audience.

Separate exclusive demand from shared demand too. Some features are broadly liked but redundant with each other, so building both adds cost without reach. Others have narrow but exclusive appeal — fewer people want them, but nothing else on the list meets that need. Portfolios built on top-ranked scores alone over-invest in the first kind and miss the second.

Cutting scores by segment often shows where one roadmap stops working. On a discovery study for a medical imaging product, we looked at how the vendor communicated new features to two audiences it relied on: its own regionally spread sales team, and the external clinicians who refer patients in for scans. The two wanted opposite things. The sales team needed step-by-step material on how a feature worked; the clinicians only cared whether it shortened image turnaround. One priority list would have served neither. Run a MaxDiff study across that audience mix and the aggregate ranking looks coherent until you split it by role. If you haven't defined your segments yet, our guide to running a [customer segmentation research study](https://blog.glasgow.works/blog/how-to-run-a-customer-segmentation-research-study) is a useful precursor.

None of this counts if the study ends at a slide. Assign an owner to each action — build, defer, or drop — before the workshop finishes. A ranked list with no owner has answered a research question without making a decision.

## Common MaxDiff mistakes to avoid

**Overloading the item list.** Adding "a few more" features past 25 inflates fatigue and forces more design versions than most teams manage cleanly. Cut before you field.

**Poor set design.** Six or more items per set, or any item appearing fewer than three times, produces estimates that look precise but aren't. It's the most common technical error in DIY studies.

**Treating relative scores as absolute.** A ranking tells you what's preferred within the list you tested, not whether anything clears the bar for "worth building". Use anchored MaxDiff when that matters.

**Stopping at the ranking.** The costly mistake is analytical, not technical: shipping a ranked list as the deliverable instead of running TURF, checking exclusive versus shared demand, and cutting by segment. A ranking is an input to a decision, not the decision.

## FAQ

**How many items should a MaxDiff study include?**
Twelve to 25 is the practical range. Below eight, a simple ranking is cheaper. Past 25, fatigue and design complexity rise, so trim with stakeholders before fielding.

**What sample size do I need for MaxDiff?**
Plan for 300 or more completes for robust aggregate results, and 100 to 200 per segment you want to report separately. HB estimation keeps individual-level scores stable at these sizes, provided each item appears at least three times per respondent.

**What is the difference between MaxDiff and conjoint analysis?**
MaxDiff prioritises a single list of items by forcing best/worst trade-offs. Conjoint models attributes that have levels — price, speed, capacity — and simulates how people trade them, including price sensitivity. Use MaxDiff for "which features matter most", conjoint for "what is each attribute worth".

**How is TURF analysis used with MaxDiff?**
TURF takes MaxDiff's individual-level data and finds the combination of items that reaches the greatest share of respondents at least once, rather than the highest-scoring set. It moves you from a ranking to a decision about bundles, MVP scope, or lead messages, because top-scoring items often overlap in the demand they satisfy.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "MaxDiff Analysis for Feature Prioritisation Guide",
  "description": "Design and analyse a MaxDiff study that actually prioritises features: item counts, set design, sample size, TURF and turning scores into roadmap decisions.",
  "datePublished": "2026-09-05",
  "dateModified": "2026-09-05",
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
    "@id": "https://blog.glasgow.works/blog/maxdiff-analysis-feature-prioritisation"
  },
  "keywords": "MaxDiff analysis for feature prioritisation, MaxDiff survey design, MaxDiff vs conjoint, maximum difference scaling, MaxDiff sample size, TURF analysis feature prioritisation"
}
</script>

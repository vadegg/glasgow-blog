---
title: "SUS vs UMUX-Lite vs SUPR-Q: Which One to Use"
description: "Compare SUS, UMUX-Lite and SUPR-Q on length, scope and benchmarks, then use our decision framework to pick the right usability questionnaire fast. Read on."
pubDate: 2026-09-04
updatedDate: 2026-09-04
readingTime: 12
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
---
<!-- gr:toc -->

## On this page

- [The 30-second answer: which questionnaire fits which goal](#the-30-second-answer-which-questionnaire-fits-which-goal)
- [What standardised usability questionnaires actually give you](#what-standardised-usability-questionnaires-actually-give-you)
- [SUS (System Usability Scale): the default benchmark](#sus-system-usability-scale-the-default-benchmark)
- [UMUX-Lite: two questions when you have no room for ten](#umux-lite-two-questions-when-you-have-no-room-for-ten)
- [SUPR-Q: the four-factor website UX benchmark](#supr-q-the-four-factor-website-ux-benchmark)
- [Side-by-side comparison: length, scope, benchmark, cost](#side-by-side-comparison-length-scope-benchmark-cost)
- [How to choose: a decision framework by study goal](#how-to-choose-a-decision-framework-by-study-goal)
- [Putting it into practice on a real study](#putting-it-into-practice-on-a-real-study)
- [Getting a score you can trust: common pitfalls](#getting-a-score-you-can-trust-common-pitfalls)
- [Frequently asked questions](#frequently-asked-questions)

## The 30-second answer: which questionnaire fits which goal

Need one number for general perceived usability, with decades of published data to compare it against? Use the System Usability Scale (SUS). Short on survey space — an in-app microsurvey, or a questionnaire with only two rows left for usability? Reach for UMUX-Lite, a two-item measure that predicts SUS scores closely. Benchmarking a website or product against competitors on usability, trust, appearance and loyalty? That's SUPR-Q: the only one of the three with a licensed database of comparison sites.

Three things decide it — your study goal, your survey-length budget, and whether you need an external benchmark or just your own trend line. These three sit inside a broader set of [standardised UX research methods](/blog/ux-research-methods), and the differences between them matter more than most teams assume. The comparison table and decision framework below cover the edge cases.

## What standardised usability questionnaires actually give you

A standardised questionnaire uses fixed wording, a validated scoring method and published norms, so a score means the same thing whoever runs the study and whenever you run it again. An ad-hoc "rate this 1 to 5" question feels faster to write. It has no known reliability, no validated scoring, and nothing to compare against — a 4 out of 5 this quarter tells you nothing about last quarter's 3.7.

All three instruments here measure attitude, not behaviour. They ask what people thought about an experience after they had it, not whether they completed a task, how long it took, or where they got stuck. SUS, UMUX-Lite and SUPR-Q sit alongside task-based metrics and analytics, not instead of them — see our note on [product analytics vs user research](https://blog.glasgow.works/blog/product-analytics-vs-user-research) for that broader distinction. Attach any of the three to the end of a moderated session, an unmoderated test, or a standalone survey.

## SUS (System Usability Scale): the default benchmark

SUS is ten statements, alternating between positive ("I found the system easy to use") and negative ("I found the system unnecessarily complex") wording, each answered on a five-point agreement scale. The alternation stops respondents straight-lining down one column. It also means half the items need reverse-scoring before you calculate anything.

Scoring produces a number from 0 to 100. It is not a percentage, and treating it like one is the most common misreading of a SUS result. The published average across hundreds of studies sits around 68; scores above 80 are generally considered excellent, and researchers commonly map raw scores to letter grades (roughly A to F) or adjectives — "good", "OK", "poor" — using percentile tables built from that dataset. A product scoring 72 isn't "72% usable". It's a shade above average, likely in the "good" band. That's the core of SUS score interpretation: read the number against the norm, not as a raw grade.

The strength of SUS is scale. Decades of use across software, hardware, websites and internal tools mean almost any score has something to compare against. Its limits are just as clear: ten items feels long inside a busy survey, it measures one construct, and the reverse-scoring step is where most calculation errors creep in. For the wording and ordering choices that keep response quality up, see our guide to [survey design best practices](https://blog.glasgow.works/blog/survey-design-best-practices-ux). Scores stabilise from around 12–14 respondents per test condition; smaller samples still work, but don't over-read single-digit differences.

## UMUX-Lite: two questions when you have no room for ten

UMUX-Lite drops to two items — "This system's capabilities meet my requirements" and "This system is easy to use" — both rated on a seven-point agreement scale. That's the whole instrument.

Brevity aside, it correlates strongly with SUS: published correlations sit around r = .74 to .83, and a regression formula converts UMUX-Lite scores onto the SUS scale, typically landing within about a point of the SUS mean for the same sample. Interpret the corrected score the way you'd interpret SUS: around 68 is average, above 80 is excellent.

Use UMUX-Lite where survey space is the binding constraint — an in-app microsurvey after checkout, a long omnibus questionnaire where usability is one section among several, or a transactional intercept where every extra question costs completion rate. What you give up is diagnostic detail. Two items can't tell you which part of the experience dragged a score down, and the normative database, while growing, is thinner than SUS's decades of coverage. Researchers still debate the correction formula itself, and some argue for reporting the raw score rather than converting it — check which convention your stakeholders expect before you commit to one.

## SUPR-Q: the four-factor website UX benchmark

SUPR-Q (Standardized User Experience Percentile Rank Questionnaire) covers more ground: eight items across four factors — usability, trust, appearance and loyalty, with the loyalty factor built around a Net Promoter Score-style likelihood-to-recommend item. It's the only instrument of the three that asks whether people trust what they're looking at, not just whether they could use it.

It produces two outputs: raw scores per factor on a 1–5 scale, and, if you license the normed database, a percentile rank against a set of more than 200 previously benchmarked sites. A percentile of 50 is average; a site at the 80th percentile is outperforming four out of five comparable sites in the database. That external comparison is what SUS and UMUX-Lite can't offer on their own.

SUPR-Q was built for websites and digital products, where appearance and trust genuinely shift outcomes — e-commerce checkouts, financial services portals, anything where a visitor decides whether to hand over money or data partly on how credible the page looks. It's the wrong tool for judging whether a single internal tool or hardware interface is easy to use; that's SUS territory. Access to the normed database is licensed through MeasuringU, so factor that cost and lead time in if competitive benchmarking is why you're reaching for SUPR-Q. See our guide on how to [run a UX benchmarking study](https://blog.glasgow.works/blog/how-to-run-a-ux-benchmarking-study) for the wider process.

## Side-by-side comparison: length, scope, benchmark, cost

| | Items | Scale | Construct(s) | Output | External benchmark | Best fit | Cost |
|---|---|---|---|---|---|---|---|
| SUS | 10 | 5-point agreement | Perceived usability | 0–100 score, ~68 average | Large published norms, freely available | General-purpose default, cross-study tracking | Free |
| UMUX-Lite | 2 | 7-point agreement | Perceived usability | Raw score + SUS-predicted score | Smaller, growing norms | Tight survey space, frequent pulse checks | Free |
| SUPR-Q | 8 | 5-point agreement | Usability, trust, appearance, loyalty | Raw factor scores + percentile rank | Licensed database, 200+ sites | Website/product benchmarking against competitors | Licensed (MeasuringU) |

The trade-off runs along one axis: brevity against diagnostic breadth against external comparability. SUS and UMUX-Lite are largely interchangeable if all you need is a usability number — pick UMUX-Lite when length is the constraint, SUS when it isn't. SUPR-Q isn't competing with either. It answers a different question, telling you how you stack up against the market on more than usability alone, at the cost of the scope and licence fee the other two don't carry.

## How to choose: a decision framework by study goal

Work through these four questions in order. The first one that applies usually settles it.

1. **Do you need to compare against competitors, not just your own past scores?** If yes, use SUPR-Q — it's the only instrument with an external database built for that comparison. If no, move to question two.
2. **How much survey space do you actually have?** A handful of screens in an in-app intercept, or a section buried in a longer questionnaire, points to UMUX-Lite. A dedicated post-task or post-study survey with room to spare points to SUS.
3. **Does trust, visual credibility, or likelihood to recommend matter to the decision on the table?** If stakeholders are asking "would people trust this enough to buy" as much as "can people use this", that's SUPR-Q territory regardless of your answer to question two.
4. **Do you need a stable trend line over multiple releases?** SUS's depth of norms and ten-item structure make it the steadier choice for longitudinal tracking; UMUX-Lite's brevity suits a one-off pulse check better than a multi-year baseline.

These aren't mutually exclusive. A common pattern we use: run SUS or UMUX-Lite after every usability test or release to track perceived usability release over release, and run SUPR-Q on a slower cadence — quarterly or twice a year — as the site-level competitive benchmark. Keep sample sizes consistent between waves. Fewer than about 12–14 respondents per condition makes small movements in the score impossible to distinguish from noise.

## Putting it into practice on a real study

A subscription software client once came to us wanting to "run a SUS score" on a redesigned onboarding flow. Reasonable default request — SUS is the instrument most product teams have heard of. But the goal behind the request wasn't onboarding usability in isolation. It was whether the redesign had moved the needle against two named competitors the leadership team benchmarked themselves against every board cycle.

That reframed the choice. Onboarding usability alone would have been well served by SUS attached to an unmoderated task-based test — quick to run, cheap, and a fine way to catch friction in the flow itself. The decision on the table needed a comparison point outside the client's own product, which SUS can't give you. So we ran SUPR-Q as a standalone benchmarking survey against the same competitor set the client already tracked, alongside a lighter unmoderated test scored with SUS for the onboarding-specific diagnosis.

The SUPR-Q percentile settled an argument that had been running for two quarters: the redesign had closed the usability gap, but the trust and appearance factors were still lagging the market leader. That distinction — usable but not yet trusted — changed the next sprint's priorities in a way a single SUS number never would have.

## Getting a score you can trust: common pitfalls

Most SUS errors happen at the scoring step, not the data-collection step: forgetting to reverse-score the negatively worded items, or reporting the 0–100 result as a percentage. Both are easy to catch with a second pass before you publish a number.

With SUPR-Q, keep the percentile rank and the raw factor scores separate. They answer different questions, and averaging them produces a figure that means nothing. The percentile tells you how you compare to the market; the raw score tells you where you stand on your own scale.

Sample size and consistency matter more than most teams expect. Fewer than about a dozen respondents per wave makes release-to-release movement statistically meaningless, and switching instruments, rewording items, or changing recruitment criteria between waves breaks the trend line even if the score itself looks stable. Low-effort or bad-actor responses are a quieter risk: a handful of straight-lined or speeded-through surveys can inflate or flatten a score without anyone noticing until the trend stops making sense. Screen your data before you report it, especially before comparing waves.

## Frequently asked questions

**Is a SUS score a percentage?**
No. SUS runs from 0 to 100, but it isn't a percentage. Interpret it against the published average (around 68) and the percentile or letter-grade tables built from the normative dataset.

**Can UMUX-Lite replace SUS?**
For a single usability number under tight survey-space constraints, largely yes. It correlates strongly with SUS, and a published regression formula converts scores onto the same scale within roughly a point. What you lose is diagnostic granularity: two items can't tell you which part of the experience is driving the score, and SUS's normative dataset runs deeper.

**Do I need to pay for SUPR-Q?**
The questionnaire itself is publicly documented and free to administer. What's licensed is access to the normed comparison database through MeasuringU — factor that cost in if competitive percentile ranking is why you're choosing SUPR-Q over SUS.

**How many respondents do I need for a reliable score?**
Around 12–14 per test condition is a reasonable floor for SUS and UMUX-Lite; below that, small movements between waves are hard to distinguish from noise. Keep the same sample size and recruitment approach across waves so trend comparisons stay valid.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "SUS vs UMUX-Lite vs SUPR-Q: Which One to Use",
  "description": "Compare SUS, UMUX-Lite and SUPR-Q on length, scope and benchmarks, then use our decision framework to pick the right usability questionnaire fast. Read on.",
  "datePublished": "2026-09-04",
  "dateModified": "2026-09-04",
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
    "@id": "https://blog.glasgow.works/blog/sus-vs-umux-lite-vs-supr-q"
  },
  "keywords": "usability questionnaires compared: SUS vs UMUX-Lite vs SUPR-Q, standardised usability metrics, SUS score interpretation, UMUX-Lite, SUPR-Q, which usability questionnaire to use"
}
</script>

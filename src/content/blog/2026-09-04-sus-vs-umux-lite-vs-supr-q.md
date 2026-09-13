---
title: "SUS vs UMUX-Lite vs SUPR-Q: Which One to Use"
description: "Compare SUS, UMUX-Lite and SUPR-Q on length, scope and benchmarks, then use our decision framework to pick the right usability questionnaire fast. Read on."
pubDate: 2026-09-04
updatedDate: 2026-09-13T14:51:29Z
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
hub: "ux-research-methods"
---
## The 30-second answer: which questionnaire fits which goal

Need one number for general perceived usability, with decades of published data to compare it against? Use the System Usability Scale (SUS). Short on survey space — an in-app microsurvey, or a questionnaire with only two rows left for usability? Reach for UMUX-Lite, a two-item measure that predicts SUS scores closely. Benchmarking a website or product against competitors on usability, trust, appearance and loyalty? That's SUPR-Q: the only one of the three with a licensed database of comparison sites.

Three things decide it — your study goal, your survey-length budget, and whether you need an external benchmark or just your own trend line. These three sit inside a broader set of [standardised UX research methods](/blog/ux-research-methods), and the differences between them matter more than most teams assume. The comparison table and decision framework below cover the edge cases.

## What standardised usability questionnaires actually give you

A standardised questionnaire uses fixed wording, a validated scoring method and published norms, so a score means the same thing whoever runs the study and whenever you run it again. An ad-hoc "rate this 1 to 5" question feels faster to write. It has no known reliability, no validated scoring, and nothing to compare against — a 4 out of 5 this quarter tells you nothing about last quarter's 3.7.

All three instruments here measure attitude, not behaviour. They ask what people thought about an experience after they had it, not whether they completed a task, how long it took, or where they got stuck. SUS, UMUX-Lite and SUPR-Q sit alongside task-based metrics and analytics, not instead of them — see our note on [product analytics vs user research](https://blog.glasgow.works/blog/product-analytics-vs-user-research) for that broader distinction. Attach any of the three to the end of a moderated session, an unmoderated test, or a standalone survey.

## SUS (System Usability Scale): the default benchmark

SUS is ten statements, alternating between positive ("I found the system easy to use") and negative ("I found the system unnecessarily complex") wording, each answered on a five-point agreement scale. The alternation stops respondents straight-lining down one column. It also means half the items need reverse-scoring before you calculate anything.

Scoring produces a number from 0 to 100. It is not a percentage, and treating it like one is the most common misreading of a SUS result. The published average across hundreds of studies sits around 68; scores above 80 are generally considered excellent, and researchers commonly map raw scores to letter grades (roughly A to F) or adjectives — "good", "OK", "poor" — using percentile tables built from that dataset. A product scoring 72 isn't "72% usable". It's a shade above average, likely in the "good" band. That's the core of SUS score interpretation: read the number against the norm, not as a raw grade.

The strength of SUS is scale. Decades of use across software, hardware, websites and internal tools mean almost any score has something to compare against. Its limits are just as clear: ten items feels long inside a busy survey, it measures one construct, and the reverse-scoring step is where most calculation errors creep in. For the wording and ordering choices that keep response quality up, see our guide to [survey design best practices](https://blog.glasgow.works/blog/survey-design-best-practices-ux). There is no universal sample size at which a SUS score becomes stable. Plan for the precision you need and report a confidence interval; see MeasuringU's [sample-size guidance for SUS estimates](https://measuringu.com/sample-sizes-for-SUS-ci/).

## UMUX-Lite: two questions when you have no room for ten

UMUX-Lite drops to two items — "This system's capabilities meet my requirements" and "This system is easy to use" — both rated on a seven-point agreement scale. That's the whole instrument.

UMUX-Lite is closely related to SUS, but an estimated SUS score is not an interchangeable direct measurement. Early studies used a regression adjustment; later work found that simple linear scaling can perform better, especially above average. Specify which questionnaire, response scale and scoring method you use, and keep them consistent across waves. MeasuringU explains the distinction in [its review of UMUX-Lite and UX-Lite scoring](https://measuringu.com/from-umux-lite-to-ux-lite/).

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

These aren't mutually exclusive. One possible study design is to run SUS or UMUX-Lite after every usability test or release to track perceived usability release over release, and run SUPR-Q on a slower cadence — quarterly or twice a year — as the site-level competitive benchmark. Keep recruitment and measurement comparable between waves. Plan the sample for the change you need to detect, expected variability, confidence and statistical power; there is no universal 12–14-person cutoff. See [sample sizes for SUS comparisons](https://measuringu.com/sample-sizes-for-sus-comparisons/).

## Worked example: choosing measures for an onboarding redesign

*This is a hypothetical study design, not a reported Glasgow Research client engagement.*

Suppose a subscription software team wants to assess a redesigned onboarding flow and compare its website experience with competitors. Those are related questions, but the measures should reflect each decision.

The team could use SUS after comparable onboarding tasks to assess perceived usability. SUS can also support comparisons with competitors when the study design and participant groups are comparable. If the team additionally needs website-level trust, appearance and loyalty measures, it could consider SUPR-Q and its licensed benchmark database. [MeasuringU describes the SUPR-Q measures and licensing](https://measuringu.com/product/suprq/).

Before collecting data, define which outcome would change the team's priorities and how much uncertainty is acceptable. If usability ratings improve while trust ratings remain low, investigate that difference in follow-up research; do not assume that a score alone explains its cause.

## Getting a score you can trust: common pitfalls

Most SUS errors happen at the scoring step, not the data-collection step: forgetting to reverse-score the negatively worded items, or reporting the 0–100 result as a percentage. Both are easy to catch with a second pass before you publish a number.

With SUPR-Q, keep the percentile rank and the raw factor scores separate. They answer different questions, and averaging them produces a figure that means nothing. The percentile tells you how you compare to the market; the raw score tells you where you stand on your own scale.

Sample size and consistency matter more than most teams expect. A small sample widens uncertainty; whether a change can be detected depends on its size, variability and study design. Switching instruments, rewording items or changing recruitment criteria can make waves incomparable even when the score looks stable. Low-effort or bad-actor responses are a quieter risk: a handful of straight-lined or speeded-through surveys can inflate or flatten a score without anyone noticing until the trend stops making sense. Screen your data before you report it, especially before comparing waves.

## Frequently asked questions

**Is a SUS score a percentage?**
No. SUS runs from 0 to 100, but it isn't a percentage. Interpret it against the published average (around 68) and the percentile or letter-grade tables built from the normative dataset.

**Can UMUX-Lite replace SUS?**
It can be a useful short alternative, but do not silently switch instruments in an existing trend. Describe the response scale and scoring method, and distinguish estimated SUS values from directly collected SUS scores. Neither questionnaire replaces task observations or follow-up questions for diagnosing problems.

**Do I need to pay for SUPR-Q?**
The questionnaire itself is publicly documented and free to administer. What's licensed is access to the normed comparison database through MeasuringU — factor that cost in if competitive percentile ranking is why you're choosing SUPR-Q over SUS.

**How many respondents do I need for a reliable score?**
There is no single minimum for every decision. For an estimate, choose the desired confidence-interval width; for a comparison, plan around the smallest meaningful difference, expected variability, confidence and power. Keep recruitment and measurement comparable across waves and report uncertainty.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

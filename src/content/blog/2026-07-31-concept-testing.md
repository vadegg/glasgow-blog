---
title: "Concept Testing: Run a Test That Yields a Decision"
description: "Learn how to run a concept test that produces a defensible go, refine, or kill decision — survey design, methods, sample sizing, and guards against false"
pubDate: 2026-07-31
updatedDate: 2026-07-31
readingTime: 11
slug: "concept-testing"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "Researcher comparing product concept cards and survey scores to make a go, refine, or kill decision"
tags:
  - "Product Discovery — experiment design & concept validation"
  - "how to run a concept test"
  - "product concept testing"
  - "concept test survey"
  - "validate a product concept"
---
<!-- gr:toc -->

## On this page

- [What concept testing is — and what it can't tell you](#what-concept-testing-is-and-what-it-cant-tell-you)
- [When to run a concept test (and when it's the wrong tool)](#when-to-run-a-concept-test-and-when-its-the-wrong-tool)
- [Concept testing methods: monadic, sequential monadic and comparative](#concept-testing-methods-monadic-sequential-monadic-and-comparative)
- [How to write a concept statement that tests the idea, not the ad copy](#how-to-write-a-concept-statement-that-tests-the-idea-not-the-ad-copy)
- [Designing the concept test survey: questions that produce a decision](#designing-the-concept-test-survey-questions-that-produce-a-decision)
- [Who to test and how many: recruiting and sample quality](#who-to-test-and-how-many-recruiting-and-sample-quality)
- [Guarding against false positives: politeness and stated-preference bias](#guarding-against-false-positives-politeness-and-stated-preference-bias)
- [From scores to a defensible go / refine / kill decision](#from-scores-to-a-defensible-go-refine-kill-decision)
- [Frequently asked questions](#frequently-asked-questions)

## What concept testing is — and what it can't tell you

Concept testing shows a described or mocked-up idea to your target audience before you build it. It measures three things: whether the idea appeals to them, whether it feels relevant to their situation, and whether they understand it the way you intended. Done well, it produces one output — a defensible decision. Go, refine, or kill. Not "collect reactions." A decision.

Be honest about the limit, though. A concept test measures stated preference — what someone says they'd do — not revealed behaviour, what they actually do once money or effort is on the line. It de-risks a call. It doesn't guarantee the outcome.

Two methods get conflated with it, so let's separate them. Usability testing checks whether people can complete a task in a working interface. A/B testing measures live behaviour against a real alternative. Concept testing sits earlier — before there's an interface to use or traffic to split — and answers a narrower question: is this idea worth building at all?

## When to run a concept test (and when it's the wrong tool)

Concept testing sits at a specific point in the [product discovery process](/blog/product-discovery): after you've mapped opportunities and ranked your riskiest assumptions, before you commit real build budget. Assumptions that are cheap to test and expensive to get wrong belong in a quick interview round. The ones still standing, with a real product idea behind them, belong in a concept test.

Run one when three things line up: one to four genuinely differentiated directions, a real decision at stake — budget, roadmap slot, build/no-build — and a target segment you can reach in enough numbers to trust the read.

Skip it when the decision is reversible and cheap; just ship and watch. Skip it when your "concepts" are minor variations on one idea, because a concept test can't discriminate between options that aren't meaningfully different. And skip it when you need behavioural evidence — conversion, retention, willingness to pay — because appeal and comprehension aren't commercial performance.

A concept test's real output is a sharpened hypothesis, handed to [experiment design for product discovery](https://blog.glasgow.works/blog/experiment-design-product-discovery). It doesn't replace running the experiment.

## Concept testing methods: monadic, sequential monadic and comparative

Three designs cover most concept tests, and the one you pick shapes what your numbers mean.

Monadic testing shows each respondent exactly one concept. It's the cleanest read — no contrast effects, no fatigue — but it needs a full, separate sample per concept, so it costs more.

Sequential monadic shows each respondent several concepts, one at a time, in randomised order. One sample serves multiple concepts, which is efficient. The catch: order and contrast effects are real. Whatever a respondent sees first sets an anchor, and a concept shown right after a weaker one can look stronger than it is. Randomising order spreads that bias across the sample rather than removing it.

Direct comparison — concepts side by side, pick a winner — earns its place only when the real decision is a forced choice, which most product decisions aren't.

So: monadic for very different or complex concepts and an unbiased individual read, sequential monadic when concepts are similar and budget is tight, and comparison only when it mirrors the real decision.

Numbers explain what, not why. A handful of moderated walkthroughs alongside the survey — or [first-click testing on an early prototype](https://blog.glasgow.works/blog/first-click-testing-ux-research) once a concept clears this stage — surfaces the reasoning behind the scores. Whichever design you pick, randomise concept order and blind branding and price where you can. Both create halo effects that inflate appeal for reasons that have nothing to do with the idea itself.

## How to write a concept statement that tests the idea, not the ad copy

Write the stimulus like a product description, not an advert. State what it does, who it's for, and how it works, in plain language. Persuasive copy — a benefit stacked on a benefit, "revolutionary," "finally" — inflates appeal scores and tells you nothing about the underlying idea, because you've tested the writing, not the concept.

Keep format, length and fidelity consistent across every concept in the test. If one is a polished visual with a headline and three benefit bullets and another is a paragraph of text, you're comparing production quality, not ideas.

Include a reason to believe — why this works, why now, why you — and a realistic price where price matters to the decision. An unpriced concept collects inflated intent, because nobody has to weigh the idea against what they'd give up for it.

Before fielding, pre-test the statement on a handful of people for comprehension alone. If they misread what the concept is, every score that follows is noise, not signal.

## Designing the concept test survey: questions that produce a decision

Structure the survey around the decision, not around everything you're curious about:

1. Comprehension check — what do you think this product does?
2. Appeal and relevance — Likert-scale ratings.
3. Purchase or usage intent.
4. Open-ended "why" behind the score.
5. Uniqueness and believability against what's already available.
6. Likes, dislikes, and barriers.

Pair every scaled question with an open follow-up. The score tells you how much; the open answer tells you why — and why is what turns a number into a decision. A 6 out of 10 appeal score means one thing next to "I'd need this in my language" and something else next to "not interested, I already have a solution."

Keep the whole survey under about ten minutes. Fatigue changes how people answer — a tired respondent starts picking the middle option just to finish. Use the same scale and the same wording across every concept you test; a different anchor breaks comparability between them.

Treat the standard 5-point purchase-intent question as directional, not literal. "Definitely would buy" is not a purchase order. Read the top-two-box score as relative signal against a benchmark, not a forecast of what will happen.

Run the survey past five or six people who match your target respondent before fielding, purely to catch confusing flow or ambiguous wording. The underlying [survey and questionnaire design fundamentals](/blog/ux-research-methods) apply here in full.

## Who to test and how many: recruiting and sample quality

Screen tightly to the segment the concept is actually for. A concept only "passes" relative to the audience judging it — a broad, loosely screened sample tells you less than a smaller, precisely targeted one.

For a stable quantitative read, plan on roughly 150–200 completed responses per segment, with 100 as a floor for a genuinely niche audience. For qualitative depth, 5–10 interviews per segment is usually enough to reach saturation — the point where new conversations stop surfacing new reasoning.

Sample quality beats sample size. A handful of inattentive or fraudulent respondents clicking through for an incentive quietly inflates top-box scores and buries the barriers real prospects would raise. Build in attention checks and screen out speeders before you trust a single number — here's how to [detect fake survey respondents](https://blog.glasgow.works/blog/how-to-detect-fake-survey-respondents) systematically, rather than by eye.

B2B changes the maths. Buying groups are smaller, harder to reach, and the decision-maker isn't always the user, so the balance shifts toward fewer, deeper conversations rather than a large panel survey. In a concept test we ran for a B2B product entering several new markets, the real question wasn't whether the concept appealed — it was which segment, in which market, was worth building for at all. That took nineteen to twenty-five structured interviews per market across Brazil, Mexico, Malaysia and Chile: a segment-level call needs a qualitative read on how each market's businesses actually buy, not a survey headline. We cover the wider differences in [concept testing for B2B SaaS](https://blog.glasgow.works/blog/ux-research-b2b-saas).

## Guarding against false positives: politeness and stated-preference bias

The most common failure mode in concept testing isn't a bad concept — it's a respondent being polite. People overstate intent to look agreeable, to seem forward-thinking, or simply to give the interviewer something positive to hear. "Definitely would buy" routinely overstates what actually converts once real money and effort are involved.

There's a related trap: the uniqueness paradox. Genuinely novel concepts often score lower on appeal and intent than familiar ones, because unfamiliar things are harder to place and mentally price. A high score can flag something comfortably unremarkable rather than something worth building.

Top-two-box scores are fragile to compare, too. Acquiescence bias, how a respondent personally interprets a 5-point scale, and the fidelity of what they were shown all move the number. A 45% top-two-box score from a polished mock-up and a tightly screened sample isn't the same 45% as one from a text blurb and a broad panel — treat cross-study comparisons with caution unless the method was held constant.

The countermeasures are straightforward. Blind branding and price. Avoid group settings where enthusiasm feeds on itself. Weight open-ended barriers as heavily as the headline score. And where you can, look for a behavioural proxy — a sign-up, a deposit, a waitlist join — because a small action is worth more than a large stated intent.

## From scores to a defensible go / refine / kill decision

Set your decision criteria before you field the survey — the score threshold, the segments that must respond positively, and the evidence that would trigger a kill. Decide this in advance, or you'll rationalise whatever number you get after the fact.

Prefer your own benchmark over a borrowed one. A norm built from your last ten concept tests, run with a consistent method, tells you more than a published industry average built from a different category, sample, and stimulus format.

Weigh three lenses together, not one score in isolation: the quantitative read against your benchmark, the qualitative articulation of value and barriers, and whether a genuinely viable niche segment exists even if the topline is unremarkable. A mediocre overall score with one segment lighting up is often a stronger "go" than a flat, average one across the board.

Write the recommendation as a decision, not a report. Go, refine, or kill — with the reasoning behind it and the residual risk you're carrying forward. "Go, but the price sensitivity in the open-ends needs a pricing experiment before commit" is usable. "Scores were generally positive" is not.

An accepted concept doesn't go straight to build. Route it into [turning insight into a prioritised decision](/blog/insight-to-impact) and the next validation step — a pricing test, a landing page, a small behavioural pilot — that closes the gap between what people said and what they'll actually do.

## Frequently asked questions

### What's the difference between concept testing and usability testing?

Concept testing checks whether an idea is appealing, relevant and understood before you build anything. Usability testing checks whether people can complete tasks in a working interface. They answer different questions at different stages — running one where the other belongs gives you an answer to the wrong problem.

### How many people do I need for a concept test?

For a quantitative read, plan on roughly 150–200 completed responses per segment, with 100 as a floor for a niche audience. For qualitative depth, 5–10 interviews per segment usually reaches saturation. A tightly screened, high-quality sample beats a larger, loosely screened one every time.

### Monadic or sequential monadic — which should I use?

Use monadic testing for concepts that are very different, complex, or when you need a clean, bias-free read on each one individually — it costs more sample but avoids contrast and order effects. Use sequential monadic when concepts are similar and budget or timeline is tight; it's efficient, but randomise the order and expect some contrast effect between concepts shown back-to-back.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Concept Testing: Run a Test That Yields a Decision",
  "description": "Learn how to run a concept test that produces a defensible go, refine, or kill decision — survey design, methods, sample sizing, and guards against false",
  "datePublished": "2026-07-31",
  "dateModified": "2026-07-31",
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
    "@id": "https://blog.glasgow.works/blog/concept-testing"
  },
  "keywords": "concept testing, how to run a concept test, product concept testing, concept test survey, validate a product concept, concept testing methods"
}
</script>

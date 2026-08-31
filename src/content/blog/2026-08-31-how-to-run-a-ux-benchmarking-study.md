---
title: "How to Run a UX Benchmarking Study (Metrics + Baselines)"
description: "Learn how to run a UX benchmarking study: pick metrics like SUS and SUPR-Q, set a defensible baseline, size your sample, and track UX gains over time."
pubDate: 2026-08-31
updatedDate: 2026-08-31
readingTime: 12
slug: "how-to-run-a-ux-benchmarking-study"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "UX benchmarking scorecard tracking SUS, SUPR-Q, and task success rate trends over successive product releases"
tags:
  - "UX Research Methods → UX benchmarking (new method subtopic)"
  - "UX benchmarking metrics"
  - "usability benchmarking study"
  - "SUS and SUPR-Q benchmarking"
  - "competitive UX benchmarking"
---
<!-- gr:toc -->

## On this page

- [What a UX benchmarking study is (and when to run one)](#what-a-ux-benchmarking-study-is-and-when-to-run-one)
- [Choose your benchmarking metrics: SUS, SUPR-Q, task success and time](#choose-your-benchmarking-metrics-sus-supr-q-task-success-and-time)
- [Design the study: moderated vs unmoderated, within vs between subjects](#design-the-study-moderated-vs-unmoderated-within-vs-between-subjects)
- [Set a defensible baseline for round one](#set-a-defensible-baseline-for-round-one)
- [Sample size, statistical significance, and participant quality](#sample-size-statistical-significance-and-participant-quality)
- [Competitive UX benchmarking against rivals and industry norms](#competitive-ux-benchmarking-against-rivals-and-industry-norms)
- [Track over time: cadence, scorecard, and reporting](#track-over-time-cadence-scorecard-and-reporting)
- [A benchmarking round in practice: lessons from the field](#a-benchmarking-round-in-practice-lessons-from-the-field)
- [Common UX benchmarking pitfalls to avoid](#common-ux-benchmarking-pitfalls-to-avoid)
- [FAQ](#faq)
- [Your next step](#your-next-step)

Your team ships redesign after redesign, and sooner or later someone in leadership asks whether the experience is actually getting better. A pile of usability findings won't answer that. Knowing how to run a UX benchmarking study gives you a measurement system that returns comparable numbers under the same conditions, round after round.

## What a UX benchmarking study is (and when to run one)

UX benchmarking means measuring the experience with repeatable metrics, so you can compare results across time, releases, or competitors. The weight sits on *repeatable*: the same tasks, the same metrics, the same participant profile, every time.

That is what sets it apart from one-off usability testing. A diagnostic session with 5–8 users tells you what is broken and why. A benchmark is a standing measurement system that tracks whether the product is good and getting better. One finds problems; the other quantifies progress.

Run one when you have a clear reason to track a trend:

- Before and after a redesign, to show the change worked
- On a fixed quarterly cadence, as a product health metric
- To position against competitors
- To prove research ROI to leadership in numbers they trust

Benchmarking answers "how good, and improving?" It will not tell you *why* a number moved, so pair every round with qualitative work. Our overview of [UX research methods](/blog/ux-research-methods) shows where it fits.

## Choose your benchmarking metrics: SUS, SUPR-Q, task success and time

Pick a small set of standard metrics with published norms, then never change it. Two families matter here.

Study-level attitudinal metrics capture overall perception:

- **SUS (System Usability Scale)** — 10 items, scored 0–100. The widely cited average is about 68; above 80 is good.
- **SUPR-Q (Standardised User Experience Percentile Rank Questionnaire)** — a percentile against a database of hundreds of sites, across usability, trust, appearance, and loyalty. Strong for websites and competitive work because the score is already relative.
- **UMUX-Lite** — two items; tracks SUS closely when you need something shorter.
- **NPS** — a loyalty proxy. Useful to leadership, weak as a usability signal on its own.

Task-level behavioural metrics map to the ISO 9241-11 definition of usability — effectiveness, efficiency, satisfaction:

- **Task success rate** (effectiveness). Published benchmarking data puts the average near 78%. Below 70% signals serious problems.
- **Time on task** (efficiency). Compare successful attempts only.
- **Errors** — count deviations from the ideal path.
- **Single Ease Question (SEQ)** — one 7-point rating of task difficulty, asked straight after each task.

Use the attitudinal metrics for the headline trend and the behavioural ones for the detail beneath it. A flat SUS sitting next to faster task times is a common pattern.

Resist metric bloat. Four or five measures you repeat identically beat a dozen you collect inconsistently. Write the norm next to each metric, and a raw number becomes a judgement.

For how benchmarking compares with qualitative approaches, see [usability testing vs user interviews](https://blog.glasgow.works/blog/usability-testing-vs-user-interviews).

## Design the study: moderated vs unmoderated, within vs between subjects

Unmoderated testing is the default for benchmarks. No moderator means no moderator variance, it scales to large samples cheaply, and every round runs identically from a script — exactly the properties a trend needs.

Moderated sessions earn their cost in two cases: complex or B2B workflows that are hard to script for strangers, and moments when you need the reasoning behind a metric that moved. A hybrid works well — unmoderated for the core scorecard, a few moderated sessions for colour. Our note on [AI-moderated interviews](https://blog.glasgow.works/blog/ai-moderated-interviews-when-how-to-run) covers a middle option.

**Within-subjects:** one person completes every task or uses every product. It controls for individual differences and needs fewer participants, but risks order effects and fatigue, so rotate the sequence.

**Between-subjects:** each person sees one product or condition. No carryover, but you need more people per group because you are comparing different individuals.

Lock the design once:

- Representative tasks with written success criteria
- Exact prompt wording
- The starting URL or build, and the device profile
- How and when each metric is captured

Settle your data sources too. Instrumented analytics give behaviour at scale; a dedicated usability benchmarking study gives controlled task and attitudinal measures. Most programmes use both.

## Set a defensible baseline for round one

The first round becomes the number every future round is judged against, so treat it with care.

Run a pilot first with 3–5 participants. Its job is to break the method: confusing prompts, tasks that can't be completed, tracking that doesn't fire. Expect to revise the protocol and throw the pilot data away.

Then document everything, because "defensible" means someone can audit it a year later:

- **How** you measured each metric, including exact question wording
- **Who** took part — segment definition and the full recruitment screener
- **When** it ran
- **Session conditions** — device, moderated or unmoderated, incentive, any time limit
- **The number** itself, with its confidence interval

Freeze all of that into a reusable plan. Future rounds then come down to re-recruiting to the same screener and re-running the same script. A [user research plan template](https://blog.glasgow.works/blog/user-research-plan-template) gives you the structure.

The first round has no history to compare against. Anchor it instead against an industry norm (SUS 68, SUPR-Q 50th percentile) and against two to four competitors measured in the same session.

Store the baseline where the whole team can reach it — a shared scorecard, not a slide in one researcher's deck.

## Sample size, statistical significance, and participant quality

Benchmarks need bigger samples than diagnostic tests. Five users find most usability problems; they cannot tell you whether a 4-point SUS change is real. What drives the number is effect size — the smallest difference you need to detect.

Published sample-size guidance for comparing two rounds gives rough anchors:

- Detecting a change of around 10 percentage points at 90% confidence needs roughly 100–120 participants per group
- Differences of 3–5 points need 300 or more
- Between-subjects designs need that count in *every* group, not in total

Run a significance calculator with your target effect size before you launch, not after. To compare rounds and competitors, use a two-sample t-test for two groups or ANOVA for three or more.

Sample quality matters as much as size. Fake and AI-generated participants, along with click-through farmers, quietly bias a benchmark — usually toward the middle, which flattens the very change you are trying to catch. Screen hard and read the open-ended answers; our guide to [detect fake & AI participants](https://blog.glasgow.works/blog/detect-fake-ai-generated-participants-user-research) covers the tells.

Balance rigour against budget and recruiting time — our breakdown of [how much user research costs](https://blog.glasgow.works/blog/how-much-does-user-research-cost) has figures.

## Competitive UX benchmarking against rivals and industry norms

Competitive benchmarking places your score next to other products so the number has context. Pick two to four direct competitors — the ones users would genuinely switch to — plus an industry percentile from SUPR-Q as a fixed reference.

Keep tasks functionally equivalent, not identical. "Find the total price for your situation" might be a pricing calculator on one product and a quote form on another: same user goal, different interface, fair comparison. Copying wording that only makes sense on your own product is not.

Competitor and norm data earn their keep on the first round, when you have no history. "SUS 71, against a category range of 66–74 and an average of 68" is a defensible starting position.

Synthetic or AI-generated "users" are no substitute for real competitor data. They reproduce training-data patterns, not how people actually struggle with a region filter or a long dropdown. We cover the limits in [synthetic users in UX research](https://blog.glasgow.works/blog/synthetic-users-ux-research).

Turn each gap into a prioritised opportunity — "checkout is 20 seconds slower than the nearest rival" — not a vanity scoreboard.

## Track over time: cadence, scorecard, and reporting

Set a fixed cadence and hold it. Quarterly suits most teams; per major release suits slower ship cycles. The rule that matters: do not change the protocol mid-track. A protocol change resets the baseline, and you start again.

Build a UX scorecard — one view that shows every metric and its trend:

- SUS and SUPR-Q, round by round
- Task success rate and time on task, per task
- SEQ, per task
- Each metric against its norm

For every number, show three deltas side by side: versus baseline, versus the previous round, and versus your competitor set or the industry norm. A metric can rise against last quarter while still sitting below the category average, and leadership needs to see both.

Annotate the timeline with what shipped. Put the release that reworked onboarding on the same axis as the onboarding task-success line, so anyone can see which decision to credit or blame when a metric moves.

Report the story, not the dashboard. "Task success on account setup rose from 71% to 84% after the March redesign, and support tickets for that flow fell with it" ties a metric to a product change and a business outcome. A screenshot with no narrative gets nodded at and forgotten.

## A benchmarking round in practice: lessons from the field

On a benchmarking programme for a B2B financial-services provider, we kept the metric set deliberately small: SUS and SUPR-Q at study level, plus task success rate, time on task, and the SEQ across four representative tasks — run a pricing calculation, complete sign-up, pay a supplier, and find the details of an assigned specialist. Every round re-recruited to the same screener.

The scores flagged the calculation and payment tasks as the laggards; the paired qualitative sessions explained why. On mobile, several pop-ups and a chat widget covered the main offer on load and had to be closed one by one — a few participants read the stacked overlays as a scam signal. On the specialist page, people tried to tap the advisers' photos to read more and found them unclickable; one wanted the credentials that clinic sites print beside a doctor's photo. In the payment flow, a long list of cities and an unintuitive region filter slowed people down, and confirmation messages didn't make clear whether the bank or the supplier had sent them.

Between rounds, the team swapped the long city list for a search field. We treated that as a task change: prompt wording and success criteria held constant, the change logged as a timeline annotation, no baseline reset. The behavioural metrics for the payment step improved before the attitudinal one did — quicker completion and an easier SEQ rating, with SUS barely shifting. That lag between behaviour and perception is common, which is why the scorecard shows both.

The baseline survived stakeholder challenge for one reason: the screener, script, tasks, and sample size were written down and frozen before the first round, so every comparison was like for like.

## Common UX benchmarking pitfalls to avoid

- **Changing the instrument.** New task wording, a reordered flow, or a different segment breaks comparability. If you must change something, annotate it and read the trend with caution.
- **Under-powered samples.** With 20 participants, a 6-point SUS swing is noise. You will chase ghosts and celebrate variance.
- **Metric overload.** Fifteen metrics collected loosely tell you less than four collected identically. Every metric you add is one more thing to keep stable.
- **No documentation.** If the screener, script, and conditions live in someone's memory, the baseline cannot be reproduced or defended. When that person leaves, the programme resets.

## FAQ

### How many participants do you need for a UX benchmarking study?

It depends on the smallest difference you want to detect. Detecting a change of around 10 percentage points at 90% confidence needs roughly 100–120 participants per group; differences of 3–5 points need 300 or more, and between-subjects designs need that count in each group. Run a significance calculator with your target effect size before launch.

### What is the difference between SUS and SUPR-Q?

SUS is a 10-item questionnaire scoring overall usability from 0 to 100, with a widely cited average around 68. SUPR-Q returns a percentile across four dimensions — usability, trust, appearance, and loyalty — measured against a database of hundreds of sites. That built-in percentile makes SUPR-Q stronger for website and competitive benchmarking.

### How often should you run a UX benchmark?

Pick a fixed cadence and hold it. Quarterly works for most teams; after each major release suits slower cycles. What matters is keeping the protocol identical between rounds so the trend stays comparable.

### Should a UX benchmark be moderated or unmoderated?

Unmoderated is the default: it removes moderator variance, scales cheaply, and keeps every round identical. Use moderated sessions for complex or B2B workflows, or when you need the reasoning behind a metric that moved.

## Your next step

Start with one page of documentation. Write down the four or five metrics you will track, the exact tasks and prompts, the participant screener, and the session conditions. Run a five-person pilot against it this month, fix what breaks, then book your first full round. The baseline you can defend is the one you wrote down before you collected a single number.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How to Run a UX Benchmarking Study (Metrics + Baselines)",
  "description": "Learn how to run a UX benchmarking study: pick metrics like SUS and SUPR-Q, set a defensible baseline, size your sample, and track UX gains over time.",
  "datePublished": "2026-08-31",
  "dateModified": "2026-08-31",
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
    "@id": "https://blog.glasgow.works/blog/how-to-run-a-ux-benchmarking-study"
  },
  "keywords": "how to run a UX benchmarking study, UX benchmarking metrics, usability benchmarking study, SUS and SUPR-Q benchmarking, competitive UX benchmarking, how to benchmark user experience"
}
</script>

---
title: "How to Detect Fake Survey Respondents in Research"
description: "Learn how to detect fake survey respondents with a practical, low-tooling checklist: screener traps, paradata checks, and open-ended red flags for UX teams."
pubDate: 2026-07-19
updatedDate: 2026-07-19
readingTime: 10
slug: "how-to-detect-fake-survey-respondents"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "Researcher reviewing survey response data on a laptop, flagging suspicious respondent patterns"
tags:
  - "surveys & questionnaire design"
  - "survey fraud detection for researchers"
  - "bot respondents in online surveys"
  - "data quality checks for research surveys"
  - "screening out fraudulent survey responses"
---
<!-- gr:toc -->

## On this page

- [Why this matters: the real cost of fake respondents in DIY research](#why-this-matters-the-real-cost-of-fake-respondents-in-diy-research)
- [Design your screener to filter fraud before it starts](#design-your-screener-to-filter-fraud-before-it-starts)
- [Real-time signals: paradata you can check without enterprise tools](#real-time-signals-paradata-you-can-check-without-enterprise-tools)
- [Open-ended responses: the cheapest, highest-signal fraud check](#open-ended-responses-the-cheapest-highest-signal-fraud-check)
- [Post-fieldwork statistical checks: straight-lining, speeding, and consistency traps](#post-fieldwork-statistical-checks-straight-lining-speeding-and-consistency-traps)
- [A practical low-tooling detection checklist from the field](#a-practical-low-tooling-detection-checklist-from-the-field)
- [When fraud signals mean you need stronger quality guardrails](#when-fraud-signals-mean-you-need-stronger-quality-guardrails)
- [FAQ: detecting fake survey respondents](#faq-detecting-fake-survey-respondents)

## Why this matters: the real cost of fake respondents in DIY research

Run a survey through an open panel link or a self-serve tool, and some share of your responses won't come from real people. Industry estimates put fraudulent or bot-generated data at 15–30% of online survey responses, varying with recruitment source and incentive size.

Enterprise research platforms build fraud-ops tooling straight into the workflow. Qualtrics flags duplicate IPs automatically; IPQualityScore scores respondents against a fraud database. Most product and UX teams don't have that infrastructure. You're running a Typeform, a Google Form, or an in-house tool, recruiting through a mix of customer lists, panels, and social links, with no dedicated quality layer sitting underneath.

The cost isn't just wasted incentive budget. Contaminated data quietly skews the signal you use to prioritise features and ship decisions, because fraudulent responses tend to cluster around whichever answers are easiest to fake — not the ones that reflect reality.

Think of this as a practitioner checklist for how to detect fake survey respondents in research. It's not a fraud-ops platform buying guide.

## Design your screener to filter fraud before it starts

The cheapest fraud prevention happens before fieldwork opens, in the screener.

Build logic checks in, rather than leaning on a single gate question. Ask about company size in one question and team structure in another; a genuine respondent's answers cohere, while a fabricated profile often contradicts itself two questions later. Cross-reference role, seniority, and tenure. Professional fraud respondents optimise for passing the qualifying question, not for consistency across the whole instrument.

Trap questions beat obvious attention checks. "Select 'strongly agree' for this item" has been seen by every experienced click-farm worker and most bots; they pass it without effort. A better trap is a plausible-sounding option nobody in your target population would genuinely pick — a tool, job title, or brand that doesn't exist in your category. Real respondents skip it. Fraudulent ones, scanning for anything that sounds legitimate, sometimes select it.

Keep your invite copy vague about qualifying criteria. Spell out "we need current users approving budgets over $50k" in a recruitment ad, and you've handed fraudulent respondents the exact script the screener is meant to catch.

Require at least one short open-text answer in the screener itself. A sentence or two, in the respondent's own words, is far harder to fake convincingly than a multiple-choice click.

For the underlying structure, see our guide to [screener survey best practices](https://blog.glasgow.works/blog/screener-survey-best-practices-ux-research) and the broader [survey design best practices](https://blog.glasgow.works/blog/survey-design-best-practices-ux) this checklist builds on.

## Real-time signals: paradata you can check without enterprise tools

Paradata — the metadata your survey tool captures alongside the answers — gives you signal without extra tooling.

Set a minimum completion-time threshold before fieldwork starts. Time a handful of pilot completes yourself, then flag anything under roughly half that median. A respondent finishing a 10-minute survey in 90 seconds hasn't read the questions.

Most survey platforms expose IP address or approximate location as a standard field, even on free tiers. Check it against your expected recruitment region. A cluster of respondents from a country you didn't target, or from one city when your sample should be spread geographically, is worth investigating before you look at the actual answers.

Watch for duplicate device or browser fingerprints. Typeform, Google Forms, and most panel tools log a browser signature or device ID alongside each submission. Repeated fingerprints across supposedly distinct respondents point to one person submitting multiple times, or a click-farm working from a shared device pool.

Scan the email field for pattern red flags: long alphanumeric strings that look auto-generated, disposable domains, addresses that don't match the name given elsewhere. No single signal is conclusive — a genuine respondent might use a privacy-focused email — but stacked together they narrow your review list fast.

For the technical detail behind these signals, our [detailed guide to survey bot detection signals](https://blog.glasgow.works/blog/survey-bots-fake-responses-ux-research) covers advanced stacking methods for teams that need to go further.

## Open-ended responses: the cheapest, highest-signal fraud check

Open-text fields remain the highest-signal, lowest-cost fraud check available, because generating convincing, specific, on-topic prose at scale is still harder than clicking through a matrix question.

Read for gibberish first — strings of words that don't form a coherent sentence, or answers that parrot the question back without adding content. Watch for copy-pasted or off-topic text that doesn't address what was asked, a common shortcut for respondents rushing through multiple surveys. Generic, AI-sounding phrasing is now its own category: smooth, grammatically correct, devoid of specifics. Genuine respondents mention concrete detail — a tool name, a frustration, a number. Fabricated answers tend to stay abstract. Tone-register mismatches earn a second look too: polished formal English sitting inside a survey of frontline staff, or the reverse.

Don't triage open-ends in isolation. Fold this check into the same pass where you're [analysing survey data qualitatively](https://blog.glasgow.works/blog/how-to-analyse-survey-data-qualitatively). Once you've seen what genuine, on-topic answers from your population sound like, fraud patterns jump out faster.

For quick manual triage, skim every open-end before formal coding starts, sorting for repetition and genericness alone. It takes minutes and catches most of what matters.

## Post-fieldwork statistical checks: straight-lining, speeding, and consistency traps

Once fieldwork closes, a handful of spreadsheet checks catch what individual paradata signals miss.

Straight-lining — selecting the same point on a scale across every item in a matrix question — shows up in a standard deviation formula. Calculate the standard deviation of each respondent's answers across the grid; a result at or near zero means every answer was identical, a strong flag for grids with five or more items.

Flag completion-time outliers relative to the median, not a fixed cutoff. If your median completion time is 8 minutes, treat anything under 3 minutes — and, separately, anything far over the median — as worth a closer look.

Repeated or rephrased questions, placed once near the start and once near the end, catch inconsistency directly. Ask the same underlying fact two different ways; a genuine respondent's answers align, a fabricated one often doesn't.

None of these signals is decisive alone. Combine two or three — fast completion plus straight-lining plus a mismatched repeated question, say — into a single composite flag, and you have a defensible fraud-risk score without paid software.

## A practical low-tooling detection checklist from the field

In a recent B2B software market-validation study, we ran a short survey against a mixed sample of qualified professionals and a broader outreach list. A small cluster of completes stood out for sharing three traits at once: completion times well under half the survey's expected length, IP locations well outside the target market despite fluent, region-specific English answers, and open-text responses that read smoothly but stayed generic — no tool name, process detail, or figure ever surfaced.

No single signal would have justified exclusion alone. Fast completion can mean an engaged expert who knows the topic cold. Mismatched geography can mean a VPN. It was the combination — speed, location, and generic text appearing together across the same cluster of responses — that raised the flag.

Rather than deleting the responses outright, we quarantined them: tagged, excluded from the primary analysis, retained with documentation of why. Then we checked whether the remaining sample still met the size needed for the decision at hand. It did, so we didn't re-field.

That case distils into a reusable checklist:

1. Set a minimum completion-time threshold before launch
2. Check IP/geo against expected recruitment region
3. Build one honeypot or trap question into the screener
4. Require at least one open-text answer per respondent
5. Run a straight-lining check on any matrix questions
6. Scan email addresses for disposable or auto-generated patterns
7. Cross-check one repeated question at survey start and end
8. Quarantine flagged responses rather than deleting immediately

Run all eight against a fresh dataset and most fraud clusters surface within an hour.

## When fraud signals mean you need stronger quality guardrails

A rising fraud rate across successive surveys is rarely a one-off. Usually it's a symptom of research scaling faster than its governance — more teams running their own surveys, recruiting through more channels, with no shared quality standard between them.

Ad-hoc detection, applied survey by survey, works up to a point. It stops working once multiple teams field surveys independently, incentive structures attract professional respondents at volume, or a decision carries enough weight that an undetected fraud cluster could change a roadmap. At that point you need a documented quality policy: minimum screener standards, agreed detection checks, and a clear threshold for when a dataset gets re-fielded rather than used as-is.

Fraud detection is one symptom of a wider pattern. See our analysis of [research democratisation risks and guardrails](https://blog.glasgow.works/blog/research-democratization-risks-and-how-to-do-it-right) for the broader picture.

## FAQ: detecting fake survey respondents

### How many fake responses is 'normal' in an online survey?
Industry estimates put fraudulent or bot-generated responses at 15–30% of online data, but the figure varies sharply by recruitment source — an owned customer list sees far less than an open panel link. Check your own paradata rather than assuming a fixed benchmark applies to your fieldwork.

### Can attention checks alone catch bots?
No. Simple checks like "select strongly agree" are well known to click-farm workers and trivial for bots to pass. They catch careless humans, not motivated fraud. Layer screener logic, paradata review, and open-text checks to catch what attention checks miss.

### Should I just delete suspicious responses?
Flag and quarantine rather than delete outright. Document your exclusion criteria for auditability, and check whether the remaining sample still supports the decision you need to make. If it falls short, re-field the affected segment.

### What free tools help detect survey fraud without an enterprise budget?
Platform-native IP and device fields, a honeypot screener question, reCAPTCHA, and spreadsheet standard-deviation formulas for straight-lining cover most of it. Manual review of email patterns and open-text responses fills the rest.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How to Detect Fake Survey Respondents in Research",
  "description": "Learn how to detect fake survey respondents with a practical, low-tooling checklist: screener traps, paradata checks, and open-ended red flags for UX teams.",
  "datePublished": "2026-07-19",
  "dateModified": "2026-07-19",
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
    "@id": "https://blog.glasgow.works/blog/how-to-detect-fake-survey-respondents"
  },
  "keywords": "how to detect fake survey respondents in research, survey fraud detection for researchers, bot respondents in online surveys, data quality checks for research surveys, screening out fraudulent survey responses, identifying low-quality survey data"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many fake responses is 'normal' in an online survey?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reference the widely cited 15-30% industry estimate, note it varies heavily by recruitment source (open panel links vs owned customer lists), and caution against treating any fixed number as a benchmark without checking your own paradata."
      }
    },
    {
      "@type": "Question",
      "name": "Can attention checks alone catch bots?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No — modern bots and click-farm workers routinely pass simple attention checks; explain why layering screener logic, paradata, and open-text review is necessary."
      }
    },
    {
      "@type": "Question",
      "name": "Should I just delete suspicious responses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Recommend flagging and quarantining rather than immediate deletion, documenting exclusion criteria for auditability, and re-fielding if sample size drops below what's needed for the decision."
      }
    },
    {
      "@type": "Question",
      "name": "What free tools help detect survey fraud without an enterprise budget?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "List platform-native hidden fields, honeypot questions, reCAPTCHA, spreadsheet formulas for straight-lining/speeding, and manual IP/email pattern review."
      }
    }
  ]
}
</script>

---
title: "How to Detect Fake & AI Participants in User Research"
description: "A ResearchOps playbook for spotting fake identities, LLM-assisted humans, and AI-agent bots before they poison your study data — from screening to cleanup."
pubDate: 2026-08-16
updatedDate: 2026-08-16
readingTime: 10
slug: "detect-fake-ai-participants-user-research-guide"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "Researcher reviewing a dashboard of participant quality signals flagging fake and AI-generated responses in a user study"
tags:
  - "participant recruitment & panels / data-quality guardrails"
  - "survey bot detection"
  - "research panel data quality"
  - "participant fraud in user research"
  - "screening out AI respondents"
---
<!-- gr:toc -->

## On this page

- [Three threats you're actually defending against](#three-threats-youre-actually-defending-against)
- [Screen them out before they book: recruitment red flags](#screen-them-out-before-they-book-recruitment-red-flags)
- [Catch them live: in-study signals for interviews and surveys](#catch-them-live-in-study-signals-for-interviews-and-surveys)
- [Post-collection forensics: cleaning contaminated data](#post-collection-forensics-cleaning-contaminated-data)
- [Why attention checks and CAPTCHAs stopped working](#why-attention-checks-and-captchas-stopped-working)
- [Build the guardrails into your ResearchOps](#build-the-guardrails-into-your-researchops)
- [Avoid false positives: protect real participants](#avoid-false-positives-protect-real-participants)

## Three threats you're actually defending against

Your study data looks clean until three "different" participants give almost the same answer, phrased almost the same way, on different days. That's usually the first sign that fake or AI-assisted respondents have slipped into what should have been a clean study.

Spotting them starts with pulling apart three threats that most guides lump together. First, classic fraud: duplicate or fabricated human identities, often run by one person or a small farm chasing incentive payments. Second, something subtler — real humans who paste your questions into an LLM (a large language model such as ChatGPT or Claude) and hand back its output as their own opinion. Third, fully autonomous AI agents that complete an entire study — screener, consent, the lot — with no human present at any point.

Why does the mix matter? Because your defence stack has to match where you recruit. On curated, verified panels, LLM-assisted responses tend to sit under 10%. On open marketplaces with light vetting, that figure can run past 80%. This is a different problem from deliberately using synthetic respondents to pressure-test a discussion guide. Here the fakes are uninvited, quietly contaminating a study you're leaning on for real decisions. A contamination rate of just 10–15% is enough to flip a preference finding or invent a theme in qualitative synthesis.

## Screen them out before they book: recruitment red flags

The cheapest place to stop a fake participant is before they ever book a slot. Ask "Do you manage a marketing budget over £50k?" and you've handed a fraudster the qualifying answer in a single read. Ask them to describe how they set that budget last quarter, in their own words, and you're testing the claim rather than confirming it.

Build screeners around specifics a genuine respondent would know without pausing — a recent decision, a tool name, a number pulled straight from memory — and that a fraudster would have to invent. Steer clear of leading questions that spell out the "correct" profile.

Read the metadata alongside the answers. Duplicate or near-duplicate emails — the same name with a different trailing number, or a batch of addresses all created the same week — are a common tell. So are multiple applications from one IP address, or a claimed location that doesn't match the browser's time zone. Free-text screener answers that come back identical, or near-identical, across supposedly unrelated respondents point to a shared script, not coincidence.

For studies with meaningful incentives, or high-stakes decisions riding on the findings, add lightweight identity or liveness verification — a quick photo match, or a live video moment — instead of trusting self-report alone.

None of this needs to feel like a security audit. You're catching bad actors at the earliest, cheapest point in the funnel: a rejected application costs nothing, a contaminated dataset costs you the study. It works best baked into [how you recruit participants for user research](https://blog.glasgow.works/blog/how-to-recruit-participants-for-user-research) from the start, rather than bolted on afterwards.

## Catch them live: in-study signals for interviews and surveys

Screening stops some fraud before it starts. Live signals catch what gets through — and the tells shift depending on the format.

In moderated interviews, ask participants to do something spontaneous on camera: hold up an object, share their screen and scroll to a specific place. A script can't anticipate that. Camera-on liveness is a baseline, not a guarantee, so pair it with questions that demand specifics a fraudster can't conjure on the spot — a date, a named tool, a step they took last time. Watch for unnaturally long pauses before answers that then arrive as polished paragraphs; that often means someone is reading a response generated in another window rather than thinking aloud.

Unmoderated surveys call for different instrumentation. Flag completion times more than three standard deviations below the study mean — genuinely fast responses exist, but a whole cluster of them is a pattern, not luck. Straight-lining through grid questions, paste events in open-text fields, tab-switching away from the survey window, and mouse or keystroke patterns that look mechanically smooth rather than human are all worth logging.

Panel platforms have started building this in. As of early 2026, Prolific's bot authenticity checks flag automated browser environments, and its LLM authenticity checks look for copy-paste behaviour and machine-generated phrasing in open text before a response ever reaches your dataset.

Log these signals in real time, not in a weekly report. That's what lets you pause a suspect session and ask a follow-up on the spot, rather than discovering the problem three weeks into analysis.

## Post-collection forensics: cleaning contaminated data

Some contamination only surfaces once you sit down with the transcripts. LLM-written answers have a texture you learn to recognise: textbook-perfect grammar, no contractions, no typos, and a habit of organising a simple opinion into a tidy, hedged list ("On one hand… on the other…"). The most reliable tell is what's absent — a generic, on-topic answer that never once mentions the actual stimulus you showed them. The specific screen. The exact price you quoted. The detail only someone who saw it would know.

Cross-checking catches what a single read misses. Hold screener answers up against the body of the interview or survey. A respondent who claimed five years of experience in the screener, then describes the basics as unfamiliar in the main session, is a contradiction worth flagging. Implausible demographic combinations, and phrasing that repeats almost word for word across respondents who supposedly don't know each other, both point to a shared script rather than three separate humans.

For quantitative data, layer several checks instead of trusting one. Timing benchmarks catch speeders. Open-end quality scoring — length, specificity, relevance to the stimulus — catches generic filler. Grid-pattern analysis catches straight-lining. Duplicate-device or duplicate-fingerprint clustering catches the same actor submitting under multiple identities.

We've gone deeper on the mechanics of [survey bots and fake responses in UX research](https://blog.glasgow.works/blog/survey-bots-fake-responses-ux-research) and the specific tells in [detecting AI-generated survey participants](https://blog.glasgow.works/blog/how-to-detect-ai-generated-survey-participants) — both worth reading alongside this playbook.

Write your exclusion rule down before you need it. For example: two independent quality flags trigger manual review, three trigger automatic exclusion. And accept that no single detector is fully accurate. Combining signals gets you close; trusting any one of them won't.

## Why attention checks and CAPTCHAs stopped working

Attention checks were built for a different problem — bored humans clicking through a survey without reading it. Against AI agents, they mostly fail. In 2026 testing, standard attention checks caught roughly a third of AI-driven respondents: high specificity when they do catch something, but sensitivity low enough that passing one tells you almost nothing.

The reason is simple. Give an LLM the instruction a careless human would skim, and it reads it perfectly and answers correctly every time. The same holds for CAPTCHAs, honeypot fields, and "please ignore this instruction" traps — modern language models solve or route around all three reliably.

So the practical shift is from checking what a respondent says to checking how they behave: cursor movement, typing rhythm, time-on-page distribution, automation fingerprints in the browser environment. These are far harder to fake, because a fraudster isn't consciously trying to get them "right."

Newer tactics add another layer of evidence — prompt-injection traps hidden in survey text, stylometric analysis of writing style. Treat them as supplements to a behavioural stack, not a replacement for it.

## Build the guardrails into your ResearchOps

Catching fakes study by study is exhausting and inconsistent. The fix is to fold detection into your standing ResearchOps practice, so it isn't something you reinvent under deadline pressure.

Start with panel hygiene: a maintained blocklist of flagged emails, devices, and IPs that carries across studies. Set verification tiers by risk — a low-stakes survey with a modest incentive needs lighter checks than a paid concept test feeding a pricing decision. Build a quality-scoring rubric that folds the signals from earlier in this piece into one repeatable score, and write an incident-response process for the day a dataset turns out to be contaminated after findings have already gone out.

Assign ownership clearly. Someone screens applications, someone audits a sample of "clean" data before analysis starts, and someone signs off on the dataset before findings reach stakeholders. Version your exclusion criteria the way you'd version any other methodology document, and keep an audit trail — which respondents were excluded, on what evidence, by whom — so the decision holds up when a client or a peer reviewer picks at it months later.

In our own qualitative work, phrasing overlap has more than once surfaced only at synthesis, never at screening. Respondents who each passed the screener and showed no timing red flags turn out, once you lay the transcripts side by side, to describe an experience in near-identical language. It's an easy pattern to miss reading transcripts one at a time, and an easy one to catch the moment you compare them directly. That's why a phrasing-overlap scan now sits as a standing step in our qual synthesis workflow, run before any theme gets written up, as part of [your wider research operations practice](/blog/research-operations) rather than something reached for only when a study already feels off.

## Avoid false positives: protect real participants

Any detection system tuned to catch fraud will eventually catch real participants too. A non-native English speaker may write short, careful sentences that read suspiciously clean. A participant with a motor impairment may take far longer than the study mean to finish a task. A meticulous respondent may give an answer so structured it looks like the "textbook" pattern flagged earlier. None of these, on its own, is evidence of fraud.

Never exclude on a single signal. When something looks off, give the participant a fair path first — a short clarifying follow-up, or the offer to reschedule — before you write them off, and document why you went the way you did either way.

Be open that sessions are monitored for quality, but don't publish the specific triggers that would let a fraudster route around them. Treat every exclusion as a reversible, evidence-weighted decision, not an accusation. You're after a clean dataset, not a verdict on any one person.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How to Detect Fake & AI Participants in User Research",
  "description": "A ResearchOps playbook for spotting fake identities, LLM-assisted humans, and AI-agent bots before they poison your study data — from screening to cleanup.",
  "datePublished": "2026-08-16",
  "dateModified": "2026-08-16",
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
    "@id": "https://blog.glasgow.works/blog/detect-fake-ai-participants-user-research-guide"
  },
  "keywords": "how to detect fake and AI-generated participants in user research, survey bot detection, research panel data quality, participant fraud in user research, screening out AI respondents, attention checks vs LLM survey bots"
}
</script>

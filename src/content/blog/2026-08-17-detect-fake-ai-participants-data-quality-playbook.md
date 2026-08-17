---
title: "How to Detect Fake & AI Participants in User Research"
description: "Bots and AI-assisted respondents flood research panels. Use this vendor-neutral playbook to screen, detect, and exclude fakes—and protect your data quality."
pubDate: 2026-08-17
updatedDate: 2026-08-17
readingTime: 12
slug: "detect-fake-ai-participants-data-quality-playbook"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "Researcher reviewing a panel of survey responses flagged for bot and AI-generated participant detection"
tags:
  - "participant recruitment & panels / research quality guardrails (ResearchOps)"
  - "research panel data quality"
  - "bot and fraudulent survey respondents"
  - "AI-generated survey responses detection"
  - "screening out fake research participants"
---
<!-- gr:toc -->

## On this page

- [Why fake and AI-generated participants now threaten your data](#why-fake-and-ai-generated-participants-now-threaten-your-data)
- [The three fraud types you're actually screening for](#the-three-fraud-types-youre-actually-screening-for)
- [Layer 1 — screen fraud out before you field](#layer-1-screen-fraud-out-before-you-field)
- [Layer 2 — catch fraud live with in-field behavioural signals](#layer-2-catch-fraud-live-with-in-field-behavioural-signals)
- [Layer 3 — spot AI-generated open-text after collection](#layer-3-spot-ai-generated-open-text-after-collection)
- [Detecting fakes in moderated interviews and usability sessions](#detecting-fakes-in-moderated-interviews-and-usability-sessions)
- [A red-flag rubric: include, quarantine, or exclude](#a-red-flag-rubric-include-quarantine-or-exclude)
- [Turn detection into a repeatable ResearchOps SOP](#turn-detection-into-a-repeatable-researchops-sop)
- [Protecting data quality is an ongoing practice](#protecting-data-quality-is-an-ongoing-practice)
- [FAQ](#faq)

## Why fake and AI-generated participants now threaten your data

Usable response rates on incentivised research panels have collapsed. Researchers once expected 70–75% of responses to be usable. Industry reports now put some panels closer to 10%. That drop isn't a screening failure on your part — it's bots, click-farms, and AI-assisted humans crowding out real respondents.

Trust has followed the data down. One widely cited industry survey found only around 8% of researchers trust AI-generated data at face value. The bigger risk, though, is quieter than an obvious block of bad responses. Fraud seeds itself a handful of entries at a time into an otherwise genuine panel, nudging means, distorting segment sizes, and validating a product or pricing decision that should never have shipped.

This guide is about how to detect fake and AI-generated participants in user research — not how to build synthetic panels or use AI as a research shortcut, which is a different conversation entirely. Detection sits inside [research operations guardrails](/blog/research-operations): the unglamorous, process-level work that decides whether your findings can be trusted at all.

## The three fraud types you're actually screening for

Fraud in research panels isn't one problem. It's three, and they don't behave alike — which is exactly why a single screening tactic never catches everything.

**Automated bots and scripts** fill out surveys programmatically, often faster than any person could manage, with no one behind the screen. They fail almost any behavioural or device check, because they can't reproduce genuine human variance.

**Farmed or duplicate human respondents** are real people, just not the people you're paying for — click-farm workers, professional survey-takers running multiple identities, or respondents who don't meet your screening criteria. They pass bot checks easily. They fail identity and consistency checks: the same device reappears under a new name, or the same phrasing recurs across "different" respondents.

**Real people using AI assistants to draft answers** are the hardest to catch. They pass attention checks and are genuinely who they claim to be. What gives them away is linguistic — an open-text answer that reads like a polished essay rather than someone describing their own Tuesday.

Agentic AI tools blur these categories further, executing multi-step tasks at bot-like speed with human-like variance in phrasing. No single check catches all three. You need layered defence, with each layer tuned to a different signal.

## Layer 1 — screen fraud out before you field

The cheapest fraud to catch is the fraud that never gets through the door.

**Write screeners fakes can't game.** Avoid leading questions that telegraph the "correct" answer. Ask for open, specific detail about a workflow or a recent frustration — something only someone who does the job would know off the top of their head. Add a plausible-but-false "trap" option (a tool or process that sounds real but doesn't exist) and disqualify anyone who selects it.

**Ask for proof, not self-report, where you can.** A purchase confirmation, an account screenshot, or a professional credential is harder to fabricate than a checkbox claim — especially for higher-incentive B2B studies, where the payoff for lying is larger.

**Harden the entry point technically.** Deploy reCAPTCHA v3 and honeypot fields that only bots trigger. Send unique, single-use invite links rather than an open URL. Block known VPN ranges and flag duplicate IP addresses. Don't post survey links on open social channels, where they circulate well beyond your intended sample.

**Vet your panel source before recruitment starts.** Ask vendors what their fraud detection process looks like, their replacement policy for flagged responses, and their historic contamination rate. A vendor who can't answer clearly is a risk before you've fielded a single response.

## Layer 2 — catch fraud live with in-field behavioural signals

Screening filters most fraud before it starts. What gets through shows up in behaviour — if you're watching while the study is live, rather than only afterwards.

**Track completion telemetry as responses come in.** A survey that takes real respondents 12 minutes but gets completed in 90 seconds is a signal, not a coincidence. Watch for straight-lining on grid questions, copy-paste or tab-switching on open text, and device fingerprints consistent with automated or virtualised environments.

**Run attention checks and bot checks together.** They catch different things in practice: attention checks flag inattentive but genuine humans, bot checks flag automation. Rely on one and you leave a gap the other would have closed. For the specific signals worth automating, see this guide to [spotting survey bots and fake responses](https://blog.glasgow.works/blog/survey-bots-fake-responses-ux-research).

**Watch entry patterns at the panel level, not just per response.** A sudden surge of completions from one email domain, a cluster from a geography that doesn't match your target market, or dozens of submissions inside a ten-minute window all deserve a manual look — even when each individual response looks clean.

**Set thresholds that flag, not auto-exclude.** Route suspicious responses to a review queue. Automatic exclusion on a single signal risks dropping genuine respondents who type fast or answer briefly.

## Layer 3 — spot AI-generated open-text after collection

Once fieldwork closes, the fraud that slipped through screening and live monitoring tends to surface in the text itself.

**Learn the linguistic tells.** AI-generated open-text answers often read as suspiciously polished — even, formal grammar with none of the typos, fragments, or asides a real person writes under time pressure. Watch too for "mirroring", where a respondent reuses the question's own wording almost verbatim instead of paraphrasing it.

**Design prompts that demand recent, specific, personal detail.** Ask what a respondent did the last time they hit a particular problem — name the tool, the date, the exact step where it went wrong. That detail is hard for a language model to invent convincingly, and hard for a respondent copying a model's output to backfill.

**Treat detection tooling as an estimate, not a verdict.** Classifiers built to flag AI-generated text report strong precision — often cited in the high 90s as a percentage — but they're producing a probability, not a certainty. Human review of flagged responses stays essential, particularly for borderline cases. This piece on [detecting AI-generated survey participants](https://blog.glasgow.works/blog/how-to-detect-ai-generated-survey-participants) is a useful companion for building that review step.

**Use emerging methods carefully.** Techniques such as cognitive-trap questions, designed to expose model limitations, work today but age quickly as models improve. Detection is a practice you revisit, not a fixed toolkit.

## Detecting fakes in moderated interviews and usability sessions

Qualitative sessions carry their own fraud risk, and the defences look different — you have a live person to observe rather than a text file to analyse.

**Verify identity on camera at the start of the call.** Confirm role and organisation details live, in the participant's own words, rather than accepting screener answers as settled. Require cameras on for the full session; resistance without a clear reason is worth a second look. Watch for audio or eye-line lag that suggests someone reading from a teleprompter or an AI assistant running alongside the call.

**Break from the script deliberately.** Ask an unexpected follow-up that isn't in your discussion guide. A memorised or AI-fed answer tends to fall apart when the question doesn't match what was prepared for.

**Note behavioural tells as they happen:** answers that sound read rather than spoken, long pauses followed by unusually fluent replies, or reluctance to screen-share a document or product they claim to use.

**Keep backup candidates on standby**, with a documented escalation path for no-shows or suspected fraud, so one flagged session doesn't derail your fieldwork schedule.

## A red-flag rubric: include, quarantine, or exclude

A single red flag rarely proves fraud on its own. Weighting signals across layers gives you a defensible way to decide what to do with a borderline response.

| Signal | Layer | Weight |
|---|---|---|
| Failed bot check / honeypot trigger | Screening | Hard flag |
| Duplicate device fingerprint or IP | Screening / live | Hard flag |
| Completion time far below plausible minimum | Live | Soft flag |
| Straight-lining or copy-paste on open text | Live | Soft flag |
| Mirrored question phrasing in open text | Post-collection | Soft flag |
| High-confidence AI-text classifier score | Post-collection | Soft flag |
| Refusal to enable camera / screen-share (qual) | Session | Hard flag |
| Inconsistent screener answer under live probing | Screening / session | Hard flag |

**Decide in three tiers.** No flags, or one soft flag with a reasonable explanation: include. Two or more soft flags: quarantine for manual review before the response enters your dataset. Any hard flag, or three or more soft flags together: exclude, and document why.

**When you exclude, follow through consistently.** Withhold or reclaim the incentive per your study's stated policy. Request a replacement respondent from the panel vendor rather than quietly shrinking your sample. Log the case so you can spot patterns across studies.

We've watched this play out more than once in concept and pricing studies for B2B and consumer clients. A batch of screener responses arrives through an open panel link. Several share a device fingerprint with another "distinct" respondent. The open-text answers reuse the same industry terminology — slightly misapplied — in near-identical phrasing. Quarantining and excluding that batch has changed findings meaningfully: an inflated willingness-to-pay figure turned out to be an artefact of the contaminated responses, and the clean sample showed noticeably more price sensitivity once they were removed.

## Turn detection into a repeatable ResearchOps SOP

Detection tactics that live in one researcher's head don't scale, and they don't survive that researcher moving to a different project. Codify the playbook.

**Build four standing artefacts:** a screener template with built-in trap questions, a live-monitoring checklist for the tools and thresholds you use during fieldwork, a post-collection triage script for reviewing flagged text, and an exclusion log that records every case and its reasoning.

**Set vendor accountability in writing.** Fraud SLAs, replacement terms for flagged responses, and a shared definition of quality metrics belong in the recruitment contract — not an informal conversation after a study has already gone wrong.

**Track quality KPIs over time**, not just per study: flag rate, exclusion rate, and contamination trend by panel source. Review these quarterly. Detection tactics decay as fraud tactics adapt, and a screener that worked well six months ago may already be showing gaps.

**Bake authenticity checks into every study kickoff**, alongside consent and audit-trail requirements, so quality review is a standard line item rather than something bolted on under pressure once a study already looks compromised.

## Protecting data quality is an ongoing practice

The model holds together in five steps: screen before fielding, detect during collection, verify text after the fact, decide against a documented rubric, and run the whole thing as a repeatable SOP rather than a one-off effort.

None of these tactics stay effective indefinitely. Fraud methods evolve, models improve, and a detection approach that works well this year will need revisiting next. Treat it as ongoing maintenance — the same way you'd treat security patching — not a project you finish once.

Start smaller than a full overhaul. Pull up your current screener this quarter and add one new signal from each layer above: a trap question, a live behavioural threshold, a post-collection linguistic check. That's enough to materially cut your exposure before your next study goes into field.

## FAQ

### Can you detect AI-generated survey responses with 100% accuracy?

No. Leading classifiers report strong precision, often cited in the high 90s as a percentage, but they produce a probability score, not a certainty. Combine automated classifiers with human review of flagged responses and layered checks across screening, live monitoring, and post-collection analysis, rather than trusting one tool to make the call.

### What are the fastest red flags that a participant is fake or AI-assisted?

Completion times far below what the survey plausibly requires, straight-lining on grid questions, copy-paste or tab-switching on open text, and answers that mirror the question's own wording are the quickest tells. Add suspiciously polished, generic prose, duplicate device fingerprints or VPN traffic, and screener answers that don't hold up under live probing, and you've covered most of what shows up in practice.

### How do I keep bots and fraudulent respondents out before fielding?

Design screeners fakes can't game: ask for specific, experiential detail only a genuine user would know, and add a plausible-but-false trap option to disqualify guessers. Require proof of qualification where the stakes justify it. Harden the entry point with reCAPTCHA v3, honeypot fields, unique single-use invite links, and IP/VPN blocking. Vet your panel vendor's fraud SLAs and replacement terms before recruitment starts — not after a contaminated batch comes back.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How to Detect Fake & AI Participants in User Research",
  "description": "Bots and AI-assisted respondents flood research panels. Use this vendor-neutral playbook to screen, detect, and exclude fakes—and protect your data quality.",
  "datePublished": "2026-08-17",
  "dateModified": "2026-08-17",
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
    "@id": "https://blog.glasgow.works/blog/detect-fake-ai-participants-data-quality-playbook"
  },
  "keywords": "how to detect fake and AI-generated participants in user research, research panel data quality, bot and fraudulent survey respondents, AI-generated survey responses detection, screening out fake research participants, protecting research data quality"
}
</script>

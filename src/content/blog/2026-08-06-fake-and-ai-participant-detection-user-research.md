---
title: "How to Detect Fake & AI Participants in Research"
description: "A practitioner's playbook of screening, timing, and behavioral signals to spot bots, AI agents, and fake respondents before they poison your research data."
pubDate: 2026-08-06
updatedDate: 2026-08-06
readingTime: 10
slug: "fake-and-ai-participant-detection-user-research"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "Researcher reviewing flagged survey and interview responses on a dashboard to detect fake and AI-generated participants"
tags:
  - "participant recruitment & panels / research quality guardrails"
  - "AI-generated survey respondents"
  - "bot detection in UX research"
  - "research data quality checks"
  - "fraudulent research panel participants"
---
<!-- gr:toc -->

## On this page

- [Why fake participants are a 2026-scale problem](#why-fake-participants-are-a-2026-scale-problem)
- [Map your attack surface: where fraud actually enters](#map-your-attack-surface-where-fraud-actually-enters)
- [Screening-stage red flags: design a screener that's hard to fake](#screening-stage-red-flags-design-a-screener-thats-hard-to-fake)
- [Timing, device, and metadata signals](#timing-device-and-metadata-signals)
- [Open-text and AI-language tells in free responses](#open-text-and-ai-language-tells-in-free-responses)
- [Behavioural signals in live and moderated sessions](#behavioural-signals-in-live-and-moderated-sessions)
- [Build a triage rubric: keep, flag, or exclude](#build-a-triage-rubric-keep-flag-or-exclude)

## Why fake participants are a 2026-scale problem

Paid research panels have always drawn a fraud minority. What's changed is scale. Generative AI lets one person run a small farm of plausible, AI-assisted survey completions, and autonomous agents can now finish an open survey with nobody at the keyboard. Knowing how to detect fake participants in user research has stopped being a niche skill — it's a core research data quality check now.

The detection arms race moves fast enough that nobody gets to claim a permanent fix. CloudResearch and MIT ran a $50,000 "Bot Olympics" challenge, inviting teams to build the best bot detector — and, separately, the best bot. Whatever caught fraud in one round got evaded in the next. There's no silver bullet, only a shifting one.

The stakes are real even at low contamination rates. A handful of fabricated or LLM-generated responses can shift a mean score, invent a theme that was never there, or send a roadmap decision down a path built on evidence that doesn't exist.

Think of this as a layered playbook — signals across surveys, unmoderated tasks, and live interviews, rather than one clever trap. Treat data quality as a core [research operations](https://blog.glasgow.works/blog/research-operations) guardrail, built into how every study is fielded, not bolted on once a dataset already looks suspicious.

## Map your attack surface: where fraud actually enters

Fraud doesn't enter research the same way twice. Three points of exposure carry different risk profiles and need different defences.

Unmoderated surveys are the easiest target: no live oversight, no verification step, and the shortest time investment for the reward. Unmoderated usability or task-based studies raise the bar a little — a faker has to produce a screen recording or complete an actual task — but scripted bots and click-farm workers still get through. Moderated interviews are hardest to fake in real time, yet not immune: coached respondents, proxy participants, and deepfake video all pressure live sessions.

Behind these entry points sits a range of fraudulent research panel participants, each with a different profile. Click-farm workers complete surveys in bulk, often from locations that don't match the target sample. Professional or duplicate survey-takers hold multiple panel identities to multiply payouts. LLM-assisted humans use a chatbot to draft plausible open-text answers in seconds. Fully autonomous agents complete an entire survey with no person present. In moderated sessions, deepfake or proxy participants stand in for whoever was actually recruited.

Match your defence to the vector. A speeding check on a survey does nothing to catch a deepfake on a video call, and identity verification at booking does nothing for an open panel link. Layered signals beat any single gate, because fraudsters optimise around whatever check becomes public — publish one and it stops working within weeks.

## Screening-stage red flags: design a screener that's hard to fake

The screener is your first, cheapest opportunity for screening out bad-faith respondents — but only if it's built to resist automation. Generic qualifying questions ("Have you used a budgeting app in the last month?") are trivial for both humans and AI to answer correctly, true or not. Specific, experience-based open-ends are harder to fake: ask what happened the last time a payment failed to go through, not whether they've ever had a payment fail. A real user answers instantly, with detail. A faker has to invent a plausible story from nothing, and that takes time.

Layer in logic and consistency checks. Cross-reference stated age against birth year, and rephrase a key qualifying question later in the flow to see whether the second answer still matches the first. Slip in plausible-but-impossible trap options — a fictional feature, a brand that doesn't exist — that a genuine user skips and a rushed or automated respondent selects.

Never telegraph the qualifying answer, and don't leak quota criteria through wording that makes the "right" response obvious. A screener that asks "Do you manage a cloud infrastructure budget of $50k or more?" has just told every fraudster exactly what to claim.

At manual review, watch for four things: copy-pasted or rehearsed prose that reads like marketing copy rather than a person describing their own experience; contradictions between open-ended answers and the quota box ticked; duplicate or slightly altered email addresses; and generic answers that never land on a specific, lived detail.

For the underlying mechanics, see our guide to [screener survey best practices](https://blog.glasgow.works/blog/screener-survey-best-practices-ux-research).

## Timing, device, and metadata signals

Paradata — data about how a response was produced, not what it says — catches fraud before you've read a single answer. Flag completion times roughly three standard deviations below the study mean; genuine respondents vary, but nobody thoughtfully answers a twelve-minute survey in ninety seconds. Straightlining down a grid and speeding through open-ends are both reliable proxies for automation or disengagement.

Technical fingerprints add a second layer. Duplicate IP addresses across "different" respondents, datacentre or VPN IPs where you'd expect a home or work connection, and device fingerprints that repeat across supposedly unique panel entries all point the same direction. Geolocation that contradicts a claimed locale — a respondent who says they live in Manchester but connects from a datacentre abroad — is one of the more reliable signals on its own.

Email addresses tell their own story. Long, random alphanumeric usernames, disposable domains, and clusters of sign-ups within minutes of each other all suggest bulk account creation rather than organic recruitment.

Passive traps catch what active checks miss. A honeypot field — hidden from human view via CSS but visible to a scraping script — that gets filled in is a near-certain automation signal. CAPTCHA does similar work, though sophisticated agents increasingly solve it too.

None of these signals should trigger an automatic ban on its own. Treat each as a weighted input — that's what bot detection in UX research looks like in practice, not a single deciding flag. For where these patterns tend to show up across panel types, see our piece on [survey bots and fake responses](https://blog.glasgow.works/blog/survey-bots-fake-responses-ux-research).

## Open-text and AI-language tells in free responses

AI-generated survey respondents leave a signature, even when the text reads fluently. Watch for answers that run unusually long relative to the question asked, formulaic in structure, and overly polite in tone. They tend to be low on specificity — general statements about processes and feelings rather than a named app, a specific date, or an exact sequence of steps — and suspiciously clean: no typos, no false starts, no mid-sentence correction. Hedged phrasing ("it can sometimes be", "in many cases") stands in for the concrete detail a real person gives without thinking.

Cross-respondent checks catch what a single response can't. Near-duplicate sentence structure across "independent" respondents, phrases that echo your question's exact wording back at you, and semantic clustering — several respondents converging on the same unusual example or metaphor — all suggest a shared source, whether that's one person running multiple sessions or several people prompting the same model.

Run a consistency audit alongside the language check. Compare open-ended answers against closed-question responses and screener claims from the same person. Someone who describes a detailed, painful onboarding failure in an open-end but rated onboarding "very satisfied" two questions earlier deserves a second look.

Be careful with false positives. Genuinely articulate people exist, and non-native English speakers sometimes trip the same heuristics through no fault of their own. Treat language tells as evidence to escalate a case for review, never as a sole verdict for exclusion. For a fuller checklist, see how to [detect fake survey respondents](https://blog.glasgow.works/blog/how-to-detect-fake-survey-respondents).

## Behavioural signals in live and moderated sessions

Moderated interviews are harder to fake, but the tells are behavioural rather than textual. Watch for latency before every answer — a pause that's slightly too long often means someone reading a screen rather than recalling an experience. A flat, reading-aloud cadence, eyes that flick repeatedly to a second screen, and reluctance to share camera or screen are each worth noting alone, more so together.

By 2026, deepfake awareness has to sit in every moderator's toolkit. Watch for lip-sync drift against the audio, lighting or edge artefacts around the face, and identity details — job, location, family — that shift between screener and live session. Verify identity at booking, not just at the start of the call: a quick check of screener details against what the person says live closes a gap that a casual "confirm your name" opener leaves wide open.

The useful verification tactics add little friction for a genuine participant: a brief onboarding call before the main session, dynamic follow-up probes for detail no screener answer could have prepped for ("what did the error message actually say?"), and a request for a concrete demonstration — share your screen and show me the thing you mentioned.

We saw this play out in a study comparing graduates of several digital-skills retraining programmes. One respondent claimed to have completed a technical specialisation, then turned vague when we asked which track they'd taken. The moderator pressed for one concrete detail from their practical placement — which team, what the brief was, what they'd actually built. The answer never got past "a web project." We flagged the session, set it aside from the analysis set, and notified the recruitment source. The tell wasn't unfamiliarity with the programme. It was the inability to produce a single specific artefact from having lived it.

## Build a triage rubric: keep, flag, or exclude

In our experience, no single signal should decide exclusion on its own — combine them into a weighted score. A speeding flag alone might just mean a fast typist. A speeding flag plus a datacentre IP plus a straightlined grid is a different story entirely.

Build three tiers of action. Pass: no meaningful red flags, the response enters the dataset as normal. Flag for review: one or two moderate signals — a slightly fast completion, a generic open-end — that a researcher checks by hand. Exclude: multiple signals converge, or one is unambiguous, such as a tripped honeypot or a repeated refusal to share a screen. Document the reason behind every exclusion; you'll want it if a quota question comes up later, and it builds the audit trail that makes the process defensible.

Fairness matters here too. Pay borderline participants where reasonable rather than withholding payment on suspicion, and keep records of every decision. Genuine respondents are sometimes unusual — a slow typist, a non-native speaker, someone whose disability affects response time — and a rubric that punishes anything outside the norm biases your sample as much as fraud does.

Reconcile exclusions against quotas and target sample size as you go, not at the end. Line up a backfill source from trusted panels or referral recruitment before fielding closes, so a wave of exclusions doesn't leave you short on a hard-to-reach segment with no time left to recover.

Start small. Pick your next fielded study, add one specific experience-based screener question and one paradata check, and log what they catch. That single pass tells you more about your panel's real contamination rate than any theoretical audit — and gives you a baseline to build the rest of the playbook against.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How to Detect Fake & AI Participants in Research",
  "description": "A practitioner's playbook of screening, timing, and behavioral signals to spot bots, AI agents, and fake respondents before they poison your research data.",
  "datePublished": "2026-08-06",
  "dateModified": "2026-08-06",
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
    "@id": "https://blog.glasgow.works/blog/fake-and-ai-participant-detection-user-research"
  },
  "keywords": "how to detect fake participants in user research, AI-generated survey respondents, bot detection in UX research, research data quality checks, fraudulent research panel participants, screening out bad-faith respondents"
}
</script>

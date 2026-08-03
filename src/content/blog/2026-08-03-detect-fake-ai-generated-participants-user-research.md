---
title: "How to Detect Fake & AI-Generated Research Participants"
description: "Spot fake and AI-generated participants in user research with behavioural, linguistic and technical signals—plus screener design and a triage workflow."
pubDate: 2026-08-03
updatedDate: 2026-08-03
readingTime: 12
slug: "detect-fake-ai-generated-participants-user-research"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "Researcher reviewing flagged survey responses on a dashboard, comparing human and AI-generated answer patterns"
tags:
  - "Research Operations → participant recruitment & panels / quality guardrails (participant data quality & fraud detection)"
  - "user research data quality"
  - "detecting bots in research panels"
  - "fraudulent survey respondents"
  - "AI-generated survey responses"
---
<!-- gr:toc -->

## On this page

- [Why fake and AI-generated participants are surging](#why-fake-and-ai-generated-participants-are-surging)
- [Know your threat types before you hunt signals](#know-your-threat-types-before-you-hunt-signals)
- [Behavioural signals that expose non-genuine participants](#behavioural-signals-that-expose-non-genuine-participants)
- [Linguistic tells of AI-generated responses](#linguistic-tells-of-ai-generated-responses)
- [Technical and identity signals](#technical-and-identity-signals)
- [Design screeners and studies that are hard to fake](#design-screeners-and-studies-that-are-hard-to-fake)
- [A triage workflow: judging borderline cases fairly](#a-triage-workflow-judging-borderline-cases-fairly)
- [Catching imposters in moderated and AI-moderated interviews](#catching-imposters-in-moderated-and-ai-moderated-interviews)
- [Build fraud guardrails into your ResearchOps](#build-fraud-guardrails-into-your-researchops)
- [FAQ](#faq)

## Why fake and AI-generated participants are surging

Incentivised panels have always drawn a few dishonest respondents chasing a reward. The tooling is what's changed. A laptop, a free trial of a large language model, and a couple of browser tabs now suffice to generate plausible survey answers, fake screener responses, or a synthetic persona that can hold a conversation for twenty minutes. More of what lands in your dataset is bot-, farm- or AI-assisted than you'd like, and it reads well enough to survive a casual glance.

This guide is about how to detect fake and AI-generated participants in user research — the deliberate cases, not the tired respondent speeding through a survey at midnight. Careless humans give you noisy data. Synthetic respondents give you confidently wrong data. One contaminated batch can skew personas, priorities and roadmap decisions, and it's worse than no data because nobody thinks to question it. What follows is a layered, method-led approach: signals and screening design you can apply with any tool, as part of [protecting research data quality end to end](https://blog.glasgow.works/blog/validate-ai-generated-research-insights).

## Know your threat types before you hunt signals

Before you can catch fraud, you need to know what you're catching. The threats sit on a spectrum. At the simple end, click-bots fire through a survey link without reading anything. Next come survey farms and click-workers: real people, often working in bulk, paid per completion, with no interest in the questions. Above them sit incentive-gaming humans — genuine participants who lie on the screener to qualify, or rush through to bank a reward. Then come AI-assisted humans, answering open-text questions with a chat model open in a second tab. At the far end sits the fully synthetic respondent: a script pairing a language model with a persona brief, faking human-like metadata — mouse jitter, plausible timing, a consistent backstory — well enough to pass as another panel member.

Each threat lives in a different part of your research stack. Unmoderated surveys and usability tests carry the highest exposure, because nobody is watching in real time. Moderated and recruited studies carry a different risk — not bots, but imposters, the wrong person turning up to a session they didn't qualify for. No single test catches all five types, which is why detection needs to work the way our guide to [survey bots and fake responses in UX research](https://blog.glasgow.works/blog/survey-bots-fake-responses-ux-research) recommends: layered, each check covering another's blind spot.

## Behavioural signals that expose non-genuine participants

Timing is the cheapest signal, so check it first. Flag completion times more than three standard deviations below the median for your sample. Flag open-text answers that arrive faster than a human could plausibly type them — a 200-word response in eight seconds is a paste, not a thought.

Response patterns tell you more once timing has narrowed the field. Straightlining (the same rating on every item), zig-zag patterns (alternating high and low with no relation to the question), and acquiescence (agreeing with everything, including contradictory statements) all point away from genuine engagement. Identical time-per-item across a long grid is another tell — real people vary their pace as questions get harder or easier.

Interaction traces go further where your survey tool supports them. Tab-switching and copy-paste events on free-text fields, no scrolling or mouse movement on long pages, paste-length wildly out of proportion to time spent on the field — all point to scripted or AI-assisted answers.

Consistency checks catch what timing misses. Cross-reference a screener answer against a later open response; genuine participants rarely contradict their own stated context. Watch, too, for duplicate or near-duplicate answers submitted under supposedly unrelated respondent IDs.

None of this needs specialist software. Most survey platforms let you add hidden timer fields, metadata capture, and honeypot fields — a question invisible to humans but visible to bots — at no extra cost.

## Linguistic tells of AI-generated responses

Real qualitative data is messy. It has typos, half-finished thoughts, slang, hedging and filler words. When an open-text answer reads like a finished essay — flawless grammar, no typos, no colloquialisms — treat that as a flag, not a compliment.

Structural sameness across supposedly different respondents is a stronger tell than any single polished answer. Watch for repeated openers ("In my opinion…", "I think that…"), tidy three-point lists appearing across unrelated questions, and phrasing that sounds like brand copy rather than a person describing their own experience.

Topical drift matters as much as tone. AI-generated answers tend to restate the question back at you, stay abstract, and avoid the specific, slightly irrelevant detail a real user volunteers — the exact screen, the colleague's name, the time of day something went wrong. Genuine responses wander. Synthetic ones stay on message.

Occasionally you get a gift: prompt-echo or refusal artefacts, where a pasted answer includes phrases like "As an AI language model, I don't have personal experiences…". That's a confirmed removal, not just a flag.

Use language as one input among several, never a verdict on its own. Naive AI-text detectors throw false positives against non-native speakers and people who write formally by habit, and false negatives against anyone who edits an AI draft before submitting it. Our guide to [detecting fake survey respondents](https://blog.glasgow.works/blog/how-to-detect-fake-survey-respondents) covers what genuine text looks like in practice.

## Technical and identity signals

Behavioural and linguistic signals tell you something feels wrong. Technical signals tell you why. Device and network fingerprinting — screen resolution, browser configuration, operating system, user-agent string — often repeats across respondents who are supposed to be strangers. One screen size and browser combination appearing across a dozen "unique" completions is not a coincidence.

IP and geolocation data add another layer. Data-centre and VPN IP ranges, a geolocation that doesn't match the participant's claimed city or country, and clusters of submissions arriving from the same subnet within minutes of each other are reliable red flags — particularly on unmoderated studies with no human in the loop.

Duplicate detection closes the loop on repeat offenders. Hashing contact details lets you catch the same person re-entering under a new email without storing raw personal data unnecessarily. Cookies and reCAPTCHA v3 scores — which estimate bot likelihood without an interactive challenge — flag re-entries and low-trust sessions automatically.

Match verification effort to the stakes. Email and phone checks are usually enough for panel-based surveys. Higher-stakes moderated work justifies liveness checks and identity confirmation before a session gets booked.

Collect the minimum data these checks need, disclose it in your consent flow, and store fraud-related metadata with the same care as any other personal data. It's still identifiable information, even when its purpose is catching fraud.

## Design screeners and studies that are hard to fake

Classic attention checks — "select 'strongly agree' to continue" — no longer work. Fraudsters trade pass guides for popular panels, and bots read an instruction and follow it just as easily as a human does. Treat any attention check you can find with a search engine as compromised.

Better traps ask for something a script or a coached farm-worker can't fake convincingly. Open-ended qualification questions ("describe the last time you did X") force a specific answer instead of a checkbox. Category-specific knowledge questions — asking a claimed daily user of a niche tool about a detail only a real user would know — separate genuine participants from people reciting a persona. Impossible or false answer options catch anyone clicking without reading.

Buried instruction checks work quietly: an instruction hidden mid-paragraph tells the respondent to skip to a specific question. Consistency pairs — asking the same fact two different ways, several questions apart — reveal random or AI-generated clicking through contradiction rather than confrontation.

Keep demographic screening separate from the study itself, so an imposter has to lie twice, under different conditions, to get through. Don't signal your target profile in the screener language — wording that reads like a job posting invites people to reverse-engineer the "right" answer. Our [screener survey best practices](https://blog.glasgow.works/blog/screener-survey-best-practices-ux-research) guide covers this in full, and pairing it with [how to recruit participants for user research](https://blog.glasgow.works/blog/how-to-recruit-participants-for-user-research) reduces incentive-gaming pressure before it reaches your screener.

## A triage workflow: judging borderline cases fairly

No single signal should sink a response alone. Build a weighted score instead: assign points to timing anomalies, pattern flags, linguistic tells and technical red flags, and set a threshold that needs two or three independent signals to align before you exclude anyone. A fast completion time on its own might just mean an engaged, fluent participant.

Sort borderline cases into three buckets, each with a documented rule. Clear-keep: no signals, or one weak signal with a plausible explanation. Clear-remove: multiple independent signals, or a smoking gun like prompt-echo text. Review: enough signals to worry, not enough to be certain.

Guard the review bucket carefully — it's where real people get wrongly excluded. Non-native speakers write more formally and make different error patterns than fraud detectors expect. Disabled participants using assistive technology can show unusual timing or navigation traces. Low-bandwidth connections produce dropped events that look like missing interaction data. None of these are fraud.

When a case sits in review, verify rather than accuse. A short follow-up probe, a quick check on a live call, or simply recruiting a replacement and quietly excluding the ambiguous response all work better than a rejection that might be wrong.

We've applied this kind of rubric inside a "Learn and Guide" engagement — a format where we train a client's in-house team to run part of the fieldwork alongside our own researchers. A shared, documented rubric, rather than each researcher judging borderline cases on instinct, was what let both teams reach the same exclusion decisions independently. It was also what made those decisions defensible to the client afterwards.

## Catching imposters in moderated and AI-moderated interviews

Moderated research trades bot risk for imposter risk: the wrong person turning up to represent someone else's screener answers. Video calls carry their own tells. Deepfake and voice-clone artefacts show up as lip-sync lag, blurred or shimmering facial edges when the participant turns their head, eye movement that doesn't track the screen naturally, and facial lighting that doesn't match the room behind them.

Cross-session continuity matters as much as the visual check. Confirm, at least informally, that the person who answered the screener is the person on the call — a shift in accent, technical vocabulary, or claimed job details is worth a direct question. A cadence that sounds like reading aloud, or eyes that repeatedly glance off-screen before answering, suggests coaching or a script rather than spontaneous recall.

Simple live moves remain a practical, low-cost liveness check. Ask the participant to turn their head, move a hand across their face, or answer an unscripted follow-up that isn't in any screener or brief — hard for a coached imposter or a synthetic agent to fake convincingly.

AI-moderated sessions widen this risk surface, because there's no human moderator building a real-time read on the participant. Our guide to [running AI-moderated interviews](https://blog.glasgow.works/blog/ai-moderated-interviews-when-how-to-run) covers where automation still needs a person checking behind it.

## Build fraud guardrails into your ResearchOps

Fraud detection works as a standing process, not a clean-up you do after a study looks odd. Build three checkpoints into every project: a pre-study checklist covering screener design and honeypot fields, in-field monitoring that flags anomalies while recruitment is still open, and a post-study QA gate before analysis begins.

Panel hygiene matters over time as much as any single study's screening. Maintain allow and deny lists for recruitment sources, apply reputation scoring to repeat participants, and retire panels or vendors once fraud rates climb past a threshold you've agreed in advance. This is core to [UX research panel management](https://blog.glasgow.works/blog/ux-research-panel-management), not a side task.

Templatise the triage rubric and exclusion log from the workflow above, so every researcher on your team applies the same thresholds rather than a personal judgement call. Consistency here is what makes the rubric defensible later.

Report a data-quality metric alongside your findings — the share of responses flagged and removed, and why. Stakeholders trust results more, not less, when you show your working on data quality rather than presenting a spotless dataset that invites no questions.

## FAQ

### Can you reliably detect AI-generated open-ended answers?

No single detector is reliable on its own. Naive AI-text classifiers produce enough false positives against non-native speakers and formal writers, and enough false negatives against edited AI drafts, that they can't carry a decision alone. Combine linguistic tells — too-perfect prose, repeated openers, prompt-echo artefacts — with the behavioural and technical signals covered above, and only exclude a response once several independent signals point the same way.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How to Detect Fake & AI-Generated Research Participants",
  "description": "Spot fake and AI-generated participants in user research with behavioural, linguistic and technical signals—plus screener design and a triage workflow.",
  "datePublished": "2026-08-03",
  "dateModified": "2026-08-03",
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
    "@id": "https://blog.glasgow.works/blog/detect-fake-ai-generated-participants-user-research"
  },
  "keywords": "how to detect fake and AI-generated participants in user research, user research data quality, detecting bots in research panels, fraudulent survey respondents, AI-generated survey responses, participant fraud screening signals"
}
</script>

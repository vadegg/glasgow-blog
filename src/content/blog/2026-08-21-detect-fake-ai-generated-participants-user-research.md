---
title: "How to Detect Fake & AI Participants in User Research"
description: "A practical playbook to detect fake and AI-generated participants in user research, with screener, behavioural and verification signals that protect data"
pubDate: 2026-08-21
updatedDate: 2026-08-21
readingTime: 12
slug: "detect-fake-ai-generated-participants-user-research"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "Researcher reviewing a participant risk scorecard flagging bot, AI-generated, and deepfake responses"
tags:
  - "participant recruitment & panels / quality guardrails"
  - "participant data quality"
  - "research panel fraud"
  - "screening out AI respondents"
  - "survey fraud detection"
---
<!-- gr:toc -->

## On this page

- [Why fake and AI participants now threaten your data](#why-fake-and-ai-participants-now-threaten-your-data)
- [Stage 1: Screener signals that stop fraud at the door](#stage-1-screener-signals-that-stop-fraud-at-the-door)
- [Stage 2: Behavioural and technical signals during collection](#stage-2-behavioural-and-technical-signals-during-collection)
- [Stage 3: Spotting AI-generated open-ended responses](#stage-3-spotting-ai-generated-open-ended-responses)
- [Detecting AI and deepfakes in live, moderated sessions](#detecting-ai-and-deepfakes-in-live-moderated-sessions)
- [Build a detection scorecard, don't rely on one signal](#build-a-detection-scorecard-dont-rely-on-one-signal)
- [What to do when you catch a fake: remediation and client governance](#what-to-do-when-you-catch-a-fake-remediation-and-client-governance)
- [Frequently asked questions](#frequently-asked-questions)

## Why fake and AI participants now threaten your data

Recruiting used to mean filtering out the inattentive. In 2026, it means learning to detect fake and AI-generated participants in user research before their answers reach analysis — people who were never people at all, or who used a language model to write answers that read as fluent, confident, and entirely invented. Generative AI has made synthetic responses good enough to slip past conventional quality checks. Bad data can now look clean on the surface.

None of this is hypothetical. Reporting from Virtual Incentives and Borderless Access on major research panels found that only around 22% of respondents pass basic attention checks, and roughly 29% show at least one signal of fraud. That's close to a third of a raw sample compromised before analysis even starts.

The threats don't look alike, and each one needs its own tactic. Automated bots speed-run screeners for incentive payouts. Human fraudsters cycle through multiple identities to farm rewards. AI-assisted respondents are real people pasting language-model output into open text fields. And in live sessions, a small but growing number of interviewees are coached, or deepfaked entirely.

Contaminated insight does more than waste a study budget. It sends a client into a product decision built on a fiction, and it chips away at the credibility research depends on. Detection belongs inside your [research operations guardrails](/blog/research-operations), applied in layers across recruitment, collection, and analysis — not bolted on as a single filter at the end.

## Stage 1: Screener signals that stop fraud at the door

The cheapest fraud to prevent is the fraud that never gets past the screener. A few structural choices do most of the work.

Hide the study title, and don't reveal the topic until screening is complete. A screener labelled "parents of toddlers: feeding habits" tells a fraudster exactly which box to tick. Keep respondents blind to what "qualifying" looks like.

Build in a plausible red herring — a fake tool, brand, or behaviour dropped among the real options. Someone claiming familiarity with a product that doesn't exist has either lied their way through the survey or wasn't reading closely. Well-placed trap questions like this catch an average of around 15% of unqualified respondents. Small addition, real return.

Add one short open-ended screener question that demands a specific, lived detail — not "why do you use this product" but "describe the last time you did X, including what went wrong." Generic, evasive, or suspiciously polished answers are a strong tell for both AI assistance and outright ineligibility.

"Reverse shibboleth" items help too: questions your genuine target audience would answer one way and an outsider or a language model would answer another, because the right answer depends on lived context rather than general knowledge.

For high-stakes qualitative work, verify identity early — a unique email or phone confirmation at minimum, and photo-ID validation tied to the booked interview slot where the study justifies it.

Keep the bar proportionate. Every added check has a cost. Over-trapping frustrates genuine participants and pushes busy, honest people to drop out before you've filtered anything real. Good [questionnaire and screener design](/blog/ux-research-methods) balances friction against fraud risk rather than maximising either one.

## Stage 2: Behavioural and technical signals during collection

A screener stops some fraud before it starts. The rest shows up in how someone behaves once the study is running.

Completion time is the simplest tell. A survey that takes a genuine reader eight minutes to answer thoughtfully, submitted in ninety seconds, is either a bot or someone pasting from elsewhere. Flag anything markedly faster than your pilot median.

Straightlining points the same way — the same rating repeated down a matrix, near-zero variance across questions that should provoke different answers. Real opinions vary. Rushed or automated ones don't.

Technical checks add another layer. Device fingerprinting and IP or geo checks catch the automation and identity cycling that content alone won't reveal. Treat a VPN or masked device as an elevated-risk signal, not an automatic fail — plenty of legitimate participants use one for ordinary privacy reasons, and rejecting them outright just narrows your sample without cutting fraud.

Duplicate identities deserve the most effort, because one determined fraudster cycling through five profiles does more damage than five careless respondents. Deduplicate across browser fingerprint, device ID, IP address, and, where possible, the incentive payment destination — that's the one detail a fraudster can't vary without losing the payout.

Randomising question and option order helps as well. Bots and scripted responses are often built around a fixed layout; when the order shifts, they mis-map answers to the wrong item, producing inconsistencies a human wouldn't make by accident.

The uncomfortable part: modern masking means a fully completed, well-formatted survey can still be high-risk. For the specific patterns synthetic respondents leave behind, see our guide to [survey bots and fake responses](https://blog.glasgow.works/blog/survey-bots-fake-responses-ux-research). Score every response on these signals together, and don't treat surface completeness as proof of anything.

## Stage 3: Spotting AI-generated open-ended responses

Open-text fields are where AI assistance is easiest to catch, because language models have distinctive habits.

The first tell is register. Answers come back grammatically flawless, evenly structured, polished in a way real typing rarely is — and empty of anything specific once you read past the fluency. Genuine respondents make typos, trail off, and answer out of order. Pasted AI text reads like a memo.

Watch the opening line specifically. Real people jump straight into an example — "last week I tried to reset my password and…" — where AI-generated text tends to restate the question first: "My favourite brand is X because…" That habit of echoing the prompt before answering is one of the most reliable tells we see.

Length matters too. A free-text box that asked for two or three sentences and returns a five-paragraph essay, complete with an opening and a summary, isn't something most people write by hand mid-survey. Treat it as a flag, not proof.

Cross-check tone against the rest of the response. An articulate, formal answer that doesn't match the respondent's stated background — or reads nothing like the shorter, plainer answers they gave elsewhere in the same survey — is a mismatch worth investigating.

Batch-generated fraud has its own signature: near-identical phrasing or structure across responses that are meant to come from different people. If three "unrelated" respondents all describe their frustration in the same three-clause sentence, that's not coincidence.

Above all, test for specificity. Authentic answers connect to a real, checkable moment. Synthetic ones stay generic and unfalsifiable — impossible to disprove because there's nothing concrete in them to disprove.

## Detecting AI and deepfakes in live, moderated sessions

Moderated interviews carry the highest stakes, because a single convincing fake can shape an entire round of qualitative findings. They also carry the best defence: a live, real-time human moderator.

Require cameras on for the full session, not just the opening minutes, and expect continuous liveness — a face that's present, reacting, and consistent throughout. Watch for the classic artefacts: a small but persistent lag between lip movement and audio, eye contact that never quite lands on the camera, lighting or skin texture that shifts oddly between frames. None of these alone is conclusive. Together, they're worth pausing on.

The strongest tool a moderator has is the unscriptable follow-up. Ask something specific and spontaneous — "what was the exact error message you saw", "who else was in the room when that happened" — and listen for real-time recall rather than a rehearsed answer. A coached actor or an AI puppet struggles here, because there's nothing to retrieve.

Check identity continuity across rounds too. The face and voice in a follow-up session should match the screener and session one. Seat-swapping — a different person showing up under the same profile — is more common than most teams expect, and easy to miss if nobody checks.

Evasion has its own pattern: unusual latency before answering, deflection when a question goes off-script, a delivery that sounds read rather than spoken. In one moderated round we ran, an interviewee's answers were fluent and on-topic right up until an unplanned follow-up — at which point responses slowed, drifted, and never quite addressed what was asked. We excluded the session from analysis and tightened our follow-up protocol for the rest of the study.

Treat all of this as an arms race. Whatever technical tell is reliable today may be patched out by next year's tooling. Pair the signals with a moderator's judgement, not instead of it.

## Build a detection scorecard, don't rely on one signal

No single flag proves fraud. A fast completion time might mean a bot, or a genuinely expert respondent who knows the subject cold. A VPN might mean a fraudster masking location, or a remote worker on a corporate network. Treat every signal as a point of evidence, not a verdict, and combine them into a weighted score per response.

Set triage bands tuned to what the study is actually for. A low-stakes pricing survey with 500 responses can tolerate a looser bar than a five-person concept test feeding a launch decision.

| Risk score | Action |
|---|---|
| Low (0–1 minor signals) | Auto-accept |
| Medium (2–3 signals, or one severe) | Human review before inclusion |
| High (4+ signals, or confirmed identity fraud) | Reject and quarantine |

Keep a human in that middle band. Open-ended content and VPN use both throw off false positives, and a reviewer reading a transcript in context catches nuance an automated score can't. Reserve automatic rejection for the clearest cases — duplicate payment destinations, confirmed device cycling — and route everything else to a person.

Log the decision and the reasoning behind it for every flagged response, not just the ones you exclude. That log turns quality control into something auditable rather than a judgement call nobody can review months later. It's also the evidence you want on hand if a client questions the sample.

## What to do when you catch a fake: remediation and client governance

Catching a fake is only half the job. What happens next determines whether the study still holds up.

Start with the response itself: remove it from the dataset, and quarantine any other responses linked to the same identity, device, or payment destination — fraud is rarely a single instance. Then decide, based on the study's minimum viable sample, whether to re-field to replace what's been cut. Cutting silently and reporting on a smaller sample without saying so is worse than re-fielding.

Report confirmed fraud back to the panel provider. Providers can only clean their pools when agencies flag what they find. If fraud rates on a particular source spike across studies, that's a sourcing decision, not just a one-off exclusion.

Document what was caught and how, in the client-facing report: how many responses were excluded, on what grounds, and what that means for the final sample. This isn't an admission of a flawed study — it's evidence of a rigorous one.

Build all of this into a standard ResearchOps process rather than leaving it to individual judgement. Our [research operations guide](https://blog.glasgow.works/blog/research-operations) sets out how to make these checks repeatable across studies, so quality doesn't depend on who happens to be running a project. Transparent fraud handling isn't overhead. It's what separates defensible insight from a plausible-looking guess.

## Frequently asked questions

### How can you tell if a survey answer was written by AI?

Look for over-clean grammar, even structure, and answers that restate the question before addressing it. Generic, essay-length text in a short-answer box is a common tell, as is uniform phrasing across respondents who are supposed to be unrelated. Cross-check articulate answers against the respondent's demographic profile and their shorter answers elsewhere — verify by checking for concrete, personal specificity rather than fluency alone.

### What is the difference between a bot and an AI-generated participant?

A bot is an automated script speed-running a screener for an incentive payout. You catch it with timing, IP, and device-fingerprinting checks, because it moves and behaves like software. An AI-generated participant is usually a real person pasting language-model output into open text fields — the submission behaves like a human's, so it needs content and consistency analysis rather than technical signals alone.

### Can you detect a deepfake participant in a video interview?

Imperfectly, but yes. Watch for lag between audio and lip movement, unnatural eye contact, and lighting or texture artefacts. Require continuous liveness and check identity continuity against the screener and earlier rounds. Ask unscriptable follow-up questions that demand real-time recall. Detection here is an arms race — technical tells change fast, so pair them with a moderator's judgement rather than treating any single sign as proof.

### How many trap questions should a screener include?

Two or three well-placed trap questions is usually enough. Given that a single decoy option catches an average of around 15% of unqualified respondents, stacking more than a handful adds diminishing returns while raising the risk of frustrating genuine participants who misread a question under normal survey fatigue. Place traps where an honest respondent would answer confidently and an outsider or model would guess.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How to Detect Fake & AI Participants in User Research",
  "description": "A practical playbook to detect fake and AI-generated participants in user research, with screener, behavioural and verification signals that protect data",
  "datePublished": "2026-08-21",
  "dateModified": "2026-08-21",
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
  "keywords": "detect fake and AI-generated participants in user research, participant data quality, research panel fraud, screening out AI respondents, survey fraud detection, bot participants in research"
}
</script>

---
title: "How to Detect Fake & AI Participants in Research"
description: "A method-first playbook to catch bots and AI-coached participants that now beat attention checks — screener design, timing signals, open-end forensics and"
pubDate: 2026-08-07
updatedDate: 2026-08-07
readingTime: 11
slug: "detect-fake-ai-participants-research-playbook"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "Researcher reviewing flagged survey responses and timing signals to detect fake and AI-generated participants"
tags:
  - "Research Operations — participant data quality & quality guardrails"
  - "research data quality"
  - "fraudulent survey responses"
  - "detecting bots in online research"
  - "screening out AI respondents"
---
<!-- gr:toc -->

## On this page

- [Why fake and AI participants now slip past classic checks](#why-fake-and-ai-participants-now-slip-past-classic-checks)
- [Stop fraud at the door: fraud-resistant screener design](#stop-fraud-at-the-door-fraud-resistant-screener-design)
- [Behavioural and timing signals that reveal bots](#behavioural-and-timing-signals-that-reveal-bots)
- [Open-end forensics: spotting AI-written answers](#open-end-forensics-spotting-ai-written-answers)
- [Verifying live and moderated interview participants](#verifying-live-and-moderated-interview-participants)
- [Post-hoc data cleaning with a layered scoring model](#post-hoc-data-cleaning-with-a-layered-scoring-model)
- [Make quality guardrails a repeatable ResearchOps ritual](#make-quality-guardrails-a-repeatable-researchops-ritual)
- [Frequently asked questions](#frequently-asked-questions)

## Why fake and AI participants now slip past classic checks

Industry estimates put fraudulent or unusable online responses at 30–40% in 2026. That share keeps climbing, because the tools to fake a respondent are improving faster than the tools to catch one. It's a meaningful chunk of the data landing in your survey tool right now — quietly undermining research data quality across the industry.

The threat has changed shape. Fraud used to mean crude bots hammering a survey link, or click-farm workers speeding through for pennies. Now it means LLM-backed synthetic respondents generating plausible answers at scale, and real-time AI-coached humans — verified, real people reading answers an assistant feeds them mid-interview. Both simulate believable behaviour well enough to pass a cursory review.

One attention check no longer cuts it. Fraudsters have seen the same trap items you have; they answer "select 'strongly disagree' to continue" correctly, first time. A fast, confident response used to flag a bad actor. Now it just as often flags someone with an assistant.

No single test wins. Detecting bots in online research and catching coached humans both need layered signals across recruit, response, and post-hoc review — which is what this playbook covers, as part of your wider [research operations](https://blog.glasgow.works/blog/research-operations).

## Stop fraud at the door: fraud-resistant screener design

Prevention beats detection. Every fraudulent response that slips through your screener burns an incentive and costs you clean-up time later, so the highest-leverage work happens before anyone reaches your main survey.

Start with question design. Leading or loaded phrasing — "Have you struggled with slow customer support?" — hands a fraudster the right answer. Reach for multi-select lists with plausible decoys instead: options a genuine user would recognise but a generalist wouldn't guess. Add one low-obvious trap item, placed mid-survey rather than flagged upfront, plus at least one experiential open-end: "describe the last time you used [category]." Genuine answers here are specific and a little messy. AI paraphrase tends to over-polish this kind of prompt into something that reads like marketing copy rather than memory.

Keep the screener to around ten questions with skip logic, so legitimate participants aren't fatigued into dropping out. Layer platform-level verification alongside content checks: duplicate-IP detection, participation-velocity limits, and identity corroboration — a LinkedIn match, a calendar booking, a payment history that predates the study invite.

None of this is free. Over-aggressive screeners are effective at screening out AI respondents, but they also screen out real ones who answer quickly or don't fit a decoy pattern perfectly. Calibrate against how you [recruit participants for user research](https://blog.glasgow.works/blog/how-to-recruit-participants-for-user-research) in the first place — a well-sourced panel needs a lighter screener than an open link shared across social platforms.

## Behavioural and timing signals that reveal bots

Every interaction with a survey or interview tool leaves paradata behind — metadata about how someone answered, not just what they answered. Capture it by default: completion time, per-question latency, mouse and cursor trajectory, tab-switching, copy-paste events, and device or browser fingerprints. None of these prove fraud alone. Together they build a behavioural fingerprint you can score.

Three patterns matter most. Speeding — finishing a fifteen-minute survey in ninety seconds — is the crudest tell. Straightlining, selecting the same scale point down a grid regardless of content, is nearly as obvious. Subtler is suspiciously uniform pacing: near-identical seconds spent on every question, including ones of very different length. Real people speed up on easy items and slow down on hard ones. Bots often don't vary.

Technical tells sit alongside the behavioural ones: a screen resolution that doesn't match the claimed device, headless-browser configuration strings, IP addresses resolving to datacentres rather than residential networks, and clusters of sign-ups within seconds of each other from supposedly unrelated people.

Treat all of this as directional, not conclusive. Sophisticated custom bots now spoof human-like timing deliberately — variable pacing, randomised pauses — specifically to defeat the checks above. A single flag should raise a risk score, not trigger an automatic rejection. Log these signals for every response by default, even on studies that look low-risk, so the data is there if you need to investigate [survey bots and fake responses in UX research](https://blog.glasgow.works/blog/survey-bots-fake-responses-ux-research) later.

## Open-end forensics: spotting AI-written answers

Open-ended responses are where AI-generated content is easiest to spot. Closed questions give an assistant almost nothing to trip over.

Read flagged free text against a short checklist. Uniform structure across many responses — same paragraph shape, same three-part logic — is a tell, especially when the phrasing is too consistent for people who've never met. Near-identical opening sentences ("I would say that...") repeated across respondents is another. Watch for over-detailed hedging, generic "as an example" framing that never commits to a real instance, and answers longer and more complete than the question warrants. A real person describing a frustrating moment rarely delivers a structured three-paragraph answer unprompted.

Authentic writing looks different: typos, idiosyncratic detail that doesn't serve the argument, uneven effort across questions, and concrete specifics only someone who lived the experience would know — a misremembered product name, a price quoted slightly off from memory, a complaint about a feature that's since been removed.

Probe questions expose the gap. Ask for a specific date, an exact price, or an emotional micro-detail tied to a lived moment — what were they doing right before they opened the app that day? Generic AI output tends to answer around specifics like this rather than commit to one.

At scale, gibberish detectors and LLM-based classifiers help triage volume, but they carry real false-positive risk against non-native speakers, whose phrasing can look unnaturally smooth for reasons unrelated to fraud. Never auto-reject on a classifier score alone. Route flagged responses to a human reviewer — the same discipline you'd use to [validate AI-generated research insights](https://blog.glasgow.works/blog/validate-ai-generated-research-insights) anywhere else in your pipeline.

## Verifying live and moderated interview participants

The hardest case to catch is the AI-coached interviewee: a real person, on camera, whose identity checks out, reading answers a language model feeds them in real time. They pass every pre-screen you've built, because there's a genuine human on the call.

Moderators learn to watch for a cluster of signals rather than any one alone: eyes that repeatedly track sideways or downward, as if reading a second screen; unnatural pauses before answers that then arrive fully formed and oddly fluent; participants who echo your question's exact framing back before answering, a habit that reads as buying time; requests to keep the camera off "for bandwidth"; and follow-ups that stay vague no matter how specifically you probe.

Countermeasures work better than vigilance alone. Build unscripted follow-ups into every guide, ask participants to share their screen or sketch something live, and request a specific personal anecdote tied to a moment rather than a general opinion. Vary question order between sessions so a coached script can't anticipate the sequence.

Do the verification work before the call too: confirm identity against the panel record, check calendar and payment history for a plausible pattern, and match a name against a public professional profile where the study allows it.

We saw this play out in a Jobs-to-be-Done study for a technical-training programme, where we trained the client's own team to run part of the interviews alongside us — a "learn and guide" model. Coaching new moderators through live sessions forced us to make the diagnostic signals explicit: a shared checklist for exactly what "hesitation before fluency" or "echoed framing" looked like, rather than relying on the pattern-matching experienced moderators build up over years. Moderator intuition alone performs close to a coin toss here. Pairing it with a written pre- and post-call checklist is what actually catches coached participants.

## Post-hoc data cleaning with a layered scoring model

Individual checks generate individual signals; decisions need a combined score. Build a weighted risk score per response, pulling together screener performance, timing and paradata signals, technical flags, and open-end forensics.

Define three bands and stick to them: auto-accept for low scores, manual review for a middle band, and auto-reject past a threshold you've set and documented in advance. Consistency matters as much as accuracy. An applied-the-same-way-every-time process protects you if a rejected participant disputes the decision, and stops individual reviewers applying their own bar across a study.

Run cross-response deduplication before finalising the dataset. Fraudulent survey responses often share infrastructure: an email address with one character altered, a phone number reused across "different" identities, phrasing repeated near-verbatim across responses claiming to be from unrelated people. Automated matching on these patterns catches volume fraud that individual review would miss.

Document the reason for every rejection — which signals triggered it, which band it fell into — and keep that record. It's your audit trail if a client asks how you handled data quality, and it underpins a fair-payment policy: participants shouldn't lose an incentive over a false positive you can't explain afterwards. For more on what belongs in that documentation, see our guide on how to [detect fake survey respondents](https://blog.glasgow.works/blog/how-to-detect-fake-survey-respondents).

Cleaning will shrink your sample. Decide in advance how much shrinkage you'll tolerate before you top up recruitment, rather than analyse and ship a dataset you already know is compromised. A smaller clean sample beats a full dirty one every time.

## Make quality guardrails a repeatable ResearchOps ritual

None of this holds if it lives in one person's head or one project's post-mortem. Turn it into a standing quality-guardrails checklist embedded in every study kickoff, alongside your sampling plan and screener draft — not bolted on after fieldwork closes.

Assign clear ownership for who runs the risk-score rubric on each study, turn that rubric into a reusable template rather than rebuilding it every time, and review flag rates every quarter. Fraud tactics shift, and a screener that worked six months ago may already be outdated.

Balance rigour with respect for genuine participants. Checks should be transparent about why they exist and non-hostile in tone — you're protecting research data quality, not treating every respondent as a suspect. A screener that feels like an interrogation drives away exactly the honest participants you need.

Knowing how to detect fake and AI-generated participants in user research isn't a filter you apply once. It's an ongoing operations discipline, revisited as often as your [research operations](https://blog.glasgow.works/blog/research-operations) hub covers recruitment, incentives, and tooling.

## Frequently asked questions

**Do attention checks still work in 2026?**
They're necessary but no longer sufficient. Savvy fraudsters and AI assistants anticipate obvious trap items and answer them correctly first time. Use subtle, varied traps — buried mid-survey, changed between waves — and pair them with behavioural and open-end signals rather than relying on any single check to carry the decision.

**Can you reliably detect AI-generated open-ended responses?**
At scale, yes — gibberish detectors and LLM-based classifiers combined with human review catch most of it. Accuracy drops against a covert, real-time AI feeding answers to a genuine human. Classifiers also carry false-positive risk against non-native speakers, so corroborate a flag with other signals before rejecting anyone.

**What's the difference between a bot and an AI-coached participant?**
A bot is automated end-to-end and usually reveals itself through technical and timing metadata — datacentre IPs, uniform pacing, headless-browser fingerprints. An AI-coached participant is a real human reading AI-fed answers in real time, so they pass identity and technical checks; catching them needs interview-level probing, not paradata.

**How much of online research data is actually fraudulent?**
Widely reported estimates put fraudulent or unusable online responses at 30–40% in 2026. That scale is why layered validation — screener, behavioural, open-end, and post-hoc scoring — has become essential to protecting research data quality rather than a nice-to-have.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How to Detect Fake & AI Participants in Research",
  "description": "A method-first playbook to catch bots and AI-coached participants that now beat attention checks — screener design, timing signals, open-end forensics and",
  "datePublished": "2026-08-07",
  "dateModified": "2026-08-07",
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
    "@id": "https://blog.glasgow.works/blog/detect-fake-ai-participants-research-playbook"
  },
  "keywords": "how to detect fake and AI-generated participants in user research, research data quality, fraudulent survey responses, detecting bots in online research, screening out AI respondents, attention checks that still work"
}
</script>

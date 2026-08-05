---
title: "How to Detect Fake & AI Participants in User Research"
description: "AI agents now clear attention checks 100% of the time. Use this layered, behaviour-based playbook to catch fake and AI participants before they corrupt your"
pubDate: 2026-08-05
updatedDate: 2026-08-05
readingTime: 11
slug: "detect-fake-ai-participants-authenticity-governance"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "Layered checkpoints screening survey respondents to separate genuine humans from AI agents and bots"
tags:
  - "Research Operations → participant recruitment & panels (respondent data-quality / quality guardrails)"
  - "AI survey fraud detection"
  - "respondent authenticity governance"
  - "data quality in user research"
  - "AI agents passing screeners"
---
<!-- gr:toc -->

## On this page

- [Why AI just broke your old fraud checks](#why-ai-just-broke-your-old-fraud-checks)
- [Two different threats: fraudulent humans vs AI agents](#two-different-threats-fraudulent-humans-vs-ai-agents)
- [Layer 1: recruitment & identity governance](#layer-1-recruitment-identity-governance)
- [Layer 2: screener design that AI can't game](#layer-2-screener-design-that-ai-cant-game)
- [Layer 3: behavioural & technical signals to monitor](#layer-3-behavioural-technical-signals-to-monitor)
- [Layer 4: reading open-ends and verifying live sessions](#layer-4-reading-open-ends-and-verifying-live-sessions)
- [A respondent-authenticity governance playbook](#a-respondent-authenticity-governance-playbook)
- [Frequently asked questions](#frequently-asked-questions)

## Why AI just broke your old fraud checks

Fraud in online research panels isn't new. Estimates have long put unusable or fraudulent responses at 15–45% of raw sample, depending on source and incentive. What's changed is who's doing the faking. Agentic AI tools can now navigate a browser, read a screener, and answer in character well enough to pass as a genuine respondent. Testing through 2025 and into 2026 shows LLM-driven agents clearing standard attention checks at close to 100%, while those same checks catch only around 32% of low-effort human fraud even when they're still working.

That gap matters, because clean data underwrites everything you tell a client or ship into a roadmap. A single contaminated study doesn't just cost the field budget — it costs trust in the finding. Treat this as a one-off screener tweak and you miss the point. It's [research operations](/blog/research-operations) work: a standard an agency owns end-to-end, across recruitment, screening, fielding and QA, not a checkbox one vendor tool can tick. What follows sets out how to detect fake participants in user research as layered defences, not a single filter you bolt on and forget.

## Two different threats: fraudulent humans vs AI agents

Fraud in your pipeline isn't one problem. Click farms and bot networks submit at scale through scripted or headless browsers, chasing incentive payouts with little regard for plausibility. Incentivised humans — often the same person running several panel accounts — give inconsistent, low-effort answers because they're optimising for speed, not accuracy. Agentic AI is a third category: a tool given a task like "complete this survey as a 34-year-old product manager" that reads the questions, builds a coherent persona, and answers in character start to finish.

That third category undermines a method researchers have leaned on for years — hunting for internal inconsistency, where a respondent contradicts an earlier answer or claims something implausible. Large language models hold a persona consistently across a session, so contradiction and impossible-claim traps fire far less often than they do against rushed humans. The threat has also moved past the survey form. Deepfake video and cloned voice now turn up in moderated sessions, not just typed responses, so your threat model needs to cover live interviews too. Map each threat to the stage it enters your funnel — the layer that catches a bot farm won't catch a well-briefed agent.

## Layer 1: recruitment & identity governance

The cheapest place to stop fraud is before it reaches your screener. Source hygiene — knowing exactly where a panel sources respondents and how it verifies them — does more work than any downstream check. For studies where a bad respondent is expensive to catch late (paid pilots, executive panels, regulated categories), re-verify identity: government ID matching, phone verification, or a short onboarding study before someone enters your main pool. This catches account takeovers and resold credentials that a screener alone won't flag.

How you [recruit participants for user research](https://blog.glasgow.works/blog/how-to-recruit-participants-for-user-research) sets your fraud ceiling before fielding even starts. First-party recruiting — your own customer list, a referral chain, a community you already moderate — carries far lower risk than an anonymous open link posted to a panel exchange, the highest-risk channel you can run. If you must use open links, budget for heavier downstream screening to compensate.

Treat panel hygiene as an ongoing ritual, not a one-off vetting step: track rejection history per respondent ID, set velocity limits on how many studies one account can join in a period, and de-duplicate accounts across studies using device and payment fingerprints. Sound [UX research panel management](https://blog.glasgow.works/blog/ux-research-panel-management) means deciding, per study tier, how much reach you're willing to trade for verification — and writing that trade-off down before you field, not after a fraud cluster forces the conversation.

## Layer 2: screener design that AI can't game

Retire the instructional-manipulation checks you've used for a decade — "select somewhat agree to show you're reading," or claiming to have used a fictitious rare product. Agents parse instructions as reliably as they parse the survey questions, so these traps now pass close to 100% of the time. Keeping them doesn't add safety; it adds false confidence, because a clean pass on a trap that no longer discriminates tells you nothing about who's on the other end.

Replace them with items that reward lived experience over plausible prose. Ask for experiential open-ends that require a specific memory: what the interface looked like the last time they did the task, what went wrong, what they did next. Add local and temporal specificity — a named event, a recent date, a detail tied to place — cheap for a real respondent to recall and expensive for an agent to fabricate consistently. Knowledge items testing for lived context, like internal terminology a real customer would use, outperform generic category-fit questions.

Build contradiction traps across non-adjacent questions rather than back-to-back ones, so a respondent answering in isolation is more likely to slip. Add friction a genuine participant tolerates but automation stumbles on — show a screenshot or artefact and ask them to reason about one specific, unexpected detail in it. Our [screener survey best practices](https://blog.glasgow.works/blog/screener-survey-best-practices-ux-research) cover the full framework.

## Layer 3: behavioural & technical signals to monitor

Screeners test what a respondent says. Behavioural signals test how they actually interact with your instrument, and they're harder to fake convincingly at scale. Device and environment fingerprinting flags IP clusters — many "different" respondents from the same subnet — headless or automated browser environments, and mismatched browser, OS or timezone combinations that don't fit the claimed location.

Interaction telemetry catches what a transcript can't: tab-switching patterns consistent with someone working from another window, copy-paste events on open-text fields, and paste velocity too fast for genuine typing. Slider and keystroke timing that's suspiciously uniform — the same interval between every click, no natural variation — is a strong automation tell, because real human input is noisy by default.

At the batch level, watch for completion-time clusters: a run of responses finishing in near-identical time, especially unusually fast, points to scripted or coordinated submission. Straight-lining on grid questions still works as a tell, but only alongside the others — on its own it also catches bored-but-genuine respondents.

reCAPTCHA v3 and similar checks are worth running, but treat them as one signal among several rather than a gate; sophisticated bots and browser-automation agents increasingly clear them. Log every signal during fielding, not only at close, so your [survey bots and fake responses](https://blog.glasgow.works/blog/survey-bots-fake-responses-ux-research) QA process is evidence-based rather than a judgement call made from memory afterwards.

## Layer 4: reading open-ends and verifying live sessions

Reading open-ends by eye feels like the obvious defence, and it's the weakest one used alone. Trained reviewers identify AI-generated text at rates close to chance — a coin toss — because well-prompted output reads as fluent and plausible. Pair reading with the behavioural signals from Layer 3, and use it as one input to a decision, not the decision itself.

Certain tells still help: generically polished prose with no rough edges, hedging that avoids commitment to a specific claim, and an absence of sensory or first-person detail — "I remember the button was grey and slightly cut off on my screen" — all correlate with generated text. The clearest tell is an answer that ignores something unexpected in the question. A real respondent notices when you ask about a detail that doesn't fit their prior answers, and a scripted response often doesn't.

Moderated video carries the same risk now. Build in liveness prompts — ask someone to hold up a specific number of fingers, or repeat a word you choose live — and watch for lighting or framing anomalies consistent with a synthetic feed. Be wary of a sub-panel or partner that won't share raw recordings or can't explain its own vetting methodology. When a case is ambiguous, escalate to a follow-up probe rather than an outright reject; our guide to [detect fake survey respondents](https://blog.glasgow.works/blog/how-to-detect-fake-survey-respondents) has probe scripts you can adapt.

## A respondent-authenticity governance playbook

The four layers only work as a system when someone owns them end to end. Turn this into an SOP: a pre-launch checklist covering source, verification tier and refreshed screener traps; in-field monitoring against the Layer 3 signals; a post-field triage pass; and documented rejection thresholds, so a decision to exclude a respondent isn't made ad hoc mid-analysis.

Chain-of-custody matters as much as the checks themselves. A client trusting your findings needs to see how each response was validated — which signals fired, who reviewed the flag, what the decision was — not just a final "clean" sample. Keep that audit trail alongside the dataset, not in someone's memory.

Plan incident response before you need it. When a fraud cluster turns up mid-field — a batch of suspiciously fast completions from one IP range, say — quarantine those responses immediately, backfill from a verified source rather than padding the existing sample, and disclose the incident and remediation to the client rather than smoothing it over in the write-up.

Extend the same governance to AI inside your own pipeline. If a tool is summarising transcripts or drafting synthesis, [validate AI-generated research insights](https://blog.glasgow.works/blog/validate-ai-generated-research-insights) with the same rigour you apply to respondents, or you've simply moved the authenticity problem downstream.

We've seen the open-link version of this pattern most often in studies recruiting for hard-to-reach or specialist segments. A batch of responses arrives with suspiciously polished, near-identical language that reads well but stays thin on the local, checkable detail the screener asked for. Cross-checking against completion-time data usually confirms coordinated submission rather than independent respondents. Our standard response is to quarantine the batch, backfill from a verified source, and tighten the screener's specificity requirements for the rest of fielding. That last change — requiring local, checkable detail in every open-end — is now a fixture in our screener template.

## Frequently asked questions

**Can attention checks still catch AI participants?**
No. Agentic AI clears standard attention and rare-event checks at rates close to 100%, while these checks catch only around 32% of low-effort human fraud even when they're still working. Keep them as basic hygiene — they still catch some low-effort humans — but don't rely on them as your primary defence. Behavioural signals, device fingerprinting and identity verification carry the real weight now.

**Can you spot a fake or AI respondent just by reading their answers?**
Rarely, and not reliably enough to act on alone. Trained reviewers identify AI-generated text at rates close to chance. Use open-end review as one input alongside interaction telemetry, completion-time clustering and identity verification — the combination gives you a defensible call where reading alone doesn't.

**How much of my sample could be fake or AI?**
Industry estimates put unusable or fraudulent responses at 15–45% of raw sample, depending on source and incentive structure. Anonymous open links and unverified panel exchanges sit at the high end of that range; first-party recruiting and re-verified panels sit at the low end.

**What's the fastest way to reduce fake participants?**
Move your defence upstream. Tightening recruitment source and identity verification before fielding does more than any downstream screener or QA step, because later layers can only catch what your funnel already let through.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How to Detect Fake & AI Participants in User Research",
  "description": "AI agents now clear attention checks 100% of the time. Use this layered, behaviour-based playbook to catch fake and AI participants before they corrupt your",
  "datePublished": "2026-08-05",
  "dateModified": "2026-08-05",
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
    "@id": "https://blog.glasgow.works/blog/detect-fake-ai-participants-authenticity-governance"
  },
  "keywords": "how to detect fake participants in user research, AI survey fraud detection, respondent authenticity governance, data quality in user research, AI agents passing screeners, detecting bot respondents"
}
</script>

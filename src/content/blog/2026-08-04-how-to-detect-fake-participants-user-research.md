---
title: "How to Detect Fake Participants in User Research"
description: "Learn how to detect fake and AI-generated participants in user research using screener, in-session, and post-hoc signals that protect your data quality."
pubDate: 2026-08-04
updatedDate: 2026-08-04
readingTime: 11
slug: "how-to-detect-fake-participants-user-research"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "Researcher reviewing screener, in-session, and post-hoc signals to detect fake and AI-generated participants in user research"
tags:
  - "Research Operations → participant quality & fraud detection (quality guardrails)"
  - "AI-generated survey responses"
  - "bot detection in research panels"
  - "respondent authenticity"
  - "data quality in user research"
---
<!-- gr:toc -->

## On this page

- [Why fake and AI-generated participants are a 2026 data-quality crisis](#why-fake-and-ai-generated-participants-are-a-2026-data-quality-crisis)
- [The three-layer detection framework: screener, in-session, post-hoc](#the-three-layer-detection-framework-screener-in-session-post-hoc)
- [Screener-stage signals: catching fraud before it enters your sample](#screener-stage-signals-catching-fraud-before-it-enters-your-sample)
- [In-session signals: spotting bots, LLM assistance, and deepfakes live](#in-session-signals-spotting-bots-llm-assistance-and-deepfakes-live)
- [Post-hoc signals: paradata, response patterns, and duplicate identities](#post-hoc-signals-paradata-response-patterns-and-duplicate-identities)
- [Detecting LLM-generated open-ended responses specifically](#detecting-llm-generated-open-ended-responses-specifically)
- [What a fraud farm actually looks like: signals from the field](#what-a-fraud-farm-actually-looks-like-signals-from-the-field)
- [When you flag someone: triage, false positives, and ethics](#when-you-flag-someone-triage-false-positives-and-ethics)
- [Building a participant-quality governance playbook](#building-a-participant-quality-governance-playbook)

## Why fake and AI-generated participants are a 2026 data-quality crisis

A study wraps, the synthesis looks tidy, and a roadmap gets built on it. Except some of the "users" behind that roadmap were never real users at all. Fraud cost the market-research industry an estimated $350 million in 2024, roughly 10% of all incentive spend, and by some counts a third of online participants admit to running open-ended answers through tools like ChatGPT before hitting submit.

Three distinct threats sit inside the same sample: automated bots and scripts, human fraud farms rotating professional respondents through multiple identities, and LLM-assisted or deepfaked humans who pass as genuine but aren't answering in their own voice. None of these announce themselves. They show up as a slightly-too-clean dataset that quietly biases synthesis, product decisions, and stakeholder trust.

This piece sets out how to detect fake participants in user research as a lifecycle discipline — screener, in-session, post-hoc — not a one-off vendor feature. Treating it as a [research operations discipline](https://blog.glasgow.works/blog/research-operations) is what separates teams that catch fraud early from teams that discover it after the readout. No single check is sufficient. Detection has to be layered and probabilistic.

## The three-layer detection framework: screener, in-session, post-hoc

Carry one mental model into every study: fraud and survey fraud detection generally work in three layers, and each catches what the one before it missed.

- **Screener (pre-session):** stop obvious fraud before it enters your sample — bad emails, mismatched geo, impossible completion times.
- **In-session:** catch what got through — bots, LLM-assisted typing, deepfaked video — while the respondent is live.
- **Post-hoc:** after collection, mine paradata and response patterns for anything the first two layers missed, especially coordinated fraud.

No layer is sufficient on its own. A screener stops the cheapest attempts before they cost you anything. In-session signals catch impersonation a form can never see. Post-hoc pattern analysis catches coordinated fraud that looks clean respondent by respondent but collapses under aggregate scrutiny. Treat each flag as one vote, not a verdict — the goal is defence in depth, not a single perfect filter.

## Screener-stage signals: catching fraud before it enters your sample

Most screeners are too easy to game. A question like "Do you use a project-management tool at work?" followed by "Which one?" just teaches a fraudster which answer unlocks the study. Following [screener survey best practices](https://blog.glasgow.works/blog/screener-survey-best-practices-ux-research) means avoiding leading questions, using open-ended qualifiers that demand specific knowledge, and salting multiple-choice lists with plausible-but-disqualifying decoy options that only a genuine non-fit would pick.

Behavioural tells show up before anyone reads a question properly: screeners completed in a fraction of the expected time, straight-lining through matrix questions, or demographic answers that contradict each other two questions apart — a respondent who claims to be a senior manager of ten years and, elsewhere, a recent graduate.

Technical signals matter just as much. Disposable or obviously alphanumeric-generated email addresses, IP addresses that don't match the stated location or time zone, VPN use, and duplicate device fingerprints across supposedly unrelated respondents are standard, cheap checks worth running by default.

A two-stage process helps close the gap. Run a lightweight eligibility screener first, then send the real study link only to verified emails that pass. No matter [how you recruit participants](https://blog.glasgow.works/blog/how-to-recruit-participants-for-user-research), de-duplicate incoming respondents against your own panel history — professional respondents rotating between slightly different names and emails is one of the most common ways fraud gets past one-off checks.

## In-session signals: spotting bots, LLM assistance, and deepfakes live

Screeners catch fraud that declares itself. In-session signals catch fraud trying to blend in — and this is where most bot detection in research panels actually happens.

Bots leave mechanical fingerprints: mouse movement that's too straight or too uniform, typing with no natural rhythm (real humans pause, backspace, and vary keystroke timing), identical time-on-page across supposedly different respondents, low reCAPTCHA scores, and honeypot fields — invisible form fields only a script would fill in — that get completed anyway.

LLM assistance leaves a different trail: copy-paste events into free-text fields, tab-switching immediately before an open-ended answer is submitted, a sudden jump from terse one-word responses to polished, structured prose, and latency spikes. A long pause followed by an unusually articulate answer is a stronger tell than the answer's content.

Moderated video carries its own risk profile, particularly impersonation. Watch for blurring or artefacts at the edge of the face, audio slightly out of sync with lip movement, flat affect that doesn't match what's being said, and delayed reactions to interruption. Asking a participant to make an unexpected physical movement, or dropping in a spontaneous, unscriptable question, is one of the most effective live checks available.

Where stakes justify it — expert panels, high-incentive studies, B2B decision-maker interviews — liveness checks and ID matching earn their friction. Use them proportionately; legitimate participants shouldn't feel interrogated. And don't confuse any of this with [AI-moderated interviews](https://blog.glasgow.works/blog/ai-moderated-interviews-when-how-to-run), where the risk profile is reversed: the AI is running the session on your behalf, not standing in for the respondent.

## Post-hoc signals: paradata, response patterns, and duplicate identities

Once fieldwork closes, the richest signals often sit in metadata nobody looked at during collection. Plot completion-time distributions and look for clusters that are suspiciously fast or oddly uniform. Group by device, OS, and browser fingerprint — a wave of submissions sharing a device signature is a stronger signal than any single answer. Submission timestamps clustering from one IP address, especially outside normal hours for the stated location, deserve a second look.

Response-pattern analysis catches what timing alone won't: straight-lining through scales, yea-saying regardless of content, eligibility claims that don't hold up against other answers in the same response, and identical or near-identical text strings appearing across supposedly unconnected respondents.

Incentive redemption is an underused signal for respondent authenticity. Dozens of reward payouts redeemed from one IP address or device within a short window is a strong indicator of a coordinated fraud farm rather than isolated bad actors — this pattern is one of the more reliable ways to [detect fake survey respondents](https://blog.glasgow.works/blog/how-to-detect-fake-survey-respondents) after the fact, because it's hard to fake at scale.

Treat every flag as provisional. One suspicious signal is noise; three or four converging on the same respondent is evidence. Cross-reference flags against each other before excluding anyone, and write down exactly why each exclusion was made — that record is what protects your findings when a stakeholder later asks how the sample was cleaned.

## Detecting LLM-generated open-ended responses specifically

Open-ends are the hardest case in the whole stack. AI-detection classifiers are unreliable on short text, and simple paraphrasing tools evade them in roughly nine out of ten attempts. Treating a classifier score as proof is a mistake, not a shortcut, and it's the main reason AI-generated survey responses keep slipping through text-only checks.

Behavioural signals are more trustworthy than the text itself. Keystroke and paste-event logging, tab-switch tracking, and time-to-first-keystroke tell you whether an answer was typed live or composed elsewhere and dropped in — closer to how [survey bots and fake responses in UX research](https://blog.glasgow.works/blog/survey-bots-fake-responses-ux-research) actually get caught than any linguistic analysis.

Content still gives some tells: generic, heavily hedged, suspiciously well-structured answers for a spontaneous question, no concrete personal detail, and a uniform tone across an entire batch of otherwise unrelated respondents.

Telling participants an AI detector is watching doesn't deter anyone determined to cheat — it just teaches them to try harder. The sturdier fix is designing tasks that demand first-hand specificity: ask for a recent, concrete example with named details an LLM can't fabricate convincingly, and score for specificity rather than polish.

## What a fraud farm actually looks like: signals from the field

Across our decision-interview studies, the clearest fraud signal rarely comes from one dramatic answer. It comes from convergence. On sensitive or high-stakes topics especially, where respondents may sense there's a "right" answer, we periodically see clusters of respondents give near-identical answers: matching phrasing, matching order of priorities, sessions booked within minutes of each other. Taken alone, none of those interviews looks wrong; each answer is plausible and on-topic for the study.

What changes the picture is layering signals against each other. A moderator's live impression that two sessions read almost the same, checked against matching device fingerprints and incentive redemptions tracing back to a small handful of shared IP addresses, is the kind of convergence that turns a hunch into evidence — evidence a single check, taken alone, would have missed.

When that convergence appears, we exclude the cluster, re-run that slice with freshly recruited respondents, and re-check whether the finding holds. It usually does, in some form — but that's beside the point. Catching the cluster before synthesis is what lets a finding ship as something the team can stand behind, rather than the same script counted several times over.

## When you flag someone: triage, false positives, and ethics

Flagging someone isn't the same as excluding them, and treating it that way creates a new problem. Attention checks alone routinely misflag genuine respondents, so a single failed check is a signal to look closer, not a verdict.

Most false positives have ordinary causes: a translated screener that reads awkwardly, a mis-tap on a mobile matrix question, a genuine misunderstanding of a badly worded item. Build a review step in before anyone is excluded on the strength of one flag — the same discipline you'd want applied before you [validate AI-generated research insights](https://blog.glasgow.works/blog/validate-ai-generated-research-insights) rather than accepting them at face value.

A simple triage ladder works well:

- **Monitor** — one weak signal, no action.
- **Hold payment for review** — a second signal appears.
- **Request verification** — the study's stakes justify light-touch checks.
- **Exclude** — signals converge into confident evidence.

Pay legitimate participants fairly even when a study gets voided for unrelated reasons — punitive withholding on weak evidence damages trust with your panel and, eventually, your response rates. Any verification step should be proportionate to the actual risk, transparent about what's being checked, and respectful of participants' data and dignity.

## Building a participant-quality governance playbook

None of this works as a one-off effort. It has to become how you run studies, not a special measure reserved for high-stakes ones. Codify the three layers into a standing checklist every study runs through as a matter of course, from screener design to post-hoc pattern review, so quality checks don't depend on someone remembering to run them.

Maintain a trusted, vetted panel with active de-duplication and reputation scoring across studies. The single biggest lever for shrinking the fraud surface is not meeting the same bad actor for the "first time" in every new project. Assign clear ownership: name who reviews flags, who has authority to approve an exclusion, and where that decision gets logged so it's auditable months later.

Track data quality in user research as a KPI, not an afterthought — exclusion rate and flag-to-exclusion ratio, reviewed quarterly, will tell you whether your defences are working or whether fraud tactics have simply moved on without you.

Start with one change this week: add a single behavioural check — copy-paste detection or time-to-first-keystroke — to your next screener, and see what it surfaces before you trust the sample.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How to Detect Fake Participants in User Research",
  "description": "Learn how to detect fake and AI-generated participants in user research using screener, in-session, and post-hoc signals that protect your data quality.",
  "datePublished": "2026-08-04",
  "dateModified": "2026-08-04",
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
    "@id": "https://blog.glasgow.works/blog/how-to-detect-fake-participants-user-research"
  },
  "keywords": "how to detect fake participants in user research, AI-generated survey responses, bot detection in research panels, respondent authenticity, data quality in user research, survey fraud detection"
}
</script>

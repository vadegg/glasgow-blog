---
title: "Detect Bots and Deepfakes in Research Participant Interviews"
description: "Use a proportionate protocol to spot and handle bot, voice-clone and deepfake risks in research interviews without penalising legitimate participants."
pubDate: 2026-10-28
updatedDate: 2026-10-28
readingTime: 8
slug: "detect-bots-deepfakes-research-participant-interviews"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
hub: "research-operations"
draft: false
heroImageAlt: "Research moderator reviewing a participant-integrity checklist during a remote video interview"
tags:
  - "Research Operations — participant recruitment & panels: live-interview participant integrity"
  - "synthetic voice participants research"
  - "deepfake video interview detection"
  - "participant identity verification research"
  - "interview participant fraud prevention"
---
## What counts as a bot, synthetic voice or deepfake in research?

To detect bots and deepfakes in research participant interviews, first separate the risks. A bot may automate registration or responses. A real person may be ineligible, attend repeatedly or use generated answers. A cloned or synthetic voice, manipulated video and generated video raise a different question: whether the participant and their media are authentic.

Poor connectivity is not proof of fraud. Neither are camera avoidance, an accent, disability, anxiety, concise answers or an unfamiliar communication style. Treat these as ordinary possibilities, not diagnostic signs.

Your aim is sufficient confidence that a participant meets the study criteria and can discuss relevant lived experience. It is not forensic certainty, and it does not require intrusive identity checks. Put a consistent route for resolving concerns into your [Research Operations guidance](/blog/research-operations/).

## Set the assurance level before recruitment starts

Choose an integrity tier before recruitment. Base it on the incentive, the scarcity of the audience, topic sensitivity and the consequence of making a decision from unreliable data.

| Tier | Suitable for | Minimum assurance |
|---|---|---|
| Low | Broad, low-risk exploratory work | Concrete screener and confirmed booking contact |
| Medium | Narrow roles or higher incentives | Booking review, consistency checks and live experience probes |
| High | Scarce audiences, sensitive studies or consequential decisions | Controlled recruitment, documented verification routes and designated escalation |

For each tier, define sufficient evidence, accessible alternatives and who may decide to exclude data. Moderators should not have to invent policy during an interview.

Invitation-only recruitment and controlled panels can reduce automated sign-ups, but neither proves eligibility or authenticity. Use [UX research screeners](https://blog.glasgow.works/blog/screener-survey-best-practices-ux-research/) to ask about a concrete recent experience: what happened, which tools were involved, what constrained the person and what they did next. This is part of how you [recruit participants for user research](https://blog.glasgow.works/blog/how-to-recruit-participants-for-user-research/), rather than a separate fraud exercise.

## Use a low-friction pre-session verification sequence

Confirm that the participant controls the booked contact method through the existing calendar invitation or email thread. Do not request government ID, personal documents or other information the study does not need.

Compare screener and booking details for duplicates, inconsistencies and improbable patterns. Similar wording across applications, repeated contact details or conflicting accounts of recent experience may justify review. None is a verdict on its own. Research on inauthentic participation distinguishes recurring red and yellow patterns rather than treating every anomaly as decisive ([Journal of Medical Internet Research](https://www.jmir.org/2025/1/e78554)).

Before the session, explain what may happen, why the check supports research quality, what you will retain and how participants can raise a concern. Align the process with [UK GDPR compliance for research participants](https://blog.glasgow.works/blog/uk-gdpr-compliance-user-research-participants/).

If video is unsuitable, offer another route: an audio-first interview, captioning, a support person, more response time or an agreed independent confirmation method. Identity-related checks should minimise data collection and participant burden ([NIST](https://pages.nist.gov/800-63-4/sp800-63a.html)).

## Run a brief live integrity check without interrogating people

Open the interview normally. Confirm consent, then explain that you will make a short check of relevant experience to protect research quality.

Use one unpredictable cue appropriate to the format. You might change the order of an on-screen task or ask the participant to find a familiar product area. Where video has already been agreed, you can invite a simple voluntary movement. NIST includes random human-in-the-loop cues, such as requesting user movements, in its remote verification guidance ([NIST](https://pages.nist.gov/800-63-4/sp800-63a.html)).

Then use questions grounded in experience:

- “Tell me about the last time you did that.”
- “What happened first, and what did you do after that?”
- “What made that difficult?”
- “What trade-off did you make?”
- “Was there a document, screen or workflow you relied on?”

Latency, lip-sync mismatch, audio artefacts and generic answers are observations, not proof. Combine them with independent inconsistencies before changing course. A moderator cannot authenticate deepfake video by eye.

A familiar-sounding voice is not adequate identity evidence. Where a material discrepancy needs resolution, use an independent route such as the known booking contact rather than the voice itself ([Federal Trade Commission](https://consumer.ftc.gov/consumer-alerts/2023/03/scammers-use-ai-enhance-their-family-emergency-schemes)). For recruitment-stage controls, see [How to detect fake and AI participants in user research](https://blog.glasgow.works/blog/detect-fake-ai-generated-participants-user-research/).

## Use the Interview Integrity Triage Card to decide what to do

Use this card during the interview or immediately afterwards. Record observable facts, not assumptions. “Participant gave two different job titles” is useful; “participant sounded fake” is not.

### Interview Integrity Triage Card

| Field | Filled example |
|---|---|
| Study assurance tier | Medium: specialist workflow, moderate incentive |
| Pre-session signals | Booking email confirmed; screener states monthly use; similar phrasing appears in two unrelated applications |
| Live check options | Ask about the most recent workflow; reorder task; offer audio-first continuation if video is difficult |
| Observation | Participant could not describe the claimed recent workflow after neutral follow-ups |
| Corroborating evidence | Claimed tool differs from booking explanation; participant did not complete a familiar-product navigation task |
| Benign explanation considered | Accessibility needs, nervousness, poor connection and unclear wording; moderator restated questions and offered extra time |
| Risk level | Medium: two unresolved inconsistencies, no confirmed falsehood |
| Immediate action | Pause substantive questioning; explain the discrepancy; offer independent confirmation through the booked contact route |
| Owner | Research-operations owner reviews before any exclusion decision |
| Record to retain | Date, observable facts, questions asked, response, alternative offered and final decision |
| Confidence level | Insufficient confidence to use the interview as confirmed specialist evidence |
| Participant-safe next action | Explain the review route and allow correction of booking or screener information |
| Post-session disposition | Hold data separately pending review; do not merge it with the confirmed sample |

Use this decision rule:

| Evidence position | Action |
|---|---|
| One ambiguous signal | Continue and observe |
| Two unresolved inconsistencies | Clarify and consider independent verification |
| Demonstrably false eligibility claim | Pause or end under the study policy |
| Confirmed fraud | Document, protect incentive controls and exclude affected data |

Here is a hypothetical example. A participant gives generic answers and cannot reconcile a conflict between their screener and booking details. They report connection trouble, so the moderator offers an audio-first continuation, then seeks confirmation through the pre-agreed contact route. If supporting information corrects the discrepancy, continue under policy. If it remains unresolved, separate the data without making a personal accusation.

This follows the practical sequence of pausing, clarifying and documenting before excluding demonstrably unreliable data; one sign is not proof ([TechRadar Pro](https://www.techradar.com/pro/bots-deepfakes-and-fake-identities-are-sabotaging-user-research)). After the session, alert the recruitment owner, review cohort-level patterns, update controls and preserve a correction route. [fake survey response detection and prevention](https://blog.glasgow.works/blog/fake-survey-responses-detection-prevention/) and [UX research panel management](https://blog.glasgow.works/blog/ux-research-panel-management/) should form part of the same operating process.

## Keep the protocol fair, accessible and privacy-aware

Document verification measures in recruitment and consent materials. Match them to study risk, limit access to records and set a retention period. Collecting more personal data than needed creates a separate risk.

Do not make camera use or government ID a default condition where the research question does not require it. Research on remote authenticity expectations warns that mandatory video or ID checks can reinforce ableist, racialised and classed norms ([Sociological Research Online](https://journals.sagepub.com/doi/10.1177/13607804251403342)).

Offer alternatives from the outset. Our guidance on how to [recruit disabled participants for accessibility research](https://blog.glasgow.works/blog/recruit-disabled-participants-accessibility-research/) can help prevent verification from becoming an exclusion mechanism.

Train moderators to pause, clarify and escalate rather than accuse. A designated research-operations owner should make consequential decisions, assess disproportionate burden and ensure participants can explain or correct a discrepancy.

## A practical checklist for the next interview

Before the next session:

- Choose an integrity tier and escalation owner.
- Tell participants which proportionate checks may occur.
- Confirm the booked contact method and review concrete screener answers.
- Use live probes about recent experience, not visual guesswork.
- Combine signals, record facts neutrally and offer accessible alternatives.
- Review recruitment patterns rather than treating each concern in isolation.

Participant integrity is a research-operations practice, not a deepfake-spotting contest.

## Frequently asked questions

### Can a moderator reliably spot a deepfake video in an interview?

No. Audio and visual anomalies are cues, not proof. Use proportionate layered checks and an independent route to resolve material discrepancies.

### Should every research participant provide ID or turn on their camera?

No. Set verification according to study risk, disclose it in advance, offer accessible alternatives and collect only the personal data needed.

### What should I do if a participant seems inauthentic mid-interview?

Pause. Clarify a specific discrepancy with neutral questions, follow the agreed escalation path and document observable facts. Exclude data only where the evidence supports that decision.

### How can I prevent bots from joining interview research?

Use controlled recruitment where appropriate, concrete screener questions, contact-method confirmation, booking review and a brief human-led live check. Keep bot controls separate from checks for real people who may be misrepresenting eligibility.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://blog.glasgow.works/services/).

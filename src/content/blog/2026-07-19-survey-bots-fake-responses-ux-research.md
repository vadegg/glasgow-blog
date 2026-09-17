---
title: "Survey Bot Controls: Collection Workflow and QA Plan"
description: "Design survey bot controls before fieldwork: verify challenge tokens, handle duplicate submissions and test collection failures with a downloadable QA plan."
pubDate: 2026-07-19
updatedDate: 2026-09-17T07:14:37.136Z
readingTime: 6
slug: "survey-bots-fake-responses-ux-research"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "Dashboard flagging duplicate and bot-like survey responses among real UX research data points"
tags:
  - "research democratisation & quality guardrails"
  - "detecting fake survey responses"
  - "bot detection in online surveys"
  - "survey data quality checks"
  - "attention checks survey design"
hub: "research-operations"
---

Survey bot controls belong in the collection workflow: who can enter, how a submission is accepted, which events are recorded and how a failed check can be reviewed. A bot challenge can help limit automated submissions; it does not establish a participant's eligibility or the truth of an answer.

This guide covers **collection design and technical acceptance checks**. If you already have an export to clean, use the [manual response review guide and worksheet](/blog/how-to-detect-fake-survey-respondents/).

## Map the collection boundary

Document the recruitment source, invitation route, survey host, submission endpoint, data export and any incentive workflow. Identify the component that can enforce each control. A check implemented in a browser can be bypassed if the submission endpoint accepts requests without checking it.

Distinguish a response ID, a participation token and a browser session. A response ID identifies a record; it is not proof of a unique person. A single-use invitation can restrict repeated participation through that invitation, but it does not prevent someone acquiring another invitation or misrepresenting their eligibility.

Make [screening criteria](/blog/screener-survey-best-practices-ux-research/) specific to the research question. Additional technical controls should support those criteria rather than redefine the target audience around who passes a challenge most easily.

## Check what the platform exposes

Inspect a real test export and the documentation for the chosen product and plan. Confirm what timestamps mean, whether a start event exists, how retries and partial responses are represented and whether any network or device metadata is available to the researcher.

The [standard Google Forms response resource](https://developers.google.com/workspace/forms/api/reference/rest/v1/forms.responses) does not expose respondent IP addresses, browser fingerprints or device IDs. Those checks cannot be reconstructed from a normal Forms response export. Do not promise them unless a separate, appropriate collection mechanism has actually been implemented and tested.

If the project uses device or network signals, document their purpose, access, retention and participant information with the responsible data owner. A fingerprint is an estimate built from available signals, not a permanent identity. Browser changes can alter it, and different people may share technical characteristics. Shared IPs and VPN use are not automatic exclusion rules.

## Validate a bot challenge at the receiving endpoint

For a custom survey integration using Turnstile, [Cloudflare's server-side validation documentation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/) requires the receiving server to validate the token through Siteverify. Tokens expire after five minutes and can be validated only once. The widget alone does not protect an endpoint that skips validation.

Use the following as a proposed acceptance workflow, adapted to your application:

1. Receive the submission and validate its format, invitation state and expected survey version.
2. Validate the challenge token on the server. Check the returned hostname and action against the expected context where used.
3. On a failed or unavailable verification, keep the response out of the accepted dataset and offer an appropriate retry or support route. Log the technical outcome without labelling the person fraudulent.
4. On success, apply the participation rule and write the accepted response once. Handle resubmission and concurrent requests so they cannot produce multiple accepted copies of the same authorised participation.
5. Return a status that accurately tells the participant whether their response was accepted. Keep incentive eligibility separate from any temporary technical failure.

Challenge-token reuse protection and application-level duplicate handling solve different problems. Test both. A successful challenge still needs the study's eligibility and response-quality checks.

## Run an acceptance checklist before recruitment

Download the [survey collection QA plan](/downloads/survey-collection-qa-plan.csv). These are **proposed test cases**, not a tested integration or vendor performance benchmark. Fill the observed-result and evidence fields when testing your system.

| Test condition | Expected collection behaviour | Evidence to keep |
|---|---|---|
| Valid invitation and successful verification | One accepted response with the intended survey version | Response ID and acceptance event |
| Missing, expired or replayed challenge token | No acceptance on the failed check; a usable recovery route | Verification outcome and shown participant state |
| Double-click or network retry | One accepted completion for the same participation | Request outcomes and resulting record count |
| Verification service unavailable | No silently accepted unverified response; recoverable failure | Error state, retry path and dataset status |
| Legitimate participants share a network | Each eligible person can complete under the study rules | Separate invitations and accepted records |
| Keyboard or assistive-technology route | The participant can complete or reach support | Observed accessibility issue and resolution |
| Export is run twice | Stable response IDs make duplicate files detectable | Export version and reconciliation count |

Test realistic delays and resumptions. A participant taking longer than a challenge token's lifetime needs a recovery mechanism; token expiry is not evidence that the person failed a research-quality check.

## Monitor collection with interpretable events

Keep only the events needed to reconcile collection: survey version, permitted recruitment-channel identifier, acceptance state, event time, verification outcome and relevant error category. Protect identifiers and restrict access to raw logs.

Track attempted submissions separately from accepted responses. An increase in rejected requests may indicate automation, an expired-token flow or a broken integration. Investigate the cause before changing recruitment or interpreting a rejection rate as a fraud rate.

Honeypots and attention checks have limits. Autofill or accessibility behaviour can interact with poorly implemented hidden fields, while an automated client can avoid a simple trap. Test any additional control with legitimate completion paths and document its false-rejection risks. Do not claim that a fixed number of checks or a particular challenge blocks most survey fraud without evidence from that deployment.

## Agree ownership and evidence with a panel provider

Ask which checks the provider performs, which metadata you can inspect, how flagged records are reviewed, what replacement terms apply and what happens when you dispute a classification. Get the answers for the actual service and agreement, rather than assuming every provider offers the same guarantees.

[Pew Research Center's comparison of online sample sources](https://www.pewresearch.org/methods/2020/02/18/assessing-the-risks-to-online-polls-from-bogus-respondents/) illustrates why the recruitment and checking process matters. Its study-specific findings should not be turned into a current universal percentage for your survey.

Assign an owner for technical failures and an owner for research-quality decisions. Feed accepted responses into the documented manual review process. If exclusions leave a recruitment gap, decide on additional fieldwork from the remaining coverage and intended analysis; reweighting cannot make fabricated answers valid.

## Keep simulated data separate from participant evidence

Use clearly labelled synthetic submissions to test routing, validation and export. Keep them out of production analysis. Their purpose is to exercise the collection system, not to estimate customer preferences or demonstrate that real participants can complete the survey.

Record the tested configuration, unresolved failures, responsible owner and change that should trigger a retest. Treat these records as part of [research operations](/blog/research-operations/), alongside the [survey design](/blog/survey-design-best-practices-ux/) and response-review decisions.

<!-- gr:footer -->
---

Glasgow Research helps B2B SaaS teams turn research into product decisions. [Discuss your study](/services/).

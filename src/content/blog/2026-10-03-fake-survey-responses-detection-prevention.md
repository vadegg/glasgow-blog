---
title: "Fake Survey Responses: Detect and Prevent Fraud"
description: "Use a practical, evidence-led workflow to prevent, detect and review fake survey responses without excluding valid participants on one weak signal."
pubDate: 2026-10-03
updatedDate: 2026-10-03
readingTime: 8
slug: "fake-survey-responses-detection-prevention"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
hub: "ux-research-methods"
draft: false
heroImageAlt: "Researcher reviewing fake survey response signals in a survey fraud detection worksheet"
tags:
  - "surveys and questionnaire design — response integrity and fraud prevention"
  - "survey fraud detection"
  - "how to detect fake survey responses"
  - "survey bots"
  - "fraudulent survey participants"
---
## What counts as a fake survey response?

Fake survey responses are ineligible, duplicated, automated, fabricated or deliberately misleading submissions that cannot credibly represent the people you intended to study. They can bias findings when they cluster around an answer, incentive or recruitment route instead of adding random noise.

The operational question is not always “Was this a bot?” A survey bot is automated; a repeat respondent submits more than once; another person may misrepresent their identity, location or eligibility for an incentive. A professional participant may complete many studies and still answer credibly. A genuine participant may rush, misunderstand a question or miss an attention check.

The useful distinction is between credible and non-credible interviews. In its analysis of bogus respondents in online polls, [Pew Research Center](https://www.pewresearch.org/methods/2020/02/18/assessing-the-risks-to-online-polls-from-bogus-respondents/) similarly finds that establishing whether a questionable response was human or automated is often uncertain. This matters in [UX research methods](/blog/ux-research-methods/), especially where a narrow audience or small sample informs prioritisation.

## Why one red flag cannot prove survey fraud

No single signal proves survey fraud. Review evidence across identity and duplication, technical metadata, response behaviour, answer quality and eligibility consistency.

A duplicate IP address may come from a household, workplace, university or shared mobile network. A fast participant may know the subject well. A person using assistive technology may take an unusual survey path. Genuine respondents can also fail attention or consistency checks.

Research on survey bots supports this caution. In the study setting, people making a good-faith effort could still make mistakes on attention and consistency checks. Combined technical, consistency and domain-knowledge tests performed more strongly than individual checks. The [Web Conference 2022 paper](https://gangw.cs.illinois.edu/www22-bot.pdf) also shows that automation barriers may be supported by human input.

Treat an isolated weak signal as a review prompt. Require corroborating evidence before exclusion. Short completion time may justify inspection; short time alongside conflicting eligibility answers and repeated open text is a stronger reason to investigate.

Our guide to [detecting fake and AI-generated research participants](https://blog.glasgow.works/blog/detect-fake-ai-generated-participants-user-research/) explains the wider participant-quality context.

## Before launch: reduce opportunities for fake responses

Set the fraud plan before fieldwork. Define the target population, credible eligibility evidence, review owner, exclusion rules and replacement policy. Rules created after an inconvenient result are difficult to defend.

Use controlled, respondent-specific invitations where feasible. Public links are easier to share and reuse. Keep recruitment validation separate from the main questionnaire where possible, so you can assess eligibility without exposing the whole study.

Build screeners around relevant knowledge or experience without revealing the qualifying answer. Avoid obscure puzzles that test familiarity with survey tactics rather than genuine eligibility. Include cross-checkable questions, a context-specific open response and unobtrusive consistency checks, while keeping wording accessible.

These controls belong within [survey design best practices](https://blog.glasgow.works/blog/survey-design-best-practices-ux/). A confusing survey can create poor-quality data from valid participants.

Configure available platform controls before data collection. Qualtrics states that its multiple-submission prevention setting must be enabled before collection, and its cookie-based detection only identifies repeats on the same browser and device while cookies remain. [Qualtrics support documentation](https://www.qualtrics.com/support/survey-platform/survey-module/survey-checker/fraud-detection/?parent=p0094) Do not assume every platform or plan offers identical controls.

Pilot timing and question paths with genuine users. This gives you an observed comparison point rather than an arbitrary speed cutoff. For IP, device and identity data, set data-minimisation, access and retention rules and obtain appropriate privacy and legal review. See [UK GDPR compliance for research participants](https://blog.glasgow.works/blog/uk-gdpr-compliance-user-research-participants/).

## During fieldwork: monitor patterns before they spread

Review response volume and recruitment source in regular time windows. Investigate sudden bursts, repeated referral sources and unexpectedly rapid quota fills, particularly where they differ from pilot or accumulated fieldwork patterns.

Compare completion-time distributions and page-level timings with observed behaviour. Look for unusually fast or uniform patterns and shifts following a recruitment change. These are signals to investigate, not automatic reasons to delete data.

Monitor duplicate, bot, geolocation and device flags where lawfully collected. Cookies can be cleared, devices shared, VPNs can alter apparent locations and IP addresses can rotate. Participant platforms may combine account verification with continuous review of submission, login and device patterns, as [Prolific](https://researcher-help.prolific.com/en/articles/445227-how-does-prolific-prevent-duplicate-participant-accounts) describes. Platform controls do not replace study-level review.

Inspect small batches of open text for repeated wording, generic answers, copied prompts and contradictions with closed responses. Pause a suspicious source or incentive route while you investigate rather than silently changing exclusion rules mid-fieldwork. This is a core [research operations](/blog/research-operations/) responsibility.

## After fieldwork: run a multi-signal quality check

Preserve the raw export and work from a review copy. Keep a response ID so every decision can be traced to the original record.

Check exact duplicates first: respondent identifiers, permitted device signals, answer vectors and repeated open-text passages. Then review eligibility and internal consistency. Impossible combinations, conflicting experience claims and answers that contradict earlier responses may be more informative than one technical flag.

Assess behaviour in context. Compare completion time with the pilot and fieldwork distribution. Check for straightlining only where variation is reasonably expected, excessive item non-response and failed attention checks. A rapid but complete and internally consistent response may be credible; a slower response with contradictions may not be.

Assess open text for relevance, specificity and consistency with the rest of the survey. Grammar, polish and an AI-text score are not proof of fraud. An answer becomes concerning when text evidence aligns with other signals.

Classify signals for the study:

- **Strong:** confirmed duplicate identifier; direct contradiction in eligibility evidence; or repeated text paired with another duplicate signal.
- **Contextual:** unusual timing against the observed distribution, repeated technical metadata or a suspicious recruitment pattern.
- **Weak:** one missed attention check, terse open text or one unusual answer.

Record the combined evidence, then retain, manually review or exclude. Give borderline and high-impact cases a second review. Apply rules consistently across sources and quotas, and rerun key analyses with and without excluded cases. If conclusions change materially, report that sensitivity finding. Report the usable sample and exclusions by reason without publishing details that make controls easy to defeat.

For interpretation of written answers alongside structured data, see [how to analyse survey data qualitatively](https://blog.glasgow.works/blog/how-to-analyse-survey-data-qualitatively/).

## Use this survey fraud review worksheet

Copy this table into a spreadsheet before reviewing outcomes. Define study-specific evidence first. It is a decision aid and audit trail, not a validated fraud score or universal threshold.

| Response ID | Recruitment source | Eligibility evidence | Duplicate or identity signals | Technical signals | Timing | Consistency | Open-text quality | Reviewer notes | Decision | Second-review status |
|---|---|---|---|---|---|---|---|---|---|---|
| Hypothetical R-042 | Controlled invitation | Matches screener | Repeat-participation flag; no confirmed identifier duplicate | Same device pattern as an earlier flagged response | Faster than pilot range | Conflicting eligibility answers | Near-duplicate text used in another response | Fast completion alone requires review. Combined signals require escalation, not automatic deletion. | Manually review | Pending |
|  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |

The completed row is illustrative, not a Glasgow Research case. Replace or supplement it only with an anonymised project example supported by records, removing client, participant and platform-identifying details.

Use the worksheet with this [survey bots and fake responses detection guide](https://blog.glasgow.works/blog/survey-bots-fake-responses-ux-research/) to distinguish a concerning pattern from one weak flag.

## Turn quality checks into a repeatable protocol

Store the study rules, platform configuration, flagged cases, reviewer decisions and deviations together. Feed confirmed patterns into recruitment-source reviews and future pilots; do not assume tactics will remain stable. [Cognitive interviewing for survey pretesting](https://blog.glasgow.works/blog/cognitive-interviewing-survey-pretesting/) can reveal where genuine participants are confused before fieldwork.

Before launch, define controls and decisions. During fieldwork, monitor patterns and pause suspicious sources. After fieldwork, make a documented multi-signal decision. Start by copying the worksheet into your project folder and assigning its reviewer before recruitment opens.

## Frequently asked questions

### How can you tell if survey responses are fake?

Look for corroborating signals across duplication, eligibility, metadata, timing, consistency and open-text quality. One unusual characteristic is normally a reason to review, not proof of fraud.

### Can survey bots pass attention checks?

Yes. Automated or human-assisted submissions may pass simple checks, while genuine participants may fail them accidentally. Combine attention checks with technical and response-level evidence.

### Should duplicate IP addresses be removed?

Not automatically. Shared households, workplaces and networks can produce legitimate duplicate IPs. Check identifiers, timing, device evidence and answer similarity before deciding.

### What should you do with suspicious survey responses?

Preserve the raw data, flag the case, document all signals and review it against predeclared rules. Retain, manually review or exclude it, using a second reviewer for ambiguous cases.

### Can AI detectors identify fraudulent survey participants?

No AI-text score should be treated as proof of participant fraud. Assess whether answers are specific, relevant and consistent, then combine that assessment with non-text signals.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://blog.glasgow.works/services/).

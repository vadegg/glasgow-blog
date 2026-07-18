---
title: "How to Analyse Survey Data Qualitatively"
description: "A step-by-step practitioner guide to analysing open-ended survey responses — covering cleaning, coding, theme development, and integrating findings with"
pubDate: 2026-07-18
updatedDate: 2026-07-18
readingTime: 12
slug: "how-to-analyse-survey-data-qualitatively"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "Researcher colour-coding open-ended survey responses on a spreadsheet alongside a bar chart of closed-question results"
tags:
  - "surveys & questionnaire design"
  - "qualitative survey analysis"
  - "analysing open-ended survey responses"
  - "survey open-ends analysis"
  - "thematic analysis of survey data"
---
<!-- gr:toc -->

## On this page

- [Why Open-Ended Survey Responses Deserve a Qualitative Workflow](#why-open-ended-survey-responses-deserve-a-qualitative-workflow)
- [Step 1 — Clean and prepare your response set](#step-1-clean-and-prepare-your-response-set)
- [Step 2 — Develop a coding scheme for open-ends](#step-2-develop-a-coding-scheme-for-open-ends)
- [Step 3 — Build themes from codes](#step-3-build-themes-from-codes)
- [Step 4 — Integrate open-end themes with closed-question results](#step-4-integrate-open-end-themes-with-closed-question-results)
- [Common pitfalls and how to avoid over-claiming](#common-pitfalls-and-how-to-avoid-over-claiming)
- [Communicating qualitative survey findings to stakeholders](#communicating-qualitative-survey-findings-to-stakeholders)
- [Frequently asked questions](#frequently-asked-questions)

## Why Open-Ended Survey Responses Deserve a Qualitative Workflow

Surveys are usually built as quantitative instruments — scales, rankings, multiple-choice grids. Yet almost every survey carries at least one open-ended question, and that question tends to sit on a qualitative goldmine that teams rarely excavate properly.

Here is the simplest way to see the distinction: closed questions tell you *what* is happening across your sample; open-ends tell you *why* it is happening for individual respondents. Together, they support mixed-methods thinking — each mode answering questions the other cannot. Neither replaces the other, and open-ended survey responses are not a substitute for a dedicated qualitative study. They provide texture and direction, not depth.

The most common misuse of open-ends is feeding verbatims into a word-cloud generator and calling it insight. Word clouds count tokens; they do not interpret meaning. "Good" appearing forty times tells you nothing about what respondents mean by good, or whether the positive signal holds across every segment you care about.

There is also a representativeness trap. A single memorable quote carries rhetorical weight in a stakeholder presentation, but a single respondent is not a pattern. Over-claiming from a few vivid verbatims is one of the more consequential errors in applied research.

Both risks are manageable with a structured workflow. The [survey design decisions that shape your analysis](https://blog.glasgow.works/blog/survey-design-best-practices-ux) — question wording, placement, response-length guidance — also affect what qualitative analysis can deliver, so review those choices before you start coding.

---

## Step 1 — Clean and prepare your response set

Raw exports are rarely analysis-ready. Before you code a single response, work through these preparation steps.

**Deduplicate and remove noise.** Export the open-end column alongside a unique respondent identifier. Flag duplicate submissions and remove them. Scan for bot and gibberish responses — strings of random characters, repeated phrases, or answers that bear no relation to the question. Remove them and log how many you excluded.

**Standardise formatting.** Trim leading and trailing whitespace. Normalise punctuation inconsistencies that could fragment responses during analysis (inconsistent use of ellipses, for example). If your survey ran in multiple languages, decide at this stage whether to translate responses before coding or to code each language separately and merge themes afterwards. Both approaches have merit; pick one and document it.

**Decide on your unit of analysis.** Some respondents write a single sentence; others write three paragraphs covering distinct topics. For multi-part responses, you may want to segment at sentence level so each unit of meaning receives its own code. Record this decision explicitly.

**Set a minimum usable response threshold.** Responses under roughly five meaningful words rarely code reliably. "Fine I guess" tells you little. Flag these as marginal and exclude them from your main coding pass — though a high volume of them is itself a signal worth noting.

Everything you decide here belongs in an audit trail — a changelog tab in your spreadsheet or a header section in your codebook. This protects you from challenge and helps anyone who inherits the work understand what they are looking at.

---

## Step 2 — Develop a coding scheme for open-ends

Coding is the process of attaching meaningful labels to segments of text. Done well, it makes patterns visible. Done carelessly, it introduces silent drift — the same label meaning slightly different things depending on when you applied it.

**Choose your approach.** Deductive coding starts from a prior framework or hypothesis and applies pre-defined codes to the data. Inductive coding lets codes emerge from the responses themselves. For survey open-ends, a hybrid usually works best: scan 10–15% of responses first to get a sense of the landscape, draft an initial codebook, then apply it to the full set and refine.

**Write tight code definitions.** Each entry in your codebook should include four elements: a short label, a plain-English description of what the code captures, an inclusion rule (what qualifies), an exclusion rule (what does not), and one or two example verbatims. This structure prevents drift as you work through hundreds of responses, or as a second coder joins the project.

**Calibrate granularity.** Start with broad codes. If a single code accumulates more than roughly 25% of all responses, it is doing too much work — split it into sub-codes. Conversely, five codes that each appear twice are probably better merged.

**Choose your tooling.** A well-structured spreadsheet handles most survey-scale coding tasks adequately. Dedicated tools such as Dovetail, NVivo, or Atlas.ti offer features like inter-rater reliability scoring and hierarchical code trees, which earn their keep above a few hundred responses or when multiple analysts are working in parallel. The trade-off is setup time and licensing cost.

**Assign codes deliberately.** A single response can carry more than one code when it genuinely addresses more than one topic. Avoid over-coding: if you are assigning four codes to a two-sentence response, revisit your code definitions. These principles align with the [coding frameworks used in broader qualitative analysis](https://blog.glasgow.works/blog/thematic-analysis-qualitative-research), which are worth reviewing if this is your first time building a codebook from scratch.

---

## Step 3 — Build themes from codes

A code is a label on a unit of text. A theme is a pattern of meaning that spans multiple codes and multiple respondents. The distinction matters because themes are the actual deliverable — codes are the scaffolding.

**Cluster codes into candidate themes.** Once you have coded your full response set, pull your codes into a clustering exercise. Digital sticky-note tools work well for small codebooks; for larger sets, a pivot table showing co-occurrence of codes is more efficient. Group codes that share a central idea and give each group a working theme name.

**Test coherence.** A well-formed theme passes a simple check: every response assigned to it should be explainable by the same central idea. If you find yourself writing "except when..." often, the theme probably needs splitting.

**Name themes with intention.** Vague nouns make weak theme names. "Security" tells a stakeholder nothing actionable. "Users are uncertain whether their data is protected after account changes" is a finding. Active, insight-oriented language forces you to commit to what the data actually says.

**Handle satellite codes honestly.** Some codes will not cluster neatly. These often become an "Other" category, which is fine — but a large "Other" bucket sometimes signals that an important theme is hiding in it. Revisit unclustered codes before finalising your theme map.

**Acknowledge negative cases.** Some responses will contradict or complicate your emerging themes. Do not discard them. A theme that holds for most respondents but has clear exceptions is more accurate — and more useful — than one that looks universal but is not.

We ran into this recently on a set of open-ended responses about onboarding experience. A dominant theme pointed to confusion at a specific handover point. A small cluster of responses told the opposite story — those respondents found the same step intuitive. Investigating what distinguished the two groups produced a more precise recommendation than the majority theme alone would have done.

---

## Step 4 — Integrate open-end themes with closed-question results

This is where qualitative survey analysis earns its keep in a mixed-methods context.

**Cross-tabulate themes against segments.** Once you have theme assignments for each response, link them back to respondents' closed-question answers. Segment by satisfaction score band, NPS group, persona, or any other dimension the survey captured. Now you can ask: which segments are driving which themes?

**Be precise about what frequency means.** Code counts are indicative, not statistically representative. If 40% of low-satisfaction respondents mention a particular theme, that is a meaningful pattern worth reporting — but label it as "40% of respondents in this segment who gave an open-ended response," not "40% of all low-satisfaction customers." The distinction is not pedantic; it affects how stakeholders should act on the finding.

A useful illustrative pattern: when respondents in a low-satisfaction segment mention an onboarding confusion theme at roughly three times the rate of high-satisfaction respondents, the open-end is explaining the rating. The closed question told you satisfaction is low; the open-end tells you where to look.

**Present the full distribution before spotlighting quotes.** Showing only the quotes that support a hypothesis is cherry-picking. Stakeholders should see the complete theme frequency table before you draw their attention to a compelling verbatim.

**Surface conflicts, do not suppress them.** Occasionally a qualitative theme will sit in tension with quantitative findings — respondents rate something highly but describe pain in their open-ends. That conflict is a finding in its own right. Suppressing it in favour of a cleaner story is a disservice to the research. We see this dynamic recur in our post on [analysing user interview data for comparison](https://blog.glasgow.works/blog/how-to-analyze-user-interview-data), where mixed-signal findings appear regularly.

**A practical table format.** For each theme, record: theme name | code count | percentage of respondents who mentioned it | one representative verbatim | correlated closed-question metric. That gives stakeholders a complete picture in a compact format.

---

## Common pitfalls and how to avoid over-claiming

**Pitfall 1 — Treating frequency as proof of importance.** The most common theme is not automatically the most consequential one. A theme mentioned by 5% of respondents but linked to churn or safety concerns may outrank one mentioned by 30% that describes a minor inconvenience. Assess severity alongside frequency.

**Pitfall 2 — Presenting quotes without context.** A verbatim divorced from its question wording and respondent segment can mislead. Always anchor a quote with both: "A respondent in the low-satisfaction band, responding to 'What would you change?', said..."

**Pitfall 3 — Skipping a codebook and coding from memory.** Across a large response set, coding from memory introduces silent drift. The code you applied on day one may mean something slightly different by day three. A written codebook is not bureaucracy; it is the mechanism that keeps your analysis consistent.

**Pitfall 4 — Conflating qualitative themes with statistical significance.** Use hedged language deliberately: "the data suggests," "the pattern indicates," "responses point to." This is not timidity — it is accuracy. Qualitative survey analysis cannot establish significance, and claiming otherwise damages credibility.

**Pitfall 5 — Ignoring non-responses.** A high skip rate on an open-end question is itself a data point. It may signal that the question was unclear, too sensitive, or placed too late in a fatiguing survey. Log skip rates and note them in your analysis.

When themes are strong but puzzling — a concern that keeps surfacing but resists clean explanation — that is often a signal to follow up with depth interviews or a diary study rather than to push harder on the survey data you already have.

---

## Communicating qualitative survey findings to stakeholders

Lead with the insight, not the methodology. Stakeholders rarely need to understand how themes were constructed before they can act on them; they need to understand what the themes mean and why they matter.

A theme card format works well for presentations: theme name at the top, the number of responses supporting it, one anchoring verbatim, and a one-sentence "so what" implication. Keep each card to a single slide or section. Pair the qualitative theme with its relevant closed-question metric — this gives stakeholders a quantitative anchor alongside the interpretive insight.

Be explicit about confidence levels. "This theme emerged from 200 respondents" carries different weight than "this was noted in 12 responses." Distinguishing the two is not a weakness in your report; it is what allows stakeholders to make proportionate decisions. A finding from 12 responses might still warrant attention, but it probably warrants a follow-up study rather than an immediate product change.

Close each theme with a recommended next step scaled to the strength of the evidence. Strong, cross-segment themes support confident recommendations. Thin or contradictory themes should lead to further research, not premature action.

---

## Frequently asked questions

**How many open-ended responses do you need for qualitative analysis to be worthwhile?**

Themes tend to stabilise after 30–50 substantive responses. Below that, treat findings as exploratory and flag them accordingly. Above roughly 500 responses, consider systematic sampling — every third response, for example — or use AI-assisted first-pass coding verified by a human analyst.

**What is the difference between thematic analysis and content analysis for survey open-ends?**

Content analysis emphasises counting and categorising manifest content — it produces frequency tables. Thematic analysis goes further, interpreting latent meaning and constructing themes that explain *why* respondents say what they say. Content analysis is faster; thematic analysis yields richer insight. Many practitioners blend both: content analysis to establish frequency, thematic analysis to build the interpretive layer.

**Can I use AI or text-analysis tools to code open-ended survey responses?**

AI tools — GPT-based classifiers, platform-native tagging features — can accelerate first-pass labelling at scale. They perform best when given a human-defined codebook to work from and must be audited for drift and misclassification. Use them to reduce mechanical work, not to replace interpretive judgement. Any AI-generated codes should be reviewed by a researcher before they appear in a client-facing output.

**Should every survey include open-ended questions?**

Not automatically. Open-ends add analytical overhead and respondent burden. Include them when you genuinely need explanatory depth that closed questions cannot provide — not as a reflexive addition to every questionnaire. If you cannot articulate what decision the open-end will inform, leave it out.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How to Analyse Survey Data Qualitatively",
  "description": "A step-by-step practitioner guide to analysing open-ended survey responses — covering cleaning, coding, theme development, and integrating findings with",
  "datePublished": "2026-07-18",
  "dateModified": "2026-07-18",
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
    "@id": "https://blog.glasgow.works/blog/how-to-analyse-survey-data-qualitatively"
  },
  "keywords": "how to analyse survey data qualitatively, qualitative survey analysis, analysing open-ended survey responses, survey open-ends analysis, thematic analysis of survey data, coding open-ended questions"
}
</script>

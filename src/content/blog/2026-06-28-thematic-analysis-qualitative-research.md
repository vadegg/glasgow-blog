---
title: "Thematic Analysis in Qualitative Research: A Practitioner's Guide"
description: "Learn how to run thematic analysis as a rigorous methodology — from first read to final themes — with a step-by-step guide built for product and UX researchers."
pubDate: 2026-06-28
updatedDate: 2026-06-28
readingTime: 13
slug: "thematic-analysis-qualitative-research"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "Researcher reviewing sticky notes and coded transcripts on a laptop screen during thematic analysis"
tags:
  - "synthesis & analysis workflows"
  - "how to do thematic analysis"
  - "thematic analysis steps"
  - "thematic analysis vs content analysis"
  - "qualitative data analysis methods"
---
<!-- gr:toc -->

## On this page

- [What Is Thematic Analysis — and Why Does It Matter for Practitioners?](#what-is-thematic-analysis-and-why-does-it-matter-for-practitioners)
- [Thematic Analysis vs Content Analysis: Key Differences](#thematic-analysis-vs-content-analysis-key-differences)
- [The Six-Step Thematic Analysis Process](#the-six-step-thematic-analysis-process)
- [Thematic Coding in Practice: A Real-Project Example](#thematic-coding-in-practice-a-real-project-example)
- [Common Failure Modes and How to Avoid Them](#common-failure-modes-and-how-to-avoid-them)
- [Communicating Thematic Analysis Findings to Stakeholders](#communicating-thematic-analysis-findings-to-stakeholders)
- [Thematic Analysis Tools: Spreadsheet, Dovetail, or Dedicated Software?](#thematic-analysis-tools-spreadsheet-dovetail-or-dedicated-software)
- [Frequently Asked Questions](#frequently-asked-questions)

## What Is Thematic Analysis — and Why Does It Matter for Practitioners?

Thematic analysis is a named, systematic methodology for identifying, analysing, and reporting patterns of meaning across a qualitative dataset. The framework most widely used in applied research is the one developed by Braun and Clarke, which treats thematic analysis as a rigorous, researcher-led process — not an informal clustering exercise.

That distinction matters more than it sounds. Many teams conflate thematic analysis with [affinity mapping in qualitative research](https://blog.glasgow.works/blog/affinity-mapping-in-qualitative-research), but the two methods serve different purposes. Affinity mapping is bottom-up and team-generated: a group clusters observations on sticky notes by perceived similarity, typically as a workshop artefact. Thematic analysis is researcher-led and interpretive: one researcher (or a small team working to an explicit process) moves iteratively through data to surface meaning, not just groupings.

Credibility and replicability turn on this distinction. When a stakeholder asks how you arrived at your findings, a coded transcript with a documented decision log is defensible. A photo of a Miro board is not.

Thematic analysis suits any source of rich, text-based data: interview transcripts, open survey responses, diary study entries, usability session notes. If you have words people used to describe their experience, thematic analysis gives you a structured route to meaning.

---

## Thematic Analysis vs Content Analysis: Key Differences

Content analysis and thematic analysis often get mentioned in the same breath, but they answer different kinds of research question.

Content analysis is frequency-focused. It counts occurrences — how often a word, phrase, or category appears across a dataset. Used well, it can be partly or wholly quantitative, which makes it tractable at scale. If you have 500 open-text survey responses and want to know what proportion of respondents mentioned pricing, content analysis is the right tool.

Thematic analysis is meaning-focused. It asks what a pattern *signifies* across the dataset, regardless of how often any single element appears. A theme can be present in three out of twelve interviews and still be analytically significant if it speaks directly to your research question.

Choosing between them is a matter of fit, not preference. Content analysis suits structured data at scale where you need to report frequencies and distributions. Thematic analysis suits small-*n* studies — typically 6–15 participants — where the goal is to understand experience, motivation, or sense-making. For a wider view of the [qualitative data analysis methods](https://blog.glasgow.works/blog/how-to-analyze-user-interview-data) landscape, treat the two as complementary tools. Neither replaces the other.

---

## The Six-Step Thematic Analysis Process

The Braun and Clarke framework breaks into six steps. Each builds on the last. Skipping any one of them is the most common source of weak analysis.

### Step 1 — Familiarise yourself with the data

Read every transcript or session note in full before you code anything. Sounds obvious. In practice, under time pressure, researchers skip it. The familiarisation read is where you write short memos — a sentence or two per document — noting initial impressions, tensions, and surprises. Those memos feed step three and act as an audit trail.

### Step 2 — Generate initial codes

Work through each document and label every extract that is meaningful in relation to your research question. At this stage, keep codes close to the data. "Couldn't find the button" is a better initial code than "navigation failure." You are describing, not yet interpreting. One extract can carry multiple codes; that is expected, not a problem.

### Step 3 — Search for themes

Gather all your codes and the extracts attached to them. Group codes into candidate themes using a code-to-theme mapping document — a simple spreadsheet with columns for code, supporting extracts, and proposed theme works well. Themes at this stage are provisional. You are looking for patterns of shared meaning, not just surface similarity.

### Step 4 — Review themes

Check every candidate theme against the full dataset, not just the extracts you initially filed under it. Ask two questions: does this theme cohere internally — do all its extracts really belong together? And does it capture something genuinely distinct from other themes? Split themes that contain two distinct ideas. Merge themes whose difference is more semantic than substantive. Discard any candidate theme that lacks sufficient supporting extracts or sits too far from the research question to carry analytical weight. A theme with a single supporting quote is usually a sub-theme at best.

### Step 5 — Define and name themes

Write a one-sentence essence statement for each theme before you name it. The statement forces you to articulate what the theme actually claims. Once you have the statement, the name follows naturally — and it should read as an analytic claim, not a topic label.

The difference is significant. "Trust" is a topic. "Trust breaks at the point of handoff" is a theme. The claim form tells a reader what the data is saying; the topic form does not. A useful test: if you could imagine a theme with the *opposite* name also being valid, you have a topic, not a theme.

### Step 6 — Write up

Weave your themes into a narrative. For each theme, introduce the claim, provide selected participant quotes that illustrate it, and explain what those quotes demonstrate. Avoid quote-dumping — dropping five quotations in a row without analytical commentary. The researcher's interpretation is the substance; quotes are the evidence.

**Practical notes on tooling and scope.** Colour-coding in a spreadsheet remains one of the most transparent approaches for teams new to the process. Tag-based tools such as Dovetail or Notion offer a better audit trail for teams running research repeatedly. Keep a coding log — a running document that records why you created, merged, or discarded codes and themes. For a single focused research question with 8–15 participants, aim for 4–8 themes. Fewer than four usually signals under-analysis; more than eight usually signals that what you have are codes, not themes.

Before you begin coding, a well-structured [user research plan template](https://blog.glasgow.works/blog/user-research-plan-template) will help you articulate the research question clearly enough that your coding decisions have an anchor. It also helps to have planned [how to conduct user interviews](https://blog.glasgow.works/how-to-conduct-user-interviews) in a way that generates rich, codeable data rather than closed yes/no responses.

---

## Thematic Coding in Practice: A Real-Project Example

The example below is drawn from an anonymised engagement. Details have been generalised; nothing here identifies a specific client or project.

The source data was twelve in-depth interviews with users of a B2B SaaS onboarding flow. The research question: what shapes users' confidence — or lack of it — during the first thirty days of a new software subscription?

We coded initially in a spreadsheet. Each meaningful extract received a short, data-close code. After coding all twelve transcripts, we had 94 discrete codes.

To illustrate the progression from raw data to theme, consider this sequence:

| Extract | Initial code | Sub-theme | Theme |
|---|---|---|---|
| "I kept waiting for someone to confirm I'd done it right — there was no signal either way." | No confirmation signal | Absence of feedback | **Confidence depends on visible progress markers** |
| "The checklist disappeared after step two and I wasn't sure if I'd missed something." | Lost progress indicator | Absence of feedback | **Confidence depends on visible progress markers** |
| "My colleague told me to just ignore the setup wizard — so I did, but I wasn't confident that was okay." | Peer workaround normalised | Social validation seeking | *merged into above theme at review stage* |

At the review stage, "social validation seeking" was initially treated as a separate candidate theme. Reviewing it against the full dataset, we found the extracts beneath it were all expressions of the same underlying need — users wanted confirmation that their actions had been correct. We merged the codes into the parent theme and rewrote the essence statement to encompass both.

The resulting themes gave the product team a prioritised view of the onboarding experience that went beyond a list of friction points. Each theme mapped directly to a product decision: the absence of progress markers, for instance, pointed to a specific gap in the UI rather than a vague "user confidence problem." That specificity is what makes thematic analysis useful for roadmap input, and it matters to any B2B SaaS team doing [win-loss analysis for B2B SaaS](https://blog.glasgow.works/blog/win-loss-analysis-b2b-saas) where understanding the *meaning* behind churn signals matters as much as knowing the frequencies.

---

## Common Failure Modes and How to Avoid Them

Most problems with thematic analysis come from one of five places.

**Themes as topics.** Naming a theme "Pain points" or "Workflow" tells a reader what area the theme covers, not what the data says about it. Before naming any theme, write the essence statement. The name should be a compressed version of that statement.

**Data-led without interpretation.** A list of what participants said is not analysis. For each theme, ask: so what does this mean? The answer is the theme's analytical claim. If you cannot answer it, you have a code, not a theme.

**Premature closure.** Stopping after generating initial codes and presenting them as themes skips the most important analytical work. The review pass — checking every theme against the full dataset — is where under-supported candidates get discarded and genuine themes get strengthened. It is not optional.

**Frequency bias.** The most-mentioned code is not automatically the most important theme. Salience — how directly an idea speaks to the research question — matters more than count. A concern raised by three participants in substantive detail can be more analytically significant than a passing comment made by ten.

**Solo analysis without an audit trail.** If you cannot show how your themes emerged, your findings are difficult to defend to a sceptical stakeholder or a second researcher. Maintain a coding log from the start. Where possible, have a second coder work through a subset of extracts independently and compare results. Full inter-rater reliability testing is rarely practical in applied research, but even a partial second pass strengthens credibility.

For a broader view of where thematic analysis sits within the research toolkit, see the [UX research methods overview](https://blog.glasgow.works/blog/ux-research-methods).

---

## Communicating Thematic Analysis Findings to Stakeholders

The analysis is only useful if the findings land. A few principles separate a readout that drives decisions from one that gets noted and filed.

Lead with theme names as claims, not methodology descriptions. Your first slide should not explain what thematic analysis is. It should state your first theme as a headline finding — a claim backed by evidence.

Structure each section of the readout as: **theme → evidence → implication**. State the theme, show one or two quotes that illustrate it, then explain what it means for the product or business question that prompted the research. This keeps findings connected to decisions rather than floating as interesting observations.

On quotes: use verbatim quotes when the participant's own words carry emotional weight or specificity that a paraphrase would dilute. Paraphrase when you need to compress several similar views into a single illustration — noting that multiple participants expressed the same sentiment. Never present a paraphrase as a direct quote.

Mapping themes to decisions is the clearest way to maintain credibility. For each theme in your readout, name the product question or opportunity it speaks to. That connection is what [turning insights into product impact](/blog/insight-to-impact) looks like in practice — and it is what separates a research report that sits unread from one that shapes the next sprint.

---

## Thematic Analysis Tools: Spreadsheet, Dovetail, or Dedicated Software?

The right tool depends on team size, research frequency, and budget — not on sophistication for its own sake.

A **spreadsheet** (Google Sheets or Excel) is low-cost, transparent, and easy to share. For studies under fifteen participants, it remains a perfectly rigorous option. The main limitation is that manual tagging is slow and searching across codes requires discipline.

**Dovetail, Notion, or Miro** offer tag-based coding with better collaboration and audit trails. They suit teams running research repeatedly across multiple projects. Searching across tagged extracts and linking findings back to source transcripts is a genuine advantage over a flat spreadsheet.

**Dedicated qualitative tools** such as NVivo or ATLAS.ti are built for large, complex datasets — typically academic or policy research with dozens of participants and multiple coders. For most product research teams, they are more infrastructure than the work requires.

**AI-assisted coding** — whether via purpose-built features in Dovetail or through a carefully prompted language model — can accelerate the first pass through a transcript. Treat AI-generated codes as a starting point, not a conclusion. Meaning-loss is the primary risk: a model will surface surface-level patterns before interpretive ones, and the steps that require genuine judgement — reviewing themes, writing essence statements, making analytical claims — remain the researcher's responsibility.

---

## Frequently Asked Questions

**How many participants do you need for thematic analysis?**

There is no universal minimum, but most practitioner studies reach thematic saturation with 6–15 participants for a single, focused research question. Fewer can work for narrow topics where the user population is relatively homogeneous. More are needed when studying diverse populations or multiple distinct user segments, where themes may differ significantly across groups.

**Is thematic analysis inductive or deductive?**

It can be either. Inductive analysis lets themes emerge from the data without a pre-set framework — the preferred approach for exploratory research where you do not yet know what you will find. Deductive analysis applies an existing framework to the data, which is useful when testing whether a known model holds in a new context. Most product and UX research is inductive: you are discovering, not confirming.

**How is thematic analysis different from affinity mapping?**

Affinity mapping is a collaborative, team-based exercise that organises observations into groups by perceived similarity. It is faster and well-suited to early-stage synthesis workshops. Thematic analysis is a structured researcher process involving iterative coding, a review pass against the full dataset, and explicit interpretive claims. The outputs can look similar — groups of related ideas with names — but the rigour, defensibility, and depth of interpretation differ considerably.

**Can thematic analysis be used on survey open-text responses?**

Yes, provided the responses are rich enough to code meaningfully. Very short responses — one or two words — carry too little context to support genuine interpretation and are better handled with content analysis or simple frequency counts. Responses of three or more sentences, where participants explain their reasoning or describe their experience, are well-suited to thematic analysis using the same six-step process described above.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Thematic Analysis in Qualitative Research: A Practitioner's Guide",
  "description": "Learn how to run thematic analysis as a rigorous methodology — from first read to final themes — with a step-by-step guide built for product and UX researchers.",
  "datePublished": "2026-06-28",
  "dateModified": "2026-06-28",
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
    "@id": "https://blog.glasgow.works/blog/thematic-analysis-qualitative-research"
  },
  "keywords": "thematic analysis qualitative research, how to do thematic analysis, thematic analysis steps, thematic analysis vs content analysis, qualitative data analysis methods, thematic coding user research"
}
</script>

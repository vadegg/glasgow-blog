---
title: "Thematic Analysis in UX Research: A Coding Guide"
description: "Learn thematic analysis in UX research with a step-by-step guide to coding interview data into defensible themes—plus a worked example and codebook. Read on."
pubDate: 2026-09-02
updatedDate: 2026-09-02
readingTime: 12
slug: "thematic-analysis-ux-research"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "UX researcher coding interview transcripts into colour-coded themes on a whiteboard"
tags:
  - "synthesis & analysis workflows"
  - "how to code qualitative interview data"
  - "inductive vs deductive coding"
  - "thematic analysis vs affinity mapping"
  - "Braun and Clarke six phases"
---
<!-- gr:toc -->

## On this page

- [What thematic analysis is (and why it's the backbone)](#what-thematic-analysis-is-and-why-its-the-backbone)
- [Thematic analysis vs affinity mapping (and empathy mapping)](#thematic-analysis-vs-affinity-mapping-and-empathy-mapping)
- [Inductive vs deductive coding: pick your lens](#inductive-vs-deductive-coding-pick-your-lens)
- [Braun and Clarke's six phases, applied to interviews](#braun-and-clarkes-six-phases-applied-to-interviews)
- [Worked example: coding an interview excerpt](#worked-example-coding-an-interview-excerpt)
- [Building and maintaining a codebook](#building-and-maintaining-a-codebook)
- [Common mistakes that undermine rigour](#common-mistakes-that-undermine-rigour)
- [Where AI-assisted coding fits (and its limits)](#where-ai-assisted-coding-fits-and-its-limits)
- [From themes to impact](#from-themes-to-impact)
- [Frequently asked questions](#frequently-asked-questions)

## What thematic analysis is (and why it's the backbone)

Twelve interview transcripts. A wall of sticky notes. A stakeholder asking why the team should trust your top three findings. Thematic analysis in UX research is how you answer that.

It's a systematic method for finding, coding, and interpreting patterns of meaning across qualitative data: interview transcripts, open-text survey answers, field notes, support logs. Coding means attaching a short label to a segment of data that captures what it is about or what it means. Themes are the larger patterns you build by grouping related codes and arguing what they add up to.

Most visual synthesis techniques sit on top of this work. Affinity maps, journey maps, and personas are presentation layers; codes and themes are the evidence beneath them. Get the method right and your themes become reproducible — you can trace any claim back to the raw quotes that produced it.

This guide covers coding interview transcripts. It does not cover survey statistics or usability metrics, which need different methods. For the full pipeline from recruitment to reporting, see [analyse user interview data end to end](https://blog.glasgow.works/blog/how-to-analyze-user-interview-data).

## Thematic analysis vs affinity mapping (and empathy mapping)

Affinity mapping and thematic analysis answer the same question — what patterns are in this data? — with different levels of rigour.

Affinity mapping clusters observations by intuition and speed. A group reads notes aloud, groups the ones that feel related, and names the clusters. It's quick, collaborative, and good for building shared understanding in a room. What it rarely leaves is an audit trail: you cannot always reconstruct why a note landed in one cluster rather than another.

Thematic analysis works differently. It codes each segment against a defined codebook, tracks which participant said what, and documents the decisions behind each grouping. Slower, and usually done by one or two researchers rather than a whole room.

Treat the two as complementary. Affinity and empathy mapping work best as fast, collaborative synthesis layers built on coded themes rather than fresh memory. A decision cue: reach for affinity mapping in a workshop sprint where alignment matters more than a paper trail; reach for thematic analysis when findings must be auditable or the stakes are high — a regulatory decision, a roadmap bet, a contested result.

Empathy maps improve the same way. Populate the says, thinks, does, and feels quadrants from coded extracts rather than recall, and the map stops being a guess. See [affinity mapping, step by step](https://blog.glasgow.works/blog/affinity-mapping-in-qualitative-research) and [build empathy maps from interview data](https://blog.glasgow.works/blog/empathy-mapping-ux-research).

## Inductive vs deductive coding: pick your lens

Before you code, decide where your codes come from.

Inductive coding is data-driven. You start with few or no preset codes and let them emerge from the transcripts. It suits exploratory discovery, where you do not yet know what matters and imposing a structure would hide it.

Deductive coding is framework-driven. You begin with codes drawn from a model, a hypothesis, or your research questions, and apply them to the data. This is the tool for validation work: testing a jobs-to-be-done model (what a user is trying to accomplish), checking whether a known problem appears, or comparing segments against fixed dimensions.

Most UX teams use a hybrid. Build a starter codebook from the research questions, then add emergent codes as the data throws up things you did not anticipate. The starter set keeps the analysis anchored to the decision you need to inform; the emergent codes catch the surprises.

The risk with a rigid deductive frame is that you only find what you went looking for. If the study exists to discover the unexpected, keep the frame loose.

## Braun and Clarke's six phases, applied to interviews

Braun and Clarke's six-phase model is the most widely cited framework for thematic analysis, and it maps cleanly onto interview work. Here is each phase with a concrete action for interview data.

**1. Familiarisation.** Read every transcript at least once before coding anything. Re-listen to sections where the tone shifts — hesitation, frustration, sarcasm — and note it in the margin. You are building a feel for the whole dataset, not codes yet.

**2. Generating initial codes.** This is where you code qualitative interview data in earnest. Work through each transcript segment by segment, sometimes line by line, and label anything relevant to your research questions. Keep codes short and specific: "gives up after second error", not "frustration". In our projects, a first pass over roughly eight interviews tends to produce 40 to 80 codes.

**3. Searching for themes.** Collapse related codes into candidate themes. Lay the codes out, group the ones that speak to the same underlying idea, and give each group a working name. Some codes will sit outside any theme; leave them for now.

**4. Reviewing themes.** Check each candidate theme twice: against its own coded extracts, then against the full dataset. Does every extract in the theme belong? Does the theme still hold when you re-read transcripts you coded early? Split themes that carry two ideas; merge themes that say the same thing.

**5. Defining and naming themes.** Write a two-sentence boundary statement for each theme: what it includes, what it excludes, and what argument it makes. If you cannot describe the theme without listing its codes, it is not a theme yet.

**6. Writing up.** Build the narrative. Each theme gets a claim, two or three supporting quotes, a participant count, and a link to the research question it answers.

Codes are ingredients; themes are the recipe. A theme is an interpretive argument about the data, not a topic bucket. "Onboarding" is a topic. "First-time admins abandon onboarding when setup requires data they do not have to hand" is a theme.

The process loops rather than runs in a line. Expect to move between phases three, four, and five several times, refining names until each theme has a clear boundary. For the general qualitative-research framing, see [our practitioner's guide to thematic analysis](https://blog.glasgow.works/blog/thematic-analysis-qualitative-research).

## Worked example: coding an interview excerpt

On a journey-mapping engagement for a consumer fintech product, we coded UX interviews spanning onboarding, top-ups, and account access. The excerpt below is a composite, rewritten to remove any identifying detail — but it reflects the kind of account-access friction we coded, and it shows how low-level codes roll up into a theme.

**Raw transcript**

> "I moved money in, and the next day I couldn't get back in. The code they texted didn't work the first two times, then it said my session had expired and I had to start again. By the time I was in, I honestly wanted to pull my money out. If logging in is this hard, what happens when something actually goes wrong?"

**First-cycle codes**

- `2fa code fails` — texted two-factor authentication code rejected on the first attempts
- `session expires mid-task` — login session times out before the task is complete
- `reset friction` — recovery makes the user repeat steps already done
- `trust drop after friction` — participant questions the safety of their funds after an access problem

**Candidate theme**

The first three codes describe mechanics. The fourth connects them to a consequence. Grouped, they formed a candidate theme: *login friction erodes trust in the product's ability to hold money safely.*

**Sample codebook extract**

| Code | Definition | Example quote | Participants |
|---|---|---|---|
| `2fa code fails` | Verification code rejected or delayed at sign-in | "The code they texted didn't work the first two times" | 5 of 9 |
| `session expires mid-task` | Session times out before the user finishes | "It said my session had expired and I had to start again" | 4 of 9 |
| `reset friction` | Recovery repeats steps the user already completed | "I had to start again" | 4 of 9 |
| `trust drop after friction` | User doubts product safety after an access problem | "I wanted to pull my money out" | 5 of 9 |

When a product manager asked how solid the theme was, we traced it to five of nine participants in that segment, showed the quotes sitting behind each code, and pointed to where the same pattern surfaced elsewhere in the journey. The theme held. The issue moved up the backlog.

## Building and maintaining a codebook

Draft a rough codebook once you have coded three to five transcripts. Any earlier and it is guesswork; any later and you have already coded inconsistently.

Each entry needs four things: the code name, a one-line definition, inclusion and exclusion rules, and an anchor quote that shows a clear example. The exclusion rule matters most — it is what stops two coders using the same label for different things.

Keep coding consistent across sessions and across teammates. Schedule a merge pass every few transcripts to reconcile overlapping or duplicate codes: "gives up after error" and "abandons on failure" are one code, not two.

Track code frequency and participant spread in the codebook. A code that appears fifteen times in one transcript and nowhere else is a strong quote, not a pattern.

Version the codebook. Save a dated copy at each merge pass so the analysis trail stays auditable and you can explain how a code evolved.

## Common mistakes that undermine rigour

**Coding without interpreting.** You can finish with three hundred tagged extracts and no argument. Tagging is not analysis. If phase five produces theme names that are just category labels, you stopped too early.

**Mistaking a vivid quote for a pattern.** A quotable line from one articulate participant is not a finding. The quiet, repeated issue — mentioned flatly by six people — usually matters more. Check participant spread before you promote anything to a theme.

**Hiding your stance to look objective.** Over-flattening the data to seem neutral does not remove your influence; it just hides it. Declare your assumptions and your framing at the start of the write-up so readers can weigh them.

**Themes that are really topics.** "Navigation", "pricing", and "onboarding" are topics. "Users cannot tell which plan they are on" is a finding. If a theme name would work as a menu item, rewrite it as a sentence that makes a claim.

## Where AI-assisted coding fits (and its limits)

AI tools can speed up the first pass. They suggest code labels, apply an existing codebook across a large set of transcripts, and cluster similar extracts for review. On a study with forty transcripts, that saves real time.

The limits are consistent. Models miss nuance — sarcasm, understatement, the thing a participant implies but does not say. They invent themes that sound plausible and are not in the data. And they cannot own interpretive judgement or defend a finding to a sceptical stakeholder.

Use a human-in-the-loop workflow, where the AI drafts and a researcher decides. Let it propose codes and clusters, then check every code against the transcript, reconcile the codebook by hand, and settle which themes stand. Run AI-suggested themes through a validation routine before they reach anyone who will act on them: see [how to validate AI-generated research insights](https://blog.glasgow.works/blog/validate-ai-generated-research-insights).

## From themes to impact

Defined themes are not the deliverable. The deliverable is an interpretive narrative that ties each theme to a research question and a product decision.

Prioritise themes on three axes: how often the pattern appears, how severe its consequence, and how relevant it is to the current strategy. The loudest theme is not automatically the most important one.

Package each theme with its evidence — supporting quotes, participant counts, the codes underneath it — so the finding survives scrutiny in the room and keeps its meaning after you leave it.

Your next step: take your defined themes and run them through the wider [turn insight into impact](/blog/insight-to-impact) workflow, so coding effort becomes a decision rather than a slide.

## Frequently asked questions

### What's the difference between a code and a theme?

A code is a short label attached to a segment of data — a phrase, a sentence, an exchange. A theme combines related codes into a broader pattern and makes an interpretive claim about it. Codes are the ingredients; the theme is the recipe. You can have dozens of codes and a handful of themes.

### Should I use inductive or deductive coding?

Use inductive coding for exploratory discovery, where you want patterns to emerge and do not yet know what matters. Use deductive coding when you are validating a known framework or hypothesis and need to check the data against fixed dimensions. Most UX teams blend the two: a hybrid codebook seeded from the research questions, with room for emergent codes.

### How many interviews do I need for thematic analysis?

There is no fixed number. Look for thematic saturation — the point where new interviews stop producing new codes. For focused discovery within one segment, that often lands around 6 to 12 interviews. Broad or comparative studies with several segments need more, usually 6 to 10 per segment.

### Is thematic analysis the same as affinity mapping?

No. Affinity mapping clusters observations quickly and collaboratively by intuition, usually in a workshop, and rarely leaves an audit trail. Thematic analysis codes data systematically against a documented codebook and tracks every decision. They complement each other: affinity mapping for speed and alignment, thematic analysis for defensible, high-stakes findings.

### Can I use AI to do thematic analysis?

You can use AI to assist it, not to do it for you. AI is useful for first-pass coding, applying an existing codebook at scale, and clustering extracts. It misses nuance and invents themes that are not in the data, and it cannot defend a finding. Keep a researcher in the loop to validate codes against transcripts and decide which themes hold.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Thematic Analysis in UX Research: A Coding Guide",
  "description": "Learn thematic analysis in UX research with a step-by-step guide to coding interview data into defensible themes—plus a worked example and codebook. Read on.",
  "datePublished": "2026-09-02",
  "dateModified": "2026-09-02",
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
    "@id": "https://blog.glasgow.works/blog/thematic-analysis-ux-research"
  },
  "keywords": "thematic analysis in UX research, how to code qualitative interview data, inductive vs deductive coding, thematic analysis vs affinity mapping, Braun and Clarke six phases, qualitative coding for UX research"
}
</script>

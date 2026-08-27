---
title: "Empathy Mapping in UX Research: From Interview Data"
description: "Learn how to run an empathy map from real interview data: the quadrants, a step-by-step workshop, and how to turn the map into a product decision, not"
pubDate: 2026-08-27
updatedDate: 2026-08-27
readingTime: 10
slug: "empathy-mapping-ux-research"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "Empathy map canvas with Says, Thinks, Feels and Does quadrants filled with interview quote sticky notes"
tags:
  - "UX Research Methods > synthesis & mapping methods"
  - "how to create an empathy map"
  - "empathy map template"
  - "empathy mapping workshop"
  - "empathy map vs persona"
---
<!-- gr:toc -->

## On this page

- [What empathy mapping is (and what it isn't)](#what-empathy-mapping-is-and-what-it-isnt)
- [Empathy map vs persona: which one, when](#empathy-map-vs-persona-which-one-when)
- [Start with real interview evidence, not sticky notes](#start-with-real-interview-evidence-not-sticky-notes)
- [How to create an empathy map from interview data (step by step)](#how-to-create-an-empathy-map-from-interview-data-step-by-step)
- [A worked example: turning one interview into a map that changed a decision](#a-worked-example-turning-one-interview-into-a-map-that-changed-a-decision)
- [Running an empathy mapping workshop](#running-an-empathy-mapping-workshop)
- [One-user vs aggregated (segment) empathy maps](#one-user-vs-aggregated-segment-empathy-maps)
- [From map to decision: what to do next](#from-map-to-decision-what-to-do-next)
- [Common empathy mapping mistakes to avoid](#common-empathy-mapping-mistakes-to-avoid)
- [Frequently asked questions](#frequently-asked-questions)

You have just run a round of interviews. The transcripts are rich, everyone on the team remembers a different headline, and the next planning meeting is in two days. Empathy mapping in UX research is one of the quickest ways to get a team reasoning from the same evidence — as long as the map is built from what participants actually said.

## What empathy mapping is (and what it isn't)

An empathy map is a synthesis tool. It organises what a user says, thinks, feels and does about a situation into one shared visual, so a team works from the same picture instead of competing memories.

The classic template has four quadrants: **Says** (direct quotes), **Thinks** (beliefs the user holds but may not voice), **Feels** (emotional state) and **Does** (observable actions). The updated layout from the Nielsen Norman Group puts the user and their goal in the centre of the canvas, keeps the four quadrants around it, and adds **Pains** and **Gains** along the edges to capture obstacles and desired outcomes.

The map will not generate insight on its own, though. It only summarises evidence you already hold, so its value comes entirely from that input.

One claim underpins this whole article: a map built from real interview data drives a decision; a map built from guesses is decoration.

## Empathy map vs persona: which one, when

An empathy map and a persona answer different questions. The map captures how one user experiences one situation, right now. A persona describes who a user segment is over time — their context, goals and constraints as a durable profile.

That difference drives the practical choice. You can build an empathy map from a single interview; it is meant to hold the nuance of one person's account. A persona needs several users before it means anything, because its job is to reflect traits a group shares.

So treat the map as an early synthesis step, not a competing artefact. Once you have several maps for users who behave similarly, the patterns across them can seed a persona. Those same patterns can feed a journey map or a piece of [B2B customer journey mapping research](https://blog.glasgow.works/blog/b2b-customer-journey-mapping-research).

The quick rule: reach for an empathy map when you need to align a team fast on fresh interview findings. Reach for a persona when you need a stable reference that outlives one study.

## Start with real interview evidence, not sticky notes

What separates a useful map from a misleading one is a sourcing rule: every note on the canvas must trace back to a specific quote, observation or recording. If a card cannot be linked to something a participant actually said or did, it does not go on the board.

Do the prep before you open the canvas. Clean your transcripts, mark the timestamps or line numbers for strong verbatim quotes, and run a coding pass so recurring topics are already tagged. Our guide to [how to analyze user interview data](https://blog.glasgow.works/blog/how-to-analyze-user-interview-data) covers that groundwork in detail.

Keep two categories separate. **Does** is observed behaviour — what you watched happen. **Thinks** and **Feels** are inferences you draw from tone, hesitation or word choice. Both belong on the map, but label the inferences so they stay visible as things to test, not facts.

[AI-moderated interviews](https://blog.glasgow.works/blog/ai-moderated-interviews-when-how-to-run) and automated transcript summaries can speed up preparation, but they introduce paraphrase and error. Check any AI-generated summary against the source recording before a card derived from it reaches the map.

## How to create an empathy map from interview data (step by step)

Five steps. Most of the effort sits in preparation and evidence-checking, not the drawing.

**Step 1: Pick the scope.** Choose one user, or one segment, for one goal in one context. "A first-time admin setting up the platform" is a workable scope. "Our users" is not. A tight scope keeps the map readable and the conclusions specific.

**Step 2: Pull the raw material.** Go through the transcript and lift verbatim quotes and observed behaviours into a holding area — a column beside the canvas or a separate frame. Keep the source reference attached to every item: participant ID and timestamp or line number.

**Step 3: Sort into the quadrants.** Place each item in Says, Thinks, Feels or Does. When something could sit in two quadrants, that is usually a signal worth a short note. Keep the source reference on the card as it moves.

**Step 4: Cluster and surface.** Group related notes. From the clusters, read out the user's Goals, Pains and Gains — these are conclusions drawn from what is on the board, not fresh assertions.

**Step 5: Mark what is missing.** Flag contradictions between cards, and thin spots where you have one weak quote and nothing else. Write these up as open questions for the next round of research.

Run [affinity mapping in qualitative research](https://blog.glasgow.works/blog/affinity-mapping-in-qualitative-research) on your codes first and step four gets much faster and less subjective. The patterns are already visible, so the map records them rather than arguing them out live.

## A worked example: turning one interview into a map that changed a decision

In an onboarding study for a B2B fintech platform, we mapped a single interview with a finance lead who had just moved her team onto the product.

Three cards did most of the work:

- **Says:** "I still don't know why that first transfer failed. There was no message — it just wasn't there in the morning." Sourced to a timestamp.
- **Does:** She exported the transaction log to a spreadsheet every morning and re-checked the totals by hand. Observed on the call.
- **Feels:** Visibly tense when describing the days before a client reporting deadline. Flagged as inference.

Her stated goal was blunt: "get my team off spreadsheets for good." The Does column showed the opposite — a daily manual reconciliation she had built because the product gave her no visible transaction status and no reason when a payment was rejected.

The map made that contradiction hard to miss. The blocker was not effort; it was trust. The team had a backlog item to simplify onboarding by hiding advanced settings. They paused it, prioritised transaction-status visibility and clear error messaging instead, and booked three more interviews to check the pattern held. Our work on [UX research for B2B SaaS](https://blog.glasgow.works/blog/ux-research-b2b-saas) goes deeper on that kind of onboarding signal.

## Running an empathy mapping workshop

Keep the group small and cross-functional: a designer, a product manager, an engineer, and whoever ran the interviews. That last person is essential — their job is to keep the evidence honest and answer "where did we hear this?" on the spot.

Timebox it, and start silent. Give everyone the same transcript extracts or quote bank and have them sort cards individually for the first 15 to 20 minutes. Silent sorting stops the loudest voice from setting the map. Then cluster together as a group.

Hold two facilitation guardrails. First, challenge every note: "where did we hear this?" If there is no source, the card moves to a parking area, not the canvas. Second, capture the output as two lists — decisions made and open questions raised — not just a filled board.

Remote or in person, the setup is the same. Use FigJam or Miro with a shared quote bank pinned beside the canvas so sources are one click away. Export the final map, but treat the decisions and questions as the real deliverable.

## One-user vs aggregated (segment) empathy maps

A one-user map preserves nuance. Built straight after a deep interview, it keeps that person's specific language, contradictions and context intact. Start here.

An aggregated map combines several individual maps for users who behave in similar ways. Its purpose is to align a wider team, or to seed a persona, by showing what holds across people.

The risk is blending users who are not alike. Merge a power user and a reluctant first-timer into one map and you average away the signal that made each interview useful. Only aggregate once you can see a shared pattern of behaviour across the individual maps — usually after four or five interviews in the same segment.

## From map to decision: what to do next

The map is an input to a decision, so make the decision.

Turn the Pains and Gains into a short, prioritised list of opportunities or hypotheses. Each one should name the evidence behind it and what you would build or test in response: "Users cannot tell why a payment failed → prototype an inline status and reason message → test with five users in the same segment."

Feed the map forward. Its clusters and open questions belong in a journey map or [service blueprint UX research](https://blog.glasgow.works/blog/service-blueprint-ux-research), not a folder no one reopens.

Set a review trigger. When new research lands, revisit the map, invalidate notes the evidence now contradicts, and add what is new. A map is only current for as long as its evidence is.

If any part of the synthesis was AI-assisted, hold it to the same bar: [validate AI-generated research insights](https://blog.glasgow.works/blog/validate-ai-generated-research-insights) against the raw data before they inform a roadmap call. For other methods that pair well with mapping, see [more UX research methods](/blog/ux-research-methods).

## Common empathy mapping mistakes to avoid

- **Inventing cards with no source.** A board of plausible-sounding notes that no one actually said is the fastest route to a confidently wrong map.
- **Treating the map as the deliverable.** The map is spent once it has produced a decision and a set of questions. Framing it and moving on wastes the interview.
- **Confusing Thinks and Feels with Does.** Cognition and emotion are inferred; behaviour is observed. Skip the Does column and you lose your only check on the rest.
- **Mapping an average user.** A composite that matches no real participant gives the team a target that does not exist. Map real people, then aggregate carefully.

## Frequently asked questions

### What are the four quadrants of an empathy map?

Says (direct quotes), Thinks (unspoken beliefs), Feels (emotional state) and Does (observed actions). The updated layout keeps these four and adds the user's goal in the centre, with Pains and Gains often placed along the edges.

### Can you make an empathy map from a single interview?

Yes. A one-user map is a valid output and holds more nuance than an aggregated one. Combine several maps only when the participants share a clear pattern of behaviour, usually after four or five interviews in one segment.

### Empathy map vs persona — do I need both?

They do different jobs. The empathy map synthesises fresh evidence about one situation; the persona is a durable profile of a segment. A set of empathy maps can feed a persona, so most teams end up with both over time.

### How long does an empathy mapping workshop take?

Around 60 to 90 minutes for one map, assuming quotes are prepared in advance. Most of that time goes to silent sorting and checking sources, not drawing the canvas.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Empathy Mapping in UX Research: From Interview Data",
  "description": "Learn how to run an empathy map from real interview data: the quadrants, a step-by-step workshop, and how to turn the map into a product decision, not",
  "datePublished": "2026-08-27",
  "dateModified": "2026-08-27",
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
    "@id": "https://blog.glasgow.works/blog/empathy-mapping-ux-research"
  },
  "keywords": "empathy mapping in UX research, how to create an empathy map, empathy map template, empathy mapping workshop, empathy map vs persona"
}
</script>

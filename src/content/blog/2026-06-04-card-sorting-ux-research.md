---
title: "Card Sorting in UX Research: How to Run It"
description: "Learn how to run open and closed card sorting studies, analyse the output, and decide when to use card sorting vs tree testing — a practical guide for UX"
pubDate: 2026-06-04
slug: "card-sorting-ux-research"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "A researcher arranging labelled cards on a table during an in-person card sorting session"
tags:
  - "card sorting & tree testing"
  - "open card sorting vs closed card sorting"
  - "card sorting methodology"
  - "tree testing vs card sorting"
  - "information architecture research"
---
## What Is Card Sorting and Why Does It Matter?

If your navigation keeps confusing users, the problem is rarely the visual design — it is usually the underlying structure. Card sorting is the [UX research methods](/blog/ux-research-methods) technique that surfaces how users expect information to be organised, before you commit that structure to code.

In a card sorting study, each participant receives a set of labelled cards — one concept or content item per card — and groups them in whatever way feels logical to them. There are no right answers. The point is to reveal mental models: the internal frameworks users apply when they try to find or categorise information.

The primary output is evidence for information architecture (IA) decisions, not aesthetic or preference data. Card sorting will not tell you whether users like your visual design. It will tell you whether your navigation categories match the way users think.

Card sorting is most valuable in three situations: designing navigation from scratch, restructuring an existing site or application, and validating a proposed taxonomy before development begins. UX researchers, product teams, and content strategists all use it — often in collaboration — because IA decisions cut across all three disciplines.

---

## Open vs Closed Card Sorting: Which Type Should You Run?

The choice between open and closed card sorting is a choice between generating ideas and evaluating them. Getting this wrong adds cost; getting it right makes the downstream design work considerably easier.

**Open card sorting** gives participants blank labels so they can name their own categories. You provide the cards; participants decide both the groupings and what to call them. This is the format to use in the discovery phase of a project. It surfaces natural language — the words real users would type into a search box or expect to see in a menu — and reveals unexpected groupings that designers rarely anticipate.

**Closed card sorting** provides pre-defined category names. Participants assign each card to one of those categories. Use this format when you already have a proposed IA and want to test whether it matches user expectations. It is evaluative, not generative.

**Hybrid card sorting** combines both: participants sort into given categories but may create new ones if nothing fits. This format suits situations where you want validation with a safety net — you are fairly confident in your categories but want to catch structural gaps.

A simple decision rule:

| Phase | Format |
|---|---|
| Early discovery — no IA yet | Open |
| Validating a proposed structure | Closed |
| Confident draft IA with uncertainty about gaps | Hybrid |

One common mistake deserves a specific warning: running a closed sort before you have tested your category labels with real users. If the labels are unfamiliar — internal jargon, vague terms, or inherited from an old system — participants cannot sort accurately, and the agreement data becomes unreliable.

On sample size, open card sorting typically requires 15–30 participants to surface the main mental-model patterns. Closed card sorting needs 30–50 participants to produce agreement rates that are statistically meaningful. Unmoderated remote tools make hitting these numbers cost-effective without a large fieldwork budget.

---

## How to Plan and Set Up a Card Sorting Study

Good card sorting data depends almost entirely on preparation. Rushing setup is the most common reason studies produce ambiguous results.

**Step 1 — Define the scope.** Choose between 30 and 100 content items. Fewer than 30 yields shallow patterns; more than 80 causes fatigue that degrades data quality. If your system contains hundreds of items, sample strategically — prioritise the items users encounter most frequently and those where you have the most uncertainty about placement.

**Step 2 — Write card labels.** Use the language of your existing content, not internal shorthand. If you are designing a staff-facing system, jargon may be appropriate. For public-facing systems, use the vocabulary users would recognise. Keep each label short: five words or fewer where possible.

**Step 3 — Choose moderated or unmoderated.** Moderated sessions allow a researcher to ask "tell me why you put those together," which adds qualitative depth. Unmoderated sessions scale more easily and reduce facilitator scheduling constraints. For advice on the broader trade-offs, see our post on [guerrilla usability testing](https://blog.glasgow.works/guerrilla-usability-testing-guide).

**Step 4 — Select a tool.** OptimalSort, Maze, and Useberry all support remote unmoderated card sorting with built-in analysis outputs. Physical cards on a table work well for in-person moderated sessions, particularly when participants are less comfortable with screen-based tasks.

**Step 5 — Recruit representative participants.** The people sorting your cards should be people who would actually navigate the system — not subject-matter experts, internal stakeholders, or colleagues. Proximity does not equal representativeness. See our guide on [how to recruit participants for user research](https://blog.glasgow.works/blog/how-to-recruit-participants-for-user-research) for a practical process.

**Step 6 — Write a neutral task prompt.** Tell participants the context ("imagine you are looking for information about X") without signalling your existing categories. Any priming toward current navigation labels will contaminate the output.

---

## Running the Study: Moderated and Unmoderated Sessions

**Moderated session flow.** Open with a brief that explains the task without referencing your existing IA. Allow participants to sort silently before discussing their choices — talking while sorting often causes people to second-guess natural instincts. Once sorting is complete, ask participants to name each group in their own words, then probe with open questions. The most productive question in a card sorting debrief is "tell me why you put those together." Avoid "is this right?", which invites participants to measure themselves against an imagined correct answer.

For guidance on general interview technique during moderated sessions, our post on [conducting user interviews](https://blog.glasgow.works/how-to-conduct-user-interviews) covers probing and listening approaches that transfer directly.

**Unmoderated session flow.** Written instructions carry all the weight here. They must be clear enough that no facilitator is needed, free of priming language, and explicit about the post-sort task: asking participants to name each group they have created. Without that step, you lose the vocabulary data that makes open card sorting most valuable.

Pilot test with two or three colleagues before you launch either format. Ambiguous card labels are almost impossible to spot in isolation — they only become obvious when someone tries to sort them. Catch them before they affect real participants.

Session length runs from 20 to 45 minutes depending on card volume. For unmoderated studies, be aware of the abandonment risk: participants who encounter too many cards or unclear instructions will drop out, and partial data skews your similarity matrix.

---

## Analysing Card Sorting Data: From Raw Output to IA Decisions

Raw card sorting data is a matrix of placements. The work of analysis is turning that matrix into navigational decisions.

**Similarity matrix.** Most tools generate this automatically. It shows, for every pair of cards, the percentage of participants who grouped them together. A high co-occurrence percentage — 70% or above is a common working threshold — signals a strong mental association. A low percentage signals ambiguity or genuine independence between items.

**Dendrograms.** A dendrogram visualises card clusters by co-occurrence frequency. Cards that were grouped together most consistently appear closest on the diagram. The key skill is reading the cut-off threshold: set it too high and you see only the most obvious clusters; set it too low and you over-fragment the structure. There is no universal correct threshold — apply judgement informed by your knowledge of the content domain.

**Standardisation grid (closed sorts).** This maps each participant's card placements against the proposed categories, producing an agreement rate per card per category. Cards with low agreement across participants are either genuinely ambiguous in meaning or placed in a category that does not match users' expectations.

**Qualitative layer.** Do not stop at the quantitative output. Review every category name that participants generated during open sorts. The vocabulary is often as valuable as the groupings: it tells you the words to use in navigation labels, which is distinct from knowing which items belong together.

**Cards that split across categories** deserve specific attention. When a card is consistently placed in two different categories by different participants, it usually signals one of two things: the content item genuinely serves two purposes, or the card label is ambiguous. Document these as edge-case risks rather than resolving them arbitrarily.

**Translating output to IA.** Propose navigation categories grounded in majority groupings. Where minority groupings exist, document them and consider whether they reveal a secondary user need worth addressing with cross-linking or search metadata.

[Affinity mapping in qualitative research](https://blog.glasgow.works/blog/affinity-mapping-in-qualitative-research) is a useful complementary technique for synthesising the naming themes that emerge from open sorts, particularly when you have collected a large volume of participant-generated category names.

---

## Card Sorting vs Tree Testing: How They Work Together

Card sorting and tree testing are complementary methods, not alternatives. Using one without the other at the right stage is a common and expensive mistake.

**Card sorting is generative.** It builds a candidate IA from the mental models real users bring to your content. The output is a proposed navigation structure grounded in evidence rather than assumption.

**Tree testing is evaluative.** It presents users with a text-only hierarchy — the "tree" — and asks them to find specific items within it. Success rates and navigation paths show whether the proposed structure actually works for task completion.

The correct sequence is: card sort → draft IA → tree test → iterate. Running tree testing before card sorting means you are testing a structure that came from a designer's assumption rather than a user's mental model. When that structure fails — and it often does — you cannot tell whether the problem is the labels, the groupings, or both.

There is one scenario where you can skip card sorting: if a well-established IA already exists and the research question is purely "can users find X within this structure?" In that case, go straight to tree testing. But if the IA itself is under review, card sorting comes first.

For tree testing, Treejack from Optimal Workshop is the most widely used dedicated tool. It pairs logically with OptimalSort, which handles card sorting, making the two-study sequence straightforward to manage within a single platform.

---

## Limitations and Common Pitfalls to Avoid

Card sorting is a strong method within a specific scope. Knowing its limits helps you use it honestly and set appropriate stakeholder expectations.

**Card sorting reveals mental models, not task success.** A navigation structure that matches users' categorisation instincts can still fail if labels are unclear or hierarchy depth creates friction. Always pair card sorting with usability testing or tree testing before shipping.

**Participant fatigue degrades data sharply above 80 cards.** Participants who are tired sort by proximity, habit, or guesswork. If your content set is large, run multiple smaller studies with different card subsets rather than one exhausting session.

**Label bias is a real risk.** If your card labels reuse existing navigation terms, participants may sort by familiarity rather than genuine mental model. This is particularly common in closed sorts where the category names echo the current site structure.

**Small samples in closed sorts produce misleading agreement percentages.** A 75% agreement rate from 12 participants means 9 people agreed. Report the n alongside every percentage and be explicit about what the numbers can and cannot support.

**Dendrograms are probabilistic, not prescriptive.** The clusters they show are tendencies, not instructions. Apply professional judgement — particularly for items at cluster boundaries — rather than implementing the dendrogram output mechanically.

**Disagreement in the data is signal, not failure.** When participants sort cards inconsistently, that inconsistency tells you something important about how your content is perceived. Educate stakeholders early so that mixed data is read as insight rather than a reason to distrust the method.

---

## Frequently Asked Questions

### How many participants do I need for a card sorting study?

For open card sorting, 15–30 participants typically surface the main mental-model patterns. For closed card sorting, aim for 30–50 to get statistically meaningful agreement rates. Unmoderated tools make hitting these numbers cost-effective without a large fieldwork budget.

### What is the difference between open and closed card sorting?

In open card sorting, participants invent their own category names, making it ideal for discovery. In closed card sorting, categories are predefined and participants assign cards to them, making it suited for validating an existing or proposed IA. The short version: open is generative, closed is evaluative.

### Should I run card sorting or tree testing first?

Always card sort first. Card sorting generates a candidate IA from real mental models; tree testing then evaluates whether users can navigate that structure. Running tree testing on an untested IA only confirms how well a designer guessed — it does not tell you what users actually expected.

### Can card sorting be done remotely?

Yes. Tools such as OptimalSort, Maze, and Useberry support fully unmoderated remote card sorting. For moderated remote sessions, pair screen-sharing with a digital card-sort tool and use think-aloud prompts to capture the reasoning behind each grouping decision.

### How do I analyse the results of a card sorting study?

Start with the similarity matrix to identify which cards were consistently grouped together. Use dendrograms to visualise natural clusters at different thresholds, applying judgement about where to draw the boundary. For closed sorts, review the standardisation grid to see agreement rates per category. Then add the qualitative layer: examine participant-generated category names for vocabulary insight. Document cards that split across categories as signals of ambiguity rather than resolving them arbitrarily.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Card Sorting in UX Research: How to Run It",
  "description": "Learn how to run open and closed card sorting studies, analyse the output, and decide when to use card sorting vs tree testing — a practical guide for UX researchers.",
  "datePublished": "2026-06-04",
  "dateModified": "2026-06-04",
  "author": {
    "@type": "Organization",
    "name": "Glasgow Research"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Glasgow Research"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://blog.glasgow.works/blog/card-sorting-ux-research"
  },
  "keywords": "card sorting ux research, open card sorting vs closed card sorting, card sorting methodology, tree testing vs card sorting, information architecture research, card sorting analysis"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many participants do I need for a card sorting study?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For open card sorting, 15–30 participants typically surface the main mental-model patterns. For closed card sorting, aim for 30–50 to get statistically meaningful agreement rates. Unmoderated tools make hitting these numbers cost-effective."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between open and closed card sorting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In open card sorting participants invent their own category names, making it ideal for discovery. In closed card sorting, categories are predefined and participants assign cards to them, making it suited for validating an existing or proposed IA."
      }
    },
    {
      "@type": "Question",
      "name": "Should I run card sorting or tree testing first?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Always card sort first. Card sorting generates a candidate IA from real mental models; tree testing then evaluates whether users can navigate that structure. Running tree testing on an untested IA just confirms how well a designer guessed."
      }
    },
    {
      "@type": "Question",
      "name": "Can card sorting be done remotely?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Tools like OptimalSort, Maze, and Useberry support fully unmoderated remote card sorting. For moderated remote sessions, pair screen-share with a digital card-sort tool and use think-aloud prompts to capture reasoning."
      }
    },
    {
      "@type": "Question",
      "name": "How do I analyse the results of a card sorting study?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start with the similarity matrix to identify which cards were consistently grouped together. Use dendrograms to visualise natural clusters at different thresholds. For open sorts, analyse participant-generated category names for vocabulary patterns. For closed sorts, review the standardisation grid for agreement rates per category."
      }
    }
  ]
}
</script>

---
title: "Tree Testing in UX Research: How to Run It"
description: "Learn how to run tree testing in UX research, interpret success rates and directness scores, and use results to validate your information architecture before"
pubDate: 2026-07-01
updatedDate: 2026-07-01
readingTime: 13
slug: "tree-testing-ux-research"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "Diagram of a branching tree structure with task-completion paths highlighted, representing tree testing in UX research"
tags:
  - "card sorting & tree testing"
  - "tree testing vs card sorting"
  - "how to run a tree test"
  - "information architecture testing"
  - "tree testing tools"
---
<!-- gr:toc -->

## On this page

- [What Tree Testing Actually Is (and Isn't)](#what-tree-testing-actually-is-and-isnt)
- [Tree Testing vs Card Sorting: When to Use Each](#tree-testing-vs-card-sorting-when-to-use-each)
- [How to Build a Tree for Testing](#how-to-build-a-tree-for-testing)
- [Writing Tasks That Produce Reliable Data](#writing-tasks-that-produce-reliable-data)
- [Choosing a Tree Testing Tool](#choosing-a-tree-testing-tool)
- [Running the Study: Recruitment and Fieldwork](#running-the-study-recruitment-and-fieldwork)
- [Interpreting the Data: Success Rates, Directness, and Path Analysis](#interpreting-the-data-success-rates-directness-and-path-analysis)
- [Turning Findings into IA Changes Without Over-Reacting](#turning-findings-into-ia-changes-without-over-reacting)
- [Where Tree Testing Fits in a Broader Research Programme](#where-tree-testing-fits-in-a-broader-research-programme)
- [Frequently Asked Questions](#frequently-asked-questions)

## What Tree Testing Actually Is (and Isn't)

Tree testing is a remote, task-based method that evaluates navigation structure in isolation. Participants see only a text-based hierarchy of labels — no colour, no layout, no visual cues — and they're asked where they would go to complete a specific goal. That stripped-back format is deliberate. It lets you test whether your information architecture (IA) works before a single screen has been designed.

This is what separates tree testing from [usability testing](https://blog.glasgow.works/blog/usability-testing-vs-user-interviews), which assesses a working interface at some level of fidelity. In a usability test, a confusing icon or an unexpected colour can deflect a participant as much as a mislabelled category does. Tree testing removes that noise. If people cannot find things in a plain text tree, the problem is structural, not visual.

The method has limits. It will not tell you whether a label feels trustworthy, what emotional tone a category name carries, or why a participant chose a particular path. For those questions you need qualitative methods.

Three core outputs come out of a tree test: **success rate** (the percentage of participants who reached the correct destination), **directness score** (the percentage of successful completions achieved without backtracking), and **time-on-task** (how long each navigation attempt took). Read together, these three numbers tell a coherent story about findability.

---

## Tree Testing vs Card Sorting: When to Use Each

The two methods sit on opposite sides of the same problem. [Card sorting in UX research](https://blog.glasgow.works/blog/card-sorting-ux-research) is generative: you give participants a set of content items and ask them to group and label those items themselves. The output surfaces the mental models your audience already holds, before you impose a structure on them.

Tree testing is evaluative. You have a proposed or existing structure, and you want to know whether real users can navigate it. The question shifts from "how should we organise this?" to "does this organisation actually work?"

The most reliable sequence runs card sorting first to inform the tree, then tree testing to stress-test the result. Card sort data helps you draft category labels that reflect how users think; tree testing then reveals whether those labels hold up under realistic task pressure.

You can skip the card sort and go straight to tree testing in a few cases:

- You have an existing navigation and suspect specific findability problems.
- You have just completed a redesign and want post-launch validation.
- You are comparing two candidate structures (an A/B tree test) and need a quantitative decision basis.

Both methods run well in an unmoderated remote format, which keeps cost and scheduling overhead low. Neither requires a moderator on every session, which means you can reach sample sizes that would be impractical in a moderated lab.

---

## How to Build a Tree for Testing

Start from your real sitemap or your proposed IA. Copy the labels exactly as they appear — do not clean them up yet. The point of the test is to find out whether those labels work for users, and sanitising them in advance defeats the purpose.

On depth: three to four levels covers the vast majority of navigation structures without introducing fatigue. Trees that go five or six levels deep rarely add useful signal; participants tend to satisfice or abandon long before they reach the leaves.

For branching, aim for five to nine child nodes per parent. This reflects how real navigation menus tend to be structured and gives participants a realistic decision load at each level.

Label hygiene follows a simple rule. If the study is designed to test whether users understand the current labels, keep them verbatim even if they use internal jargon. If the study is testing a proposed new structure, use clearer language — but document what you changed and why, so stakeholders understand what was actually tested.

Two mistakes routinely undermine tree test quality before a single participant has clicked. The first is collapsing real categories to simplify the tree, which produces artificially clean data that does not reflect production reality. The second is building a tidier tree that you wish existed, rather than the one that does. Both distort findings and make the research harder to act on.

---

## Writing Tasks That Produce Reliable Data

Tasks must be written from the perspective of a real user goal, not an internal team goal. "Find the section for enterprise billing configuration" is a team goal. "You need to update the payment method for your company account" is a user goal. The difference matters because participants navigate using their own mental models, not your org chart.

Avoid label echo. If your task uses the same phrase that appears as a navigation label, participants will word-match rather than navigate by genuine understanding. That inflates success rates artificially and tells you nothing useful.

A study with eight to twelve tasks gives enough coverage without exhausting participants. Beyond fifteen, fatigue and satisficing become a real data-quality problem — people start clicking quickly just to finish.

Pilot with two or three people before you launch. Ambiguous task wording is almost impossible to spot from the inside, and a short pilot usually surfaces it immediately.

Include at least one impossible or off-tree task: a goal that cannot be completed using the current structure. This tests whether participants are genuinely confident in their navigation or simply guessing. A high "success" rate on an impossible task is a strong signal of satisficing behaviour.

---

## Choosing a Tree Testing Tool

Specialist tools exist for a reason. Tree testing requires the software to record every step of a participant's path through the hierarchy — not just the final destination. A general survey tool records clicks on options, but it cannot map backtracking, pivots, or abandoned paths. That branching path data is where the most actionable insight lives.

The main specialist options are Treejack (Optimal Workshop), Maze, and UXtweak. They differ on price point, whether they include a built-in participant panel, and how cleanly they export raw path data for secondary analysis. Treejack is the most established and tends to be the default for teams running dedicated IA research programmes. Maze and UXtweak both offer broader UX testing feature sets alongside tree testing, which suits teams that want a single platform.

For agencies, white-labelling and client-facing reporting features matter. For in-house teams, the priority is usually licence cost and integration with existing recruitment workflows.

On sample size: 30–50 participants per tree variant produces stable success rates for most structures. If you are comparing two candidate trees, or working with a niche B2B audience where individual variation is higher, 75 or more per variant is a more defensible target.

---

## Running the Study: Recruitment and Fieldwork

Recruit participants who actually use, or would use, the navigation you are testing. A generic consumer panel gives you clean numbers but potentially meaningless ones if the real audience is, say, procurement managers at mid-market manufacturers.

Unmoderated remote is the default format. Moderated tree testing — where a researcher observes and can ask follow-up questions — is rarely worth the overhead unless you specifically need think-aloud data to understand why participants made unexpected choices. For pure IA validation, unmoderated is faster, cheaper, and produces larger samples.

Screen out anyone who works in UX, IA, or related fields. Practitioners navigate test trees differently from typical users: they tend to be more systematic, more aware of common structural conventions, and less likely to reveal the genuine confusion that makes tree test data valuable.

Most studies close within two to five days using a panel provider. For niche B2B audiences, allow up to two weeks, and plan your screener carefully to avoid burning through an entire panel list before you hit your target sample.

Brief participants honestly. Tell them there are no wrong answers, that they can backtrack freely, and that you are testing the structure rather than their ability. This reduces task anxiety and produces cleaner path data — participants who feel judged tend to commit to a first choice rather than exploring, which suppresses the backtracking signal you need.

We saw this clearly on a B2B software engagement with a complex product navigation. Adjusting the participant briefing to explicitly normalise backtracking increased the rate of recorded path pivots by a meaningful margin, and that surfaced label problems that a more anxiety-driven run would have missed entirely. The navigation itself had not changed — only the instruction framing.

---

## Interpreting the Data: Success Rates, Directness, and Path Analysis

Success rate is your headline figure: the percentage of participants who ended up at the correct destination. Read it as a starting point, not a conclusion. A high success rate on a poorly designed task — one where the label appears verbatim in the question — is nearly meaningless.

Directness score refines the picture. It measures the proportion of successful completions where the participant reached the destination without backtracking. A task with 80% success and 40% directness is a different problem from one with 80% success and 80% directness. The first is a lucky-guess problem: people are arriving at the right place via circuitous or exploratory routes, which suggests the label or its parent category is not intuitive. The second suggests a genuinely well-understood path.

There is no universal benchmark for what counts as a good score. Compare across tasks within the same study — outliers become visible immediately — and, where you have a previous version of the tree, compare against that baseline. Cross-study benchmarks published online are of limited value because task difficulty varies too much between studies to make direct comparison meaningful.

Path analysis is where you find the structural evidence behind the numbers. Look for repeated pivot points: nodes where a high proportion of participants arrived, paused (implicitly, through backtracking), and then left. Repeated pivots at the same node almost always indicate either a labelling problem (the category name is attracting the wrong audience) or a structural problem (content is housed in a location that conflicts with users' mental models).

Avoid over-interpreting small differences. On a sample of 40 participants, a five-point gap in success rate between two tasks falls within normal sampling variation. Use [thematic analysis to make sense of qualitative path notes](https://blog.glasgow.works/blog/thematic-analysis-qualitative-research) before drawing conclusions from marginal numeric differences.

Triangulate. Tree testing data is most actionable when read alongside card sorting outputs and any qualitative notes from earlier discovery work. A structural problem that appears in all three sources is a genuine problem. One that appears only in the tree test numbers deserves a closer look before you act on it.

---

## Turning Findings into IA Changes Without Over-Reacting

Not every problem revealed by a tree test warrants immediate structural change. Prioritise tasks where both success rate and directness are low. These are your highest-confidence findings, because participants are neither arriving at the right place nor doing so via a logical route.

For labelling problems, the disciplined response is to draft revised labels and run a follow-up tree test before committing to a redesign. Changing a live navigation based on a single test is a reasonable decision. Changing it based on a single test and a hunch about better wording is not.

For structural problems — where the issue is where content sits, not just what it is called — feed the findings back into a new card sort or a hybrid card sort to regenerate candidate structures. Let the data drive the reorganisation rather than inferring a new structure from the failure mode of the old one.

Document every change and the evidence behind it. IA decisions made without recorded rationale become [research debt](https://blog.glasgow.works/blog/research-debt-in-product-teams) quickly: six months later, no one can explain why a category was split or a label changed, and the same problem gets re-investigated from scratch.

Share findings as a short written summary paired with path visualisations. Stakeholders respond better to a destination-tree heatmap — which makes problem areas immediately visible — than to a data table of success rates. The goal is to make the evidence legible enough to support a decision, not to demonstrate methodological rigour.

---

## Where Tree Testing Fits in a Broader Research Programme

Tree testing works best as a mid-discovery validation step. It sits after you have enough evidence to propose a structure, and before you have committed that structure to a high-fidelity prototype or a live build.

A practical workflow looks like this: discovery interviews to understand user goals and mental models → card sort to draft a candidate structure → tree test to validate findability → prototype usability test to evaluate the interaction design → launch. Each step builds on the last, and each catches a different class of problem.

For iterative teams running continuous discovery, a lightweight tree test — eight tasks, 30 participants, standard unmoderated format — can be completed in under a week. That turnaround fits within most sprint cycles, which means IA validation does not have to be a gate that slows delivery.

For a full map of how tree testing relates to other methods, the [UX research methods](/blog/ux-research-methods) hub covers the complete toolkit and when to reach for each one.

---

## Frequently Asked Questions

**How many participants do I need for a tree test?**

30–50 participants per tree variant gives stable success rates for most navigation structures. Go higher — 75 or more — if you are comparing two candidate trees or working with a niche B2B audience where small-sample noise is a bigger risk.

**Can I run tree testing with an existing live site?**

Yes. Extract your current sitemap labels verbatim into the testing tool. Testing the live labels, rather than idealised ones, is what reveals real findability problems. Make sure your tasks reflect actual user goals rather than internal categorisation logic, or the results will tell you how well users navigate your mental model rather than their own.

**What is the difference between a direct success and an indirect success?**

A direct success is a completion where the participant reached the correct destination without backtracking to a higher level of the tree. An indirect success is a completion where they arrived at the right place after exploring one or more wrong branches first. Both count as successes in the headline rate, but indirect successes lower the directness score. A high proportion of indirect successes on a given task usually points to a labelling ambiguity — the right destination is not obviously signposted from the top level.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Tree Testing in UX Research: How to Run It",
  "description": "Learn how to run tree testing in UX research, interpret success rates and directness scores, and use results to validate your information architecture before",
  "datePublished": "2026-07-01",
  "dateModified": "2026-07-01",
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
    "@id": "https://blog.glasgow.works/blog/tree-testing-ux-research"
  },
  "keywords": "tree testing in UX research, tree testing vs card sorting, how to run a tree test, information architecture testing, tree testing tools, findability testing"
}
</script>

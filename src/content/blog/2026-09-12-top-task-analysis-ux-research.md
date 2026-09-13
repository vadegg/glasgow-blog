---
title: "Top Task Analysis in UX Research: A Practical Guide"
description: "Learn to build a reliable task list, run and score a top tasks survey, and turn the evidence into clearer content, navigation and product priorities. Read on."
pubDate: 2026-09-12
updatedDate: 2026-09-12
readingTime: 9
slug: "top-task-analysis-ux-research"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "Researcher scoring ranked user tasks during a top task analysis UX research study"
tags:
  - "UX Research Methods — analytics-informed qualitative research"
  - "top tasks survey"
  - "top task analysis method"
  - "how to identify user top tasks"
  - "top tasks scoring"
---
<!-- gr:disclosure -->
> Disclosure: this article may mention paid tools. We receive no compensation for any mention; assess each tool against your own requirements.

## What is top task analysis in UX research?

Top task analysis UX research identifies the user goals that deserve the clearest focus. It asks people to select and rank their most important tasks from a deliberately broad candidate list.

The method reveals tasks that matter disproportionately to users. It is not a count of stakeholder requests or feature mentions. A task may be important even if it is infrequent, currently easy to complete or of limited commercial value.

Top task analysis measures stated importance. It does not measure task frequency, satisfaction, usability or business value. Use it alongside other [UX research methods](/blog/ux-research-methods): generate and refine tasks, survey users, score rankings, examine segments and validate decisions.

## When should you use the top task analysis method?

Use the top task analysis method when you need evidence for prioritising information architecture, content, services or product capability. It is useful for redesigning navigation, rationalising a large content estate, defining MVP scope and resolving competing views of user needs.

The findings give teams a shared basis for deciding which journeys should be easiest to find and complete. They do not show whether users can complete those journeys successfully. A highly ranked task may already work well, while a lower-ranked task may create a serious problem for a smaller audience.

The method is a weaker fit for early exploratory discovery, very small specialist audiences, or decisions where the candidate tasks are already fixed. Combine it with [product analytics and user research](https://blog.glasgow.works/blog/product-analytics-vs-user-research) when you need both stated priorities and observed behaviour.

## Step 1: Build a complete candidate task list

Start by defining the audience, product or service boundary, and decision the study must inform. Without this scope, a list can become a mixture of unrelated goals, features and internal requests.

Gather candidate tasks from search logs, analytics, support queries, existing research, stakeholder workshops, interviews and competitor language. Each source has gaps, so compare them to improve coverage. [Thematic analysis of qualitative evidence](https://blog.glasgow.works/blog/thematic-analysis-qualitative-research) can help turn interviews and support data into consistent task candidates.

Write each item as a concise user goal in language users would recognise:

- “Check an application’s status”
- “Understand eligibility requirements”
- “Change account details”

Avoid interface labels such as “Use the dashboard”, proposed solutions such as “Add live chat”, and compound tasks such as “Apply and track progress”.

Merge genuine duplicates, but retain meaningful distinctions. “Find a local service” and “Book an appointment” may form one journey, yet they are different goals. Keep every item at a comparable level of specificity.

Before piloting, check that the list is:

- Complete enough to represent known user goals
- Neutral and free from solution bias
- Clear without internal jargon
- Consistent in granularity
- Free from duplicates and substantial overlap

## Step 2: Design and pilot the top tasks survey

A top tasks survey presents the candidate list and asks each respondent to choose and rank a limited number of their most important tasks. The forced choice is central: respondents must prioritise instead of approving every plausible need.

Set the rules before launch. You might ask participants to select five tasks and rank them from first to fifth, with five points for first choice down to one point for fifth. Other weighting schemes can work, but declare the number of choices, instructions and scoring before fieldwork. Do not change them after seeing responses.

Randomise or rotate task order where the survey platform permits it. This can reduce extra attention to items shown first. Check that the presentation remains usable on mobile, where a long list is harder to scan.

Avoid leading category labels, organisational language, overlapping tasks and statements containing two goals. “Get support and resolve a billing issue” does not show which need the participant is selecting.

Collect segmentation variables only where they inform a planned decision. Role, experience level, location or lifecycle stage may be useful. Collecting broad demographic data without a decision purpose adds burden without improving the analysis.

Pilot before recruitment. Ask pilot participants what each task means, whether a task is missing and whether items feel repetitive. Check completion time, mobile usability and likely order effects. [Mixed methods research](https://blog.glasgow.works/blog/mixed-methods-research-ux) can help here: short follow-up interviews can reveal how respondents interpreted the survey.

## Step 3: Choose a defensible sample and recruit participants

There is no universal top task survey sample size. The target depends on audience diversity, how clearly task scores separate and whether you need to compare segments.

Define the minimum number of usable responses needed for each decision-critical segment before fieldwork. A study comparing new and experienced users needs enough completed responses in both groups, not merely a large overall total.

Recruitment quality matters more than headline volume. A large biased sample does not correct for reaching the wrong audience. Apply clear eligibility rules and record recruitment sources.

Monitor the rank order of leading tasks as responses accumulate. If it continues to change materially, recruit further or treat the result as uncertain. Report recruitment source, eligibility criteria, response-quality checks, usable completions and segment sizes alongside the findings.

## Step 4: Calculate top-task scores

Score rankings with a weighting scheme declared before launch. In this illustrative example, 100 respondents each rank five tasks. First choice receives five points and fifth choice receives one. The rank totals across the five tasks are therefore 100 at each position.

| Task | 1st | 2nd | 3rd | 4th | 5th | Weighted points | Score share |
|---|---:|---:|---:|---:|---:|---:|---:|
| Find a local service | 16 | 28 | 35 | 47 | 61 | 452 | 30.1% |
| Check application status | 30 | 18 | 12 | 8 | 7 | 281 | 18.7% |
| Understand eligibility | 24 | 20 | 16 | 10 | 8 | 276 | 18.4% |
| Book an appointment | 18 | 19 | 17 | 16 | 10 | 259 | 17.3% |
| Update personal details | 12 | 15 | 20 | 19 | 14 | 232 | 15.5% |

For “Check application status”, the weighted points are:

`(30 × 5) + (18 × 4) + (12 × 3) + (8 × 2) + (7 × 1) = 281`

Calculate each task’s score as:

`weighted task points ÷ all weighted points × 100`

In this example, all weighted points total 1,500. Check arithmetic and publish the exact formula. In a larger survey, use the same denominator across every candidate task.

Also report unweighted selection rates. They show reach: the proportion of respondents who selected a task at any rank. Weighted scores show intensity: how strongly respondents prioritised it. A widely selected task that is usually ranked lower may require a different response from one selected by fewer people as their first priority.

Treat small differences cautiously. For high-stakes decisions, use confidence intervals, resampling or repeated measurement. Handle incomplete and duplicate responses consistently, and document exclusions. A [UX benchmarking study](https://blog.glasgow.works/blog/how-to-run-a-ux-benchmarking-study) offers a useful model for repeatable measurement.

## Step 5: Interpret the results without hiding segment differences

Plot the ranked distribution rather than reporting only the first task. A small group of leading tasks may be followed by a long tail of lower-priority needs; that pattern matters when allocating effort.

Compare segments that affect decisions, such as new and experienced users, roles, markets or lifecycle stages. Aggregate results can conceal materially different priorities. Do not claim a universal top task where a decision-critical segment has a distinct set of needs.

Keep importance separate from current performance. A task can be highly important and easy to complete today. Another can rank lower overall yet fail badly for a vulnerable or specialist group.

Investigate unexpected rankings before making irreversible changes. Interviews, analytics, support contacts and [affinity mapping](https://blog.glasgow.works/blog/affinity-mapping-in-qualitative-research) can help explain why a task rose or fell.

## Turn top tasks into content, navigation and product priorities

Map each high-priority task to the content, navigation path, workflow or capability that supports it. This turns a ranked list into practical work.

Prioritise improvements using task importance alongside current performance, strategic value, risk and delivery effort. A high-importance task with weak performance is often a strong candidate for focused improvement. A high-importance task that already works well may need protection during redesign.

Use the findings to simplify labels, elevate critical paths, remove low-value clutter and define measurable outcomes. For example, a repeatedly high-ranked task should be easy to locate from key entry points and supported by clear, task-focused content.

Do not automatically delete long-tail tasks. Legal duties, accessibility needs, safety requirements and specialist-user obligations can justify maintaining lower-ranked journeys.

Survey rankings are not design proof. Validate proposed changes with card sorting, tree testing, first-click testing or [usability testing and user interviews](https://blog.glasgow.works/blog/usability-testing-vs-user-interviews).

Create an action register containing:

- The task and supporting journey
- The decision and accountable owner
- The measure used to assess improvement
- Risks and affected specialist users
- The date for repeating the study

This creates a route from findings to [turning insight into impact](/blog/insight-to-impact).

## Common top task analysis mistakes

The highest-risk errors often begin before analysis: an incomplete task list, feature-led wording, inconsistent granularity, excessive survey burden and unrepresentative recruitment.

Do not change weights after seeing results. Do not present close scores as meaningful differences without checking uncertainty. Importance rankings cannot diagnose a usability problem or prove that a proposed design will work.

Before launch, review the list, wording, ranking rules, sample plan and pilot findings. Before reporting, check calculations, exclusions, segment sizes and whether the recommended action needs further validation.

## Top task analysis FAQs

### How many tasks should a top tasks survey include?

Include enough tasks to represent genuine user goals and force prioritisation, while keeping the list understandable. Set its length through evidence gathering and piloting, not a copied fixed number.

### What sample size does a top tasks survey need?

There is no universal threshold. Base the target on audience diversity, required subgroup comparisons and rank stability. Report usable responses and segment sizes.

### How are top-task survey responses scored?

Use a declared rank-weighting scheme, calculate weighted points and percentage share, then report unweighted selection rates as a cross-check.

### What is the difference between top task analysis and card sorting?

Top task analysis prioritises what users need to accomplish. Card sorting explores how users group and label information. Use top task findings to focus later card-sorting work.

Start by defining the decision and audience, then build and pilot the candidate task list before committing to recruitment.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://blog.glasgow.works/services/).

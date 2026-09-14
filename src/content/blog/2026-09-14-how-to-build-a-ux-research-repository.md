---
title: "How to Build a UX Research Repository"
description: "Build a UX research repository teams can search and trust with a practical taxonomy, atomic-insight template, and governance workflow."
pubDate: 2026-09-14
updatedDate: 2026-09-14
readingTime: 9
slug: "how-to-build-a-ux-research-repository"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
hub: "research-operations"
draft: false
heroImageAlt: "UX researcher mapping a repository taxonomy and atomic insight cards on a whiteboard"
tags:
  - "research repositories — taxonomy and atomic nuggets"
  - "UX research repository taxonomy"
  - "atomic research insights"
  - "research repository governance"
  - "research insight tagging"
---
## Start with the decisions your repository must support

A UX research repository is a governed retrieval system, not a folder of reports. Its job is to help colleagues find evidence they can assess before making a product decision.

Before selecting a tool or moving old material, ask likely users what they need to find. Speak with product, design, support and research colleagues. Capture the words they use, the questions they ask, and the context they need before they trust an answer. Condens recommends basing a taxonomy on the questions repository users frequently ask, rather than designing labels in isolation. [Condens](https://condens.io/taxonomy-for-ux-research-repository/)

Start with three retrieval jobs:

- What evidence do we have about onboarding?
- What have we learned about new administrators?
- Which questions about setup guidance remain unresolved?

Use those questions to shape fields, tags and search tests. Set a narrow first boundary: one product area, one audience, or a recent set of studies. Nielsen Norman Group identifies planning, ownership and iteration as part of successful repository setup. [Nielsen Norman Group](https://www.nngroup.com/articles/why-repositories-fail/?lm=why-organizations-dont-do-user-research&pt=article)

For the wider practice around this work, read [Research Operations: Build a Reliable Research Practice](https://blog.glasgow.works/blog/research-operations/).

## Separate evidence, insights, studies and decisions

Use four linked record types. They keep context available when a short finding is reused.

| Record type | Contents | Purpose |
|---|---|---|
| Study | Research question, method, participant context, dates and limitations | Lets readers judge relevance |
| Evidence | Quote, observation, clip, note, task result or survey response | Supports a claim |
| Atomic insight | One bounded observation or qualified interpretation | Makes learning searchable |
| Decision | Product or research decision, owner and rationale | Connects evidence to action |

Evidence is not automatically an insight. A participant saying, “I expected this under settings,” is evidence. An observation might record that participants searched settings before finding invitations. The interpretation is more cautious: the location or language of invitation controls may not match expectations.

Keep the full study record. It supplies the method, participant context and limitations that an atomic record cannot carry alone. Nielsen Norman Group describes saving each insight with context as its own repository item, while User Interviews describes atomic nuggets as observations with evidence and relevant tags. [Nielsen Norman Group](https://www.nngroup.com/articles/researchops-state-untapped/) [User Interviews](https://www.userinterviews.com/ux-research-field-guide-chapter/atomic-research-nuggets)

Link each decision to the insight and evidence that informed it. A report still provides the narrative view of a study; see [How to Write a UX Research Report That Drives Action](https://blog.glasgow.works/blog/how-to-write-a-ux-research-report/).

## Build a taxonomy from real retrieval questions

A taxonomy is a controlled set of labels and fields used for consistent retrieval. Keep it small enough that contributors can apply it consistently and searchers can understand it.

> **Repository Operating Card: filled taxonomy**
>
> **Retrieval questions**
>
> 1. What evidence do we have about a journey stage?
> 2. What have we learned about a defined audience?
> 3. What themes recur across recent research?
>
> **Controlled dimensions**
>
> | Dimension | Filled value | Application rule |
> |---|---|---|
> | Journey | Onboarding | Use the agreed journey-map term |
> | Segment | New administrator | Describe participant role, not a persona assumption |
> | Method | Usability test | Select the primary study method |
> | Theme | Setup guidance | Use a defined, searchable topic |
> | Status | Active | State whether the record is currently usable |
>
> **Study fields, not tags**
>
> Owner; study date; market; research question; consent boundary; access level; source link; review date.
>
> **Taxonomy guide entry**
>
> `Setup guidance` — content, prompts or help supporting initial configuration. Includes setup instructions and first-run help. Excludes account permissions and invitation management.

Use singular names. For every controlled label, document its definition, examples and near-duplicates that should not be used. Do not split “setup help”, “configuration guidance” and “onboarding support” into separate tags unless they answer different retrieval questions.

A collector tag can retain an emerging topic without prematurely expanding the controlled taxonomy. For example, `emerging: permissions` can be reviewed once there is a repeated retrieval need and a clear boundary for the term. [Condens](https://condens.io/taxonomy-for-ux-research-repository/)

Journey labels work best when they reflect what users are trying to accomplish. [Top Task Analysis in UX Research: A Practical Guide](https://blog.glasgow.works/blog/top-task-analysis-ux-research/) can help define those tasks.

## Turn evidence into reusable atomic research insights

An atomic research insight is one evidence-backed, tagged and bounded record. Atomic does not mean context-free: every record should link back to the study and supporting material.

> **Repository Operating Card: atomic-insight record**
>
> **Neutral observation:** [What happened, without explaining why.]
>
> **Supporting evidence:** [Link to approved note, clip, response or artefact; add a permitted excerpt where appropriate.]
>
> **Interpretation:** [What the evidence may mean, expressed with appropriate qualification.]
>
> **Study and participant context:** [Study link, method, relevant characteristics and date.]
>
> **Tags:** Journey; segment; method; theme; status.
>
> **Limitations or confidence note:** [What the evidence cannot establish, plus contradictory evidence if present.]
>
> **Related decision:** [Decision link or “No decision recorded”.]
>
> **Review date:** [Date and review trigger.]

**Illustrative hypothetical example**

> **Neutral observation:** New administrators in a usability study looked in account settings before locating team invitations.
>
> **Supporting evidence:** Approved study note and task-recording link.
>
> **Interpretation:** The location or language of invitation controls may not match new administrators’ expectations.
>
> **Study and participant context:** Usability test; new administrators; onboarding journey.
>
> **Tags:** Onboarding; new administrator; usability test; team setup; active.
>
> **Limitations or confidence note:** This hypothetical example does not establish prevalence. The linked study record should retain evidence of participants who did not encounter difficulty.
>
> **Related decision:** No decision recorded.
>
> **Review date:** Review after a material change to onboarding or invitation controls.

Do not turn several claims into “Users find onboarding confusing.” Split navigation, terminology and setup guidance into separate records. Preserve contradictory evidence and limits. Human review is still required when a summarisation tool has helped produce a record; [How to Validate AI-Generated Research Insights](https://blog.glasgow.works/blog/validate-ai-generated-research-insights/) explains what to check.

## Use the tag-creation decision matrix

Apply this matrix whenever someone requests a new tag. It is the decision point that keeps research insight tagging useful as the repository grows.

> **Repository Operating Card: tag-creation decision matrix**
>
> | Question | Yes | No |
> |---|---|---|
> | Does it answer a recurring retrieval question? | Continue | Keep as free-text context |
> | Is it distinct from an existing tag? | Continue | Use the existing tag |
> | Will multiple records plausibly use it? | Continue | Use a collector tag |
> | Does it need controlled filtering rather than full-text search? | Create a controlled tag with a definition | Keep as free-text context |
>
> **Outcomes**
>
> - **Use existing tag:** the meaning is already covered.
> - **Use collector tag:** the theme is emerging and its future scope is unclear.
> - **Create controlled tag:** add a singular name, definition, examples, exclusions, owner and date.
> - **Keep as free-text context:** preserve useful detail that does not need consistent filtering.

Review the taxonomy monthly. Merge genuine duplicates, retire unused or unclear labels, record redirects from retired labels, and decide whether collector tags should be promoted, retained or removed. Add failed search terms to the improvement backlog. [UX Maturity Reviews: Assess Your Research Function](https://blog.glasgow.works/blog/ux-maturity-capability-reviews/) offers a related way to assess the surrounding capability.

## Govern intake, access, quality and freshness

Repository governance continues after research is complete. ResearchOps Community includes consent and records management within that continuing responsibility. [ResearchOps Community](https://researchops.community/blog/project/research-repositories/)

Assign named accountability:

| Role | Accountability |
|---|---|
| Contributor | Submits complete records and source links |
| Researcher | Verifies evidence, interpretation, context and limitations |
| Taxonomy steward | Approves controlled-tag changes and maintains definitions |
| Repository owner | Reviews adoption, access rules and improvement priorities |

> **Repository Operating Card: intake and monthly governance checklist**
>
> **Before publishing a record**
>
> - Study context is complete.
> - Evidence links are accessible to authorised people.
> - Required taxonomy fields are populated.
> - Consent and access boundaries are applied.
> - A researcher has completed the quality check.
> - Status and review date are set.
>
> **Monthly review**
>
> - Review active, superseded, archived and needs-review records.
> - Check material changes to the product or research context.
> - Complete the tag-creation review and record redirects.
> - Review failed searches and unanswered questions.
> - Record reuse in planning or decisions where it can be traced.

Set review dates in relation to evidence age, product change and the decision a record informs. Avoid a universal expiry rule. Limit access to recordings and personally identifiable information according to participant consent, organisational policy and applicable requirements. [UX Research Panel Management: Build & Maintain a Panel](https://blog.glasgow.works/blog/ux-research-panel-management/) covers the related responsibility of managing participant records.

## Launch a small repository and improve it through use

Start with enough material to test retrieval, rather than trying to migrate every report.

1. Select a small set of recent, relevant studies.
2. Run a 60-minute Operating Card session: define three retrieval questions, select controlled fields, convert one finding into an evidence-linked atomic record, and assign owners and review dates.
3. Publish a small verified set of insights with study links and access controls.
4. Ask product, design and support colleagues to complete real searches.

Record searches that fail, return too much material or leave people uncertain. Use them as inputs to the next taxonomy review. Avoid tool-first selection, bulk migration without quality checks, uncontrolled tags and AI-generated summaries published without human verification.

Make the monthly review part of the research cadence. For the wider operating model, see [Research Operations](https://blog.glasgow.works/blog/research-operations/).

## Frequently asked questions

### What should a UX research repository contain?

It should contain linked study, evidence, atomic-insight and decision records. Add required metadata, ownership, review status, access controls and a consent boundary. Study records preserve method and limitations; evidence supports the insight; decision records show how learning informed action.

### What is an atomic research insight?

It is one evidence-backed, tagged and bounded observation or interpretation that can be found and reused. It retains links to its study context, supporting evidence, limitations and any related decision.

### How many tags should a UX research repository have?

There is no universal number. Begin with a small set of controlled dimensions based on retrieval questions. Use collector tags for emerging themes, then promote them only when repeated use and a clear definition justify a controlled label.

### Who owns research repository governance?

Governance needs named, shared accountability. A repository owner reviews adoption and access, a taxonomy steward manages tag changes, researchers verify quality, and contributors submit complete records.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://blog.glasgow.works/services/).

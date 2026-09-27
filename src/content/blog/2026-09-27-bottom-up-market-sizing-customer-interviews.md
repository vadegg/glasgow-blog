---
title: "Bottom-Up Market Sizing With Customer Interviews"
description: "Build a defensible bottom-up market-size range by combining customer interview evidence with verified buyer counts, pricing and adoption constraints."
pubDate: 2026-09-27
updatedDate: 2026-09-27
readingTime: 10
slug: "bottom-up-market-sizing-customer-interviews"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
hub: "product-research"
draft: false
heroImageAlt: "Bottom-up B2B market-sizing worksheet connecting customer interview evidence to low, base and high opportunity estimates"
tags:
  - "B2B market opportunity validation and sizing"
  - "customer interview market sizing"
  - "bottom-up TAM calculation"
  - "market sizing research"
  - "validate market size with customer research"
---
## What interviews can—and cannot—tell you about market size

Bottom-up market sizing with customer interviews makes model assumptions more defensible. Interviews can explain who qualifies as a buyer, what they use now, how purchasing works, which unit they pay for and what blocks adoption. They cannot turn a qualitative sample into a population survey.

Use an auditable external source for the account denominator: a registry, government dataset, company database or trade body. The [U.S. Census Bureau](https://www.census.gov/data/developers/data-sets/cbp-zbp.html), for example, publishes establishment counts by industry and geography. The [U.S. Small Business Administration](https://www.sba.gov/counseling/plan-your-business/) distinguishes between direct research and research using existing sources.

This is the role of [qualitative market research](https://blog.glasgow.works/blog/qualitative-market-research/): explain the behaviour behind a number without claiming to measure how widespread that behaviour is.

Keep market size separate from a sales forecast. Total addressable market (TAM) is the full revenue opportunity within a defined boundary. Serviceable available market (SAM) applies product, geography and workflow constraints. Serviceable obtainable market (SOM) also requires credible assumptions about go-to-market activity, adoption and sales capacity.

## Define the market before interviewing anyone

Write the market boundary before recruiting participants. It should name the buyer, end user, use case, geography, time period and value unit.

> Annual software spend by UK multi-site hospitality operators with 20–200 locations, for staff-compliance management, measured per active location during 2027.

Choose one sizing unit: accounts, seats, transactions, locations or annual spend. Segment only where eligibility, purchase frequency, quantity or price differs materially. Make segments mutually exclusive so the same buyer is not counted twice.

Start with an auditable formula:

`eligible accounts × qualifying share × annual units per account × realised price per unit`

| Variable | Evidence needed | Question to resolve |
|---|---|---|
| Total accounts | Count data | How many organisations meet the industry and geography definition? |
| Qualifying share | Interview and external evidence | Which organisations have the relevant workflow or need? |
| Units per account | Interview or commercial data | How many seats, sites or transactions are purchased each year? |
| Realised price | Commercial data and interview context | What revenue is received after tiering, discounting and contracts? |
| Exclusions | Interview evidence | Which buyers cannot adopt because of procurement, systems or regulation? |

Use [customer segmentation research](https://blog.glasgow.works/blog/how-to-run-a-customer-segmentation-research-study/) where buyer groups differ materially. The [Product Research hub](/blog/product-research/) can help you select supporting research activities.

## Design interviews around model inputs, not a pitch

Recruit people whose evidence could change the model: end users, budget owners and procurement stakeholders across the segments you are sizing. Convenient recruits can reveal useful language and workflows, but they are not automatically representative of the market.

Use a consistent discussion guide and follow useful detail where it appears. UK Government Digital Service guidance recommends open, neutral questions about real events rather than what participants think should happen. [Read the guidance](https://www.gov.uk/service-manual/user-research/using-in-depth-interviews).

Ask participants to reconstruct recent events:

- “Talk me through the last time you bought or renewed this type of tool.”
- “Which alternative did you use before that?”
- “What budget line paid for it?”
- “How many people, sites or transactions were covered?”
- “What was the approval process?”
- “When does the current agreement renew?”
- “What prevented other teams from using it?”

Recent behaviour is more useful for customer interview market sizing than hypothetical purchase intentions. [GDS facilitation guidance](https://userresearch.blog.gov.uk/2014/07/11/what-makes-a-good-user-research-facilitator/) recommends focusing on participants’ behaviour in the recent past.

For sensitive figures, ask for ranges and use more than one prompt. Separate list price from paid price. Record each observation with a participant code, segment, role, date and evidence strength. Keep what was said apart from your interpretation.

| Observation | Interpretation |
|---|---|
| “Renewal requires central procurement approval.” | Procurement may lengthen sales cycles. |
| “We pay per active site.” | Location may be an appropriate pricing unit. |
| “Only regulated locations use the current tool.” | Eligibility may vary by operating model. |

This follows GDS guidance to record what was heard or observed before deciding what it means. [Read the guidance](https://www.gov.uk/service-manual/user-research/analyse-a-research-session). Interviews are one part of a wider study, so consider the full decision before you [choose the right customer research method](https://blog.glasgow.works/blog/customer-research-methods/).

## Convert interview evidence into low, base and high inputs

Build an evidence-to-range worksheet with one row per model variable. It creates a traceable route from qualitative evidence to a numerical range without presenting interview counts as market percentages.

| Variable | Definition | Source | Observed evidence | Low | Base | High | Confidence | Next validation action |
|---|---|---|---|---|---|---|---|---|
| Eligible buyer rule | Organisations with the defined workflow | Interviews, policy review | Central and local approaches differ | Narrow rule | Most-supported rule | Broad rule | Corroborated | Check excluded subsegments |
| Buyer count | Organisations meeting industry and geography criteria | Official dataset | Not collected in interviews | Lowest credible count | Best dated count | Highest credible count | Observed | Compare independent datasets |
| Units per account | Annual seats, locations or transactions | Interviews | Quantity varies by operating model | Lower range | Typical supported range | Upper range | Estimated | Collect structured usage data |
| Realised price | Revenue per unit after adjustments | Price records, interviews | Discounts and contracts vary | Net low | Typical net | Net high | Estimated | Review recent contracts |
| Constraint | Exclusion affecting serviceability | Interviews | Some workflows cannot integrate | Strict exclusions | Known exclusions | Minimal exclusions | Corroborated | Test compatibility |

Do not divide the number of interviewees displaying a behaviour by the number interviewed and call the result a qualifying share. Interviews reveal mechanisms, variation and plausible bounds; they do not usually establish a statistically valid market percentage.

Choose low, base and high values from observed variation, external evidence and explicit judgement. State the reason for each scenario. Preserve conflicting evidence by segment, role or context rather than averaging it into a value that describes no real buyer.

Realised revenue can differ from list price because of discounts, seat bands, usage tiers, contract length and purchasing cadence. A bottom-up TAM calculation rolls customer- or product-level variables into a market estimate; it estimates revenue opportunity, not profit. [University of Nebraska–Lincoln Extension](https://extensionpubs.unl.edu/publication/ec495/na/pdf/view) describes this bottom-up approach.

Use four confidence labels: observed, corroborated, estimated and unknown. If an unknown input could materially change the result, make it a research priority.

## Worked B2B example: calculate a defensible range

This fully filled example is fictional. It is not Glasgow Research client data, a market benchmark or evidence about a real sector.

The hypothetical product is a UK compliance-task SaaS platform for organisations in a defined industry classification with 20–200 operating locations. Annual revenue per active location is the unit. Its illustrative external dataset contains 1,200 organisations. Illustrative interview evidence suggests that workflow fit and technical compatibility vary, so both are treated as SAM exclusions rather than hidden inside an unexplained adoption rate.

| Variable | Low | Base | High | Rationale |
|---|---:|---:|---:|---|
| Verified organisations | 1,200 | 1,200 | 1,200 | Fixed illustrative denominator |
| Organisations meeting workflow rule | 45% | 60% | 70% | Illustrative workflow bounds |
| Compatible with product requirements | 70% | 80% | 90% | Illustrative compatibility exclusions |
| Eligible accounts | 378 | 576 | 756 | Count × workflow rule × compatibility |
| Active locations per account | 25 | 40 | 60 | Illustrative segment range |
| Realised annual price per location | £180 | £220 | £260 | Illustrative net price |

Formula:

`eligible accounts × locations per account × realised annual price per location`

- Low: `378 × 25 × £180 = £1,701,000 annual SAM`
- Base: `576 × 40 × £220 = £5,068,800 annual SAM`
- High: `756 × 60 × £260 = £11,793,600 annual SAM`

The range is intentionally wide because the inputs are illustrative and uncertain. The sensitivity-ranked matrix shows what to validate next.

| Variable | Why it matters | Sensitivity rank | Confidence | Next validation action |
|---|---|---:|---|---|
| Locations per account | Multiplies every eligible buyer | 1 | Estimated | Obtain segment-level location distributions from an independent source |
| Workflow qualification | Changes the account pool | 2 | Corroborated | Test the rule with targeted interviews |
| Realised price | Directly changes revenue | 3 | Estimated | Review comparable contracts and pricing evidence |
| Compatibility exclusion | Defines SAM | 4 | Corroborated | Speak with integration owners |
| Organisation count | Sets the denominator | 5 | Observed | Reconcile against a second source |

Where records and client permission support it, replace or supplement this hypothetical calculation with an anonymised engagement example. Explain how interview evidence changed a sizing assumption without identifying the client or claiming an unsupported outcome. See [selecting market research methods for a decision](https://blog.glasgow.works/blog/market-research-methods-which-method-fits-which-decision/).

## Stress-test the result before using it

Check the buyer count against at least one independent source and document coverage gaps. A dataset may omit non-employers, count establishments when you need companies, use classifications that are too broad or lag behind the market.

Compare the bottom-up range with a separately sourced top-down estimate as a diagnostic, not a target that must match. [Stanford’s guidance](https://biodesignguide.stanford.edu/wp-content/uploads/2022/07/Top-Down-and-Bottom-Up-Market-Sizing-Example.pdf) recommends looking at the market from both directions to understand its potential.

Investigate a large gap by checking buyer definitions, duplicate segments, annualisation, currency, price basis and the difference between current spend and future opportunity. Ask whether each constraint belongs in TAM, SAM or SOM.

Run one-way sensitivity tests: change one input while holding the rest constant. Record the model version, source dates, exclusions and events that should trigger an update. This supports [turning research insight into impact](/blog/insight-to-impact/).

## Use the range to make a decision

Use the range to decide what happens next. If the low case cannot support the intended business, narrow the segment or stop. If uncertain price or eligibility inputs hold up the base case, validate them before building a revenue plan. If the denominator is weak, improve that evidence before debating adoption.

Match precision to input quality. “About £1.7m–£11.8m annual SAM” is more honest than a precise-looking estimate built on uncertain assumptions.

Before sharing the model, check that you have:

- A one-sentence market boundary and unit-consistent formula
- An evidence register separating sources, observations and interpretations
- Low, base and high scenarios with stated reasoning
- Clear TAM, SAM and SOM distinctions
- A sensitivity-ranked next validation action

### Can customer interviews determine TAM?

Not by themselves. Interviews can define eligible customers and bound behavioural inputs. The population denominator should come from auditable external data.

### What is the formula for bottom-up TAM?

Use consistent units: `eligible accounts × annual units per account × realised price per unit`. Calculate segments separately where behaviour or price differs materially.

### How many interviews are needed for market sizing?

There is no universal quota. Recruit across segments and roles that could alter important inputs. Continue until you understand those assumptions well enough for the decision, and do not infer population percentages from a qualitative sample.

### Should adoption rate be included in TAM?

Do not reduce defined TAM using an arbitrary near-term adoption forecast. Product and serviceability constraints belong in SAM. Achievable adoption, sales capacity and route to market belong in SOM or revenue planning.

### How should conflicting interview evidence be handled?

Keep differences visible by segment, role and context. Widen scenario bounds where the evidence warrants it, then collect more evidence on inputs that are both uncertain and decision-sensitive.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://blog.glasgow.works/services/).

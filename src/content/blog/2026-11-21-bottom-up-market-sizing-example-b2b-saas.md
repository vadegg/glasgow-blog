---
title: "Bottom-Up Market Sizing Example: B2B SaaS"
description: "Build a defensible B2B SaaS TAM, SAM and SOM from account counts, seat assumptions, pricing and realistic sales capacity."
pubDate: 2026-11-21
updatedDate: 2026-11-21
readingTime: 8
slug: "bottom-up-market-sizing-example-b2b-saas"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
hub: "product-research"
draft: false
heroImageAlt: "Illustrated B2B SaaS bottom-up market sizing worksheet showing TAM, SAM and SOM from account counts, seats, pricing and sales capacity"
tags:
  - "market sizing and opportunity assessment"
  - "bottom-up market sizing"
  - "bottom-up TAM calculation"
  - "B2B SaaS market sizing"
  - "bottom-up TAM SAM SOM example"
---
## Bottom-up market sizing starts with sellable accounts

A bottom-up market sizing example estimates annual opportunity from target accounts you can count and the revenue each account could generate. For B2B SaaS, that usually means a defined account universe, expected seat use and a documented pricing formula.

TAM is the full eligible account universe. SAM is the part your current product and go-to-market can serve. SOM is the near-term portion the team can realistically win. A common starting formula is:

`TAM = eligible accounts × annual revenue per account`

[Stripe](https://stripe.com/in/resources/more/tam-sam-and-som) describes the same account-count approach. Treat TAM as an opportunity ceiling, not a revenue forecast. Label source dates, assumptions and confidence so readers can distinguish observed evidence from a hypothesis.

The fictional example below includes a copyable Account-to-Capacity Market Sizing Worksheet. Use it alongside your own [B2B SaaS research](https://blog.glasgow.works/blog/how-ai-assistants-change-b2b-vendor-shortlist/).

## Set the market boundary before opening a spreadsheet

Write your ideal customer profile as one testable sentence before counting accounts. Include buyer type, industry or use case, geography, organisation size, technical or regulatory fit, and buying trigger.

For example: “UK-based employers in regulated service industries with 20–500 staff, a compliance-reporting workflow, and a need to manage evidence across teams.” This is a hypothetical boundary, not a claim about the market.

Choose the counting unit deliberately: firm, establishment, location or named account. The choice changes the result. A company with many sites may purchase one centrally managed subscription, so establishment counts could overstate the addressable account base. Location-level purchasing may instead justify counting establishments.

Public datasets can provide a reproducible starting universe. The US Census Bureau’s [County Business Patterns](https://www.census.gov/data/developers/data-sets/cbp-zbp/cbp-api.html) provides annual statistics for businesses with paid employees by detailed NAICS industry, geography and establishment employment size. [Statistics of US Businesses](https://www.census.gov/programs-surveys/susb.html) includes firm and establishment counts, employment and annual payroll, which can help where enterprise size matters.

Keep these fields beside every source number:

| Field | Record |
|---|---|
| Dataset and vintage | Dataset name and release year |
| Counting unit | Firm, establishment, location or named account |
| Industry definition | NAICS code or documented segment rule |
| Geography | Countries, regions or territories included |
| Size filter | Employee, revenue or site-count threshold |
| Extraction date | Date the inventory was created |
| Confidence | High, medium or low, with a reason |

Create exclusions before calculating: duplicates, unsuitable non-employers, unsupported countries, ineligible size bands, unavailable integrations and accounts without the required job to be done. Use [bottom-up market sizing with customer interviews](https://blog.glasgow.works/blog/bottom-up-market-sizing-customer-interviews/) to test whether the boundary matches how buyers purchase.

## Worked bottom-up TAM calculation for a B2B SaaS product

This hypothetical bottom-up TAM calculation models a compliance-workflow SaaS product. Its illustrative pricing is a $3,000 annual platform fee plus $50 per active seat per month. These figures are worksheet inputs only. They are not market benchmarks or Glasgow Research pricing.

`Annual contract value = annual platform fee + (seats per account × monthly seat price × 12)`

| Segment | Counted accounts | Inclusion rule | Seats/account | Platform fee | Seat price | Annual contract value | Annual opportunity | Source | Confidence |
|---|---:|---|---:|---:|---:|---:|---:|---|---|
| Small | 1,000 | Eligible smaller organisations in the defined ICP | 6 | $3,000 | $50/month | $6,600 | $6,600,000 | Illustrative inventory | Low |
| Mid-market | 700 | Eligible mid-sized organisations in the defined ICP | 15 | $3,000 | $50/month | $12,000 | $8,400,000 | Illustrative inventory | Low |
| Larger | 300 | Eligible larger organisations in the defined ICP | 40 | $3,000 | $50/month | $27,000 | $8,100,000 | Illustrative inventory | Low |
| **TAM** | **2,000** | **All eligible accounts** | — | — | — | — | **$23,100,000 ARR** | — | — |

The row calculations are visible:

- Small: `1,000 × [$3,000 + (6 × $50 × 12)] = $6.60m`
- Mid-market: `700 × [$3,000 + (15 × $50 × 12)] = $8.40m`
- Larger: `300 × [$3,000 + (40 × $50 × 12)] = $8.10m`

The illustrative TAM is $23.10m in annual recurring revenue. It does not assume every account will buy, renew or pay list price.

Replace the illustrative account counts with a named-account list or segment inventory that you can source. Replace seat assumptions with observed usage, sales discovery evidence, interview evidence or a clearly labelled hypothesis. A [research plan template](https://blog.glasgow.works/blog/ux-research-plan-template/) can document what is known, what needs validation and who owns the next step.

## Turn TAM into SAM with current-service constraints

SAM should reflect what you can serve now, not what may become possible after product development or expansion.

Apply current constraints only: supported countries, language, segment fit, integrations, security requirements, implementation capacity and viable acquisition channels. Price affordability may be an eligibility assumption, but it is not evidence of willingness to pay.

In this hypothetical example, the current constraints retain 600 small, 300 mid-market and 100 larger accounts:

| Segment | Serviceable accounts | Segment ACV | Annual opportunity |
|---|---:|---:|---:|
| Small | 600 | $6,600 | $3,960,000 |
| Mid-market | 300 | $12,000 | $3,600,000 |
| Larger | 100 | $27,000 | $2,700,000 |
| **SAM** | **1,000** | — | **$10,260,000 ARR** |

`SAM = (600 × $6,600) + (300 × $12,000) + (100 × $27,000)`

Do not reduce TAM by an unexplained percentage. Record why each account group is excluded and what would need to change for it to re-enter the serviceable market. [B2B market entry validation with buyer interviews](https://blog.glasgow.works/blog/b2b-market-entry-validation-buyer-interviews/) can test whether apparent serviceability matches buyer requirements.

## Calculate SOM from capacity, pipeline and win rate

Define the planning horizon. In this example, SOM means one year of new ARR, rather than cumulative revenue over several years.

The illustrative capacity model is:

`2 account executives × 60 qualified opportunities annually × 25% win rate = 30 new customers`

Allocate an explicit mix of 12 small accounts, 12 mid-market accounts and six larger accounts:

| Segment | New customers | ACV | One-year new ARR |
|---|---:|---:|---:|
| Small | 12 | $6,600 | $79,200 |
| Mid-market | 12 | $12,000 | $144,000 |
| Larger | 6 | $27,000 | $162,000 |
| **SOM** | **30** | — | **$385,200 new ARR** |

`SOM = (12 × $6,600) + (12 × $12,000) + (6 × $27,000) = $385,200`

Check the model against reachable accounts. The 120 qualified opportunities implied by this example must be available within the reachable SAM. Sales-cycle length, representative ramp time, implementation capacity, churn and channel quality may reduce the achievable result.

A percentage claim such as “we only need 1%” is not a SOM method unless it reconciles with account coverage, pipeline and conversion. This capacity-led approach also distinguishes the worksheet from the flat-price example described by [Spona](https://sponasales.com/blog/tam-sam-som). For price and feature trade-offs, see [conjoint analysis for feature prioritisation and pricing](https://blog.glasgow.works/blog/conjoint-analysis-feature-prioritisation-pricing/).

## Stress-test the assumptions that drive the model

Test one variable at a time before combining scenarios. This shows which uncertainty matters most.

| Input | Low | Base | High |
|---|---:|---:|---:|
| Eligible account count | 1,600 | 2,000 | 2,400 |
| Average seats per account | 80% of base assumption | Base assumption | 120% of base assumption |
| Annual platform fee | $2,400 | $3,000 | $3,600 |
| Monthly per-seat price | $40 | $50 | $60 |
| Qualified opportunities per AE | 45 | 60 | 75 |
| Win rate | 15% | 25% | 35% |

For TAM, test account count, seats and price separately. For SOM, test qualified opportunities, win rate and sales capacity separately. Record the input that changes the result most before presenting the headline number.

Use this audit list:

- Are firms and establishments being mixed?
- Could an account appear in more than one segment?
- Is customer revenue being used as a proxy for SaaS spend?
- Is list price being treated as realised ACV?
- Is a multi-year total being presented as an annual market size?
- Does SOM reconcile with capacity and conversion?

Refresh the worksheet when pricing, ICP rules, territory, sales capacity, observed seat use or win-rate evidence changes.

## Present the model with evidence, not an invented case study

No anonymised agency example is included because no permissioned research notes or CRM evidence were supplied. Do not add one unless every detail is supported by contemporaneous evidence and client confidentiality is protected.

Present TAM, SAM and SOM with assumptions, source dates, confidence levels and the next validation activity. Start by replacing one illustrative worksheet row with your own inventory, then test the assumption that changes the result most.

## Frequently asked questions

### What is the formula for bottom-up market sizing?

Use `eligible account count × annual revenue per account`. For seat-based SaaS, annual revenue per account can equal the annual platform fee plus expected seats multiplied by monthly seat price and 12.

### How do you calculate TAM, SAM and SOM for B2B SaaS?

Count all eligible accounts for TAM. Remove accounts the current product and go-to-market cannot serve for SAM. Model customers winnable within a stated period using sales capacity, qualified opportunities and win-rate assumptions for SOM.

### Should I use firms or establishments in a bottom-up TAM calculation?

Use the unit that matches the purchasing decision. A centralised buyer usually requires firm counts; location-level purchasing may justify establishment counts. Document the choice and do not combine units without a deduplication rule.

### How do I estimate SaaS revenue per customer when pricing is per seat?

Use segment-specific expected seats and your actual or proposed pricing formula. Record whether each seat estimate comes from usage, interviews, sales evidence or a hypothesis, then test low, base and high scenarios.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://blog.glasgow.works/services/).

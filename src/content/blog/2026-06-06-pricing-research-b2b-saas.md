---
title: "Pricing Research for B2B SaaS: What to Charge"
description: "Learn which pricing research methods—Van Westendorp, conjoint analysis, JTBD interviews—match which B2B SaaS pricing decisions, and how to run them without a"
pubDate: 2026-06-06
updatedDate: 2026-06-06
readingTime: 15
slug: "pricing-research-b2b-saas"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "A B2B SaaS product team reviewing a pricing research matrix with Van Westendorp and conjoint analysis charts on a whiteboard"
tags:
  - "Product Research (B2B SaaS)"
  - "B2B SaaS pricing strategy"
  - "willingness to pay research"
  - "Van Westendorp price sensitivity"
  - "conjoint analysis B2B"
---
<!-- gr:toc -->

## On this page

- [Why Pricing Research Is Non-Negotiable for B2B SaaS](#why-pricing-research-is-non-negotiable-for-b2b-saas)
- [Map your pricing decision before choosing a method](#map-your-pricing-decision-before-choosing-a-method)
- [Van Westendorp Price Sensitivity Meter: quick range validation](#van-westendorp-price-sensitivity-meter-quick-range-validation)
- [Conjoint analysis for packaging and tier design](#conjoint-analysis-for-packaging-and-tier-design)
- [JTBD interviews to uncover value drivers and switching context](#jtbd-interviews-to-uncover-value-drivers-and-switching-context)
- [Running pricing research without a dedicated research team](#running-pricing-research-without-a-dedicated-research-team)
- [Turning pricing research into a decision](#turning-pricing-research-into-a-decision)
- [Frequently asked questions](#frequently-asked-questions)

<!-- gr:disclosure -->
> Disclosure: this article may mention paid tools. We receive no compensation for any mention; recommendations are based on hands-on use.

## Why Pricing Research Is Non-Negotiable for B2B SaaS

Pricing is the highest-leverage decision in your go-to-market strategy, yet most SaaS teams set their initial price by benchmarking a competitor, halving the number, and calling it a day. That is not a strategy; it is an avoidance of one.

There are three distinct pricing decisions that research should inform. First, **initial price setting**: what range will the market bear for a new product or a new market entry? Second, **packaging and tier design**: which features belong in which tier, and what value metric should anchor each plan? Third, **price change validation**: before you raise or restructure prices on an existing product, what confidence do you need that customers will absorb the change?

B2B SaaS complicates all three decisions in ways that consumer pricing research does not. Buying involves multiple stakeholders — an economic buyer who controls budget, an end-user who evaluates fit, and often a procurement or finance gatekeeper who enforces policy. Willingness to pay is not fixed; it is contextual, shaped by the outcome the buyer is trying to achieve, the alternatives they are comparing you against, and the contract length they expect. A method that works for consumer goods may give you misleading signals here.

The rest of this post is a method-to-decision matching guide. For broader context on how pricing research sits within product discovery, see our [Product Research hub](/blog/product-research).

---

## Map your pricing decision before choosing a method

Before selecting a research method, name the decision you are trying to make. The three decision types map to distinct method families, and conflating them wastes time and produces noise.

**Decision type 1 — Initial price range.** You need a defensible numeric range before a launch or pricing page refresh. The right tool is the Van Westendorp Price Sensitivity Meter: a short survey that identifies the acceptable range quickly and cheaply.

**Decision type 2 — Feature and tier trade-offs.** You are designing a good/better/best packaging structure, deciding which features sit behind a paywall, or choosing a value metric. Conjoint analysis (or its lighter proxy, max-diff) is built for this: it reveals which features buyers value enough to pay more for.

**Decision type 3 — Contextual value drivers.** You need to understand *why* buyers pay what they pay — what outcomes they are trying to achieve, what alternatives they would revert to, and what budget approval process sits behind the purchase. Jobs-to-be-done (JTBD) interviews are the right method here.

Use a simple selection filter before committing. If your timeline is under three weeks and your budget is limited, start with Van Westendorp. If you need to resolve a specific packaging question and can recruit 60 or more qualified respondents, conjoint is appropriate. If the decision is new or strategically significant, JTBD interviews should run in parallel regardless of what quantitative method you choose.

The most common mistake is defaulting to a single method for every pricing question. A Van Westendorp survey will not tell you which features justify a premium tier. A conjoint study will not explain why a segment of buyers churned when you raised prices by 20 per cent. Triangulating qualitative and quantitative signals is not belt-and-braces caution — it is how you avoid expensive pricing errors. For guidance on the qualitative side, see our piece on [jobs-to-be-done interviews for B2B](/blog/product-research).

---

## Van Westendorp Price Sensitivity Meter: quick range validation

The Van Westendorp Price Sensitivity Meter (PSM) is a four-question survey that maps the boundaries of acceptable price in the minds of your target buyers. The four questions are:

1. At what price would this product be so cheap that you would doubt its quality?
2. At what price would this product begin to seem inexpensive, but still credible?
3. At what price would this product begin to seem expensive, but still worth considering?
4. At what price would this product be so expensive that you would not consider it?

Plotting the cumulative response curves for these four questions produces two key outputs: the **Acceptable Price Range** (bounded by the intersections of the "too cheap" and "too expensive" curves) and the **Indifference Price Point** (where equal proportions say "cheap" and "expensive"). The result is a range, not a single number — which is the correct output for this stage of research.

**When to use it.** PSM is best suited to early-stage pricing, a new product entering an established category, or a pricing page refresh where you need a defensible range quickly. It is not designed to resolve packaging questions or predict revenue at a specific price point.

**Sample size for B2B SaaS.** Aim for 40–80 qualified economic buyers — the people who control or directly influence the budget decision. In B2B this is a harder threshold to hit than it sounds. A sample of 30 is workable if your segment is genuinely narrow; below that, the curve intersections become unreliable.

**Common mistakes.** The most frequent error is surveying the wrong person. Procurement contacts and IT evaluators can complete the survey, but their price thresholds do not reflect the economic buyer's. A second mistake is ignoring the floor of the acceptable range: teams often anchor on the midpoint and miss that a significant proportion of buyers will disengage below a certain price because it signals low quality or low commitment.

For guidance on recruiting the right participants, see our post on [how to recruit participants for user research](https://blog.glasgow.works/blog/how-to-recruit-participants-for-user-research).

**Presenting results to stakeholders.** Frame the output explicitly as a range. A slide showing the two curve intersections with a shaded acceptable zone is clearer than a single recommended price and less likely to be overridden by gut instinct.

---

## Conjoint analysis for packaging and tier design

Conjoint analysis works by asking participants to choose between complete product configurations rather than rating individual features. Because buyers must trade one thing against another — as they do in real purchasing decisions — the method reveals *implicit* feature value rather than stated importance, which buyers routinely inflate when asked directly.

In a discrete-choice conjoint study, a participant might see three product configurations side by side, each with a different combination of features and a price. They choose which one they would buy (or none). Repeating this across many choice tasks, with features and prices varied systematically, produces **part-worth utility scores**: a numeric measure of how much each feature level contributes to purchase likelihood. You can then simulate which tier architecture maximises segment-level preference.

**When to use conjoint.** It is the right method when you are designing a good/better/best tier structure, deciding which features to place behind a paywall, or evaluating alternative value metrics (per seat versus per usage, for instance).

**Lightweight DIY options.** Full conjoint requires statistical software and careful experimental design, but accessible tools — Conjointly, SurveyMonkey's conjoint module — handle the design and analysis for you. If full conjoint sample sizes are unachievable (common in B2B), **max-diff** (maximum difference scaling) is a practical substitute. Max-diff asks respondents to identify the most and least important feature from a rotating set, producing a relative importance ranking without requiring the full choice task structure. It does not capture price sensitivity directly, but it isolates which features your buyers value most clearly and cheaply.

**Sample size in B2B.** Full conjoint typically requires 150–300 respondents for stable part-worth estimates. In B2B this is genuinely difficult. Max-diff is viable at 60–80, which is a more realistic target when recruiting economic buyers from a niche segment.

**Reading and applying part-worth scores.** A feature with a high positive utility score increases purchase probability; a feature with a near-zero score adds little incremental value regardless of which tier it sits in. Use this to prioritise: high-utility features in the core tier anchor the product's value proposition; high-utility features that are differentiating and costly to deliver belong in upper tiers.

**The key limitation.** Conjoint captures stated trade-off behaviour in a survey context, not real budget constraints or organisational approval dynamics. A buyer may consistently choose the enterprise tier in a survey but face a procurement ceiling that makes it unreachable. Pair conjoint findings with interview data to understand where budget constraints actually sit.

---

## JTBD interviews to uncover value drivers and switching context

Quantitative methods tell you *what* buyers will pay; they do not tell you *why* the product is worth that to them. Value in B2B SaaS is contextual: the same feature can be worth substantially more to a buyer replacing a manual process than it is to a buyer switching from a comparable tool. Without understanding that context, your price positioning narrative will be generic and unconvincing.

Jobs-to-be-done interviews surface the context around purchasing decisions by asking buyers to reconstruct a specific past event — the last time they evaluated, switched to, or away from a product like yours. The following questions are particularly productive for pricing research:

- "What were you using before, and what were its costs — in money, time, or risk?"
- "What would you lose if this product went away tomorrow?"
- "Who else had to approve this purchase, and what were their concerns?"
- "At what point did price come up in the decision, and what framing did you use internally to justify it?"

Six to eight interviews per distinct buyer segment is typically sufficient to identify the dominant value themes. Diminishing returns set in quickly: by the sixth interview in a coherent segment, new pricing-relevant themes rarely emerge.

**Coding for pricing signals.** After transcription, code interview passages for three categories: ROI and outcome language (what quantified or estimated benefit the buyer associated with the product), budget and approval dynamics (who controlled spending, what the ceiling was, how it was justified), and competitive alternatives (what they compared you against, and at what price). These codes produce the raw material for your value-driver map.

In JTBD work we have conducted for B2B software products, a consistent pattern emerges: buyers articulate value almost entirely in terms of the problem they were escaping or the outcome they needed to achieve, not in terms of the features they were buying. A buyer who described a product as "saving us from rebuilding a process from scratch every quarter" was expressing a willingness to pay that no feature-level survey question would have surfaced. That framing directly shaped how the pricing narrative was positioned to prospects.

Use [affinity mapping for qualitative synthesis](https://blog.glasgow.works/blog/affinity-mapping-in-qualitative-research) to cluster interview outputs into a value-driver map — a structured view of which outcomes buyers prioritise, which alternatives they benchmark against, and which pain points carry enough weight to justify a premium.

---

## Running pricing research without a dedicated research team

A single product manager or GTM lead can run a Van Westendorp survey plus six JTBD interviews in three to four weeks. That is a realistic scope for a team without a research function, and it is enough to make an informed pricing decision.

**Toolstack.** Build your Van Westendorp survey in Typeform or SurveyMonkey — both handle the four questions and export response data cleanly. For interviews, Zoom with auto-transcription (or a separate tool such as Otter.ai) removes the burden of manual note-taking. For max-diff, Conjointly has a free tier that covers small B2B samples adequately.

**Recruiting.** Your CRM is your best source. Segment it for two groups: recently churned accounts (they made a value-price judgement that went against you) and recently converted accounts within the past 60 days (their decision rationale is fresh). Supplement with LinkedIn outreach to mid-funnel prospects who did not convert. Offer a £50–75 incentive for interviews; for surveys, a prize draw is usually sufficient. Critically, do not reveal that the study is about pricing in your screener — doing so self-selects for price-sensitive respondents and skews your results.

**Stakeholder buy-in.** Write a one-page pricing research plan before fieldwork begins. State the decision being made, the method, the sample, and what you will and will not be able to conclude. This pre-aligns stakeholders and reduces the risk of a HiPPO (highest-paid person's opinion) override when findings are inconvenient.

**When to bring in specialist help.** Complex conjoint with segmentation analysis, international pricing research where cultural context affects survey interpretation, and enterprise deals where pricing involves bespoke negotiation rather than published tiers — these are cases where the investment in specialist research support is justified. See our [research operations fundamentals](/blog/research-operations) post for guidance on when to scale up.

---

## Turning pricing research into a decision

Synthesis follows a natural sequence. The Van Westendorp output gives you a defensible price range. Conjoint or max-diff tells you which features justify tier differentiation within that range. JTBD interviews provide the narrative — the value language that makes your pricing positioning credible to buyers and to your own sales team.

Present findings as a **pricing recommendation memo**, not a data dump. The memo should state the recommended price or range, the evidence that supports it, the assumptions it rests on, and the conditions that would prompt a revision. Keep it to two pages.

Define what "good enough" confidence looks like *before* you ship a price change. If you are raising prices on an existing product, you probably need both quantitative range validation and interview-based confirmation that your value narrative holds. For a new product launch, Van Westendorp plus six interviews may be sufficient.

Build a post-launch measurement plan into the same memo: track conversion rate by tier, expansion revenue at 90 days, and price objection rate in sales calls. These metrics tell you whether your research-informed pricing is working in practice.

Pricing research is not a one-time project. Schedule a review when you add a significant feature set, enter a new market segment, or observe a meaningful shift in competitive pricing. The methods described here scale down to a fast pulse check as well as a full research programme.

---

## Frequently asked questions

### How many interviews do I need for B2B SaaS pricing research?

For JTBD-style pricing interviews, six to eight participants per distinct buyer segment is usually sufficient to identify the dominant value themes. Prioritise economic buyers — those who control or directly influence the budget — over end users or IT evaluators, whose price sensitivity reflects a different set of constraints.

### Is Van Westendorp accurate enough for B2B SaaS pricing?

It produces a reliable acceptable price range, not a single optimal price point. It works best as a fast, cheap sanity check or as a way to validate a range hypothesis before investing in conjoint analysis. Pair it with qualitative interviews for the context that survey data cannot provide.

### What is the difference between conjoint analysis and max-diff for pricing?

Conjoint shows trade-offs between whole product configurations — features and price evaluated together. Max-diff isolates which individual features are most versus least valued, independent of price. Max-diff is simpler, cheaper, and achievable at smaller sample sizes, making it a practical substitute when full conjoint recruitment targets are unreachable in a B2B context.

### Can I use existing customer data instead of running new research?

Usage analytics, expansion and contraction MRR data, and sales call recordings are valuable secondary inputs. They tell you what customers do at current prices. They cannot tell you what those customers would pay under a different configuration, or what prospects who did not convert were willing to pay. Primary willingness-to-pay research remains necessary.

### How do I recruit B2B participants for pricing research without biasing results?

Avoid recruiting only satisfied, retained customers — oversample recently churned accounts and mid-funnel prospects who did not convert. Use CRM segmentation combined with LinkedIn outreach. Do not mention pricing in your screener or recruitment message, as doing so attracts disproportionately price-sensitive respondents and skews your findings before fieldwork begins.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://blog.glasgow.works/services/).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Pricing Research for B2B SaaS: What to Charge",
  "description": "Learn which pricing research methods—Van Westendorp, conjoint analysis, JTBD interviews—match which B2B SaaS pricing decisions, and how to run them without a",
  "datePublished": "2026-06-06",
  "dateModified": "2026-06-06",
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
    "@id": "https://blog.glasgow.works/blog/pricing-research-b2b-saas"
  },
  "keywords": "pricing research B2B SaaS, B2B SaaS pricing strategy, willingness to pay research, Van Westendorp price sensitivity, conjoint analysis B2B, how to price a SaaS product"
}
</script>

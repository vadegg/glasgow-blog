---
title: "Conjoint Analysis for Feature Prioritisation & Pricing"
description: "Plan a conjoint study for feature and pricing tradeoffs. Define attributes, design choice tasks and interpret results in relation to the sample and study assumptions."
pubDate: 2026-09-08
updatedDate: 2026-09-13T14:51:29Z
readingTime: 11
slug: "conjoint-analysis-feature-prioritisation-pricing"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "Choice-based conjoint survey card comparing SaaS feature and price profiles for feature prioritisation"
tags:
  - "opportunity prioritisation (bridging pricing research for B2B SaaS)"
  - "conjoint analysis pricing"
  - "choice-based conjoint study"
  - "conjoint analysis vs MaxDiff"
  - "how to run a conjoint analysis"
hub: "product-discovery"
---
## What conjoint analysis actually measures (and what it doesn't)

Conjoint analysis is a trade-off method. You show respondents realistic product profiles — combinations of features, tiers, and prices — and ask which one they'd buy. It doesn't ask what matters to people. It watches what they give up when a choice forces the issue.

Stated-preference questions ("how important is X to you?") inflate everything, reliably, because respondents have no reason to say a feature doesn't matter. Revealed preference is different. Choose profile A over profile B when both cost something, and you get answers that hold up once the product ships.

From those choices, conjoint delivers two outputs: part-worth utilities, a preference score for each level of each attribute, and — built from those — willingness-to-pay and share-of-preference estimates for competing packages.

Set the decision frame before you design anything. Conjoint answers "which package, at which price, wins the most preference?" — not "which single feature do customers want most?" That's a different question, and it needs answering first. An [opportunity prioritisation workflow](https://blog.glasgow.works/blog/opportunity-prioritisation-product-research) should already have told you which candidate features and prices are worth testing.

## When conjoint beats MaxDiff, Van Westendorp, and Gabor-Granger

Match the method to the decision, not the other way round.

| Question | Method |
|---|---|
| Which features matter most, ranked? | MaxDiff |
| What price is acceptable for a fixed, known product? | Van Westendorp or Gabor-Granger |
| Which combination of features and price wins? | Conjoint |

[MaxDiff analysis for feature prioritisation](https://blog.glasgow.works/blog/maxdiff-analysis-feature-prioritisation) ranks importance across a long list of candidate features by forcing repeated best/worst choices. It's fast, robust, and cheap per respondent. What it can't do is model interaction — it won't tell you whether a feature is worth £10 or £30 a month, or whether demand collapses at a higher price. Use it as a screener to cut a 25-feature list to the 6–8 worth putting into a conjoint design.

Van Westendorp and Gabor-Granger answer a narrower question well: what should we charge for this one product, as it stands? Both are quick to field and easy to read. Reach for conjoint only when price and features move together — a new tier, a repackaged bundle, a competitive repositioning.

Here's a rule of thumb worth keeping. Don't reach for adaptive conjoint when a well-designed choice-based conjoint plus a MaxDiff screen gets you most of the value for a fraction of the effort. We've seen B2B SaaS teams commission a full conjoint study to check the price of a single existing plan — a job Van Westendorp would have closed in a week. Our guide to [pricing research for B2B SaaS](https://blog.glasgow.works/blog/pricing-research-b2b-saas) covers how to pick between these methods before you write a single survey question.

Once conjoint is the right call, here's how to run one end to end — from choosing attributes to reading the results without over-claiming.

## Step 1: Choose your attributes and levels

Attributes are the characteristics you're testing — feature set, support tier, price. Levels are the specific options within each: £29 / £49 / £99 for price, or Basic / Pro / Enterprise for tier.

Keep attributes independent. Say "priority support" appears both as a standalone attribute and buried inside a "premium tier" description. Now the two overlap in meaning, respondents can't reason about them separately, and the resulting utilities are biased in ways you can't easily correct for afterwards.

Watch for the number-of-levels effect. An attribute with six levels will look more important in the output than one with two levels, purely because it has more levels, not because it matters more. Balance level counts across attributes wherever you can. If one genuinely needs more — price usually does — account for that when you read the importance scores later.

For price and other measurable attributes, use five to seven levels, well spaced across a range that reflects real market prices. Pick levels that actually differentiate. Testing 60, 61, and 62 units is a wasted choice task, because no respondent's decision changes between them.

Don't start from a blank page. Use whatever foundational research you already have — qualitative interviews, a MaxDiff screen, a Van Westendorp range — to cut your candidate list before fielding. Studies with more than six or seven attributes ask too much of respondents and produce noisier, less stable utilities.

## Step 2: Pick the right conjoint type

Choice-based conjoint (CBC) is the default. Respondents see a set of profiles — say, three bundles at three prices — and pick the one they'd choose. It mirrors an actual buying decision, which is why it's the workhorse method for most feature-and-pricing studies.

Adaptive CBC (ACBC) adjusts each respondent's next task based on their previous answers. It suits studies with many attributes, or small B2B samples where you need more information per respondent because you can't recruit enough of them. It's also heavier to build and program, so reserve it for cases standard CBC genuinely can't handle.

Full-profile, ratings-based conjoint — where respondents rate single profiles rather than choosing between sets — is largely a legacy method now. Worth knowing about, rarely the right choice for a live commercial decision.

Match the method to your sample reality. B2B research runs on smaller, harder-to-recruit samples, so simplify the design or move to adaptive rather than forcing a consumer-scale CBC onto 80 respondents.

Whichever type you choose, include a "None" option in every task. Without it, you force every respondent to pick something, which systematically overstates demand for all your profiles.

## Step 3: Field it — sample size, choice tasks, and recruiting

Consumer conjoint studies typically want 300–500 respondents for stable segment-level utilities. B2B studies rarely get near that. A sample of around 100 is common, which means shrinking the number of attributes and levels to match, rather than pretending the statistics work the same way at a tenth of the sample size.

Sample size and task count trade off against each other. More respondents reduce sampling error; more choice tasks per respondent reduce measurement error. In practice, 8–15 tasks per respondent is the usable range — fewer and you don't have enough information, more and fatigue sets in, choices become inconsistent, and data quality drops regardless of how careful your design was.

Recruit the people who actually decide, not just the people who use the product. In B2B, that means going beyond end users to the buying committee — the person who signs the invoice often values different things to the person using the dashboard daily. Take time to [map your B2B buying committee](https://blog.glasgow.works/blog/b2b-buyer-research-methods) before recruiting, so your sample reflects who approves the purchase, not just who's easiest to reach.

Pilot the survey with five to ten respondents before full field. A pilot catches confusing wording, unrealistic profile combinations, and tasks that take too long — problems far cheaper to fix before you've fielded 300 completes than after.

## Step 4: Interpret the results without over-claiming

Part-worth utilities give you a preference score for each level within an attribute. A higher utility means that level is more preferred — but only within the same attribute. Comparing a utility for "£49/month" against one for "priority support" is meaningless. They're on different scales and answer different questions.

Attribute importance comes from taking the range within each attribute (the highest utility minus the lowest) and scaling those ranges to sum to 100% across all attributes. That's your roadmap prioritisation tool. It tells you which attribute, if changed, would move the most preference — not which single feature people say they like.

Willingness-to-pay comes from translating the utility gap between price levels into currency terms, then reading off how much utility a feature level would need to match that gap. It's a modelled estimate, built on assumptions about the price attribute's shape. Treat it as a range to test against a market simulator, not a number to put in a contract.

The market simulator is where conjoint earns its keep for pricing decisions. Build competing packages — yours against a status quo, or against a plausible competitor response — and it estimates share of preference, and from that, revenue and cannibalisation between your own tiers.

Run all of this at the segment level before you commit to a single price. Different buyer segments — by company size, use case, or role — routinely value the same feature very differently, and a study that pools everyone into one utility set will average away exactly the pricing insight you're looking for. If segments haven't been mapped, plan to [run a customer segmentation study](https://blog.glasgow.works/blog/how-to-run-a-customer-segmentation-research-study) alongside or ahead of the conjoint fieldwork.

## A worked example: a B2B SaaS packaging and pricing call

A pattern recurs across the B2B SaaS pricing work we do. A client has a growing backlog of candidate features from sales conversations and customer requests, a hunch that one of them justifies a new, higher-priced tier, and no reliable way to test that hunch before launch.

The sequence that works is the one this guide has argued for throughout. Screen the backlog with MaxDiff first, cutting a long list to the handful of features worth putting into a pricing model. Build a choice-based conjoint design around those attributes plus price, and field it to the buying committee — not just end users — at a sample size that matches B2B recruiting realities rather than consumer-scale ambitions.

Here's the finding that shows up more often than teams expect. A feature stakeholders treat as the headline reason to buy — frequently something compliance- or security-related — tests as a "must-have" in conversation but carries a low willingness-to-pay utility on its own. Buyers expect it as a baseline; they won't pay extra for it specifically. Running that split through the market simulator usually reshapes the bundle: the tier gets priced on what the full feature set can command together, not on the one feature everyone assumed was doing the work.

## Common conjoint mistakes to avoid

**Skipping foundational research.** Conjoint can't tell you which attributes to include — it only tests trade-offs between ones you've already chosen. Skip the interviews or MaxDiff screen and you get a precise answer to the wrong question.

**Overloading attributes for the sample size.** A 100-respondent B2B study with nine attributes and five levels each produces unstable utilities. Cut the list before fielding, not after seeing noisy output.

**Reaching for adaptive designs by default.** Standard CBC handles most feature-and-pricing decisions; save adaptive conjoint for cases where attribute count or sample constraints genuinely demand it.

**Dropping the "None" option.** Every task without one forces a choice that wouldn't happen in the real market, inflating demand for every profile tested.

**Comparing utilities across attributes, or quoting willingness-to-pay as a fixed number.** Utilities only compare within an attribute; willingness-to-pay is a range to test through the market simulator, not a number for a pricing sheet.

## FAQ

**Conjoint analysis vs MaxDiff — which should I use?**
MaxDiff ranks importance across many features before price is involved. Conjoint models trade-offs between features and price together. In sequence: MaxDiff screens the list, conjoint prices what survives.

**How many respondents do I need for a conjoint study?**
Consumer studies aim for 300–500; B2B studies often run closer to 100. With a smaller sample, reduce attributes and levels, and weigh sample size against choice tasks per respondent rather than treating them separately.

**Can conjoint analysis tell me exactly what to charge?**
No — it gives a modelled willingness-to-pay and share-of-preference across price levels, tested through a market simulator. For one fixed product, Van Westendorp or Gabor-Granger is faster.

**What's the difference between attributes and levels?**
Attributes are the characteristics tested — price, support tier, feature set. Levels are the options within each, such as £29 / £49 / £99 for price. Keep attributes independent and levels genuinely distinct.

Start smaller than feels comfortable: screen the feature list with MaxDiff, cut it to the handful that survive, then build the conjoint design around what's left. That discipline is what separates sound conjoint analysis from an expensive guess.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

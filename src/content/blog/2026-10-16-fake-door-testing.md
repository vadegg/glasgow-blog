---
title: "Fake Door Testing: Validate Demand Before You Build"
description: "Learn how to run an ethical fake door test, measure qualified demand beyond clicks and make a defensible build, refine or stop decision."
pubDate: 2026-10-16
updatedDate: 2026-10-16
readingTime: 9
slug: "fake-door-testing"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
hub: "product-discovery"
draft: false
heroImageAlt: "Fake door testing funnel from eligible users through clicks and qualified demand to a build, refine or stop decision"
tags:
  - "experiment design"
  - "fake door test"
  - "painted door test"
  - "how to run a fake door test"
  - "ethical fake door testing"
---
## What is fake door testing—and what can it prove?

Fake door testing puts an entry point for an unavailable feature or product in front of an eligible audience, then observes who tries to use it. It is also called a painted door test.

The sequence is simple: an eligible person sees the door, clicks or selects it, sees an immediate disclosure that the capability is unavailable, and may choose a further action such as joining a research list. This lets you [test assumptions before building](https://blog.glasgow.works/blog/product-discovery/) when the assumption is about demand.

A fake door test measures intent, not satisfaction or actual adoption, as [Amplitude explains](https://www.amplitude.com/explore/experiment/fake-door-testing). It cannot by itself establish usability, retention, willingness to pay, feasibility or product-market fit.

Count unique eligible users or accounts, not impressions. Repeatedly showing one person a button must not inflate apparent demand.

## When a fake door is the right experiment

Use fake door testing when your main uncertainty is whether a defined audience will attempt a clear action in a realistic context. It can suit understandable additions such as integrations, workflow actions, discrete add-ons and early-access offers.

Avoid using it where an unavailable action could disrupt an important task or where the interaction carries high trust, safety, payment, security or emergency implications. Choose a method that produces the strongest evidence for the risk you need to reduce within your constraints, as [Strategyzer advises](https://www.strategyzer.com/library/how-to-select-the-next-best-test-from-the-experiment-library).

| Method | Best question | What it cannot establish alone |
|---|---|---|
| Fake door | Will people show intent in context? | Usability or repeated use |
| [Concept testing](https://blog.glasgow.works/blog/concept-testing/) | Do people understand and value the proposition? | Behaviour in a live workflow |
| Clickable prototype | Can people complete the task? | Market demand |
| Concierge or Wizard of Oz test | Will people use a delivered service? | Scalable delivery |

An external landing-page door tests several things at once: audience, channel, message and offer. An in-product door tests interest from existing users in a specific workflow. Record which of those questions your test is intended to answer.

## Plan the test with a Fake Door Decision Worksheet

Complete this worksheet before building the door. It turns a proposed feature into a launch-ready experiment and prevents the team from treating clicks as a decision by themselves. Government Digital Service guidance recommends deciding the hypothesis, audience and primary metric before launch, then checking that measurement works as intended ([GDS](https://docs.data-community.publishing.service.gov.uk/analysis/abmv/)).

### Fake Door Decision Worksheet

| Field | Complete before launch |
|---|---|
| Decision to inform | What decision will this evidence change? |
| Risky assumption | What must be true to justify the next test? |
| Eligible audience and unit | Who can see it? Is the unit a user, buying role or account? |
| Triggering context | During which task does the need arise? |
| Door and promised outcome | What will the label say, and what narrow outcome does it describe? |
| Exposure event | What proves an eligible person had a genuine chance to see it? |
| Primary action | What counts as initial intent? |
| Deeper commitment | What voluntary action signals stronger interest? |
| Primary metric and threshold | Which rate determines the decision, and what is the pre-set threshold? |
| Guardrails | What signs of confusion, harm or loss of trust stop the test? |
| Test window and stopping rule | When will you assess the result or stop exposure? |
| Next action | What happens after a pass, fail or inconclusive result? |

Use this hypothesis template:

> Among **[eligible segment]** in **[context]**, at least **[threshold]** will take **[qualified action]** because **[assumption]**.

Define eligibility before launch. In B2B work, account-level evidence may be more useful than a total employee click count. Pick one primary metric and set its threshold in advance. Base it on an internal baseline, a control, business economics or the minimum evidence needed to justify the next step. There is no universal good conversion rate for a fake door test.

Run an ethics and privacy check. Ask whether the door implies immediate availability, price, performance or a delivery date; whether failure interrupts a task; and whether you can explain the test honestly at once. The ICO’s UK GDPR guidance covers principles including transparency, purpose limitation, data minimisation and storage limitation ([ICO](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/)). Collect only what is needed for the stated follow-up and set a retention plan. Obtain legal and privacy review appropriate to your market.

Treat the worksheet as one part of how you [design a product discovery experiment](https://blog.glasgow.works/blog/experiment-design-product-discovery/).

## Build the door and an honest reveal

Put the entry point where the intended need occurs. Its wording should be specific enough that a click has an interpretable meaning.

| Avoid | Use instead |
|---|---|
| “Generate your scheduled report” | “Interested in scheduled reports?” |
| “Available now: board packs” | “Help us assess demand for board-report scheduling” |

On click, disclose the current status immediately. Explain why you are seeking feedback, offer an optional research list or interview, and provide a route back to the original task.

> Scheduled board reports are not available yet. We are assessing whether to develop them. You can join the research list or return to your board.

Do not invent launch dates, capabilities or outcomes. For US-facing activity, the FTC says advertisers need evidence for claims before an advertisement runs ([FTC](https://www.ftc.gov/business-guidance/resources/advertising-faqs-guide-small-business)). UK CAP guidance says marketers should provide appropriate information if expected demand cannot be met ([CAP](https://www.asa.org.uk/advice-online/promotional-marketing-availability.html)).

Limit repeat exposure, suppress people who have already seen the reveal, and keep a way to stop the test if errors or complaints arise. Before launch, check audience assignment, rendering, reveal behaviour and each analytics event. The same exercise can help [validate the value proposition and message](https://blog.glasgow.works/blog/message-testing-value-propositions/).

## Measure qualified demand, not clicks alone

Use a funnel that distinguishes curiosity from voluntary commitment:

1. Unique eligible exposures
2. Unique door clickers
3. Reveal viewers
4. Voluntary opt-ins
5. Interview acceptances
6. Later beta activations, where relevant

Calculate rates consistently:

- Click-through rate = unique clickers ÷ unique eligible exposures
- Opt-in rate = opt-ins ÷ unique clickers
- Qualified-intent rate = qualified opt-ins ÷ unique eligible exposures

For B2B tests, report user-level and account-level rates. Several people from one account may represent one buying opportunity, not several.

Preselect segments that relate to the hypothesis, such as role, account tier, lifecycle stage or workflow context. Treat small subgroup results as directional. Track guardrails alongside demand: repeat failed attempts, exits after the reveal, support contacts, complaints and abandonment of the original task.

GDS recommends using more than digital analytics to form a fuller picture ([GDS](https://www.gov.uk/service-manual/measuring-success/how-to-set-performance-metrics-for-your-service)). Compare the result with the precommitted threshold and any relevant baseline or control, then classify it as pass, fail or inconclusive. Do not change the target after seeing the result.

## Worked example: from proposed feature to decision

This is a hypothetical B2B SaaS example. Every figure is illustrative and is not a Glasgow Research result.

| Worksheet field | Hypothetical entry |
|---|---|
| Decision | Whether to fund a narrower delivery test for scheduled board reports |
| Assumption | Operations leads need recurring board-ready reports |
| Eligible audience | Admin and operations users at accounts with three or more active boards |
| Context | Viewing a board’s export menu |
| Door and reveal | “Interested in scheduled reports?” followed by an immediate unavailable-status reveal |
| Primary metric | Account-level qualified-intent rate |
| Threshold | At least 8% of exposed accounts opt in |
| Guardrails | Stop for complaints, material task abandonment, or repeat failed attempts above 5% of clickers |
| Next action on pass | Interviews, then a concierge delivery test |

In this hypothetical two-week test, 400 eligible users from 120 accounts saw the door. Eighty users from 24 accounts clicked. Thirty users from 14 accounts opted in, and 12 users from eight accounts accepted an interview invitation. Two repeat failed attempts were recorded; no complaints or support contacts were recorded.

- User click-through rate = 80 ÷ 400 = **20%**
- User opt-in rate = 30 ÷ 80 = **37.5%**
- User qualified-intent rate = 30 ÷ 400 = **7.5%**
- Account click rate = 24 ÷ 120 = **20%**
- Account qualified-intent rate = 14 ÷ 120 = **11.7%**

The illustrative account-level result exceeds the pre-set 8% threshold. It supports a next delivery test, not a full build.

| Clicks | Commitment | Interpretation | Predetermined next action |
|---|---|---|---|
| High | High | Demand warrants delivery evidence | Concierge test or narrow prototype |
| High | Low | Curiosity may exceed value | Investigate expectations and proposition |
| Low | High | The offer may be hard to find or narrowly relevant | Inspect discoverability and segment fit |
| Low | Low | Evidence of demand is weak | Deprioritise or revisit the problem |

Use the result to [choose the next product research method](https://blog.glasgow.works/blog/ai-product-evals-vs-user-testing/).

## Debrief users and choose the next step

Contact willing participants promptly. Ask what they expected behind the door, what prompted the click, how they solve the task now and what consequence the unmet need creates. Do not imply that clicking proves they want the proposed solution.

Triangulate behaviour, interview evidence and guardrails. Record one decision: run the next test, refine and retest, deprioritise or remain inconclusive. Remove or relabel the door when the test ends, and close the loop with participants where you have invited follow-up.

## Frequently asked questions

### Is fake door testing ethical?

It can be ethical when the claim is not materially misleading, unavailable status is disclosed immediately, the person’s task is not harmed and personal data is collected transparently and minimally. Seek market-appropriate privacy and legal review.

### What is the difference between a fake door test and a smoke test?

Terminology varies. A fake or painted door commonly tests demand for a discrete feature in context. A smoke test often uses an external offer or landing page to test a broader proposition. Define the term and scope in the experiment record.

### What is a good conversion rate for a fake door test?

There is no defensible universal rate. Set a threshold before launch using a comparable baseline or control, audience quality, expected business value and the cost of the next evidence step.

### How long should a fake door test run?

Run until the precommitted stopping condition is reached: enough eligible users or accounts across a representative cycle, a fixed end date, or a guardrail breach. Do not stop only because an early result looks favourable.

### Does a successful fake door test mean we should build the feature?

No. It supports a limited claim about intent in a defined context. Test expectations, usability, feasibility, repeated use and commercial value through follow-up research or a thinner delivery experiment.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://blog.glasgow.works/services/).

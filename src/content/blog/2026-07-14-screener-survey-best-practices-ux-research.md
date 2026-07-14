---
title: "Screener Survey Best Practices for UX Research"
description: "Write screeners that recruit genuinely qualified participants — not answer-hunters. Step-by-step guidance on question sequencing, disqualification logic, and"
pubDate: 2026-07-14
updatedDate: 2026-07-14
readingTime: 13
slug: "screener-survey-best-practices-ux-research"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "A UX researcher reviewing a printed screener survey with branching logic and highlighted disqualification criteria"
tags:
  - "participant recruitment & panels"
  - "how to write a screener survey"
  - "participant screening criteria UX"
  - "screener questions for user research"
  - "how to screen research participants"
---
<!-- gr:toc -->

## On this page

- [What a Screener Survey Actually Does (and Doesn't Do)](#what-a-screener-survey-actually-does-and-doesnt-do)
- [Define Your Participant Criteria Before Writing a Single Question](#define-your-participant-criteria-before-writing-a-single-question)
- [Question Sequencing: Order That Hides Your Intent](#question-sequencing-order-that-hides-your-intent)
- [Writing Questions That Don't Telegraph the 'Right' Answer](#writing-questions-that-dont-telegraph-the-right-answer)
- [Building Disqualification Logic Without Alienating Respondents](#building-disqualification-logic-without-alienating-respondents)
- [A Real Screener in Practice: What Changed and Why](#a-real-screener-in-practice-what-changed-and-why)
- [Common Screener Mistakes and How to Fix Them](#common-screener-mistakes-and-how-to-fix-them)
- [Screener Length, Format, and Delivery Checklist](#screener-length-format-and-delivery-checklist)
- [Frequently Asked Questions](#frequently-asked-questions)

<!-- gr:disclosure -->
> Disclosure: this article may mention paid tools. We receive no compensation for any mention; recommendations are based on hands-on use.

## What a Screener Survey Actually Does (and Doesn't Do)

A screener has one job: decide whether a candidate fits your study. It is not a recruitment tool. Not a consent form. Not a way to build a mailing list.

Confusing a screener with these adjacent documents is one of the most common causes of poor sessions. A consent form is signed by people you have already selected; it covers data use and participant rights. An intake form gathers logistics from confirmed participants. A study brief tells participants what to expect on the day. None of these belong inside your screener.

Length matters more than most teams expect. Screeners under five questions almost never filter adequately — they pass too many people who sound right on paper but waste session time. At the other end, screeners that feel like full surveys drive abandonment before you have even reached the disqualifying questions.

Tone is distinct, too. Survey norms — long scales, open-ended commentary boxes, reflective questions — do not translate. Keep the language task-focused, the questions closed or semi-closed, and the cognitive load low. Candidates should not need to think hard to complete a screener; they should just be answering honestly about their own behaviour.

Before you write a single question, read our guide to [how to recruit participants for user research](https://blog.glasgow.works/blog/how-to-recruit-participants-for-user-research) to see where the screener sits in the broader recruitment workflow.

---

## Define Your Participant Criteria Before Writing a Single Question

The most reliable screeners are written last — after you have mapped your criteria in full. Start with your research question, not the screener tool.

Work through two lists. First: must-have attributes — the characteristics without which a participant cannot answer your research question. Second: nice-to-have attributes — things that would enrich the dataset but are not essential. Keep the lists separate. Mixing them produces screeners that are either too tight (you never fill your quota) or too loose (anyone can pass).

Once your criteria are listed, map each one to a question type:

- **Behaviour** — what the participant does, not what they think about doing
- **Frequency** — how often they do it, expressed as a concrete scale
- **Role or context** — job function, industry, or usage environment
- **Situation** — the circumstances under which they encounter the problem you are studying

Set your quotas per segment before you write a single question. If you need six participants who use a product daily and four who use it weekly, that quota shapes how strict your frequency criteria need to be. Knowing the number first stops you writing criteria that are accidentally impossible to fill.

The method also shifts the profile you need. A usability test needs participants who can perform specific tasks; a depth interview needs people who can articulate experience. Different cognitive demands, and your screener should reflect that. See our notes on [usability testing vs user interviews](https://blog.glasgow.works/blog/usability-testing-vs-user-interviews) and use the [user research plan template](https://blog.glasgow.works/blog/user-research-plan-template) to document criteria before the screener is drafted.

---

## Question Sequencing: Order That Hides Your Intent

Sequence does as much work as the questions themselves. Get it wrong and you create demand characteristics — respondents work out what you are looking for and answer accordingly.

Open with broad, neutral context questions that do not signal the study's focus. If you are researching a banking app, do not open with "Do you use banking apps?" Open with a question about which financial tools the respondent uses across a wide list that includes banking apps alongside several irrelevant options. The goal is true behavioural data before the respondent has formed a theory about what you want to hear.

Bury your most discriminating criteria in the middle of the flow. By question four or five, respondents have committed enough time to answer honestly, but have not yet been primed by earlier questions to perform.

The cognitive principle is well-established: questions that appear early carry primacy bias, and any question obviously linked to the study topic triggers social desirability. Both effects inflate "yes" rates on questions that should be filtering people out.

Use decoy answer options throughout. If one option qualifies and the others disqualify, that is obvious to any alert respondent. Add plausible options that are neither qualifying nor disqualifying. On a frequency question, include ranges above and below your qualifying range.

Move logistics questions — availability, timezone, device type — to the end of the flow. Asking about availability before you know whether someone qualifies wastes everyone's time, and it signals to respondents that they are close to being selected.

For complementary guidance on question construction, see our broader [survey design best practices for UX research](https://blog.glasgow.works/blog/survey-design-best-practices-ux).

---

## Writing Questions That Don't Telegraph the 'Right' Answer

Yes/no questions are the weakest format for behavioural screening. Replace them with frequency scales wherever you are testing a behavioural criterion.

**Before:** "Do you manage your own finances online?"
**After:** "How often do you log into a financial account online? — Never / Less than once a month / Once or twice a month / Weekly / Daily or more"

This gives you real data rather than a performative confirmation. It also lets you set precise frequency thresholds instead of accepting anyone who can answer "yes."

For questions covering a range of possible activities or products, use "select all that apply" grids with randomised option order. Randomisation prevents position bias; a comprehensive list stops respondents deducing the qualifying answer by elimination.

Avoid leading language. "Do you struggle with managing multiple subscriptions?" signals what the study is probably about and invites sympathy responses. "How would you describe your experience managing multiple subscriptions?" is neutral and produces usable data.

Include plausible disqualifying options in every list. If your product is used by a specific professional group, list several adjacent groups in the occupation question so non-fitting respondents can self-sort naturally rather than feel forced to stretch the truth.

For expertise, ask about concrete tasks performed rather than self-rated skill. Self-ratings are unreliable and socially loaded.

**Before:** "How would you rate your experience with data analysis tools — Beginner / Intermediate / Advanced?"
**After:** "Which of the following have you done in the past three months? — Created a chart from raw data / Written a formula or function / Built a dashboard / Combined data from two or more sources / None of the above"

The task list tells you far more than a self-assessment, and is much harder to game without real experience.

---

## Building Disqualification Logic Without Alienating Respondents

Disqualification logic splits into two types, and they need different treatment.

**Hard disqualifiers** rule someone out immediately — they do not own the device being tested, they work in a field that creates bias, or they have never performed the behaviour under study. Place these early enough to save the respondent's time, but not so early that the screening criteria become obvious.

**Soft disqualifiers** reduce fit rather than eliminate it. Someone who uses the product monthly rather than weekly may still be valuable as a secondary segment. Route soft disqualifiers to a waitlist rather than a dead end. That preserves goodwill and gives you a reserve pool if primary recruitment falls short.

Write your disqualification end screen carefully. "Thank you, you do not qualify for this study" tells respondents exactly which criterion they failed, which trains future answer-hunters. Use neutral, non-revealing language: "Thank you for your time. We have reached capacity for this round of research, but we may be in touch for future studies." Honest without being informative.

Test your branching logic before launch. Give a colleague a deliberately wrong profile — someone who should fail at question three — and have them complete the screener. If they pass through to the confirmation screen, your logic has a gap.

For studies where inclusivity across ability and context matters, review our guidance on [inclusive UX research methods](https://blog.glasgow.works/blog/inclusive-ux-research-methods) to make sure your disqualification criteria are not inadvertently excluding underrepresented groups.

---

## A Real Screener in Practice: What Changed and Why

We were asked to support recruitment for a study involving daily users of a SaaS productivity tool — specifically people who managed workflows on behalf of others, not solo users. The original screener the team had been using ran a pass rate of around 68%, but sessions kept getting flagged as low quality: participants could not perform the core tasks, and their experience with the product turned out to be peripheral rather than central.

Three structural problems stood out. First, the screener opened by asking whether respondents used the product — a direct yes/no that anyone motivated by the incentive would answer affirmatively. Second, the only behavioural question asked respondents to self-rate their confidence with the tool. Third, there were no frequency thresholds; any level of use counted as qualifying.

We rebuilt it with the following changes:

- Moved the product name out of the opening question and into a broader list of tools, asking which the respondent used regularly
- Replaced the self-rating question with a task inventory — a list of specific actions, only some of which were relevant to the study, with instructions to select all they had done in the past fortnight
- Added a frequency question with a minimum threshold of at least weekly use
- Inserted a decoy occupation option to filter out UX practitioners before the confirmation screen

The pass rate dropped to approximately 29%. Session quality — measured by whether participants could complete the core task scenarios without significant facilitation prompts — improved substantially in the next round. The lesson is not that a low pass rate is inherently good; it is that a pass rate misaligned with session quality tells you the screener is doing no useful work.

Pair a well-constructed screener with a well-constructed discussion guide — see our post on [how to write a discussion guide for user interviews](https://blog.glasgow.works/blog/how-to-write-discussion-guide-user-interviews).

---

## Common Screener Mistakes and How to Fix Them

**Mistake 1: Screening for attitudes instead of behaviours**

"Do you care about data privacy?" tells you nothing. Ask instead: "Which of the following have you done in the past year?" and list concrete privacy-related actions — reviewing app permissions, using a VPN, reading a terms of service document.

✓ Replace attitude questions with task or behaviour inventories.

**Mistake 2: Screener is too short**

Fewer than five questions rarely filters adequately. A short screener may feel respectful of respondents' time, but it passes people who do not fit and wastes far more time in the sessions themselves.

✓ Aim for 8–12 questions for most study types.

**Mistake 3: Screener is too long**

Beyond 15 questions, completion rates fall. Respondents who are genuinely qualified drop out, and those who push through may be systematically different from those who do not.

✓ Cut any question that does not map directly to a must-have or nice-to-have criterion.

**Mistake 4: No pilot**

Screener logic errors, ambiguous question wording, and broken branching all surface in the first few completions. By then, you may have already disqualified suitable participants or passed unsuitable ones.

✓ Run 3–5 completions with colleagues or trusted contacts before distributing widely.

**Mistake 5: Using demographics as a proxy for behaviour**

Age, gender, and location correlate loosely with behaviour at best. Screening for a 25–35-year-old urban professional tells you almost nothing about whether they are the user you need.

✓ Screen directly for the behaviour, not the demographic wrapper around it.

**Mistake 6: Forgetting to filter out professional research participants**

Panel respondents who complete multiple paid studies per year learn to pass screeners. For generalist studies, include a direct question about paid research participation frequency.

✓ Hard-disqualify anyone who has completed more than three or four paid research sessions in the past six months, and separately screen out anyone working in UX, market research, or product design.

---

## Screener Length, Format, and Delivery Checklist

**Recommended length by study type:**

- Usability test with narrow task criteria: 10–13 questions
- Depth interview: 8–11 questions
- Diary study: 6–9 questions (longitudinal commitment itself acts as a natural filter)

**Format choices:**

- Typeform-style, one-question-per-page works well for mobile respondents and reduces the visibility of later questions, which supports sequencing intent
- All-on-one-page formats suit panel tools where branching logic is handled natively and respondents expect a more form-like experience
- Panel tool native screeners are efficient but may limit formatting options — check whether decoy options and randomised answer lists are supported

**Delivery checklist:**

- [ ] Display estimated completion time upfront (typically "2–3 minutes") — this alone reduces abandonment
- [ ] Test the screener on a mobile device before distributing; a significant proportion of respondents will complete on a phone
- [ ] Confirm branching logic routes correctly for every possible disqualifying answer combination
- [ ] Verify the end screens — both the qualifying confirmation and the non-qualifying message — read correctly and do not reveal criteria

For guidance on how the screener connects to the rest of your recruitment process, see our post on [remote usability testing best practices](https://blog.glasgow.works/blog/remote-usability-testing-best-practices).

---

## Frequently Asked Questions

**How many questions should a UX research screener have?**

Aim for 8–12 questions for most studies. Fewer than five rarely filters adequately; more than 15 risks abandonment before respondents reach your key criteria. Usability tests with narrow task requirements may need slightly more; diary studies often need fewer because the longitudinal time commitment acts as a self-filter.

**Should I tell participants what the study is about in the screener?**

Give only enough context to justify the time commitment — a broad topic area and an estimated session length. Revealing the specific focus or product category before qualification creates demand characteristics and inflates pass rates from respondents who do not genuinely fit.

**How do I stop professional research participants gaming my screener?**

Include a direct question asking whether the respondent has taken part in paid research in the past six months, and a separate question asking whether they work in UX, market research, or product design. Hard-disqualify anyone who completes more than three or four paid studies per year for generalist studies.

**What is the difference between a screener survey and a consent form?**

A screener determines eligibility before a participant is selected; a consent form is completed by already-selected participants before the session begins. The two documents serve different purposes, address different audiences, and should never be combined into a single form.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Screener Survey Best Practices for UX Research",
  "description": "Write screeners that recruit genuinely qualified participants — not answer-hunters. Step-by-step guidance on question sequencing, disqualification logic, and",
  "datePublished": "2026-07-14",
  "dateModified": "2026-07-14",
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
    "@id": "https://blog.glasgow.works/blog/screener-survey-best-practices-ux-research"
  },
  "keywords": "screener survey best practices UX research, how to write a screener survey, participant screening criteria UX, screener questions for user research, how to screen research participants, UX research screener template"
}
</script>

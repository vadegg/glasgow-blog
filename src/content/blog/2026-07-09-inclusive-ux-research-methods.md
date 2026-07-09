---
title: "Inclusive UX Research Methods: Stop Excluding Participants"
description: "Learn how to adapt recruitment, session design, and analysis so your UX research studies don't structurally exclude disabled, neurodivergent, or underrepresente"
pubDate: 2026-07-09
updatedDate: 2026-07-09
readingTime: 13
slug: "inclusive-ux-research-methods"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "UX researcher conducting a remote usability session with a participant using screen-reader assistive technology on a laptop"
tags:
  - "UX Research Methods"
  - "accessibility in user research"
  - "recruiting disabled participants for UX research"
  - "inclusive research design"
  - "researching with assistive technology users"
---
<!-- gr:toc -->

## On this page

- [Why Most UX Research Studies Have an Exclusion Problem](#why-most-ux-research-studies-have-an-exclusion-problem)
- [Inclusive recruitment: widening the participant pool deliberately](#inclusive-recruitment-widening-the-participant-pool-deliberately)
- [Session design: adapting format, timing, and materials](#session-design-adapting-format-timing-and-materials)
- [Discussion guides and tasks: removing hidden barriers in your script](#discussion-guides-and-tasks-removing-hidden-barriers-in-your-script)
- [Analysis and synthesis: avoiding bias after the sessions](#analysis-and-synthesis-avoiding-bias-after-the-sessions)
- [Building inclusion into research operations, not just individual studies](#building-inclusion-into-research-operations-not-just-individual-studies)
- [Frequently asked questions](#frequently-asked-questions)

## Why Most UX Research Studies Have an Exclusion Problem

Your study design probably excludes disabled participants before a single session begins. That is not an accusation — it is a structural fact about how most screeners, platforms, and session formats are built.

Default screening criteria are the first culprit. A question like "rate your comfort with technology on a scale of 1–5, where participants scoring below 3 are ineligible" sounds neutral. In practice, it filters out many people who use assistive technology (AT) — not because they cannot use technology, but because their relationship with it does not map onto that scale. Arbitrary literacy thresholds and requirements to use a specific browser or device do the same work.

The scale matters. Around one in five people in the UK have a disability. Neurodivergent people — those with dyslexia, ADHD, autism, and related conditions — make up a further substantial portion of the population. Studies that structurally exclude these groups produce findings that do not generalise to the real user base of almost any product.

This post works through three layers where exclusion typically lives: **recruitment**, **session design**, and **analysis**. Each layer has specific, fixable problems. None of the fixes require a research budget most teams do not have.

For a broader comparison of methods and where inclusion considerations apply to each, see our [UX research methods comparison](https://blog.glasgow.works/blog/ux-research-methods-comparison).

---

## Inclusive recruitment: widening the participant pool deliberately

Recruitment is where the most damage is done — and where the biggest wins are available immediately.

**Start with a screener audit.** Read each question and ask: what kind of person does this quietly disqualify? Common offenders include open-ended questions that assume a high reading level, response formats requiring fine motor control (drag-ranking, for instance), and eligibility rules written for a mythical "average" user. Remove or rewrite them.

Then consider what you are *not* asking. Most screeners treat disability and neurodivergence as disqualifiers or, at best, ignore them entirely. Flip that: add explicit fields that identify AT users, people with relevant disabilities, or self-identified neurodivergent participants as *inclusion targets*. The goal is a participant mix that reflects the actual range of people who will use what you are testing.

**Diversify your sourcing channels.** Mainstream recruitment panels skew toward people who are already comfortable participating in research — which correlates with higher digital literacy, fewer access barriers, and demographic homogeneity. Supplement them with:

- Disability charities and advocacy organisations
- Neurodivergent community groups and forums
- Specialist panels focused on participants with access needs
- Social media communities organised around specific conditions

Each channel requires its own relationship. Build them before you need them urgently.

**Offer alternative screener formats.** A standard online screener is itself a filter. Provide a phone option for participants who find forms difficult, a plain-English version for those with cognitive or reading differences, and a large-print version where relevant. One-time setup cost. Every study benefits.

**Set a target mix, not a quota.** A quota — "we must have exactly two wheelchair users" — creates artificial pressure and can lead to poor-fit participants being included regardless of relevance. A target — "at least two participants who use assistive technology per study" — guides sourcing without distorting it.

**Communicate session adjustments upfront.** If you offer captioning, flexible timing, or alternative response formats, say so in the recruitment materials. Participants with access needs often self-screen out of studies because they assume the session will not work for them. Explicit information about accommodations lets them make an accurate decision.

For more on the mechanics of participant sourcing, see our guide on [how to recruit participants for user research](https://blog.glasgow.works/blog/how-to-recruit-participants-for-user-research).

---

## Session design: adapting format, timing, and materials

The session itself contains its own structural barriers. Most adaptations that help participants with access needs also improve sessions for everyone.

**Offer modality choice.** The default of a 60-minute video call with screen sharing is one option, not the only option. Consider:

- **Phone calls** for participants who find video fatiguing or who have bandwidth constraints
- **Asynchronous video diaries** for participants whose energy or pain levels vary unpredictably
- **Written response tasks** for participants who express themselves more clearly in text than speech

Remote sessions generally reduce access barriers compared to in-person — no travel, no unfamiliar sensory environments. They introduce platform barriers instead: not all video tools work well with screen readers, and auto-generated captions vary wildly in accuracy.

**Audit your tech stack before recruiting.** Confirm that your chosen video platform supports accurate captions. Check whether your prototype tool is screen-reader compatible. If it is not, that is a finding about the product — not a reason to exclude AT users from the study. Discovering a prototype's screen-reader incompatibility during a session is avoidable; catching it during recruitment review is better.

**Build in timing flexibility.** Shorter sessions with explicit break offers, or studies split across two shorter calls, reduce the impact on participants with fatigue-related conditions, chronic pain, or cognitive load differences. Fifty minutes of usable data from a comfortable participant beats seventy minutes that trails off into exhaustion.

**Prepare materials in advance for AT users.** Send stimuli — prototypes, concept boards, task descriptions — ahead of the session. Screen-reader users often need time to orient to an unfamiliar interface before they can engage meaningfully with the research questions. Handing a participant a new prototype mid-session creates a test of orientation speed, not the behaviours you care about.

In a usability study we ran for a digital service handling complex multi-step transactions, one participant who used a screen reader with keyboard-only navigation was sent the prototype link 24 hours early. During the session, they moved through the tasks fluidly enough to articulate exactly where the navigation logic broke down — specific, actionable feedback that would have been obscured if they had spent the session getting oriented. Participants who were not given advance access produced noticeably less granular findings on the same tasks.

**Observe the participant's own assistive technology.** Never ask a participant to switch to an unfamiliar setup so the session works better for you. Their AT is part of the context you are researching. A screen-reader user who has spent years configuring their setup will behave differently on an unfamiliar tool — and that difference tells you nothing useful about your product.

**Adjust moderator style for neurodivergent participants.** Slower pacing, explicit check-ins ("I am going to move on now — does that work for you?"), and plain, literal language reduce the cognitive load of interpreting the session itself. Avoid idioms and vague questions like "what is your gut reaction?" — figurative language is not processed uniformly.

For a comparison of when usability testing versus interviews is the right choice — which affects which adaptations apply — see [usability testing vs user interviews](https://blog.glasgow.works/blog/usability-testing-vs-user-interviews).

---

## Discussion guides and tasks: removing hidden barriers in your script

A discussion guide that looks straightforward to you may contain multiple barriers for participants with different processing styles, motor differences, or literacy needs.

**Eliminate time-pressure tasks.** "Complete this as quickly as you can" penalises participants with motor or processing differences without measuring anything research-relevant for most studies. Speed and task completion are separate research questions. If task completion time genuinely matters for your study, name it explicitly as a distinct metric — do not bake urgency into the instruction as a default.

**Write to a plain-language standard.** Aim for Grade 8 readability or below on your task descriptions. Tools like Hemingway Editor give you a quick readability score. Long conditional sentences — "If you were trying to find the settings page, and you had not used the product before, what would you do first?" — create comprehension work before the task even starts. Split them.

**Offer verbal task description as an alternative to on-screen text.** Some participants find listening easier than reading; others prefer text. Offering both adds thirty seconds of preparation and removes a real barrier.

**Pilot with an AT user before the main study.** A pilot participant who uses assistive technology will surface problems with your script, your prototype, and your platform simultaneously. That is efficient, not burdensome — it is the same reason you run pilots at all.

Where your study includes a survey component, the same principles apply to questionnaire design. Our [survey design best practices for UX research](https://blog.glasgow.works/blog/survey-design-best-practices-ux) covers accessible question formats in detail.

---

## Analysis and synthesis: avoiding bias after the sessions

Inclusive recruitment and session design are undone if analysis reintroduces exclusion through the back door.

The most common failure is treating accessibility-related findings as edge cases. "One participant who used a screen reader had difficulty navigating the modal" gets noted in an appendix rather than the main findings. That difficulty is a design flaw — the modal fails to meet a standard that affects a meaningful portion of users. Quarantining it protects the product from scrutiny it deserves.

**Tag participant context, but do not let tags become the primary organising dimension.** In your analysis tool or affinity map, note relevant context (AT user, keyboard-only navigation, self-identified dyslexic) so you can interrogate patterns. Organise your themes around behaviours and needs first, then examine where experience diverged by context. Report structure should reflect that hierarchy.

**Report themes across the full sample first, then note divergence.** "Five of seven participants found the navigation structure confusing; for the two participants using screen readers, the confusion was compounded by unlabelled buttons" is accurate and actionable. It does not frame AT users as exceptional — it frames the unlabelled buttons as a problem.

**Reframe "exception" language.** Phrases like "one participant who had a disability found that..." locate the difficulty in the participant. Phrases like "the form's error messaging failed to surface clearly under keyboard-only navigation" locate it in the design. The second framing produces better recommendations.

**Recommendations should address root causes.** "Consider whether this product needs to serve disabled users" is not a recommendation. "Add visible focus states to all interactive elements, as their absence caused navigation failures for keyboard users" is.

**Note your inclusion approach in the methodology section.** Stakeholders who see "participants included two screen-reader users and one participant with a self-reported motor disability" understand the scope of the findings — and their limits. That signals rigour, not box-ticking.

Our guide on [how to write a UX research report that drives action](https://blog.glasgow.works/blog/how-to-write-a-ux-research-report) covers how to structure methodology sections that build stakeholder confidence.

---

## Building inclusion into research operations, not just individual studies

Inclusion implemented study-by-study is fragile — it depends on whoever is running that particular project remembering to do it. Building it into research operations makes it the default.

**Create a reusable inclusive screener template.** Store it in your research repository alongside your standard screener. It should include AT-use questions, plain-language alternatives, and disability and neurodivergence fields as standard. Teams can modify it for specific studies rather than starting from scratch.

**Maintain a standing list of community partners and specialist recruitment channels.** Building relationships with disability organisations and neurodivergent communities takes time. That investment does not pay off if you only activate the relationship when a study needs diverse participants urgently — organisations understandably deprioritise requests from teams they have never heard from before.

**Add an inclusion checklist to your study kick-off process.** At the point where a study is scoped and designed, a checklist prompt — has the screener been audited, have modality options been confirmed, has the tech stack been tested — catches problems before they become recruitment decisions.

**Consider contextual inquiry as a default for complex access needs.** Observing participants in their own environment, using their own tools and devices, removes most of the platform and setup barriers that other methods introduce. Often the most naturally inclusive method available. See our guide to [contextual inquiry: how to run it and what it tells you](https://blog.glasgow.works/blog/contextual-inquiry-user-research) for a practical walkthrough.

**Track inclusion metrics in your ops reporting.** The percentage of studies that included AT users, the percentage that included neurodivergent participants, the sourcing channels used — these figures make inclusion visible to research leads and stakeholders. What gets measured gets maintained.

---

## Frequently asked questions

**Do inclusive UX research studies cost significantly more to run?**

The marginal cost increase comes mainly from screener iteration and specialist panel fees. Specialist panels charge more per participant than mainstream panels, but you do not need to increase your total participant count — you are adjusting the mix, not expanding it. Most structural changes (plain-language scripts, flexible timing, caption-enabled platforms) are one-time setup costs that carry forward to every future study. The ongoing cost is lower than teams typically expect.

**How many participants with disabilities should I include in a usability study?**

There is no universal rule, but a practical starting point is to ensure that AT users or participants with relevant access needs make up a meaningful minority — not a token single participant. For a study of 5–8 people, aim for at least two participants whose experience is likely to surface accessibility barriers. Adjust that target based on what the product does and who it serves: a form-heavy financial service used by an older demographic warrants a higher proportion than a narrow internal tool with a controlled user base.

**What if a participant's assistive technology breaks or causes a session to fail?**

Treat it the same as any other technical failure: reschedule, pay the participant their full incentive regardless, and investigate whether your prototype or platform is the actual barrier. A session that fails because of AT incompatibility is itself a finding worth reporting — it tells you something real about how your product behaves in the conditions your users encounter. Document it in the methodology section rather than treating it as a lost session.

**Should I disclose to the rest of the team which participants have disabilities?**

No. Anonymise participant context in the same way you would any other sensitive demographic. Share relevant context — "P3 uses a screen reader and keyboard-only navigation" — only when it directly affects the interpretation of a finding, and only in the ways participants consented to when they agreed to take part. Full demographic disclosure to the wider project team is not necessary for good analysis, and it creates risk.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Inclusive UX Research Methods: Stop Excluding Participants",
  "description": "Learn how to adapt recruitment, session design, and analysis so your UX research studies don't structurally exclude disabled, neurodivergent, or underrepresente",
  "datePublished": "2026-07-09",
  "dateModified": "2026-07-09",
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
    "@id": "https://blog.glasgow.works/blog/inclusive-ux-research-methods"
  },
  "keywords": "inclusive UX research methods, accessibility in user research, recruiting disabled participants for UX research, inclusive research design, researching with assistive technology users, diversity in UX research participants"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do inclusive UX research studies cost significantly more to run?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Marginal cost increase comes mainly from sourcing and screener iteration. Specialist panels charge more per participant, but session counts don't need to rise. Most structural changes (plain-language scripts, flexible timing, caption-enabled platforms) are one-time setup costs that benefit all future studies."
      }
    },
    {
      "@type": "Question",
      "name": "How many participants with disabilities should I include in a usability study?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There's no universal rule, but a practical starting point is to ensure AT users or participants with relevant access needs make up a meaningful minority — not a token one. For a 5–8 person study, aim for at least 2 participants whose experience is likely to surface accessibility barriers. Adjust based on what the product does and who it's for."
      }
    },
    {
      "@type": "Question",
      "name": "What if a participant's assistive technology breaks or causes a session to fail?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Treat it like any other technical failure: reschedule, pay the participant their full incentive, and investigate whether the prototype or platform is the barrier. A session 'failure' caused by AT incompatibility is itself a finding worth reporting."
      }
    },
    {
      "@type": "Question",
      "name": "Should I disclose to the rest of the team which participants have disabilities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Anonymise participant context in the same way you would any other sensitive demographic. Share relevant context (e.g. 'P3 uses a screen reader and keyboard-only navigation') only when directly relevant to interpreting findings, and only in ways participants consented to."
      }
    }
  ]
}
</script>

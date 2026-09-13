---
title: "How to Run a Cognitive Walkthrough: Step-by-Step Guide"
description: "Learn how to run a cognitive walkthrough, identify where users may struggle and turn task-level findings into clear, prioritised UX improvements. Read on."
pubDate: 2026-09-09
updatedDate: 2026-09-13T14:51:29Z
readingTime: 11
slug: "how-to-run-a-cognitive-walkthrough"
author: "Vadim Glazkov"
authorSlug: "vadim"
category: "Research"
draft: false
heroImageAlt: "UX researcher documenting each step of a cognitive walkthrough"
tags:
  - "UX Research Methods — usability testing and expert evaluation"
  - "cognitive walkthrough UX"
  - "cognitive walkthrough steps"
  - "cognitive walkthrough example"
  - "cognitive walkthrough vs usability testing"
hub: "ux-research-methods"
---
## What is a cognitive walkthrough?

A cognitive walkthrough is an expert evaluation of how easily a defined user can learn to complete a specific task. Evaluators work through the flow one action at a time. They consider the user’s goal, the actions available, the system’s feedback and whether the next step is clear.

This is not research with participants. Evaluators use a realistic persona and scenario to make reasoned predictions about where someone may struggle. The focus is learnability: can this person work out what to do at each step without product knowledge they do not have?

The result is a documented list of likely breakdowns, the interface evidence behind each prediction and proportionate recommendations. It is one of several [UX research methods](/blog/ux-research-methods) we use to improve a narrow flow before development or participant research.

## Prepare the walkthrough

Choose one critical, bounded journey. Reviewing an entire product tends to produce broad observations that nobody can act on. “Create and send an invitation” is a better task than “manage team access”.

Define the intended user before you open the prototype. Record their relevant prior knowledge, motivation, vocabulary and accessibility needs. A first-time administrator may interpret the same navigation label very differently from an experienced account owner.

Now write a scenario. Give the user a reason to act, a start state and a clear success condition, but do not reveal the route. For example:

> You need to invite a new colleague so they can access the workspace. You are signed in as an administrator. The task is complete when the invitation has been sent.

List the expected actions at interface level: open settings, select members, choose invite, enter details, set permissions and send. Evaluators need a route to inspect, but they should still record any other plausible route suggested by the design.

Use two to five evaluators with relevant perspectives from UX, product, design, support or the domain. Give each person the same worksheet, with fields for task step, expected action, answer to each walkthrough question, interface evidence, issue, severity and recommendation. Freeze the prototype or product version before the review. Otherwise, differences in findings may come from changing screens rather than different judgements.

One walkthrough covers one task. If the problem may stretch across teams, channels or stages, use other research to [map the wider customer journey](https://blog.glasgow.works/blog/b2b-customer-journey-mapping-research).

## How to run a cognitive walkthrough in five steps

Apply the same questions to every action in the task. Ask evaluators to review the flow independently before the group discussion. This reduces the chance that the first opinion, or the most senior voice, sets the conclusion. During the debrief, combine duplicate findings but keep disagreements that need validation.

### 1. Establish the user’s goal on the current screen

State what the user is trying to achieve at this point. Then consider what they are likely to notice or assume, based on the persona and scenario.

Someone inviting a colleague may look for a people or team area. If the screen is labelled “Workspace configuration”, ask whether those words provide a useful cue.

### 2. Identify the action that advances the task

Name the action needed to move forward: a click, selection, text entry or decision. Be specific. “Complete the invitation” is too broad to inspect; “select the ‘Members’ navigation item” is concrete enough.

Writing out the sequence often exposes hidden prerequisites. The user may need a particular permission before they can send an invitation, for instance, while the interface explains this only after they have entered the details.

### 3. Ask whether the user will try to achieve the right effect

A control may be visible, yet the user may not realise they need it. Check whether they are likely to form the correct intention at this point in the flow.

An administrator might need to choose a workspace before inviting someone. If invitations are workspace-specific and the interface never explains that relationship, they may start from a general account page. Findability is only part of the problem. The intended goal at that step is unclear.

### 4. Ask whether the correct control is visible and connected to the goal

Will the user notice the action and connect it with the result they want? Look closely at its placement, label, visual treatment, grouping and relationship to the language in the scenario.

A visible button labelled “Add” remains ambiguous when it sits beside projects, folders and people. “Invite member” states the outcome more clearly. Give the same scrutiny to actions hidden behind unfamiliar icons or overflow menus. If the first decision shapes the rest of the route, [first-click testing](https://blog.glasgow.works/blog/first-click-testing-ux-research) can test that starting point with representative users.

### 5. Ask whether feedback confirms progress

Inspect what happens after the action. Does the feedback explain what happened, confirm that the task moved forward and show what the user should do next?

A toast that says “Saved” does not tell someone whether the invitation was sent, stored as a draft or blocked by an error. “Invitation sent to name@example.com” provides clearer evidence.

Record a separate answer for every action. Avoid blanket conclusions such as “the flow is intuitive”. Capture what you can point to on the screen: an ambiguous label, hidden control, missing prerequisite, unexplained state change or unclear confirmation.

## The four cognitive walkthrough questions

These questions separate four distinct reasons why a task can fail:

1. **Will the user try to achieve the correct goal?** Pass: they recognise that a colleague needs an invitation. Fail: they expect entering an email address to grant access automatically.
2. **Will the user notice that the correct action is available?** Pass: “Invite member” is visible in the members area. Fail: it is in an unlabelled overflow menu.
3. **Will the user associate that action with the result they want?** Pass: the label describes sending an invitation. Fail: “Provision” is unfamiliar to the persona and does not connect to their goal.
4. **After acting, will the user understand the feedback and recognise progress?** Pass: confirmation states that the invitation was sent. Fail: the screen refreshes without a clear change.

Do not write “users will be confused”. Tie the prediction to evidence instead: “A first-time administrator may not select ‘Provision’ because the label is absent from the scenario’s vocabulary and sits beside unrelated account actions.”

You can adapt the wording of the questions, but keep the distinction between intention, visibility, association and feedback. A [heuristic evaluation](https://blog.glasgow.works/blog/heuristic-evaluation-ux-research) complements this task-level review by examining broader usability principles.

## Document and prioritise the findings

Make every finding useful to someone who was not in the room. Include the task step, predicted breakdown, affected user, supporting interface evidence and likely consequence.

Separate confirmed defects from assumptions that need research. A missing accessible name on an essential control is a defect. A prediction that users will misunderstand an unfamiliar term may be well supported by the persona and interface, but a consequential decision still needs validation.

Prioritise each finding by the impact of the breakdown, likely exposure, task criticality and confidence in the evidence. A simple scale usually does the job:

- **Blocker:** prevents task completion.
- **Serious friction:** makes a critical action unreliable or difficult.
- **Moderate friction:** slows, misdirects or adds unnecessary effort.
- **Minor improvement:** refines an otherwise workable flow.

Keep recommendations as narrow as the evidence allows. “Clarify the relationship between workspace selection and invitations” is more defensible than prescribing a redesign before testing the alternatives.

Give each finding an owner and a validation method, then retest the revised flow. Where the cause spans teams or channels, [service blueprint research](https://blog.glasgow.works/blog/service-blueprint-ux-research) can reveal the process underneath it.

## Cognitive walkthrough example: completing a SaaS task

Our workplace-learning research shows why step-by-step guidance needs clear confirmation, not just instructions. In one anonymised research account, a manager used detailed text guides and screenshots to explain a Salesforce process. They could not tell who had opened the guide or how much anyone had learned.

That evidence does not tell us how users would behave in a SaaS invitation flow. It does show why confirmation and observable status deserve close inspection.

Here is a walkthrough example. The persona is a first-time team manager with basic web-product experience. They start on a workspace home screen and need to invite a colleague. The task succeeds when the invitation has been sent and its status is visible.

The expected sequence is to open the members area, select “Invite member”, enter an email address, choose a role and send the invitation. On the first step, evaluators ask whether the manager will look for a members area, notice it in the navigation, connect its label with inviting a colleague and understand the screen that follows.

Suppose the navigation label is “Directory”. The likely breakdown concerns association: the term may not match the persona’s language, and nothing in the label signals invitations. Treat this as moderate friction if another clear route exists and serious friction if it blocks the task. A proportionate recommendation would be to test clearer terminology or add a visible invitation entry point.

The walkthrough produces a reasoned prediction. It cannot show how often the problem occurs. You still need research with representative managers to test the terminology, routes and strategies your team did not expect.

## Cognitive walkthrough vs usability testing

A cognitive walkthrough relies on expert judgement grounded in a persona and interface evidence. Usability testing gathers behavioural evidence from representative users as they complete tasks. They answer different questions.

| Consideration | Cognitive walkthrough | Usability testing |
| --- | --- | --- |
| Evidence source | Evaluator judgement and interface evidence | Participant behaviour and feedback |
| Recruitment | No participant recruitment | Requires suitable participants and sessions |
| Best stage | Early designs and narrow flows | Prototypes or products where real behaviour matters |
| What it establishes | Likely learnability issues | Observed difficulties, strategies and task performance |

Choose a walkthrough for a rapid review of a defined flow, especially in an early prototype. Choose usability testing when you need evidence of real behaviour, performance measures or strategies the team did not anticipate.

A walkthrough cannot establish prevalence in real use. We use it to remove likely problems, then test high-risk assumptions through [usability testing and user interviews](https://blog.glasgow.works/blog/usability-testing-vs-user-interviews). If you are still selecting an approach, [compare UX research methods](https://blog.glasgow.works/blog/ux-research-methods-comparison) against the decision you need to make.

## Frequently asked questions

### How many evaluators do you need for a cognitive walkthrough?

One evaluator can find useful issues. Two to five evaluators usually bring a broader range of relevant perspectives. Knowledge of the task, users and domain matters more than panel size.

### Do cognitive walkthroughs require users?

No. Evaluators inspect the task from the perspective of a defined user. Validate their predictions with representative users when uncertainty is high or the decision carries material risk.

### How long does a cognitive walkthrough take?

A short, prepared flow can take about an hour to review. Independent reviews and consolidation may require several hours. The effort depends on the scope, task complexity and readiness of the prototype.

### What is the difference between a cognitive walkthrough and a heuristic evaluation?

A walkthrough tests whether a defined user can learn a specific task step by step. A heuristic evaluation checks an interface against broader usability principles. Use both if you need to examine task learnability and the wider quality of the interface.

Pick one high-risk task. Write a realistic scenario and prepare a shared worksheet. Your findings should make two things clear: which assumptions call for design changes, and which need user research.
<!-- gr:footer -->
---

**About Glasgow Research** — Glasgow Research helps B2B SaaS teams turn customer and market research into product decisions. [Work with us](https://glasgow.works).

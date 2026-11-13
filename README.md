# paperroom.

A calm, focused exam-practice web experience, currently built as the Chapter 11 Practice Session 01 demo for Project Risk Management.

This repository intentionally replaces the old Atomic Commits payment prototype *working tree* with a study interface at the user's request. The previous project remains recoverable through Git history.

## Demo

- Eight module library links: PRM, ADP, ADT, ITS, PFP, PRT, ML, PRP. Only **PRM / Chapter 11 / Practice Session 01** is live; others are clearly marked as pending.
- 80 actual questions imported from the Chapter 11 user-provided practice exam.
- Exactly **60 minutes** per attempt, started when the learner clicks Begin. Countdown uses an absolute timestamp; refreshing does not restart it. At zero, the paper automatically submits.
- Saved answers and flags in the current browser's localStorage.
- All questions must have answers for voluntary early submission. If the hour expires, unfinished answers are submitted as-is.
- Question navigation, status indicators, flags, MC options, fill-in inputs, true/false with corrections, and written-response spaces.
- After submission, side-by-side learner answer and memorandum, with objective grading and rubric-guided self-marking for open responses.
- Honest score reporting: provisional until all written answers are reviewed.

## Running

This is a plain HTML/CSS/JavaScript static site intended to run on GitHub Pages from the root of `main`. No build step or secrets are required.

Open `index.html` in a browser, or use any local static server. The app loads `exam-data.js` first.

## Marking policy

Objective questions (selected multiple choice, exact reverse definitions and fills) are automatically scored using known answers and accepted aliases. For true/false, the binary choice is automatic; false-statement corrections earn a remaining point only after self-review. Open-ended responses, reasoning and calculation workings **are not AI graded** in this static prototype. Award marks against the model answer after submission. No answers are shown before submission.

The original question source and answer key are retained in the user's PRM Drive library, not copied into a public GitHub issue. This is a demo: do not enter private or sensitive information in responses. The static app stores work locally; there is no server submission.

See GitHub issue #1 for a future server-side, rubric-driven Gemini grading service, including privacy, cost and prompt-injection controls.

## Extending

Add additional papers only after the Chapter 11 design is approved. Keep new exams as separate data files, retain 60-minute limits, never claim automatic written grading unless a real grading service is available, and preserve accessible mobile layouts.
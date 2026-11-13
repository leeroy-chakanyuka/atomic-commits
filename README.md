# Paperroom

A calm exam-practice website, hosted from this repository on GitHub Pages. The former Atomic Commits landing page remains recoverable in Git history.

## Current practice library

| Module | Exam date | Status |
|---|---|---|
| ADP | 18 November 2026 | Coming soon |
| ITS | 19 November 2026 | **Chapter 8 pilot live** |
| PRM (Project Management) | 20 November 2026 | **15 sessions live** |
| ADT | 24 November 2026 | Coming soon |

ADP and ITS exams are **confirmed by the student at 14:00**. PRM and ADT show 14:00 as provisional pending confirmation on the final institutional timetable.

For PRM, **Chapters 9, 11, 12, 14 and 15** now each have **three playable 80-question practice sessions** (15 total). Each chapter has its own expandable session folder with downloadable question-only PDF versions, a 60-minute limit, mark allocations, self-marking for written answers, and a local attempt archive. Six combined revision papers remain labelled *coming soon*. No separate question-paper PDFs are published.

### Exam workflow
- Each session has a strict 60-minute timer that starts only when **Begin practice session** is pressed.
- You may **submit with unanswered questions**. Unanswered items receive zero, and a confirmation explains how many are missing.
- The answer memorandum is visible only after submission.
- Direct objective answers are scored automatically where possible. Open-ended responses and calculations are marked against the memorandum by the learner until future server-side marking is available.
- The exam interface uses a compact tablet/mobile layout with the timer alone in the top navigation bar.
- Completed attempts, responses, provisional scores, missed questions, self-marking, flags and dates are kept in browser localStorage and can be revisited after later attempts.

**LocalStorage is device/browser-specific**. It cannot synchronize across devices and is lost when browser site data is cleared.

## Notes library

`notes/` holds the study PDFs by **module**, not by empty chapter subfolders. The current layout is:

- `notes/PRM/`: five chapter PDFs (9, 11, 12, 14, 15), linked directly from the PRM chapter tiles.
- `notes/ITS/`: five chapter PDFs (8–12), listed as readable note cards.
- `notes/ADT/`: seven software-engineering chapter PDFs (9–14 and 19), listed as readable note cards.
- `notes/ADP/`: prepared for future uploads.

The seven ADT PDFs accidentally duplicated in `notes/PRM/` were removed from that location. The correct ADT copies were preserved.

The **`papers/` folder is intentionally retained**, because the interactive quizzes load their question data from there; it does not store redundant printable paper PDFs. No private Drive links are used.

## Files
- `index.html`: static layout
- `styles.css`: calm paper-and-sage responsive design
- `app.js`: exam engine, timer, local state, marking and review
- `exam-data.js`: PRM Chapter 11 Practice Session 01 (preserves previous deployments)
- `papers/prm/*.js`: interactive question banks for Chapter 9, 11, 12, 14 and 15
- `notes/`: user-uploaded study content folders

This site is plain HTML/CSS/JS, deployable directly from the repo root with GitHub Pages.

## Later
Gemini-assisted rubric-driven marking of free text is tracked in [issue #1](https://github.com/leeroy-chakanyuka/atomic-commits/issues/1). Any API keys must remain on a server; do not embed them in this public website.

## Reading resources for ADP

Until ADP notes are supplied, its module page links to the user's preferred Java/Spring resources:

- [Baeldung · Security with Spring](https://www.baeldung.com/security-spring)
- [Spring Security in Action, Second Edition](https://www.manning.com/books/spring-security-in-action-second-edition) by Laurențiu Spilcă

These are external reading recommendations, not reproductions of the textbook or substitute lecturer notes. ADP and ITS exam start times (14:00) are confirmed by the user; other modules' times remain provisional.

## Chapter 15 papers

Chapter 15 focuses on *Finishing the Project and Realizing the Benefits* (formal acceptance, early termination, transition, knowledge management, closeout, staff reassignment, ongoing support, Agile validation and benefits realisation). Three original 80-question papers, each worth **222 marks**, are playable on the website. The site contains **questions only** until submission, with immediate objective checking and guided written-answer review.

## ITS Chapter 8 pilot

The ITS library includes one **80-question, 226-mark Advanced SQL** pilot covering joins, correlated and scalar subqueries, SQL functions, relational set operators, views, PL/SQL triggers, stored procedures, cursors and embedded SQL. It prioritises writing, reading and debugging queries rather than generic recall.

The session has the usual 60-minute timer, optional early submission with blanks, answer review and device-local history under **ITS-specific localStorage keys**, separate from the established PRM archive. SQL examples use a code-styled context block, and written SQL is self-marked against the question-specific rubric.

The original source notes remain at `notes/ITS/Chapter-8.pdf`. A separate write-in paper and marking memorandum were prepared for individual review. The website does not publish the memorandum before submission.

This is deliberately one session for feedback before ITS Chapters 9-12 or more variants are created.
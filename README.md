# Paperroom

A calm exam-practice website, hosted from this repository on GitHub Pages. The former Atomic Commits landing page remains recoverable in Git history.

## Current practice library

| Module | Exam date | Status |
|---|---|---|
| ADP | 18 November 2026 | Coming soon |
| ITS | 19 November 2026 | Coming soon |
| PRM (Project Management) | 20 November 2026 | **Six sessions live** |
| ADT | 24 November 2026 | Coming soon |

The website shows **14:00 as a provisional sitting time**. Confirm the actual times against the institution's final examination timetable.

For PRM, Chapter 11 and Chapter 12 each have **three playable 80-question practice sessions**. Chapters 9, 14 and 15 are prepared as chapter tiles, and six combined revision papers have clearly labelled *coming soon* slots. No separate question-paper PDFs are published.

### Exam workflow
- Each session has a strict 60-minute timer that starts only when **Begin practice session** is pressed.
- You may **submit with unanswered questions**. Unanswered items receive zero, and a confirmation explains how many are missing.
- The answer memorandum is visible only after submission.
- Direct objective answers are scored automatically where possible. Open-ended responses and calculations are marked against the memorandum by the learner until future server-side marking is available.
- The exam interface uses a compact tablet/mobile layout with the timer alone in the top navigation bar.
- Completed attempts, responses, provisional scores, missed questions, self-marking, flags and dates are kept in browser localStorage and can be revisited after later attempts.

**LocalStorage is device/browser-specific**. It cannot synchronize across devices and is lost when browser site data is cleared.

## Notes folders

The `notes/` directory is **an upload-ready structure** for user-provided study notes. There are folders for ADP, ADT, ITS, and PRM chapters 09, 11, 12, 14, 15, plus PRM combined revision. The website links to those **GitHub repository folders**, not to any private Google Drive location.

Upload the materials you choose to share into these folders. No source slide PDFs have been added by the assistant.

## Files
- `index.html`: static layout
- `styles.css`: calm paper-and-sage responsive design
- `app.js`: exam engine, timer, local state, marking and review
- `exam-data.js`: PRM Chapter 11 Practice Session 01 (preserves previous deployments)
- `papers/prm/*.js`: additional Chapter 11/12 exam question datasets
- `notes/`: user-uploaded study content folders

This site is plain HTML/CSS/JS, deployable directly from the repo root with GitHub Pages.

## Later
Gemini-assisted rubric-driven marking of free text is tracked in [issue #1](https://github.com/leeroy-chakanyuka/atomic-commits/issues/1). Any API keys must remain on a server; do not embed them in this public website.

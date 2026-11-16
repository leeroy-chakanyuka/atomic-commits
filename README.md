# Paperroom

A calm exam-practice website, hosted from this repository on GitHub Pages. The former Atomic Commits landing page remains recoverable in Git history.

## Current practice library

| Module | Exam date | Status |
|---|---|---|
| ADP | 18 November 2026 | **3 pilot papers live**: two design patterns + one intermediate Spring Security |
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

## ADP topic tiles and exam pilots

The ADP module has four topic tiles: **Design Patterns**, **Spring Security**, **Spring Data JPA**, and **TBD**. The fourth tile remains unnamed as requested. Under Design Patterns, there are **two independently playable 30-question papers**: Chain of Responsibility (138 marks) and Proxy (146 marks). Under Spring Security, there is **one 30-question intermediate paper** (150 marks). Each paper has a **90-minute timer** and its own detailed marking memorandum, revealed only on the results/review screen. Other design patterns and JPA are not represented as playable papers yet.

Examples include Java classes, Spring Security configuration, code tracing, debugging, test design and Mermaid diagrams. A staged curriculum for later Spring Security content is documented in `papers/adp/SECURITY-LAYERS.md`; **OAuth is intentionally outside the pilot**.

## Rich questions and ITS sample database

Questions, optional context blocks and memorandums can contain **GitHub-flavored Markdown**. The browser uses Marked plus DOMPurify for sanitized rendering and Mermaid for diagrams. External CDN dependencies are pinned in `index.html`. The app falls back to readable plaintext if a dependency is unavailable. **Student answers are never rendered as HTML or executable Markdown.**

ITS Chapter 8 retains its original **80 questions / 256 marks and existing v2 local storage keys**. Its result-tracing/case-study questions now display Markdown sample tables where useful. The module offers an expandable reference database with table inventory, sample rows, schema relationship diagram and a runnable Oracle SQL setup (`notes/ITS/ch08-practice-database.sql`). **When a question defines its own rows, those rows override the shared sample dataset**. Existing SQL answer memorandums and marking weights were preserved.

The original PRM papers, question counts, marks, memorandums and local histories remain unchanged.

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
- `papers/adp/*.js`: two design patterns papers and one Spring Security pilot
- `rich-content.js`: sanitized Markdown and diagrams
- `concept-map.js` / `concept-map.css`: ITS Chapter 8 concept graph, topic drawer and local learning signals
- `notes/ITS/ch08-practice-database.*`: Oracle SQL practice schema and Markdown reference
- `notes/`: user-uploaded study content folders

This site is plain HTML/CSS/JS, deployable directly from the repo root with GitHub Pages.

## ITS Chapter 8 concept graph

The ITS module includes a scrollable cloud-like **concept graph** mapping 16 connected Chapter 8 topics. Selecting a node opens an accessible right-side drawer with an explanation, related concepts, a link to the source chapter notes, question references and a concept-focused Gemini chat. On small screens the graph scrolls horizontally while the discussion opens full width. This is a learning tool, not a strict dependency graph.

The topic tracker reads only existing `paperroom:history:its:ch8:s1:v2` and submitted current attempts on the same device. Its percentages count objective graded questions and *self-reviewed* written questions; unreviewed written answers are excluded. With limited completed attempts, percentages are preliminary. **Gemini does not score or inspect a student's submitted answers.** The weakness-paper action creates a **question-only PDF from the existing Chapter 8 bank** using the least successful topic groups. It does not invent AI questions or change saved practice results.

### Gemini BYOK prototype and privacy

- The concept drawer accepts an optional **user-supplied** Gemini API key in the browser for direct requests to Google's `generateContent` API using Gemini 3.8 Flash. The repo contains **no hardcoded key**.
- The key and chat history are kept only in JavaScript memory for that tab. They are not written to browser localStorage or sent to Paperroom servers. Chat messages are transmitted **directly to Google**, which will handle them under its applicable terms. Paperroom still has no backend.
- **Client-side API keys are not fully secure.** Browser extensions, a compromised device or injected code may access an entered key, and Google advises against exposing keys client-side in production. Use only a separately restricted, low-quota test key. The long-term production alternative requires a protected backend or another credential architecture.
- Chat is concept-context only. It does not automatically send question responses, marking data, history or performance signals. That Gemini-based analysis, along with generating *new* weakness-specific questions, remains future work.

### Next

Gemini-assisted rubric-driven marking of written answers is tracked in [issue #1](https://github.com/leeroy-chakanyuka/atomic-commits/issues/1). Before enabling it, design an explicit consent and data-sharing screen, a versioned topic-tagging schema, a human-reviewable rubric output, and an export/import path for local-only histories.

## Reading resources for ADP

Until ADP notes are supplied, its module page links to the user's preferred Java/Spring resources:

- [Baeldung · Security with Spring](https://www.baeldung.com/security-spring)
- [Spring Security in Action, Second Edition](https://www.manning.com/books/spring-security-in-action-second-edition) by Laurențiu Spilcă

These are external reading recommendations, not reproductions of the textbook or substitute lecturer notes. ADP and ITS exam start times (14:00) are confirmed by the user; other modules' times remain provisional.

## Chapter 15 papers

Chapter 15 focuses on *Finishing the Project and Realizing the Benefits* (formal acceptance, early termination, transition, knowledge management, closeout, staff reassignment, ongoing support, Agile validation and benefits realisation). Three original 80-question papers, each worth **222 marks**, are playable on the website. The site contains **questions only** until submission, with immediate objective checking and guided written-answer review.

## ITS Chapter 8 — Practical SQL pilot (revised)

The 80-question ITS Chapter 8 pilot was rebuilt after feedback to emphasize **practical SQL rather than definitions**. Current distribution:

| Task | Questions |
| --- | ---: |
| Contextual SQL terminology (small vocabulary component) | 8 |
| Matching expressions, clauses and outcomes | 10 |
| Complete missing SQL tokens / clauses | 14 |
| Repair broken SQL | 12 |
| Write SQL queries / PL/SQL | 16 |
| Predict query results | 10 |
| Larger applied SQL case studies | 10 |
| **Total** | **80** |

The revised paper totals **256 marks**. The 60-minute timer is intentionally a speed challenge, not a claim every student should finish all written tasks. Oracle SQL and PL/SQL are used for Chapter 8 (including MINUS, TO_DATE, triggers, stored procedures and cursors).

Matching questions use three drop-down answers, awarded one mark per correct pairing. Token-completion questions are marked per answer. Written SQL, debugging, query interpretation and case studies have detailed model answers for self-review; no fake automatic code grading.

Attempts and history use new **v2 ITS browser-local storage keys** because the old pilot questions and answer keys no longer correspond. The older v1 storage is not erased, but old results are intentionally not scored against the revised paper. PRM storage and all 15 PRM sessions are unaffected.

The source reading remains `notes/ITS/Chapter-8.pdf`. The page offers a question-only printable PDF; there is no link to private Google Drive content.

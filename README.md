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
- `concept-atlas.js` / `concept-atlas.css`: ITS master/Chapter 8/Chapter 9 concept maps, zoomable viewport, streamlined concept chat and local learning signals
- `notes/ITS/ch08-practice-database.*`: Oracle SQL practice schema and Markdown reference
- `notes/`: user-uploaded study content folders

This site is plain HTML/CSS/JS, deployable directly from the repo root with GitHub Pages.

## ITS concept atlas: Chapters 8 and 9

The ITS module now has a **master concept map** connecting two separate, clickable chapter graphs:

- **Chapter 8 — Advanced SQL:** 16 concept bubbles mapped to the existing 80-question practice paper; covers joins, grouping, subqueries, functions, views, set operators, PL/SQL and related database programming tools.
- **Chapter 9 — Database Design:** 16 concept bubbles covering information systems, SDLC, DBLC, requirements, conceptual/ER design, DBMS selection, logical and physical design, verification, security, performance and design strategies. Chapter 9 has notes but no published quiz yet.

**Dedicated study workspace:** selecting a concept from either chapter graph navigates to a shareable URL like `#/study/its/ch9/sdlc`. The entire workspace is a separate screen from the ITS library: the zoomable chapter map fills the left, and the selected concept plus Gemini/no-AI discussion stays open in a persistent panel on the right. Clicking another concept updates the URL and panel without resetting map zoom or pan. The back-to-library link returns to the main ITS page. On narrow/mobile screens the map and discussion stack, and concept selection scrolls the discussion into view.

The graph **fits the viewport automatically** and can be explored using Fit/zoom buttons, mouse drag or touch drag. The graph's SVG lines are solid, with no dot markers. On smaller screens, the initial fit overview can be zoomed for readability. The dedicated concept sidebar is a minimal chat interface. All introductory context (concept explanation, related concepts, chapter notes, and available practice questions) appears as the first **Study guide** assistant-style message, not a separate information panel. Subsequent **Gemini** answers render sanitized GitHub-flavoured Markdown, including headings, lists, tables, inline code, and syntax-highlighted fenced SQL blocks. Student text remains unformatted. The composer stays pinned below the scrollable conversation; settings are tucked behind a small icon, and a no-AI path still displays the study guide.

### Gemini and no-AI path

Opening the first concept prompts for an optional Gemini key immediately, with **Continue without AI** available. Without AI, the chapter explanation, concept links and source notes still work. Key selection and model are tab-local; the default is **Gemini 3.5 Flash** at minimal thinking, with Gemini 3.5 Flash-Lite and Gemini 3.8 Flash (low thinking) selectable. Requests abort after 25 seconds of waiting for Gemini, rather than hanging indefinitely.

On first chat request for a chapter, PDF.js loads and extracts text from the **complete local Chapter 8 or 9 source PDF** in the browser, caching that text in memory for subsequent messages. The selected concept and the extracted chapter text are passed to Google as context for tutoring. **Embedded images, graphics and other non-text PDF objects may not be extracted**, so this is not yet perfect diagram-aware tutoring. The entire extracted chapter text is currently resent with each request; a provider cache for longer sessions would reduce repeated token use and is future optimisation.

No API key, PDF text, response history or saved score is sent to a Paperroom backend, and no API key is stored in localStorage. However, **the key and chat prompts are sent directly to Google** when Gemini is used, and browser-based credentials are not production-grade secrets. Use a separately restricted testing key.

### Progress and targeted drilling

Chapter 8's optional progress section reads only the existing v2 submitted history and self-reviewed marks on this device. It can build a **question-only PDF from the existing Chapter 8 bank** based on observed weak topics. Gemini does **not** score existing answers or generate entirely new papers yet. Chapter 9 has no performance statistics until a practice bank is created.

### Next

Future features: explicit opt-in to AI marking of written answers (see [issue #1](https://github.com/leeroy-chakanyuka/atomic-commits/issues/1)), human-reviewable rubrics and topic tagging, generated original weakness papers, and a safer credential strategy for production.

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

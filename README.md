# Paperroom

A calm exam-practice website, hosted from this repository on GitHub Pages. The former Atomic Commits landing page remains recoverable in Git history.

## Current practice library

| Module | Exam date | Status |
|---|---|---|
| ADP | 18 November 2026 | **27 playable papers / 460 unique questions**: 12 Design Patterns sets + mega, 3 SOLID sets + mega, 4 Spring Security sets + mega, 4 Spring Data JPA sets + mega |
| ITS | 19 November 2026 | **18 playable papers**: 3 each for Chapters 8–12 plus 3 integrated mixed papers |
| PRM (Project Management) | 20 November 2026 | **15 sessions live** |
| ADT | 24 November 2026 | Coming soon |

ADP and ITS exams are **confirmed by the student at 14:00**. PRM and ADT show 14:00 as provisional pending confirmation on the final institutional timetable.

For PRM, **Chapters 9, 11, 12, 14 and 15** now each have **three playable 80-question practice sessions** (15 total). Each chapter has its own expandable session folder with downloadable question-only PDF versions, a 60-minute limit, mark allocations, self-marking for written answers, and a local attempt archive. Six combined revision papers remain labelled *coming soon*. No separate question-paper PDFs are published.

### ITS practice papers: Chapters 8–12

**18 timed sessions are playable from the ITS library, with downloadable question-only PDFs:**

| Scope | Sessions | Coverage |
|---|---:|---|
| Chapter 8 · Advanced SQL | 3 | Joins, grouping, subqueries, functions, set operations, views, cursors, triggers and PL/SQL |
| Chapter 9 · Database Design | 3 | SDLC/DBLC, requirements, ER modeling, design stages, verification, design approaches |
| Chapter 10 · Transaction Management | 3 | ACID, COMMIT/ROLLBACK, concurrency anomalies, locks, deadlocks, isolation and recovery |
| Chapter 11 · Performance and Query Optimization | 3 | Statistics, cardinality, selectivity, indexes, joins, optimizer plans and bottlenecks |
| Chapter 12 · Distributed DBMS | 3 | Fragmentation, replication, transparency, distribution, distributed queries and 2PC |
| Mixed Chapters 8–12 | 3 | 16 questions from each chapter, including 5 integrated cross-chapter cases per session |

Each session contains **80 questions with its own memo**. The original Chapter 8 pilot is preserved unchanged as Paper 1, including any existing attempts. The other papers are reproducibly assembled from original, concept-specific question blueprints with varied prompts and scenarios across three sets; they are **revision papers, not official university exam papers**. Each contains terminology checks, objective concept discrimination, true/false corrections, and substantial written application cases. Written responses use transparent self-marking rubrics after submission. Session limits remain **60 minutes** (an intensive speed target), and student results, flags and attempts remain local.

The source scope follows the textbook *Database Systems: Design, Implementation, and Management*, 10th edition. Full question-by-question verification against every image or diagram in the uploaded lecture PDFs has not been performed, so learners should use their official course material to check terminology and emphasis.

### Exam workflow
- Each session has a strict 60-minute timer that starts only when **Begin practice session** is pressed.
- You may **submit with unanswered questions**. Unanswered items receive zero, and a confirmation explains how many are missing.
- The answer memorandum is visible only after submission.
- Direct objective answers are scored automatically where possible. Open-ended responses and calculations are marked against the memorandum by the learner until future server-side marking is available.
- The exam interface uses a compact tablet/mobile layout with the timer alone in the top navigation bar.
- Completed attempts, responses, provisional scores, missed questions, self-marking, flags and dates are kept in browser localStorage and can be revisited after later attempts.

**LocalStorage is device/browser-specific**. It cannot synchronize across devices and is lost when browser site data is cleared.

## ADP topic tiles and exam pilots

ADP has **four topic tiles** and a prominent **Mega exams** section with direct practice links visible above the tiles. Total: **27 playable papers**, comprising **23 original topic papers** and **4 mixed mega exams**. Design Patterns has 12 individual papers (20 questions each) and a 120-question mega (10 from each pattern, 180 minutes). SOLID has 3 individual papers (20 each) and a 60-question mega (90 minutes). Spring Security has **4 original sets × 20 questions** (authorization, authentication/CSRF, JWT/OAuth2, testing/threats) and an **80-question mega** (120 minutes). Spring Data JPA has **4 original sets × 20 questions** (entities/lifecycle, relationships, transactions, repositories/JPQL/pagination) and an **80-question mega** (120 minutes). Individual papers are **15 MCQs + 5 true/false**, 20 marks and 30 minutes each. Security and JPA mega exams each include **60 MCQs + 20 true/false**. All questions are one mark, automatically graded, and have post-submission explanatory memoranda. The 4 mega exams **reuse interleaved questions from their component banks**, rather than claiming 340 additional unique questions. There are **460 unique original topic-bank questions** and **800 question appearances** including the mega assemblies. All ADP examples use Java (Spring Boot 3 / Spring Security 6-style conventions where relevant), not SQL disguised as Java. Browser-local attempts retain **v3 storage keys**; new Security/JPA chapters use 21–30 so existing ADP attempts are preserved. The earlier Chain of Responsibility, Proxy and legacy Spring Security pilots remain withdrawn.

The 12 Design Patterns papers include independent real-world contexts, Java code traces and common design mistakes. A separate outline for possible future Spring Security papers remains in `papers/adp/SECURITY-LAYERS.md`; there is currently no live Spring Security pilot.

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
- `papers/adp/*.js`: 23 original Java ADP question banks and 4 mixed mega assemblies across Design Patterns, SOLID, Spring Security and Spring Data JPA.
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

The graph **fits the viewport automatically** and can be explored using Fit/zoom buttons, mouse drag or touch drag. The graph's SVG lines are solid, with no dot markers. Both chapter graphs use a simplified, hierarchical set of parent-child links, with no unrelated straight-line edge crossings; selecting or hovering a concept highlights its immediate branch and mutes the rest. On smaller screens, the initial fit overview can be zoomed for readability. The dedicated concept sidebar is a minimal chat interface. All introductory context (concept explanation, related concepts, chapter notes, and available practice questions) appears as the first **Study guide** assistant-style message, not a separate information panel. Subsequent **Gemini** answers render sanitized GitHub-flavoured Markdown, including headings, lists, tables, inline code, and syntax-highlighted fenced SQL blocks. The tutor may also return fenced `mermaid` diagrams when a lifecycle, relationship or database process benefits from one; Mermaid renders these visually using strict security settings, with a readable source fallback if rendering fails. Student text remains unformatted. The composer stays pinned below the scrollable conversation; settings are tucked behind a small icon, and a no-AI path still displays the study guide.

### Gemini and no-AI path

Opening the first concept prompts for an optional Gemini key immediately, with **Continue without AI** available. Without AI, the chapter explanation, concept links and source notes still work. The Gemini API key is now **saved locally in this browser** using `localStorage` and reused after a refresh, until the user selects **Disconnect** in chat settings; the model choice and messages still live only in the tab. The default is **Gemini 3.5 Flash** at minimal thinking, with Gemini 3.5 Flash-Lite and Gemini 3.8 Flash (low thinking) selectable. Requests abort after 25 seconds of waiting for Gemini, rather than hanging indefinitely.

On first chat request for a chapter, PDF.js loads and extracts text from the **complete local Chapter 8 or 9 source PDF** in the browser, caching that text in memory for subsequent messages. The selected concept and the extracted chapter text are passed to Google as context for tutoring. **Embedded images, graphics and other non-text PDF objects may not be extracted**, so this is not yet perfect diagram-aware tutoring. The entire extracted chapter text is currently resent with each request; a provider cache for longer sessions would reduce repeated token use and is future optimisation.

No API key, PDF text, response history or saved score is sent to a Paperroom backend. **The key is saved in this browser’s `localStorage` in readable form** so it survives visits and refreshes, and **the key, chat prompts and relevant chapter notes are sent directly to Google** when Gemini is used. Scripts running on this site, browser extensions, or someone with access to the device may access a locally stored key. Do not use a privileged key here; use a separately restricted, low-quota Gemini key. Disconnecting clears the saved browser key. A protected backend remains the safer production approach.

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

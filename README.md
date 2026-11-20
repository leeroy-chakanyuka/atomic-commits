# Paperroom

A calm exam-practice website, hosted from this repository on GitHub Pages. The former Atomic Commits landing page remains recoverable in Git history.

## Current practice library

| Module | Exam date | Status |
|---|---|---|
| ADP | 18 November 2026 | **31 playable papers / 660 original questions**: four topic dropdowns (23 topic sets + 4 mixed megas) and four new 100-mark ADP372S-style full mock exams |
| ITS | 19 November 2026 | **21 playable papers**: 3 each for Chapters 8–12, 3 integrated mixed papers, plus 3 SQL-only 40-mark written exams |
| PRM (Project Management) | 20 November 2026 | **15 final-revision papers: 12 chapter papers + 3 combined finals** |
| ADT | 24 November 2026 | Coming soon |

ADP and ITS exams are **confirmed by the student at 14:00**. PRM and ADT show 14:00 as provisional pending confirmation on the final institutional timetable.

For PRM, the **active November final scope is Chapters 11, 12, 14 and 15**, with **three original 60-question papers per chapter** and **three 60-question combined finals**: 15 playable papers. Chapter 9 is excluded from the live final-revision library; the original source files and lecture note remain in Git history/files for reference. Chapter papers allow 90 minutes; combined finals allow 120 minutes. Each paper has a question-only PDF download and persistent browser-local attempt archive. Explanatory answer memos and self-markable detailed rubrics appear after submission. Self-marking works with **no API key**. Optional Gemini 3.5/3.1 Flash-Lite marking accepts a locally saved API key and returns grades only, without commentary.


### PRM November final scope and marking

- **Ch11: Risks** — risk definitions and events, risk registers, identifying triggers, qualitative/quantitative analysis, threats/opportunities, positive and negative response strategies, plus Agile uncertainty.
- **Ch12: Quality** — quality management plans, process management, PDCA, quality assurance/control, continuous improvement, costs of quality, Agile quality and kickoff.
- **Ch14: Progress and finance** — communication, PV/EV/AC/BAC, CPI/SPI, cost/schedule variance, EAC/ETC/TCPI and forecast assumptions; calculation-heavy practice.
- **Ch15: Completion** — scope validation, acceptance, termination methods, documented closeout, handover, lessons, benefits and celebration of completion.
- **Three combined papers**: 60 questions each, including calculations, definitions, lists, comparisons and longer cases. The mix approximates the supplied final format, not an official exam. Distinct real-world prompts are used rather than repeating the same answer sheet.

**Marking mode:** submit answers and expand any written question in Results. The model answer and rubric become visible with a self-mark selector. Optionally paste a Gemini API key in the **Gemini grading** panel and select **Grade written answers**; answers, questions and rubrics are sent to Google's API only when that button is pressed. The generated response is constrained to integer mark values per question and does not supply commentary. Save-key is an explicit browser-only opt-in; clear it from the same panel. Never assume Gemini grades are authoritative: validate with the rubric.

### ITS SQL intensive: three 40-mark written papers

A dedicated **SQL intensive** section appears first in the ITS library. It offers three original 30-minute, 40-mark papers (eight 5-mark questions each, 24 original problems total). Every answer requires writing or fixing Oracle SQL/PL/SQL. Focus: joins, subqueries, EXISTS/ALL, GROUP BY/HAVING, set operations, views, sequences, anonymous blocks, cursors, stored procedures, triggers and safe dynamic SQL. Full worked answer memos appear only after submission; written code uses self-marking, not automatic SQL execution. The papers are exam revision, not official CPUT papers.

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
- Direct objective answers are scored automatically where possible. Open-ended answers and calculations are self-marked against the rubric without a service or key. PRM-only optional browser-to-Gemini scoring can award a grade for each submitted written answer, subject to API availability. Gemini grades can be manually overridden.
- The exam interface uses a compact tablet/mobile layout with the timer alone in the top navigation bar.
- Completed attempts, responses, provisional scores, missed questions, self-marking, flags and dates are kept in browser localStorage and can be revisited after later attempts.

**LocalStorage is device/browser-specific**. It cannot synchronize across devices and is lost when browser site data is cleared.

## ADP topic tiles and exam pilots

ADP has **four topic dropdowns**: Design Patterns (12 original topic papers + 120-question mega), Spring Security (four 20-question sets + 80-question mega), Spring Data JPA (four 20-question sets + 80-question mega), and SOLID Principles (three 20-question sets + 60-question mega). **All four mega papers appear first INSIDE their respective topic dropdowns**, not as separate cards above the topics. The topic banks have **460 original one-mark questions** across 23 sets; the 4 mega exams reuse 340 of those questions with topics interleaved, giving 800 question appearances before the new mocks. Existing source papers and history keys are unchanged.

The separate **ADP372S Mock Exams** section below the topic dropdowns contains four **original 100-mark, 120-minute full syllabus mocks**, written to mirror the user's supplied `ADP372S Nov Mock Exam.pdf` structure (not copy its text): **Section One: 9 True or False (18 marks); Section Two: 11 single-term Fill in the Blanks (22 marks); Section Three: 30 Multiple Choice (60 marks)**. Each question is **two marks**, with fully automatic marking of one-click true/false and MCQs, and accepted-term checking for single-word/annotation fill-ins. Existing two-mark true/false papers elsewhere retain their original self-marked correction requirement; the new full mocks use the explicit `truthOnly` flag to mirror the source paper's instruction that students write only TRUE or FALSE. The mock MCQs use an explicit `fullMarksOnCorrect` flag so legacy one-mark exams' scoring is untouched. All model-answer explanations remain hidden until submission.

The full mock topics match the example's level: design-pattern recognition and Java code traces, all five SOLID principles, Spring Security (filter chain, CORS, JWT, roles), Spring Data JPA (entities, mappings, fetching, transactions) and REST controllers/HTTP verbs. **Singleton, Adapter and Builder** are included because they appear in the supplied sample, even though they do not currently have separate design-pattern topic papers. The 4 mocks add **200 new original questions**, giving **31 playable ADP papers, 660 unique original questions** and **1,000 total question appearances including all four mega assemblies**. Mocks have unique keys `adp-31-1` through `adp-34-1`; existing v3 local history/attempt storage remains intact. The older Chain of Responsibility, Proxy and old Spring Security pilot papers remain withdrawn.

The 12 Design Patterns papers include independent real-world contexts, Java code traces and common design mistakes. A separate outline for possible future Spring Security papers remains in `papers/adp/SECURITY-LAYERS.md`; there is currently no live Spring Security pilot.

## Rich questions and ITS sample database

Questions, optional context blocks and memorandums can contain **GitHub-flavored Markdown**. The browser uses Marked plus DOMPurify for sanitized rendering and Mermaid for diagrams. External CDN dependencies are pinned in `index.html`. The app falls back to readable plaintext if a dependency is unavailable. **Student answers are never rendered as HTML or executable Markdown.**

ITS Chapter 8 retains its original **80 questions / 256 marks and existing v2 local storage keys**. Its result-tracing/case-study questions now display Markdown sample tables where useful. The module offers an expandable reference database with table inventory, sample rows, schema relationship diagram and a runnable Oracle SQL setup (`notes/ITS/ch08-practice-database.sql`). **When a question defines its own rows, those rows override the shared sample dataset**. Existing SQL answer memorandums and marking weights were preserved.

The original 80-question PRM question sources remain in the repository for audit, but the site now assembles a distinct 60-question final-focused revision set on page load. It retains definition, list, compare/contrast, Agile, calculation and scenario questions, plus **eight 12-mark essays per chapter paper**. Every essay rubric has six 2-mark criteria, with partial-credit instructions. The three 60-question combined papers mix all four chapters, including Chapter 14 calculations (about 28% of marks), long-form essays and case studies (about 50% of marks), definitions, comparisons, lists and objective checks. No Microsoft Project software questions are included. Existing v1 PRM attempts are retained in browser storage but kept separate from the revised papers (v2) to avoid misaligning answers.

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
- `papers/adp/*.js`: 23 original Java topic banks, 4 reused mixed mega assemblies, and 4 new ADP372S full 100-mark mock exams (9 T/F + 11 fill + 30 MCQ).
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

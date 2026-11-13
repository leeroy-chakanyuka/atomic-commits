# paperroom.

A quiet, exam-focused learning interface built on the former Atomic Commits GitHub Pages repository, redesigned at the owner's request.

## What is live
- **Four module spaces:** Project Management (PRM), ADP, ADT and ITS. The three latter module pages are clearly marked as upcoming.
- **Five PRM chapter tiles:** 9, 11, 12, 14 and 15. Only Chapter 11 / Practice Session 01 launches an interactive exam. Unreleased chapters have disabled "not published" labels, not fake question sets.
- **Real Chapter 11 paper:** 80 imported questions, a maximum of 60 minutes and 224 marks.
- **Compact, mostly fixed-height exam workspace:** tablet/desktop question navigation and mobile horizontal question rail, with the countdown at the top. The page itself does not scroll during an exam on supported modern browsers; long prompts and response areas scroll within their panels.
- **Local persistence:** current attempt answers, flagged questions, start/end timestamps, awarded self-review marks, and **an archive of every completed attempt** are kept in browser localStorage. Returning tomorrow on the same browser/device allows reviewing answers, mistakes and provisional scores from previous attempts. Data does **not sync across devices** and disappears if the browser's site data is cleared. Storage quotas may limit extensive future use.
- **Scoring:** deterministic checking for objective answers; after submission, a side-by-side model-answer review and honest learner-assigned partial credit for written explanations and calculations. "Needs work" and "Needs marking" filters show weak points. Scores remain provisional until all open answers are reviewed.
- **Timer:** uses an absolute deadline; leaving or refreshing does not reset it; auto-submission occurs at expiry even if not all questions have been completed. Voluntary early submission requires answering all 80.
- **History:** starting a fresh attempt does not delete older submitted papers, and reviewing an archived paper does not overwrite the latest attempt.

## Running
Static HTML/CSS/JavaScript, no build step or secrets. Serve the repository root with GitHub Pages or another static host. `exam-data.js` loads before `app.js`.

## Future
Issue [#1](https://github.com/leeroy-chakanyuka/atomic-commits/issues/1) tracks optional **server-side Gemini grading**. Do not expose an AI API key to browser JavaScript or claim the demo currently grades long written answers automatically.

The original payment-app code remains accessible through Git history. The present version is a demonstration; do not enter sensitive personal details in answers.
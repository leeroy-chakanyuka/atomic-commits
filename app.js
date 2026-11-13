"use strict";
(() => {
  const DATA = window.EXAM_DATA;
  if (!DATA || !Array.isArray(DATA.questions) || DATA.questions.length !== 80) {
    document.body.innerHTML = '<main style="font:16px system-ui;padding:4rem">The practice questions could not load. Please refresh the page.</main>';
    return;
  }

  const MODULES = [
    { id: "prm", name: "Project Risk Management", active: true },
    { id: "adp", name: "ADP" },
    { id: "adt", name: "ADT" },
    { id: "its", name: "ITS" },
    { id: "pfp", name: "PFP" },
    { id: "prt", name: "PRT" },
    { id: "ml", name: "Machine Learning" },
    { id: "prp", name: "PRP" }
  ];

  const STORAGE = "paperroom:prm:ch11:s1:v1";
  const $ = (sel) => document.querySelector(sel);
  const esc = (str) => String(str == null ? "" : str).replace(/[&<>"']/g, s => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" })[s]);
  const canon = (str) => String(str || "").normalize("NFKD").toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9 ]+/g," ").replace(/\s+/g," ").trim().replace(/^(a|an|the) /,"");
  const mins = (n) => String(Math.floor(n / 60)).padStart(2,"0") + ":" + String(n % 60).padStart(2,"0");
  const quote = (x) => x.replace(/\*\*(.*?)\*\*/g,"$1");
  const qOf = (id) => DATA.questions[id - 1];
  const section = (q) => q.kind.toUpperCase();
  let current = 1;
  let filter = "all";
  let attempt = readAttempt();
  let toastTimer = null;
  let timeLoop = null;

  function readAttempt() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE) || "null");
      if (parsed && parsed.version === 1 && parsed.startedAt && parsed.endsAt && parsed.answers && parsed.reviews) return parsed;
    } catch (_err) { /* Private or unavailable storage; session remains usable. */ }
    return null;
  }
  function save() {
    try { if (attempt) localStorage.setItem(STORAGE, JSON.stringify(attempt)); }
    catch (_err) { /* Storage may be full or disabled; session continues. */ }
  }
  function notify(message) {
    const el = $("#toast");
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 3800);
  }
  function show(name) {
    ["home","module","intro","exam","results"].forEach(s => {
      const el = $("#" + s + "Screen");
      el.hidden = s !== name;
    });
    $("#siteHeader").hidden = name === "exam";
    document.querySelector(".site-footer").hidden = name === "exam";
    window.scrollTo({ top: 0, behavior: "instant" });
  }
  function renderModules() {
    $("#modulesGrid").innerHTML = MODULES.map(m => `
      <a href="#/module/${m.id}" class="module-card ${m.active ? "active" : ""}" aria-label="${esc(m.id.toUpperCase())} module">
        <div class="module-card-top"><span class="module-abbr">${esc(m.id.toUpperCase())}</span><span class="module-arrow" aria-hidden="true">↗</span></div>
        <h3>${esc(m.name)}</h3>
        <p>${m.active ? "Chapter 11 · Project uncertainty planning" : "Questions being prepared"}</p>
        <span class="module-status ${m.active ? "" : "soon"}"><i class="status-dot"></i>${m.active ? "1 practice session available" : "Coming soon"}</span>
      </a>`).join("");
  }
  function renderModule(id) {
    const m = MODULES.find(x => x.id === id);
    if (!m) { location.hash = "#/home#modules"; return; }
    show("module");
    $("#moduleContent").innerHTML = `
      <div class="module-hero">
        <div><span class="section-kicker">MODULE LIBRARY</span><h1>${esc(m.id.toUpperCase())}<span style="color:#b5bcad">.</span></h1><p>${m.active ? "Project Risk Management · Build confidence chapter by chapter, with carefully structured exam-style practice." : "The question bank for this module is not published yet. This page will list each available chapter and practice session as they're added."}</p></div>
        <span class="module-pill">${m.active ? "1 session ready" : "Preparing questions"}</span>
      </div>
      <div class="module-list">
        ${m.active ? `
          <div class="chapter-card">
            <div class="chapter-number">11</div>
            <div class="chapter-content"><span class="section-kicker">CHAPTER 11 · PROJECT UNCERTAINTY PLANNING</span><h2>Practice Session 01</h2><p>80 questions · 224 marks · 60-minute countdown · Guided answer review</p><a class="button button-dark" href="#/practice/prm/ch11/s1">Open practice session <span class="button-arrow">→</span></a></div>
          </div>` : `<div class="empty-module"><div class="empty-symbol">✳</div><h2>A little more time.</h2><p>This module has its own place in the library, but no live practice sessions yet. Chapter 11 in PRM is the first working demo.</p><p style="margin-top:20px"><a class="text-link" href="#/module/prm">Try the PRM demo →</a></p></div>`}
      </div>`;
  }

  function answer(id) { return (attempt?.answers || {})[id] || {}; }
  function isAnswered(q) {
    if (!attempt) return false;
    const a = answer(q.id);
    if (q.kind === "Multiple choice") return Boolean(a.choice);
    if (q.kind === "Fill in the blanks") return Boolean(a.blank1?.trim() && a.blank2?.trim());
    if (q.kind === "True or false") return Boolean(a.truth && (a.truth === "true" || a.correction?.trim()));
    return Boolean(a.text?.trim());
  }
  function numberAnswered() { return DATA.questions.filter(isAnswered).length; }
  function remaining() { return attempt ? Math.max(0, Math.ceil((attempt.endsAt - Date.now()) / 1000)) : DATA.limitSeconds; }
  function elapsed() { return attempt ? Math.min(DATA.limitSeconds, Math.ceil(((attempt.submittedAt || Date.now()) - attempt.startedAt) / 1000)) : 0; }

  function startSession() {
    if (attempt && !attempt.submittedAt) {
      location.hash = "#/practice/prm/ch11/s1";
      return;
    }
    attempt = { version:1, startedAt:Date.now(), endsAt:Date.now() + 3600 * 1000, submittedAt:null, timedOut:false, answers:{}, flags:[], reviews:{} };
    current = 1; filter = "all"; save();
    location.hash = "#/practice/prm/ch11/s1";
    route();
  }
  function completeSession(timedOut = false) {
    if (!attempt || attempt.submittedAt) return;
    attempt.submittedAt = Date.now();
    attempt.timedOut = timedOut;
    save();
    location.hash = "#/results/prm/ch11/s1";
    route();
    if (timedOut) notify("Time is up. Your saved answers have been submitted for review.");
  }
  function tick() {
    if (!attempt || attempt.submittedAt) return;
    if (remaining() <= 0) { completeSession(true); return; }
    const time = remaining();
    const clock = $("#examClock");
    clock.textContent = mins(time);
    clock.classList.toggle("warning", time <= 300);
    $("#timeProgress").style.width = (time / 3600 * 100) + "%";
  }
  function renderNav() {
    const count = numberAnswered();
    $("#answeredSummary").textContent = count + " / 80 answered";
    $("#answeredBar").style.width = (count / 80 * 100) + "%";
    $("#questionNavigator").innerHTML = DATA.questions.map(q => `
      <button type="button" data-navigate="${q.id}" class="${isAnswered(q) ? "answered" : ""} ${q.id === current ? "current" : ""} ${attempt.flags.includes(q.id) ? "flagged" : ""}" aria-label="Question ${q.id}${isAnswered(q) ? ", answered" : ""}${attempt.flags.includes(q.id) ? ", flagged" : ""}" ${current === q.id ? 'aria-current="step"' : ""}>${q.id}</button>`).join("");
  }
  function renderInput(q) {
    const a = answer(q.id);
    if (q.kind === "Multiple choice") {
      return `<span class="answer-label">Choose the best answer</span><div class="choice-list">${q.options.map((opt,i) => {
        const ch = "ABCD"[i];
        return `<label class="choice-item"><input type="radio" name="answer-choice" data-field="choice" value="${ch}" ${a.choice===ch ? "checked" : ""}><b>${ch}.</b><span>${esc(opt)}</span></label>`;
      }).join("")}</div>`;
    }
    if (q.kind === "Fill in the blanks") {
      return `<span class="answer-label">Complete both missing terms</span><div class="blanks">
        <div><label class="answer-label" for="blank1">Blank 1</label><input id="blank1" class="answer-input" data-field="blank1" autocomplete="off" placeholder="First missing term" value="${esc(a.blank1 || "")}"></div>
        <div><label class="answer-label" for="blank2">Blank 2</label><input id="blank2" class="answer-input" data-field="blank2" autocomplete="off" placeholder="Second missing term" value="${esc(a.blank2 || "")}"></div>
      </div><p class="answer-hint">Answer in the order the blanks appear.</p>`;
    }
    if (q.kind === "True or false") {
      return `<span class="answer-label">Choose an answer</span><div class="choice-list">
      <label class="choice-item"><input type="radio" name="truth" data-field="truth" value="true" ${a.truth==="true"?"checked":""}><span>True</span></label>
      <label class="choice-item"><input type="radio" name="truth" data-field="truth" value="false" ${a.truth==="false"?"checked":""}><span>False</span></label>
      </div><div style="margin-top:23px"><label for="correction" class="answer-label">Correction / explanation ${a.truth==="false"?"(required for false answers)":"(where needed)"}</label><textarea id="correction" class="answer-textarea medium" data-field="correction" placeholder="Explain or correct the statement here...">${esc(a.correction || "")}</textarea></div>`;
    }
    if (q.kind === "Identify the term") {
      return `<label class="answer-label" for="shortAnswer">Your answer</label><input class="answer-input" id="shortAnswer" data-field="text" autocomplete="off" placeholder="Write the exact term here..." value="${esc(a.text || "")}"><p class="answer-hint">Use the clearest technical term you know.</p>`;
    }
    return `<label class="answer-label" for="writtenAnswer">${q.kind === "Numerical reasoning" ? "Show your formula, working and final answer" : "Your written answer"}</label>
      <textarea id="writtenAnswer" class="answer-textarea" data-field="text" placeholder="${q.kind==="Numerical reasoning" ? "Formula → substitution → working → final answer..." : "Write your response here..."}">${esc(a.text || "")}</textarea>
      <p class="answer-hint">${q.marks} mark${q.marks!==1?"s":""} available. ${q.marks > 1 ? "Include enough distinct, relevant points to earn every mark." : "Keep it concise."}</p>`;
  }
  function showQuestion(id, scroll = false) {
    current = Math.max(1, Math.min(80, id));
    const q = qOf(current);
    $("#questionSection").textContent = q.kind.toUpperCase();
    $("#questionNumber").textContent = "QUESTION " + String(current).padStart(2,"0") + " OF 80";
    $("#questionMarks").textContent = q.marks + (q.marks === 1 ? " mark" : " marks");
    $("#questionPrompt").textContent = quote(q.prompt);
    $("#answerArea").innerHTML = renderInput(q);
    $("#flagButton").classList.toggle("flagged",attempt.flags.includes(current));
    $("#flagButton").textContent = attempt.flags.includes(current) ? "⚑ Flagged for review" : "⚑ Flag for review";
    $("#previousButton").disabled = current === 1;
    $("#previousButton").style.opacity = current === 1 ? ".45" : "1";
    $("#nextButton").innerHTML = current === 80 ? "Review progress <span class='button-arrow'>→</span>" : "Next question <span class='button-arrow'>→</span>";
    renderNav();
    if (scroll) window.scrollTo({top:0,behavior:"smooth"});
  }
  function renderExam() {
    show("exam");
    showQuestion(current);
    tick();
  }
  function updateAnswer(event) {
    if (!attempt || attempt.submittedAt) return;
    const field = event.target?.dataset?.field;
    if (!field) return;
    const a = attempt.answers[current] || (attempt.answers[current]={});
    a[field] = event.target.value;
    save();
    // Update progress without replacing focused input controls.
    const count = numberAnswered();
    $("#answeredSummary").textContent = count + " / 80 answered";
    $("#answeredBar").style.width = (count / 80 * 100) + "%";
    const dot = $("#questionNavigator button.current");
    if (dot) dot.classList.toggle("answered", isAnswered(qOf(current)));
  }
  function flagQuestion() {
    if (!attempt) return;
    if (attempt.flags.includes(current)) attempt.flags = attempt.flags.filter(n => n !== current);
    else attempt.flags.push(current);
    save(); showQuestion(current);
  }
  function submitAttempt() {
    if (!attempt || attempt.submittedAt) return;
    const remainingQuestions = DATA.questions.filter(q => !isAnswered(q));
    if (remainingQuestions.length) {
      notify("Answer all questions first. " + remainingQuestions.length + " still need an answer.");
      showQuestion(remainingQuestions[0].id, true);
      return;
    }
    if (confirm("Submit all 80 questions now? You won't be able to change your answers after submission.")) completeSession(false);
  }
  function accepted(value, options) { return options.some(o => canon(o) === canon(value)); }

  function autoGrade(q) {
    const a = answer(q.id);
    if (q.kind === "Multiple choice") return { score: a.choice && a.choice === q.correct ? 1 : 0, pending:0, objective:true };
    if (q.kind === "Identify the term") return { score: a.text && accepted(a.text,q.accepted?.[0] || []) ? 1:0, pending:0, objective:true };
    if (q.kind === "Fill in the blanks") return { score: (a.blank1 && accepted(a.blank1,q.accepted?.[0] || []) ? 1:0) + (a.blank2 && accepted(a.blank2,q.accepted?.[1] || []) ? 1:0), pending:0, objective:true };
    if (q.kind === "True or false") {
      if (!a.truth) return { score:0,pending:0,objective:true };
      if (a.truth !== q.correct) return { score:0,pending:0,objective:true };
      if (q.correct === "true") return { score:q.marks,pending:0,objective:true };
      // First mark for correctly identifying false; second for correcting it.
      return { score:1,pending:a.correction?.trim()?1:0,objective:false };
    }
    if (!a.text?.trim()) return { score:0,pending:0,objective:true };
    return { score:0,pending:q.marks,objective:false };
  }
  function grade(q) {
    const base=autoGrade(q);
    const assigned = attempt.reviews[q.id];
    const marked = base.pending === 0 || (assigned !== undefined && assigned !== null);
    const score = base.score + (marked ? Number(assigned || 0) : 0);
    return { ...base,score,marked };
  }
  function scoreStats() {
    const values=DATA.questions.map(grade);
    return {
      score:values.reduce((n,g)=>n+g.score,0),
      pending:values.reduce((n,g)=>n+(g.marked ? 0 : g.pending),0),
      marked:values.filter(g=>g.marked).length
    };
  }
  function displayAnswer(q) {
    const a=answer(q.id);
    if (q.kind==="Multiple choice") return a.choice ? a.choice + ". " + q.options["ABCD".indexOf(a.choice)] : "No answer";
    if (q.kind==="Fill in the blanks") return "1. " + (a.blank1||"—") + "\n2. " + (a.blank2||"—");
    if (q.kind==="True or false") return (a.truth||"Not answered").toUpperCase() + (a.correction?.trim() ? "\n\n" + a.correction : "");
    return a.text || "No answer submitted";
  }
  function reviewBadge(q,g) {
    if(!g.marked)return {className:"pending",label:"Needs marking"};
    if(g.score===q.marks)return {className:"",label:"Full marks"};
    return {className:"needs",label:g.score + " / " + q.marks + " marks"};
  }
  function updateResultsMeta() {
    const s=scoreStats();
    $("#resultScore").textContent=s.score+" / "+DATA.totalMarks;
    $("#scoreLabel").textContent=s.pending===0 ? "TOTAL SCORE" : "SCORE SO FAR";
    $("#scoreContext").textContent=s.pending===0 ?
      (Math.round(s.score/DATA.totalMarks*100)+"% · Fully reviewed") :
      (s.pending+" marks still need your review. This is not a final grade.");
    $("#reviewProgress").textContent=s.marked+" / 80";
    $("#timeUsed").textContent=mins(elapsed());
  }
  function renderReviews() {
    const visible=DATA.questions.filter(q=>{
      const g=grade(q);
      if(filter==="wrong")return g.marked && g.score<q.marks;
      if(filter==="pending")return !g.marked;
      return true;
    });
    $("#reviewList").innerHTML=visible.length ? visible.map(q=>{
      const g=grade(q), state=reviewBadge(q,g);
      return `<details class="review-item" data-review-question="${q.id}">
        <summary><span class="review-index">${String(q.id).padStart(2,"0")}</span><span class="review-title">${esc(quote(q.prompt))}</span><span class="review-status ${state.className}">${state.label}</span><span class="review-chevron">⌄</span></summary>
        <div class="review-body">
          <div class="review-answer"><h4>Your answer</h4><p>${esc(displayAnswer(q))}</p></div>
          <div class="review-answer right"><h4>Model answer / marking guidance</h4><p>${esc(q.memo)}</p></div>
          <div class="review-mark">
            <div><strong>${q.marks} marks available</strong><br><small>${g.pending ? "Compare your answer to the memorandum and award only earned marks." : "Checked automatically or no answer provided."}</small></div>
            ${g.pending ? `<label><span style="font-size:11px;color:#7d8978;margin-right:7px">Self-mark</span><select data-grade="${q.id}" aria-label="Award marks to question ${q.id}"><option value="" ${!g.marked?"selected":""} disabled>Choose marks</option>${Array.from({length:g.pending+1},(_,i)=>`<option value="${i}" ${g.marked&&attempt.reviews[q.id]===i?"selected":""}>${i} / ${g.pending}</option>`).join("")}</select></label>` : `<strong>${g.score} / ${q.marks} marks</strong>`}
          </div>
        </div></details>`;
    }).join("") : '<div class="review-empty">Nothing in this filter. Keep going ✳</div>';
    document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b.dataset.filter===filter));
  }
  function renderResults() {
    show("results");
    updateResultsMeta();
    renderReviews();
  }
  function route() {
    const path=location.hash || "#/home";
    if (path.startsWith("#/results/")) {
      if(attempt?.submittedAt){renderResults();return;}
      location.hash = "#/practice/prm/ch11/s1";return;
    }
    if(path.startsWith("#/practice/")) {
      if(attempt && !attempt.submittedAt && remaining()<=0)completeSession(true);
      else if(attempt?.submittedAt)location.hash="#/results/prm/ch11/s1";
      else if(attempt)renderExam();
      else {show("intro");$("#beginButton").textContent="Begin practice session →";}
      return;
    }
    if(path.startsWith("#/module/")) {
      const id=path.split("/")[2] || "prm";renderModule(id);return;
    }
    show("home");
    if(path.includes("#modules"))requestAnimationFrame(()=>$("#modules").scrollIntoView({behavior:"smooth",block:"start"}));
    if(path.includes("#how-it-works"))requestAnimationFrame(()=>$("#how-it-works").scrollIntoView({behavior:"smooth",block:"start"}));
  }

  // Events
  $("#beginButton").addEventListener("click",startSession);
  $("#previousButton").addEventListener("click",()=>showQuestion(current-1,true));
  $("#nextButton").addEventListener("click",()=> {
    if(current>=80){submitAttempt();return;}
    showQuestion(current+1,true);
  });
  $("#flagButton").addEventListener("click",flagQuestion);
  $("#submitExam").addEventListener("click",submitAttempt);
  $("#answerArea").addEventListener("input",updateAnswer);
  $("#answerArea").addEventListener("change",(e)=> {
    updateAnswer(e);
    if(e.target?.dataset.field==="truth") {
      const label=$("#answerArea label[for='correction']");
      if(label)label.textContent="Correction / explanation "+(e.target.value==="false"?"(required for false answers)":"(where needed)");
    }
  });
  $("#questionNavigator").addEventListener("click",e=> {
    const btn=e.target.closest("button[data-navigate]");
    if(btn)showQuestion(Number(btn.dataset.navigate),true);
  });
  $("#examExit").addEventListener("click",()=>{
    notify("Your progress is saved. The one-hour timer keeps running.");
    location.hash="#/module/prm";
  });
  $("#restartExam").addEventListener("click",()=>{
    if(confirm("Start a new attempt? Your current answers and review marks will be replaced.")){
      attempt=null;try{localStorage.removeItem(STORAGE)}catch(_err){}
      location.hash="#/practice/prm/ch11/s1";
      route();
    }
  });
  document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{
    filter=b.dataset.filter;renderReviews();
  }));
  $("#reviewList").addEventListener("change",e=>{
    const id=Number(e.target?.dataset?.grade);
    if(!id||!attempt)return;
    const q=qOf(id),max=autoGrade(q).pending;
    const award=Number(e.target.value);
    if(!Number.isFinite(award)||award<0||award>max)return;
    attempt.reviews[id]=award;save();
    updateResultsMeta();
    const details=e.target.closest("details");
    const g=grade(q),state=reviewBadge(q,g);
    if(details){const badge=details.querySelector(".review-status");badge.textContent=state.label;badge.className="review-status "+state.className;}
    if(filter!=="all")renderReviews();
  });
  window.addEventListener("hashchange",route);
  window.addEventListener("storage",(e)=>{if(e.key===STORAGE){attempt=readAttempt();route();}});
  document.addEventListener("visibilitychange",()=>{if(!document.hidden)tick()});
  renderModules();
  route();
  timeLoop=setInterval(tick,1000);
})();
"use strict";
(() => {
  const DATA = window.EXAM_DATA;
  if (!DATA || !Array.isArray(DATA.questions) || DATA.questions.length !== 80) {
    document.body.innerHTML = '<main style="font:16px system-ui;padding:4rem">The practice questions could not load. Please refresh the page.</main>';
    return;
  }

  const MODULES = [
    {id:"prm",name:"Project Management",active:true},
    {id:"adp",name:"ADP",active:false},
    {id:"adt",name:"ADT",active:false},
    {id:"its",name:"ITS",active:false}
  ];
  const CHAPTERS = [
    {n:9,title:"Chapter 09"},
    {n:11,title:"Project Uncertainty Planning",ready:true},
    {n:12,title:"Project Quality Planning & Kickoff"},
    {n:14,title:"Determining Project Progress and Results"},
    {n:15,title:"Chapter 15"}
  ];
    const STORAGE = "paperroom:prm:ch11:s1:v1";
  const HISTORY_STORAGE = "paperroom:history:prm:ch11:s1:v1";
  const $ = (sel) => document.querySelector(sel);
  const esc = (str) => String(str == null ? "" : str).replace(/[&<>"']/g, s => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" })[s]);
  const canon = (str) => String(str || "").normalize("NFKD").toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9 ]+/g," ").replace(/\s+/g," ").trim().replace(/^(a|an|the) /,"");
  const mins = (n) => String(Math.floor(n / 60)).padStart(2,"0") + ":" + String(n % 60).padStart(2,"0");
  const quote = (x) => x.replace(/\*\*(.*?)\*\*/g,"$1");
  const qOf = (id) => DATA.questions[id - 1];
  const section = (q) => q.kind.toUpperCase();
  let viewingHistoryId = null;
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
  function readHistory() {
    try {
      const value = JSON.parse(localStorage.getItem(HISTORY_STORAGE) || "[]");
      return Array.isArray(value) ? value.filter(a => a && a.startedAt && a.submittedAt && a.answers && a.reviews) : [];
    } catch (_) { return []; }
  }
  function archiveAttempt(item) {
    if (!item?.submittedAt) return;
    try {
      const entries = readHistory();
      const pos = entries.findIndex(x => x.startedAt === item.startedAt);
      const copy = JSON.parse(JSON.stringify(item));
      if (pos >= 0) entries[pos] = copy; else entries.push(copy);
      entries.sort((a,b)=>b.startedAt - a.startedAt);
      localStorage.setItem(HISTORY_STORAGE,JSON.stringify(entries));
    } catch (_) { notify("Browser storage is full. Your attempt history may not be saved."); }
  }
  function save() {
    if (!attempt) return;
    try {
      if (!viewingHistoryId) localStorage.setItem(STORAGE,JSON.stringify(attempt));
      if (attempt.submittedAt) archiveAttempt(attempt);
    } catch (_) { notify("Browser storage is unavailable. Changes might not be saved."); }
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
    $("#modulesGrid").innerHTML = MODULES.map(m =>
      '<a class="module-card ' + (m.active ? 'active' : '') + '" href="#/module/' + m.id + '">' +
      '<div class="module-card-top"><span class="module-abbr">' + m.id.toUpperCase() + '</span><span class="module-card-flower">✳</span></div>' +
      '<h3>' + esc(m.name) + '</h3><p>' + (m.active ? '5 chapters · first session ready' : 'Practice papers coming soon') + '</p>' +
      '<span class="module-status ' + (m.active ? '' : 'soon') + '"><i class="status-dot"></i>' + (m.active ? 'Open library' : 'Coming soon') + '</span></a>'
    ).join("");
  }
  function renderModule(id) {
    const m=MODULES.find(x=>x.id===id);
    if(!m) {location.hash="#/home#modules";return;}
    if(viewingHistoryId){attempt=readAttempt();viewingHistoryId=null;}
    show("module");
    const ongoing=Boolean(attempt&&!attempt.submittedAt&&remaining()>0);
    const chips=CHAPTERS.map(c=>
      '<article class="chapter-tile '+(c.ready?'is-live':'')+'"><div class="chapter-tile-top"><span class="chapter-index">'+String(c.n).padStart(2,'0')+'</span>' +
      '<span class="chapter-badge '+(c.ready?'is-ready':'')+'">'+(c.ready?'Ready to practise':'Coming soon')+'</span></div>' +
      '<div class="chapter-tile-body"><span class="tile-eyebrow">CHAPTER '+c.n+'</span><h3>'+esc(c.title)+'</h3><p>'+(c.ready?'80 questions · 224 marks · 60 minutes':'Practice sessions in preparation')+'</p></div>' +
      (c.ready ? '<a class="chapter-tile-action" href="#/practice/prm/ch11/s1">'+(ongoing?'Continue session':attempt?.submittedAt?'Review latest session':'Begin practice')+'</a>' :
        '<span class="chapter-tile-action muted">Not published yet</span>') + '</article>'
    ).join("");
    const history=readHistory();
    const records=history.slice(0,8).map(item=>{
      const stats=scoreStats(item),wrong=DATA.questions.filter(q=>{const g=grade(q,item);return g.marked&&g.score<q.marks;}).length;
      const date=new Date(item.startedAt).toLocaleDateString(undefined,{day:'numeric',month:'short',year:'numeric'});
      return '<a class="history-row" href="#/results/prm/ch11/s1/'+item.startedAt+'"><span class="history-icon">✓</span><span class="history-name"><strong>Chapter 11 · Session 01</strong><small>'+date+(item.timedOut?' · Timed out':' · Submitted')+'</small></span><span class="history-score"><strong>'+stats.score+'/'+DATA.totalMarks+'</strong><small>'+wrong+' to revisit'+(stats.pending?' · '+stats.pending+' marks pending':'')+'</small></span><span class="history-link">Review</span></a>';
    }).join("");
    $("#moduleContent").innerHTML = '<div class="module-compact-head"><div class="module-breadcrumb"><a href="#/home#modules">All modules</a><span>/</span><strong>'+m.id.toUpperCase()+'</strong></div>' +
      '<div class="module-title-line"><div><span class="section-kicker">EXAM PRACTICE LIBRARY</span><h1>'+esc(m.name)+'<span class="title-period">.</span></h1><p>' +
      (m.active?'Five chapters to master, one focused hour at a time.':'This module is reserved for your upcoming practice papers.') +
      '</p></div><div class="module-summary-chip"><strong>'+(m.active?'05':'00')+'</strong><small>'+(m.active?'chapters':'sessions')+'</small></div></div></div>' +
      (m.active ? '<div class="library-heading"><div><span class="section-kicker">YOUR CHAPTERS</span><h2>Choose your focus.</h2></div><small>1 ready · 4 coming soon</small></div>' +
        '<div class="chapter-tiles">'+chips+'</div><section class="history-section"><div class="library-heading"><div><span class="section-kicker">YOUR PROGRESS</span><h2>Previous attempts.</h2></div><small>Saved on this device</small></div>' +
        (ongoing?'<a class="resume-banner" href="#/practice/prm/ch11/s1"><strong>Continue your current session</strong><span>'+numberAnswered()+'/80 answered · '+mins(remaining())+' remaining</span></a>':'') +
        (history.length?'<div class="history-list">'+records+'</div>':'<div class="history-empty"><span>✳</span><div><strong>Your practice history starts here.</strong><p>Tomorrow you can return to see every answer, mark and mistake.</p></div></div>') +
        '<p class="storage-note">Stored in your browser, not synced between devices. Clearing site data erases local history.</p></section>' :
        '<div class="module-placeholder"><span>✳</span><h2>More sessions are on the way.</h2><p>Your exam module has a place here. Question papers will appear once ready.</p></div>');
  }
    function answer(id,source=attempt) { return (source?.answers || {})[id] || {}; }
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
    viewingHistoryId=null;attempt=readAttempt();
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
    $("#nextButton").textContent = current === 80 ? "Submit paper" : "Next question";
    renderNav();
    if (scroll) { $("#answerArea").scrollTop=0; const card=document.querySelector(".question-card"); if(card)card.scrollTop=0; }
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

  function autoGrade(q,source=attempt) {
    const a = answer(q.id,source);
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
  function grade(q,source=attempt) {
    const base=autoGrade(q,source);
    const assigned = source.reviews[q.id];
    const marked = base.pending === 0 || (assigned !== undefined && assigned !== null);
    const score = base.score + (marked ? Number(assigned || 0) : 0);
    return { ...base,score,marked };
  }
  function scoreStats(source=attempt) {
    const values=DATA.questions.map(q=>grade(q,source));
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
    const wrong=DATA.questions.filter(q=>{const g=grade(q);return g.marked&&g.score<q.marks;}).length;
    const el=$("#wrongCount");if(el)el.textContent=String(wrong);
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
      const previous=path.split("/")[5];
      if(previous){const old=readHistory().find(x=>String(x.startedAt)===previous);if(old){attempt=old;viewingHistoryId=previous;}}
      else {viewingHistoryId=null;attempt=readAttempt();}
      if(attempt?.submittedAt){renderResults();return;}
      location.hash = "#/practice/prm/ch11/s1";return;
    }
    if(path.startsWith("#/practice/")) {
      if(viewingHistoryId){attempt=readAttempt();viewingHistoryId=null;}
      if(attempt && !attempt.submittedAt && remaining()<=0)completeSession(true);
      else if(attempt?.submittedAt)location.hash="#/results/prm/ch11/s1";
      else if(attempt)renderExam();
      else {show("intro");$("#beginButton").textContent="Begin practice session";}
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
  if(attempt?.submittedAt)archiveAttempt(attempt);
  renderModules();
  route();
  timeLoop=setInterval(tick,1000);
})();
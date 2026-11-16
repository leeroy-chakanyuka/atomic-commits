"use strict";
(function paperroomConceptGraph(){
  let root=document.getElementById("itsConceptMap");
  const T=[
    {id:"advanced",title:"Advanced SQL",sub:"Chapter 08",group:"core",x:485,y:267,w:202,why:"The central idea: query across tables, transform results, and automate database work with Oracle SQL and PL/SQL.",qs:[],links:["joins","subqueries","views","plsql"]},
    {id:"joins",title:"Joins",sub:"INNER · OUTER · CROSS",group:"query",x:32,y:38,w:196,why:"Bring rows from different tables together. Know which rows each join retains, where filters belong, and how to avoid accidental Cartesian products.",qs:[1,9,19,20,33,35,45,46,47,61,62,68,71],links:["grouping"]},
    {id:"subqueries",title:"Subqueries",sub:"Nested SELECT statements",group:"query",x:265,y:42,w:199,why:"Use a SELECT inside another statement to filter, compare or calculate values. Distinguish a scalar result from a multirow result.",qs:[2,10,22,23,24,36,37,49,50,51,66,69,72],links:["comparisons","correlated"]},
    {id:"grouping",title:"GROUP BY & HAVING",sub:"Aggregate before filtering",group:"query",x:37,y:219,w:205,why:"Group individual rows, compute COUNT/SUM/AVG and use HAVING to keep qualifying groups. WHERE filters individual rows before grouping.",qs:[3,16,21,34,48,67,71,78,80],links:[]},
    {id:"comparisons",title:"IN, EXISTS, ANY, ALL",sub:"Multirow predicates",group:"query",x:264,y:216,w:201,why:"Understand membership, existence and comparisons against many returned values. These operators fix common scalar-versus-multirow mistakes.",qs:[10,15,22,23,24,36,66],links:[]},
    {id:"functions",title:"Oracle functions",sub:"Dates · text · numeric",group:"query",x:40,y:396,w:201,why:"Manipulate query output with TO_DATE, SYSDATE, NVL, UPPER, LENGTH, ROUND and date arithmetic. Oracle date formats matter.",qs:[13,25,26,39,52,53,54,68,70],links:["grouping"]},
    {id:"correlated",title:"Correlated queries",sub:"Outer row → inner query",group:"query",x:262,y:395,w:199,why:"Evaluate a subquery relative to each outer row, often using EXISTS or a department-specific average. Identify when inner SQL references an outer alias.",qs:[2,37,49,50,51,69,72],links:[]},
    {id:"set-ops",title:"Set operators",sub:"UNION · INTERSECT · MINUS",group:"query",x:266,y:552,w:205,why:"Combine entire query result sets. Understand how UNION differs from UNION ALL, how INTERSECT finds overlap, and how Oracle MINUS computes difference.",qs:[4,11,27,28,38,55,56,63,64,65,73],links:[]},
    {id:"views",title:"Views",sub:"Reusable virtual tables",group:"database",x:717,y:45,w:188,why:"Package a SELECT as a reusable view. Know when aggregate or joined views are not directly updatable.",qs:[7,17,29,40,57,74,80],links:["grouping"]},
    {id:"plsql",title:"PL/SQL",sub:"Blocks & control flow",group:"database",x:713,y:218,w:193,why:"Add procedural control around SQL with DECLARE, BEGIN, EXCEPTION and END. Procedures, cursors and triggers all build on PL/SQL.",qs:[5,6,18,32,42,43,60,76,77],links:["procedures","cursors","triggers"]},
    {id:"triggers",title:"Triggers",sub:"Automatic DML reactions",group:"database",x:713,y:397,w:192,why:"Run logic on INSERT, UPDATE or DELETE. Know BEFORE/AFTER, FOR EACH ROW and :NEW / :OLD references.",qs:[5,14,30,41,59,75],links:[]},
    {id:"dml",title:"Data modification",sub:"INSERT · UPDATE · DELETE",group:"database",x:715,y:554,w:193,why:"Understand the statements that change records, and how generated IDs or trigger side effects are attached to them.",qs:[12,14,58,59],links:["triggers","sequences"]},
    {id:"dynamic",title:"Dynamic SQL",sub:"Bind variables, not strings",group:"database",x:949,y:44,w:197,why:"Build statements at runtime when required, but always bind user data instead of concatenating untrusted text into SQL.",qs:[8,44,79],links:[]},
    {id:"cursors",title:"Cursors",sub:"OPEN · FETCH · CLOSE",group:"database",x:955,y:220,w:184,why:"Process multirow query results inside PL/SQL. Exit correctly on %NOTFOUND and avoid processing an extra row.",qs:[6,18,32,43,77],links:[]},
    {id:"procedures",title:"Procedures",sub:"IN · OUT · IN OUT",group:"database",x:953,y:399,w:190,why:"Create callable PL/SQL routines with well-defined parameters. IN parameters cannot be reassigned; use safe UPDATE logic.",qs:[18,42,60,76],links:[]},
    {id:"sequences",title:"Sequences",sub:"NEXTVAL · identifiers",group:"database",x:947,y:554,w:199,why:"Generate database-side numeric values such as primary keys with sequence_name.NEXTVAL.",qs:[31,58],links:[]}
  ];
  const byId=Object.fromEntries(T.map(n=>[n.id,n]));
  const edges=[
    ["advanced","joins"],["advanced","subqueries"],["advanced","views"],["advanced","plsql"],["advanced","functions"],["advanced","set-ops"],["advanced","dml"],
    ["joins","grouping"],["subqueries","comparisons"],["subqueries","correlated"],["grouping","views"],
    ["plsql","triggers"],["plsql","cursors"],["plsql","procedures"],["plsql","dynamic"],["dml","sequences"]
  ];
  const paper=window.PAPERROOM_LIBRARY?.["its-8-1"];
  const state={active:"joins",group:"all",focus:false,key:"",busy:false,messages:new Map(),unmount:null,drawer:null};
  const escape=s=>String(s??"").replace(/[&<>"']/g,x=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[x]));
  const canon=s=>String(s||"").normalize("NFKD").toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9 ]+/g," ").replace(/\s+/g," ").trim().replace(/^(a|an|the) /,"");
  const accepted=(v,options)=>options.some(o=>canon(v)===canon(o));
  const allAttempts=()=>{
    let arr=[];
    try{
      const old=JSON.parse(localStorage.getItem("paperroom:history:its:ch8:s1:v2")||"[]");
      if(Array.isArray(old))arr=old.filter(a=>a?.submittedAt&&a?.answers&&a?.reviews);
      const live=JSON.parse(localStorage.getItem("paperroom:its:ch8:s1:v2")||"null");
      if(live?.submittedAt&&live?.answers&&!arr.some(a=>a.startedAt===live.startedAt))arr.push(live);
    }catch(_e){}
    return arr;
  };
  function mark(q,a){
    const response=a.answers?.[q.id]||{},reviews=a.reviews||{};
    let score=0,possible=q.marks,reviewed=true;
    if(q.kind==="Multiple choice")score=response.choice===q.correct?1:0;
    else if(q.kind==="Identify the term")score=accepted(response.text,q.accepted?.[0]||[])?1:0;
    else if(q.kind==="Matching")score=(q.matchItems||[]).filter((x,i)=>response["match"+(i+1)]===x.correct).length;
    else if(q.kind==="SQL completion"||q.kind==="Fill in the blanks"){
      const count=q.blanks||q.accepted?.length||2;
      score=Math.min(possible,Array.from({length:count},(_,i)=>accepted(response["blank"+(i+1)],q.accepted?.[i]||[])?1:0).reduce((s,x)=>s+x,0)*possible/count);
    }else if(q.kind==="True or false"){
      score=response.truth===q.correct?(q.correct==="true"?possible:1):0;
      if(response.truth===q.correct&&q.correct==="false"&&response.correction?.trim()){
        if(reviews[q.id]===undefined)reviewed=false;
        else score+=Number(reviews[q.id]||0);
      }
    }else if(response.text?.trim()){
      if(reviews[q.id]===undefined)reviewed=false;
      else score=Number(reviews[q.id]||0);
    }
    return {score,possible,reviewed};
  }
  function stats(){
    const attempts=allAttempts(),data={};
    for(const n of T){
      if(!n.qs.length)continue;
      let earned=0,possible=0,questions=0,pending=0;
      for(const a of attempts)for(const id of n.qs){
        const q=paper?.questions?.find(x=>x.id===id);
        if(!q)continue;
        const g=mark(q,a);
        if(g.reviewed){earned+=g.score;possible+=g.possible;questions++;}
        else pending++;
      }
      data[n.id]={earned,possible,questions,pending,rate:possible?earned/possible:null};
    }
    return {attempts:attempts.length,topics:data};
  }
  const status=(n,s)=>{
    const z=s.topics[n.id];
    if(!z||z.rate===null||z.questions<2)return "unmeasured";
    return z.rate<.65?"needs-work":z.rate>=.85?"strong":"developing";
  };
  const linkPath=(a,b)=>{
    const from=byId[a],to=byId[b],x=from.x+from.w/2,y=from.y+36,X=to.x+to.w/2,Y=to.y+36;
    const cx=(x+X)/2,cy=(y+Y)/2;
    return `M ${x} ${y} Q ${cx} ${cy-(Math.abs(X-x)>260?25:6)} ${X} ${Y}`;
  };
  function mount(){
    const s=stats();
    const lines=edges.map(([a,b])=>`<path data-edge="${a} ${b}" d="${linkPath(a,b)}"></path>`).join("");
    const nodes=T.map(n=>`<button type="button" class="concept-node concept-${n.group} ${status(n,s)}" data-node="${n.id}" style="left:${n.x}px;top:${n.y}px;--node-width:${n.w}px" aria-label="Explore ${escape(n.title)}"><span class="concept-node-mark" aria-hidden="true"></span><span class="concept-node-name">${escape(n.title)}</span><span class="concept-node-sub">${escape(n.sub)}</span></button>`).join("");
    root.innerHTML=`<section class="concept-experience" aria-labelledby="conceptHeading">
      <div class="concept-heading"><div><span class="section-kicker">CHAPTER 08 · UNDERSTAND THE CONNECTIONS</span><h2 id="conceptHeading">A map of <em>what you know.</em></h2><p>Follow how Advanced SQL concepts build on one another. Choose any bubble to explore it or ask Gemini.</p></div><div class="concept-heading-meta"><span class="concept-meta-dot"></span> Interactive study map <small>All activity stays in this browser unless you send a Gemini message.</small></div></div>
      <div class="concept-toolbar" role="group" aria-label="Filter concept map">
        <button type="button" class="concept-filter is-active" data-group="all">All concepts</button>
        <button type="button" class="concept-filter" data-group="query">Querying</button>
        <button type="button" class="concept-filter" data-group="database">Database programming</button>
        <button type="button" class="concept-filter" data-focus="true">Show my weak spots</button>
        <span class="concept-toolbar-note">Scroll sideways on a smaller screen to explore the whole graph</span>
      </div>
      <div class="concept-map-viewport" tabindex="0" role="region" aria-label="Scrollable Chapter 8 concept map"><div class="concept-map-canvas">
        <svg viewBox="0 0 1170 650" class="concept-lines" aria-hidden="true" preserveAspectRatio="none">${lines}</svg>${nodes}
      </div></div>
      <div class="concept-map-bottom"><div class="concept-map-legend"><span><i class="concept-key concept-key-query"></i>Querying</span><span><i class="concept-key concept-key-database"></i>Database programming</span><span><i class="concept-key concept-key-weak"></i>Needs review (from saved marks)</span></div><span>Concept relationships are study connections, not strict prerequisites.</span></div>
      <div class="concept-learning-panel"><div><span class="section-kicker">FROM PRACTICE TO PROGRESS</span><h3>Your learning signals.</h3><p id="conceptProgressText"></p><div id="conceptWeakList" class="concept-weak-list"></div></div>
      <div class="concept-generate-card"><span class="concept-generate-symbol">✳</span><h4>A paper for your weak spots.</h4><p>Make a printable drill from existing Chapter 8 questions, selected using marks already reviewed on this device. AI analysis and newly written questions come later.</p><button type="button" id="conceptGenerate" class="button button-dark">Generate weakness paper · PDF</button><small id="conceptGenerateNote">No answers are included in the downloaded paper.</small></div></div>
    </section>`;
    root.addEventListener("click",onRootClick);
    sync();
    ensureDrawer();
  }
  function sync(){
    const s=stats();
    const measured=T.filter(n=>n.qs.length&&s.topics[n.id]?.rate!==null&&s.topics[n.id]?.questions>=2);
    const weakest=measured.filter(n=>s.topics[n.id].rate<.75).sort((a,b)=>s.topics[a.id].rate-s.topics[b.id].rate).slice(0,4);
    root.querySelectorAll("[data-node]").forEach(b=>{
      const n=byId[b.dataset.node];
      const visible=!state.focus?(state.group==="all"||state.group===n.group||n.id==="advanced"):(weakest.some(x=>x.id===n.id)||n.id==="advanced");
      b.classList.toggle("concept-dimmed",!visible);
      b.classList.toggle("concept-weak-focus",weakest.some(x=>x.id===n.id)&&state.focus);
    });
    root.querySelectorAll("[data-edge]").forEach(p=>{
      const [a,b]=p.dataset.edge.split(" ");
      const visibleA=!state.focus?(state.group==="all"||byId[a].group===state.group||a==="advanced"):(weakest.some(x=>x.id===a)||a==="advanced");
      const visibleB=!state.focus?(state.group==="all"||byId[b].group===state.group||b==="advanced"):(weakest.some(x=>x.id===b)||b==="advanced");
      p.classList.toggle("concept-dimmed",!(visibleA&&visibleB));
    });
    const progress=root.querySelector("#conceptProgressText"),items=root.querySelector("#conceptWeakList"),btn=root.querySelector("#conceptGenerate");
    progress.textContent=s.attempts?`${s.attempts} completed paper${s.attempts===1?"":"s"} found in local storage. Scores use objective marks and written questions you have self-marked; unreviewed written work is excluded.`:"No completed ITS Chapter 8 papers found on this device yet. Your graph will start showing topic performance after you submit and review a paper.";
    items.innerHTML=weakest.length?weakest.map(n=>`<button type="button" data-node="${n.id}" class="concept-weak-row"><strong>${escape(n.title)}</strong><span>${Math.round(s.topics[n.id].rate*100)}% reviewed marks <span aria-hidden="true">↗</span></span></button>`).join(""):`<p class="concept-empty">${s.attempts?"No clear weak topic from reviewed marks yet. Review more written answers for stronger signals.":"Once you finish a practice paper, your areas to revisit appear here."}</p>`;
    btn.disabled=!measured.length;
    root.querySelector("#conceptGenerateNote").textContent=measured.length?"Uses existing question-bank content; this is not AI-generated.":"Finish a paper and review its written answers to enable a targeted PDF.";
  }
  function onRootClick(e){
    const node=e.target.closest("[data-node]");
    if(node){open(node.dataset.node);return;}
    const filter=e.target.closest("[data-group]");
    if(filter){
      state.group=filter.dataset.group;state.focus=false;
      root.querySelectorAll(".concept-filter").forEach(b=>b.classList.toggle("is-active",b===filter));
      sync();return;
    }
    if(e.target.closest("[data-focus]")){
      state.focus=!state.focus;
      root.querySelectorAll(".concept-filter").forEach(b=>b.classList.toggle("is-active",b===e.target.closest("[data-focus]")));
      sync();return;
    }
    if(e.target.closest("#conceptGenerate"))makePaper();
  }
  function makePaper(){
    if(!paper||typeof window.PAPERROOM_DOWNLOAD_PDF!=="function")return;
    const s=stats();
    const n=T.filter(t=>t.qs.length&&s.topics[t.id]?.questions>=2).sort((a,b)=>s.topics[a.id].rate-s.topics[b.id].rate).slice(0,3);
    const ids=[...new Set(n.flatMap(t=>t.qs))].slice(0,24);
    const qs=ids.map(id=>paper.questions.find(x=>x.id===id)).filter(Boolean);
    if(!qs.length)return;
    window.PAPERROOM_DOWNLOAD_PDF({...paper,session:99,title:"Weakness drill: "+n.map(t=>t.title).join(", "),limitSeconds:2700,questions:qs,totalMarks:qs.reduce((sum,q)=>sum+q.marks,0)});
  }
  function ensureDrawer(){
    let d=document.getElementById("conceptDrawer");
    if(!d){
      d=document.createElement("div");d.id="conceptDrawer";d.className="concept-drawer-wrap";d.hidden=true;
      d.innerHTML=`<div class="concept-drawer-backdrop" data-close="true"></div><aside class="concept-drawer" role="dialog" aria-modal="true" aria-labelledby="conceptDrawerTitle"><div class="concept-drawer-top"><span class="section-kicker">ITS · CHAPTER 08</span><button type="button" class="concept-close" data-close="true" aria-label="Close concept discussion">×</button></div><div class="concept-drawer-content" id="conceptDrawerContent"></div></aside>`;
      document.body.appendChild(d);
      d.addEventListener("click",e=>{if(e.target.closest("[data-close]"))close();const b=e.target.closest("[data-related]");if(b)open(b.dataset.related)});
      d.addEventListener("submit",onForm);
      d.addEventListener("click",onDrawerClick);
      window.addEventListener("keydown",e=>{if(e.key==="Escape"&&!d.hidden)close()});
      window.addEventListener("hashchange",close);
    }
    state.drawer=d;
  }
  function open(id){
    const n=byId[id];if(!n)return;
    ensureDrawer();state.active=id;
    const s=stats(),r=s.topics[id],qcount=n.qs.length,pct=r?.rate===null||!r?"Not assessed yet":`${Math.round(r.rate*100)}% on reviewed marks`;
    const suggestions=["Explain this from first principles","Show me an Oracle SQL example","Give me a debugging question"];
    state.drawer.querySelector("#conceptDrawerContent").innerHTML=`
      <div class="concept-drawer-chapter">CONCEPT ${String(T.indexOf(n)+1).padStart(2,"0")} / ${String(T.length).padStart(2,"0")}</div>
      <h2 id="conceptDrawerTitle">${escape(n.title)}</h2><p class="concept-drawer-desc">${escape(n.why)}</p>
      <div class="concept-drawer-metrics"><div><strong>${qcount}</strong><span>related paper questions</span></div><div><strong>${escape(pct)}</strong><span>local progress signal</span></div></div>
      <div class="concept-drawer-links"><strong>Study connections</strong><div>${(n.links||[]).map(i=>`<button type="button" data-related="${i}">${escape(byId[i].title)} ↗</button>`).join("")||"<span>This is a foundational topic.</span>"}</div></div>
      <div class="concept-drawer-resources"><a href="#/practice/its/ch8/s1">Open Chapter 8 practice paper</a><a href="notes/ITS/Chapter-8.pdf" target="_blank" rel="noopener noreferrer">Read Chapter 8 notes</a></div>
      <div class="concept-chat-title"><div><span class="section-kicker">CONCEPT DISCUSSION</span><h3>Ask about ${escape(n.title)}.</h3></div><span class="concept-chat-status">${state.key?"Gemini ready":"Bring your Gemini key"}</span></div>
      <div class="concept-chat-messages" id="conceptChatMessages" role="log" aria-live="polite"></div>
      <div class="concept-starters">${suggestions.map((t,i)=>`<button type="button" data-prompt="${i}">${escape(t)}</button>`).join("")}</div>
      <form id="conceptChatForm" class="concept-chat-form"><label class="sr-only" for="conceptChatText">Ask a question about ${escape(n.title)}</label><textarea id="conceptChatText" rows="2" maxlength="1800" placeholder="Ask a question about this concept..."></textarea><button type="submit" class="button button-dark" ${state.busy?"disabled":""}>${state.busy?"Thinking...":"Send"}</button></form>
      <details class="concept-key-settings" ${state.key?"":"open"}><summary>${state.key?"Gemini connected for this tab · Change key":"Connect Gemini with your own API key"}</summary><p>Optional, directly from your browser to Google. No Paperroom server receives your key or chats. The key stays in memory for this tab only; it is never written to local storage. Treat a browser key as exposed to your device and extensions and restrict its use.</p><label for="conceptApiKey">Gemini API key</label><div class="concept-key-control"><input id="conceptApiKey" type="password" spellcheck="false" autocomplete="off" placeholder="Paste your Gemini API key"><button type="button" data-save-key="true">${state.key?"Replace":"Use for this tab"}</button>${state.key?'<button type="button" data-clear-key="true">Disconnect</button>':""}</div><small>Model: Gemini 3.8 Flash · Google API charges/limits may apply. Chat uses only this concept and messages you send, not your paper answers.</small></details>`;
    state.drawer.hidden=false;document.body.classList.add("concept-drawer-open");
    const closeBtn=state.drawer.querySelector(".concept-close");closeBtn?.focus();
    drawMessages();
  }
  function close(){
    if(state.drawer&&!state.drawer.hidden){state.drawer.hidden=true;document.body.classList.remove("concept-drawer-open");}
  }
  function drawMessages(){
    const host=state.drawer?.querySelector("#conceptChatMessages");if(!host)return;
    const msgs=state.messages.get(state.active)||[];
    host.innerHTML="";
    if(!msgs.length){const el=document.createElement("p");el.className="concept-chat-welcome";el.textContent="Use the prompts below or ask your own question. The discussion stays focused on this bubble.";host.appendChild(el);}
    for(const m of msgs){const e=document.createElement("div");e.className="concept-chat-message "+(m.role==="model"?"assistant":"student");e.textContent=m.text;host.appendChild(e);}
    host.scrollTop=host.scrollHeight;
  }
  function onDrawerClick(e){
    const target=e.target.closest("[data-prompt],[data-save-key],[data-clear-key]");if(!target)return;
    if(target.dataset.prompt!==undefined){
      const prompts=["Explain "+byId[state.active].title+" from first principles with a small Oracle SQL example.","Show me a realistic Oracle SQL query using "+byId[state.active].title+" and explain every clause.","Give me one debugging question about "+byId[state.active].title+" without revealing the answer yet."];
      state.drawer.querySelector("#conceptChatText").value=prompts[Number(target.dataset.prompt)];
      state.drawer.querySelector("#conceptChatText").focus();
    }else if(target.dataset.saveKey!==undefined){
      const k=state.drawer.querySelector("#conceptApiKey").value.trim();
      if(!k){state.drawer.querySelector("#conceptApiKey").focus();return;}
      state.key=k;open(state.active);
    }else if(target.dataset.clearKey!==undefined){state.key="";open(state.active);}
  }
  async function onForm(e){
    if(e.target.id!=="conceptChatForm")return;
    e.preventDefault();if(state.busy)return;
    const el=e.target.querySelector("textarea"),msg=el.value.trim(),id=state.active;
    if(!msg)return;
    if(!state.key){state.drawer.querySelector("#conceptApiKey")?.focus();return;}
    const history=state.messages.get(id)||[];
    history.push({role:"user",text:msg});state.messages.set(id,history);el.value="";drawMessages();
    state.busy=true;
    const button=e.target.querySelector("[type=submit]");button.disabled=true;button.textContent="Thinking...";
    try{
      const n=byId[id];
      const contents=history.slice(-12).map(m=>({role:m.role==="model"?"model":"user",parts:[{text:m.text}]}));
      const res=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent",{
        method:"POST",headers:{"Content-Type":"application/json","x-goog-api-key":state.key},
        body:JSON.stringify({systemInstruction:{parts:[{text:"You are an ITS Chapter 8 Oracle SQL tutor. Topic: "+n.title+". Context: "+n.why+" Give accurate concrete SQL/PLSQL examples. Answer concisely and clarify concepts. Do not claim you assessed the student's papers, and do not invent study scores."}]},contents})
      });
      const data=await res.json().catch(()=>({}));
      if(!res.ok)throw new Error(data.error?.message||"Gemini request failed ("+res.status+").");
      const answer=(data.candidates?.[0]?.content?.parts||[]).map(p=>p.text||"").join("\n").trim();
      if(!answer)throw new Error("Gemini did not return text for this request.");
      history.push({role:"model",text:answer});state.messages.set(id,history);
    }catch(err){
      history.push({role:"model",text:"Unable to reach Gemini: "+String(err?.message||err).slice(0,250)});state.messages.set(id,history);
    }finally{
      state.busy=false;
      if(state.active===id){drawMessages();const b=state.drawer?.querySelector("#conceptChatForm button");if(b){b.disabled=false;b.textContent="Send";}}
    }
  }
  window.PAPERROOM_CONCEPT_MAP={mount:()=>{root=document.getElementById("itsConceptMap");if(root)mount();},refresh:()=>{if(root?.isConnected)sync();},open};
  if(root)mount();
})();

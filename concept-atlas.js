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

  const N9=[
    {id:"design",title:"Database Design",sub:"Chapter 09",group:"core",x:483,y:273,w:204,chapter:9,why:"Design databases as part of the larger information system. Start with business requirements, develop and verify models, then implement and maintain them.",links:["sdlc","dblc","conceptual","logical"]},
    {id:"information-system",title:"Information Systems",sub:"People · data · software",group:"query",x:20,y:37,w:202,chapter:9,why:"An information system combines people, procedures, applications, hardware and databases to turn data into useful information.",links:["sdlc"]},
    {id:"sdlc",title:"SDLC",sub:"System development",group:"query",x:251,y:37,w:197,chapter:9,why:"The Systems Development Life Cycle covers planning, analysis, detailed design, implementation and maintenance. It is iterative rather than strictly linear.",links:["dblc","requirements"]},
    {id:"dblc",title:"DBLC",sub:"Database life cycle",group:"query",x:20,y:207,w:202,chapter:9,why:"The Database Life Cycle moves through initial study, design, implementation/loading, testing/evaluation, operation, and maintenance/evolution.",links:["initial-study","conceptual"]},
    {id:"initial-study",title:"Initial Study",sub:"Scope · problems · objectives",group:"query",x:251,y:207,w:199,chapter:9,why:"Study the organisation, its problems and constraints, objectives, scope and boundaries before committing to a database design.",links:["requirements"]},
    {id:"requirements",title:"Requirements",sub:"Data · users · rules",group:"query",x:20,y:379,w:202,chapter:9,why:"Gather user views, transactions, reports, data characteristics and business rules. Validate designs against the requirements they must satisfy.",links:["conceptual"]},
    {id:"conceptual",title:"Conceptual Design",sub:"DBMS-independent model",group:"query",x:251,y:379,w:199,chapter:9,why:"Create an abstract data model describing entities, attributes and relationships independently of a chosen DBMS.",links:["er","logical"]},
    {id:"er",title:"ER Modeling",sub:"Entities · relations",group:"query",x:250,y:553,w:200,chapter:9,why:"Use ER diagrams and business rules to model the relationships, cardinality and integrity needs of the information system.",links:["verification"]},
    {id:"dbms",title:"DBMS Selection",sub:"Features · cost · portability",group:"database",x:724,y:39,w:193,chapter:9,why:"Select database software that fits the required model, platform, functionality, portability, tooling and cost.",links:["logical"]},
    {id:"logical",title:"Logical Design",sub:"Tables · keys · constraints",group:"database",x:956,y:39,w:193,chapter:9,why:"Map the conceptual model to tables, columns, domains, relationships and constraints supported by the selected DBMS.",links:["verification","physical"]},
    {id:"physical",title:"Physical Design",sub:"Storage · access · indexes",group:"database",x:724,y:211,w:193,chapter:9,why:"Choose storage layout, indexes, access methods and other DBMS-level structures according to usage patterns, performance and infrastructure.",links:["performance"]},
    {id:"verification",title:"Model Verification",sub:"Validate requirements",group:"database",x:956,y:211,w:193,chapter:9,why:"Confirm that the design supports expected reports, insert/update/delete operations, data integrity, security and user requirements.",links:["security"]},
    {id:"security",title:"Integrity & Security",sub:"Roles · constraints",group:"database",x:724,y:383,w:193,chapter:9,why:"Define primary/foreign key constraints, database roles and appropriate access rights. Validate privacy and integrity requirements.",links:[]},
    {id:"performance",title:"Performance",sub:"Indexes · monitoring",group:"database",x:956,y:383,w:193,chapter:9,why:"Establish measurements, consider data volume and access patterns, and tune the logical and physical design against real workloads.",links:[]},
    {id:"strategies",title:"Design Strategies",sub:"Top-down · bottom-up",group:"database",x:724,y:552,w:193,chapter:9,why:"Top-down design identifies entities and then attributes; bottom-up identifies individual data elements and groups them into entities.",links:["centralized"]},
    {id:"centralized",title:"Team Approaches",sub:"Centralised · decentralised",group:"database",x:956,y:552,w:193,chapter:9,why:"Centralised design suits smaller systems; decentralised design coordinates many modules and sites, then integrates overlapping definitions into one model.",links:[]}
  ];
  const edges9=[
    ["design","sdlc"],["design","dblc"],["design","conceptual"],["design","logical"],["design","physical"],
    ["information-system","sdlc"],["sdlc","dblc"],["dblc","initial-study"],["initial-study","requirements"],
    ["requirements","conceptual"],["conceptual","er"],["conceptual","logical"],["dbms","logical"],
    ["logical","verification"],["logical","physical"],["verification","security"],["physical","performance"],
    ["design","strategies"],["strategies","centralized"]
  ];
  const byId=Object.fromEntries([...T,...N9].map(n=>[n.id,n]));
  const edges=[
    ["advanced","joins"],["advanced","subqueries"],["advanced","views"],["advanced","plsql"],["advanced","functions"],["advanced","set-ops"],["advanced","dml"],
    ["joins","grouping"],["subqueries","comparisons"],["subqueries","correlated"],["grouping","views"],
    ["plsql","triggers"],["plsql","cursors"],["plsql","procedures"],["plsql","dynamic"],["dml","sequences"]
  ];
  const paper=window.PAPERROOM_LIBRARY?.["its-8-1"];
  const state={active:"joins",view:"master",workspace:false,mountedView:null,mountedRoot:null,key:"",model:"gemini-3.5-flash",busy:false,messages:new Map(),drawer:null,offline:false,asked:false,viewSize:null,scale:1,x:0,y:0,cleanup:null,chapterText:new Map()};
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

  const W=1170,H=650;
  const paths={8:"notes/ITS/Chapter-8.pdf",9:"notes/ITS/Chapter-9.pdf"};
  const modes=[
    {id:"master",label:"Master map"},
    {id:"8",label:"Chapter 8"},
    {id:"9",label:"Chapter 9"}
  ];
  const current=()=>state.view==="8"?{nodes:T,links:edges,title:"Chapter 8",name:"Advanced SQL"}:state.view==="9"?{nodes:N9,links:edges9,title:"Chapter 9",name:"Database Design"}:{nodes:[
    {id:"master-its",title:"Information Systems",sub:"YOUR KNOWLEDGE AT A GLANCE",group:"core",x:456,y:100,w:258},
    {id:"master-8",title:"Chapter 8",sub:"Advanced SQL",group:"query",x:250,y:364,w:237},
    {id:"master-9",title:"Chapter 9",sub:"Database Design",group:"database",x:678,y:364,w:237}
  ],links:[["master-its","master-8"],["master-its","master-9"],["master-8","master-9"]],title:"Master concept map",name:"See how your chapters connect"};
  function coordsLink(from,to){
    const a={x:from.x+from.w/2,y:from.y+37},b={x:to.x+to.w/2,y:to.y+37};
    return `M ${a.x} ${a.y} Q ${(a.x+b.x)/2} ${(a.y+b.y)/2} ${b.x} ${b.y}`;
  }
  function mount(){
    root=document.getElementById("itsConceptMap");
    if(!root)return;
    if(state.cleanup){state.cleanup();state.cleanup=null;}
    const view=current(),scores=stats(),lookup=Object.fromEntries(view.nodes.map(n=>[n.id,n]));
    const html=`
      <section class="atlas" aria-label="ITS study concept maps">
        <div class="atlas-head"><div><span class="section-kicker">ITS · CONCEPT ATLAS</span><h2>${escape(view.title)}<em>.</em></h2><p>${escape(view.name)}. Select a bubble to study it.</p></div>
        <span class="atlas-small-note">Study maps fit your screen by default. Zoom or drag to explore.</span></div>
        <div class="atlas-toolbar">
          <div class="atlas-views" role="group" aria-label="Choose graph">
            ${modes.filter(m=>!state.workspace||m.id!=="master").map(m=>`<button type="button" data-view="${m.id}" class="${state.view===m.id?"active":""}" aria-pressed="${state.view===m.id}">${m.label}</button>`).join("")}
          </div>
          <div class="atlas-zoom" role="group" aria-label="Map zoom">
            <button type="button" data-zoom="out" aria-label="Zoom out">−</button>
            <button type="button" data-zoom="fit" aria-label="Fit map to view">Fit</button>
            <button type="button" data-zoom="in" aria-label="Zoom in">+</button>
          </div>
        </div>
        <div id="atlasViewport" class="atlas-viewport" role="region" aria-label="${escape(view.title)}: zoomable and draggable knowledge graph" tabindex="0">
          <div class="atlas-stage" id="atlasStage" style="width:${W}px;height:${H}px">
            <svg class="atlas-lines" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" aria-hidden="true">
              ${view.links.map(([a,b])=>`<path d="${coordsLink(lookup[a],lookup[b])}"/>`).join("")}
            </svg>
            ${view.nodes.map(n=>`<button type="button" class="atlas-node atlas-node-${n.group} ${n.id==="master-its"?"atlas-central":""} ${state.workspace&&n.id===state.active?"is-selected":""} ${(n.chapter||8)===8&&state.view==="8"&&status(n,scores)==="needs-work"?"atlas-weak":""}" data-node="${n.id}" style="left:${n.x}px;top:${n.y}px;width:${n.w}px" aria-label="${escape(n.title)}"><strong>${escape(n.title)}</strong><small>${escape(n.sub)}</small></button>`).join("")}
          </div>
          <div class="atlas-help">Drag to pan · Use + / − to zoom · Fit to reset</div>
        </div>
        <div class="atlas-footer"><span>${state.view==="master"?"Chapter 8 connects query implementation with Chapter 9 database design.":`${view.nodes.length} topics · Select any concept for discussion or notes.`}</span>
          ${state.view==="8"?'<button type="button" data-progress="true">Review Chapter 8 progress & weakness papers</button>':""}
          ${state.view==="9"?'<span>Chapter 9 practice-paper scoring is not available yet.</span>':""}
        </div>
        ${state.view==="8"?`<details class="atlas-progress" id="atlasProgress"><summary>Local learning signals and weakness paper</summary><div class="atlas-progress-body"><p id="atlasProgressSummary"></p><div id="atlasWeakItems"></div><button id="atlasDownloadWeak" type="button" class="button button-dark">Create weakness drill PDF</button><small>Uses existing Chapter 8 questions. No AI questions are generated.</small></div></details>`:""}
      </section>`;
    root.innerHTML=html;
    root.addEventListener("click",onClick);
    state.mountedView=state.view;
    state.mountedRoot=root;

    const vp=root.querySelector("#atlasViewport"),stage=root.querySelector("#atlasStage");
    const apply=()=>stage.style.transform=`translate(${state.x}px,${state.y}px) scale(${state.scale})`;
    const fit=()=>{
      const w=vp.clientWidth||900,h=vp.clientHeight||600;
      state.scale=Math.min((w-28)/W,(h-28)/H,1.3);
      state.x=(w-W*state.scale)/2;state.y=(h-H*state.scale)/2;apply();
    };
    const zoom=(factor,cx=vp.clientWidth/2,cy=vp.clientHeight/2)=>{
      const next=Math.max(.22,Math.min(2.5,state.scale*factor));
      const ratio=next/state.scale;
      state.x=cx-(cx-state.x)*ratio;state.y=cy-(cy-state.y)*ratio;state.scale=next;apply();
    };
    let gesture=null;
    const down=e=>{
      if(e.target.closest("button"))return;
      if(e.button!==0&&e.pointerType!=="touch")return;
      gesture={id:e.pointerId,x:e.clientX,y:e.clientY,startX:state.x,startY:state.y};
      vp.setPointerCapture(e.pointerId);
    };
    const move=e=>{
      if(gesture?.id!==e.pointerId)return;
      state.x=gesture.startX+e.clientX-gesture.x;
      state.y=gesture.startY+e.clientY-gesture.y;apply();
    };
    const up=e=>{if(gesture?.id===e.pointerId)gesture=null;};
    const wheel=e=>{if(!e.ctrlKey&&!e.metaKey)return;e.preventDefault();const r=vp.getBoundingClientRect();zoom(e.deltaY<0?1.12:.89,e.clientX-r.left,e.clientY-r.top);};
    const key=e=>{if(e.key==="+"||e.key==="="){zoom(1.25);e.preventDefault();}if(e.key==="-"){zoom(.8);e.preventDefault();}if(e.key==="0"){fit();e.preventDefault();}};
    const resize=typeof ResizeObserver==="function"?new ResizeObserver(()=>fit()):null;
    vp.addEventListener("pointerdown",down);vp.addEventListener("pointermove",move);vp.addEventListener("pointerup",up);vp.addEventListener("pointercancel",up);
    vp.addEventListener("wheel",wheel,{passive:false});vp.addEventListener("keydown",key);
    resize?.observe(vp);
    state.cleanup=()=>{resize?.disconnect();vp.removeEventListener("pointerdown",down);vp.removeEventListener("pointermove",move);vp.removeEventListener("pointerup",up);vp.removeEventListener("pointercancel",up);vp.removeEventListener("wheel",wheel);vp.removeEventListener("keydown",key);root.removeEventListener("click",onClick)};
    state.viewSize={fit,zoom};fit();
    if(state.view==="8")updateSignals();
  }
  function updateSignals(){
    const p=root?.querySelector("#atlasProgressSummary");if(!p)return;
    const s=stats(),measured=T.filter(n=>n.qs.length&&s.topics[n.id]?.questions>=2);
    const sorted=measured.sort((a,b)=>s.topics[a.id].rate-s.topics[b.id].rate).slice(0,4);
    p.textContent=s.attempts?`${s.attempts} completed attempts saved on this device. This excludes written answers that have not been self-marked.`:"No completed Chapter 8 paper on this device. Submit and mark a paper to see weaknesses here.";
    root.querySelector("#atlasWeakItems").innerHTML=sorted.map(n=>`<button type="button" data-node="${n.id}">${escape(n.title)} · ${Math.round(s.topics[n.id].rate*100)}%</button>`).join("")||"<span>No reviewed scores to compare yet.</span>";
    root.querySelector("#atlasDownloadWeak").disabled=!measured.length;
  }
  function makePaper(){
    const s=stats();
    const n=T.filter(t=>t.qs.length&&s.topics[t.id]?.questions>=2).sort((a,b)=>s.topics[a.id].rate-s.topics[b.id].rate).slice(0,3);
    const ids=[...new Set(n.flatMap(t=>t.qs))].slice(0,24);
    const qs=ids.map(id=>paper?.questions?.find(x=>x.id===id)).filter(Boolean).map((q,i)=>({...q,id:i+1}));
    if(qs.length&&typeof window.PAPERROOM_DOWNLOAD_PDF==="function")
      window.PAPERROOM_DOWNLOAD_PDF({...paper,session:99,title:"Weakness drill · "+n.map(t=>t.title).join(", "),limitSeconds:2700,questions:qs,totalMarks:qs.reduce((total,q)=>total+q.marks,0)});
  }
  function switchView(id){
    if(!["master","8","9"].includes(id))return;
    state.view=id;close();mount();
  }

  function onClick(e){
    const view=e.target.closest("[data-view]");
    if(view){
      const id=view.dataset.view;
      if(state.workspace){
        if(id==="master"){location.hash="#/module/its";return;}
        location.hash="#/study/its/ch"+id+"/"+(id==="9"?"design":"advanced");
      }else switchView(id);
      return;
    }
    const zoom=e.target.closest("[data-zoom]");
    if(zoom){
      if(zoom.dataset.zoom==="fit")state.viewSize?.fit();
      else state.viewSize?.zoom(zoom.dataset.zoom==="in"?1.3:1/1.3);
      return;
    }
    const node=e.target.closest("[data-node]");
    if(node){
      const id=node.dataset.node;
      if(id==="master-8"){switchView("8");return;}
      if(id==="master-9"){switchView("9");return;}
      if(id==="master-its"){switchView("8");return;}
      const concept=byId[id];
      if(concept)location.hash="#/study/its/ch"+(concept.chapter||8)+"/"+encodeURIComponent(id);
      return;
    }
    if(e.target.closest("[data-progress]"))root.querySelector("#atlasProgress")?.setAttribute("open","");
    if(e.target.closest("#atlasDownloadWeak"))makePaper();
  }

  // The discussion is part of the dedicated page, not a modal overlay.
  function ensureDrawer(){
    const panel=document.getElementById("conceptStudySidebar");
    if(!panel)return false;
    if(!panel.dataset.atlasBound){
      panel.addEventListener("click",onDrawerClick);
      panel.addEventListener("submit",onDrawerSubmit);
      panel.dataset.atlasBound="yes";
    }
    state.drawer=panel;
    return true;
  }
  function open(id){
    const n=byId[id];if(!n)return;
    state.active=id;if(!ensureDrawer())return;
    const chapter=n.chapter||8;
    state.drawer.querySelector("#conceptDrawerChapter").textContent="ITS · CHAPTER "+String(chapter).padStart(2,"0");
    const count=n.qs?.length||0,links=(n.links||[]).filter(k=>byId[k]);
    const firstTime=!state.key&&!state.asked&&!state.offline;
    state.drawer.querySelector("#conceptDrawerContent").innerHTML=`
      <div class="atlas-drawer-heading"><span class="section-kicker">EXPLORE A CONCEPT</span><h2 id="conceptDrawerTitle">${escape(n.title)}</h2><p>${escape(n.why)}</p>
        <div class="atlas-related">${links.map(id=>`<button type="button" data-related="${escape(id)}">${escape(byId[id].title)}</button>`).join("")}</div>
      </div>
      <div class="atlas-chat"><div class="atlas-chat-head"><div><span class="section-kicker">DISCUSSION</span><h3>Ask about ${escape(n.title)}.</h3></div>
        ${state.key?'<button type="button" data-settings="true" class="atlas-small-button">Gemini settings</button>':""}</div>
        ${firstTime?`<form id="atlasKeyForm" class="atlas-key-form"><strong>Connect Gemini</strong><p>Use your own API key for questions grounded in Chapter ${chapter}. Your key stays in this tab and goes directly to Google.</p><label for="atlasKey">Gemini API key</label><input id="atlasKey" type="password" spellcheck="false" autocomplete="off" placeholder="Paste your API key" required><div class="atlas-inline-actions"><button type="submit" class="button button-dark">Connect and discuss</button><button type="button" data-offline="true">Continue without AI</button></div><small>For personal browser use only. Browser-based keys aren't as protected as server-held keys.</small></form>`:""}
        ${state.key?`<div class="atlas-chat-messages" id="atlasChatMessages" role="log" aria-live="polite"></div><div class="atlas-quick-prompts"><button type="button" data-prompt="explain">Explain simply</button><button type="button" data-prompt="example">Give an example</button><button type="button" data-prompt="test">Test me</button></div><form id="atlasChatForm" class="atlas-chat-form"><label class="sr-only" for="atlasMessage">Your question</label><textarea id="atlasMessage" maxlength="2500" rows="3" placeholder="Ask a question about this section..."></textarea><div class="atlas-sendbar"><span id="atlasChatStatus">Source: Chapter ${chapter} notes</span><button class="button button-dark" type="submit" ${state.busy?"disabled":""}>${state.busy?"Working...":"Send"}</button></div></form>`:""}
        ${!state.key&&!firstTime?`<div class="atlas-offline"><p>You can study this topic without AI. Read the notes or work through the relevant paper questions.</p><div class="atlas-offline-actions"><button type="button" data-settings="true">Connect Gemini</button><a href="${paths[chapter]}" target="_blank" rel="noopener noreferrer">Open chapter notes</a></div></div>`:""}
      </div>
      <details class="atlas-extra"><summary>Notes, questions and study details</summary><div><a href="${paths[chapter]}" target="_blank" rel="noopener noreferrer">Chapter ${chapter} PDF</a>${chapter===8?`<a href="#/practice/its/ch8/s1">Chapter 8 practice paper</a><p>${count} question-bank questions linked to this concept. This mapping supports local progress, not automatic AI grading.</p>${count?`<p>Question IDs: ${n.qs.join(", ")}</p>`:""}`:"<p>Chapter 9 practice paper is not available yet.</p>"}</div></details>
      <div id="atlasSettings" class="atlas-settings" hidden><label for="atlasModel">Gemini model</label><select id="atlasModel"><option value="gemini-3.5-flash" ${state.model==="gemini-3.5-flash"?"selected":""}>Gemini 3.5 Flash (default)</option><option value="gemini-3.5-flash-lite" ${state.model==="gemini-3.5-flash-lite"?"selected":""}>Gemini 3.5 Flash-Lite</option><option value="gemini-3.8-flash" ${state.model==="gemini-3.8-flash"?"selected":""}>Gemini 3.8 Flash</option></select><label for="atlasChangeKey">Change API key (optional)</label><input type="password" id="atlasChangeKey" placeholder="Paste new key"><div class="atlas-inline-actions"><button type="button" data-replace-key="true">Save settings</button><button type="button" data-clear-key="true">Disconnect</button></div><p>API key and chat history are stored in this tab's memory only. Prompts and chapter text are sent directly to Google when you use AI. Calls time out after 25 seconds.</p></div>`;
    state.drawer.hidden=false;
    root?.querySelectorAll(".atlas-node[data-node]").forEach(button=>{
      const chosen=button.dataset.node===id;
      button.classList.toggle("is-selected",chosen);
      button.setAttribute("aria-pressed",String(chosen));
    });
    if(firstTime)state.drawer.querySelector("#atlasKey")?.focus();
    renderMessages();
  }
  function close(){ /* The study sidebar stays visible for the lifetime of the study page. */ }
  function renderMessages(){
    const list=state.drawer?.querySelector("#atlasChatMessages");
    if(!list)return;
    const ms=state.messages.get(state.active)||[];
    list.replaceChildren();
    if(!ms.length){const note=document.createElement("p");note.className="atlas-empty-message";note.textContent="Ask a question grounded in this chapter, or use a suggestion below.";list.appendChild(note);}
    for(const m of ms){const box=document.createElement("div");box.className="atlas-bubble "+(m.role==="model"?"gemini":m.role==="error"?"error":"student");box.textContent=m.text;list.appendChild(box);}
    list.scrollTop=list.scrollHeight;
  }
  function onDrawerClick(e){
    if(e.target.closest("[data-close]")){close();return;}
    const rel=e.target.closest("[data-related]");if(rel){const n=byId[rel.dataset.related];if(n)location.hash="#/study/its/ch"+(n.chapter||8)+"/"+n.id;return;}
    if(e.target.closest("[data-offline]")){state.asked=true;state.offline=true;open(state.active);return;}
    if(e.target.closest("[data-settings]")){if(!state.key){state.asked=false;state.offline=false;open(state.active);}else{const box=state.drawer.querySelector("#atlasSettings");box.hidden=!box.hidden;}return;}
    if(e.target.closest("[data-clear-key]")){state.key="";state.offline=true;open(state.active);return;}
    if(e.target.closest("[data-replace-key]")){const k=state.drawer.querySelector("#atlasChangeKey").value.trim();if(k)state.key=k;state.model=state.drawer.querySelector("#atlasModel").value;open(state.active);return;}
    const p=e.target.closest("[data-prompt]");if(p){
      const n=byId[state.active],prompts={explain:`Explain ${n.title} in Chapter ${n.chapter||8} from first principles.`,example:`Show a practical example of ${n.title} grounded in the provided chapter.`,test:`Ask me one targeted exam-style question on ${n.title}, without giving me the answer yet.`};
      const input=state.drawer.querySelector("#atlasMessage");if(input){input.value=prompts[p.dataset.prompt];input.focus();}
    }
  }
  function onDrawerSubmit(e){
    if(e.target.id==="atlasKeyForm"){
      e.preventDefault();const k=e.target.querySelector("#atlasKey")?.value?.trim();
      if(!k)return;state.key=k;state.asked=true;state.offline=false;open(state.active);
    }else if(e.target.id==="atlasChatForm"){e.preventDefault();send(e.target);}
  }
  async function chapterText(chapter,onStatus){
    if(state.chapterText.has(chapter))return state.chapterText.get(chapter);
    onStatus("Reading Chapter "+chapter+" notes...");
    const res=await fetch(paths[chapter],{cache:"force-cache"});
    if(!res.ok)throw new Error("Chapter PDF could not be loaded ("+res.status+").");
    const bytes=await res.arrayBuffer();
    const pdfjs=await import("https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.min.mjs");
    pdfjs.GlobalWorkerOptions.workerSrc="https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs";
    const pdf=await pdfjs.getDocument({data:new Uint8Array(bytes)}).promise;
    const pages=[];
    for(let page=1;page<=pdf.numPages;page++){
      if(page%5===0)onStatus("Reading chapter: page "+page+" of "+pdf.numPages);
      const text=await (await pdf.getPage(page)).getTextContent();
      pages.push("[Page "+page+"]\n"+text.items.map(item=>item.str||"").join(" "));
    }
    const all=pages.join("\n\n").trim();
    if(all.length<300)throw new Error("The chapter PDF has too little extractable text. The chat was not sent.");
    state.chapterText.set(chapter,all);
    return all;
  }
  async function send(form){
    if(state.busy||!state.key)return;
    const textarea=form.querySelector("textarea"),msg=textarea?.value.trim();
    if(!msg)return;
    const n=byId[state.active],id=n.id,chapter=n.chapter||8;
    const history=state.messages.get(id)||[];history.push({role:"user",text:msg});state.messages.set(id,history);
    textarea.value="";renderMessages();
    state.busy=true;
    const st=state.drawer.querySelector("#atlasChatStatus"),button=form.querySelector("button[type=submit]");
    const setStatus=s=>{if(st)st.textContent=s;};
    if(button){button.disabled=true;button.textContent="Thinking...";}
    let timer;
    try{
      const source=await chapterText(chapter,setStatus);
      setStatus("Asking "+state.model.replace("gemini-","Gemini ")+"...");
      const controller=new AbortController();
      timer=setTimeout(()=>controller.abort(),25000);
      const messages=history.slice(-10).map(m=>({role:m.role==="model"?"model":"user",parts:[{text:m.text}]}));
      const system=`You are a careful tutor for Information Systems Chapter ${chapter}. Selected concept: ${n.title}. Description: ${n.why}. The full text extracted from the provided Chapter ${chapter} PDF follows. Focus on the selected concept and its dependencies. Use the chapter as your primary source; you may supplement it with clearly labeled general explanation. Do not invent citations, scores or facts missing from the notes. Some diagrams may not be extractable from the PDF. Keep responses concise. If testing the learner, ask one question at a time without revealing the answer until they attempt it.\n\nCHAPTER SOURCE:\n${source}`;
      const resp=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(state.model)}:generateContent`,{
        method:"POST",signal:controller.signal,
        headers:{"Content-Type":"application/json","x-goog-api-key":state.key},
        body:JSON.stringify({systemInstruction:{parts:[{text:system}]},contents:messages,generationConfig:{maxOutputTokens:3000,thinkingConfig:{thinkingLevel:state.model==="gemini-3.8-flash"?"low":"minimal"}}})
      });
      const data=await resp.json().catch(()=>({}));
      if(!resp.ok)throw new Error(data.error?.message||"Gemini API returned "+resp.status);
      const reply=(data.candidates?.[0]?.content?.parts||[]).map(p=>p.text||"").join("\n").trim();
      if(!reply)throw new Error("Gemini returned an empty answer.");
      history.push({role:"model",text:reply});
    }catch(err){
      const why=err?.name==="AbortError"?"The Gemini request exceeded 25 seconds. Try again or choose a faster model.":String(err?.message||err).slice(0,260);
      history.push({role:"error",text:"Couldn't complete the request: "+why});
    }finally{
      if(timer)clearTimeout(timer);
      state.busy=false;renderMessages();
      const b=state.drawer?.querySelector("#atlasChatForm button[type=submit]");if(b){b.disabled=false;b.textContent="Send";}
      const statusEl=state.drawer?.querySelector("#atlasChatStatus");if(statusEl)statusEl.textContent="Chapter "+chapter+" source · "+state.model;
    }
  }

  function renderStudy(chapter,id){
    const host=document.getElementById("itsStudyMap");
    const panel=document.getElementById("conceptStudySidebar");
    if(!host||!panel)return;
    const chapterId=String(chapter)==="9"?"9":"8";
    const graph=chapterId==="9"?N9:T;
    const valid=graph.some(node=>node.id===id)?id:chapterId==="9"?"design":"advanced";
    const needsMount=state.mountedRoot!==host||state.mountedView!==chapterId||!host.querySelector("#atlasViewport");
    state.workspace=true;
    state.view=chapterId;
    root=host;
    if(needsMount)mount();
    open(valid);
  }
  window.PAPERROOM_CONCEPT_MAP={
    mount:()=>{
      state.workspace=false;
      root=document.getElementById("itsConceptMap");
      if(root)mount();
    },
    refresh:()=>{if(root?.isConnected&&state.view==="8")updateSignals();},
    open,switchView,renderStudy
  };
  if(root)mount();

})();

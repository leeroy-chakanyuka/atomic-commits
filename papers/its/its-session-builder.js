/* ITS 2026 practice bank: 18 timed 80-question papers.
 * Existing Chapter 8 Paper 1 is retained unchanged; all others are assembled
 * from original topic-specific assessment blueprints at page load. This ensures
 * a versioned, reproducible paper per session with independent answer keys.
 */
(function () {
  "use strict";
  const library=window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
  const bank=window.PAPERROOM_ITS_TOPICS||{};
  const names={
    8:"Advanced SQL",
    9:"Database Design",
    10:"Transaction Management and Concurrency Control",
    11:"Database Performance Tuning and Query Optimization",
    12:"Distributed Database Management Systems"
  };
  const contexts=["campus information system","retail operations platform","regional public-service system"];
  const LETTERS="ABCD";
  function rotate(arr,n){
    if(!arr.length)return [];
    const k=((n%arr.length)+arr.length)%arr.length;
    return arr.slice(k).concat(arr.slice(0,k));
  }
  function paperFor(chapter,session){
    const topics=bank[chapter];
    if(!Array.isArray(topics)||topics.length!==20)throw new Error("ITS "+chapter+" must have 20 vetted concepts.");
    const questions=[],topicBase=Number(chapter);
    const put=q=>{q.id=questions.length+1;questions.push(q);};
    // A: exact terminology, with accepted aliases for punctuation or plurals.
    for(let i=0;i<topics.length;i++){
      const [term,definition,scenario,misconception,guide]=topics[i];
      const intro=session===1?
        "Identify the technical concept described below.":
        session===2?"Name the best technical term for the following situation.":
        "Which precise concept would an examiner expect here?";
      const detail=session===1?definition:session===2?scenario:
        "A team working on a "+contexts[(i+session)%contexts.length]+" needs this capability: "+definition;
      put({
        kind:"Identify the term",topic:term,marks:1,
        prompt:intro+" "+detail,
        accepted:[[term,term.replace(/\s*\/\s*/g," / "),term.replace(/[\u2013\u2014]/g,"-")]],
        memo:term+". "+definition+" Case: "+scenario
      });
    }
    // B: concept discrimination with realistic case context and deliberate distractors.
    // One matching question per group, with three different matching scenarios.
    for(let g=0;g<5;g++){
      const group=topics.slice(g*4,g*4+4);
      for(let k=0;k<4;k++){
        const i=g*4+k,[term,definition,scenario,misconception,guide]=topics[i];
        if(k===0){
          const order=rotate(group.map(v=>v[0]),(g+session)%4);
          const letters=Object.fromEntries(order.map((title,idx)=>[title,LETTERS[idx]]));
          const itemOrder=rotate(group.slice(0,3),session+g);
          put({
            kind:"Matching",topic:term,marks:3,
            prompt:"Match the "+group.map(v=>v[0]).join(", ")+" scenarios to their correct technical concepts (Chapter "+chapter+").",
            matchItems:itemOrder.map(v=>({text:v[2],correct:letters[v[0]]})),
            matchOptions:order.map((title,idx)=>({letter:LETTERS[idx],text:title})),
            memo:itemOrder.map((v,idx)=>(idx+1)+" → "+letters[v[0]]+" ("+v[0]+"): "+v[1]).join("; ")
          });
        }else{
          const options=rotate(group.map(v=>v[0]),(i*2+session)%4);
          put({
            kind:"Multiple choice",topic:term,marks:1,
            prompt:(session===1?"Scenario: ":session===2?"Application check: ":"Choose the best diagnosis: ")+scenario+" Which concept is most directly relevant?",
            options,correct:LETTERS[options.indexOf(term)],
            memo:term+". "+definition+" "+guide
          });
        }
      }
    }
    // C: assess conceptual correctness and corrections, not just recall.
    for(let i=0;i<topics.length;i++){
      const [term,definition,scenario,misconception,guide]=topics[i];
      const wrong=(i+session)%2===0;
      const claim=wrong?misconception:definition+".";
      const prompt=(session===1?"Judge the statement about ":session===2?"A colleague asserts the following about ":"During a review, assess the assertion concerning ")+term+": "+claim+" Explain a correction when the claim is false.";
      put({
        kind:"True or false",topic:term,marks:wrong?2:1,prompt,
        correct:wrong?"false":"true",
        memo:(wrong?"False. ":"True. ")+definition+" "+(wrong?"Correction: "+guide:"Applied evidence: "+scenario)
      });
    }
    // D: integrated scenarios with separate marking criteria and increasing difficulty.
    for(let i=0;i<topics.length;i++){
      const [term,definition,scenario,misconception,guide]=topics[i];
      const rubric="Rubric (5): 1 correctly identify "+term+"; 2 describe a technically valid approach using "+guide+"; 1 explain an important constraint or failure mode; 1 show how to verify the result.";
      const tasks=[
        "Propose a practical solution. Identify the concept, describe implementation steps, explain one constraint, and say how you would test it.",
        "An engineer believes: \""+misconception+"\" Critique that belief against the scenario, give a correct design or query approach, and explain a test that would catch the error.",
        "Write a technical recommendation. Explain the mechanism, its relationship to the surrounding system, an error to avoid, and one measurable verification criterion."
      ];
      put({
        kind:chapter===8?(i%2?"SQL writing":"SQL case study"):"Applied scenario",
        topic:term,marks:5,
        prompt:"**Case "+String(i+1).padStart(2,"0")+" · "+names[chapter]+"**\n\n"+scenario+"\n\n"+tasks[session-1],
        memo:definition+" "+guide+" "+rubric,
        referenceNote:chapter===8?"Use Oracle-compatible SQL and the named schema where SQL is required.":"Support decisions using the relevant chapter lifecycle, constraints and tradeoffs. Original short-answer marking is rubric guided.",
        snippetLanguage:chapter===8?"sql":"plaintext"
      });
    }
    if(questions.length!==80||new Set(questions.map(q=>q.id)).size!==80)throw new Error("ITS paper generation failed for "+chapter+"/"+session);
    const totalMarks=questions.reduce((sum,q)=>sum+q.marks,0);
    return {
      module:"ITS",moduleName:"Information Systems 3",chapter,title:names[chapter],
      session,limitSeconds:3600,version:2,totalMarks,
      source:"Database Systems: Design, Implementation, and Management (10th ed.), Chapter "+chapter+". Original revision questions based on chapter concepts.",
      intro:"80 timed revision questions spanning terminology, discrimination, corrections and applied scenarios. Answer from the prescribed chapter and make your reasoning explicit.",
      notice:"One-hour training target. Open-ended responses require rubric-guided self-marking after submission. The question bank is not an official CPUT paper.",
      questions
    };
  }
  const catalogue={};
  for(const ch of [8,9,10,11,12]){
    catalogue[ch]={};
    for(let session=1;session<=3;session++){
      if(ch===8&&session===1){
        const existing=library["its-8-1"];
        if(!existing||existing.questions?.length!==80)throw new Error("ITS Chapter 8 original practice paper is missing.");
        catalogue[ch][session]=existing; // Preserve original work and saved progress.
        continue;
      }
      const paper=paperFor(ch,session);
      catalogue[ch][session]=paper;
      library["its-"+ch+"-"+session]=paper;
    }
  }
  // Integrated questions ask learners to use two chapters in one answer,
  // rather than treating mixed revision as merely a shuffled chapter quiz.
  const integration={
    1:[
      [8,11,"A LEFT JOIN report must retain students with no attendance, but the table has 2 million attendance rows. Write the SQL pattern and explain an indexing or plan check that improves runtime without changing its meaning.","Keep STUDENTS on the left; put optional filters in ON, not WHERE; COUNT(attendance.id); index FK/join/filter columns selectively; compare explain plan and measured rows."],
      [9,12,"Five campuses need one logical student-registration model but each wants regional data stored locally. Describe the conceptual model and an appropriate fragmentation/allocation plan.","Conceptual ER model of STUDENT/REGISTRATION with keys and cardinalities; horizontal fragmentation by campus; completeness/reconstruction and location transparency; validate cross-site queries."],
      [10,12,"A transfer debits an account at Site A and credits one at Site B. Site B loses network access during prepare. Explain how atomicity can be coordinated, including the failure mode.","Distributed transaction; two-phase commit prepare/votes then commit/abort; durable coordinator log; prepared participant may block; recovery and timeouts matter."],
      [11,8,"A nested subquery finds expensive products but performs badly. Explain how to examine its plan and rewrite it carefully without changing NULL or duplicate semantics.","Use correlated/EXISTS or JOIN only if equivalent; inspect actual row counts, index selectivity, filter pushdown and constraints; verify result sets match."],
      [12,11,"A geographically distributed sales report reads almost all rows from four regional stores. Design a query strategy minimizing network transfer and explain which work executes locally.","Push selection and aggregation to fragments, send reduced results, merge with UNION/aggregate correctly, measure network movement and result correctness."]
    ],
    2:[
      [8,10,"A PL/SQL procedure builds an UPDATE dynamically from user filters while two clerks edit the same row. Give a secure SQL and transaction approach.","Whitelist identifiers, bind values with EXECUTE IMMEDIATE; use transaction boundaries, row locking/version checks; prevent lost updates and injection."],
      [9,11,"A registration database has an approved ERD, but the most common queries are slow. Explain how logical and physical design differ and propose an evidence-based tuning change.","Keep conceptual relationships unchanged; logical PK/FK and data types; physical indexes/access paths; inspect explain plan and realistic benchmark."],
      [10,12,"Transactions on two database sites each hold one lock and wait for the other. Identify the failure and propose prevention, detection and recovery.","Distributed deadlock with cyclic waits; global wait-for graph or consistent lock order; timeout/victim rollback; ensure transaction atomicity."],
      [11,8,"A sales query uses WHERE EXTRACT(YEAR FROM order_date)=2026 and a date index. Rewrite the predicate for index use and explain an EXPLAIN PLAN comparison.","Use order_date >= DATE '2026-01-01' AND order_date < DATE '2027-01-01'; avoid a function wrapping the indexed column; validate selectivity and scan cost."],
      [12,10,"An asynchronous replica shows an order as unpaid just after the primary commits payment. Explain the cause and give two safe consistency choices.","Replication lag; read from primary/causal reads or synchronous coordination if needed; identify latency/availability tradeoff."]
    ],
    3:[
      [8,10,"A trigger writes an audit row when an invoice changes. The invoice update later rolls back. Explain the correct transactional outcome and how to test it.","Audit trigger writes normally share the parent transaction; rollback should undo both; distinguish autonomous transactions; verify both tables after failure."],
      [9,12,"An organization plans an employee database for multiple countries and wants personal details kept locally. Propose logical schema, vertical or horizontal fragmentation and key controls.","Model EMPLOYEE and related entities with PK/FK; choose regional row fragments, or column separation for sensitive attributes; preserve join keys, security and reconstructability."],
      [10,12,"During a cross-site purchase, a coordinator crashes after participants prepare. Explain logging, recovery and the possible blocking period.","WAL and durable decision state, prepared participants wait for decision; recovery checks coordinator log, preserves atomic commit/abort; 2PC blocking failure."],
      [11,12,"A distributed join ships a million-row table across the network, despite a selective region predicate. Propose a plan and measurements to demonstrate improvement.","Predicate pushdown; semijoin or local aggregation as appropriate; analyze selectivity/cardinality, reduced bytes transferred, equality of result and latency."],
      [12,10,"An enterprise wants synchronous copies of payment records across distant sites. Explain two-phase commit, synchronous acknowledgement and failure/latency tradeoffs.","Distinguish replication from distributed commit, need an atomic decision, acknowledge policy, network partitions, blocked availability and consistency tests."]
    ]
  };
  const integratedQuestion=(session,ch)=>{
    const [from,to,scenario,solution]=integration[session].find(row=>row[0]===ch);
    return {
      kind:"Integrated case study",topic:"Chapters "+from+" and "+to,chapterSource:from,marks:7,
      prompt:"**Integrated revision · Chapters "+from+" + "+to+"**\n\n"+scenario+"\n\nPresent a reasoned solution with technical detail and a way to validate it.",
      memo:solution+" Rubric (7): 2 correct mechanisms, 2 correct implementation reasoning, 1 meaningful tradeoff, 1 failure case, 1 test/verification.",
      referenceNote:"This case explicitly integrates Chapters "+from+" and "+to+"."
    };
  };
  for(let session=1;session<=3;session++){
    const questionSets=[8,9,10,11,12].map(ch=>{
      const source=catalogue[ch][session].questions;
      const offset=(session-1)*2+(ch-8);
      // 4 terms, 4 concept discrimination, 4 T/F (where present), and 4 cases
      // from each chapter. Rotates topics between the combined papers.
      const chosen=Array.from({length:16},(_,i)=>i===15?integratedQuestion(session,ch):source[(offset+i*5)%80]);
      return chosen.map(q=>({
        ...q,chapterSource:ch,
        prompt:"**Chapter "+ch+"** · "+q.prompt,
        memo:"Chapter "+ch+". "+q.memo
      }));
    });
    const questions=[];
    for(let i=0;i<16;i++)for(let k=0;k<5;k++)
      questions.push({...questionSets[(k+session-1)%5][i],id:questions.length+1});
    const paper={
      module:"ITS",moduleName:"Information Systems 3",chapter:812,
      title:"Combined Revision: Chapters 8–12",session,limitSeconds:3600,version:2,
      totalMarks:questions.reduce((sum,q)=>sum+q.marks,0),
      source:"Original integrated revision across Database Systems (10th ed.), Chapters 8–12",
      intro:"80 mixed questions, 16 from each of Chapters 8–12. Expect SQL, database design, transactions and locks, performance tuning and distributed systems.",
      notice:"One-hour mixed-chapter revision. No answer keys until submission. Written answers require self-review against the memorandum.",
      questions
    };
    if(questions.length!==80||new Set(questions.map(q=>q.chapterSource)).size!==5)throw new Error("Mixed ITS session is unbalanced.");
    library["its-812-"+session]=paper;
  }
  window.PAPERROOM_ITS_CATALOGUE={chapters:[8,9,10,11,12],mixed:812,papers:18};
})();
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
            prompt:"Match each scenario in this Chapter "+chapter+" topic group to the correct technical concept.",
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
  for(let session=1;session<=3;session++){
    const questionSets=[8,9,10,11,12].map(ch=>{
      const source=catalogue[ch][session].questions;
      const offset=(session-1)*2+(ch-8);
      // 4 terms, 4 concept discrimination, 4 T/F (where present), and 4 cases
      // from each chapter. Rotates topics between the combined papers.
      const chosen=Array.from({length:16},(_,i)=>source[(offset+i*5)%80]);
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
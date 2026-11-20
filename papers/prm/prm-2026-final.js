/* PRM November final: scope-weighted, original 60-question sessions with detailed essay rubrics.
 * Original eighty-question source files stay in Git for reference; this layer assembles
 * the current chapter and integrated papers before app.js loads.
 */
(() => {
  "use strict";
  const raw = {...(window.PAPERROOM_LIBRARY || {}), "11-1":window.EXAM_DATA};
  const chapters = [11,12,14,15];
  const emphasis = {
    11:/risk event|threat|opportunit|risk management|risk analysis|qualitative|quantitative|probability|impact|response|risk register|risk trigger|agile|spike|uncertaint/i,
    12:/quality management plan|quality plan|pdca|plan.do.check.act|quality process|quality assurance|quality control|process|continuous improvement|cost of quality|quality|agile|kickoff/i,
    14:/communication|financial|earned.value|planned.value|actual.cost|budget.at.completion|estimate.at.completion|estimate.to.complete|cpi|spi|tcpi|cost|progress|forecast|performance|monitor|agile/i,
    15:/terminat|closure|closeout|validate.scope|acceptance|scope|celebrat|handover|lessons|agile|benefits|completion/i
  };
  const selection = {
    11:{"Definitions":14,"Identify the term":6,"Fill in the blanks":5,"Multiple choice":5,"True or false":4,"Compare and contrast":4,"Lists and sequences":3,"Short explanations":3,"Numerical reasoning":4,"Scenarios and applied reasoning":4},
    12:{"Definitions":14,"Identify the term":6,"Fill in the blanks":5,"Multiple choice":5,"True or false":4,"Compare and contrast":4,"Lists and sequences":3,"Short explanations":3,"Numerical reasoning":3,"Scenarios and applied reasoning":5},
    14:{"Definitions":12,"Identify the term":5,"Fill in the blanks":4,"Multiple choice":5,"True or false":4,"Compare and contrast":4,"Lists and sequences":3,"Short explanations":3,"Numerical reasoning":8,"Scenarios and applied reasoning":4},
    15:{"Definitions":16,"Identify the term":6,"Fill in the blanks":5,"Multiple choice":5,"True or false":4,"Compare and contrast":4,"Lists and sequences":3,"Short explanations":3,"Numerical reasoning":2,"Scenarios and applied reasoning":4}
  };
  const settings = {
    11:{title:"Risk Events, Risk Analysis and Responses",situations:[
      "A university mobile-app release depends on an unfamiliar payment provider, a fixed launch date and external stakeholders.",
      "A community clinic is moving from paper records to an online booking system while requirements are changing.",
      "A small logistics service is piloting a new customer portal with uncertain supplier reliability and a limited budget."
    ]},
    12:{title:"Quality Management, PDCA and Continuous Improvement",situations:[
      "A campus portal passed developer checks but users report frequent defects and inconsistent acceptance standards.",
      "A municipal service team has recurring rework, uneven testing and no documented quality measures.",
      "An Agile product team ships every two weeks but defects escape and responsibilities at kickoff are unclear."
    ]},
    14:{title:"Communications, Financial Control and Earned Value",situations:[
      "A public-facing application reports that delivery is healthy, but costs are rising and stakeholder updates are delayed.",
      "An infrastructure upgrade has an approved budget yet managers disagree about whether completed work justifies spending.",
      "An Agile service rollout has changing priorities, conflicting status reports and a sponsor asking for an earlier deadline."
    ]},
    15:{title:"Validation, Termination and Project Closure",situations:[
      "A campus platform is technically deployed but the customer has not formally accepted its final deliverables.",
      "A client cancels a partially delivered system after a strategy change while suppliers and staff need closure.",
      "An Agile release achieves its core objective, but support, sign-off, final documentation and team recognition remain unresolved."
    ]}
  };
  // Each essay awards exactly six distinct criteria, two marks for complete
  // correct treatment and one for a partly correct treatment of a criterion.
  const essays = {
    11:[
      ["Write a risk management plan for this project. Describe the steps, people and control mechanisms rather than listing generic risks.",[
        "State the plan's purpose and how it supports the overall project objectives.",
        "Specify risk-identification methods and when identification is repeated.",
        "Describe likelihood and impact scales, thresholds and qualitative prioritisation.",
        "State when quantitative analysis is warranted and identify a suitable technique.",
        "Assign risk ownership, planned responses, triggers and contingency actions.",
        "Explain register updates, stakeholder reporting and monitoring during delivery."
      ]],
      ["Identify four realistic uncertain risk events, including both threats and opportunities. Analyse them and recommend appropriate strategies.",[
        "Define risk as uncertainty affecting objectives, distinguishing an event from an existing issue.",
        "Provide two distinct credible threats with plausible impact.",
        "Provide two distinct credible opportunities with plausible benefit.",
        "Describe probability/impact and relative priority for the chosen events.",
        "Select a justified negative-risk strategy, such as avoid, mitigate, transfer or accept.",
        "Select a justified positive-risk strategy, such as exploit, enhance, share or accept."
      ]],
      ["Explain how you would perform qualitative and quantitative risk analysis on this project, and how the results would change your decisions.",[
        "Identify the qualitative criteria: probability, impact and an agreed scoring scale.",
        "Describe a probability-impact matrix and prioritisation or escalation threshold.",
        "Distinguish numerical quantitative analysis from ordinal qualitative ratings.",
        "Explain one appropriate numerical method, such as EMV, decision trees or simulation.",
        "Use the outputs to justify response urgency and a contingency or reserve.",
        "Discuss assumptions, data limitations and the need to revisit estimates."
      ]],
      ["Draft an exam-standard risk-register entry for a likely critical risk and explain the management cycle that follows.",[
        "Describe the specific uncertain event, cause and objective affected.",
        "Record probability, impact and priority on a clear, suitable scale.",
        "Nominate an accountable owner with monitoring responsibility.",
        "Select a justified response and resources or reserve for the action.",
        "Define an observable trigger and a concrete contingency action.",
        "Explain monitoring, communication, status changes and residual-risk review."
      ]],
      ["Contrast the response strategies available for negative and positive project risks, explaining how you would choose among them.",[
        "Correctly distinguish threats from opportunities and their effects on objectives.",
        "Explain avoiding versus mitigating threats with practical examples.",
        "Explain transferring versus accepting a threat with a practical example.",
        "Explain exploiting versus enhancing a beneficial opportunity.",
        "Explain sharing or accepting an opportunity and appropriate partnerships.",
        "Explain selection based on priority, cost, stakeholder appetite and remaining risk."
      ]],
      ["Use an Agile approach to reduce uncertainty without abandoning formal risk management.",[
        "Explain how changing requirements create uncertainty and why it is revisited.",
        "Describe a time-boxed spike or prototype aimed at the riskiest assumption.",
        "Explain backlog prioritisation or short iterations that expose risk early.",
        "Use reviews and stakeholder feedback to find emerging risks.",
        "Show how the risk register, owner, response and trigger still apply.",
        "Describe a retrospective or adaptation that improves future risk handling."
      ]],
      ["A supplier delay, a difficult integration and unexpected customer demand all affect this project. Explain how you would discover and manage them.",[
        "Classify source categories such as external, technical and organisational.",
        "Identify suitable discovery techniques such as WBS review, interviews and SWOT.",
        "Distinguish causes, uncertain events, consequences and triggers.",
        "Explain consistent qualitative ranking using likelihood and impact.",
        "Choose proportionate threat responses and a contingency plan.",
        "Explain how to recognise and deliberately exploit a positive demand opportunity."
      ]],
      ["Evaluate a team that says 'we will handle problems as they happen'. Present a better risk-management strategy from beginning to end.",[
        "Explain why reactive issue handling does not substitute for proactive risk planning.",
        "Describe stakeholder-informed risk identification and a maintained register.",
        "Specify qualitative analysis and when quantitative analysis adds value.",
        "Outline named, costed responses and explicit trigger thresholds.",
        "Explain responsibility, communication and periodic monitoring.",
        "Evaluate Agile feedback, residual risk and continuous improvement."
      ]]
    ],
    12:[
      ["Develop a project quality management plan for the scenario and show how the team would use it throughout delivery.",[
        "State quality objectives and derive measurable customer acceptance criteria.",
        "Specify relevant standards, deliverable requirements and quality metrics.",
        "Assign quality roles, responsibilities, approvals and reporting.",
        "Explain assurance activities that improve the process before defects occur.",
        "Explain control activities, inspection, tests and handling failed outputs.",
        "Define evidence, review frequency and improvements to the quality plan."
      ]],
      ["Apply the PDCA cycle to a recurring quality problem and show a concrete action at every stage.",[
        "PLAN: define the problem, baseline, desired standard and root-cause hypothesis.",
        "PLAN: select a measurable change and assign the responsible people.",
        "DO: trial the change on a controlled, limited part of the project.",
        "CHECK: compare observed results and evidence against target metrics.",
        "ACT: standardise an effective change or revise an unsuccessful one.",
        "Show how the cycle repeats and how stakeholders learn from outcomes."
      ]],
      ["Distinguish planning quality, managing quality and controlling quality using the project's deliverables.",[
        "Explain that quality planning sets objectives, standards and measures.",
        "Give a concrete quality-management-plan artefact and acceptance threshold.",
        "Explain managing quality as process assurance and prevention.",
        "Give a concrete assurance method such as audit, peer review or improvement cycle.",
        "Explain controlling quality as output inspection or testing against criteria.",
        "Compare evidence, responsible parties and corrective action across the three."
      ]],
      ["Explain how the modern quality approach evolved from finding defects to preventing them, and why this matters on a project.",[
        "Contrast end-of-line inspection with built-in quality and prevention.",
        "Explain continuous improvement and customer-defined fitness for purpose.",
        "Describe process variation or root-cause thinking rather than blame.",
        "Distinguish prevention/appraisal costs from failure costs.",
        "Describe team-wide responsibility and supplier or stakeholder involvement.",
        "Apply at least one practical technique, such as PDCA, quality audit or test automation."
      ]],
      ["Explain the project's core quality-management process as an end-to-end sequence with clear evidence at each stage.",[
        "Derive quality requirements from scope and stakeholder needs.",
        "Create a quality plan with standards, thresholds and responsibilities.",
        "Build quality into work using process assurance and prevention.",
        "Measure output through testing, inspection and control evidence.",
        "Address nonconformance with root-cause and corrective or preventive actions.",
        "Verify accepted outcomes and record learning for future improvement."
      ]],
      ["Investigate rising defects and rework without relying on last-minute inspection alone.",[
        "Describe data collection with defect type, frequency and severity.",
        "Identify credible root-cause techniques such as fishbone or Pareto analysis.",
        "Separate common-cause from special-cause variation where appropriate.",
        "Suggest preventive measures in the development and review process.",
        "Describe control tests, measurable thresholds and escalation.",
        "Use PDCA or equivalent feedback to verify improvement over time."
      ]],
      ["Prepare a project kickoff that makes quality responsibilities and acceptance requirements clear.",[
        "Describe the purpose of the kickoff and the stakeholders to include.",
        "Confirm project scope, expected deliverables and success criteria.",
        "Agree quality metrics, acceptance tests and documentation.",
        "Allocate responsibility for assurance, control and defect resolution.",
        "Establish decision making, escalation and communication arrangements.",
        "Identify immediate risks, follow-up tasks and a documented action register."
      ]],
      ["Show how an Agile team can achieve strong quality while still delivering frequent increments.",[
        "Explain that value and agreed acceptance criteria define usable increments.",
        "Apply definition of done and specific story-level acceptance criteria.",
        "Describe early automated testing or test-driven development.",
        "Explain continuous integration and fast feedback on defects.",
        "Describe reviews with users and immediate backlog adjustments.",
        "Use retrospectives and PDCA-style process improvement to prevent recurrence."
      ]]
    ],
    14:[
      ["Explain how you would manage and monitor project communications while also reporting real financial performance.",[
        "Identify key stakeholders and information needs for each audience.",
        "Set communication channels, cadence, ownership and accessible formats.",
        "Distinguish distributing information from checking its effectiveness.",
        "State the reporting status date, approved baselines and actual progress evidence.",
        "Use earned-value indicators to report cost and schedule performance honestly.",
        "Show escalation, feedback and corrective action when a report reveals problems."
      ]],
      ["Explain the full earned-value management logic from planned value to performance indices and forecasts.",[
        "Define planned value PV and the approved schedule baseline.",
        "Define earned value EV as budgeted value of work actually completed.",
        "Define actual cost AC and budget at completion BAC.",
        "Give CPI = EV/AC and interpret values above or below one.",
        "Give SPI = EV/PV and interpret values above or below one.",
        "Explain an EAC or ETC forecast and the assumptions behind it."
      ]],
      ["Analyse a project that has EV below PV and AC above EV. Explain the diagnosis and a disciplined response.",[
        "Identify schedule variance SV = EV - PV as negative.",
        "Identify cost variance CV = EV - AC as negative.",
        "Show SPI below one and explain schedule-performance concern.",
        "Show CPI below one and explain cost inefficiency.",
        "Discuss an EAC/ETC forecast and the uncertainty in future efficiency.",
        "Propose evidence-based corrective actions and stakeholder communication."
      ]],
      ["Compare EAC, ETC and TCPI, stating how each informs a different financial-control decision.",[
        "Define estimate at completion EAC as expected final total cost.",
        "Provide a valid EAC formula together with its assumption.",
        "Define estimate to complete ETC as predicted remaining cost.",
        "Show ETC = EAC - AC and what it tells the manager.",
        "Define to-complete performance index TCPI as required future efficiency.",
        "Use TCPI to evaluate whether the remaining budget or revised estimate is feasible."
      ]],
      ["Design a useful progress report that avoids misleading activity metrics and supports timely decisions.",[
        "Use a specific status date and compare against an approved baseline.",
        "Distinguish work started from accepted work completed and EV earned.",
        "Include PV, EV, AC and relevant cost/schedule variances.",
        "Include CPI/SPI with sound interpretations and relevant EAC or ETC.",
        "Report decisions, change requests, risks and corrective actions.",
        "Tailor communication to stakeholders and assign ownership for next steps."
      ]],
      ["A sponsor requests extra work while the project is over budget. Explain the correct control and communication workflow.",[
        "Record the requested scope change and why informal approval is insufficient.",
        "Assess scope, schedule, quality, resources, budget and risk implications.",
        "Use a change authority or change control board where required.",
        "Update approved baselines only after formal approval.",
        "Explain how the decision changes PV/EV forecasting and progress reporting.",
        "Communicate the decision consistently and monitor its implementation."
      ]],
      ["Contrast predictive progress controls with Agile progress visibility and explain how to avoid false confidence.",[
        "Describe predictive baselines, work packages and measurable completion.",
        "Explain how EVM tracks value earned rather than effort spent.",
        "Describe Agile visual metrics such as burndown and burnup charts.",
        "Explain iteration reviews, demos and stakeholder feedback.",
        "Discuss work in progress and why many started tasks are not progress.",
        "Explain how to combine reliable financial reporting with adaptive delivery."
      ]],
      ["A project manager celebrates a favourable CPI but customers complain about poor results. Explain why the dashboard is insufficient.",[
        "Define CPI and its limited interpretation of cost efficiency.",
        "Show why SPI or schedule performance also matters.",
        "Explain quality control and acceptance as distinct outcome indicators.",
        "Discuss stakeholder, scope and benefits measures beyond the budget.",
        "Suggest a balanced scorecard or equivalent multidimensional assessment.",
        "Recommend communication, corrective action and follow-up validation."
      ]]
    ],
    15:[
      ["Explain how formal scope validation should lead to evidence-based customer acceptance and closure.",[
        "Distinguish internal quality control from customer validation of scope.",
        "Compare deliverables with the approved scope baseline and acceptance criteria.",
        "Collect test results, inspection evidence and customer review records.",
        "Track punch-list defects separately from newly requested scope changes.",
        "Secure documented acceptance or record specific unresolved objections.",
        "Connect acceptance to handover, final reporting and closeout."
      ]],
      ["Explain how and why a project may be terminated before completion, and how to close it responsibly.",[
        "Identify legitimate reasons for early termination and the decision authority.",
        "Distinguish termination for default, convenience and mutual agreement.",
        "Explain the importance of contract terms and financial settlements.",
        "Describe communication to customer, suppliers, team and sponsor.",
        "Account for completed deliverables, access, documents and handover.",
        "Record lessons, remaining liabilities and formal closure evidence."
      ]],
      ["Prepare a complete project closeout plan from delivery verification to operational handover.",[
        "Confirm completed scope, acceptance criteria and outstanding issues.",
        "Obtain necessary customer or sponsor acceptance signatures.",
        "Close finances, contractual matters and resource assignments.",
        "Provide an operational transition plan, support owner and training.",
        "Archive versions, approvals, lessons learned and closeout report.",
        "Schedule benefits follow-up and an appropriate team acknowledgement."
      ]],
      ["Explain why celebrating completion is a legitimate project management activity, not merely an optional party.",[
        "Identify achievement of agreed milestones and accepted project outcomes.",
        "Explain recognition of contributors and stakeholder support.",
        "Describe how celebration reinforces morale, closure and team relationships.",
        "Separate genuine achievement from hiding unresolved defects or risks.",
        "Discuss proportional, inclusive ways to recognise remote and support roles.",
        "Link the recognition event to lessons learned and future collaboration."
      ]],
      ["The team says a deployed product means the project is finished. Evaluate this claim and the remaining obligations.",[
        "Explain deployment versus formally accepted scope.",
        "Identify outstanding defects, punch lists and closeout records.",
        "Explain financial and procurement or contract closure.",
        "Specify operational training, support, ownership and handover.",
        "Discuss lessons learned, knowledge transfer and project archiving.",
        "Describe benefit realisation beyond technical delivery."
      ]],
      ["Design an early-termination case-study response when a project is no longer financially justified.",[
        "Recognise the sunk-cost fallacy and assess remaining costs versus benefits.",
        "Identify the authorised decision and contractual basis for stopping.",
        "Distinguish justified cancellation from supplier breach.",
        "Plan settlements, supplier notifications and release of resources.",
        "Preserve deliverables, records, access and legal or operational obligations.",
        "Report rationale, lessons and remaining benefit opportunities."
      ]],
      ["Explain how lessons learned, explicit and tacit knowledge are captured and reused during closeout.",[
        "Distinguish tacit experience from explicit documented knowledge.",
        "Describe structured retrospectives or post-project review methods.",
        "Record concrete context, root causes, actions and outcomes.",
        "Use walkthroughs, demonstrations or pairing to transfer tacit know-how.",
        "Store searchable, owned records in a lessons-learned repository.",
        "Describe how future project teams retrieve and apply the lessons."
      ]],
      ["Compare project closeout with Agile iteration and release completion, including how value is validated.",[
        "Define project-level closure versus completion of an individual iteration.",
        "Explain definition of done and acceptance criteria for increments.",
        "Discuss user reviews and iterative feedback before final acceptance.",
        "Identify remaining operational handover, contracts and support duties.",
        "Explain retrospective learning and continued benefit measurement.",
        "Show why formal final recognition and acceptance still matter."
      ]]
    ]
  };
  function scopeRank(q,ch) {
    const t=(q.prompt+" "+(q.memo||"")).toLowerCase();
    const hit=emphasis[ch].test(t)?10:0;
    const caseWeight=/case|project|scenario|estimate|calculate|compare|explain|manage|risk|quality|cost/i.test(q.prompt)?1:0;
    return hit+caseWeight;
  }
  function selectFrom(source,ch) {
    const result=[];
    for(const [kind,n] of Object.entries(selection[ch])) {
      const pool=source.questions.filter(q=>q.kind===kind).map((q,i)=>({q,i,score:scopeRank(q,ch)}));
      pool.sort((a,b)=>b.score-a.score || a.i-b.i);
      if(pool.length<n)throw Error("PRM source missing "+kind+" for chapter "+ch);
      result.push(...pool.slice(0,n).map(x=>({...x.q})));
    }
    if(result.length!==52)throw Error("Expected 52 core questions in chapter "+ch);
    return result;
  }
  function makeEssay(ch,index,session) {
    const [stem,points]=essays[ch][index];
    const scenario=settings[ch].situations[(session-1+index)%3];
    const rubric=points.map(text=>({text,marks:2}));
    return {kind:"Essay / case study",prompt:"Case study: "+scenario+"\n\n"+stem,
      marks:12,rubric,sourceChapter:ch,
      memo:"Use the itemised six-criterion rubric below. Award two marks for a complete, accurate point; one for a partly correct point; zero for an absent or incorrect point. Credit well-justified equivalent terminology."};
  }
  // Each non-deterministic answer gets criteria worth individual marks.
  // Original explicit essay rubrics are retained; shorter answers use the
  // textbook-style memorandum as the single source of marking expectations.
  function memoPoints(memo) {
    const clean=String(memo||"").replace(/\[[0-9]+\]\s*SECTION [A-Z].*$/s,"").trim();
    return clean.split(/;\s*|\.\s+(?=[A-Z])|,\s+(?=[a-zA-Z])/)
      .map(x=>x.trim().replace(/[.;]$/,"")).filter(x=>x.length>3);
  }
  function makeDefinitionRubric(q) {
    const memo=String(q.memo||"").trim().replace(/\s+/g," ");
    const question=String(q.prompt||"").toLowerCase();
    // Definitions should earn separate marks for the core meaning and an
    // independent distinguishing feature, not two marks for the same sentence.
    if(/\bdefine (?:a )?threat\b/.test(question))
      return [
        {text:"Identifies a threat as an uncertain risk with a negative effect.",marks:1},
        {text:"Connects that possible negative effect to one or more project objectives if the event occurs.",marks:1}
      ];
    if(/\bdefine (?:an )?opportunity\b/.test(question))
      return [
        {text:"Identifies an opportunity as an uncertain event or condition.",marks:1},
        {text:"Explains that its possible effect on project objectives is positive or beneficial.",marks:1}
      ];
    if(/\bdefine project risk\b/.test(question))
      return [
        {text:"Defines project risk as an uncertain event or condition.",marks:1},
        {text:"Explains that its occurrence may affect project objectives, positively or negatively.",marks:1}
      ];
    if(/\bdefine (?:a )?risk trigger\b/.test(question))
      return [
        {text:"Identifies a risk trigger as an observable circumstance, warning sign or threshold.",marks:1},
        {text:"Explains that the trigger activates a planned risk response.",marks:1}
      ];
    const clauses=memo.split(/\s*;\s*|\.\s+(?=[A-Z])/).map(x=>x.trim().replace(/[.;]+$/,"")).filter(Boolean);
    let core=clauses[0]||memo;
    let detail=clauses.slice(1).join("; ");
    // Example-only clauses illustrate the definition but should not be a
    // mandatory extra mark when the question simply asks for a definition.
    if(/^(?:e\.g\.?|example\b|for example\b)/i.test(detail))detail="";
    if(!detail){
      const separators=[
        /\s+used to\s+/i,/\s+so that\s+/i,/\s+so\s+/i,/\s+against\s+/i,
        /\s+in order to\s+/i,/\s+specifying how\s+/i,
        /\s+which\s+/i,/\s+whereby\s+/i,/\s+enabling\s+/i,
        /\s+through\s+/i,/\s+including\s+/i,/\s+to\s+/i,
        /\s+by\s+/i,/\s+and\s+/i
      ];
      for(const separator of separators){
        const match=separator.exec(core);
        if(match && match.index>=21 && core.length-match.index>=15){
          detail=core.slice(match.index).trim();
          core=core.slice(0,match.index).trim();
          break;
        }
      }
    }
    if(!detail && core.includes(",")){
      const comma=core.lastIndexOf(",");
      if(comma>=20 && core.length-comma>=14){
        detail=core.slice(comma+1).trim();
        core=core.slice(0,comma).trim();
      }
    }
    if(!detail){
      // Some memorandums contain just one concise clause. In that case,
      // make the second criterion a distinct application/qualification and
      // tell the marker not to count an identical phrase twice.
      detail="Adds a distinct correct purpose, defining condition or practical implication supported by the memorandum (no duplicate credit).";
    }
    return [
      {text:"Core meaning: "+core,marks:1},
      {text:"Separate defining feature, purpose or project context: "+detail,marks:1}
    ];
  }
  function makeRubric(q) {
    if(Array.isArray(q.rubric) && q.rubric.length)return q.rubric;
    if(["Multiple choice","Fill in the blanks","SQL completion","Matching"].includes(q.kind))return undefined;
    if(q.kind==="True or false"){
      if(q.correct==="false"&&q.marks>1&&!q.truthOnly)
        return [{text:"Provide a factually correct correction or explanation of why the statement is false (see the memorandum).",marks:q.marks-1}];
      return undefined;
    }
    if(q.kind==="Identify the term")
      return [{text:"Names the technical concept accurately, including accepted equivalent terminology: "+q.memo,marks:1}];
    if(q.kind==="Definitions")return makeDefinitionRubric(q);
    if(q.kind==="Numerical reasoning"){
      const texts=[
        "Selects the correct formula or appropriate calculation method.",
        "Substitutes the supplied quantities correctly and shows the working.",
        "Calculates the required result accurately, with consistent units and sensible rounding.",
        "Interprets the result or explains the decision correctly in the scenario."
      ];
      if(q.marks===4)return texts.map(text=>({text,marks:1}));
      if(q.marks===5)return texts.map((text,i)=>({text,marks:i===2?2:1}));
      if(q.marks===6)return texts.map((text,i)=>({text,marks:i===0||i===2?2:1}));
      if(q.marks===8)return texts.map(text=>({text,marks:2}));
    }
    const n=q.marks,parts=memoPoints(q.memo),kind=q.kind;
    const criteria=[];
    if(kind==="Compare and contrast"){
      const stems=[
        "Explains the first concept or side of the comparison accurately.",
        "Explains the second concept or side accurately.",
        "States a meaningful and correct distinction, relationship or commonality.",
        "Supports the comparison with a relevant example, effect or practical implication."
      ];
      return Array.from({length:n},(_,i)=>({text:(stems[i]||"Provides another valid comparison point")+" Reference: "+q.memo,marks:1}));
    }
    if(kind==="Lists and sequences"){
      return Array.from({length:n},(_,i)=>({
        text:"Distinct valid list item "+(i+1)+" of "+n+" (no duplicate credit). Check against the acceptable answer set: "+q.memo,
        marks:1
      }));
    }
    // Explanations and scenarios may need fewer richer criteria than available
    // marks. Allocate one or two marks per memo-supported point, not duplicate
    // generic criteria that could unfairly punish correct answers.
    const content=parts.length?parts:[String(q.memo||"").trim()];
    const target=Math.max(Math.ceil(n/2),Math.min(n,content.length));
    const points=Array.from({length:target},(_,i)=>{
      if(i<target-1)return content[i]||"A distinct, justified point relevant to the question";
      return content.slice(i).join("; ")||"A distinct justified implication or action supported by the memorandum";
    });
    let extras=n-target;
    return points.map((point,i)=>{
      const marks=extras>0?2:1;
      if(extras>0)extras--;
      return {text:"Correct explained point "+(i+1)+": "+point,marks};
    });
  }
  function withRubric(q) {
    return {...q,rubric:makeRubric(q)};
  }
  function normalise(p,questions) {
    const qs=questions.map((q,i)=>({...withRubric(q),id:i+1}));
    return {...p,questions:qs,totalMarks:qs.reduce((n,q)=>n+q.marks,0)};
  }
  const revised={};
  for(const ch of chapters)for(let session=1;session<=3;session++){
    const key=ch+"-"+session,base=raw[key];
    if(!base||!Array.isArray(base.questions))throw Error("PRM source missing "+key);
    const selected=selectFrom(base,ch);
    const qs=[...selected,...essays[ch].map((_,i)=>makeEssay(ch,i,session))];
    revised[key]=normalise({...base,title:settings[ch].title,limitSeconds:5400,
      intro:"60 questions: detailed definitions, core concepts, Agile, calculations, cases and eight rubric-scored essays. Emphasis on the November final's stated scope without discarding wider chapter learning."},qs);
    if(revised[key].questions.length!==60)throw Error("PRM chapter paper count mismatch "+key);
  }
  // Mixed paper composition is mark-weighted to approximate the final scope:
  // 12 long answers x 12 marks = 144, 10 Chapter-14 calculations x 8 = 80,
  // 14 definitions x 2 = 28, 4 lists/contrasts x ~4 = ~16,
  // and 20 objective checks x 1 = 20. About half the marks are long-form essays,
  // ~28% are numerical and the remainder checks definitions and other knowledge.
  for(let session=1;session<=3;session++){
    const essaysMixed=chapters.flatMap(ch=>[0,1,2].map(i=>makeEssay(ch,(i+(session-1)*3)%8,session)));
    const definitions=chapters.flatMap((ch,i)=>
      revised[ch+"-"+session].questions.filter(q=>q.kind==="Definitions").slice(0,[4,4,3,3][i])
        .map(q=>({...q,sourceChapter:ch})));
    const objective=chapters.flatMap(ch=>{
      const list=revised[ch+"-"+session].questions;
      const term=list.filter(q=>q.kind==="Identify the term").slice(0,2);
      const mcq=list.filter(q=>q.kind==="Multiple choice").slice(0,2);
      const tf=list.filter(q=>q.kind==="True or false").slice(0,1)
        .map(q=>({...q,kind:"True or false",marks:1,truthOnly:true,
          prompt:"Choose TRUE or FALSE only: "+q.prompt.replace(/^\s*True or false\?\s*/i,"").replace(/\s*Correct.*$/i,"").replace(/\s*True \/ False:.*$/i,"")}));
      return [...term,...mcq,...tf].map(q=>({...q,sourceChapter:ch}));
    });
    const contrastChapters=session===1?[11,12]:session===2?[14,15]:[11,15];
    const listChapters=session===1?[14,15]:session===2?[11,12]:[12,14];
    const comparison=contrastChapters.map(ch=>({...revised[ch+"-"+session].questions.filter(q=>q.kind==="Compare and contrast")[session-1],sourceChapter:ch}));
    const listing=listChapters.map(ch=>({...revised[ch+"-"+session].questions.filter(q=>q.kind==="Lists and sequences")[session-1],sourceChapter:ch}));
    const allFinance=raw["14-"+session].questions.filter(q=>q.kind==="Numerical reasoning");
    const additional=raw["14-"+(session%3+1)].questions.filter(q=>q.kind==="Numerical reasoning").slice(0,2);
    const financial=[...allFinance,...additional].slice(0,10).map(q=>({...q,
      sourceChapter:14,marks:8,
      prompt:q.prompt+"\nShow the relevant formula, values substituted, workings, final answer and interpretation.",
      rubric:[
        {text:"Identify the correct metric, variables and applicable formula.",marks:2},
        {text:"Use the correct data and substitute values consistently.",marks:2},
        {text:"Show sound calculations and produce the correct numerical answer.",marks:2},
        {text:"State the unit or reasonable rounding and interpret the result correctly.",marks:2}
      ]}));
    const questions=[...objective,...definitions,...comparison,...listing,...financial,...essaysMixed];
    if(questions.length!==60)throw Error("PRM combined paper length mismatch "+session);
    revised["99-"+session]=normalise({
      module:"PRM",moduleName:"Project Management",chapter:99,
      sourceChapters:chapters,session,title:"Combined Final Revision: Chapters 11, 12, 14 and 15",
      limitSeconds:7200,intro:"60 questions. Approx. 50% extended essays/cases, 30% Chapter 14 earned-value calculations and 20% definitions/objective knowledge by marks. No MS Project."
    },questions);
  }
  window.PAPERROOM_LIBRARY=Object.assign(window.PAPERROOM_LIBRARY||{},revised);
  window.EXAM_DATA=revised["11-1"];
  window.PAPERROOM_PRM_FINAL={chapters,keys:Object.keys(revised),count:60};
})();

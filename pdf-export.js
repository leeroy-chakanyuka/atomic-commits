// Standalone, dependency-free printable practice-paper PDF exporter.
window.PAPERROOM_DOWNLOAD_PDF = function (paper) {
  if (!paper || !Array.isArray(paper.questions)) return;
  const ascii = v=>String(v ?? "").replace(/[\u2018\u2019]/g,"'").replace(/[\u201c\u201d]/g,'"').replace(/[\u2013\u2014]/g,"-").replace(/\u2022/g,"*").replace(/\u00d7/g,"x").replace(/\u2265/g,">=").replace(/\u2264/g,"<=").replace(/\u00a0/g," ").normalize("NFKD").replace(/[^\x20-\x7E]/g,"?");
  const escapePDF=t=>ascii(t).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)");
  function wrap(t,max) {
    const words=ascii(t).replace(/\s+/g," ").trim().split(" ");
    const lines=[]; let line="";
    for(const word of words){
      if(word.length>max){if(line){lines.push(line);line="";}for(let i=0;i<word.length;i+=max)lines.push(word.slice(i,i+max));continue;}
      if(!line)line=word;
      else if((line+" "+word).length<=max)line+=" "+word;
      else {lines.push(line);line=word;}
    }
    if(line)lines.push(line);
    return lines.length?lines:[""];
  }
  const pages=[]; let page=[],y=781;
  const draw=(t,x,yy,size=10,bold=false)=>{page.push("BT /"+(bold?"F2":"F1")+" "+size+" Tf "+x+" "+yy+" Td ("+escapePDF(t)+") Tj ET");};
  const newPage=()=>{
    page=[];pages.push(page);y=781;
    draw("PAPERROOM / "+(paper.module==="ITS"?"INFORMATION SYSTEMS 3":"PROJECT MANAGEMENT")+" / CHAPTER "+paper.chapter,44,810,9,true);
    page.push("0.84 0.86 0.82 RG 0.6 w 44 800 m 550 800 l S");
  };
  const need=h=>{if(y-h<64)newPage();};
  const write=(t,size=10,bold=false,max=94,leading=14)=>{
    for(const line of wrap(t,max)){need(leading+4);draw(line,49,y,size,bold);y-=leading;}
  };
  newPage();
  write("CHAPTER "+paper.chapter+" - PRACTICE SESSION "+String(paper.session).padStart(2,"0"),18,true,52,25);
  write(paper.title,12,false,78,18);
  write("80 questions | "+paper.totalMarks+" marks | 60-minute training target",10,true,90,15);
  write("Questions only. Online model answers unlock after submission.",9,false,95,13);
  y-=18;
  let prev="";
  for(const q of paper.questions) {
    const kind=ascii(q.kind).toUpperCase();
    const estimated=wrap(q.id+". "+q.prompt+" ["+q.marks+" marks]",92).length*14+
      (q.options?q.options.length*18:Math.min(6,Math.max(1,Math.ceil(q.marks*.85)))*17)+35;
    need(Math.min(estimated,175));
    if(kind!==prev){y-=7;need(24);draw(kind,47,y,10,true);y-=21;prev=kind;}
    write(q.id+".  "+q.prompt+"  ["+q.marks+" marks]",10,true,92,14);
    if(Array.isArray(q.options)) {
      for(let i=0;i<q.options.length;i++)write("   "+"ABCD"[i]+". "+q.options[i],9,false,91,12);
      need(22);draw("Answer: ______",57,y,9);y-=23;
    }else if(q.kind==="True or false") {
      need(42);draw("True / False: __________",57,y,9);y-=18;draw("Correction:",57,y,9);y-=17;
      page.push("0.76 0.79 0.75 RG 0.35 w 57 "+y+" m 547 "+y+" l S");y-=19;
    }else{
      const lines=Math.min(6,Math.max(1,Math.ceil(q.marks*.85)));
      for(let i=0;i<lines;i++){
        need(19);page.push("0.80 0.83 0.79 RG 0.35 w 57 "+y+" m 547 "+y+" l S");y-=17;
      }
    }
    y-=13;
  }
  const objs=[null,"<< /Type /Catalog /Pages 2 0 R >>",null,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>"];
  const kids=[];
  for(let i=0;i<pages.length;i++){
    const pageID=objs.length, streamID=pageID+1;kids.push(pageID+" 0 R");
    pages[i].push("BT /F1 8 Tf 49 42 Td (PAGE "+(i+1)+" OF "+pages.length+") Tj ET");
    objs.push("<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents "+streamID+" 0 R >>");
    const stream=pages[i].join("\n")+"\n";
    objs.push("<< /Length "+stream.length+" >>\nstream\n"+stream+"endstream");
  }
  objs[2]="<< /Type /Pages /Kids ["+kids.join(" ")+"] /Count "+pages.length+" >>";
  let out="%PDF-1.4\n";const offsets=[0];
  for(let i=1;i<objs.length;i++){offsets[i]=out.length;out+=i+" 0 obj\n"+objs[i]+"\nendobj\n";}
  const xref=out.length;
  out+="xref\n0 "+objs.length+"\n0000000000 65535 f \n";
  for(let i=1;i<objs.length;i++)out+=String(offsets[i]).padStart(10,"0")+" 00000 n \n";
  out+="trailer\n<< /Size "+objs.length+" /Root 1 0 R >>\nstartxref\n"+xref+"\n%%EOF\n";
  const url=URL.createObjectURL(new Blob([out],{type:"application/pdf"}));
  const link=document.createElement("a");
  link.href=url;link.download=(paper.module||"PRM")+"_Chapter_"+paper.chapter+"_Practice_Session_"+paper.session+".pdf";
  document.body.appendChild(link);link.click();link.remove();
  setTimeout(()=>URL.revokeObjectURL(url),3000);
};
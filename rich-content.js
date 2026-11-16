/* Rich practice content: GFM tables, code, inline emphasis and Mermaid diagrams.
 * Marked output MUST be sanitized. If a CDN fails, plain text stays visible.
 * Only trusted study content and model replies are rendered as sanitized Markdown.\n * Raw student input and error messages stay text-only.
 */
(function () {
  "use strict";
  const escapeHtml = value => String(value == null ? "" : value)
    .replace(/[&<>"']/g, s => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" })[s]);
  const render = value => {
    const source = String(value == null ? "" : value);
    if (!window.marked || !window.DOMPurify) return "<p>" + escapeHtml(source).replace(/\n/g,"<br>") + "</p>";
    return window.DOMPurify.sanitize(window.marked.parse(source, { gfm: true, breaks: true }), {
      USE_PROFILES: {html:true},
      ADD_ATTR: ["class"]
    });
  };
  let initialized = false;
  // Convert only sanitized, rendered Markdown code fences. Never interpret raw model HTML.
  // Keep the original source available if a diagram is malformed or Mermaid fails to load.
  const mermaidSource = new WeakMap();
  const renderDiagrams = root => {
    const scope=root || document;
    const fences=Array.from(scope.querySelectorAll("pre > code.language-mermaid")).slice(0,6);
    for(const code of fences){
      const source=(code.textContent||"").trim();
      if(!source||source.length>7000)continue;
      const diagram=document.createElement("div");
      diagram.className="mermaid";
      diagram.setAttribute("role","img");
      diagram.setAttribute("aria-label","Study diagram");
      diagram.textContent=source;
      mermaidSource.set(diagram,source);
      code.parentElement.replaceWith(diagram);
    }
    const nodes=Array.from(scope.querySelectorAll(".mermaid:not([data-processed])"));
    if(!nodes.length||!window.mermaid)return;
    if(!initialized){
      window.mermaid.initialize({
        startOnLoad:false,theme:"neutral",securityLevel:"strict",
        suppressErrorRendering:true,maxTextSize:8000,
        flowchart:{htmlLabels:false}
      });
      initialized=true;
    }
    const fallback=node=>{
      const source=mermaidSource.get(node)||node.textContent||"";
      if(node.querySelector("svg"))return;
      const pre=document.createElement("pre");
      const code=document.createElement("code");
      code.className="language-mermaid mermaid-fallback";
      code.textContent=source;
      pre.appendChild(code);
      node.replaceWith(pre);
    };
    Promise.resolve().then(()=>window.mermaid.run({nodes})).catch(error=>{
      console.warn("Diagram preview unavailable; showing Mermaid source instead.",error);
      nodes.forEach(fallback);
    });
  };
  const highlightCode = root => {
    if (!window.hljs) return;
    const scope=root || document;
    const blocks=Array.from(scope.querySelectorAll("pre code:not([data-highlighted])"));
    blocks.forEach(code => {
      try {
        if (code.classList.contains("language-plaintext") || code.classList.contains("language-text")) return;
        window.hljs.highlightElement(code);
      } catch (error) {
        console.warn("Code syntax highlighting unavailable; preserving the example text.",error);
      }
    });
  };
  window.PAPERROOM_RICH={render,renderDiagrams,highlightCode,escapeHtml};
})();

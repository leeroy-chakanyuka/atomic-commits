/* Rich practice content: GFM tables, code, inline emphasis and Mermaid diagrams.
 * Marked output MUST be sanitized. If a CDN fails, plain text stays visible.
 * The renderer never accepts user-submitted answers as Markdown.
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
  const renderDiagrams = root => {
    if (!window.mermaid) return;
    const nodes = Array.from((root || document).querySelectorAll(".mermaid:not([data-processed])"));
    if (!nodes.length) return;
    if (!initialized) {
      window.mermaid.initialize({ startOnLoad:false, theme:"neutral", securityLevel:"strict", suppressErrorRendering:true });
      initialized = true;
    }
    Promise.resolve(window.mermaid.run({nodes})).catch(error => {
      console.warn("Diagram preview unavailable; showing source instead.", error);
      nodes.forEach(node=>{if(!node.querySelector("svg")){node.classList.add("mermaid-fallback");node.removeAttribute("data-processed");}});
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

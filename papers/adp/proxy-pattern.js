window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-2-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 2,
  "title": "Proxy Pattern",
  "session": 1,
  "limitSeconds": 5400,
  "version": 1,
  "group": "design-patterns",
  "intro": "30 applied questions on the Proxy pattern: virtual, protection and remote proxies, Java delegation, diagrams, debugging, tests, and comparisons.",
  "source": "GoF Proxy design pattern; original Java practice examples.",
  "questions": [
    {
      "id": 1,
      "kind": "Definitions",
      "prompt": "Define the **Proxy** pattern. Distinguish a *subject* from a *proxy* and a *real subject*.",
      "marks": 4,
      "memo": "A proxy exposes the same interface as the real subject while controlling access to it (2). Subject is the common contract; proxy mediates; real subject performs the core operation (2)."
    },
    {
      "id": 2,
      "kind": "Definitions",
      "prompt": "Explain **virtual**, **protection**, and **remote** proxies. Give an appropriate use case for each.",
      "marks": 6,
      "memo": "Virtual proxy defers expensive initialization (2); protection proxy checks access rights (2); remote proxy represents an object in another process/network and delegates remotely (2)."
    },
    {
      "id": 3,
      "kind": "Short answer",
      "prompt": "Why is the proxy required to expose the same interface as the target object? Describe one benefit to the client.",
      "marks": 3,
      "memo": "Client can work with either transparently via the common contract (2); allows access behavior to be added without changing client code (1)."
    },
    {
      "id": 4,
      "kind": "Multiple choice",
      "prompt": "Which is the BEST example of a **virtual proxy**?",
      "marks": 1,
      "memo": "A. Lazy-loading a large image only when shown.",
      "options": [
        "Lazy-loading a large image only when shown.",
        "A controller creating all objects eagerly.",
        "A database table with no primary key.",
        "A singleton service instantiated at startup."
      ],
      "correct": "A"
    },
    {
      "id": 5,
      "kind": "Multiple choice",
      "prompt": "Which proxy type is most suitable for enforcing role-based access before invoking a sensitive service?",
      "marks": 1,
      "memo": "C. Protection proxy.",
      "options": [
        "Remote proxy",
        "Virtual proxy",
        "Protection proxy",
        "Prototype"
      ],
      "correct": "C"
    },
    {
      "id": 6,
      "kind": "Multiple choice",
      "prompt": "A client depends on `DocumentService`. Which declaration is most consistent with Proxy?",
      "marks": 1,
      "memo": "B. `DocumentService service = new SecureDocumentProxy(real);`",
      "options": [
        "DocumentService service = new SecureDocumentServiceImpl(real);",
        "DocumentService service = new SecureDocumentProxy(real);",
        "DocumentService service = new SecureDocumentProxy(); // no contract",
        "RealDocument service = new DocumentService();"
      ],
      "correct": "B"
    },
    {
      "id": 7,
      "kind": "True or false",
      "prompt": "A Proxy **must** change the data returned by the real subject to be considered a Proxy. Correct false statements.",
      "marks": 2,
      "memo": "False. Proxy often preserves results and adds access control, caching, logging or lazy creation while retaining the same contract.",
      "correct": "false"
    },
    {
      "id": 8,
      "kind": "True or false",
      "prompt": "A protection proxy can deny a call without invoking the real subject. Explain your answer.",
      "marks": 2,
      "memo": "True. Protecting access is a legitimate pre-delegation responsibility; denial should be explicit rather than executing the protected operation.",
      "correct": "true"
    },
    {
      "id": 9,
      "kind": "Fill in the blanks",
      "prompt": "Complete the two missing Java type names to preserve the Proxy pattern's shared interface and delegation.",
      "marks": 2,
      "memo": "Subject; RealSubject.",
      "blanks": 2,
      "accepted": [
        [
          "subject",
          "service interface",
          "interface"
        ],
        [
          "realsubject",
          "real subject",
          "target"
        ]
      ],
      "snippet": "interface __1__ {\\n  String read();\\n}\\nclass RealSubject implements Subject {\\n  public String read() { return \"content\"; }\\n}\\nclass DocumentProxy implements Subject {\\n  private final __2__ target;\\n  DocumentProxy(RealSubject target) { this.target = target; }\\n  public String read() { return target.read(); }\\n}"
    },
    {
      "id": 10,
      "kind": "Fill in the blanks",
      "prompt": "Complete the code that delegates through the proxy.",
      "marks": 2,
      "memo": "report; fetch.",
      "blanks": 2,
      "accepted": [
        [
          "report"
        ],
        [
          "fetch"
        ]
      ],
      "snippet": "interface ReportService { String fetch(); }\nclass ReportProxy implements ReportService {\n  private final ReportService __1__;\n  ReportProxy(ReportService report) { this.report = report; }\n  public String fetch() { return report.__2__(); }\n}"
    },
    {
      "id": 11,
      "kind": "Matching",
      "prompt": "Match each description with the relevant proxy type.",
      "marks": 3,
      "memo": "1 → A; 2 → C; 3 → B.",
      "matchItems": [
        {
          "text": "Defers image decoding until first use",
          "correct": "A"
        },
        {
          "text": "Checks permissions before deleting a record",
          "correct": "C"
        },
        {
          "text": "Calls an implementation on a remote server",
          "correct": "B"
        }
      ],
      "matchOptions": [
        {
          "letter": "A",
          "text": "Virtual proxy"
        },
        {
          "letter": "B",
          "text": "Remote proxy"
        },
        {
          "letter": "C",
          "text": "Protection proxy"
        },
        {
          "letter": "D",
          "text": "Composite"
        }
      ]
    },
    {
      "id": 12,
      "kind": "Identify the term",
      "prompt": "What is the name of the shared contract implemented by both the proxy and the real object?",
      "marks": 1,
      "memo": "Subject interface (sometimes simply `Subject`).",
      "accepted": [
        [
          "subject",
          "subject interface",
          "service interface",
          "common interface"
        ]
      ]
    },
    {
      "id": 13,
      "kind": "Code tracing",
      "prompt": "What does this program print? Explain the control flow and whether the real subject is invoked.",
      "marks": 5,
      "memo": "`DENIED`. The proxy sees false access, immediately returns DENIED, and never calls `target.read()` (3); common interface used by client (2).",
      "snippet": "interface Reader { String read(); }\nclass ActualReader implements Reader {\n  public String read() { System.out.println(\"REAL\"); return \"OK\"; }\n}\nclass Guard implements Reader {\n  Reader target = new ActualReader();\n  boolean allowed = false;\n  public String read() { return allowed ? target.read() : \"DENIED\"; }\n}\nSystem.out.println(new Guard().read());"
    },
    {
      "id": 14,
      "kind": "Error identification",
      "prompt": "A developer intends lazy creation but initializes the expensive object in the constructor. Identify the error and correct the design.",
      "marks": 6,
      "memo": "Eager construction defeats virtual proxy (2). Hold nullable field; create in first `view()` invocation (2). Reuse already constructed object on subsequent calls (2).",
      "snippet": "class ImageProxy implements Image {\n  private Image real = new HugeImage(\"photo.png\");\n  public void view() { real.view(); }\n}"
    },
    {
      "id": 15,
      "kind": "Code tracing",
      "prompt": "Trace the constructor count after invoking `view()` twice. Show why a virtual proxy can reduce startup work.",
      "marks": 5,
      "memo": "HugeImage created once (first call); second call reuses field (3). No initialization occurs simply by constructing proxy (2).",
      "snippet": "class ImageProxy implements Image {\n  private HugeImage real;\n  void view() {\n    if (real == null) real = new HugeImage(\"banner.jpg\");\n    real.view();\n  }\n}\nImageProxy p = new ImageProxy();\np.view(); p.view();"
    },
    {
      "id": 16,
      "kind": "Diagram reasoning",
      "prompt": "Interpret the UML-like diagram. Identify the shared interface, the delegating reference, and two places where access checks could occur.",
      "marks": 5,
      "memo": "Shared DocumentReader contract (1); DocumentProxy holds DocumentReader target (1); access checks should generally happen inside proxy before delegation, potentially at API layer as defense in depth, but the real service must be protected against bypass (3).",
      "diagram": "classDiagram\nclass DocumentReader {\n  <<interface>>\n  +read(id) String\n}\nclass RealDocumentReader {\n  +read(id) String\n}\nclass DocumentProxy {\n  -DocumentReader target\n  +read(id) String\n}\nDocumentReader <|.. RealDocumentReader\nDocumentReader <|.. DocumentProxy\nDocumentProxy --> DocumentReader : delegates"
    },
    {
      "id": 17,
      "kind": "Comparison",
      "prompt": "Compare Proxy and **Decorator**. Explain how their structures can look similar but their primary intentions differ.",
      "marks": 6,
      "memo": "Both wrap same interface and delegate (2). Proxy mainly controls access/lifecycle/location (2); decorator adds optional behaviors/composable responsibilities (2). One implementation may blur boundary, so intention is distinguishing criterion."
    },
    {
      "id": 18,
      "kind": "Comparison",
      "prompt": "Compare Proxy and **Adapter** using an incompatible third-party payments API.",
      "marks": 6,
      "memo": "Adapter converts incompatible API to client contract (3). Proxy typically keeps same contract and controls access/creation/remoteness (3); select Adapter if interface mismatches, Proxy if same interface needs mediation."
    },
    {
      "id": 19,
      "kind": "Scenario application",
      "prompt": "A student portal generates a 100MB timetable report. Design a virtual proxy that avoids generation until the file is first requested and caches the result for later calls.",
      "marks": 7,
      "memo": "Common Report interface (2), cached target with lazy initialization (2), delegate and reuse (2), address concurrent creation if shared (1)."
    },
    {
      "id": 20,
      "kind": "Security scenario",
      "prompt": "A payroll service must deny users without a `PAYROLL_READ` authority. Describe the proxy behavior, including denial path and audit records.",
      "marks": 6,
      "memo": "Check authority before delegation (2); reject without calling target (2); audit denial/success without exposing salary data (2)."
    },
    {
      "id": 21,
      "kind": "Error identification",
      "prompt": "Why is this protection proxy insecure if callers can access the `delegate` directly? Give **two** corrections.",
      "marks": 6,
      "memo": "Public delegate exposes direct bypass of authorization (2). Keep target private / inject behind protected interface (2); ensure service boundary/security at actual entry points or enforce in target as defense in depth (2).",
      "snippet": "class SalaryProxy implements SalaryService {\n  public final SalaryService delegate;\n  SalaryProxy(SalaryService delegate){ this.delegate=delegate; }\n  public BigDecimal salary(long id) {\n    checkPermission(); return delegate.salary(id);\n  }\n}"
    },
    {
      "id": 22,
      "kind": "Java implementation",
      "prompt": "Write Java code for a `FileService` protection proxy that denies `delete(id)` when the acting user lacks permission. Use constructor injection and a common interface.",
      "marks": 9,
      "memo": "Rubric: interface and real target field (2), constructor injection (2), identity/authority check (2), explicit access denied result/exception before delegation (2), delegate when allowed (1)."
    },
    {
      "id": 23,
      "kind": "Code review",
      "prompt": "This cache proxy returns documents without considering the active user. Explain the security flaw and propose a safe cache strategy.",
      "marks": 7,
      "memo": "If cache content is permission-scoped, a previously authorized user's cached document might be leaked to other users (3). Check auth on every retrieval before cache lookup (2); scope cache keys by tenant/user/permission or cache only safe shared content (2).",
      "snippet": "Map<Long, String> cache = new HashMap<>();\nString fetch(long documentId) {\n  if (cache.containsKey(documentId)) return cache.get(documentId);\n  checkPermission(documentId);\n  return cache.computeIfAbsent(documentId, real::fetch);\n}"
    },
    {
      "id": 24,
      "kind": "Scenario analysis",
      "prompt": "A remote proxy handles unreliable network requests. List three additional concerns it must deal with that a local subject may not need to.",
      "marks": 6,
      "memo": "Network timeouts/retries (2), serialization/network failures (2), latency/idempotency/security of remote transport (2)."
    },
    {
      "id": 25,
      "kind": "Java debugging",
      "prompt": "The proxy stores `null` for a missing image and creates the image on every call. Identify the issue and implement sensible absent-resource caching.",
      "marks": 6,
      "memo": "Null cannot distinguish 'not loaded' from 'loaded but absent' (2). Track attemptedLoaded flag/Optional or a sentinel (2). Cache known absence and decide appropriate expiration/retry policy (2).",
      "snippet": "Image get() {\n  if (real == null) real = repository.findById(id); // may return null\n  return real;\n}"
    },
    {
      "id": 26,
      "kind": "Testing",
      "prompt": "Write a JUnit 5 test (Mockito allowed) to prove that a rejected `delete()` request is **never** delegated to the real service.",
      "marks": 8,
      "memo": "Arrange mocked RealService and denying permission context (2); call proxy (2); assert denial result/exception (2); verify(real, never()).delete(anyLong()) (2)."
    },
    {
      "id": 27,
      "kind": "Performance reasoning",
      "prompt": "A proxy adds a remote call and audit write for each read. Explain when the proxy is useful and when it may become a bottleneck.",
      "marks": 6,
      "memo": "Useful for central access controls / metrics / remote handling (3). Adds hop, latency and failure modes; propose safe caching, batching, asynchronous audit or monitoring where applicable (3)."
    },
    {
      "id": 28,
      "kind": "Code tracing",
      "prompt": "An access proxy logs `start`, then delegates to a target that throws. Will `end` print? Rewrite using `finally` where appropriate.",
      "marks": 7,
      "memo": "`end` not printed when `target.run()` throws (2). Use try/finally for audit finalization (3). Do not swallow exception; preserve denial/failure semantics (2).",
      "snippet": "String run() {\n  System.out.println(\"start\");\n  String result = target.run();\n  System.out.println(\"end\");\n  return result;\n}"
    },
    {
      "id": 29,
      "kind": "Architecture design",
      "prompt": "A Spring application creates a service proxy to enforce transactions and security. Explain why **calls from one method to another on the same instance** may bypass proxy-based advice.",
      "marks": 7,
      "memo": "Self-invocation uses `this` and does not pass through external proxy in common proxy-based AOP setups (3). Move method to another proxied bean, change design/call boundary, or use appropriate aspect strategy (4). Note that this is a framework proxy pitfall, not intrinsic to all Proxy implementations."
    },
    {
      "id": 30,
      "kind": "Integrated design",
      "prompt": "Design a document-fetch feature requiring **lazy initialization, permission checks, audit logging and cached results**. Specify the proxy structure, operation ordering, concurrency concern and two tests.",
      "marks": 10,
      "memo": "Interface/target/proxy (2), check access on every call before returning cached data (2), lazy init/cache after authorization (2), audit outcomes and preserve failures (1), thread-safe initialization/cache (1), test allowed + denied no-delegation (2).",
      "diagram": "flowchart LR\n C[Controller] --> P[DocumentProxy]\n P --> A{Allowed?}\n A -->|No| D[Denied]\n A -->|Yes| Cache{Cached?}\n Cache -->|Yes| R[Return cached]\n Cache -->|No| S[RealDocumentService]\n S --> R"
    }
  ],
  "totalMarks": 146
};

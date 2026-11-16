window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-1-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 1,
  "title": "Chain of Responsibility",
  "session": 1,
  "limitSeconds": 5400,
  "version": 1,
  "group": "design-patterns",
  "intro": "30 Java-focused questions on Chain of Responsibility: theory, decisions, tracing, debugging, diagrams, and applied design. The complete memorandum unlocks after submission.",
  "source": "GoF Chain of Responsibility pattern; example scenarios are original practice material.",
  "questions": [
    {
      "id": 1,
      "kind": "Definitions",
      "prompt": "Define the **Chain of Responsibility** pattern. Explain the role of the sender and why the sender does not need to know the final receiver.",
      "marks": 4,
      "memo": "An intent to pass a request through candidate handlers until it is handled or the chain terminates (2). Sender knows the first handler/abstraction, not the chosen concrete receiver (1). Benefits: loose coupling and adjustable handler composition (1)."
    },
    {
      "id": 2,
      "kind": "Definitions",
      "prompt": "Explain how an abstract **Handler** differs from a **ConcreteHandler** in a typical Java implementation.",
      "marks": 3,
      "memo": "Handler declares a common operation and may implement forwarding / successor storage (2); ConcreteHandler makes domain-specific handling decisions and handles or delegates (1)."
    },
    {
      "id": 3,
      "kind": "Short answer",
      "prompt": "List **three valid termination outcomes** for a request chain and explain the importance of reporting the final outcome.",
      "marks": 4,
      "memo": "Handled successfully; explicitly rejected / invalid; passed through without a handler (3). A final failure result/exception avoids silently losing requests (1)."
    },
    {
      "id": 4,
      "kind": "Multiple choice",
      "prompt": "Which statement BEST expresses the pattern's main advantage?",
      "marks": 1,
      "memo": "B. A client sends to a stable handler abstraction without selecting a specific concrete receiver.",
      "options": [
        "Every handler must change the request.",
        "The sender does not select the concrete receiver.",
        "The chain always executes every handler.",
        "No request can ever go unhandled."
      ],
      "correct": "B"
    },
    {
      "id": 5,
      "kind": "Multiple choice",
      "prompt": "For an escalation chain `Clerk → Manager → Director`, the Manager can approve a request. What usually happens in a **first-capable-handler** chain?",
      "marks": 1,
      "memo": "C. The Manager approves and stops the chain.",
      "options": [
        "Director must always approve again.",
        "Clerk approves it after Manager.",
        "Manager handles it without forwarding.",
        "The request loops to Clerk."
      ],
      "correct": "C"
    },
    {
      "id": 6,
      "kind": "Multiple choice",
      "prompt": "Which code creates the intended chain `A → B → C`?",
      "marks": 1,
      "memo": "A. a.setNext(b); b.setNext(c).",
      "options": [
        "a.setNext(b); b.setNext(c);",
        "a.setNext(b); a.setNext(c);",
        "b.setNext(a); c.setNext(b);",
        "a.setNext(a); b.setNext(c);"
      ],
      "correct": "A"
    },
    {
      "id": 7,
      "kind": "True or false",
      "prompt": "Every request is guaranteed to be handled successfully when a Chain of Responsibility contains at least one concrete handler. **Correct false statements.**",
      "marks": 2,
      "memo": "False. A handler may reject or pass on a request, and the chain may reach its end without an eligible handler. Supply a fallback/result or explicit rejection.",
      "correct": "false"
    },
    {
      "id": 8,
      "kind": "True or false",
      "prompt": "A chain that invokes every handler can still be a Chain of Responsibility, provided that is an intentional pipeline policy. **Explain your answer.**",
      "marks": 2,
      "memo": "True. A pipeline runs multiple stages by delegation; distinguishing it from the first-capable-handler variant is important.",
      "correct": "true"
    },
    {
      "id": 9,
      "kind": "Fill in the blanks",
      "prompt": "Complete the terminology using the standard behavioral-pattern vocabulary.",
      "marks": 2,
      "memo": "Behavioral; successor.",
      "blanks": 2,
      "accepted": [
        [
          "behavioral"
        ],
        [
          "successor",
          "next"
        ]
      ],
      "contextMd": "Chain of Responsibility is a __1__ pattern. A handler may keep a reference to its __2__."
    },
    {
      "id": 10,
      "kind": "Fill in the blanks",
      "prompt": "Complete the Java chain configuration to allow level 2 to forward to level 3.",
      "marks": 2,
      "memo": "setNext; level3.",
      "blanks": 2,
      "accepted": [
        [
          "setNext"
        ],
        [
          "level3"
        ]
      ],
      "snippet": "Handler level1 = new Level1();\nHandler level2 = new Level2();\nHandler level3 = new Level3();\nlevel1.setNext(level2);\nlevel2.__1__(__2__);"
    },
    {
      "id": 11,
      "kind": "Matching",
      "prompt": "Match each element to its responsibility.",
      "marks": 3,
      "memo": "1 → B (client), 2 → C (handler abstraction), 3 → A (concrete handler).",
      "matchItems": [
        {
          "text": "Creates/submits the request",
          "correct": "B"
        },
        {
          "text": "Defines common handling contract",
          "correct": "C"
        },
        {
          "text": "Implements domain-specific decision",
          "correct": "A"
        }
      ],
      "matchOptions": [
        {
          "letter": "A",
          "text": "ConcreteHandler"
        },
        {
          "letter": "B",
          "text": "Client"
        },
        {
          "letter": "C",
          "text": "Handler"
        },
        {
          "letter": "D",
          "text": "Director (Builder pattern)"
        }
      ]
    },
    {
      "id": 12,
      "kind": "Identify the term",
      "prompt": "Which Chain of Responsibility role forwards an unhandled request to the next handler?",
      "marks": 1,
      "memo": "The Handler (or base handler) may implement forwarding; a concrete handler can also forward explicitly.",
      "accepted": [
        [
          "handler",
          "base handler",
          "abstract handler",
          "concrete handler"
        ]
      ]
    },
    {
      "id": 13,
      "kind": "Code tracing",
      "prompt": "Trace the value printed when `handle(75)` is called. Explain both conditions.",
      "marks": 4,
      "memo": "Prints MEDIUM. Small rejects because 75 > 50; Medium accepts because 75 <= 100 (2), plus explanation of forwarding/early return (2).",
      "snippet": "abstract class Handler {\n  Handler next;\n  void setNext(Handler n) { next = n; }\n  abstract String handle(int amount);\n}\nclass Small extends Handler {\n  String handle(int a) { return a <= 50 ? \"SMALL\" : next.handle(a); }\n}\nclass Medium extends Handler {\n  String handle(int a) { return a <= 100 ? \"MEDIUM\" : next.handle(a); }\n}\n// Small s = ...; Medium m = ...; s.setNext(m);\nSystem.out.println(s.handle(75));"
    },
    {
      "id": 14,
      "kind": "Error identification",
      "prompt": "The final handler receives an unsupported request. Identify the exception and supply a safe corrected implementation.",
      "marks": 5,
      "memo": "`NullPointerException` when `next` is null (2). Example: `if (canHandle(r)) return Result.ok(); if (next != null) return next.handle(r); return Result.rejected(\"Unhandled request\");` (3).",
      "snippet": "Result handle(Request r) {\n  if (canHandle(r)) return approve(r);\n  return next.handle(r); // last handler has next == null\n}"
    },
    {
      "id": 15,
      "kind": "Error identification",
      "prompt": "The intended sequence is **Junior → Senior → Executive**. State the actual links, identify the defect and correct the setup.",
      "marks": 5,
      "memo": "Junior.next is Executive because the second setter overwrites the first (2). Senior becomes unreachable (1). Fix `junior.setNext(senior); senior.setNext(executive);` (2).",
      "snippet": "junior.setNext(senior);\njunior.setNext(executive);\njunior.handle(request);"
    },
    {
      "id": 16,
      "kind": "Code tracing",
      "prompt": "Given the approval code below, what is returned for `900` and `3000`? What changes if the handlers are reversed?",
      "marks": 5,
      "memo": "Original: 900 -> MANAGER; 3000 -> DIRECTOR. Reversed: 900 -> DIRECTOR and 3000 -> DIRECTOR, since Director's broad predicate accepts both. Explain overlap and ordering hazard.",
      "snippet": "class Manager extends Handler {\n  String handle(int a) { return a <= 1000 ? \"MANAGER\" : next.handle(a); }\n}\nclass Director extends Handler {\n  String handle(int a) { return a <= 10000 ? \"DIRECTOR\" : next.handle(a); }\n}\n// Manager -> Director"
    },
    {
      "id": 17,
      "kind": "Diagram reasoning",
      "prompt": "Read the following chain diagram. The request has severity `HIGH` and only H3 accepts it. Describe the invocation order and explain where the **client** is coupled.",
      "marks": 5,
      "memo": "Client invokes H1; H1 delegates to H2; H2 delegates to H3; H3 handles (3). Client depends on the handler contract / first entry point, not H3 (2).",
      "diagram": "flowchart LR\n  Client[Client] --> H1[H1: low severity]\n  H1 --> H2[H2: medium severity]\n  H2 --> H3[H3: high severity]\n  H3 --> Result[Handled]",
      "contextMd": "Each handler tests whether it accepts the request; only H3 accepts HIGH."
    },
    {
      "id": 18,
      "kind": "Scenario application",
      "prompt": "A university ticket system escalates **password → network → server** problems. Identify three handlers, design the order, and specify a safe outcome for an unhandled ticket.",
      "marks": 6,
      "memo": "Create PasswordSupport, NetworkSupport, ServerSupport or equivalent (3). Compose from entry-level through specialist escalation (1). End with explicit unresolved ticket / escalation queue and observable status (2)."
    },
    {
      "id": 19,
      "kind": "Integrated reasoning",
      "prompt": "A fraud check is placed after a handler that returns `APPROVED` when balance is sufficient. A suspicious payment has enough money. Identify the flaw and propose a safer policy.",
      "marks": 6,
      "memo": "The balance handler stops chain, bypassing fraud detection (3). Use mandatory validation pipeline (balance → fraud → execution) where each stage forwards only successful checks, and short-circuits on failure (3).",
      "diagram": "flowchart LR\n A[Balance check] --> B[Fraud check]\n B --> C[Execute]\n A -.incorrect success termination.-> D[APPROVED]"
    },
    {
      "id": 20,
      "kind": "Error identification",
      "prompt": "Consider `A → B → C → A` with no accepting handler. Identify the execution consequence and describe two prevention techniques.",
      "marks": 6,
      "memo": "Repeated delegation leads to unbounded recursion/StackOverflowError (2). Prevent cycle at configuration with visited-node detection (2); validate chain as a DAG / use max-hop guard or immutable wiring (2).",
      "snippet": "a.setNext(b);\nb.setNext(c);\nc.setNext(a);"
    },
    {
      "id": 21,
      "kind": "Java implementation",
      "prompt": "Write a minimal `Handler` abstraction and a `NextHandler` implementation that safely returns an explicit `UNHANDLED` result if the chain terminates.",
      "marks": 8,
      "memo": "Rubric: shared handle contract (2), successor field and setter/constructor (2), conditional handling (2), null-safe terminal status (2). Example: `abstract class Handler { protected Handler next; Handler link(Handler n){next=n;return n;} abstract Result handle(Request r); }` and concrete handler uses `next!=null ? next.handle(r) : Result.unhandled()`."
    },
    {
      "id": 22,
      "kind": "Java implementation",
      "prompt": "Implement a `ValidationHandler` that returns a rejected result when `request.customerId()` is null and delegates otherwise. Assume `Handler` has `next` and `Result` supports `ok()`/`reject(String)`.",
      "marks": 7,
      "memo": "Check null customer ID and return rejection (3); forward with `next.handle(request)` when available (2); terminate with `Result.ok()` when end reached (2).",
      "snippet": "abstract class Handler {\n  protected Handler next;\n  public void setNext(Handler next) { this.next = next; }\n  public abstract Result handle(Request request);\n}"
    },
    {
      "id": 23,
      "kind": "Comparison",
      "prompt": "Compare **first-capable-handler** and **must-run-every-check** chains. Explain which fits an IT support escalation and which fits payment validation.",
      "marks": 6,
      "memo": "First-capable: stop after eligible support level (3). Must-run pipeline: each security/payment validation stage delegates upon success and stops upon failure (3)."
    },
    {
      "id": 24,
      "kind": "Code review",
      "prompt": "The method below catches all exceptions and quietly delegates. State **two failure modes** and rewrite the policy for an authorization handler.",
      "marks": 7,
      "memo": "Swallowing authentication/authorization failure risks bypass, and hiding bugs makes diagnosis difficult (3). Fail closed: reject on access/security failure; log/rethrow unexpected exceptions; do not delegate a denied authorization as though not handled (4).",
      "snippet": "Result handle(Request r) {\n  try { return authorize(r); }\n  catch (Exception ex) { return next.handle(r); }\n}"
    },
    {
      "id": 25,
      "kind": "Testing",
      "prompt": "Write **three** JUnit 5 test names and expected assertions for a handler chain. Include a success, a delegation and an unhandled-request case.",
      "marks": 6,
      "memo": "Examples: `handlesAtFirstStage` asserts initial result; `forwardsToSecondStage` asserts second handler invoked/accepted; `unhandledRequestRejected` asserts explicit unhandled/rejected. Two marks each for meaningful input plus assertion."
    },
    {
      "id": 26,
      "kind": "Testing",
      "prompt": "Write a JUnit 5 test proving that after a handler returns `DENIED`, the downstream execution handler is **not invoked**. You may use Mockito.",
      "marks": 8,
      "memo": "Arrange handler chain with mock downstream (2), submit denied request (2), assert denied result (2), `verifyNoInteractions(executionHandler)` or equivalent (2). For mocks, instantiate a stub rejecting handler whose next is spy; use `verify(spy, never()).handle(any())`."
    },
    {
      "id": 27,
      "kind": "Design improvement",
      "prompt": "When handlers are independently configured by plugins, why can **mutable `next` references** be risky? Propose a safer construction strategy.",
      "marks": 6,
      "memo": "Concurrent reconfiguration, cycles, lost links, unintended order (3). Compose immutable ordered list/wrappers at startup; validate order and fallback; test the composition (3)."
    },
    {
      "id": 28,
      "kind": "Scenario analysis",
      "prompt": "A request has both a **billing complaint** and **account access issue**. When might a first-match chain be inadequate? Compare with a composite/pipeline approach.",
      "marks": 6,
      "memo": "First-match can ignore second required action (2). Distinguish routing to one owner vs multi-action workflow; pipeline/composite/fan-out if both must process (4)."
    },
    {
      "id": 29,
      "kind": "Architecture trade-off",
      "prompt": "Discuss how Chain of Responsibility supports **Open/Closed Principle** yet still requires careful chain assembly and observability.",
      "marks": 6,
      "memo": "Add new handler without rewriting existing handlers/client (2), but chain order/configuration must change or be assembled by policy (2); tracing/logging needed to diagnose which handler accepted or rejected (2)."
    },
    {
      "id": 30,
      "kind": "Integrated scenario",
      "prompt": "An accommodation platform uses `ApplicantCheck → LandlordCheck → AvailabilityCheck → RiskCheck → PersistApplication`. Redesign the result contract and control flow so every mandatory check runs before persistence. Explain how to insert a university-eligibility rule safely.",
      "marks": 10,
      "memo": "Model explicit `ACCEPT/REJECT` or `Result` with reasons (2); each validation forwards on success and rejects on failure (3); persist only after successful checks (2); insert eligibility before persistence and test failure/ordering cases (3).",
      "diagram": "flowchart LR\n A[Applicant] --> B[Landlord]\n B --> C[Availability]\n C --> D[Risk]\n D --> E[Persist application]"
    }
  ],
  "totalMarks": 138
};

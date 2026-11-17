window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-9-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 9,
  "title": "Decorator Pattern",
  "session": 1,
  "limitSeconds": 1800,
  "version": 3,
  "group": "design-patterns",
  "intro": "20 quick automatically marked Decorator MCQs, nested Java call traces, code bugs and true/false.",
  "source": "Original Java revision questions with coffee, documents, HTTP clients, security and formatting examples.",
  "questions": [
    {
      "id": 1,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A document renderer implements `Renderer`, and `WatermarkDecorator` also implements `Renderer` while holding a `Renderer inner` field. Which describes the relationships?",
      "options": [
        "Neither",
        "Only IS-A",
        "Only HAS-A",
        "Both IS-A and HAS-A"
      ],
      "correct": "D",
      "memo": "The decorator IS a Renderer by implementing its interface and HAS a Renderer through composition.",
      "marks": 1
    },
    {
      "id": 2,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A cafe has BaseCoffee (R25) plus optional MilkDecorator (+R6) and CaramelDecorator (+R9). Which nested object produces an R40 coffee?",
      "options": [
        "`new MilkDecorator(new BaseCoffee())`",
        "`new CaramelDecorator(new MilkDecorator(new BaseCoffee()))`",
        "`new CaramelDecorator(new BaseCoffee())`",
        "`new BaseCoffee()`"
      ],
      "correct": "B",
      "memo": "The wrappers add their prices after delegating: 25 + 6 + 9 = R40.",
      "marks": 1
    },
    {
      "id": 3,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A product team proposes a subclass for every coffee topping combination. Why is Decorator useful?",
      "options": [
        "It allows optional layers to be composed without a subclass for every combination",
        "It forces every customer to choose the same toppings",
        "It replaces the Coffee interface with a database table",
        "It removes all classes"
      ],
      "correct": "A",
      "memo": "Each independent decorator can be stacked around any Coffee implementation, avoiding combinatorial subclasses.",
      "marks": 1
    },
    {
      "id": 4,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** A base returns `x`, an inner suffix adds `A`, and an outer suffix adds `B`. What prints?",
      "options": [
        "ABx",
        "x only",
        "xAB",
        "xBA"
      ],
      "correct": "C",
      "memo": "Nested calls return base x, then inner adds A, then outer adds B.",
      "snippet": "interface Text { String render(); }\nclass Base implements Text { public String render(){return \"x\";} }\nclass Suffix implements Text {\n Text inner; String extra;\n Suffix(Text inner,String extra){this.inner=inner;this.extra=extra;}\n public String render(){return inner.render()+extra;}\n}\nText t=new Suffix(new Suffix(new Base(),\"A\"),\"B\");\nSystem.out.println(t.render());",
      "marks": 1
    },
    {
      "id": 5,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A LoggingDecorator wraps `HttpClient.send()` and prints before and after calling its inner client. Which object should it hold?",
      "options": [
        "Only the concrete HttpClientImpl",
        "An HttpClient interface reference",
        "A Factory object always",
        "A single String URL with no client"
      ],
      "correct": "B",
      "memo": "Holding the component interface lets the logging decorator wrap the real client or another decorator.",
      "marks": 1
    },
    {
      "id": 6,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** `MetricsDecorator` constructor accepts only `RawService`, not the shared `Service` interface. What limitation follows?",
      "options": [
        "The method execute() becomes static",
        "The compiler automatically converts all wrappers to RawService",
        "There is no problem for arbitrary stacking",
        "The decorator cannot easily wrap another decorator implementing Service"
      ],
      "correct": "D",
      "memo": "The wrapped field and constructor should accept the shared Service contract to support nested decorators.",
      "snippet": "interface Service { String run(); }\nclass RawService implements Service { public String run(){return \"ok\";} }\nclass MetricsDecorator implements Service {\n private final RawService inner;\n MetricsDecorator(RawService inner){this.inner=inner;}\n public String run(){return inner.run();}\n}",
      "marks": 1
    },
    {
      "id": 7,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** Two decorators log before/after a call. Outer wraps Inner wraps Base. Which sequence is correct?",
      "options": [
        "outer before, outer after, inner before, inner after, base",
        "base, outer before, inner before, inner after, outer after",
        "outer before, inner before, base, inner after, outer after",
        "inner before, outer before, base, outer after, inner after"
      ],
      "correct": "C",
      "memo": "Calls enter outer→inner→base and unwind inner→outer.",
      "snippet": "interface Worker { void run(); }\nclass Base implements Worker { public void run(){System.out.println(\"base\");} }\nclass Log implements Worker {\n private final Worker inner; private final String name;\n Log(Worker inner,String name){this.inner=inner;this.name=name;}\n public void run(){System.out.println(name+\" before\"); inner.run(); System.out.println(name+\" after\");}\n}\nnew Log(new Log(new Base(),\"inner\"),\"outer\").run();",
      "marks": 1
    },
    {
      "id": 8,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A CacheDecorator is placed **outside** an AuthorizationDecorator, and returns cached private data without calling the inner service. What is the security issue?",
      "options": [
        "A cache hit can bypass the inner authorization check",
        "Decorators never short-circuit",
        "Caching disables polymorphism",
        "Authorization always runs first"
      ],
      "correct": "A",
      "memo": "An outer cache can skip a wrapped auth check on hit. Enforce authorization before serving cached data and scope cache appropriately.",
      "marks": 1
    },
    {
      "id": 9,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A video player uses a wrapper that delays creating the expensive player until first use, and another wrapper that adds optional captions. Which pairing is most accurate?",
      "options": [
        "Neither can share an interface",
        "Both are necessarily Strategy",
        "Lazy wrapper is typically virtual Proxy; captions wrapper is Decorator",
        "Captions wrapper must be a Factory"
      ],
      "correct": "C",
      "memo": "Proxy primarily controls access/lifecycle; Decorator adds an optional responsibility. Their structures can look similar.",
      "marks": 1
    },
    {
      "id": 10,
      "kind": "Multiple choice",
      "prompt": "**Spot the bug:** `LoggingDecorator` implements Service but returns a constant instead of invoking its wrapped Service, even on normal successful paths. What's missing?",
      "options": [
        "Delegation to inner.run() when work should be performed",
        "The Java main method",
        "An Observer list",
        "A static factory method"
      ],
      "correct": "A",
      "memo": "A normal Decorator preserves underlying behavior via delegation; short-circuiting is valid only for intentional scenarios like rejection or cached results.",
      "snippet": "class LoggingDecorator implements Service {\n private final Service inner;\n LoggingDecorator(Service inner){this.inner=inner;}\n public String run(){return \"done\";}\n}",
      "marks": 1
    },
    {
      "id": 11,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** You need optional encryption and compression around a file writer. Which statement about layer order is safest?",
      "options": [
        "Order never matters",
        "Compression then encryption can have different effects from encryption then compression",
        "The compiler always chooses the optimal order",
        "All decorators are applied in parallel"
      ],
      "correct": "B",
      "memo": "Wrapper order determines execution order and may change output, performance or correctness.",
      "marks": 1
    },
    {
      "id": 12,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A developer writes `class Terra extends Luna extends BaseModel` to add features one at a time. How does Decorator model optional features differently?",
      "options": [
        "Decorators always change model weights",
        "Only one feature is allowed at runtime",
        "Decorators all subclass one previous feature class",
        "Each feature wrapper implements a common component interface and holds another component"
      ],
      "correct": "D",
      "memo": "Concrete decorators implement a shared interface and compose another component; no linear inheritance chain of feature combinations is needed.",
      "marks": 1
    },
    {
      "id": 13,
      "kind": "Multiple choice",
      "prompt": "**Code check:** Which declaration correctly models a generic decorator using a component interface?",
      "options": [
        "`class Wrapper extends String { ... }`",
        "`class Wrapper { static Service inner = null; }`",
        "`class Wrapper extends EveryConcreteService { ... }`",
        "`class Wrapper implements Service { private final Service inner; ... }`"
      ],
      "correct": "D",
      "memo": "The wrapper implements the same interface and stores a delegate reference typed to that interface.",
      "snippet": "interface Service { void run(); }\nclass Wrapper implements Service {\n private final Service inner;\n Wrapper(Service inner){this.inner=inner;}\n public void run(){inner.run();}\n}",
      "marks": 1
    },
    {
      "id": 14,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An AuditDecorator wraps a payment service. Which unit test most directly proves it preserves correct behavior?",
      "options": [
        "Check that it cannot wrap another decorator",
        "Test only that new AuditDecorator() compiles",
        "Verify the delegate is called exactly once with the same amount and its result is returned",
        "Only check the decorator's class name"
      ],
      "correct": "C",
      "memo": "A decorator should delegate exactly as its contract requires while adding audit behavior.",
      "marks": 1
    },
    {
      "id": 15,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A Java `SafetyDecorator` checks text returned by an AI API and blocks disallowed outputs. Has this necessarily retrained the model's internal weights?",
      "options": [
        "No, it adds runtime behavior around the model rather than post-training its parameters",
        "Only if it implements an interface",
        "Yes, every class constructor counts as fine-tuning",
        "Yes, any wrapper updates weights"
      ],
      "correct": "A",
      "memo": "Runtime decorators alter API behavior, not the neural network's trained parameters.",
      "marks": 1
    },
    {
      "id": 16,
      "kind": "True or false",
      "prompt": "**True/False:** A Decorator normally implements the same component interface as the wrapped object.",
      "correct": "true",
      "memo": "True. Substitutability allows callers and outer decorators to treat it as a component.",
      "marks": 1
    },
    {
      "id": 17,
      "kind": "True or false",
      "prompt": "**True/False:** Decorator requires `SafetyDecorator` to extend `LoggingDecorator` if both features may be combined.",
      "correct": "false",
      "memo": "False. They can be sibling concrete decorators that wrap one another through the shared component interface.",
      "marks": 1
    },
    {
      "id": 18,
      "kind": "True or false",
      "prompt": "**True/False:** Wrapping a component in five decorators can complicate debugging because invocation order is nested.",
      "correct": "true",
      "memo": "True. Each layer delegates to another and execution order must be understood and tested.",
      "marks": 1
    },
    {
      "id": 19,
      "kind": "True or false",
      "prompt": "**True/False:** Decorator and Proxy can have similar class structures but different primary intentions.",
      "correct": "true",
      "memo": "True. Proxy commonly controls access, creation or location; Decorator adds stackable responsibilities.",
      "marks": 1
    },
    {
      "id": 20,
      "kind": "True or false",
      "prompt": "**True/False:** A Decorator with a wrapped object can never return early without delegating, even when blocking an unauthorized request.",
      "correct": "false",
      "memo": "False. Intentional short-circuiting can be appropriate, although it must preserve the promised contract and be tested.",
      "marks": 1
    }
  ],
  "totalMarks": 20
};

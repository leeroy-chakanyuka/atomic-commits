window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-9-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 9,
  "title": "Decorator Pattern",
  "session": 1,
  "limitSeconds": 4500,
  "version": 1,
  "group": "design-patterns",
  "intro": "20 self-contained Java questions about decorator composition across coffee orders, reports, notifications, documents, logging, caching and security. No prior chat examples needed.",
  "source": "Original Java practice grounded in realistic but fictional systems.",
  "questions": [
    {
      "id": 1,
      "kind": "Definitions",
      "prompt": "**Scenario:** A web API client already implements `HttpClient.send(Request)`. The team wants optional audit logging without modifying the existing client. A `LoggingClient` wraps the original client and implements the same `HttpClient` interface.\n\n**Task:** Explain how the decorator simultaneously **IS-A** `HttpClient` and **HAS-A** `HttpClient`. Explain why both relationships are necessary.",
      "marks": 6,
      "memo": "IS-A: LoggingClient implements the same HttpClient contract and is substitutable wherever a client is expected (3). HAS-A: it stores a wrapped HttpClient reference and delegates send() to it (3); this enables nesting and extra behavior."
    },
    {
      "id": 2,
      "kind": "Short answer",
      "prompt": "**Scenario:** A café sells one base coffee with three optional extras: milk, caramel, and whipped cream. Customers can choose any combination, including multiple servings. A junior developer proposes `MilkCoffee`, `MilkCaramelCoffee`, `MilkCaramelWhipCoffee` and many more subclasses.\n\n**Task:** Explain the class-explosion problem. Sketch how independently stackable decorators remove the need for a subclass for every topping combination.",
      "marks": 6,
      "memo": "Class count grows with combinations and topping orders (2). Coffee common interface; BaseCoffee base component; Milk, Caramel and Whip decorators each implement Coffee and contain another Coffee (2). Nest decorators at runtime to compose any valid combination (2)."
    },
    {
      "id": 3,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A PDF document renderer supports optional watermarking and page-number annotations. Both features must work on an unmodified renderer, independently or together.\n\nWhich structure makes both extensions stackable?",
      "marks": 1,
      "memo": "A. Each wrapper exposes the same Renderer interface and stores a Renderer to which it delegates.",
      "options": [
        "Each decorator implements Renderer and stores a Renderer reference",
        "Each decorator subclasses the exact previous concrete decorator",
        "Each wrapper must modify the original renderer source",
        "Every combination has its own subclass"
      ],
      "correct": "A"
    },
    {
      "id": 4,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** The following statement is legal Java:\n```java\nRenderer r = new WatermarkDecorator(new PdfRenderer());\n```\nBoth classes implement the Renderer interface, and WatermarkDecorator's constructor accepts a Renderer.\n\nWhat can be concluded?",
      "marks": 1,
      "memo": "B. The wrapper is a Renderer and it contains another Renderer, enabling delegation.",
      "options": [
        "The wrapper cannot be assigned to Renderer",
        "WatermarkDecorator both IS-A and HAS-A Renderer",
        "PdfRenderer must extend WatermarkDecorator",
        "The wrapper is guaranteed to be faster"
      ],
      "correct": "B"
    },
    {
      "id": 5,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A messaging API needs to optionally add audit records before and after invoking `send()`, while preserving the existing Sender interface and concrete senders.\n\nWhich design-pattern role is audit logging most naturally implemented as?",
      "marks": 1,
      "memo": "B. A decorator wrapping Sender and delegating send().",
      "options": [
        "An Abstract Factory selecting providers only",
        "A Sender decorator that adds behavior around the delegate",
        "An Observer that never handles messages",
        "A subclass of every individual concrete sender"
      ],
      "correct": "B"
    },
    {
      "id": 6,
      "kind": "True or false",
      "prompt": "**Scenario:** A store sells a base pastry with optional toppings. Someone argues `WhippedCreamDecorator` must extend `ChocolateDecorator` so toppings are guaranteed to be applied in order.\n\n**Statement:** Concrete decorators must inherit directly from one another to be stackable. Correct this if false.",
      "marks": 2,
      "memo": "False. Decorators typically extend a shared decorator base (or directly implement Component) and compose through a wrapped Component. The chain order is defined by object nesting, not by the class hierarchy.",
      "correct": "false"
    },
    {
      "id": 7,
      "kind": "True or false",
      "prompt": "**Scenario:** A response can be compressed, encrypted and cached through separate wrappers. A developer rearranges their order without testing the result.\n\n**Statement:** Decorator order can affect behavior, so a reordered chain may change results or security. Explain briefly.",
      "marks": 2,
      "memo": "True. For example encrypt-then-compress differs from compress-then-encrypt, and a cache outside an authorization wrapper might bypass checks on cache hits.",
      "correct": "true"
    },
    {
      "id": 8,
      "kind": "Code tracing",
      "prompt": "**Scenario:** A report renderer is wrapped with two tracing decorators. Each decorator prints a before/after message; the base renderer prints once when called. `outer` wraps `inner`.\n\n**Task:** Write the exact five output lines and explain the nested call/return order.",
      "marks": 8,
      "memo": "Output: outer before; inner before; base; inner after; outer after (5). Calls proceed outside→inside and return inside→outside (3).",
      "snippet": "interface Renderer { void render(); }\nclass Base implements Renderer {\n    public void render() { System.out.println(\"base\"); }\n}\nclass Trace implements Renderer {\n    private final Renderer inner; private final String name;\n    Trace(Renderer inner, String name) { this.inner=inner; this.name=name; }\n    public void render() {\n        System.out.println(name+\" before\");\n        inner.render();\n        System.out.println(name+\" after\");\n    }\n}\nnew Trace(new Trace(new Base(), \"inner\"), \"outer\").render();"
    },
    {
      "id": 9,
      "kind": "Code tracing",
      "prompt": "**Scenario:** An invoice formatter adds optional prefixes and suffixes. The inner formatter first returns the word `invoice`. Each wrapper modifies the result **after** calling the wrapped formatter.\n\n**Task:** Predict the exact printed text and trace which wrapper modifies the string first.",
      "marks": 6,
      "memo": "Prints **[invoice]** (3); Suffix wraps Base and returns invoice] first (1); Prefix is the outer decorator and prepends [ to that result (2).",
      "snippet": "interface Text { String render(); }\nclass BaseText implements Text {\n    public String render() { return \"invoice\"; }\n}\nclass Prefix implements Text {\n    private final Text inner;\n    Prefix(Text inner) { this.inner=inner; }\n    public String render() { return \"[\" + inner.render(); }\n}\nclass Suffix implements Text {\n    private final Text inner;\n    Suffix(Text inner) { this.inner=inner; }\n    public String render() { return inner.render() + \"]\"; }\n}\nText t = new Prefix(new Suffix(new BaseText()));\nSystem.out.println(t.render());"
    },
    {
      "id": 10,
      "kind": "Error identification",
      "prompt": "**Scenario:** A security wrapper is supposed to reject blocked requests but delegate allowed ones to a real HTTP client. The current version returns a constant success response regardless of what the underlying service does.\n\n**Task:** Identify the design/logic error. Give a correct control flow and an example of when deliberately skipping delegation **would** be valid.",
      "marks": 7,
      "memo": "Ignoring inner client makes successful requests never reach actual service (3). Check policy then call inner.send(request) for allowed requests and return its result (2). Explicit rejection/cache-hit short circuit may skip delegation by design, with tests (2).",
      "snippet": "class GuardClient implements HttpClient {\n    private final HttpClient inner;\n    GuardClient(HttpClient inner) { this.inner = inner; }\n    public Response send(Request r) {\n        return Response.ok(\"sent\");  // BUG: never delegates\n    }\n}"
    },
    {
      "id": 11,
      "kind": "Java debugging",
      "prompt": "**Scenario:** A developer is creating a `MetricsDecorator` for a document service. The wrapper constructor accepts only `RawDocumentService`, so it cannot wrap another decorator such as `CachingDecorator`.\n\n**Task:** Identify the problematic concrete dependency. Write the type-level correction that enables nesting.",
      "marks": 6,
      "memo": "Field and constructor are too narrow (3); replace RawDocumentService with DocumentService shared interface in both places (2); both concrete target and decorators implement DocumentService (1).",
      "snippet": "class MetricsDecorator implements DocumentService {\n    private final RawDocumentService inner;\n    MetricsDecorator(RawDocumentService inner) { this.inner=inner; }\n    public String fetch(String id) { return inner.fetch(id); }\n}"
    },
    {
      "id": 12,
      "kind": "Diagram reasoning",
      "prompt": "**Scenario:** An image renderer can be wrapped with a frame and a watermark. Both can be applied in any order. The diagram shows the minimal Decorator structure.\n\n**Task:** Identify the component interface, base product, abstract decorator and two concrete decorators. Point out the **IS-A** and **HAS-A** arrows.",
      "marks": 7,
      "memo": "Image interface common (1); ImageFile is base component (1); ImageDecorator stores Image (1); FrameDecorator and WatermarkDecorator concrete (2); inheritance/implements is IS-A and o-- Image is HAS-A (2).",
      "diagram": "classDiagram\nclass Image {\n <<interface>>\n +draw() void\n}\nclass ImageFile {\n +draw() void\n}\nclass ImageDecorator {\n <<abstract>>\n #Image wrapped\n +draw() void\n}\nclass FrameDecorator\nclass WatermarkDecorator\nImage <|.. ImageFile\nImage <|.. ImageDecorator\nImageDecorator o-- Image : wraps\nImageDecorator <|-- FrameDecorator\nImageDecorator <|-- WatermarkDecorator"
    },
    {
      "id": 13,
      "kind": "Scenario application",
      "prompt": "**Scenario:** A café's base coffee costs R25. Milk adds R6 and caramel adds R9. A customer can order plain coffee, coffee with milk, or coffee with both milk and caramel. Each item must expose `description()` and `price()`.\n\n**Task:** Define the common Coffee interface and decorator roles. Show the object composition for a R40 coffee and explain how its price is calculated.",
      "marks": 7,
      "memo": "Coffee interface exposes price/description (2); BaseCoffee R25; MilkDecorator +R6; CaramelDecorator +R9 (3); `new CaramelDecorator(new MilkDecorator(new BaseCoffee()))` totals R40 (2)."
    },
    {
      "id": 14,
      "kind": "Scenario analysis",
      "prompt": "**Scenario:** A REST service wraps authorization checking and caching in separate decorators. Some responses are private to a user. The engineer proposes `AuthorizationDecorator(CacheDecorator(real))` or `CacheDecorator(AuthorizationDecorator(real))`.\n\n**Task:** Analyze whether the second ordering could bypass access checks on cache hits. Propose a safe design and suitable cache keys.",
      "marks": 8,
      "memo": "Outer CacheDecorator may return a hit without entering inner AuthorizationDecorator (3). Ensure authorization applies on every request before cache reads, e.g. outer AuthDecorator, or explicit checks at cache boundary (3). Scope cache by user/tenant/permission where necessary and test hits/misses (2)."
    },
    {
      "id": 15,
      "kind": "Java implementation",
      "prompt": "**Scenario:** An email notification gateway already implements `Sender.send(String)`. A reporting team wants optional timing logs before and after each send without changing the core EmailSender.\n\n**Task:** Write Java interface `Sender`, `EmailSender`, abstract `SenderDecorator` holding a Sender, and a `TimingDecorator` that delegates exactly once.",
      "marks": 10,
      "memo": "Sender interface (2), EmailSender concrete product (2), decorator implements Sender and stores/delegates Sender (3), TimingDecorator logs/measures around exactly one inner.send call (3)."
    },
    {
      "id": 16,
      "kind": "Java implementation",
      "prompt": "**Scenario:** A text-rendering system can optionally wrap text in parentheses, and optionally uppercase it. All operations return a String from `render()`. The base returns `hello`.\n\n**Task:** Write the Java interface, `PlainText`, `ParenthesesDecorator` and `UppercaseDecorator`. Show an object graph that renders `(HELLO)` without creating a special combined subclass.",
      "marks": 9,
      "memo": "TextRenderer common contract and base (2); both decorators implement contract and hold inner TextRenderer (4); new ParenthesesDecorator(new UppercaseDecorator(new PlainText())) yields (HELLO) (3)."
    },
    {
      "id": 17,
      "kind": "Testing",
      "prompt": "**Scenario:** `AuditDecorator` wraps `PaymentGateway.charge(amount)` and must call the real gateway exactly once. The decorator may log but must not change a successful result or hide failures.\n\n**Task:** Design JUnit 5 / Mockito tests for successful delegation, failure propagation, and call count.",
      "marks": 8,
      "memo": "Verify mock called once with same amount (3); assert returned result preserved (3); configure exception and assert it propagates while verifying call once (2)."
    },
    {
      "id": 18,
      "kind": "Comparison",
      "prompt": "**Scenario:** A documents API uses one wrapper to delay the expensive file download until needed, and another wrapper to add optional watermarking to the returned document. Both implement the same Document interface.\n\n**Task:** Identify whether each wrapper is chiefly a Proxy or Decorator, and explain why their UML structures might look almost identical.",
      "marks": 7,
      "memo": "Lazy download is a virtual Proxy controlling when work occurs (3); optional watermark is Decorator adding behavior/content (3); both share interface and hold a delegate; intent distinguishes (1)."
    },
    {
      "id": 19,
      "kind": "Conceptual correction",
      "prompt": "**Scenario:** A team builds a Java `ModerationDecorator` around a text-generation API. It screens outputs before displaying them. A product manager says this wrapper has 'retrained the model' to be safer.\n\n**Task:** Explain why that statement is technically incorrect and name two runtime concerns that genuinely fit Decorator.",
      "marks": 6,
      "memo": "Decorator wraps API behavior without modifying neural model weights/training artifacts (3); output filtering, logging, caching, rate limiting and formatting are runtime responsibilities suitable for decorators (3)."
    },
    {
      "id": 20,
      "kind": "Integrated reasoning",
      "prompt": "**Scenario:** A document API needs optional audit logging, optional watermarks and optional caching. It is used by internal staff and external customers with different combinations of features. The existing `DocumentService.fetch(id)` must not be modified.\n\n**Task:** Design the component interface, base service and three decorator classes. Show two compositions, explain why one subclass per combination is unnecessary, and identify one cache-related safety pitfall.",
      "marks": 10,
      "memo": "DocumentService/RealDocumentService contract (2); Logging, Watermark, Cache decorators each implement interface and store it (3); two valid nested object constructions (2); composition avoids feature-combination subclasses (1); caching privacy/ordering/invalidations considered (2)."
    }
  ],
  "totalMarks": 118
};

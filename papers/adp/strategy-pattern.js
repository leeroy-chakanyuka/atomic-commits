window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-7-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 7,
  "title": "Strategy Pattern",
  "session": 1,
  "limitSeconds": 4500,
  "version": 1,
  "group": "design-patterns",
  "intro": "20 standalone Strategy questions with fully introduced cases across shipping, payments, photo editing, networking, backups and deployment. No prior chat context needed.",
  "source": "Original Java design-pattern practice; all business scenarios and APIs are illustrative.",
  "questions": [
    {
      "id": 1,
      "kind": "Definitions",
      "prompt": "**Scenario:** A grocery delivery service supports three alternative delivery-price calculations: flat-rate, distance-based and express. New rules are added by separate teams. The `Checkout` class should calculate prices without hard-coding all three algorithms.\n\n**Task:** Define the Strategy pattern. Identify the context, strategy interface and concrete strategies in this scenario, and explain how the calculation algorithm can change without changing `Checkout`.",
      "marks": 6,
      "memo": "Strategy encapsulates interchangeable algorithms behind one interface (2). Checkout is the context and stores a DeliveryPriceStrategy reference (2); FlatRate, DistanceBased and Express are concrete strategies that implement one pricing contract (2)."
    },
    {
      "id": 2,
      "kind": "Short answer",
      "prompt": "**Scenario:** A document uploader has `ZipUploader`, `GzipUploader` and `UncompressedUploader` subclasses. Each also duplicates validation, progress reporting and API upload logic. The team wants to reuse the same uploader pipeline while selecting different compression algorithms.\n\n**Task:** Explain why inheritance creates duplication here. Show how composition with `CompressionStrategy` changes the design.",
      "marks": 6,
      "memo": "Subclasses replicate common upload steps and cannot independently combine pipeline changes with compression choices (2). Extract CompressionStrategy.compress(byte[]) with Zip, Gzip and None implementations (2). One Uploader HAS-A CompressionStrategy and delegates compression, while reusing validation/upload logic (2)."
    },
    {
      "id": 3,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An e-commerce shipping service uses `ShippingCostStrategy` with `calculate(parcel)`. The service must use a new strategy chosen at checkout without changing its class.\n\nWhich field best represents the Strategy design?",
      "marks": 1,
      "memo": "B. Store a reference to the common ShippingCostStrategy in the shipping service and delegate calculate().",
      "options": [
        "A ShippingService subclass for every combination of carrier and parcel",
        "A ShippingCostStrategy field in ShippingService",
        "A global static calculation method that all clients must edit",
        "A ShippingService field inside each strategy"
      ],
      "correct": "B"
    },
    {
      "id": 4,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A video processing service holds a `QualityStrategy` object. A user chooses 'balanced' after the job was initially configured for 'fast'. The service supports `setStrategy(...)`.\n\nWhat changes when setStrategy is called, assuming no job has started yet?",
      "marks": 1,
      "memo": "B. The selected algorithm object changes; the service's Java class does not change.",
      "options": [
        "The service must be recompiled",
        "The service delegates subsequent calls to the newly selected algorithm",
        "The service changes its superclass",
        "All video services must switch to the same setting"
      ],
      "correct": "B"
    },
    {
      "id": 5,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A payment platform supports three fraud-scoring algorithms trained or configured separately. All algorithms return a numeric risk score from the same transaction data. The checkout flow must not know the details of each scorer.\n\nWhere should each algorithm implementation live?",
      "marks": 1,
      "memo": "B. Each scorer implements a FraudScoringStrategy interface; checkout stores the selected strategy and delegates scoring.",
      "options": [
        "As a different checkout superclass for each scoring variant",
        "In a concrete class implementing FraudScoringStrategy",
        "As unrelated static methods called with repeated if/else in checkout",
        "Inside a PaymentFactory's createPayment method only"
      ],
      "correct": "B"
    },
    {
      "id": 6,
      "kind": "True or false",
      "prompt": "**Scenario:** The team is debating whether `TaxStrategy` must be an abstract class because runtime polymorphism is required. They already have Java interfaces in the codebase.\n\n**Statement:** Strategy requires an abstract class rather than a Java interface. Correct the statement if false.\n\n**Task:** Decide whether the statement is true or false, and explain your reasoning.",
      "marks": 2,
      "memo": "False. A Java interface is a common strategy contract; classes implement it. An abstract class is optional if concrete strategies share code or state.",
      "correct": "false"
    },
    {
      "id": 7,
      "kind": "True or false",
      "prompt": "**Scenario:** Two independent checkout sessions use the same immutable `VatStrategy` instance. The strategy stores only a final percentage and has no per-customer mutable state.\n\n**Statement:** Sharing this same strategy object can be safe. Explain one condition that would make sharing unsafe.\n\n**Task:** Decide whether the statement is true or false, and explain your reasoning.",
      "marks": 2,
      "memo": "True when the object is immutable/thread-safe. Sharing becomes risky if the strategy stores mutable per-customer data or changes state without synchronization.",
      "correct": "true"
    },
    {
      "id": 8,
      "kind": "Code tracing",
      "prompt": "**Scenario:** A bookstore chooses a discount algorithm at runtime. All amounts are integer rand, and the only change between the two calls is which `Discount` object the `Cart` references.\n\n**Task:** State the exact output and explain which object Java dispatches `discount()` to on each call.",
      "marks": 6,
      "memo": "Prints 90 then 80 (2). The same Cart reference delegates to TenOff first, then TwentyOff after setStrategy (2). Dynamic binding invokes the concrete Discount implementation via the interface reference (2).",
      "snippet": "interface Discount { int apply(int price); }\nclass TenOff implements Discount { public int apply(int p) { return p - 10; } }\nclass TwentyOff implements Discount { public int apply(int p) { return p - 20; } }\nclass Cart {\n    private Discount discount;\n    Cart(Discount d) { this.discount = d; }\n    void setStrategy(Discount d) { discount = d; }\n    int total(int original) { return discount.apply(original); }\n}\nCart c = new Cart(new TenOff());\nSystem.out.println(c.total(100));\nc.setStrategy(new TwentyOff());\nSystem.out.println(c.total(100));"
    },
    {
      "id": 9,
      "kind": "Code tracing",
      "prompt": "**Scenario:** A monitoring tool reuses one **mutable** counting strategy for two independent polling agents. Each call increments the count in that strategy object. Both agents store the same instance passed into their constructors.\n\n**Task:** What does the program print? Explain whether the agents have independent counters.",
      "marks": 6,
      "memo": "Prints 1 then 2 (2). Both agents store the same CounterPolicy instance, so they share its count (2). They are different Monitor objects but their strategy state is shared; independent behavior requires separate instances or stateless strategies (2).",
      "snippet": "interface PollPolicy { int next(); }\nclass CounterPolicy implements PollPolicy {\n    private int calls = 0;\n    public int next() { return ++calls; }\n}\nclass Monitor {\n    private final PollPolicy policy;\n    Monitor(PollPolicy policy) { this.policy = policy; }\n    int poll() { return policy.next(); }\n}\nCounterPolicy shared = new CounterPolicy();\nMonitor a = new Monitor(shared);\nMonitor b = new Monitor(shared);\nSystem.out.println(a.poll());\nSystem.out.println(b.poll());"
    },
    {
      "id": 10,
      "kind": "Error identification",
      "prompt": "**Scenario:** A shipping application has four carriers and three pricing methods. Developers create classes like `ExpressDhlShipping`, `EconomyDhlShipping`, `ExpressUpsShipping` and so on. Every class duplicates tracking and address validation.\n\n**Task:** Identify the combinatorial design problem. Refactor the design so carrier integration and price calculation can vary independently, explaining the responsibility of each component.",
      "marks": 7,
      "memo": "Carrier × pricing choices produce up to 12 subclasses, duplicated shared logic (3). Keep a ShipmentService with a Carrier adapter/service and a separate PriceStrategy field (2). Inject carrier and price policy independently to compose choices without subclass explosion (2)."
    },
    {
      "id": 11,
      "kind": "Java debugging",
      "prompt": "**Scenario:** A route planner delegates path selection to a `RouteStrategy`. The developer accidentally calls its own method inside `plan()` instead of invoking the strategy. Assume `strategy` is non-null.\n\n**Task:** Explain the runtime failure and write the one-line correction.",
      "marks": 6,
      "memo": "plan() calls itself repeatedly, ultimately throwing StackOverflowError (3). Correct with `return strategy.plan(from, to);` (2). Guard against null injection if required (1).",
      "snippet": "interface RouteStrategy { String plan(String from, String to); }\nclass RoutePlanner {\n    private final RouteStrategy strategy;\n    RoutePlanner(RouteStrategy strategy) { this.strategy = strategy; }\n    String plan(String from, String to) {\n        return plan(from, to); // bug\n    }\n}"
    },
    {
      "id": 12,
      "kind": "Diagram reasoning",
      "prompt": "**Scenario:** A photo-editing application supports different resizing algorithms. The same `ImageEditor` object must switch between nearest-neighbor, bilinear and bicubic interpolation based on a user setting.\n\n**Task:** Read the UML. Identify the context, strategy contract and concrete strategies. Explain the association and how a caller can swap algorithms without subclassing ImageEditor.",
      "marks": 7,
      "memo": "ImageEditor is context (1), ResizeStrategy is interface (1), Nearest/Bilinear/Bicubic are concrete strategies (2), editor holds ResizeStrategy (HAS-A) (1), setStrategy replaces referenced algorithm and resize() delegates (2).",
      "diagram": "classDiagram\nclass ImageEditor {\n  -ResizeStrategy strategy\n  +setStrategy(ResizeStrategy)\n  +resize(Image) Image\n}\nclass ResizeStrategy {\n  <<interface>>\n  +resize(Image) Image\n}\nclass Nearest\nclass Bilinear\nclass Bicubic\nImageEditor o-- ResizeStrategy : HAS-A\nResizeStrategy <|.. Nearest\nResizeStrategy <|.. Bilinear\nResizeStrategy <|.. Bicubic"
    },
    {
      "id": 13,
      "kind": "Scenario application",
      "prompt": "**Scenario:** A search results page can sort hotel offers by nightly price, guest rating, or distance. The page loads and filters offers the same way for all three sorting options. A dropdown can change the selected sort without reconstructing the page.\n\n**Task:** Design the Strategy roles, propose the `sort(List<Hotel>)` contract, and show where the user choice is translated into a concrete strategy.",
      "marks": 7,
      "memo": "SearchResultsPage or SortingService is context (2), SortStrategy.sort(List<Hotel>) contract and three implementations (3), dropdown/controller selects and injects/sets strategy at boundary; core page delegates without branching (2)."
    },
    {
      "id": 14,
      "kind": "Scenario analysis",
      "prompt": "**Scenario:** A network client uses a `RetryStrategy` that determines the wait and retry count for failed HTTP requests. An operator updates the retry policy while multiple requests are running concurrently.\n\n**Task:** Describe one race or consistency problem. Propose a design that makes policy selection predictable for each request.",
      "marks": 6,
      "memo": "Requests might mix old/new policy between attempts or mutable state might race (3); snapshot immutable retry strategy at request start, use atomic/volatile reference to swap for future requests, and document policy boundaries (3)."
    },
    {
      "id": 15,
      "kind": "Java implementation",
      "prompt": "**Scenario:** A parcel service lets users choose `Economy` or `Express` shipping. Economy charges R40 and Express charges R90. The same Checkout object should support switching algorithms for future quotes.\n\n**Task:** Write the Java `ShippingStrategy` interface, both concrete strategies, and a `Checkout` context with constructor injection, `setStrategy`, and `quote()`. Reject null strategies.",
      "marks": 10,
      "memo": "Interface with price/quote method (2); Economy and Express correct R40/R90 implementations (2); Checkout holds strategy field (2) and delegates quote (2); constructor/setter validate non-null (2)."
    },
    {
      "id": 16,
      "kind": "Java implementation",
      "prompt": "**Scenario:** A backup utility supports LZ4 compression for speed and GZIP compression for smaller backups. File discovery, permissions and remote upload remain identical regardless of algorithm.\n\n**Task:** Sketch Java `CompressionStrategy.compress(byte[])`, two implementations (SDK calls may be pseudocode) and a `BackupService` which receives a strategy at construction and delegates only the compression stage.",
      "marks": 9,
      "memo": "Common CompressionStrategy interface (2); LZ4 and Gzip concrete algorithms (3); BackupService holds interface and delegates compression only (2); shared pipeline preserved (2)."
    },
    {
      "id": 17,
      "kind": "Testing",
      "prompt": "**Scenario:** A receipt generator accepts a `FormattingStrategy`, allowing plain-text or HTML receipts. The team wants proof that the generator does not duplicate or silently ignore the injected strategy.\n\n**Task:** Design three JUnit 5 tests using fakes or mocks: delegation, runtime swap, and exception propagation. State the key assertion for each.",
      "marks": 8,
      "memo": "Mock/fake verifies exactly one call with expected data (3); swapping strategy changes output and second strategy invoked (3); exceptions from strategy propagate or documented error handling is verified (2)."
    },
    {
      "id": 18,
      "kind": "Comparison",
      "prompt": "**Scenario:** An HTTP client supports two independent requirements: choosing a retry algorithm (none, fixed or exponential), and optionally adding logging around all calls.\n\n**Task:** Which requirement naturally fits Strategy and which fits Decorator? Explain their structure and primary intent.",
      "marks": 7,
      "memo": "Retry uses Strategy: context selects one interchangeable algorithm (3). Logging uses Decorator: wrapper implements same HTTP client interface, holds another client and adds before/after behavior (3). Both involve composition but different goals (1)."
    },
    {
      "id": 19,
      "kind": "Architecture trade-off",
      "prompt": "**Scenario:** An internal report page has exactly two trivial, fixed output formats. They are never reused or changed at runtime. A developer proposes ten additional interfaces and classes solely to eliminate one short conditional.\n\n**Task:** Assess whether Strategy is justified. Give two conditions that would make the abstraction worthwhile later.",
      "marks": 6,
      "memo": "A small stable conditional may be clearer than a complex strategy hierarchy (2); independent algorithms changing often, runtime selection, test isolation or reuse across contexts makes strategy useful (3); avoid abstraction with no meaningful variation (1)."
    },
    {
      "id": 20,
      "kind": "Integrated reasoning",
      "prompt": "**Scenario:** A multi-cloud application deploys infrastructure to AWS or Azure, then chooses one of three independently selectable rollout policies: rolling, blue-green or canary. Provider choice determines which VM and storage resources exist. Rollout choice determines **how** new application versions are released.\n\n**Task:** Design the collaboration between **Abstract Factory** and **Strategy**. Identify their interfaces, the composition root, and how you avoid mixing provider-specific construction with rollout algorithms.",
      "marks": 10,
      "memo": "CloudFactory has createVM/createStorage with AWSFactory/AzureFactory implementations (3); RolloutStrategy.deploy(Deployment) with Rolling/BlueGreen/Canary implementations (3); deployment coordinator receives both independent interfaces and delegates (2); app startup/selection layer chooses implementations; no provider branching in rollout algorithm where avoidable (2)."
    }
  ],
  "totalMarks": 114
};

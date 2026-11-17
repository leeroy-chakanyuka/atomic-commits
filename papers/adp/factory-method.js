window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-5-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 5,
  "title": "Factory Method",
  "session": 1,
  "limitSeconds": 4500,
  "version": 1,
  "group": "design-patterns",
  "intro": "20 standalone Factory Method questions including classic Creator/ConcreteCreator, polymorphic provider factories, documents, payment workflows, code errors, UML and JUnit tests.",
  "source": "Original Java design-pattern practice; payment examples simulate provider behavior, with no live financial transactions.",
  "questions": [
    {
      "id": 1,
      "kind": "Definitions",
      "prompt": "**Scenario:** A document-export framework supports HTML and PDF. Its abstract `ReportCreator` defines an `exportReport()` workflow but lets subclasses decide whether to create an `HtmlDocument` or `PdfDocument` through `createDocument()`.\n\n**Task:** State the Factory Method pattern's intent. Identify the creator, product, concrete creators, and the creation decision left to subclasses.",
      "marks": 4,
      "memo": "Creator defines a common creation method (2); concrete creator/subclass chooses which concrete Product instance to return (2)."
    },
    {
      "id": 2,
      "kind": "Short answer",
      "prompt": "**Scenario:** A checkout API accepts an interface `PaymentFactory` with the method `Payment createPayment()`. `EFTFactory` implements it. A developer writes:\n```java\nPaymentFactory factory = new EFTFactory();\nPayment payment = factory.createPayment();\n```\n**Task:** Explain polymorphic assignment (upcasting). Distinguish the method existence checked at compile time from the concrete `createPayment()` implementation selected at runtime.",
      "marks": 6,
      "memo": "EFTFactory implements PaymentFactory so upcasting is valid (2); compiler checks createPayment() on interface (2); overridden implementation selected by runtime object type via dynamic binding (2)."
    },
    {
      "id": 3,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An invoice exporter has two concrete creator classes, `PdfCreator` and `CsvCreator`, implementing one `ExporterFactory` interface. The application holds `ExporterFactory factory = new CsvCreator();` and calls `factory.create()`.\n\n**Task:** Which Java mechanism chooses the correct **overridden instance method** implementation when this call runs?",
      "marks": 1,
      "memo": "B. Dynamic dispatch selects the concrete class implementation.",
      "options": [
        "The number of method parameters only",
        "The concrete object's runtime type",
        "The declared variable name",
        "The filename"
      ],
      "correct": "B"
    },
    {
      "id": 4,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A Java developer is comparing two notions of 'same method name': different argument lists on one class, and the same interface method implemented in two subclasses.\n\n**Task:** Choose the pair that demonstrates **overloading** rather than overriding. Explain its compile-time resolution.",
      "marks": 1,
      "memo": "A. Overloading has different parameter lists and is resolved by compile-time overload resolution.",
      "options": [
        "`create(int)` and `create(String)` on one class",
        "`EFTFactory.create()` implementing an interface method",
        "`CardFactory.create()` implementing an interface method",
        "A subclass replacing `create()` with same signature"
      ],
      "correct": "A"
    },
    {
      "id": 5,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A retail checkout can use a `CardFactory`, `EFTFactory` or `PayPalFactory`. All implement `PaymentFactory.createPayment()`, returning a `Payment` with `pay()`. The checkout function receives only `PaymentFactory` as a parameter.\n\n**Task:** Identify the minimum contracts checkout needs to know to work with all three providers.",
      "marks": 1,
      "memo": "B. Client operates through factory and product abstractions.",
      "options": [
        "Concrete provider class names",
        "The common factory and product contracts",
        "Every factory's constructor internals",
        "The selected factory's private methods"
      ],
      "correct": "B"
    },
    {
      "id": 6,
      "kind": "True or false",
      "prompt": "**Scenario:** A teammate knows a parent-typed reference can point to a child object. They try the opposite by instantiating the `PaymentFactory` interface itself and assigning it to an `EFTFactory` variable:\n```java\nEFTFactory e = new PaymentFactory();\n```\n**Task:** Decide if this compiles. Correct both the interface-instantiation and type-assignment misconceptions.",
      "marks": 2,
      "memo": "False. Interfaces cannot be instantiated, and a general parent reference cannot automatically become a specific child.",
      "correct": "false"
    },
    {
      "id": 7,
      "kind": "True or false",
      "prompt": "**Scenario:** The checkout method already depends only on `PaymentFactory`. The user-facing dropdown still needs to decide whether the selected provider is a card, EFT, or PayPal factory before invoking checkout.\n\n**Task:** Evaluate the statement that **somewhere** in the application concrete factory selection is still necessary.",
      "marks": 2,
      "memo": "True. Factory Method relocates creation responsibility; it does not remove provider selection everywhere.",
      "correct": "true"
    },
    {
      "id": 8,
      "kind": "Code tracing",
      "prompt": "**Scenario:** The following small Java-style example defines an EFT and Card payment product, and concrete creators implementing the same `PaymentFactory`. The method `pay()` returns a provider name; no real money is charged.\n\n**Task:** Predict the two output lines. Identify both levels of runtime dispatch: factory creation and product behavior.",
      "marks": 6,
      "memo": "Prints `EFT` then `CARD` (2); interface-typed factory changes runtime target (2); product interface uses pay() implementation (2).",
      "snippet": "interface Payment { String pay(); }\ninterface PaymentFactory { Payment create(); }\nclass EFT implements Payment { public String pay(){return \"EFT\";} }\nclass Card implements Payment { public String pay(){return \"CARD\";} }\nclass EFTFactory implements PaymentFactory { public Payment create(){return new EFT();} }\nclass CardFactory implements PaymentFactory { public Payment create(){return new Card();} }\nPaymentFactory x = new EFTFactory();\nSystem.out.println(x.create().pay());\nx = new CardFactory();\nSystem.out.println(x.create().pay());"
    },
    {
      "id": 9,
      "kind": "Code tracing",
      "prompt": "**Scenario:** The code defines `CardFactory.cardOnly()` in addition to the interface method `create()`. A variable is **declared as `PaymentFactory`**, even though its actual object is a `CardFactory`.\n\n**Task:** Does the call to `x.cardOnly()` compile? Explain reference type versus runtime object type, and state a safe design alternative.",
      "marks": 5,
      "memo": "No: the PaymentFactory reference exposes only declared interface methods (2); cardOnly() is unavailable without a safe cast (1); prefer moving required behavior to a suitable contract rather than relying on casts (2).",
      "snippet": "interface Payment {}\nclass Card implements Payment {}\ninterface PaymentFactory { Payment create(); }\nclass CardFactory implements PaymentFactory {\n    public Payment create() { return new Card(); }\n    void cardOnly() { System.out.println(\"CARD\"); }\n}\nPaymentFactory x = new CardFactory();\nx.cardOnly(); // Does this compile?"
    },
    {
      "id": 10,
      "kind": "Java debugging",
      "prompt": "**Scenario:** The `PaymentFactory` interface declares `Payment create()`. A team member attempts to implement it with the same method name and parameters but a String return type.\n\n**Task:** Analyze the Java compile error. Explain return-type compatibility and show a legal method signature.",
      "marks": 6,
      "memo": "Java requires a compatible return type for the overridden implementation (2); String is not covariant to Payment (2); return a Payment implementation with matching method signature (2).",
      "snippet": "interface Payment {}\ninterface PaymentFactory { Payment create(); }\nclass EFTFactory implements PaymentFactory {\n    public String create() { return \"EFT\"; } // incompatible return\n}"
    },
    {
      "id": 11,
      "kind": "Error identification",
      "prompt": "**Scenario:** Checkout is supposed to accept any `PaymentFactory`, but a developer hard-codes `new CardFactory()` *inside* the checkout function, so all users get card processing even after choosing EFT.\n\n**Task:** Identify the coupling mistake and rewrite the method conceptually to accept a factory from the caller.",
      "marks": 6,
      "memo": "Checkout uses CardFactory directly, violating interchangeability (2); inject PaymentFactory as parameter/constructor (2); use factory.create() and Payment.pay() rather than creating CardFactory internally (2).",
      "snippet": "void checkout() {\n  CardFactory factory = new CardFactory();\n  Payment p = factory.create();\n  p.pay();\n}"
    },
    {
      "id": 12,
      "kind": "Diagram reasoning",
      "prompt": "**Scenario:** A library framework uses the **classic GoF Creator hierarchy**. An abstract `Creator` defines the operation that uses a Payment and delegates its construction to `createPayment()`. `StripeCreator` overrides that creation hook.\n\n**Task:** Interpret the diagram: identify the inheritance arrow, product interface implementation, creation dependency, and the extension point for another provider.",
      "marks": 7,
      "memo": "Creator→ConcreteCreator inheritance is overriding extension point (2); Product and ConcreteProduct connect via implements (2); ConcreteCreator constructs concrete product (1); new creator/product pair can be added using existing contracts (2).",
      "diagram": "classDiagram\nclass Creator {\n <<abstract>>\n +createPayment() Payment\n +checkout()\n}\nclass StripeCreator {\n +createPayment() Payment\n}\nclass Payment {\n <<interface>>\n +pay()\n}\nclass StripePayment {\n +pay()\n}\nCreator <|-- StripeCreator\nPayment <|.. StripePayment\nCreator ..> Payment : uses\nStripeCreator ..> StripePayment : creates"
    },
    {
      "id": 13,
      "kind": "Scenario application",
      "prompt": "**Scenario:** A payment platform must integrate with Stripe, Yoco, and PayPal. Each integration has unique SDK configuration and return types but all supply a common `Payment.pay()` behavior. The checkout workflow performs common validation and receipt creation.\n\n**Task:** Assign responsibilities between provider-specific concrete factories/products and shared checkout workflow. Show why checkout should depend on abstractions.",
      "marks": 7,
      "memo": "Provider-specific SDK/configuration lives in concrete creators/products (3); common checkout accepts PaymentFactory/Creator and calls create then pay (3); selection/composition root chooses factory (1)."
    },
    {
      "id": 14,
      "kind": "Scenario analysis",
      "prompt": "**Scenario:** A marketplace plans to add a fourth provider using `CryptoPayment` and `CryptoFactory`. Existing `checkout(PaymentFactory)` is already deployed and covered by tests. A settings page chooses the provider by name.\n\n**Task:** Identify which types and selection code must change and which existing checkout logic should not need modification.",
      "marks": 6,
      "memo": "Add new product+concrete factory and selection/configuration registration (3); unchanged checkout client using PaymentFactory (2); integration tests for new provider (1)."
    },
    {
      "id": 15,
      "kind": "Java implementation",
      "prompt": "**Scenario:** You are implementing a **simulated** multi-provider checkout, not calling live SDKs. A `Payment` interface exposes `pay()`, and users may choose Card, EFT or PayPal.\n\n**Task:** Write complete Java `PaymentFactory` and `Payment` contracts and three concrete creator/product pairs. Show a checkout call through the factory interface.",
      "marks": 9,
      "memo": "Give Payment with pay() and PaymentFactory with createPayment() (2); three classes implementing Payment (3); three concrete factories that each return the matching product (3); checkout accepts PaymentFactory and invokes common methods (1)."
    },
    {
      "id": 16,
      "kind": "Java implementation",
      "prompt": "**Scenario:** A payment framework uses an abstract creator class because the **creator owns the entire checkout workflow**: verify input, create the payment, invoke `pay()`, then report the result. EFT should differ only in which Payment is instantiated.\n\n**Task:** Write Java classes using classic Factory Method: abstract `PaymentCheckout` defines protected `createPayment()` and reusable `checkout()`; `EFTCheckout` overrides the creation hook.",
      "marks": 10,
      "memo": "Abstract creator declares protected abstract Payment createPayment() (2); inherited checkout() calls the hook and payment.pay() (3); EFTCheckout overrides factory method, returning EFTPayment (3); client can use parent Checkout type without checking provider types (2)."
    },
    {
      "id": 17,
      "kind": "Testing",
      "prompt": "**Scenario:** A retail application has an existing `checkout(PaymentFactory factory)` function. The same function must succeed with Card, EFT and PayPal factories, without branch logic or type casts.\n\n**Task:** Specify three JUnit 5 tests that prove each factory is accepted and the intended payment behavior runs. Include at least one interaction/verification assertion.",
      "marks": 8,
      "memo": "Use common checkout with three factories (3), assert each concrete behavior/output (3), verify factory called once and only appropriate product used (2)."
    },
    {
      "id": 18,
      "kind": "Comparison",
      "prompt": "**Scenario:** A factory for report exporters currently uses `switch(format)` to return CSV or PDF products. The company expects third parties to supply new exporters without modifying the central switch.\n\n**Task:** Contrast Simple Factory and polymorphic Factory Method in structure, extensibility, and where concrete creator selection still happens.",
      "marks": 7,
      "memo": "Simple Factory centralizes switch and is edited for new choices (3); Factory Method defines overridable creation contract and adds creators (3); both have selection somewhere (1)."
    },
    {
      "id": 19,
      "kind": "Architecture trade-off",
      "prompt": "**Scenario:** A command-line application creates one immutable `TextReport` and will never support alternative reports or special setup. A developer proposes a full Creator/ConcreteCreator hierarchy for this single class.\n\n**Task:** Assess whether Factory Method improves the design now, and state two situations where it might later become worthwhile.",
      "marks": 6,
      "memo": "Likely unnecessary abstraction/extra classes for no variation (3); direct new or simple factory may suffice (2); apply pattern when creation varies/extension is valuable (1)."
    },
    {
      "id": 20,
      "kind": "Integrated reasoning",
      "prompt": "**Scenario:** A checkout flow first selects one of three concrete factories based on user preference, then calls `createPayment()` and `pay()` through interfaces. Some providers can reject a charge or time out. Both factory and payment are polymorphic.\n\n**Task:** Show the object/interaction flow, distinguish **factory-level** and **product-level** dynamic binding, and explain how errors should be propagated instead of being swallowed.",
      "marks": 10,
      "memo": "Selection creates/configures concrete creator (2); factory interface dynamic dispatch create (2); Payment interface dynamic dispatch pay (2); preserve exceptions/failure results, avoid silent null (2); test provider-specific failure paths (2)."
    }
  ],
  "totalMarks": 110
};

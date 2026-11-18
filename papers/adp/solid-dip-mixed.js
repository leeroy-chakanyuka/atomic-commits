window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-18-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 18,
  "title": "SOLID · Paper 3: DIP and Mixed",
  "session": 1,
  "limitSeconds": 1800,
  "version": 3,
  "group": "solid",
  "intro": "20 Java questions on Dependency Inversion, injection, contracts, and diagnosing multiple SOLID principles together. Fully auto-marked.",
  "source": "Original exam-style Java revision questions on application layers, testing, abstraction boundaries and mixed SOLID trade-offs.",
  "questions": [
    {
      "id": 1,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** `OrderService` creates `new MySqlOrderRepository()` internally. Tests need an in-memory repository, and the business service should not change when persistence changes. Which refactor best follows Dependency Inversion (DIP)?",
      "options": [
        "Inject an `OrderRepository` abstraction into OrderService, with MySqlOrderRepository implementing it",
        "Move all order business rules into MySqlOrderRepository",
        "Keep new MySqlOrderRepository() but rename it Interface",
        "Make OrderService extend MySqlOrderRepository"
      ],
      "correct": "A",
      "memo": "High-level order rules and low-level persistence should both depend on an appropriate repository abstraction. Constructor injection is one way to provide implementations.",
      "marks": 1
    },
    {
      "id": 2,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An application defines `PaymentGateway` as an interface in its business/application layer. `StripeGateway` implements it in infrastructure. `CheckoutService` uses PaymentGateway. Which dependency direction is desirable?",
      "options": [
        "PaymentGateway needs to construct CheckoutService internally",
        "CheckoutService imports StripeGateway directly",
        "StripeGateway depends on the PaymentGateway contract, and CheckoutService also depends on that contract",
        "The interface must extend StripeGateway"
      ],
      "correct": "C",
      "memo": "DIP puts the abstraction at a stable boundary relevant to the high-level policy. Both high-level and low-level modules depend on the contract.",
      "marks": 1
    },
    {
      "id": 3,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** What's the DIP concern with the following service despite its public constructor?",
      "options": [
        "Constructors must be private",
        "The high-level service directly constructs a concrete low-level EmailSender, preventing easy substitution",
        "String arguments aren't permitted",
        "A field can't be final"
      ],
      "correct": "B",
      "memo": "The dependency is hard-wired inside the high-level service; inject a Sender interface instead.",
      "snippet": "class WelcomeService {\n  private final EmailSender sender;\n  WelcomeService() { sender = new EmailSender(); }\n  void welcome(User user) { sender.send(user); }\n}",
      "marks": 1
    },
    {
      "id": 4,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** `ReportService` receives a `PdfWriter` interface, but the only implementation is `PdfWriterImpl`, and the interface duplicates every method of that implementation without an identified need for variability. Which conclusion is most sensible?",
      "options": [
        "The implementation should import ReportService",
        "The class must be a Singleton",
        "DIP demands an interface for every class regardless of design",
        "An interface alone doesn't guarantee meaningful DIP; design the abstraction around the consumer's actual needs"
      ],
      "correct": "D",
      "memo": "Dependency inversion is about dependency direction and stable abstractions, not mechanically creating one interface per class.",
      "marks": 1
    },
    {
      "id": 5,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** Two implementations of a `Sender` interface are supplied to the same service. What prints?",
      "options": [
        "SMS twice",
        "Compilation fails because Sender is an interface",
        "EMAIL then SMS",
        "EMAIL twice"
      ],
      "correct": "C",
      "memo": "MessageService delegates to its injected Sender. Instantiating it with EmailSender then SmsSender changes behavior without changing MessageService.",
      "snippet": "interface Sender { String send(); }\nclass EmailSender implements Sender { public String send(){return \"EMAIL\";} }\nclass SmsSender implements Sender { public String send(){return \"SMS\";} }\nclass MessageService {\n private final Sender sender;\n MessageService(Sender sender){this.sender=sender;}\n String notifyUser(){return sender.send();}\n}\nSystem.out.println(new MessageService(new EmailSender()).notifyUser());\nSystem.out.println(new MessageService(new SmsSender()).notifyUser());",
      "marks": 1
    },
    {
      "id": 6,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A test replaces `OrderRepository` with an in-memory fake that records saved orders. Why is this easier when `OrderService` depends on the repository abstraction?",
      "options": [
        "The high-level service can be tested without constructing a database-backed repository",
        "It forces every fake to perform real SQL",
        "It removes the need for business assertions",
        "It makes the Java compiler skip all tests"
      ],
      "correct": "A",
      "memo": "Tests can inject a fake implementing the consumer's contract and verify business behavior without a real persistence dependency.",
      "marks": 1
    },
    {
      "id": 7,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A team uses Spring constructor injection but the controller parameter type is `MySqlRepositoryImpl` rather than a repository interface. Has dependency injection automatically achieved DIP?",
      "options": [
        "Yes, because constructors are always abstractions",
        "No, because Java forbids injection of concrete classes",
        "Yes, any `@Autowired` proves DIP",
        "No; injection is a mechanism, but the high-level class still depends on a concrete low-level implementation"
      ],
      "correct": "D",
      "memo": "Dependency injection can be used with concrete types, but DIP is about the abstraction and dependency direction.",
      "marks": 1
    },
    {
      "id": 8,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A low-level `EmailSender` library changes its SMTP configuration options. An application service only needs `send(message)`. Who should know the SMTP details?",
      "options": [
        "Every application-level service",
        "An EmailSender adapter/implementation of a stable Sender contract",
        "The User entity",
        "All test doubles"
      ],
      "correct": "B",
      "memo": "Infrastructure specifics stay behind a narrow abstraction. High-level code depends on what it needs, not details of the mail provider.",
      "marks": 1
    },
    {
      "id": 9,
      "kind": "Multiple choice",
      "prompt": "**Spot the bug:** The service accepts a `Storage` interface in its constructor but ignores it, creating a concrete storage object inside `save()`. What is the design problem?",
      "options": [
        "The constructor must call super()",
        "The `save` method can't take Strings",
        "The interface is too small",
        "The implementation bypasses the injected abstraction, reintroducing coupling and making tests unreliable"
      ],
      "correct": "D",
      "memo": "Accepting an interface does not help if code ignores it and constructs a concrete dependency during use.",
      "snippet": "class UploadService {\n private final Storage storage;\n UploadService(Storage storage){this.storage=storage;}\n void save(byte[] data){new CloudStorage().save(data);}\n}",
      "marks": 1
    },
    {
      "id": 10,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A service depends on a `Clock` abstraction rather than calling the system time directly. What is a practical benefit beyond changing clock implementations?",
      "options": [
        "It guarantees the service needs no other tests",
        "It can provide a deterministic fake clock in tests",
        "It automatically changes the operating system's clock",
        "It removes all time zones from Java"
      ],
      "correct": "B",
      "memo": "A clock interface makes time an injectable dependency. Test clocks can supply fixed instants for repeatable boundary tests.",
      "marks": 1
    },
    {
      "id": 11,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A `Book` class mixes persistence, formatting, tax calculations and notification delivery. A designer introduces one huge `BookOperations` interface with all those methods and injects it everywhere. Which evaluation is strongest?",
      "options": [
        "One interface is preferable to several focused contracts in every case",
        "DIP and ISP are guaranteed because an interface exists",
        "The interface may still violate ISP and preserve SRP problems; injection doesn't fix poor responsibility boundaries",
        "All responsibilities are automatically separated"
      ],
      "correct": "C",
      "memo": "Abstractions must be designed around cohesive client needs. A giant interface does not automatically fix SRP or ISP and may leak unrelated operations.",
      "marks": 1
    },
    {
      "id": 12,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A media library supports PDF, image and video items. Every new validation report currently requires editing all item classes. Item types rarely change. Which design pattern complements OCP for adding new operations?",
      "options": [
        "Visitor with a new visitor implementing visit methods for each item type",
        "Flyweight because it caches metadata",
        "Singleton because only one report may exist",
        "Iterator because it automatically implements validation"
      ],
      "correct": "A",
      "memo": "Visitor moves type-specific operations to new visitor classes; adding a new operation can avoid editing existing element classes, though new element types then affect visitors.",
      "marks": 1
    },
    {
      "id": 13,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A cloud uploader has optional logging around an `Uploader` interface; it also chooses a separate compression algorithm, and persistence is injected behind a Storage interface. Which mapping best matches each role?",
      "options": [
        "Decorator for logging; Strategy for compression; DIP for Storage abstraction",
        "Bridge for all three exclusively",
        "Visitor for logging; Flyweight for compression; Iterator for storage",
        "SRP only, because no other design idea can apply"
      ],
      "correct": "A",
      "memo": "Decorator wraps behavior, Strategy provides interchangeable algorithms, and DIP keeps high-level logic dependent on a storage abstraction.",
      "marks": 1
    },
    {
      "id": 14,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A `FileExporter` subtype throws for valid files even though its base contract promises successful export; a caller also hardcodes an `instanceof PdfExporter` special case. What two concerns are most clearly present?",
      "options": [
        "SRP only because two classes exist",
        "Flyweight only because files may be shared",
        "DIP is satisfied automatically by the cast",
        "LSP contract violation and weakened OCP/polymorphism through concrete checks"
      ],
      "correct": "D",
      "memo": "The subtype breaks a base guarantee (LSP); concrete type checks require changing stable caller code when types are added, weakening OCP.",
      "marks": 1
    },
    {
      "id": 15,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A university module uses a `Notifier` interface, but one `BulkNotifier` implementation also exposes an extra `sendThousands()` method. The caller casts to BulkNotifier to use it. Which redesign most directly improves the client contract?",
      "options": [
        "Convert all method calls to Strings",
        "Add a focused BulkSending capability interface if that operation is legitimately needed",
        "Delete the Notifier interface and cast everywhere",
        "Force all notifiers to support bulk delivery even when impossible"
      ],
      "correct": "B",
      "memo": "A separate capability contract can expose bulk sending to relevant clients without forcing unrelated Notifier implementations to support it (ISP) or relying on concrete casts.",
      "marks": 1
    },
    {
      "id": 16,
      "kind": "True or false",
      "prompt": "**True/False:** Dependency Inversion and dependency injection are synonyms; using constructor injection always proves DIP is satisfied.",
      "correct": "false",
      "memo": "False. DI supplies dependencies; DIP is the architectural principle that high-level and low-level modules depend on abstractions.",
      "marks": 1
    },
    {
      "id": 17,
      "kind": "True or false",
      "prompt": "**True/False:** An infrastructure implementation can depend on an interface defined near high-level application policy, rather than the application depending directly on the infrastructure class.",
      "correct": "true",
      "memo": "True. That is a common dependency-inversion structure, sometimes implemented with ports/adapters.",
      "marks": 1
    },
    {
      "id": 18,
      "kind": "True or false",
      "prompt": "**True/False:** A single Java class can follow several SOLID principles at the same time; SOLID principles are not mutually exclusive.",
      "correct": "true",
      "memo": "True. SRP, OCP, LSP, ISP and DIP address overlapping design concerns and can reinforce one another.",
      "marks": 1
    },
    {
      "id": 19,
      "kind": "True or false",
      "prompt": "**True/False:** Adding a new concrete implementation behind a suitable interface can improve OCP while also allowing DIP, provided the caller relies on the abstraction.",
      "correct": "true",
      "memo": "True. Abstraction-based extension and dependency direction complement each other.",
      "marks": 1
    },
    {
      "id": 20,
      "kind": "True or false",
      "prompt": "**True/False:** Every service should be split into exactly five classes, one per SOLID principle, for the design to be compliant.",
      "correct": "false",
      "memo": "False. SOLID is a set of design guidelines, not a fixed class-count or structural recipe.",
      "marks": 1
    }
  ],
  "totalMarks": 20
};

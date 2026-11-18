window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-19-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 19,
  "title": "SOLID · Mega Paper",
  "session": 1,
  "limitSeconds": 5400,
  "version": 3,
  "group": "solid",
  "intro": "One complete 60-question mixed SOLID exam. Questions from SRP, OCP, LSP, ISP and DIP are interleaved; no chapter-by-chapter grouping. 90 minutes, automatically marked.",
  "source": "Mixed revision compiled from the existing three SOLID paper banks, with re-ordered questions and answer choices.",
  "questions": [
    {
      "id": 1,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An `InvoiceService` calculates totals, formats a PDF, and emails the invoice. The accounts team changes tax rules while the design team changes PDF layout. Which refactor best follows the Single Responsibility Principle (SRP)?",
      "options": [
        "Keep calculation in an invoice policy/service and delegate rendering and delivery to dedicated collaborators",
        "Make every method static",
        "Create one superclass that handles all invoice-related actions",
        "Put each method in a separate subclass regardless of purpose"
      ],
      "correct": "A",
      "memo": "SRP means a module should have one reason to change, normally tied to one responsibility/actor. Calculating, rendering, and delivering invoices have different change pressures.",
      "marks": 1
    },
    {
      "id": 2,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A shipping calculator accepts a `Delivery` subtype and promises `cost()` returns a nonnegative amount. `OvernightDelivery` throws an exception for all parcels above 2 kg, although the base contract accepts parcels up to 20 kg. What principle is most clearly at risk?",
      "options": [
        "Interface Segregation",
        "Flyweight",
        "Single Responsibility",
        "Liskov Substitution"
      ],
      "correct": "D",
      "memo": "LSP requires subtypes to satisfy the parent's advertised contract. Rejecting inputs the parent promises to accept strengthens a precondition and breaks substitutability.",
      "marks": 1
    },
    {
      "id": 3,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** `OrderService` creates `new MySqlOrderRepository()` internally. Tests need an in-memory repository, and the business service should not change when persistence changes. Which refactor best follows Dependency Inversion (DIP)?",
      "options": [
        "Keep new MySqlOrderRepository() but rename it Interface",
        "Make OrderService extend MySqlOrderRepository",
        "Inject an `OrderRepository` abstraction into OrderService, with MySqlOrderRepository implementing it",
        "Move all order business rules into MySqlOrderRepository"
      ],
      "correct": "C",
      "memo": "High-level order rules and low-level persistence should both depend on an appropriate repository abstraction. Constructor injection is one way to provide implementations.",
      "marks": 1
    },
    {
      "id": 4,
      "kind": "True or false",
      "prompt": "**True/False:** SRP means a class should have exactly one public method.",
      "correct": "false",
      "memo": "False. SRP focuses on a cohesive reason to change; classes may have multiple methods to serve one responsibility.",
      "marks": 1
    },
    {
      "id": 5,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A base `Account.withdraw(amount)` contract permits withdrawals whenever sufficient available funds exist. A subclass also requires a supervisor's PIN for every withdrawal, unknown to the client. What is the LSP problem?",
      "options": [
        "Subclass methods cannot accept parameters",
        "The subclass imposes a stronger precondition than the base type promises",
        "It makes the method public",
        "Every account must use Singleton"
      ],
      "correct": "B",
      "memo": "An unadvertised extra PIN requirement makes valid base-class operations fail, violating clients' behavioral expectations.",
      "marks": 1
    },
    {
      "id": 6,
      "kind": "True or false",
      "prompt": "**True/False:** Dependency Inversion and dependency injection are synonyms; using constructor injection always proves DIP is satisfied.",
      "correct": "false",
      "memo": "False. DI supplies dependencies; DIP is the architectural principle that high-level and low-level modules depend on abstractions.",
      "marks": 1
    },
    {
      "id": 7,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A `Customer` object holds `name`, `email`, and a method `changeEmail()` that enforces the customer's domain rule. A colleague says SRP forbids more than one method per class. What's right?",
      "options": [
        "SRP requires exactly one method",
        "These cohesive state-changing methods can belong together; SRP concerns reasons for change, not method count",
        "Customer must implement an EmailSender interface",
        "All validation belongs inside a PDF renderer"
      ],
      "correct": "B",
      "memo": "A single cohesive responsibility may require multiple methods. SRP does not mean 'one method' or 'one field'.",
      "marks": 1
    },
    {
      "id": 8,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** The method below accepts `Bird`. What happens when called with a `Penguin` object?",
      "options": [
        "The `UnsupportedOperationException` is thrown",
        "The Bird object is automatically converted to Sparrow",
        "The compiler rejects all overrides",
        "It prints 'flying'"
      ],
      "correct": "A",
      "memo": "Penguin overrides fly() to throw; a client depending on Bird.fly() no longer works. The hierarchy's behavioral contract is invalid for non-flying birds.",
      "snippet": "class Bird { void fly() { System.out.println(\"flying\"); } }\nclass Penguin extends Bird {\n @Override void fly() { throw new UnsupportedOperationException(); }\n}\nstatic void launch(Bird b) { b.fly(); }\nlaunch(new Penguin());",
      "marks": 1
    },
    {
      "id": 9,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An application defines `PaymentGateway` as an interface in its business/application layer. `StripeGateway` implements it in infrastructure. `CheckoutService` uses PaymentGateway. Which dependency direction is desirable?",
      "options": [
        "The interface must extend StripeGateway",
        "PaymentGateway needs to construct CheckoutService internally",
        "CheckoutService imports StripeGateway directly",
        "StripeGateway depends on the PaymentGateway contract, and CheckoutService also depends on that contract"
      ],
      "correct": "D",
      "memo": "DIP puts the abstraction at a stable boundary relevant to the high-level policy. Both high-level and low-level modules depend on the contract.",
      "marks": 1
    },
    {
      "id": 10,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** A report's database-save method also chooses CSS colors and renders HTML. What is the clearest SRP risk?",
      "options": [
        "Java classes cannot hold strings",
        "Both operations are private",
        "Persistence schema and presentation design can change independently, forcing unrelated edits to one class",
        "The method returns String"
      ],
      "correct": "C",
      "memo": "Persistence and presentation are independently varying responsibilities; separating them reduces coupled changes.",
      "snippet": "class ReportService {\n  String saveAndRender(Report r) {\n    database.save(r);\n    return \"<div class='blue'>\" + r.title() + \"</div>\";\n  }\n}",
      "marks": 1
    },
    {
      "id": 11,
      "kind": "True or false",
      "prompt": "**True/False:** LSP is satisfied whenever a Java subclass compiles and overrides all required methods, even if it throws for valid inputs.",
      "correct": "false",
      "memo": "False. Behavioral guarantees matter beyond method signatures; rejecting valid base-class operations may violate LSP.",
      "marks": 1
    },
    {
      "id": 12,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** What's the DIP concern with the following service despite its public constructor?",
      "options": [
        "A field can't be final",
        "Constructors must be private",
        "The high-level service directly constructs a concrete low-level EmailSender, preventing easy substitution",
        "String arguments aren't permitted"
      ],
      "correct": "C",
      "memo": "The dependency is hard-wired inside the high-level service; inject a Sender interface instead.",
      "snippet": "class WelcomeService {\n  private final EmailSender sender;\n  WelcomeService() { sender = new EmailSender(); }\n  void welcome(User user) { sender.send(user); }\n}",
      "marks": 1
    },
    {
      "id": 13,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An audit team changes the legally required log format. A marketing team changes the user-facing welcome text. Both changes currently require edits to `RegistrationService`. Which principle is most directly being violated?",
      "options": [
        "Liskov Substitution Principle",
        "Single Responsibility Principle",
        "Interface Segregation Principle",
        "Flyweight"
      ],
      "correct": "B",
      "memo": "Different actors drive unrelated changes to one class. Logging format and welcome-message presentation should be separate responsibilities.",
      "marks": 1
    },
    {
      "id": 14,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A report exporter promises to return a non-null result. An `XmlExporter` subtype returns `null` when a file is empty, while all callers dereference the result. Which fix most directly supports LSP?",
      "options": [
        "Make the subtype honor the non-null contract, such as returning an empty valid report or documented failure",
        "Hide the subtype's implementation in a private class only",
        "Replace the entire program with a factory",
        "Accept the null and require special checks in every caller"
      ],
      "correct": "A",
      "memo": "A subtype should preserve guaranteed postconditions, including non-null results if promised by the base contract.",
      "marks": 1
    },
    {
      "id": 15,
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
      "id": 16,
      "kind": "True or false",
      "prompt": "**True/False:** A class can technically compile and work while still violating SRP because unrelated teams change different parts of it.",
      "correct": "true",
      "memo": "True. SRP is a design/cohesion principle rather than a Java compiler rule.",
      "marks": 1
    },
    {
      "id": 17,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A `PaymentProcessor.process()` contract says it either records a successful payment or throws PaymentException, leaving the transaction uncharged on failure. One subclass charges the card but returns 'failed' without recording the charge. What is the primary issue?",
      "options": [
        "The class has only one public method",
        "All failures must be ignored",
        "Interfaces prohibit card payments",
        "It violates the promised success/failure behavior and substitutability"
      ],
      "correct": "D",
      "memo": "LSP includes observable behavioral guarantees, side effects and failure semantics. A subtype cannot silently contradict a meaningful processor contract.",
      "marks": 1
    },
    {
      "id": 18,
      "kind": "True or false",
      "prompt": "**True/False:** An infrastructure implementation can depend on an interface defined near high-level application policy, rather than the application depending directly on the infrastructure class.",
      "correct": "true",
      "memo": "True. That is a common dependency-inversion structure, sometimes implemented with ports/adapters.",
      "marks": 1
    },
    {
      "id": 19,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A developer extracts each line of `OrderService.placeOrder()` into a different micro-class. The overall workflow still changes for one business reason. Is this necessarily better SRP?",
      "options": [
        "No, Java limits the number of files per package",
        "Yes, SRP mandates the greatest possible number of classes",
        "No; excessive fragmentation does not automatically improve cohesion or reduce reasons to change",
        "Yes, because class names become shorter"
      ],
      "correct": "C",
      "memo": "SRP is about cohesive responsibilities and change reasons, not maximum class count.",
      "marks": 1
    },
    {
      "id": 20,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A base `SortedQueue.next()` guarantees items come out in ascending priority. A new subclass returns items in insertion order without telling clients. Which principle fails?",
      "options": [
        "DIP",
        "LSP",
        "OCP cannot be related",
        "No principle, because the method name is still next"
      ],
      "correct": "B",
      "memo": "Subtypes must preserve the ordering semantics promised by their base contract, not merely implement the right method signatures.",
      "marks": 1
    },
    {
      "id": 21,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** Two implementations of a `Sender` interface are supplied to the same service. What prints?",
      "options": [
        "EMAIL then SMS",
        "EMAIL twice",
        "SMS twice",
        "Compilation fails because Sender is an interface"
      ],
      "correct": "A",
      "memo": "MessageService delegates to its injected Sender. Instantiating it with EmailSender then SmsSender changes behavior without changing MessageService.",
      "snippet": "interface Sender { String send(); }\nclass EmailSender implements Sender { public String send(){return \"EMAIL\";} }\nclass SmsSender implements Sender { public String send(){return \"SMS\";} }\nclass MessageService {\n private final Sender sender;\n MessageService(Sender sender){this.sender=sender;}\n String notifyUser(){return sender.send();}\n}\nSystem.out.println(new MessageService(new EmailSender()).notifyUser());\nSystem.out.println(new MessageService(new SmsSender()).notifyUser());",
      "marks": 1
    },
    {
      "id": 22,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An application should support new shipping methods without editing `Checkout.calculateShipping()` each time. Which design follows the Open/Closed Principle (OCP)?",
      "options": [
        "Define `ShippingRate` and inject a new implementation for each carrier",
        "Make `Checkout` final and hard-code all rates",
        "Store carrier names as Strings and switch in every controller",
        "Hardcode another `else if` for every carrier"
      ],
      "correct": "A",
      "memo": "An abstraction such as ShippingRate lets new behavior be added as a new implementation while stable checkout logic delegates to it.",
      "marks": 1
    },
    {
      "id": 23,
      "kind": "True or false",
      "prompt": "**True/False:** A subtype may strengthen the guaranteed output of a method without breaking the base contract, provided it still fulfills all base guarantees.",
      "correct": "true",
      "memo": "True. Stronger postconditions are generally compatible with the base contract; preconditions should not be strengthened.",
      "marks": 1
    },
    {
      "id": 24,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A test replaces `OrderRepository` with an in-memory fake that records saved orders. Why is this easier when `OrderService` depends on the repository abstraction?",
      "options": [
        "It forces every fake to perform real SQL",
        "It removes the need for business assertions",
        "It makes the Java compiler skip all tests",
        "The high-level service can be tested without constructing a database-backed repository"
      ],
      "correct": "D",
      "memo": "Tests can inject a fake implementing the consumer's contract and verify business behavior without a real persistence dependency.",
      "marks": 1
    },
    {
      "id": 25,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** The application supports CARD and EFT today. Why does the following checkout design resist OCP when a WALLET method is added?",
      "options": [
        "OCP requires all classes to be abstract",
        "Switch statements never compile in Java",
        "Checkout must be modified to add every new payment type",
        "The `pay()` method is void"
      ],
      "correct": "C",
      "memo": "Checkout contains provider-specific selection logic. New methods require modifying existing business code instead of extending a payment abstraction.",
      "snippet": "class Checkout {\n  void pay(String type) {\n    if (type.equals(\"CARD\")) chargeCard();\n    else if (type.equals(\"EFT\")) transferFunds();\n  }\n}",
      "marks": 1
    },
    {
      "id": 26,
      "kind": "Multiple choice",
      "prompt": "**Spot the error:** A Java class tries to override `save()` with *weaker access* than the public interface. What happens?",
      "options": [
        "The method is a valid private override",
        "The code fails to compile because an interface's public method cannot be implemented with weaker access",
        "Java silently changes private to public",
        "The method compiles but only violates LSP at runtime"
      ],
      "correct": "B",
      "memo": "Java enforces method visibility rules here at compile time. This is a static contract error, different from a behavioral LSP violation.",
      "snippet": "interface Store { void save(String value); }\nclass FileStore implements Store {\n  void save(String value) { /* write */ }\n}",
      "marks": 1
    },
    {
      "id": 27,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A team uses Spring constructor injection but the controller parameter type is `MySqlRepositoryImpl` rather than a repository interface. Has dependency injection automatically achieved DIP?",
      "options": [
        "Yes, any `@Autowired` proves DIP",
        "No; injection is a mechanism, but the high-level class still depends on a concrete low-level implementation",
        "Yes, because constructors are always abstractions",
        "No, because Java forbids injection of concrete classes"
      ],
      "correct": "B",
      "memo": "Dependency injection can be used with concrete types, but DIP is about the abstraction and dependency direction.",
      "marks": 1
    },
    {
      "id": 28,
      "kind": "True or false",
      "prompt": "**True/False:** OCP means existing code must never change, even to fix a bug or implement a new requirement outside its designed extension points.",
      "correct": "false",
      "memo": "False. OCP advocates stable extension boundaries, not a ban on editing code.",
      "marks": 1
    },
    {
      "id": 29,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A parent `Rectangle` offers independently writable width and height. A `Square` subclass forces both dimensions to remain equal. A client sets width 5 then height 7 and expects area 35. Why is the design risky?",
      "options": [
        "The subtype changes the effects of operations a Rectangle client is allowed to rely on",
        "Area calculations cannot use multiplication",
        "The parent must always be an interface",
        "Squares can never be represented in object-oriented code"
      ],
      "correct": "A",
      "memo": "This classic mutable Square/Rectangle example violates behavioral substitution if base clients rely on independent setters. Immutable shapes or different abstraction may help.",
      "marks": 1
    },
    {
      "id": 30,
      "kind": "True or false",
      "prompt": "**True/False:** A single Java class can follow several SOLID principles at the same time; SOLID principles are not mutually exclusive.",
      "correct": "true",
      "memo": "True. SRP, OCP, LSP, ISP and DIP address overlapping design concerns and can reinforce one another.",
      "marks": 1
    },
    {
      "id": 31,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A notification service receives a `Notifier` interface and calls `notifyUser()`. Adding `PushNotifier` requires no modification to the service. Which principle is principally illustrated?",
      "options": [
        "SRP automatically, and no other",
        "Flyweight",
        "Law of Demeter exclusively",
        "Open/Closed Principle"
      ],
      "correct": "D",
      "memo": "The service is closed to that form of modification but open to extension through new Notifier implementations.",
      "marks": 1
    },
    {
      "id": 32,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A machine-control interface declares `print()`, `scan()` and `fax()`. A cheap receipt printer cannot scan or fax and throws from both methods. Which SOLID principle most directly points to a better design?",
      "options": [
        "Single Responsibility automatically means one interface",
        "Interpreter Pattern",
        "Interface Segregation Principle",
        "Open/Closed Principle only"
      ],
      "correct": "C",
      "memo": "ISP says clients shouldn't depend on methods they don't use; separate printer, scanner and fax capabilities into focused interfaces.",
      "marks": 1
    },
    {
      "id": 33,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A low-level `EmailSender` library changes its SMTP configuration options. An application service only needs `send(message)`. Who should know the SMTP details?",
      "options": [
        "All test doubles",
        "Every application-level service",
        "An EmailSender adapter/implementation of a stable Sender contract",
        "The User entity"
      ],
      "correct": "C",
      "memo": "Infrastructure specifics stay behind a narrow abstraction. High-level code depends on what it needs, not details of the mail provider.",
      "marks": 1
    },
    {
      "id": 34,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An app adds a new `CsvExporter` implementing `Exporter`. The new type must still be registered with a factory or dependency-injection container. Has OCP necessarily failed?",
      "options": [
        "Yes, OCP bans changing any file anywhere",
        "No; application wiring/registration can change while stable export-processing code remains closed to provider-specific edits",
        "Yes, interfaces may have only one implementation",
        "No, because CSV isn't an output format"
      ],
      "correct": "B",
      "memo": "OCP is applied at chosen stable variation points. Composition or registry code may still need updating.",
      "marks": 1
    },
    {
      "id": 35,
      "kind": "True or false",
      "prompt": "**True/False:** ISP requires a Java class that implements Printer and Scanner to be split into two separate objects.",
      "correct": "false",
      "memo": "False. One class may implement multiple small interfaces; the point is that clients use only the roles they need.",
      "marks": 1
    },
    {
      "id": 36,
      "kind": "Multiple choice",
      "prompt": "**Spot the bug:** The service accepts a `Storage` interface in its constructor but ignores it, creating a concrete storage object inside `save()`. What is the design problem?",
      "options": [
        "The implementation bypasses the injected abstraction, reintroducing coupling and making tests unreliable",
        "The constructor must call super()",
        "The `save` method can't take Strings",
        "The interface is too small"
      ],
      "correct": "A",
      "memo": "Accepting an interface does not help if code ignores it and constructs a concrete dependency during use.",
      "snippet": "class UploadService {\n private final Storage storage;\n UploadService(Storage storage){this.storage=storage;}\n void save(byte[] data){new CloudStorage().save(data);}\n}",
      "marks": 1
    },
    {
      "id": 37,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** A `TotalCalculator` delegates to a `Discount` interface. What prints when `HalfPrice` is used?",
      "options": [
        "100",
        "0",
        "A compile error because an interface cannot be a field type",
        "50"
      ],
      "correct": "D",
      "memo": "HalfPrice.apply(100) returns 50 and TotalCalculator delegates through the Discount interface.",
      "snippet": "interface Discount { int apply(int price); }\nclass HalfPrice implements Discount {\n  public int apply(int price) { return price / 2; }\n}\nclass TotalCalculator {\n  private final Discount discount;\n  TotalCalculator(Discount discount) { this.discount = discount; }\n  int total(int price) { return discount.apply(price); }\n}\nSystem.out.println(new TotalCalculator(new HalfPrice()).total(100));",
      "marks": 1
    },
    {
      "id": 38,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A warehouse scanner only needs `scanBarcode()`, yet it depends on `OfficeMachine` with twelve methods for printing, faxing, and stapling. Which refactor best follows ISP?",
      "options": [
        "Make every method throw UnsupportedOperationException",
        "Replace every dependency with `Object`",
        "Add ten more optional methods to OfficeMachine",
        "Introduce a narrow BarcodeScanner interface and type the scanner client to it"
      ],
      "correct": "D",
      "memo": "A role-specific interface keeps the client coupled only to needed operations.",
      "marks": 1
    },
    {
      "id": 39,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A service depends on a `Clock` abstraction rather than calling the system time directly. What is a practical benefit beyond changing clock implementations?",
      "options": [
        "It removes all time zones from Java",
        "It guarantees the service needs no other tests",
        "It can provide a deterministic fake clock in tests",
        "It automatically changes the operating system's clock"
      ],
      "correct": "C",
      "memo": "A clock interface makes time an injectable dependency. Test clocks can supply fixed instants for repeatable boundary tests.",
      "marks": 1
    },
    {
      "id": 40,
      "kind": "True or false",
      "prompt": "**True/False:** A caller using an interface and accepting a new implementing class without being rewritten is one common way to achieve OCP.",
      "correct": "true",
      "memo": "True. Polymorphism can keep the caller stable while concrete behaviors are extended.",
      "marks": 1
    },
    {
      "id": 41,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** `AllInOnePrinter` really supports printing and scanning. The team splits one huge interface into `Printer` and `Scanner`. Can the same class implement both?",
      "options": [
        "No; Java forbids multiple interfaces",
        "Yes; ISP encourages small client-specific interfaces, and capable classes may implement several",
        "Only if the class is abstract",
        "No; each interface must have a unique object instance"
      ],
      "correct": "B",
      "memo": "A class may implement multiple cohesive role interfaces while clients depend only on capabilities they need.",
      "marks": 1
    },
    {
      "id": 42,
      "kind": "True or false",
      "prompt": "**True/False:** Adding a new concrete implementation behind a suitable interface can improve OCP while also allowing DIP, provided the caller relies on the abstraction.",
      "correct": "true",
      "memo": "True. Abstraction-based extension and dependency direction complement each other.",
      "marks": 1
    },
    {
      "id": 43,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A developer makes `DiscountPolicy` abstract and then creates ten subclasses that each duplicate the same database lookup code. Which statement is most accurate?",
      "options": [
        "The extension mechanism exists, but duplicated responsibilities still suggest a poor design",
        "OCP prohibits an abstract class",
        "The database automatically deduplicates Java methods",
        "Inheritance guarantees OCP and good design"
      ],
      "correct": "A",
      "memo": "An abstract extension point alone does not ensure maintainability; duplicated common behavior should be composed or factored appropriately.",
      "marks": 1
    },
    {
      "id": 44,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** `Printer` clients only need `print()`. What coupling problem remains in the example?",
      "options": [
        "The client still depends on a FatDevice interface and its unused fax() capability",
        "Calling print() is illegal",
        "Interfaces require every method to be static",
        "`Fax` is a Java keyword"
      ],
      "correct": "A",
      "memo": "The client should receive a narrow Printer interface. A fat interface forces client-level dependency on unrelated operations even when unused.",
      "snippet": "interface FatDevice { void print(); void fax(); }\nclass PrintClient {\n private final FatDevice device;\n PrintClient(FatDevice device) { this.device = device; }\n void run() { device.print(); }\n}",
      "marks": 1
    },
    {
      "id": 45,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A `Book` class mixes persistence, formatting, tax calculations and notification delivery. A designer introduces one huge `BookOperations` interface with all those methods and injects it everywhere. Which evaluation is strongest?",
      "options": [
        "All responsibilities are automatically separated",
        "One interface is preferable to several focused contracts in every case",
        "DIP and ISP are guaranteed because an interface exists",
        "The interface may still violate ISP and preserve SRP problems; injection doesn't fix poor responsibility boundaries"
      ],
      "correct": "D",
      "memo": "Abstractions must be designed around cohesive client needs. A giant interface does not automatically fix SRP or ISP and may leak unrelated operations.",
      "marks": 1
    },
    {
      "id": 46,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** Every `EmailFormatter` subclass must be edited when the app changes a required compliance footer, because the footer text is copied into each subclass. What's the best improvement?",
      "options": [
        "Add more `instanceof` tests in callers",
        "Let each implementation keep its own unrelated copy",
        "Centralize the shared compliance behavior while allowing format-specific logic to vary",
        "Remove every formatter interface"
      ],
      "correct": "C",
      "memo": "Keep truly common behavior in one place and extend only the intended variation. Both duplication and unnecessary modification across subclasses are warning signs.",
      "marks": 1
    },
    {
      "id": 47,
      "kind": "True or false",
      "prompt": "**True/False:** A broad interface can cause changes to unrelated methods to ripple into clients that never call them.",
      "correct": "true",
      "memo": "True. ISP reduces unnecessary compile-time and design dependencies between clients and unused functionality.",
      "marks": 1
    },
    {
      "id": 48,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A media library supports PDF, image and video items. Every new validation report currently requires editing all item classes. Item types rarely change. Which design pattern complements OCP for adding new operations?",
      "options": [
        "Iterator because it automatically implements validation",
        "Visitor with a new visitor implementing visit methods for each item type",
        "Flyweight because it caches metadata",
        "Singleton because only one report may exist"
      ],
      "correct": "B",
      "memo": "Visitor moves type-specific operations to new visitor classes; adding a new operation can avoid editing existing element classes, though new element types then affect visitors.",
      "marks": 1
    },
    {
      "id": 49,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A checkout uses an abstract `TaxCalculator`, but it repeatedly casts to `VATCalculator` to access VAT-only methods. Why is this a problem?",
      "options": [
        "Casts always cause compilation errors",
        "The client still depends on concrete types, undermining its extension boundary",
        "Abstract classes can't have methods",
        "Only Visitor can calculate taxes"
      ],
      "correct": "B",
      "memo": "Concrete-type checks and casts tie callers to implementations; design a suitable abstraction for behavior actually needed by checkout.",
      "marks": 1
    },
    {
      "id": 50,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An API contains one interface with `read()`, `write()`, `delete()` and `adminReset()`. A read-only dashboard uses only read() and must be recompiled when adminReset() changes. Which design change addresses this?",
      "options": [
        "Split a ReadOnlyStore interface from separate write/admin capabilities",
        "Force the dashboard to call adminReset() once",
        "Make the entire API protected",
        "Use a giant abstract class instead of an interface"
      ],
      "correct": "A",
      "memo": "ISP narrows client dependencies to the operations each client actually needs.",
      "marks": 1
    },
    {
      "id": 51,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A cloud uploader has optional logging around an `Uploader` interface; it also chooses a separate compression algorithm, and persistence is injected behind a Storage interface. Which mapping best matches each role?",
      "options": [
        "Bridge for all three exclusively",
        "Visitor for logging; Flyweight for compression; Iterator for storage",
        "SRP only, because no other design idea can apply",
        "Decorator for logging; Strategy for compression; DIP for Storage abstraction"
      ],
      "correct": "D",
      "memo": "Decorator wraps behavior, Strategy provides interchangeable algorithms, and DIP keeps high-level logic dependent on a storage abstraction.",
      "marks": 1
    },
    {
      "id": 52,
      "kind": "True or false",
      "prompt": "**True/False:** Splitting a large service into smaller classes automatically satisfies both SRP and OCP, regardless of the new classes' responsibilities and dependencies.",
      "correct": "false",
      "memo": "False. Cohesion, change reasons and meaningful extension points still matter; simply increasing the number of classes proves nothing.",
      "marks": 1
    },
    {
      "id": 53,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A team interprets ISP as 'every interface must contain exactly one method.' Which assessment is correct?",
      "options": [
        "ISP only applies to database repositories",
        "That's exactly ISP's formal requirement",
        "It's too literal: cohesive client-focused interfaces may legitimately have several related methods",
        "Interfaces cannot contain more than two methods in Java"
      ],
      "correct": "C",
      "memo": "ISP concerns unnecessary dependencies, not a rigid method count. A role interface can have several cohesive operations.",
      "marks": 1
    },
    {
      "id": 54,
      "kind": "True or false",
      "prompt": "**True/False:** Every service should be split into exactly five classes, one per SOLID principle, for the design to be compliant.",
      "correct": "false",
      "memo": "False. SOLID is a set of design guidelines, not a fixed class-count or structural recipe.",
      "marks": 1
    },
    {
      "id": 55,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A new shipping provider needs both cost calculation and an extra customs document. Existing `ShippingRate` exposes only `calculateCost()`. Which conclusion about OCP is sound?",
      "options": [
        "Every client should cast to the new provider",
        "OCP guarantees that no interface will ever change",
        "The original abstraction may be insufficient for a new requirement; extension needs an appropriate additional contract or changed boundary",
        "The new provider must fake a cost to encode a document"
      ],
      "correct": "C",
      "memo": "OCP does not eliminate change for unforeseen capabilities. A thoughtfully designed extension point or a separate optional capability may be needed.",
      "marks": 1
    },
    {
      "id": 56,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A payment provider interface includes `refund()` but a non-refundable gift-card provider throws `UnsupportedOperationException`. Which statement best describes the design issue?",
      "options": [
        "Any Java exception automatically breaks OCP only",
        "This can indicate both an ISP capability split and an LSP contract problem if refund is promised for all providers",
        "The exception proves SRP is satisfied",
        "The gift card must implement Observer"
      ],
      "correct": "B",
      "memo": "The provider is forced to implement an unsupported operation (ISP). If the common PaymentProvider contract promises refunds, substitutability also fails (LSP).",
      "marks": 1
    },
    {
      "id": 57,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A `FileExporter` subtype throws for valid files even though its base contract promises successful export; a caller also hardcodes an `instanceof PdfExporter` special case. What two concerns are most clearly present?",
      "options": [
        "LSP contract violation and weakened OCP/polymorphism through concrete checks",
        "SRP only because two classes exist",
        "Flyweight only because files may be shared",
        "DIP is satisfied automatically by the cast"
      ],
      "correct": "A",
      "memo": "The subtype breaks a base guarantee (LSP); concrete type checks require changing stable caller code when types are added, weakening OCP.",
      "marks": 1
    },
    {
      "id": 58,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A class both validates orders and generates printable invoices. A team extracts `InvoicePrinter`, then injects a new `Printer` implementation for HTML. Which principles are being improved?",
      "options": [
        "Neither because Java requires inheritance",
        "SRP only; extensibility cannot improve",
        "OCP only; responsibilities haven't changed",
        "SRP through separation and OCP through substitutable printer implementations"
      ],
      "correct": "D",
      "memo": "The extraction separates validation from printing (SRP); introducing a Printer abstraction allows new formats without changing the caller (OCP).",
      "marks": 1
    },
    {
      "id": 59,
      "kind": "True or false",
      "prompt": "**True/False:** A subtype that changes a promised error-handling behavior can violate LSP even if method names and return types remain identical.",
      "correct": "true",
      "memo": "True. LSP is about preserving the base contract's observable behavior, including meaningful error semantics.",
      "marks": 1
    },
    {
      "id": 60,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A university module uses a `Notifier` interface, but one `BulkNotifier` implementation also exposes an extra `sendThousands()` method. The caller casts to BulkNotifier to use it. Which redesign most directly improves the client contract?",
      "options": [
        "Delete the Notifier interface and cast everywhere",
        "Force all notifiers to support bulk delivery even when impossible",
        "Convert all method calls to Strings",
        "Add a focused BulkSending capability interface if that operation is legitimately needed"
      ],
      "correct": "D",
      "memo": "A separate capability contract can expose bulk sending to relevant clients without forcing unrelated Notifier implementations to support it (ISP) or relying on concrete casts.",
      "marks": 1
    }
  ],
  "totalMarks": 60
};

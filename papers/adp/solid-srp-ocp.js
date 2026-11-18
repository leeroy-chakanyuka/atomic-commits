window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-16-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 16,
  "title": "SOLID · Paper 1: SRP and OCP",
  "session": 1,
  "limitSeconds": 1800,
  "version": 3,
  "group": "solid",
  "intro": "20 self-contained Java questions on Single Responsibility and Open/Closed: change reasons, cohesion, extension points, code bugs and trade-offs.",
  "source": "Original exam-style Java revision questions; illustrative systems and dependencies.",
  "questions": [
    {
      "id": 1,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An `InvoiceService` calculates totals, formats a PDF, and emails the invoice. The accounts team changes tax rules while the design team changes PDF layout. Which refactor best follows the Single Responsibility Principle (SRP)?",
      "options": [
        "Put each method in a separate subclass regardless of purpose",
        "Keep calculation in an invoice policy/service and delegate rendering and delivery to dedicated collaborators",
        "Make every method static",
        "Create one superclass that handles all invoice-related actions"
      ],
      "correct": "B",
      "memo": "SRP means a module should have one reason to change, normally tied to one responsibility/actor. Calculating, rendering, and delivering invoices have different change pressures.",
      "marks": 1
    },
    {
      "id": 2,
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
      "id": 3,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** A report's database-save method also chooses CSS colors and renders HTML. What is the clearest SRP risk?",
      "options": [
        "Both operations are private",
        "Persistence schema and presentation design can change independently, forcing unrelated edits to one class",
        "The method returns String",
        "Java classes cannot hold strings"
      ],
      "correct": "B",
      "memo": "Persistence and presentation are independently varying responsibilities; separating them reduces coupled changes.",
      "snippet": "class ReportService {\n  String saveAndRender(Report r) {\n    database.save(r);\n    return \"<div class='blue'>\" + r.title() + \"</div>\";\n  }\n}",
      "marks": 1
    },
    {
      "id": 4,
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
      "id": 5,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A developer extracts each line of `OrderService.placeOrder()` into a different micro-class. The overall workflow still changes for one business reason. Is this necessarily better SRP?",
      "options": [
        "Yes, SRP mandates the greatest possible number of classes",
        "No; excessive fragmentation does not automatically improve cohesion or reduce reasons to change",
        "Yes, because class names become shorter",
        "No, Java limits the number of files per package"
      ],
      "correct": "B",
      "memo": "SRP is about cohesive responsibilities and change reasons, not maximum class count.",
      "marks": 1
    },
    {
      "id": 6,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An application should support new shipping methods without editing `Checkout.calculateShipping()` each time. Which design follows the Open/Closed Principle (OCP)?",
      "options": [
        "Hardcode another `else if` for every carrier",
        "Define `ShippingRate` and inject a new implementation for each carrier",
        "Make `Checkout` final and hard-code all rates",
        "Store carrier names as Strings and switch in every controller"
      ],
      "correct": "B",
      "memo": "An abstraction such as ShippingRate lets new behavior be added as a new implementation while stable checkout logic delegates to it.",
      "marks": 1
    },
    {
      "id": 7,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** The application supports CARD and EFT today. Why does the following checkout design resist OCP when a WALLET method is added?",
      "options": [
        "Switch statements never compile in Java",
        "Checkout must be modified to add every new payment type",
        "The `pay()` method is void",
        "OCP requires all classes to be abstract"
      ],
      "correct": "B",
      "memo": "Checkout contains provider-specific selection logic. New methods require modifying existing business code instead of extending a payment abstraction.",
      "snippet": "class Checkout {\n  void pay(String type) {\n    if (type.equals(\"CARD\")) chargeCard();\n    else if (type.equals(\"EFT\")) transferFunds();\n  }\n}",
      "marks": 1
    },
    {
      "id": 8,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A notification service receives a `Notifier` interface and calls `notifyUser()`. Adding `PushNotifier` requires no modification to the service. Which principle is principally illustrated?",
      "options": [
        "Open/Closed Principle",
        "SRP automatically, and no other",
        "Flyweight",
        "Law of Demeter exclusively"
      ],
      "correct": "A",
      "memo": "The service is closed to that form of modification but open to extension through new Notifier implementations.",
      "marks": 1
    },
    {
      "id": 9,
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
      "id": 10,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** A `TotalCalculator` delegates to a `Discount` interface. What prints when `HalfPrice` is used?",
      "options": [
        "50",
        "100",
        "0",
        "A compile error because an interface cannot be a field type"
      ],
      "correct": "A",
      "memo": "HalfPrice.apply(100) returns 50 and TotalCalculator delegates through the Discount interface.",
      "snippet": "interface Discount { int apply(int price); }\nclass HalfPrice implements Discount {\n  public int apply(int price) { return price / 2; }\n}\nclass TotalCalculator {\n  private final Discount discount;\n  TotalCalculator(Discount discount) { this.discount = discount; }\n  int total(int price) { return discount.apply(price); }\n}\nSystem.out.println(new TotalCalculator(new HalfPrice()).total(100));",
      "marks": 1
    },
    {
      "id": 11,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A developer makes `DiscountPolicy` abstract and then creates ten subclasses that each duplicate the same database lookup code. Which statement is most accurate?",
      "options": [
        "Inheritance guarantees OCP and good design",
        "The extension mechanism exists, but duplicated responsibilities still suggest a poor design",
        "OCP prohibits an abstract class",
        "The database automatically deduplicates Java methods"
      ],
      "correct": "B",
      "memo": "An abstract extension point alone does not ensure maintainability; duplicated common behavior should be composed or factored appropriately.",
      "marks": 1
    },
    {
      "id": 12,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** Every `EmailFormatter` subclass must be edited when the app changes a required compliance footer, because the footer text is copied into each subclass. What's the best improvement?",
      "options": [
        "Let each implementation keep its own unrelated copy",
        "Centralize the shared compliance behavior while allowing format-specific logic to vary",
        "Remove every formatter interface",
        "Add more `instanceof` tests in callers"
      ],
      "correct": "B",
      "memo": "Keep truly common behavior in one place and extend only the intended variation. Both duplication and unnecessary modification across subclasses are warning signs.",
      "marks": 1
    },
    {
      "id": 13,
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
      "id": 14,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A new shipping provider needs both cost calculation and an extra customs document. Existing `ShippingRate` exposes only `calculateCost()`. Which conclusion about OCP is sound?",
      "options": [
        "OCP guarantees that no interface will ever change",
        "The original abstraction may be insufficient for a new requirement; extension needs an appropriate additional contract or changed boundary",
        "The new provider must fake a cost to encode a document",
        "Every client should cast to the new provider"
      ],
      "correct": "B",
      "memo": "OCP does not eliminate change for unforeseen capabilities. A thoughtfully designed extension point or a separate optional capability may be needed.",
      "marks": 1
    },
    {
      "id": 15,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A class both validates orders and generates printable invoices. A team extracts `InvoicePrinter`, then injects a new `Printer` implementation for HTML. Which principles are being improved?",
      "options": [
        "SRP only; extensibility cannot improve",
        "OCP only; responsibilities haven't changed",
        "SRP through separation and OCP through substitutable printer implementations",
        "Neither because Java requires inheritance"
      ],
      "correct": "C",
      "memo": "The extraction separates validation from printing (SRP); introducing a Printer abstraction allows new formats without changing the caller (OCP).",
      "marks": 1
    },
    {
      "id": 16,
      "kind": "True or false",
      "prompt": "**True/False:** SRP means a class should have exactly one public method.",
      "correct": "false",
      "memo": "False. SRP focuses on a cohesive reason to change; classes may have multiple methods to serve one responsibility.",
      "marks": 1
    },
    {
      "id": 17,
      "kind": "True or false",
      "prompt": "**True/False:** A class can technically compile and work while still violating SRP because unrelated teams change different parts of it.",
      "correct": "true",
      "memo": "True. SRP is a design/cohesion principle rather than a Java compiler rule.",
      "marks": 1
    },
    {
      "id": 18,
      "kind": "True or false",
      "prompt": "**True/False:** OCP means existing code must never change, even to fix a bug or implement a new requirement outside its designed extension points.",
      "correct": "false",
      "memo": "False. OCP advocates stable extension boundaries, not a ban on editing code.",
      "marks": 1
    },
    {
      "id": 19,
      "kind": "True or false",
      "prompt": "**True/False:** A caller using an interface and accepting a new implementing class without being rewritten is one common way to achieve OCP.",
      "correct": "true",
      "memo": "True. Polymorphism can keep the caller stable while concrete behaviors are extended.",
      "marks": 1
    },
    {
      "id": 20,
      "kind": "True or false",
      "prompt": "**True/False:** Splitting a large service into smaller classes automatically satisfies both SRP and OCP, regardless of the new classes' responsibilities and dependencies.",
      "correct": "false",
      "memo": "False. Cohesion, change reasons and meaningful extension points still matter; simply increasing the number of classes proves nothing.",
      "marks": 1
    }
  ],
  "totalMarks": 20
};

window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-17-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 17,
  "title": "SOLID · Paper 2: LSP and ISP",
  "session": 1,
  "limitSeconds": 1800,
  "version": 3,
  "group": "solid",
  "intro": "20 self-contained Java questions on behavioral substitutability, contracts, narrow interfaces and realistic design mistakes.",
  "source": "Original exam-style Java revision questions; contracts and capabilities are defined within their scenarios.",
  "questions": [
    {
      "id": 1,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A shipping calculator accepts a `Delivery` subtype and promises `cost()` returns a nonnegative amount. `OvernightDelivery` throws an exception for all parcels above 2 kg, although the base contract accepts parcels up to 20 kg. What principle is most clearly at risk?",
      "options": [
        "Single Responsibility",
        "Liskov Substitution",
        "Interface Segregation",
        "Flyweight"
      ],
      "correct": "B",
      "memo": "LSP requires subtypes to satisfy the parent's advertised contract. Rejecting inputs the parent promises to accept strengthens a precondition and breaks substitutability.",
      "marks": 1
    },
    {
      "id": 2,
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
      "id": 3,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** The method below accepts `Bird`. What happens when called with a `Penguin` object?",
      "options": [
        "It prints 'flying'",
        "The `UnsupportedOperationException` is thrown",
        "The Bird object is automatically converted to Sparrow",
        "The compiler rejects all overrides"
      ],
      "correct": "B",
      "memo": "Penguin overrides fly() to throw; a client depending on Bird.fly() no longer works. The hierarchy's behavioral contract is invalid for non-flying birds.",
      "snippet": "class Bird { void fly() { System.out.println(\"flying\"); } }\nclass Penguin extends Bird {\n @Override void fly() { throw new UnsupportedOperationException(); }\n}\nstatic void launch(Bird b) { b.fly(); }\nlaunch(new Penguin());",
      "marks": 1
    },
    {
      "id": 4,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A report exporter promises to return a non-null result. An `XmlExporter` subtype returns `null` when a file is empty, while all callers dereference the result. Which fix most directly supports LSP?",
      "options": [
        "Accept the null and require special checks in every caller",
        "Make the subtype honor the non-null contract, such as returning an empty valid report or documented failure",
        "Hide the subtype's implementation in a private class only",
        "Replace the entire program with a factory"
      ],
      "correct": "B",
      "memo": "A subtype should preserve guaranteed postconditions, including non-null results if promised by the base contract.",
      "marks": 1
    },
    {
      "id": 5,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A `PaymentProcessor.process()` contract says it either records a successful payment or throws PaymentException, leaving the transaction uncharged on failure. One subclass charges the card but returns 'failed' without recording the charge. What is the primary issue?",
      "options": [
        "It violates the promised success/failure behavior and substitutability",
        "The class has only one public method",
        "All failures must be ignored",
        "Interfaces prohibit card payments"
      ],
      "correct": "A",
      "memo": "LSP includes observable behavioral guarantees, side effects and failure semantics. A subtype cannot silently contradict a meaningful processor contract.",
      "marks": 1
    },
    {
      "id": 6,
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
      "id": 7,
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
      "id": 8,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A parent `Rectangle` offers independently writable width and height. A `Square` subclass forces both dimensions to remain equal. A client sets width 5 then height 7 and expects area 35. Why is the design risky?",
      "options": [
        "Squares can never be represented in object-oriented code",
        "The subtype changes the effects of operations a Rectangle client is allowed to rely on",
        "Area calculations cannot use multiplication",
        "The parent must always be an interface"
      ],
      "correct": "B",
      "memo": "This classic mutable Square/Rectangle example violates behavioral substitution if base clients rely on independent setters. Immutable shapes or different abstraction may help.",
      "marks": 1
    },
    {
      "id": 9,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A machine-control interface declares `print()`, `scan()` and `fax()`. A cheap receipt printer cannot scan or fax and throws from both methods. Which SOLID principle most directly points to a better design?",
      "options": [
        "Interface Segregation Principle",
        "Open/Closed Principle only",
        "Single Responsibility automatically means one interface",
        "Interpreter Pattern"
      ],
      "correct": "A",
      "memo": "ISP says clients shouldn't depend on methods they don't use; separate printer, scanner and fax capabilities into focused interfaces.",
      "marks": 1
    },
    {
      "id": 10,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A warehouse scanner only needs `scanBarcode()`, yet it depends on `OfficeMachine` with twelve methods for printing, faxing, and stapling. Which refactor best follows ISP?",
      "options": [
        "Add ten more optional methods to OfficeMachine",
        "Introduce a narrow BarcodeScanner interface and type the scanner client to it",
        "Make every method throw UnsupportedOperationException",
        "Replace every dependency with `Object`"
      ],
      "correct": "B",
      "memo": "A role-specific interface keeps the client coupled only to needed operations.",
      "marks": 1
    },
    {
      "id": 11,
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
      "id": 12,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** `Printer` clients only need `print()`. What coupling problem remains in the example?",
      "options": [
        "`Fax` is a Java keyword",
        "The client still depends on a FatDevice interface and its unused fax() capability",
        "Calling print() is illegal",
        "Interfaces require every method to be static"
      ],
      "correct": "B",
      "memo": "The client should receive a narrow Printer interface. A fat interface forces client-level dependency on unrelated operations even when unused.",
      "snippet": "interface FatDevice { void print(); void fax(); }\nclass PrintClient {\n private final FatDevice device;\n PrintClient(FatDevice device) { this.device = device; }\n void run() { device.print(); }\n}",
      "marks": 1
    },
    {
      "id": 13,
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
      "id": 14,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A team interprets ISP as 'every interface must contain exactly one method.' Which assessment is correct?",
      "options": [
        "That's exactly ISP's formal requirement",
        "It's too literal: cohesive client-focused interfaces may legitimately have several related methods",
        "Interfaces cannot contain more than two methods in Java",
        "ISP only applies to database repositories"
      ],
      "correct": "B",
      "memo": "ISP concerns unnecessary dependencies, not a rigid method count. A role interface can have several cohesive operations.",
      "marks": 1
    },
    {
      "id": 15,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A payment provider interface includes `refund()` but a non-refundable gift-card provider throws `UnsupportedOperationException`. Which statement best describes the design issue?",
      "options": [
        "This can indicate both an ISP capability split and an LSP contract problem if refund is promised for all providers",
        "The exception proves SRP is satisfied",
        "The gift card must implement Observer",
        "Any Java exception automatically breaks OCP only"
      ],
      "correct": "A",
      "memo": "The provider is forced to implement an unsupported operation (ISP). If the common PaymentProvider contract promises refunds, substitutability also fails (LSP).",
      "marks": 1
    },
    {
      "id": 16,
      "kind": "True or false",
      "prompt": "**True/False:** LSP is satisfied whenever a Java subclass compiles and overrides all required methods, even if it throws for valid inputs.",
      "correct": "false",
      "memo": "False. Behavioral guarantees matter beyond method signatures; rejecting valid base-class operations may violate LSP.",
      "marks": 1
    },
    {
      "id": 17,
      "kind": "True or false",
      "prompt": "**True/False:** A subtype may strengthen the guaranteed output of a method without breaking the base contract, provided it still fulfills all base guarantees.",
      "correct": "true",
      "memo": "True. Stronger postconditions are generally compatible with the base contract; preconditions should not be strengthened.",
      "marks": 1
    },
    {
      "id": 18,
      "kind": "True or false",
      "prompt": "**True/False:** ISP requires a Java class that implements Printer and Scanner to be split into two separate objects.",
      "correct": "false",
      "memo": "False. One class may implement multiple small interfaces; the point is that clients use only the roles they need.",
      "marks": 1
    },
    {
      "id": 19,
      "kind": "True or false",
      "prompt": "**True/False:** A broad interface can cause changes to unrelated methods to ripple into clients that never call them.",
      "correct": "true",
      "memo": "True. ISP reduces unnecessary compile-time and design dependencies between clients and unused functionality.",
      "marks": 1
    },
    {
      "id": 20,
      "kind": "True or false",
      "prompt": "**True/False:** A subtype that changes a promised error-handling behavior can violate LSP even if method names and return types remain identical.",
      "correct": "true",
      "memo": "True. LSP is about preserving the base contract's observable behavior, including meaningful error semantics.",
      "marks": 1
    }
  ],
  "totalMarks": 20
};

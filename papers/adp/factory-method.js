window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-5-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 5,
  "title": "Factory Method",
  "session": 1,
  "limitSeconds": 1800,
  "version": 3,
  "group": "design-patterns",
  "intro": "20 concise Java MCQs and true/false on Factory Method, polymorphism, code mistakes and creator hierarchies. Automatically marked.",
  "source": "Original Java exam questions, with simulated payments and reports.",
  "questions": [
    {
      "id": 1,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A framework has an abstract `ReportCreator` with protected `createDocument()`, overridden by PdfCreator and HtmlCreator. Which description best matches Factory Method?",
      "options": [
        "The product class decides which creator will exist",
        "Every client must construct PdfDocument directly",
        "The factory method only calls static functions",
        "The creator decides product type through a polymorphic creation method"
      ],
      "correct": "D",
      "memo": "Concrete creators override the creation hook, and the common workflow can use the abstract Product contract.",
      "marks": 1
    },
    {
      "id": 2,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** `PaymentFactory factory = new EFTFactory();` is valid Java because EFTFactory implements PaymentFactory. What does the compiler use to decide whether `factory.create()` can be called?",
      "options": [
        "Runtime class name EFTFactory only",
        "The declared reference type PaymentFactory",
        "The user's chosen payment method",
        "The name of the source file"
      ],
      "correct": "B",
      "memo": "The compiler checks the declared type for the method; dynamic dispatch later chooses the concrete implementation.",
      "marks": 1
    },
    {
      "id": 3,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** An interface-type factory reference is reassigned. What prints?",
      "options": [
        "CARD then EFT",
        "EFT then CARD",
        "CARD twice",
        "The interface cannot hold concrete objects"
      ],
      "correct": "A",
      "memo": "Calls dynamically dispatch to CardFactory then EFTFactory, and the returned products respond according to their types.",
      "snippet": "interface Payment { String pay(); }\nclass Card implements Payment { public String pay(){ return \"CARD\"; } }\nclass EFT implements Payment { public String pay(){ return \"EFT\"; } }\ninterface Factory { Payment create(); }\nclass CardFactory implements Factory { public Payment create(){return new Card();} }\nclass EFTFactory implements Factory { public Payment create(){return new EFT();} }\nFactory f = new CardFactory();\nSystem.out.println(f.create().pay());\nf = new EFTFactory();\nSystem.out.println(f.create().pay());",
      "marks": 1
    },
    {
      "id": 4,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** `Factory f = new CardFactory();` but `cardOnly()` exists only in CardFactory, not Factory. Does `f.cardOnly()` compile?",
      "options": [
        "No, because CardFactory cannot implement interfaces",
        "Yes, because the runtime object is CardFactory",
        "No, because the declared Factory type lacks that method",
        "Yes, if Factory is an interface"
      ],
      "correct": "C",
      "memo": "Only methods visible through the declared reference type are callable without casting; prefer exposing needed capabilities through appropriate contracts.",
      "snippet": "interface Factory { Payment create(); }\nclass CardFactory implements Factory {\n public Payment create() { return new Card(); }\n public void cardOnly() { }\n}\nFactory f = new CardFactory();\nf.cardOnly();",
      "marks": 1
    },
    {
      "id": 5,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** Checkout takes a `PaymentFactory` and uses `Payment p = factory.create(); p.pay();`. Which feature allows swapping Stripe and Yoco without rewriting checkout?",
      "options": [
        "Hard-coded provider strings inside checkout",
        "Polymorphism through both factory and product interfaces",
        "Making all methods private",
        "Java method overloading only"
      ],
      "correct": "B",
      "memo": "Interface-based creation and product behavior allow the generic checkout flow to work with multiple implementations.",
      "marks": 1
    },
    {
      "id": 6,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A class has `create(int userId)` and `create(String email)` on the same class. Compared with overriding in Factory Method, which Java mechanism is demonstrated?",
      "options": [
        "Composition",
        "Observer notification",
        "Overriding",
        "Overloading"
      ],
      "correct": "D",
      "memo": "Different parameter lists with the same name are overloads; overridden methods share an inherited signature.",
      "marks": 1
    },
    {
      "id": 7,
      "kind": "Multiple choice",
      "prompt": "**Spot the bug:** A concrete factory implements an interface whose create method returns `Payment`, but returns `String` instead. Why won't it compile?",
      "options": [
        "The method has too many parameters",
        "Java forbids Strings in all factory methods",
        "String is not compatible with the Payment return type",
        "Every factory must be abstract"
      ],
      "correct": "C",
      "memo": "An override must have a compatible return type (including covariant subtypes), and String does not implement Payment.",
      "snippet": "interface Payment {}\ninterface PaymentFactory { Payment create(); }\nclass CardFactory implements PaymentFactory {\n  public String create() { return \"card\"; }\n}",
      "marks": 1
    },
    {
      "id": 8,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A payment UI chooses PayPal before calling `checkout(factory)`. Does a Factory Method design eliminate the need for every concrete selection decision anywhere in the application?",
      "options": [
        "No, a composition/selection boundary still chooses a concrete creator",
        "Yes, every creator must be a singleton",
        "No, checkout must know every concrete provider",
        "Yes, no provider choice is ever needed"
      ],
      "correct": "A",
      "memo": "Selection often happens at app setup or a provider registry; the reusable checkout workflow stays provider-neutral.",
      "marks": 1
    },
    {
      "id": 9,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A `ReportCreator` class owns a common `publishReport()` workflow that calls `createDocument()`. Which class should override `createDocument()` to make HTML documents?",
      "options": [
        "The database entity for HTML",
        "Document interface",
        "HtmlCreator subclass of ReportCreator",
        "Every caller of publishReport()"
      ],
      "correct": "C",
      "memo": "The concrete Creator overrides the factory hook and returns an HtmlDocument implementing the Document abstraction.",
      "marks": 1
    },
    {
      "id": 10,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** A method receives an interface reference and executes it. Which line prints when called with `new EmailCreator()`?",
      "options": [
        "EMAIL",
        "Nothing",
        "Both outputs",
        "SMS"
      ],
      "correct": "A",
      "memo": "The runtime object is EmailCreator, so its overridden create() method returns Email.",
      "snippet": "interface Message { String label(); }\nclass Email implements Message { public String label(){return \"EMAIL\";} }\ninterface Creator { Message create(); }\nclass EmailCreator implements Creator { public Message create(){return new Email();} }\nstatic void send(Creator c) { System.out.println(c.create().label()); }\nsend(new EmailCreator());",
      "marks": 1
    },
    {
      "id": 11,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A developer creates `new CardFactory()` inside a supposedly provider-neutral checkout method. Which is the main design flaw?",
      "options": [
        "It creates an object at runtime",
        "It hardcodes the provider and defeats substitutable creators",
        "Factory classes can never be instantiated",
        "The Payment interface should be deleted"
      ],
      "correct": "B",
      "memo": "Injecting/receiving a factory parameter removes the checkout method's hard-coded provider dependency.",
      "marks": 1
    },
    {
      "id": 12,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A new `MobileMoneyFactory` implements the existing `PaymentFactory` interface. What should remain unchanged if checkout was correctly decoupled?",
      "options": [
        "The provider-selection registry necessarily",
        "The MobileMoney payment product",
        "The new creator's implementation",
        "The generic checkout(PaymentFactory) method"
      ],
      "correct": "D",
      "memo": "A correctly abstracted checkout only invokes the factory and product contracts.",
      "marks": 1
    },
    {
      "id": 13,
      "kind": "Multiple choice",
      "prompt": "**Diagram reasoning:** An abstract Creator declares create(); ConcreteCreator overrides it and creates ConcreteProduct. Which relationship is the Factory Method's key extension point?",
      "options": [
        "Creator must own a List of Observers",
        "ConcreteProduct contains the Creator",
        "Product inherits from Creator",
        "ConcreteCreator inherits Creator and overrides creation"
      ],
      "correct": "D",
      "memo": "The creator subclass controls the product construction choice via the overridable factory method.",
      "snippet": "abstract class Creator {\n  abstract Product create();\n  void process() { create().run(); }\n}\nclass EmailCreator extends Creator {\n  Product create() { return new EmailProduct(); }\n}",
      "marks": 1
    },
    {
      "id": 14,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A creator method promises `VirtualMachine createVM()`, and a subclass overrides it with `EC2 createVM()`, where EC2 implements VirtualMachine. What does Java permit?",
      "options": [
        "The factory must return Object",
        "The override is invalid because types must match exactly",
        "A covariant return type, so EC2 is valid",
        "Only void factory methods"
      ],
      "correct": "C",
      "memo": "A concrete subtype can be returned covariantly from an overriding instance method.",
      "marks": 1
    },
    {
      "id": 15,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** One application always creates one immutable Product type and never changes it. Is Factory Method automatically better than directly calling `new Product()`?",
      "options": [
        "No, a direct constructor can be clearer if creation never varies",
        "Yes, because interfaces cannot be instantiated",
        "No, Factory Method is illegal in Java",
        "Yes, every constructor needs a Creator subclass"
      ],
      "correct": "A",
      "memo": "Use Factory Method when extensible or variable construction justifies its extra creator hierarchy.",
      "marks": 1
    },
    {
      "id": 16,
      "kind": "True or false",
      "prompt": "**True/False:** `PaymentFactory f = new EFTFactory();` is valid upcasting when EFTFactory implements PaymentFactory.",
      "correct": "true",
      "memo": "True. A class implementing an interface can be referenced through that interface.",
      "marks": 1
    },
    {
      "id": 17,
      "kind": "True or false",
      "prompt": "**True/False:** Overriding instance method selection is based solely on the declared variable type and ignores the runtime object.",
      "correct": "false",
      "memo": "False. The compiler checks available methods using the declared type; runtime dynamic dispatch selects the concrete override.",
      "marks": 1
    },
    {
      "id": 18,
      "kind": "True or false",
      "prompt": "**True/False:** Factory Method is exactly the same as a single static switch-based Simple Factory.",
      "correct": "false",
      "memo": "False. Factory Method traditionally relies on overridable creation methods defined by a creator abstraction.",
      "marks": 1
    },
    {
      "id": 19,
      "kind": "True or false",
      "prompt": "**True/False:** A common checkout operation can call factory.create() and then payment.pay() without depending on the concrete factory or payment class.",
      "correct": "true",
      "memo": "True. Both creation and product action can be accessed through interface contracts.",
      "marks": 1
    },
    {
      "id": 20,
      "kind": "True or false",
      "prompt": "**True/False:** An interface itself can be instantiated using `new PaymentFactory()` in Java.",
      "correct": "false",
      "memo": "False. Interfaces define contracts; instantiate a concrete class that implements them.",
      "marks": 1
    }
  ],
  "totalMarks": 20
};

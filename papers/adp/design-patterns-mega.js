window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-20-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 20,
  "title": "Design Patterns · Mega Paper",
  "session": 1,
  "limitSeconds": 10800,
  "version": 3,
  "group": "design-patterns",
  "intro": "One 120-question mixed design-pattern exam: ten questions from each of 12 patterns, interleaved rather than grouped. 3 hours, automatically marked.",
  "source": "Mixed revision curated from the existing twelve design-pattern paper banks (ten questions per pattern), with re-ordered questions and answer choices.",
  "questions": [
    {
      "id": 1,
      "kind": "True or false",
      "prompt": "**True/False:** A Simple Factory has to be one of the original Gang of Four 23 design patterns.",
      "correct": "false",
      "memo": "False. Simple Factory is a common creation idiom but not one of the original GoF 23 patterns.",
      "marks": 1
    },
    {
      "id": 2,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** `PaymentFactory factory = new EFTFactory();` is valid Java because EFTFactory implements PaymentFactory. What does the compiler use to decide whether `factory.create()` can be called?",
      "options": [
        "The declared reference type PaymentFactory",
        "The user's chosen payment method",
        "The name of the source file",
        "Runtime class name EFTFactory only"
      ],
      "correct": "A",
      "memo": "The compiler checks the declared type for the method; dynamic dispatch later chooses the concrete implementation.",
      "marks": 1
    },
    {
      "id": 3,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** In a Java interface `CloudFactory`, which method pair best expresses two separate abstract products?",
      "options": [
        "`String getProviderName()` alone",
        "`void logMessage()` and `void close()`",
        "`Object createAnything()` only",
        "`VirtualMachine createVM()` and `CloudStorage createStorage()`"
      ],
      "correct": "D",
      "memo": "Create methods return different product interfaces, one for compute and one for object storage.",
      "marks": 1
    },
    {
      "id": 4,
      "kind": "Multiple choice",
      "prompt": "**Compare:** Two cloud resource implementations use provider-specific construction; an uploader uses interchangeable compression algorithms. Which pattern best models the compressor choice?",
      "options": [
        "Command",
        "Abstract Factory",
        "Strategy",
        "Observer"
      ],
      "correct": "C",
      "memo": "An uploader delegates compression to one selected algorithm; that is Strategy, whereas factories focus on creating products.",
      "marks": 1
    },
    {
      "id": 5,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A weather station notifies a phone display and a dashboard when temperature changes. Which object is the **Subject**?",
      "options": [
        "Every phone display",
        "The WeatherStation that stores observers and broadcasts updates",
        "A temperature integer",
        "The update() method"
      ],
      "correct": "B",
      "memo": "The Subject owns relevant changing state and keeps track of registered Observer listeners.",
      "marks": 1
    },
    {
      "id": 6,
      "kind": "True or false",
      "prompt": "**True/False:** A Decorator normally implements the same component interface as the wrapped object.",
      "correct": "true",
      "memo": "True. Substitutability allows callers and outer decorators to treat it as a component.",
      "marks": 1
    },
    {
      "id": 7,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A user-profile page normally calls `userRepo.getUser(42)` immediately. You introduce a `GetUserCommand` object holding the repository and ID. What benefit is most directly introduced by the Command pattern?",
      "options": [
        "The repository no longer needs SQL",
        "The request can be passed or queued as an object before execution",
        "The User class no longer needs fields",
        "Every database call is now one batched SQL query"
      ],
      "correct": "B",
      "memo": "The command encapsulates the receiver, operation and arguments. An invoker can store and execute it later; SQL execution is not automatically batched.",
      "marks": 1
    },
    {
      "id": 8,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A home automation app has `BasicRemote` and `AdvancedRemote`, each able to operate `Television` and `Radio`. Both remote types and device types will expand independently. Which design best follows **Bridge**?",
      "options": [
        "Have Remote hold a Device interface; concrete remotes and devices form separate hierarchies",
        "Make Radio inherit from AdvancedRemote",
        "Store a string device name and duplicate every action in a switch",
        "Create BasicTelevisionRemote, BasicRadioRemote, AdvancedTelevisionRemote and AdvancedRadioRemote"
      ],
      "correct": "A",
      "memo": "Bridge separates an abstraction hierarchy (remotes) from an implementation hierarchy (devices). Remote holds a Device reference, so refinements and implementations evolve independently.",
      "marks": 1
    },
    {
      "id": 9,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A game uses a shared `BulletStyle` containing sprite and color, while each bullet has position and velocity. Which values belong in **extrinsic state**?",
      "options": [
        "The shared BulletStyle cache key alone",
        "Sprite only",
        "Color and texture",
        "Position and velocity"
      ],
      "correct": "D",
      "memo": "Each bullet's position and velocity vary per occurrence; only stable reusable state should be intrinsic/shared.",
      "marks": 1
    },
    {
      "id": 10,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A calculator accepts expressions like `2 + 3` or `4 * 5`. An expression tree contains NumberExpression, AddExpression and MultiplyExpression classes implementing `Expression.interpret()`. Which pattern is this?",
      "options": [
        "Flyweight",
        "Observer",
        "Interpreter",
        "Bridge"
      ],
      "correct": "C",
      "memo": "Interpreter represents a simple language's grammar as expression objects with interpretation behavior.",
      "marks": 1
    },
    {
      "id": 11,
      "kind": "True or false",
      "prompt": "**True/False:** An Iterator stores or otherwise manages traversal progress separately from the collection's public element representation.",
      "correct": "true",
      "memo": "True. It usually owns cursor/traversal state and hides collection internals.",
      "marks": 1
    },
    {
      "id": 12,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A compiler has `NumberNode`, `AddNode` and `VariableNode` classes. Developers keep adding operations: print the tree, calculate statistics and check variable usage. The node classes should not gain a new method for every operation. Which pattern best fits?",
      "options": [
        "Simple Factory",
        "Flyweight",
        "Visitor",
        "Iterator only"
      ],
      "correct": "C",
      "memo": "Visitor moves operations into visitor classes while each element accepts a visitor, making new operations easier across a stable element hierarchy.",
      "marks": 1
    },
    {
      "id": 13,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** `ExporterFactory.create(\"PDF\")` returns an `Exporter` interface implementation. The application adds XLSX. Which component normally needs to change?",
      "options": [
        "Only the Exporter interface's variable name",
        "The factory's selection/creation logic",
        "Every call to exporter.export()",
        "The Java compiler"
      ],
      "correct": "B",
      "memo": "The central factory generally gains a new case/mapping and XLSX concrete product.",
      "marks": 1
    },
    {
      "id": 14,
      "kind": "True or false",
      "prompt": "**True/False:** Factory Method is exactly the same as a single static switch-based Simple Factory.",
      "correct": "false",
      "memo": "False. Factory Method traditionally relies on overridable creation methods defined by a creator abstraction.",
      "marks": 1
    },
    {
      "id": 15,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** `AWSFactory.createVM()` returns an EC2Instance, while `AWSFactory.createStorage()` returns S3Bucket. What is the corresponding Azure family?",
      "options": [
        "AzureVM and AzureBlobContainer",
        "AzureVM and S3Bucket",
        "S3Bucket and AzureBlobContainer",
        "EC2Instance and BlobContainer"
      ],
      "correct": "A",
      "memo": "A coherent Azure product family pairs the Azure compute resource with Azure Blob Storage.",
      "marks": 1
    },
    {
      "id": 16,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** What prints when the context's selected strategy changes?",
      "options": [
        "SAFE then FAST",
        "FAST twice",
        "Compilation error",
        "FAST then SAFE"
      ],
      "correct": "D",
      "memo": "The context delegates to Fast, then after setStrategy() delegates to Safe.",
      "snippet": "interface Mode { String run(); }\nclass Fast implements Mode { public String run(){return \"FAST\";} }\nclass Safe implements Mode { public String run(){return \"SAFE\";} }\nclass Editor {\n private Mode mode;\n Editor(Mode m){mode=m;}\n void setMode(Mode m){mode=m;}\n String render(){return mode.run();}\n}\nEditor e = new Editor(new Fast());\nSystem.out.println(e.render());\ne.setMode(new Safe());\nSystem.out.println(e.render());",
      "marks": 1
    },
    {
      "id": 17,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A mobile app is registered for order updates but the user unsubscribes. Which method removes its listener from the subject's registry?",
      "options": [
        "new Post()",
        "update(null)",
        "notifyObservers()",
        "removeObserver(mobileListener)"
      ],
      "correct": "D",
      "memo": "Detachment removes that listener from future notifications but doesn't delete the user or order.",
      "marks": 1
    },
    {
      "id": 18,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A document renderer implements `Renderer`, and `WatermarkDecorator` also implements `Renderer` while holding a `Renderer inner` field. Which describes the relationships?",
      "options": [
        "Only IS-A",
        "Only HAS-A",
        "Both IS-A and HAS-A",
        "Neither"
      ],
      "correct": "C",
      "memo": "The decorator IS a Renderer by implementing its interface and HAS a Renderer through composition.",
      "marks": 1
    },
    {
      "id": 19,
      "kind": "True or false",
      "prompt": "**True/False:** Moving three calls into three Command objects guarantees the database engine will execute one SQL batch.",
      "correct": "false",
      "memo": "False. It still executes three repository operations unless batching is implemented separately.",
      "marks": 1
    },
    {
      "id": 20,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An abstract `Shape` has a `Renderer renderer` field. Circle and Rectangle extend Shape; SVGRenderer and CanvasRenderer implement Renderer. Which class is the **implementation interface** in Bridge?",
      "options": [
        "Circle",
        "Renderer",
        "Rectangle",
        "Shape"
      ],
      "correct": "B",
      "memo": "Renderer is the Implementor interface; Shape is the Abstraction which delegates rendering to a Renderer.",
      "marks": 1
    },
    {
      "id": 21,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** A Flyweight factory caches TreeType by species. What does `a == b` print for identical keys?",
      "options": [
        "true, because the factory returns the same cached instance",
        "false, because equals() always compares references",
        "Compilation fails because maps cannot contain objects",
        "false, because new is called twice by the caller"
      ],
      "correct": "A",
      "memo": "computeIfAbsent creates and caches one TreeType per key, so both references point to the same instance.",
      "snippet": "class TreeType {\n final String species;\n TreeType(String species) { this.species = species; }\n}\nclass TreeTypeFactory {\n private final Map<String, TreeType> cache = new HashMap<>();\n TreeType get(String species) {\n  return cache.computeIfAbsent(species, TreeType::new);\n }\n}\nTreeTypeFactory f = new TreeTypeFactory();\nTreeType a = f.get(\"oak\");\nTreeType b = f.get(\"oak\");\nSystem.out.println(a == b);",
      "marks": 1
    },
    {
      "id": 22,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A permission rule language supports `ADMIN`, `MEMBER` and boolean `AND` expressions. Which is a **terminal expression**?",
      "options": [
        "RoleExpression(\"ADMIN\") that evaluates one role token",
        "The entire rule tree",
        "A list of visitor operations",
        "AndExpression combining two rules"
      ],
      "correct": "A",
      "memo": "A terminal expression handles a basic symbol/literal; a nonterminal expression composes child expressions based on a grammar rule.",
      "marks": 1
    },
    {
      "id": 23,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A university app holds students in an ArrayList today but may switch to a tree-backed collection. Clients should visit each student without knowing the storage structure. Which pattern best fits?",
      "options": [
        "Visitor",
        "Bridge",
        "Factory Method",
        "Iterator"
      ],
      "correct": "D",
      "memo": "Iterator exposes sequential traversal through a common cursor interface while hiding aggregate representation.",
      "marks": 1
    },
    {
      "id": 24,
      "kind": "True or false",
      "prompt": "**True/False:** Visitor is often described as using double dispatch because the concrete element and visitor implementation both affect the operation executed.",
      "correct": "true",
      "memo": "True. Virtual accept dispatch and concrete visit overload/implementation combine to select behavior.",
      "marks": 1
    },
    {
      "id": 25,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** A teammate wants a static factory method in Java. Which declaration is valid **at the top level**?",
      "options": [
        "`abstract static class VMFactory { ... }`",
        "`static class VMFactory { ... }`",
        "`class VMFactory { static VM create(){ ... } }`",
        "`static interface VMFactory { ... }`"
      ],
      "correct": "C",
      "memo": "A top-level class is not static; a normal top-level class can contain static factory methods.",
      "snippet": "class VMFactory {\n  static VM create() { return new EC2(); }\n}",
      "marks": 1
    },
    {
      "id": 26,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** An interface-type factory reference is reassigned. What prints?",
      "options": [
        "The interface cannot hold concrete objects",
        "CARD then EFT",
        "EFT then CARD",
        "CARD twice"
      ],
      "correct": "B",
      "memo": "Calls dynamically dispatch to CardFactory then EFTFactory, and the returned products respond according to their types.",
      "snippet": "interface Payment { String pay(); }\nclass Card implements Payment { public String pay(){ return \"CARD\"; } }\nclass EFT implements Payment { public String pay(){ return \"EFT\"; } }\ninterface Factory { Payment create(); }\nclass CardFactory implements Factory { public Payment create(){return new Card();} }\nclass EFTFactory implements Factory { public Payment create(){return new EFT();} }\nFactory f = new CardFactory();\nSystem.out.println(f.create().pay());\nf = new EFTFactory();\nSystem.out.println(f.create().pay());",
      "marks": 1
    },
    {
      "id": 27,
      "kind": "True or false",
      "prompt": "**True/False:** Abstract Factory ensures cloud SDK requests always succeed once all classes compile.",
      "correct": "false",
      "memo": "False. It structures object creation; network failures, access permissions and cleanup remain separate concerns.",
      "marks": 1
    },
    {
      "id": 28,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** What is wrong with this context's `calculate()` implementation?",
      "options": [
        "There is no interface type",
        "It recursively invokes itself rather than calling the strategy",
        "A final strategy field prevents use",
        "Strategy methods must be static"
      ],
      "correct": "B",
      "memo": "The method causes unbounded recursion/StackOverflowError; it should delegate to `strategy.calculate(amount)`.",
      "snippet": "class Checkout {\n private final DiscountStrategy strategy;\n Checkout(DiscountStrategy s){strategy=s;}\n int calculate(int amount){return calculate(amount);}\n}",
      "marks": 1
    },
    {
      "id": 29,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** Two listeners subscribe in insertion order, then the first unsubscribes. What prints?",
      "options": [
        "A 5, B 5, B 8",
        "A 5, B 5, A 8",
        "B 8 only",
        "A 5, B 5, A 8, B 8"
      ],
      "correct": "A",
      "memo": "The first notification goes to both in order; after A is removed, only B sees the next update.",
      "snippet": "interface Listener { void update(int n); }\nclass Printer implements Listener {\n String name; Printer(String n){name=n;}\n public void update(int n){System.out.println(name+\" \"+n);}\n}\nList<Listener> xs=new ArrayList<>();\nPrinter a=new Printer(\"A\"), b=new Printer(\"B\");\nxs.add(a);xs.add(b);\nfor(Listener x:xs)x.update(5);\nxs.remove(a);\nfor(Listener x:xs)x.update(8);",
      "marks": 1
    },
    {
      "id": 30,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A cafe has BaseCoffee (R25) plus optional MilkDecorator (+R6) and CaramelDecorator (+R9). Which nested object produces an R40 coffee?",
      "options": [
        "`new CaramelDecorator(new BaseCoffee())`",
        "`new BaseCoffee()`",
        "`new MilkDecorator(new BaseCoffee())`",
        "`new CaramelDecorator(new MilkDecorator(new BaseCoffee()))`"
      ],
      "correct": "D",
      "memo": "The wrappers add their prices after delegating: 25 + 6 + 9 = R40.",
      "marks": 1
    },
    {
      "id": 31,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A photo editor supports `CropCommand`, `RotateCommand` and `ResizeCommand`. Each implements `Command.execute()`. What should the toolbar's button depend on?",
      "options": [
        "A switch inside the Image object",
        "The concrete CropCommand class only",
        "The common Command interface",
        "The concrete Image class's constructor"
      ],
      "correct": "C",
      "memo": "The button (invoker) should invoke a Command through the common interface; separate concrete commands know the operations.",
      "marks": 1
    },
    {
      "id": 32,
      "kind": "True or false",
      "prompt": "**True/False:** A Bridge implementation reference can be injected through a Java constructor instead of being created inside the abstraction.",
      "correct": "true",
      "memo": "True. Constructor injection is a common way to compose the abstraction with a suitable implementation.",
      "marks": 1
    },
    {
      "id": 33,
      "kind": "Multiple choice",
      "prompt": "**Spot the design bug:** Every tree gets the same shared TreeType, but TreeType stores a mutable `x` position. Why is this wrong?",
      "options": [
        "Flyweight forbids rendering methods",
        "An object cannot have any fields",
        "Moving one tree can appear to move all trees using that shared object",
        "Java automatically clones TreeType when x changes"
      ],
      "correct": "C",
      "memo": "x is extrinsic per-tree state and should be passed into draw(x,y) or stored in each Tree context rather than in shared TreeType.",
      "marks": 1
    },
    {
      "id": 34,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** The expression `2 + (3 * 4)` is modeled as `Add(Number(2), Multiply(Number(3), Number(4)))`. Which result should interpret() return?",
      "options": [
        "20",
        "14",
        "24",
        "9"
      ],
      "correct": "B",
      "memo": "The nested Multiply returns 12; the outer Add combines 2 + 12 = 14.",
      "marks": 1
    },
    {
      "id": 35,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A Java `Iterator<Student>` is returned from an enrolled-students collection. Which pair of operations advances the traversal?",
      "options": [
        "`hasNext()` and `next()`",
        "`observe()` and `notify()`",
        "`create()` and `clone()`",
        "`size()` and `clear()`"
      ],
      "correct": "A",
      "memo": "hasNext() checks availability; next() returns the next item and advances the cursor.",
      "marks": 1
    },
    {
      "id": 36,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** `Element.accept(Visitor v)` is implemented in a concrete `Circle` as `v.visit(this)`. Why is the `accept` call important?",
      "options": [
        "It automatically visits every element in a collection",
        "It removes the need for a Visitor interface",
        "It forces every element to store a List of visitors",
        "It allows the concrete element class to select the matching overloaded visit(Circle) method"
      ],
      "correct": "D",
      "memo": "Inside Circle.accept, `this` has static type Circle, so the overload visit(Circle) is chosen; visitor implementation then dispatches dynamically.",
      "marks": 1
    },
    {
      "id": 37,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** What does the program print when a Simple Factory selects a product?",
      "options": [
        "Azure",
        "VM",
        "Compilation fails because interface types cannot reference implementations",
        "EC2"
      ],
      "correct": "D",
      "memo": "The branch for true creates EC2, and Java dispatches name() on the runtime EC2 object.",
      "snippet": "interface VM { String name(); }\nclass EC2 implements VM { public String name(){return \"EC2\";} }\nclass AzureVM implements VM { public String name(){return \"Azure\";} }\nclass VMFactory {\n static VM create(boolean aws) { return aws ? new EC2() : new AzureVM(); }\n}\nSystem.out.println(VMFactory.create(true).name());",
      "marks": 1
    },
    {
      "id": 38,
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
      "id": 39,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** What prints when a CloudFactory is an AWSFactory?",
      "options": [
        "Compiler error because interfaces cannot be references",
        "EC2 then S3",
        "AzureVM then Blob",
        "S3 then EC2"
      ],
      "correct": "B",
      "memo": "AWSFactory.createVM() returns EC2 and createStorage() returns S3, and each product dispatches its name() method.",
      "snippet": "interface VM { String name(); }\ninterface Storage { String name(); }\ninterface CloudFactory { VM createVM(); Storage createStorage(); }\nclass EC2 implements VM { public String name(){return \"EC2\";} }\nclass S3 implements Storage { public String name(){return \"S3\";} }\nclass AWSFactory implements CloudFactory {\n public VM createVM(){return new EC2();}\n public Storage createStorage(){return new S3();}\n}\nCloudFactory f = new AWSFactory();\nSystem.out.println(f.createVM().name());\nSystem.out.println(f.createStorage().name());",
      "marks": 1
    },
    {
      "id": 40,
      "kind": "True or false",
      "prompt": "**True/False:** Two objects can use the same concrete Strategy class without duplicating algorithm code in each context subclass.",
      "correct": "true",
      "memo": "True. Separate contexts can reuse one strategy implementation, possibly sharing instances if safe.",
      "marks": 1
    },
    {
      "id": 41,
      "kind": "Multiple choice",
      "prompt": "**Spot the bug:** A publisher adds an article to its list but never calls `notifyObservers()`. What is the likely outcome?",
      "options": [
        "Registered observers receive no callback unless another part of the app notifies them",
        "All observers are deleted",
        "The compiler rejects `List.add`",
        "Java automatically watches collection changes"
      ],
      "correct": "A",
      "memo": "Observer notifications must be triggered by the Subject/application logic; mutating a List does not broadcast events.",
      "snippet": "void publish(Article a) {\n  articles.add(a);\n  // missing notifyObservers(a);\n}",
      "marks": 1
    },
    {
      "id": 42,
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
      "id": 43,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An order application creates `CancelOrderCommand(orderService, 105)`. Who is the **receiver**?",
      "options": [
        "The Cancel button",
        "The order ID",
        "The queue that stores commands",
        "The `orderService` that performs the actual cancellation"
      ],
      "correct": "D",
      "memo": "The receiver performs the underlying work; the command wraps the call and the invoker decides when to execute.",
      "marks": 1
    },
    {
      "id": 44,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** `Remote` stores a `Device` reference and calls the device's implementation. What prints?",
      "options": [
        "Nothing; an interface reference can't invoke methods",
        "TV ON",
        "RADIO ON",
        "REMOTE ON"
      ],
      "correct": "C",
      "memo": "The remote delegates to the Radio instance passed in. Runtime dispatch calls Radio.turnOn().",
      "snippet": "interface Device { String turnOn(); }\nclass TV implements Device { public String turnOn() {return \"TV ON\";} }\nclass Radio implements Device { public String turnOn() {return \"RADIO ON\";} }\nclass Remote {\n  private final Device device;\n  Remote(Device device) { this.device = device; }\n  String power() { return device.turnOn(); }\n}\nSystem.out.println(new Remote(new Radio()).power());",
      "marks": 1
    },
    {
      "id": 45,
      "kind": "True or false",
      "prompt": "**True/False:** Each logical tree must have its own private copy of the same texture for Flyweight to work.",
      "correct": "false",
      "memo": "False. Reusing the same texture/TreeType is the purpose of Flyweight.",
      "marks": 1
    },
    {
      "id": 46,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** What does the expression tree evaluate to?",
      "options": [
        "3",
        "15",
        "21",
        "7"
      ],
      "correct": "B",
      "memo": "AddExpression interprets its two child NumberExpressions and sums 7 + 8 = 15.",
      "snippet": "interface Expr { int interpret(); }\nclass NumberExpr implements Expr {\n private final int n;\n NumberExpr(int n){this.n=n;}\n public int interpret(){return n;}\n}\nclass AddExpr implements Expr {\n private final Expr left,right;\n AddExpr(Expr a,Expr b){left=a;right=b;}\n public int interpret(){return left.interpret()+right.interpret();}\n}\nExpr tree = new AddExpr(new NumberExpr(7),new NumberExpr(8));\nSystem.out.println(tree.interpret());",
      "marks": 1
    },
    {
      "id": 47,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** Given the following List and Iterator, what prints?",
      "options": [
        "No output because an Iterator is a class",
        "A then B",
        "B then A",
        "A then A"
      ],
      "correct": "B",
      "memo": "Calling next() advances from the first item to the second; the code prints A and then B.",
      "snippet": "List<String> names = List.of(\"A\", \"B\", \"C\");\nIterator<String> it = names.iterator();\nSystem.out.println(it.next());\nSystem.out.println(it.next());",
      "marks": 1
    },
    {
      "id": 48,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A document AST has Paragraph and Image elements. A visitor interface has `visit(Paragraph)` and `visit(Image)`. Which new requirement is usually easiest to add?",
      "options": [
        "A new ExportToMarkdownVisitor implementing both visit methods",
        "Removing the accept method from all nodes",
        "A completely different element contract for each operation",
        "A new Table element type with no visitor changes"
      ],
      "correct": "A",
      "memo": "Adding an operation means implementing a new concrete visitor for the existing stable element types.",
      "marks": 1
    },
    {
      "id": 49,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A factory is asked for provider `\"ORACLE\"` but supports only AWS and Azure. Which behavior is safest for a production deployment tool?",
      "options": [
        "Randomly choose AWS or Azure",
        "Silently use AWS",
        "Return null and let a future method fail",
        "Reject with a clear error explaining unsupported provider"
      ],
      "correct": "D",
      "memo": "Rejecting invalid input makes the failure explicit and avoids accidental deployment to an unintended cloud.",
      "marks": 1
    },
    {
      "id": 50,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** Checkout takes a `PaymentFactory` and uses `Payment p = factory.create(); p.pay();`. Which feature allows swapping Stripe and Yoco without rewriting checkout?",
      "options": [
        "Java method overloading only",
        "Hard-coded provider strings inside checkout",
        "Polymorphism through both factory and product interfaces",
        "Making all methods private"
      ],
      "correct": "C",
      "memo": "Interface-based creation and product behavior allow the generic checkout flow to work with multiple implementations.",
      "marks": 1
    },
    {
      "id": 51,
      "kind": "Multiple choice",
      "prompt": "**Spot the bug:** `AWSFactory` returns an AzureBlobContainer for storage. Both AzureBlobContainer and S3Bucket implement Storage. What is true?",
      "options": [
        "The return type must be Object",
        "The compiler always rejects it",
        "It may compile but violates the intended provider family",
        "Java automatically transforms Azure storage into S3"
      ],
      "correct": "C",
      "memo": "The type contract Storage doesn't inherently encode provider compatibility; tests/stronger types catch mismatches.",
      "snippet": "class AWSFactory implements CloudFactory {\n public VM createVM(){return new EC2();}\n public Storage createStorage(){return new AzureBlobContainer();}\n}",
      "marks": 1
    },
    {
      "id": 52,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A shopping cart could use one of two tax calculators, chosen at configuration time. What should the cart's field type ideally be?",
      "options": [
        "ConcreteTaxCalculatorA",
        "TaxStrategy interface",
        "Any random Object requiring casts",
        "String with the calculator source code"
      ],
      "correct": "B",
      "memo": "A strategy interface provides interchangeable algorithms without concrete coupling.",
      "marks": 1
    },
    {
      "id": 53,
      "kind": "True or false",
      "prompt": "**True/False:** It can be valid to trigger notifications only for meaningful state changes rather than every field assignment.",
      "correct": "true",
      "memo": "True. The application defines relevant observable changes.",
      "marks": 1
    },
    {
      "id": 54,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** A base returns `x`, an inner suffix adds `A`, and an outer suffix adds `B`. What prints?",
      "options": [
        "xAB",
        "xBA",
        "ABx",
        "x only"
      ],
      "correct": "A",
      "memo": "Nested calls return base x, then inner adds A, then outer adds B.",
      "snippet": "interface Text { String render(); }\nclass Base implements Text { public String render(){return \"x\";} }\nclass Suffix implements Text {\n Text inner; String extra;\n Suffix(Text inner,String extra){this.inner=inner;this.extra=extra;}\n public String render(){return inner.render()+extra;}\n}\nText t=new Suffix(new Suffix(new Base(),\"A\"),\"B\");\nSystem.out.println(t.render());",
      "marks": 1
    },
    {
      "id": 55,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A scheduling system holds `List<Command>` and calls `execute()` on each at midnight. What is the queue's design-pattern role?",
      "options": [
        "Product factory",
        "ConcreteCommand",
        "Receiver",
        "Invoker"
      ],
      "correct": "D",
      "memo": "The invoker triggers commands without needing to know their operation-specific details.",
      "marks": 1
    },
    {
      "id": 56,
      "kind": "Multiple choice",
      "prompt": "**Spot the design error:** A `Remote` is supposed to operate any Device implementation. Why is this field declaration restrictive?",
      "options": [
        "A remote must extend TV instead",
        "The constructor cannot store references",
        "`private` fields are not allowed in Bridge",
        "It depends on TV rather than the common Device interface"
      ],
      "correct": "D",
      "memo": "The Abstraction should hold the Implementor interface (Device), not a concrete TV. Otherwise it cannot compose different devices without change.",
      "snippet": "class Remote {\n  private final TV device;\n  Remote(TV device) { this.device = device; }\n  void power() { device.turnOn(); }\n}",
      "marks": 1
    },
    {
      "id": 57,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A million particle instances share a `ParticleType` object but each stores its own position. What is the main memory benefit?",
      "options": [
        "The GPU memory requirement becomes zero",
        "There are no particle objects anymore",
        "Large repeated immutable type data is stored once per type, rather than once per particle",
        "Every position can be deduplicated regardless of value"
      ],
      "correct": "C",
      "memo": "Flyweight reduces duplication of heavyweight state; per-particle extrinsic state still consumes memory.",
      "marks": 1
    },
    {
      "id": 58,
      "kind": "True or false",
      "prompt": "**True/False:** The Interpreter pattern is often more suitable for small, well-defined languages than for huge general-purpose grammars.",
      "correct": "true",
      "memo": "True. Large grammars can make class-per-rule designs unwieldy.",
      "marks": 1
    },
    {
      "id": 59,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A student collection wants to support Java enhanced for-loops (`for (Student s : students)`). Which interface should its collection class usually implement?",
      "options": [
        "Iterator<Student> only",
        "Iterable<Student> with iterator() returning an Iterator<Student>",
        "Observer",
        "Runnable"
      ],
      "correct": "B",
      "memo": "The enhanced-for statement expects an array or an Iterable; Iterable.iterator() returns an Iterator.",
      "marks": 1
    },
    {
      "id": 60,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** The same AST adds a brand-new `Table` element. What is an expected maintenance cost of Visitor?",
      "options": [
        "The Visitor interface and existing concrete visitors typically need a visit(Table) case",
        "All other elements must inherit Table",
        "The collection must become a HashMap",
        "No visitor needs to know about Table"
      ],
      "correct": "A",
      "memo": "Visitor trades easier new operations for harder new element types; every visitor may need handling for newly introduced elements.",
      "marks": 1
    },
    {
      "id": 61,
      "kind": "True or false",
      "prompt": "**True/False:** Returning a `VM` interface from a factory requires the factory to return an instance of the interface itself rather than an implementing class.",
      "correct": "false",
      "memo": "False. Interfaces are not directly instantiated; factories return objects whose concrete classes implement the interface.",
      "marks": 1
    },
    {
      "id": 62,
      "kind": "Multiple choice",
      "prompt": "**Spot the bug:** A concrete factory implements an interface whose create method returns `Payment`, but returns `String` instead. Why won't it compile?",
      "options": [
        "String is not compatible with the Payment return type",
        "Every factory must be abstract",
        "The method has too many parameters",
        "Java forbids Strings in all factory methods"
      ],
      "correct": "A",
      "memo": "An override must have a compatible return type (including covariant subtypes), and String does not implement Payment.",
      "snippet": "interface Payment {}\ninterface PaymentFactory { Payment create(); }\nclass CardFactory implements PaymentFactory {\n  public String create() { return \"card\"; }\n}",
      "marks": 1
    },
    {
      "id": 63,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A deployment client receives `CloudFactory f` and calls `f.createVM()`, `f.createStorage()`, then `provision()` on both. Why is the client less coupled?",
      "options": [
        "It receives all credentials automatically",
        "It can only deploy AWS",
        "It no longer needs error handling",
        "It needs no reference to concrete resource classes"
      ],
      "correct": "D",
      "memo": "The client uses only the abstract factory and product contracts; provider specifics reside in concrete implementations.",
      "marks": 1
    },
    {
      "id": 64,
      "kind": "Multiple choice",
      "prompt": "**Spot the design issue:** A developer creates `FastZipUploader`, `SlowZipUploader`, `FastGzipUploader`, and `SlowGzipUploader`. Speed policy and compression are independent. Which refactor reduces subclass combinations?",
      "options": [
        "Replace the Uploader with a singleton",
        "Make each subclass abstract",
        "Use separate compression and speed strategies composed into one Uploader",
        "Duplicate the same code across all combinations"
      ],
      "correct": "C",
      "memo": "Independent variation axes can be modeled as separate composed strategies rather than multiplying subclasses.",
      "marks": 1
    },
    {
      "id": 65,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** An observer calls `removeObserver(this)` while the subject iterates an ArrayList via for-each. What is a likely problem?",
      "options": [
        "StringIndexOutOfBoundsException always",
        "ConcurrentModificationException or inconsistent iteration",
        "The code becomes a Factory Method",
        "All observers automatically remain subscribed"
      ],
      "correct": "B",
      "memo": "Mutating a fail-fast collection during iteration can throw; use a snapshot or CopyOnWriteArrayList with defined semantics.",
      "snippet": "for (Observer observer: observers) {\n  observer.update(event); // may remove itself\n}",
      "marks": 1
    },
    {
      "id": 66,
      "kind": "True or false",
      "prompt": "**True/False:** Wrapping a component in five decorators can complicate debugging because invocation order is nested.",
      "correct": "true",
      "memo": "True. Each layer delegates to another and execution order must be understood and tested.",
      "marks": 1
    },
    {
      "id": 67,
      "kind": "Multiple choice",
      "prompt": "**Code check:** The invoker is intended to accept any command. Which signature best supports replacing `EmailCommand` with `SmsCommand`?",
      "options": [
        "`void run(EmailCommand command)`",
        "`void run(Command command)`",
        "`void run(String commandClassName)`",
        "`void run(Object command)` with casts"
      ],
      "correct": "B",
      "memo": "Using the Command interface gives the invoker polymorphism without provider-specific checks.",
      "snippet": "interface Command { void execute(); }\nclass EmailCommand implements Command { public void execute() {} }\nclass SmsCommand implements Command { public void execute() {} }",
      "marks": 1
    },
    {
      "id": 68,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An `AdvancedRemote` extends `Remote` and adds `mute()`. `Remote` already owns a Device reference with `setVolume(int)`. Where should `mute()` delegate?",
      "options": [
        "To Device.setVolume(0) through the stored interface",
        "To a new AdvancedTVRemote only",
        "To a static singleton that ignores the chosen device",
        "To the Remote constructor without invoking any device"
      ],
      "correct": "A",
      "memo": "Refined Abstraction adds operations while continuing to delegate implementation-specific work through Device.",
      "marks": 1
    },
    {
      "id": 69,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** The same flyweight draws twice with different caller-supplied coordinates. What prints?",
      "options": [
        "oak at 5,8 twice",
        "oak at 1,2 twice",
        "The compiler rejects passing coordinates",
        "oak at 1,2 then oak at 5,8"
      ],
      "correct": "D",
      "memo": "The flyweight uses supplied extrinsic coordinates per call; shared species stays constant.",
      "snippet": "class TreeType {\n private final String name;\n TreeType(String name){this.name=name;}\n String draw(int x,int y){return name+\" at \"+x+\",\"+y;}\n}\nTreeType oak = new TreeType(\"oak\");\nSystem.out.println(oak.draw(1,2));\nSystem.out.println(oak.draw(5,8));",
      "marks": 1
    },
    {
      "id": 70,
      "kind": "Multiple choice",
      "prompt": "**Spot the bug:** An `AndExpression` has a left and right child and should require both true. What is wrong with the implementation?",
      "options": [
        "Expression cannot return boolean",
        "Using interfaces",
        "The `||` operator implements OR instead of AND",
        "The children must be Strings"
      ],
      "correct": "C",
      "memo": "AND should use `&&` for conjunction; `||` wrongly accepts either child being true.",
      "snippet": "interface Rule { boolean interpret(); }\nclass AndExpr implements Rule {\n private final Rule left, right;\n AndExpr(Rule l,Rule r){left=l;right=r;}\n public boolean interpret(){return left.interpret() || right.interpret();}\n}",
      "marks": 1
    },
    {
      "id": 71,
      "kind": "True or false",
      "prompt": "**True/False:** An enhanced for-loop can work with an object implementing Iterable<T> and returning an Iterator<T>.",
      "correct": "true",
      "memo": "True. Iterable supplies the iterator used by the loop.",
      "marks": 1
    },
    {
      "id": 72,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** A NumberNode accepts a PrintVisitor. What prints?",
      "options": [
        "Nothing",
        "The program cannot compile because Visitor interfaces cannot be overloaded",
        "NUMBER",
        "GENERIC"
      ],
      "correct": "C",
      "memo": "NumberNode.accept invokes visit(NumberNode) and PrintVisitor prints NUMBER.",
      "snippet": "interface Node { void accept(NodeVisitor visitor); }\ninterface NodeVisitor { void visit(NumberNode n); }\nclass NumberNode implements Node {\n public void accept(NodeVisitor v) { v.visit(this); }\n}\nclass PrintVisitor implements NodeVisitor {\n public void visit(NumberNode n) { System.out.println(\"NUMBER\"); }\n}\nnew NumberNode().accept(new PrintVisitor());",
      "marks": 1
    },
    {
      "id": 73,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** A VM factory promises an independent mutable config per request. What is wrong with this code?",
      "options": [
        "It creates a new object each call",
        "It returns the same shared Config, so callers affect one another",
        "The method should be `void`",
        "The field must be named `config`"
      ],
      "correct": "B",
      "memo": "Reusing a static mutable object produces aliasing; create/copy fresh configurations when independent requests are required.",
      "snippet": "class VMFactory {\n static Config shared = new Config();\n static Config create() { return shared; }\n}",
      "marks": 1
    },
    {
      "id": 74,
      "kind": "True or false",
      "prompt": "**True/False:** An interface itself can be instantiated using `new PaymentFactory()` in Java.",
      "correct": "false",
      "memo": "False. Interfaces define contracts; instantiate a concrete class that implements them.",
      "marks": 1
    },
    {
      "id": 75,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** You add a new product category, `LoadBalancer`, that every provider factory must support. What usually must change?",
      "options": [
        "CloudFactory contract and all existing concrete provider factories",
        "Only the UI color palette",
        "None of the existing factories",
        "Only one concrete VM class"
      ],
      "correct": "A",
      "memo": "Adding a new product type changes the abstract factory interface and obliges existing implementations to add a creator.",
      "marks": 1
    },
    {
      "id": 76,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A route planner always chooses one algorithm from shortest-distance, least-tolls and fastest-time. Which class is the **context**?",
      "options": [
        "The road database",
        "Every route segment",
        "Only ShortestDistanceStrategy",
        "RoutePlanner, which stores and delegates to RouteStrategy"
      ],
      "correct": "D",
      "memo": "The route planner is the context; concrete strategy implementations supply the alternative route-selection algorithms.",
      "marks": 1
    },
    {
      "id": 77,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A service sends only `update()` without data. Listeners ask the service for the current price. What notification variant is this?",
      "options": [
        "Decorator",
        "Factory",
        "Push",
        "Pull"
      ],
      "correct": "D",
      "memo": "In a pull model, observers retrieve current state rather than having it pushed in update(event).",
      "marks": 1
    },
    {
      "id": 78,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** `MetricsDecorator` constructor accepts only `RawService`, not the shared `Service` interface. What limitation follows?",
      "options": [
        "The compiler automatically converts all wrappers to RawService",
        "There is no problem for arbitrary stacking",
        "The decorator cannot easily wrap another decorator implementing Service",
        "The method execute() becomes static"
      ],
      "correct": "C",
      "memo": "The wrapped field and constructor should accept the shared Service contract to support nested decorators.",
      "snippet": "interface Service { String run(); }\nclass RawService implements Service { public String run(){return \"ok\";} }\nclass MetricsDecorator implements Service {\n private final RawService inner;\n MetricsDecorator(RawService inner){this.inner=inner;}\n public String run(){return inner.run();}\n}",
      "marks": 1
    },
    {
      "id": 79,
      "kind": "True or false",
      "prompt": "**True/False:** Every Command implementation must have an `undo()` method to qualify for the Command pattern.",
      "correct": "false",
      "memo": "False. Undo is a possible extension, not a required contract.",
      "marks": 1
    },
    {
      "id": 80,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** Two renderers interpret the same draw call differently. What prints?",
      "options": [
        "Compilation error because both implementations share an interface",
        "SVG circle then ASCII circle",
        "SVG circle twice",
        "ASCII circle twice"
      ],
      "correct": "B",
      "memo": "The first Circle wraps SvgRenderer and the second wraps AsciiRenderer; each delegates drawCircle() to its own renderer.",
      "snippet": "interface Renderer { String drawCircle(); }\nclass SvgRenderer implements Renderer { public String drawCircle(){ return \"SVG circle\"; } }\nclass AsciiRenderer implements Renderer { public String drawCircle(){ return \"ASCII circle\"; } }\nclass Circle {\n private final Renderer renderer;\n Circle(Renderer renderer){this.renderer=renderer;}\n String draw(){return renderer.drawCircle();}\n}\nSystem.out.println(new Circle(new SvgRenderer()).draw());\nSystem.out.println(new Circle(new AsciiRenderer()).draw());",
      "marks": 1
    },
    {
      "id": 81,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** Which version avoids accidental shared position state?",
      "options": [
        "`TreeType.draw(int x,int y)` receives coordinates from individual Tree objects",
        "`TreeType` stores one static `lastX` for all uses",
        "Every TreeType must extend Tree",
        "`TreeType` contains mutable `int x,y` used by all trees"
      ],
      "correct": "A",
      "memo": "External coordinates allow one immutable shared TreeType to represent many positioned trees.",
      "snippet": "final class TreeType {\n private final String texture;\n TreeType(String texture) { this.texture = texture; }\n void draw(int x, int y) { /* render texture at x,y */ }\n}",
      "marks": 1
    },
    {
      "id": 82,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A simple arithmetic DSL already has NumberExpression and AddExpression. You need to interpret multiplication with correct nesting. What is a suitable extension?",
      "options": [
        "MultiplyExpression holding two Expression children",
        "Modify every NumberExpression to parse entire program source",
        "Replace Interpreter with an Observer list",
        "Make AddExpression subclass NumberExpression"
      ],
      "correct": "A",
      "memo": "MultiplyExpression is a nonterminal that composes child Expression nodes and multiplies their interpreted values.",
      "marks": 1
    },
    {
      "id": 83,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** A developer repeatedly calls `it.next()` but never checks `it.hasNext()`. What happens after all list items are consumed?",
      "options": [
        "The iterator automatically restarts",
        "Java compiles a new List",
        "next() always returns null",
        "next() typically throws NoSuchElementException"
      ],
      "correct": "D",
      "memo": "Iterator.next() throws NoSuchElementException when there are no more elements, per its contract.",
      "snippet": "Iterator<Integer> it = List.of(10).iterator();\nSystem.out.println(it.next());\nSystem.out.println(it.next());",
      "marks": 1
    },
    {
      "id": 84,
      "kind": "True or false",
      "prompt": "**True/False:** Visitor automatically traverses every element in a data structure even when no collection/tree traversal has been implemented.",
      "correct": "false",
      "memo": "False. Visiting operations and traversing a structure are separate responsibilities; the application must call accept on relevant elements.",
      "marks": 1
    },
    {
      "id": 85,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A factory builds an `EC2Config` Java object with a region and security group. Does `new EC2Config()` by itself launch a cloud VM?",
      "options": [
        "No Java program can launch an AWS VM",
        "Yes, Java automatically invokes AWS",
        "Only when the constructor or another invoked method actually calls a cloud SDK/API",
        "Yes, if the class contains the word EC2"
      ],
      "correct": "C",
      "memo": "Object construction is not infrastructure provisioning unless code actually performs the external SDK/API operation.",
      "marks": 1
    },
    {
      "id": 86,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A `ReportCreator` class owns a common `publishReport()` workflow that calls `createDocument()`. Which class should override `createDocument()` to make HTML documents?",
      "options": [
        "Document interface",
        "HtmlCreator subclass of ReportCreator",
        "Every caller of publishReport()",
        "The database entity for HTML"
      ],
      "correct": "B",
      "memo": "The concrete Creator overrides the factory hook and returns an HtmlDocument implementing the Document abstraction.",
      "marks": 1
    },
    {
      "id": 87,
      "kind": "True or false",
      "prompt": "**True/False:** A factory with `createVM()` and `createStorage()` must return the exact same Java class for both methods.",
      "correct": "false",
      "memo": "False. Different abstract product interfaces represent different kinds of resources.",
      "marks": 1
    },
    {
      "id": 88,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** Two contexts share one mutable policy with a counter. What does this code print?",
      "options": [
        "1 then 1",
        "1 then 2",
        "2 then 2",
        "It cannot compile because a strategy can't be shared"
      ],
      "correct": "B",
      "memo": "Both contexts refer to the same CounterPolicy, so its calls field increases across contexts.",
      "snippet": "interface Policy { int next(); }\nclass CounterPolicy implements Policy {\n int calls=0; public int next(){return ++calls;}\n}\nclass Job {\n private Policy policy;\n Job(Policy p){policy=p;}\n int run(){return policy.next();}\n}\nPolicy shared=new CounterPolicy();\nSystem.out.println(new Job(shared).run());\nSystem.out.println(new Job(shared).run());",
      "marks": 1
    },
    {
      "id": 89,
      "kind": "Multiple choice",
      "prompt": "**Compare:** A weather app broadcasts new temperature readings, then uses a chosen algorithm to compute tomorrow's forecast. Which two patterns apply?",
      "options": [
        "Observer for broadcasting; Strategy for algorithm selection",
        "Strategy for broadcasting; Factory for predictions",
        "Decorator for both",
        "Command for both"
      ],
      "correct": "A",
      "memo": "Observer notifies listeners of change; Strategy selects one interchangeable computation algorithm.",
      "marks": 1
    },
    {
      "id": 90,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** Two decorators log before/after a call. Outer wraps Inner wraps Base. Which sequence is correct?",
      "options": [
        "inner before, outer before, base, outer after, inner after",
        "outer before, outer after, inner before, inner after, base",
        "base, outer before, inner before, inner after, outer after",
        "outer before, inner before, base, inner after, outer after"
      ],
      "correct": "D",
      "memo": "Calls enter outer→inner→base and unwind inner→outer.",
      "snippet": "interface Worker { void run(); }\nclass Base implements Worker { public void run(){System.out.println(\"base\");} }\nclass Log implements Worker {\n private final Worker inner; private final String name;\n Log(Worker inner,String name){this.inner=inner;this.name=name;}\n public void run(){System.out.println(name+\" before\"); inner.run(); System.out.println(name+\" after\");}\n}\nnew Log(new Log(new Base(),\"inner\"),\"outer\").run();",
      "marks": 1
    },
    {
      "id": 91,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** What does the following code print? Assume no exceptions.",
      "options": [
        "Nothing, because commands cannot be stored",
        "A only",
        "A then B",
        "B then A"
      ],
      "correct": "C",
      "memo": "Commands are added in order and each execute() prints its own marker when the invoker iterates.",
      "snippet": "interface Command { void execute(); }\nclass PrintCommand implements Command {\n  private final String label;\n  PrintCommand(String label) { this.label = label; }\n  public void execute() { System.out.println(label); }\n}\nList<Command> queue = new ArrayList<>();\nqueue.add(new PrintCommand(\"A\"));\nqueue.add(new PrintCommand(\"B\"));\nfor (Command c : queue) c.execute();",
      "marks": 1
    },
    {
      "id": 92,
      "kind": "True or false",
      "prompt": "**True/False:** A refined abstraction in Bridge must directly inherit from a concrete Implementor class such as Television.",
      "correct": "false",
      "memo": "False. The refined abstraction extends the abstraction and delegates to an Implementor interface.",
      "marks": 1
    },
    {
      "id": 93,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** `HashMap.computeIfAbsent()` is used to cache reusable font styles. Multiple threads can call the factory simultaneously. What should the implementation consider?",
      "options": [
        "Prevent styles from being immutable",
        "HashMap is automatically safe for concurrent writes",
        "Use suitable synchronization or ConcurrentHashMap to protect shared cache access",
        "Make each glyph's x position static"
      ],
      "correct": "C",
      "memo": "Shared mutable caches require thread-safe access. A ConcurrentHashMap can coordinate map operations, but side effects in mapping functions still need care.",
      "marks": 1
    },
    {
      "id": 94,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** The text `\"2+3\"` arrives from a user. Your program already has expression classes and `interpret()` methods. What additional component may be needed to convert the raw text into expression objects?",
      "options": [
        "No component; Java automatically turns strings into your expression classes",
        "A tokenizer/parser producing an expression tree",
        "A command queue to execute SQL",
        "A decorator to add colors to the String"
      ],
      "correct": "B",
      "memo": "The Interpreter object model evaluates an AST; parsing/tokenization is a separate concern that may construct the tree.",
      "marks": 1
    },
    {
      "id": 95,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** Two clients iterate the same immutable list using two separately acquired iterators. One client consumes two items. What should happen to the other iterator?",
      "options": [
        "It keeps its independent cursor position",
        "Both are invalidated just because next() was called",
        "They must share a static index",
        "It also advances automatically"
      ],
      "correct": "A",
      "memo": "Separate Iterator objects have independent traversal state; one iterator advancing should not move another's cursor.",
      "marks": 1
    },
    {
      "id": 96,
      "kind": "Multiple choice",
      "prompt": "**Spot the bug:** An `ImageElement` accepts an ImageVisitor, but its accept method does nothing. What behavior is lost?",
      "options": [
        "The compiler always inserts visitor.visit(this)",
        "An Iterator must be constructed inside ImageElement",
        "The ImageElement automatically becomes abstract",
        "The visitor's image-specific operation never executes"
      ],
      "correct": "D",
      "memo": "Concrete elements should call visitor.visit(this) inside accept() to enable the visitor operation.",
      "snippet": "class ImageElement implements Element {\n public void accept(Visitor visitor) {\n   // mistakenly empty\n }\n}",
      "marks": 1
    },
    {
      "id": 97,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A VM factory generates inbound rules: SSH port 22 from `0.0.0.0/0`, HTTPS port 443 from the internet. Which rule is the primary least-privilege concern?",
      "options": [
        "The class name VMFactory",
        "Returning a VM interface",
        "HTTPS port 443 open publicly, always",
        "SSH port 22 open to all IPv4 addresses"
      ],
      "correct": "D",
      "memo": "Broad public SSH ingress significantly increases exposure; use restricted sources or managed access instead.",
      "marks": 1
    },
    {
      "id": 98,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** A method receives an interface reference and executes it. Which line prints when called with `new EmailCreator()`?",
      "options": [
        "Both outputs",
        "SMS",
        "EMAIL",
        "Nothing"
      ],
      "correct": "C",
      "memo": "The runtime object is EmailCreator, so its overridden create() method returns Email.",
      "snippet": "interface Message { String label(); }\nclass Email implements Message { public String label(){return \"EMAIL\";} }\ninterface Creator { Message create(); }\nclass EmailCreator implements Creator { public Message create(){return new Email();} }\nstatic void send(Creator c) { System.out.println(c.create().label()); }\nsend(new EmailCreator());",
      "marks": 1
    },
    {
      "id": 99,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** The interface says `VirtualMachine createVM()`. A concrete factory overrides with `EC2 createVM()`, and `EC2 implements VirtualMachine`. Is it legal?",
      "options": [
        "Only if the method is static",
        "Yes, Java supports covariant return types",
        "No, return types must always be identical",
        "No, interfaces cannot declare return types"
      ],
      "correct": "B",
      "memo": "An overriding method can narrow its return type to a subtype of the declared contract.",
      "snippet": "interface CloudFactory { VirtualMachine createVM(); }\nclass AWSFactory implements CloudFactory {\n public EC2 createVM(){ return new EC2(); }\n}",
      "marks": 1
    },
    {
      "id": 100,
      "kind": "True or false",
      "prompt": "**True/False:** Swapping a Java Strategy object around an AI API literally updates the neural model's trained weights.",
      "correct": "false",
      "memo": "False. Runtime wrapper/algorithm choices do not retrain model parameters.",
      "marks": 1
    },
    {
      "id": 101,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A medical appointment service sends private details to every subscribed listener, including public lobby displays. Which improvement is most important?",
      "options": [
        "Filter by authorization/preferences and share minimal event payloads",
        "Make update() static",
        "Store observers as Strings",
        "Send all data to all listeners and rely on their discretion"
      ],
      "correct": "A",
      "memo": "Push only information recipients may see; filtering/minimal payloads protect privacy.",
      "marks": 1
    },
    {
      "id": 102,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A video player uses a wrapper that delays creating the expensive player until first use, and another wrapper that adds optional captions. Which pairing is most accurate?",
      "options": [
        "Lazy wrapper is typically virtual Proxy; captions wrapper is Decorator",
        "Captions wrapper must be a Factory",
        "Neither can share an interface",
        "Both are necessarily Strategy"
      ],
      "correct": "A",
      "memo": "Proxy primarily controls access/lifecycle; Decorator adds an optional responsibility. Their structures can look similar.",
      "marks": 1
    },
    {
      "id": 103,
      "kind": "Multiple choice",
      "prompt": "**Spot the bug:** A command is supposed to be scheduled, not executed immediately. What is wrong with this constructor?",
      "options": [
        "The repository must be an interface",
        "Command cannot have an ID field",
        "Constructors must return void",
        "The operation runs during construction, before the invoker schedules it"
      ],
      "correct": "D",
      "memo": "Calling execute() in the constructor defeats deferred execution; store the dependencies and let the invoker call execute().",
      "snippet": "class DeleteUserCommand implements Command {\n  private final UserRepository repo;\n  private final int id;\n  DeleteUserCommand(UserRepository repo, int id) {\n    this.repo = repo; this.id = id;\n    execute(); // Problem\n  }\n  public void execute() { repo.deleteById(id); }\n}",
      "marks": 1
    },
    {
      "id": 104,
      "kind": "Multiple choice",
      "prompt": "**Spot the bug:** A controller uses `if (renderer instanceof SvgRenderer)` inside every Shape subclass despite the Renderer interface already exposing `drawCircle()`. What is the primary design issue?",
      "options": [
        "Bridge requires String returns",
        "The controller should add more instanceof cases",
        "It bypasses polymorphic delegation and couples shapes to concrete renderers",
        "The Renderer reference must be static"
      ],
      "correct": "C",
      "memo": "Let the renderer polymorphically perform its implementation operation instead of branching on concrete types.",
      "marks": 1
    },
    {
      "id": 105,
      "kind": "True or false",
      "prompt": "**True/False:** A Flyweight factory may use a cache indexed by the intrinsic properties that define a reusable object.",
      "correct": "true",
      "memo": "True. The cache maps an appropriate intrinsic-state key to a shared object.",
      "marks": 1
    },
    {
      "id": 106,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** A nonterminal expression chooses subtraction between two interpreted child nodes. What prints?",
      "options": [
        "6",
        "4",
        "10",
        "-4"
      ],
      "correct": "B",
      "memo": "The left child gives 7 and the right gives 3, so the expression returns 7-3=4.",
      "snippet": "interface Expr { int eval(); }\nrecord Literal(int value) implements Expr { public int eval(){return value;} }\nrecord Sub(Expr a,Expr b) implements Expr {\n public int eval(){return a.eval()-b.eval();}\n}\nSystem.out.println(new Sub(new Literal(7),new Literal(3)).eval());",
      "marks": 1
    },
    {
      "id": 107,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** What does this simple traversal print?",
      "options": [
        "3",
        "4",
        "5",
        "2"
      ],
      "correct": "B",
      "memo": "The while loop consumes 1, 2, 3 and 4, incrementing count four times.",
      "snippet": "Iterator<Integer> it = List.of(1,2,3,4).iterator();\nint count = 0;\nwhile (it.hasNext()) { it.next(); count++; }\nSystem.out.println(count);",
      "marks": 1
    },
    {
      "id": 108,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** A visitor records the sum of values from two NumberNode objects. What is printed?",
      "options": [
        "10",
        "0",
        "3",
        "7"
      ],
      "correct": "A",
      "memo": "The same visitor accumulates 3 then 7 in sum; visiting both yields 10.",
      "snippet": "interface Visitor { void visit(NumberNode n); }\nclass NumberNode {\n final int value;\n NumberNode(int v){value=v;}\n void accept(Visitor v){v.visit(this);}\n}\nclass SumVisitor implements Visitor {\n int sum=0;\n public void visit(NumberNode n){sum+=n.value;}\n}\nSumVisitor visitor=new SumVisitor();\nnew NumberNode(3).accept(visitor);\nnew NumberNode(7).accept(visitor);\nSystem.out.println(visitor.sum);",
      "marks": 1
    },
    {
      "id": 109,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** The factory's `default` branch returns `null`. A client immediately calls `vm.provision()`. What can happen for an unknown provider?",
      "options": [
        "The compiler replaces null with a default object",
        "The factory method becomes abstract",
        "The VM is automatically AWS",
        "A NullPointerException"
      ],
      "correct": "D",
      "memo": "For unsupported input `create` returns null and the subsequent invocation dereferences it.",
      "snippet": "static VM create(String provider) {\n switch(provider) {\n   case \"AWS\": return new EC2();\n   case \"AZURE\": return new AzureVM();\n   default: return null;\n }\n}\nVM vm = create(\"OTHER\");\nvm.provision();",
      "marks": 1
    },
    {
      "id": 110,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A developer creates `new CardFactory()` inside a supposedly provider-neutral checkout method. Which is the main design flaw?",
      "options": [
        "The Payment interface should be deleted",
        "It creates an object at runtime",
        "It hardcodes the provider and defeats substitutable creators",
        "Factory classes can never be instantiated"
      ],
      "correct": "C",
      "memo": "Injecting/receiving a factory parameter removes the checkout method's hard-coded provider dependency.",
      "marks": 1
    },
    {
      "id": 111,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A cloud API wrapper is created with `new EC2Resource()`. No SDK call occurs inside the constructor. Is the real VM already launched?",
      "options": [
        "Cloud creation is impossible from Java",
        "Yes, the type name EC2 is sufficient",
        "No; provisioning requires an actual cloud API operation",
        "Yes, if Factory was used"
      ],
      "correct": "C",
      "memo": "Instantiating a Java object is not the same as provisioning infrastructure.",
      "marks": 1
    },
    {
      "id": 112,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A retry policy changes while several network requests are in progress. Which precaution makes execution predictable?",
      "options": [
        "Mutate shared strategy state during every retry",
        "Snapshot an immutable retry strategy at each request's start",
        "Remove the strategy interface",
        "Assume all threads see a synchronized state automatically"
      ],
      "correct": "B",
      "memo": "Capture a consistent policy for a request and apply future updates at a clear boundary.",
      "marks": 1
    },
    {
      "id": 113,
      "kind": "True or false",
      "prompt": "**True/False:** A subject can store an Observer interface reference rather than referring to concrete email or mobile-notification classes.",
      "correct": "true",
      "memo": "True. The abstraction decouples publishers from notification implementations.",
      "marks": 1
    },
    {
      "id": 114,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** You need optional encryption and compression around a file writer. Which statement about layer order is safest?",
      "options": [
        "Compression then encryption can have different effects from encryption then compression",
        "The compiler always chooses the optimal order",
        "All decorators are applied in parallel",
        "Order never matters"
      ],
      "correct": "A",
      "memo": "Wrapper order determines execution order and may change output, performance or correctness.",
      "marks": 1
    },
    {
      "id": 115,
      "kind": "Multiple choice",
      "prompt": "**Spot the bug:** This implementation uses a local variable `repo` declared in the constructor but never saves it. What happens when execute() is called?",
      "options": [
        "The compiler requires every field final",
        "It runs correctly because local variables become fields",
        "The repository always comes from the invoker",
        "The field `repository` stays null, causing a NullPointerException"
      ],
      "correct": "D",
      "memo": "Constructor arguments must be assigned to the command's fields to preserve the receiver for later execution.",
      "snippet": "class GetUserCommand implements Command {\n  private UserRepository repository;\n  private int userId;\n  GetUserCommand(UserRepository repo, int id) {\n    userId = id; // forgot: repository = repo;\n  }\n  public void execute() { repository.getUser(userId); }\n}",
      "marks": 1
    },
    {
      "id": 116,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** Which constructor/field pair best supports independent Shape and Renderer variations?",
      "options": [
        "`Shape(String rendererName)` with a concrete switch in every subclass",
        "`Renderer(Shape shape)` with a Shape field in every renderer as the only link",
        "`Circle(SvgRenderer r)` with `private SvgRenderer renderer`",
        "`Shape(Renderer r)` with `protected final Renderer renderer`"
      ],
      "correct": "D",
      "memo": "The Abstraction stores the Implementor interface, allowing a Circle or Rectangle to work with any Renderer.",
      "snippet": "interface Renderer { void drawCircle(); }\nabstract class Shape {\n protected final Renderer renderer;\n Shape(Renderer renderer) { this.renderer = renderer; }\n abstract void draw();\n}\nclass Circle extends Shape {\n Circle(Renderer renderer) { super(renderer); }\n void draw() { renderer.drawCircle(); }\n}",
      "marks": 1
    },
    {
      "id": 117,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A shared TreeType instance is referenced by all trees of its species. The last tree is removed. Which statement is correct about memory lifetime?",
      "options": [
        "Java cannot reclaim Tree objects",
        "Flyweight must disappear immediately",
        "It may remain alive while the factory cache still holds a strong reference",
        "Removing one tree always empties the cache"
      ],
      "correct": "C",
      "memo": "The cache owns its references until eviction/clear or factory collection. Cache lifetime/eviction can matter.",
      "marks": 1
    },
    {
      "id": 118,
      "kind": "True or false",
      "prompt": "**True/False:** Terminal expressions typically represent basic grammar symbols, literals or variables in an Interpreter design.",
      "correct": "true",
      "memo": "True. Terminals are leaf concepts such as constants or variable references.",
      "marks": 1
    },
    {
      "id": 119,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A service should expose orders in chronological order without leaking whether they live in an array or linked list. Which element should callers rely on?",
      "options": [
        "A factory that returns Strings instead of orders",
        "A shared Iterator<Order> contract",
        "A public Node.next pointer",
        "The exact ArrayList index layout"
      ],
      "correct": "B",
      "memo": "Iterator decouples clients from the data structure and defines a sequence of elements.",
      "marks": 1
    },
    {
      "id": 120,
      "kind": "Multiple choice",
      "prompt": "**Compare:** A developer wants to attach optional logging around one Renderer; another wants to add several algorithms across stable Paragraph/Image/Heading classes. Which mapping is most accurate?",
      "options": [
        "Decorator for logging; Visitor for operations across element types",
        "Visitor for logging only; Flyweight for algorithms",
        "Bridge for both without interfaces",
        "Iterator for logging; Observer for every element operation"
      ],
      "correct": "A",
      "memo": "Decorator wraps an object to add behavior; Visitor defines extensible operations across an existing class hierarchy.",
      "marks": 1
    }
  ],
  "totalMarks": 120
};

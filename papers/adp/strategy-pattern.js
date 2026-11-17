window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-7-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 7,
  "title": "Strategy Pattern",
  "session": 1,
  "limitSeconds": 1800,
  "version": 3,
  "group": "design-patterns",
  "intro": "20 quick but challenging Strategy MCQs, Java debugging and true/false across pricing, image processing, routing and retries.",
  "source": "Original independent Java revision examples; algorithms are simplified for exam practice.",
  "questions": [
    {
      "id": 1,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A delivery app supports flat-rate, distance-based and express pricing algorithms. The Checkout class holds a `DeliveryStrategy`. Which design best matches Strategy?",
      "options": [
        "Every Strategy must store a Checkout object",
        "Checkout has a DeliveryStrategy reference and calls calculate() on it",
        "Every pricing strategy extends Checkout",
        "Checkout reimplements every algorithm in a massive switch"
      ],
      "correct": "B",
      "memo": "Strategy moves interchangeable algorithms behind a common contract and makes the context delegate to one selected strategy.",
      "marks": 1
    },
    {
      "id": 2,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A video editor can switch between high-quality and fast rendering at runtime. Which change is needed if it already uses a `RenderStrategy` field?",
      "options": [
        "Create a class for every editor/user combination",
        "Rewrite the entire Editor method",
        "Change the Editor's superclass",
        "Replace the strategy object via a setter or new context configuration"
      ],
      "correct": "D",
      "memo": "The context can change algorithms by replacing its strategy reference without changing its own class.",
      "marks": 1
    },
    {
      "id": 3,
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
      "id": 4,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** What prints when the context's selected strategy changes?",
      "options": [
        "FAST then SAFE",
        "SAFE then FAST",
        "FAST twice",
        "Compilation error"
      ],
      "correct": "A",
      "memo": "The context delegates to Fast, then after setStrategy() delegates to Safe.",
      "snippet": "interface Mode { String run(); }\nclass Fast implements Mode { public String run(){return \"FAST\";} }\nclass Safe implements Mode { public String run(){return \"SAFE\";} }\nclass Editor {\n private Mode mode;\n Editor(Mode m){mode=m;}\n void setMode(Mode m){mode=m;}\n String render(){return mode.run();}\n}\nEditor e = new Editor(new Fast());\nSystem.out.println(e.render());\ne.setMode(new Safe());\nSystem.out.println(e.render());",
      "marks": 1
    },
    {
      "id": 5,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** What is wrong with this context's `calculate()` implementation?",
      "options": [
        "A final strategy field prevents use",
        "Strategy methods must be static",
        "There is no interface type",
        "It recursively invokes itself rather than calling the strategy"
      ],
      "correct": "D",
      "memo": "The method causes unbounded recursion/StackOverflowError; it should delegate to `strategy.calculate(amount)`.",
      "snippet": "class Checkout {\n private final DiscountStrategy strategy;\n Checkout(DiscountStrategy s){strategy=s;}\n int calculate(int amount){return calculate(amount);}\n}",
      "marks": 1
    },
    {
      "id": 6,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A photo editor holds one `ResizeStrategy`. Which part should contain the algorithm implementing bicubic interpolation?",
      "options": [
        "The editor's toolbar",
        "A BicubicResizeStrategy implementing ResizeStrategy",
        "A subclass of every image file",
        "The repository that saves image metadata"
      ],
      "correct": "B",
      "memo": "Concrete strategies own algorithms while the editor is the context.",
      "marks": 1
    },
    {
      "id": 7,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** The same mutable `CounterStrategy` instance is injected into two separate reporting jobs. Each job calls it once. What is a possible risk?",
      "options": [
        "The two contexts share strategy state, which can affect outcomes",
        "Java makes the strategy static",
        "Interfaces cannot store fields",
        "Each context automatically copies its strategy"
      ],
      "correct": "A",
      "memo": "Two context objects may reference the same mutable strategy instance; use separate instances or immutable/thread-safe strategies if needed.",
      "marks": 1
    },
    {
      "id": 8,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A shopping cart could use one of two tax calculators, chosen at configuration time. What should the cart's field type ideally be?",
      "options": [
        "String with the calculator source code",
        "ConcreteTaxCalculatorA",
        "TaxStrategy interface",
        "Any random Object requiring casts"
      ],
      "correct": "C",
      "memo": "A strategy interface provides interchangeable algorithms without concrete coupling.",
      "marks": 1
    },
    {
      "id": 9,
      "kind": "Multiple choice",
      "prompt": "**Spot the design issue:** A developer creates `FastZipUploader`, `SlowZipUploader`, `FastGzipUploader`, and `SlowGzipUploader`. Speed policy and compression are independent. Which refactor reduces subclass combinations?",
      "options": [
        "Use separate compression and speed strategies composed into one Uploader",
        "Duplicate the same code across all combinations",
        "Replace the Uploader with a singleton",
        "Make each subclass abstract"
      ],
      "correct": "A",
      "memo": "Independent variation axes can be modeled as separate composed strategies rather than multiplying subclasses.",
      "marks": 1
    },
    {
      "id": 10,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A route planner always chooses one algorithm from shortest-distance, least-tolls and fastest-time. Which class is the **context**?",
      "options": [
        "Every route segment",
        "Only ShortestDistanceStrategy",
        "RoutePlanner, which stores and delegates to RouteStrategy",
        "The road database"
      ],
      "correct": "C",
      "memo": "The route planner is the context; concrete strategy implementations supply the alternative route-selection algorithms.",
      "marks": 1
    },
    {
      "id": 11,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** Two contexts share one mutable policy with a counter. What does this code print?",
      "options": [
        "2 then 2",
        "It cannot compile because a strategy can't be shared",
        "1 then 1",
        "1 then 2"
      ],
      "correct": "D",
      "memo": "Both contexts refer to the same CounterPolicy, so its calls field increases across contexts.",
      "snippet": "interface Policy { int next(); }\nclass CounterPolicy implements Policy {\n int calls=0; public int next(){return ++calls;}\n}\nclass Job {\n private Policy policy;\n Job(Policy p){policy=p;}\n int run(){return policy.next();}\n}\nPolicy shared=new CounterPolicy();\nSystem.out.println(new Job(shared).run());\nSystem.out.println(new Job(shared).run());",
      "marks": 1
    },
    {
      "id": 12,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A SearchResults screen sorts hotels by price or rating. The user toggles sorting using a dropdown. Where should user selection generally be translated into a concrete strategy?",
      "options": [
        "Only inside the SQL table definition",
        "In selection/controller or configuration logic, then set on Sorter",
        "Inside every Hotel class",
        "In a subclass of String"
      ],
      "correct": "B",
      "memo": "Input/configuration chooses a strategy; the sorter delegates without needing repeated sorting branch logic.",
      "marks": 1
    },
    {
      "id": 13,
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
      "id": 14,
      "kind": "Multiple choice",
      "prompt": "**Compare:** Which statement correctly contrasts Strategy and Decorator?",
      "options": [
        "Strategy chooses one algorithm; Decorator wraps a component to stack responsibilities",
        "Decorator has no composition and Strategy always subclasses the context",
        "Strategy necessarily stores a List of Observers",
        "They are both only object-creation patterns"
      ],
      "correct": "A",
      "memo": "Strategy selects an implementation for delegated behavior; Decorator wraps the component interface to add layers of functionality.",
      "marks": 1
    },
    {
      "id": 15,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An internal app has two fixed, tiny algorithms and no runtime selection or reuse. Which assessment is most sensible?",
      "options": [
        "One strategy must extend the other",
        "Strategy is mandatory for every if-statement",
        "A small conditional may be simpler until variation warrants Strategy",
        "Java cannot compile two alternatives in one class"
      ],
      "correct": "C",
      "memo": "Use Strategy when algorithm interchangeability, growth, testability or reuse justifies extra abstractions.",
      "marks": 1
    },
    {
      "id": 16,
      "kind": "True or false",
      "prompt": "**True/False:** The context often has a Strategy interface reference rather than inheriting all its concrete strategies.",
      "correct": "true",
      "memo": "True. The central relationship is HAS-A composition and delegation.",
      "marks": 1
    },
    {
      "id": 17,
      "kind": "True or false",
      "prompt": "**True/False:** Two objects can use the same concrete Strategy class without duplicating algorithm code in each context subclass.",
      "correct": "true",
      "memo": "True. Separate contexts can reuse one strategy implementation, possibly sharing instances if safe.",
      "marks": 1
    },
    {
      "id": 18,
      "kind": "True or false",
      "prompt": "**True/False:** A Strategy implementation must be an abstract class; Java interfaces cannot support dynamic dispatch.",
      "correct": "false",
      "memo": "False. Interfaces are common Strategy contracts, and implemented methods dispatch polymorphically.",
      "marks": 1
    },
    {
      "id": 19,
      "kind": "True or false",
      "prompt": "**True/False:** Swapping a Java Strategy object around an AI API literally updates the neural model's trained weights.",
      "correct": "false",
      "memo": "False. Runtime wrapper/algorithm choices do not retrain model parameters.",
      "marks": 1
    },
    {
      "id": 20,
      "kind": "True or false",
      "prompt": "**True/False:** Strategy requires the context to know every concrete algorithm's internal code.",
      "correct": "false",
      "memo": "False. The context operates through the common Strategy interface.",
      "marks": 1
    }
  ],
  "totalMarks": 20
};

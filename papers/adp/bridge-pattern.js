window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-11-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 11,
  "title": "Bridge Pattern",
  "session": 1,
  "limitSeconds": 1800,
  "version": 3,
  "group": "design-patterns",
  "intro": "20 self-contained Java Bridge questions: independent abstraction/implementation hierarchies, composition, code tracing and pitfalls. All automatically marked.",
  "source": "Original Java design-pattern practice; illustrative devices, renderers and notification systems.",
  "questions": [
    {
      "id": 1,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A home automation app has `BasicRemote` and `AdvancedRemote`, each able to operate `Television` and `Radio`. Both remote types and device types will expand independently. Which design best follows **Bridge**?",
      "options": [
        "Create BasicTelevisionRemote, BasicRadioRemote, AdvancedTelevisionRemote and AdvancedRadioRemote",
        "Have Remote hold a Device interface; concrete remotes and devices form separate hierarchies",
        "Make Radio inherit from AdvancedRemote",
        "Store a string device name and duplicate every action in a switch"
      ],
      "correct": "B",
      "memo": "Bridge separates an abstraction hierarchy (remotes) from an implementation hierarchy (devices). Remote holds a Device reference, so refinements and implementations evolve independently.",
      "marks": 1
    },
    {
      "id": 2,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An abstract `Shape` has a `Renderer renderer` field. Circle and Rectangle extend Shape; SVGRenderer and CanvasRenderer implement Renderer. Which class is the **implementation interface** in Bridge?",
      "options": [
        "Shape",
        "Circle",
        "Renderer",
        "Rectangle"
      ],
      "correct": "C",
      "memo": "Renderer is the Implementor interface; Shape is the Abstraction which delegates rendering to a Renderer.",
      "marks": 1
    },
    {
      "id": 3,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A design supports 4 report layouts and 3 output engines. All combinations are valid. With a Bridge-style composition, roughly how many distinct concrete layout/engine classes are required instead of 12 combined subclasses?",
      "options": [
        "7 concrete classes: four layouts and three engines, plus shared abstractions",
        "12 combined subclasses are still required",
        "One subclass for each layout-engine pair and a new iterator",
        "24 classes because Bridge always doubles the count"
      ],
      "correct": "A",
      "memo": "Two independent hierarchies need 4 layout implementations plus 3 engines, not every product combination. Interfaces/base abstractions add separate types.",
      "marks": 1
    },
    {
      "id": 4,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** `Remote` stores a `Device` reference and calls the device's implementation. What prints?",
      "options": [
        "TV ON",
        "RADIO ON",
        "REMOTE ON",
        "Nothing; an interface reference can't invoke methods"
      ],
      "correct": "B",
      "memo": "The remote delegates to the Radio instance passed in. Runtime dispatch calls Radio.turnOn().",
      "snippet": "interface Device { String turnOn(); }\nclass TV implements Device { public String turnOn() {return \"TV ON\";} }\nclass Radio implements Device { public String turnOn() {return \"RADIO ON\";} }\nclass Remote {\n  private final Device device;\n  Remote(Device device) { this.device = device; }\n  String power() { return device.turnOn(); }\n}\nSystem.out.println(new Remote(new Radio()).power());",
      "marks": 1
    },
    {
      "id": 5,
      "kind": "Multiple choice",
      "prompt": "**Spot the design error:** A `Remote` is supposed to operate any Device implementation. Why is this field declaration restrictive?",
      "options": [
        "`private` fields are not allowed in Bridge",
        "It depends on TV rather than the common Device interface",
        "A remote must extend TV instead",
        "The constructor cannot store references"
      ],
      "correct": "B",
      "memo": "The Abstraction should hold the Implementor interface (Device), not a concrete TV. Otherwise it cannot compose different devices without change.",
      "snippet": "class Remote {\n  private final TV device;\n  Remote(TV device) { this.device = device; }\n  void power() { device.turnOn(); }\n}",
      "marks": 1
    },
    {
      "id": 6,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A Bridge separates `Notification` (EmailNotification, AlertNotification) from `Sender` (SmsSender, PushSender). What usually changes when a new `WhatsAppSender` is introduced?",
      "options": [
        "All Notification subclasses must be duplicated",
        "Implement Sender with a WhatsAppSender, then inject it into existing notifications",
        "Convert every Notification to a subclass of WhatsAppSender",
        "Rewrite the Notification abstract methods to call WhatsApp directly"
      ],
      "correct": "B",
      "memo": "The new implementation belongs to the Sender hierarchy; existing abstractions can use it through composition.",
      "marks": 1
    },
    {
      "id": 7,
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
      "id": 8,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A shape's `draw()` behavior must work with both SVG and Canvas rendering, and new shapes will be added. Which relationship is the core Bridge?",
      "options": [
        "Shape inherits SVGRenderer",
        "Shape HAS a Renderer interface reference",
        "CanvasRenderer inherits Circle",
        "Shape must use an Observer list"
      ],
      "correct": "B",
      "memo": "Bridge uses composition from Abstraction to Implementor; subclasses refine each hierarchy independently.",
      "marks": 1
    },
    {
      "id": 9,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** Two renderers interpret the same draw call differently. What prints?",
      "options": [
        "SVG circle then ASCII circle",
        "SVG circle twice",
        "ASCII circle twice",
        "Compilation error because both implementations share an interface"
      ],
      "correct": "A",
      "memo": "The first Circle wraps SvgRenderer and the second wraps AsciiRenderer; each delegates drawCircle() to its own renderer.",
      "snippet": "interface Renderer { String drawCircle(); }\nclass SvgRenderer implements Renderer { public String drawCircle(){ return \"SVG circle\"; } }\nclass AsciiRenderer implements Renderer { public String drawCircle(){ return \"ASCII circle\"; } }\nclass Circle {\n private final Renderer renderer;\n Circle(Renderer renderer){this.renderer=renderer;}\n String draw(){return renderer.drawCircle();}\n}\nSystem.out.println(new Circle(new SvgRenderer()).draw());\nSystem.out.println(new Circle(new AsciiRenderer()).draw());",
      "marks": 1
    },
    {
      "id": 10,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A reviewer calls a Bridge-style report system 'just Strategy'. Which distinction is most helpful?",
      "options": [
        "Strategy cannot use interfaces",
        "Bridge explicitly separates two independently extensible hierarchies; Strategy focuses on interchangeable algorithms for one context",
        "Bridge requires all methods to be static",
        "Strategy always stores a List of strategies"
      ],
      "correct": "B",
      "memo": "Both can use composition; their intent differs. Bridge decouples abstraction and implementation hierarchies; Strategy exchanges an algorithm/policy.",
      "marks": 1
    },
    {
      "id": 11,
      "kind": "Multiple choice",
      "prompt": "**Spot the bug:** A controller uses `if (renderer instanceof SvgRenderer)` inside every Shape subclass despite the Renderer interface already exposing `drawCircle()`. What is the primary design issue?",
      "options": [
        "The controller should add more instanceof cases",
        "It bypasses polymorphic delegation and couples shapes to concrete renderers",
        "The Renderer reference must be static",
        "Bridge requires String returns"
      ],
      "correct": "B",
      "memo": "Let the renderer polymorphically perform its implementation operation instead of branching on concrete types.",
      "marks": 1
    },
    {
      "id": 12,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A payment interface has `OnlineCheckout` and `KioskCheckout` workflows and `StripeProcessor` and `BankTransferProcessor` implementation objects. Which assignment of Bridge roles makes sense?",
      "options": [
        "Checkout = Abstraction; Processor = Implementor",
        "Processor = Abstraction; Java = Implementor",
        "KioskCheckout = Concrete Visitor",
        "StripeProcessor = Observer"
      ],
      "correct": "A",
      "memo": "Checkout variants define high-level operations and hold a Processor abstraction that performs processor-specific work.",
      "marks": 1
    },
    {
      "id": 13,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A Bridge design lets callers switch from one implementation object to another, but a developer exposes a getter and directly mutates a shared mutable implementation across multiple abstractions. What should they consider?",
      "options": [
        "Bridge ensures thread safety by definition",
        "Sharing mutable implementation state can cause coupling and require isolation/synchronization",
        "Java duplicates all objects automatically",
        "Remote objects cannot share a Device"
      ],
      "correct": "B",
      "memo": "Composition does not make shared mutable objects safe; manage ownership and concurrency explicitly.",
      "marks": 1
    },
    {
      "id": 14,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A legacy audio library has an incompatible `playLegacy()` signature while your Bridge uses `Device.play()`. What may be needed first to connect it?",
      "options": [
        "An Adapter implementing Device and translating to playLegacy()",
        "A Visitor over all shapes",
        "A static factory that always returns null",
        "An Iterator with remove()"
      ],
      "correct": "A",
      "memo": "Adapter translates an incompatible existing API to the Implementor contract; then Bridge can use it.",
      "marks": 1
    },
    {
      "id": 15,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** Which constructor/field pair best supports independent Shape and Renderer variations?",
      "options": [
        "`Circle(SvgRenderer r)` with `private SvgRenderer renderer`",
        "`Shape(Renderer r)` with `protected final Renderer renderer`",
        "`Shape(String rendererName)` with a concrete switch in every subclass",
        "`Renderer(Shape shape)` with a Shape field in every renderer as the only link"
      ],
      "correct": "B",
      "memo": "The Abstraction stores the Implementor interface, allowing a Circle or Rectangle to work with any Renderer.",
      "snippet": "interface Renderer { void drawCircle(); }\nabstract class Shape {\n protected final Renderer renderer;\n Shape(Renderer renderer) { this.renderer = renderer; }\n abstract void draw();\n}\nclass Circle extends Shape {\n Circle(Renderer renderer) { super(renderer); }\n void draw() { renderer.drawCircle(); }\n}",
      "marks": 1
    },
    {
      "id": 16,
      "kind": "True or false",
      "prompt": "**True/False:** Bridge is useful when two dimensions of variation should develop independently instead of creating a subclass for every combination.",
      "correct": "true",
      "memo": "True. It decouples two hierarchies and composes their objects.",
      "marks": 1
    },
    {
      "id": 17,
      "kind": "True or false",
      "prompt": "**True/False:** A refined abstraction in Bridge must directly inherit from a concrete Implementor class such as Television.",
      "correct": "false",
      "memo": "False. The refined abstraction extends the abstraction and delegates to an Implementor interface.",
      "marks": 1
    },
    {
      "id": 18,
      "kind": "True or false",
      "prompt": "**True/False:** Bridge and Decorator both can contain a reference to another object, but their design intentions are different.",
      "correct": "true",
      "memo": "True. Bridge separates abstraction from implementation; Decorator adds optional responsibilities around the same component interface.",
      "marks": 1
    },
    {
      "id": 19,
      "kind": "True or false",
      "prompt": "**True/False:** Adding a new renderer in a well-structured Bridge necessarily requires adding a new Circle subclass for that renderer.",
      "correct": "false",
      "memo": "False. Existing Shape subclasses can use the new Renderer implementation through composition.",
      "marks": 1
    },
    {
      "id": 20,
      "kind": "True or false",
      "prompt": "**True/False:** A Bridge implementation reference can be injected through a Java constructor instead of being created inside the abstraction.",
      "correct": "true",
      "memo": "True. Constructor injection is a common way to compose the abstraction with a suitable implementation.",
      "marks": 1
    }
  ],
  "totalMarks": 20
};

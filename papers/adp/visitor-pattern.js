window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-15-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 15,
  "title": "Visitor Pattern",
  "session": 1,
  "limitSeconds": 1800,
  "version": 3,
  "group": "design-patterns",
  "intro": "20 Java Visitor MCQs and true/false on double dispatch, visit/accept, stable elements, new operations and code tracing.",
  "source": "Original Java pattern practice using expression trees, documents, payroll, media and logging examples.",
  "questions": [
    {
      "id": 1,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A compiler has `NumberNode`, `AddNode` and `VariableNode` classes. Developers keep adding operations: print the tree, calculate statistics and check variable usage. The node classes should not gain a new method for every operation. Which pattern best fits?",
      "options": [
        "Flyweight",
        "Visitor",
        "Iterator only",
        "Simple Factory"
      ],
      "correct": "B",
      "memo": "Visitor moves operations into visitor classes while each element accepts a visitor, making new operations easier across a stable element hierarchy.",
      "marks": 1
    },
    {
      "id": 2,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** `Element.accept(Visitor v)` is implemented in a concrete `Circle` as `v.visit(this)`. Why is the `accept` call important?",
      "options": [
        "It forces every element to store a List of visitors",
        "It allows the concrete element class to select the matching overloaded visit(Circle) method",
        "It automatically visits every element in a collection",
        "It removes the need for a Visitor interface"
      ],
      "correct": "B",
      "memo": "Inside Circle.accept, `this` has static type Circle, so the overload visit(Circle) is chosen; visitor implementation then dispatches dynamically.",
      "marks": 1
    },
    {
      "id": 3,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A document AST has Paragraph and Image elements. A visitor interface has `visit(Paragraph)` and `visit(Image)`. Which new requirement is usually easiest to add?",
      "options": [
        "A new Table element type with no visitor changes",
        "A new ExportToMarkdownVisitor implementing both visit methods",
        "Removing the accept method from all nodes",
        "A completely different element contract for each operation"
      ],
      "correct": "B",
      "memo": "Adding an operation means implementing a new concrete visitor for the existing stable element types.",
      "marks": 1
    },
    {
      "id": 4,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** The same AST adds a brand-new `Table` element. What is an expected maintenance cost of Visitor?",
      "options": [
        "No visitor needs to know about Table",
        "The Visitor interface and existing concrete visitors typically need a visit(Table) case",
        "All other elements must inherit Table",
        "The collection must become a HashMap"
      ],
      "correct": "B",
      "memo": "Visitor trades easier new operations for harder new element types; every visitor may need handling for newly introduced elements.",
      "marks": 1
    },
    {
      "id": 5,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** A NumberNode accepts a PrintVisitor. What prints?",
      "options": [
        "NUMBER",
        "GENERIC",
        "Nothing",
        "The program cannot compile because Visitor interfaces cannot be overloaded"
      ],
      "correct": "A",
      "memo": "NumberNode.accept invokes visit(NumberNode) and PrintVisitor prints NUMBER.",
      "snippet": "interface Node { void accept(NodeVisitor visitor); }\ninterface NodeVisitor { void visit(NumberNode n); }\nclass NumberNode implements Node {\n public void accept(NodeVisitor v) { v.visit(this); }\n}\nclass PrintVisitor implements NodeVisitor {\n public void visit(NumberNode n) { System.out.println(\"NUMBER\"); }\n}\nnew NumberNode().accept(new PrintVisitor());",
      "marks": 1
    },
    {
      "id": 6,
      "kind": "Multiple choice",
      "prompt": "**Spot the bug:** An `ImageElement` accepts an ImageVisitor, but its accept method does nothing. What behavior is lost?",
      "options": [
        "The ImageElement automatically becomes abstract",
        "The visitor's image-specific operation never executes",
        "The compiler always inserts visitor.visit(this)",
        "An Iterator must be constructed inside ImageElement"
      ],
      "correct": "B",
      "memo": "Concrete elements should call visitor.visit(this) inside accept() to enable the visitor operation.",
      "snippet": "class ImageElement implements Element {\n public void accept(Visitor visitor) {\n   // mistakenly empty\n }\n}",
      "marks": 1
    },
    {
      "id": 7,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A payroll domain has `SalariedEmployee` and `HourlyEmployee`. Both implement `Employee.accept(visitor)`. Payroll tax and reporting calculations change frequently while employee types rarely change. Why might Visitor help?",
      "options": [
        "It makes all tax operations the same method on the employees",
        "Each operation can live in its own visitor while employee classes remain stable",
        "It eliminates the need to know which employee type is visited",
        "It replaces all domain values with static fields"
      ],
      "correct": "B",
      "memo": "Visitors encapsulate distinct operations on stable element types, separating responsibilities from element classes.",
      "marks": 1
    },
    {
      "id": 8,
      "kind": "Multiple choice",
      "prompt": "**Compare:** A syntax-tree processing application has a DFS iterator and a node-type-specific EvaluationVisitor. What does each chiefly control?",
      "options": [
        "Iterator chooses visit(Circle) overload; Visitor controls cursor position",
        "Iterator controls traversal order; Visitor defines type-specific actions on nodes",
        "Both only create nodes",
        "Visitor is the database repository"
      ],
      "correct": "B",
      "memo": "Iterator traverses a collection/tree. Visitor defines operations performed on different element types, often invoked during traversal.",
      "marks": 1
    },
    {
      "id": 9,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** A visitor records the sum of values from two NumberNode objects. What is printed?",
      "options": [
        "3",
        "7",
        "10",
        "0"
      ],
      "correct": "C",
      "memo": "The same visitor accumulates 3 then 7 in sum; visiting both yields 10.",
      "snippet": "interface Visitor { void visit(NumberNode n); }\nclass NumberNode {\n final int value;\n NumberNode(int v){value=v;}\n void accept(Visitor v){v.visit(this);}\n}\nclass SumVisitor implements Visitor {\n int sum=0;\n public void visit(NumberNode n){sum+=n.value;}\n}\nSumVisitor visitor=new SumVisitor();\nnew NumberNode(3).accept(visitor);\nnew NumberNode(7).accept(visitor);\nSystem.out.println(visitor.sum);",
      "marks": 1
    },
    {
      "id": 10,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A Visitor has overloads `visit(Book)` and `visit(Movie)`. A generic `Media` variable references a Book. Which call most reliably selects `visit(Book)` **without casting**?",
      "options": [
        "Calling visitor.visit(media) where Media has no matching visit overload",
        "Calling media.accept(visitor) where Book.accept passes its own `this`",
        "Using visitor.toString()",
        "Calling new Visitor() on the Media interface"
      ],
      "correct": "B",
      "memo": "Concrete accept implementations supply `this` with concrete compile-time type, enabling the matching overloaded visit method.",
      "marks": 1
    },
    {
      "id": 11,
      "kind": "Multiple choice",
      "prompt": "**Spot the Java behavior:** The compiler chooses overloaded `visit(Book)` or `visit(Movie)` based on the **static parameter type** at the call site. Why can calling `visitor.visit(media)` be insufficient when media has the base type Media?",
      "options": [
        "Java overloading selects methods by runtime type only",
        "An overload visit(Media) would be chosen at compile time; concrete accept() enables the specific overload",
        "The JVM cannot dispatch interface calls",
        "Visitor never uses overloading"
      ],
      "correct": "B",
      "memo": "Java overloading resolution uses static types; Visitor's double dispatch combines a virtual accept call with a visit overload chosen within a concrete accept method.",
      "marks": 1
    },
    {
      "id": 12,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A company adds an `XmlExportVisitor` for Paragraph, Heading and Image document nodes. What should its methods typically do?",
      "options": [
        "Build XML representations for each concrete node type",
        "Create a fresh document subclass for every node",
        "Control the Iterator's hasNext() state",
        "Change every existing node's superclass"
      ],
      "correct": "A",
      "memo": "Each visit(NodeType) implements the new operation's behavior for that element kind.",
      "marks": 1
    },
    {
      "id": 13,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A visitor traverses a tree with child nodes. Does the Visitor pattern automatically determine whether traversal is depth-first or breadth-first?",
      "options": [
        "Yes, visitors always use DFS",
        "No, traversal order is controlled by the tree traversal/accept implementation or Iterator",
        "Yes, visitors always use BFS",
        "The JVM sorts nodes alphabetically"
      ],
      "correct": "B",
      "memo": "Visitor concerns operations per element type; traversal order must be defined separately and may be controlled by composite accept methods or iterators.",
      "marks": 1
    },
    {
      "id": 14,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A `ValidationVisitor` stores a mutable list of errors, and two requests reuse the same visitor instance simultaneously. What is a risk?",
      "options": [
        "All visitors are automatically thread-safe",
        "Results from different requests may leak/interleave unless state is isolated or synchronized",
        "Visitor cannot have fields",
        "The element hierarchy becomes a Factory"
      ],
      "correct": "B",
      "memo": "A stateful visitor accumulates results and requires per-request instances or safe concurrency and lifecycle management.",
      "marks": 1
    },
    {
      "id": 15,
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
    },
    {
      "id": 16,
      "kind": "True or false",
      "prompt": "**True/False:** In a typical Java Visitor design, each concrete Element implements accept(Visitor) and calls visitor.visit(this).",
      "correct": "true",
      "memo": "True. The concrete element supplies its own type to select the matching visit overload.",
      "marks": 1
    },
    {
      "id": 17,
      "kind": "True or false",
      "prompt": "**True/False:** Visitor makes adding new element types easier than adding new operations in most classic implementations.",
      "correct": "false",
      "memo": "False. Visitor is generally easier to extend with new operations; new element types require changing the visitor contract and implementations.",
      "marks": 1
    },
    {
      "id": 18,
      "kind": "True or false",
      "prompt": "**True/False:** Visitor is often described as using double dispatch because the concrete element and visitor implementation both affect the operation executed.",
      "correct": "true",
      "memo": "True. Virtual accept dispatch and concrete visit overload/implementation combine to select behavior.",
      "marks": 1
    },
    {
      "id": 19,
      "kind": "True or false",
      "prompt": "**True/False:** A Visitor can accumulate state such as totals or validation errors while visiting multiple elements.",
      "correct": "true",
      "memo": "True. Visitors can hold results such as a sum or list of validation problems, though shared mutable instances need care.",
      "marks": 1
    },
    {
      "id": 20,
      "kind": "True or false",
      "prompt": "**True/False:** Visitor automatically traverses every element in a data structure even when no collection/tree traversal has been implemented.",
      "correct": "false",
      "memo": "False. Visiting operations and traversing a structure are separate responsibilities; the application must call accept on relevant elements.",
      "marks": 1
    }
  ],
  "totalMarks": 20
};

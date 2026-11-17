window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-13-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 13,
  "title": "Interpreter Pattern",
  "session": 1,
  "limitSeconds": 1800,
  "version": 3,
  "group": "design-patterns",
  "intro": "20 short Java Interpreter questions on grammars, terminal/nonterminal expressions, expression-tree evaluation, parsing and pitfalls.",
  "source": "Original Java pattern practice using arithmetic and permissions DSL examples; Java record code assumes Java 17+.",
  "questions": [
    {
      "id": 1,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A calculator accepts expressions like `2 + 3` or `4 * 5`. An expression tree contains NumberExpression, AddExpression and MultiplyExpression classes implementing `Expression.interpret()`. Which pattern is this?",
      "options": [
        "Interpreter",
        "Bridge",
        "Flyweight",
        "Observer"
      ],
      "correct": "A",
      "memo": "Interpreter represents a simple language's grammar as expression objects with interpretation behavior.",
      "marks": 1
    },
    {
      "id": 2,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A permission rule language supports `ADMIN`, `MEMBER` and boolean `AND` expressions. Which is a **terminal expression**?",
      "options": [
        "A list of visitor operations",
        "AndExpression combining two rules",
        "RoleExpression(\"ADMIN\") that evaluates one role token",
        "The entire rule tree"
      ],
      "correct": "C",
      "memo": "A terminal expression handles a basic symbol/literal; a nonterminal expression composes child expressions based on a grammar rule.",
      "marks": 1
    },
    {
      "id": 3,
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
      "id": 4,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** What does the expression tree evaluate to?",
      "options": [
        "21",
        "7",
        "3",
        "15"
      ],
      "correct": "D",
      "memo": "AddExpression interprets its two child NumberExpressions and sums 7 + 8 = 15.",
      "snippet": "interface Expr { int interpret(); }\nclass NumberExpr implements Expr {\n private final int n;\n NumberExpr(int n){this.n=n;}\n public int interpret(){return n;}\n}\nclass AddExpr implements Expr {\n private final Expr left,right;\n AddExpr(Expr a,Expr b){left=a;right=b;}\n public int interpret(){return left.interpret()+right.interpret();}\n}\nExpr tree = new AddExpr(new NumberExpr(7),new NumberExpr(8));\nSystem.out.println(tree.interpret());",
      "marks": 1
    },
    {
      "id": 5,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An interpreter evaluates `x + 2`, but x varies for each user. What should a variable-expression node receive or access when interpreting?",
      "options": [
        "Only a static global integer x for all users",
        "A Visitor which must create a new grammar",
        "A context/environment mapping variable names to values",
        "A new subclass for every possible value of x"
      ],
      "correct": "C",
      "memo": "An interpretation context supplies external values, such as Map<String,Integer> for variables, without encoding each user's state into expression classes.",
      "marks": 1
    },
    {
      "id": 6,
      "kind": "Multiple choice",
      "prompt": "**Spot the bug:** An `AndExpression` has a left and right child and should require both true. What is wrong with the implementation?",
      "options": [
        "The `||` operator implements OR instead of AND",
        "The children must be Strings",
        "Expression cannot return boolean",
        "Using interfaces"
      ],
      "correct": "A",
      "memo": "AND should use `&&` for conjunction; `||` wrongly accepts either child being true.",
      "snippet": "interface Rule { boolean interpret(); }\nclass AndExpr implements Rule {\n private final Rule left, right;\n AndExpr(Rule l,Rule r){left=l;right=r;}\n public boolean interpret(){return left.interpret() || right.interpret();}\n}",
      "marks": 1
    },
    {
      "id": 7,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A simple arithmetic DSL already has NumberExpression and AddExpression. You need to interpret multiplication with correct nesting. What is a suitable extension?",
      "options": [
        "Modify every NumberExpression to parse entire program source",
        "Replace Interpreter with an Observer list",
        "Make AddExpression subclass NumberExpression",
        "MultiplyExpression holding two Expression children"
      ],
      "correct": "D",
      "memo": "MultiplyExpression is a nonterminal that composes child Expression nodes and multiplies their interpreted values.",
      "marks": 1
    },
    {
      "id": 8,
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
      "id": 9,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** A nonterminal expression chooses subtraction between two interpreted child nodes. What prints?",
      "options": [
        "10",
        "-4",
        "6",
        "4"
      ],
      "correct": "D",
      "memo": "The left child gives 7 and the right gives 3, so the expression returns 7-3=4.",
      "snippet": "interface Expr { int eval(); }\nrecord Literal(int value) implements Expr { public int eval(){return value;} }\nrecord Sub(Expr a,Expr b) implements Expr {\n public int eval(){return a.eval()-b.eval();}\n}\nSystem.out.println(new Sub(new Literal(7),new Literal(3)).eval());",
      "marks": 1
    },
    {
      "id": 10,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A team designs a tiny query filter language: `Status(\"ACTIVE\")`, `And(a,b)`, and `Or(a,b)`. Which design choice reflects recursive grammar composition?",
      "options": [
        "Expressions may not be nested",
        "Each nonterminal holds other Expression objects and delegates interpretation to them",
        "Every rule is hard-coded in one thousand-line switch",
        "Every terminal creates a database connection"
      ],
      "correct": "B",
      "memo": "Composite nonterminal expression nodes can contain terminals or other nonterminals, mirroring a grammar.",
      "marks": 1
    },
    {
      "id": 11,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A complex programming language requires precedence, hundreds of grammar rules, optimized compilation and detailed syntax errors. What is a likely limit of using a class for every Interpreter grammar production?",
      "options": [
        "Every grammar symbol must be a singleton",
        "It eliminates all complexity",
        "Class proliferation and parsing complexity can make parser generators/interpreters preferable",
        "Java interfaces prevent recursion"
      ],
      "correct": "C",
      "memo": "Interpreter is well suited to small grammars; large languages often need dedicated parser/compiler infrastructure.",
      "marks": 1
    },
    {
      "id": 12,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An expression tree represents an untrusted formula provided by users. Which security rule is most important?",
      "options": [
        "Parse and evaluate only permitted grammar/operations with limits, rather than executing arbitrary Java",
        "Store passwords in terminal nodes",
        "Disable all expression validation",
        "Treat all user text as trusted Java code"
      ],
      "correct": "A",
      "memo": "A controlled DSL should validate operators/tokens and resource limits; arbitrary code execution is dangerous.",
      "marks": 1
    },
    {
      "id": 13,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A reporting tool represents boolean rules as objects, and the same rule tree is evaluated for two different users. How should user attributes usually be supplied?",
      "options": [
        "Via a separate context per evaluation",
        "By mutating a shared singleton with user attributes",
        "By hardcoding the first user's role into all terminals",
        "Via a new interface for every user"
      ],
      "correct": "A",
      "memo": "Separate contexts allow one reusable rule tree to evaluate different users without shared mutable per-user state.",
      "marks": 1
    },
    {
      "id": 14,
      "kind": "Multiple choice",
      "prompt": "**Compare:** An expression tree uses Composite structure (`Add` has two `Expression` children). Does that automatically make it only Composite rather than Interpreter?",
      "options": [
        "Yes, Interpreter forbids child references",
        "No, every recursive tree must be Iterator",
        "Yes, all trees are only Composite",
        "No; Composite-like structure can implement an Interpreter grammar and interpretation semantics"
      ],
      "correct": "D",
      "memo": "Interpreter often uses composite trees, but its purpose is representing and evaluating language grammar rules.",
      "marks": 1
    },
    {
      "id": 15,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** A VariableExpr reads from a context map. What happens if variable x is not present and the code immediately unboxes the returned Integer?",
      "options": [
        "It automatically assumes zero",
        "A NullPointerException can occur; missing variables should be handled explicitly",
        "The map creates x automatically",
        "It becomes a valid grammar terminal without a value"
      ],
      "correct": "B",
      "memo": "Map.get can return null, and unboxing a null Integer throws NullPointerException. Validate missing symbols and produce a clear error.",
      "snippet": "class VariableExpr {\n private final String name;\n VariableExpr(String name){this.name=name;}\n int interpret(Map<String,Integer> vars){\n  return vars.get(name); // null auto-unboxed if key missing\n }\n}",
      "marks": 1
    },
    {
      "id": 16,
      "kind": "True or false",
      "prompt": "**True/False:** Terminal expressions typically represent basic grammar symbols, literals or variables in an Interpreter design.",
      "correct": "true",
      "memo": "True. Terminals are leaf concepts such as constants or variable references.",
      "marks": 1
    },
    {
      "id": 17,
      "kind": "True or false",
      "prompt": "**True/False:** Nonterminal expressions cannot hold other expressions or call their interpretation methods.",
      "correct": "false",
      "memo": "False. Nonterminals such as AddExpression recursively evaluate child expressions.",
      "marks": 1
    },
    {
      "id": 18,
      "kind": "True or false",
      "prompt": "**True/False:** Building an expression tree and evaluating the tree are always the same operation with no parsing stage.",
      "correct": "false",
      "memo": "False. Parsing text into an AST and interpreting the AST can be separate activities.",
      "marks": 1
    },
    {
      "id": 19,
      "kind": "True or false",
      "prompt": "**True/False:** The Interpreter pattern is often more suitable for small, well-defined languages than for huge general-purpose grammars.",
      "correct": "true",
      "memo": "True. Large grammars can make class-per-rule designs unwieldy.",
      "marks": 1
    },
    {
      "id": 20,
      "kind": "True or false",
      "prompt": "**True/False:** Different evaluation contexts can give a variable expression different values without requiring a new Expression subclass.",
      "correct": "true",
      "memo": "True. Context maps provide variable values to otherwise reusable expression objects.",
      "marks": 1
    }
  ],
  "totalMarks": 20
};

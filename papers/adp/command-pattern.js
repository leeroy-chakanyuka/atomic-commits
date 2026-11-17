window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-10-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 10,
  "title": "Command Pattern",
  "session": 1,
  "limitSeconds": 1800,
  "version": 3,
  "group": "design-patterns",
  "intro": "20 short, contextual Command questions. Harder MCQs, Java code spotting and true/false; one mark each. Automatically marked.",
  "source": "Original Java Command-pattern revision questions. Examples illustrate repositories, toolbar actions, queues, undo and idempotency.",
  "questions": [
    {
      "id": 1,
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
      "id": 2,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A photo editor supports `CropCommand`, `RotateCommand` and `ResizeCommand`. Each implements `Command.execute()`. What should the toolbar's button depend on?",
      "options": [
        "The concrete CropCommand class only",
        "The common Command interface",
        "The concrete Image class's constructor",
        "A switch inside the Image object"
      ],
      "correct": "B",
      "memo": "The button (invoker) should invoke a Command through the common interface; separate concrete commands know the operations.",
      "marks": 1
    },
    {
      "id": 3,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An order application creates `CancelOrderCommand(orderService, 105)`. Who is the **receiver**?",
      "options": [
        "The queue that stores commands",
        "The `orderService` that performs the actual cancellation",
        "The Cancel button",
        "The order ID"
      ],
      "correct": "B",
      "memo": "The receiver performs the underlying work; the command wraps the call and the invoker decides when to execute.",
      "marks": 1
    },
    {
      "id": 4,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A scheduling system holds `List<Command>` and calls `execute()` on each at midnight. What is the queue's design-pattern role?",
      "options": [
        "ConcreteCommand",
        "Receiver",
        "Invoker",
        "Product factory"
      ],
      "correct": "C",
      "memo": "The invoker triggers commands without needing to know their operation-specific details.",
      "marks": 1
    },
    {
      "id": 5,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A command queue stores three independent `GetUserCommand` objects for IDs 1, 2 and 3. Each `execute()` calls `repository.findById(id)` once. Which statement is correct?",
      "options": [
        "One SQL statement is guaranteed",
        "Three repository calls will be made if all commands execute",
        "The repository is no longer used",
        "The three commands automatically share one DB transaction"
      ],
      "correct": "B",
      "memo": "Command batching is a batch of command invocations, not automatic query or transaction batching.",
      "marks": 1
    },
    {
      "id": 6,
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
      "id": 7,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** What does the following code print? Assume no exceptions.",
      "options": [
        "A then B",
        "B then A",
        "Nothing, because commands cannot be stored",
        "A only"
      ],
      "correct": "A",
      "memo": "Commands are added in order and each execute() prints its own marker when the invoker iterates.",
      "snippet": "interface Command { void execute(); }\nclass PrintCommand implements Command {\n  private final String label;\n  PrintCommand(String label) { this.label = label; }\n  public void execute() { System.out.println(label); }\n}\nList<Command> queue = new ArrayList<>();\nqueue.add(new PrintCommand(\"A\"));\nqueue.add(new PrintCommand(\"B\"));\nfor (Command c : queue) c.execute();",
      "marks": 1
    },
    {
      "id": 8,
      "kind": "Multiple choice",
      "prompt": "**Spot the bug:** A command is supposed to be scheduled, not executed immediately. What is wrong with this constructor?",
      "options": [
        "Constructors must return void",
        "The operation runs during construction, before the invoker schedules it",
        "The repository must be an interface",
        "Command cannot have an ID field"
      ],
      "correct": "B",
      "memo": "Calling execute() in the constructor defeats deferred execution; store the dependencies and let the invoker call execute().",
      "snippet": "class DeleteUserCommand implements Command {\n  private final UserRepository repo;\n  private final int id;\n  DeleteUserCommand(UserRepository repo, int id) {\n    this.repo = repo; this.id = id;\n    execute(); // Problem\n  }\n  public void execute() { repo.deleteById(id); }\n}",
      "marks": 1
    },
    {
      "id": 9,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A text editor supports Undo for `InsertTextCommand`. Which data is typically necessary for undo?",
      "options": [
        "Only the name of the command class",
        "Enough prior state or an inverse operation to restore the document",
        "Only the toolbar button label",
        "A random undo token with no state"
      ],
      "correct": "B",
      "memo": "Undo is optional and requires reversible operations or stored prior state; having execute() alone is not sufficient.",
      "marks": 1
    },
    {
      "id": 10,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A user selects Delete and immediately presses Undo. The command has already permanently deleted the only copy of a file. What is the central design problem?",
      "options": [
        "The invoker should subclass the file",
        "The operation is not reversible without a backup or recoverable prior state",
        "Commands cannot represent destructive actions",
        "The receiver should be the button"
      ],
      "correct": "B",
      "memo": "The command cannot undo an irreversible deletion unless the prior content/state was retained or the underlying system supports recovery.",
      "marks": 1
    },
    {
      "id": 11,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A payments system enqueues `ChargeCardCommand`. A worker crashes after successfully charging but before acknowledging the message. The job is retried. What must the design consider?",
      "options": [
        "Method overloading",
        "Idempotency and duplicate execution",
        "Replacing the repository with a decorator",
        "Using a static factory only"
      ],
      "correct": "B",
      "memo": "A retried command may execute more than once; charge processing should use an idempotency key and deduplication/reconciliation.",
      "marks": 1
    },
    {
      "id": 12,
      "kind": "Multiple choice",
      "prompt": "**Spot the bug:** This implementation uses a local variable `repo` declared in the constructor but never saves it. What happens when execute() is called?",
      "options": [
        "The repository always comes from the invoker",
        "The field `repository` stays null, causing a NullPointerException",
        "The compiler requires every field final",
        "It runs correctly because local variables become fields"
      ],
      "correct": "B",
      "memo": "Constructor arguments must be assigned to the command's fields to preserve the receiver for later execution.",
      "snippet": "class GetUserCommand implements Command {\n  private UserRepository repository;\n  private int userId;\n  GetUserCommand(UserRepository repo, int id) {\n    userId = id; // forgot: repository = repo;\n  }\n  public void execute() { repository.getUser(userId); }\n}",
      "marks": 1
    },
    {
      "id": 13,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A reporting service needs the `User` returned by a command, but the example interface only exposes `void execute()`. Which design is most appropriate?",
      "options": [
        "A command can never return a result",
        "Use a typed command interface such as `Command<R>` with `R execute()`",
        "Force the invoker to inspect private fields",
        "Replace Command with Observer"
      ],
      "correct": "B",
      "memo": "A generic Command<R> can return the result for synchronous execution, or a queue can collect completion results asynchronously.",
      "marks": 1
    },
    {
      "id": 14,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** You have both `ExportPdfCommand` and `ExportCsvCommand`, but they call the same `ExportService`. Which participant should contain the export implementation?",
      "options": [
        "Button invoker",
        "ExportService receiver, with commands selecting/configuring calls",
        "The list that stores commands",
        "Only the Command interface's default method"
      ],
      "correct": "B",
      "memo": "The receiver generally owns domain operations; concrete commands bind parameters and delegate.",
      "marks": 1
    },
    {
      "id": 15,
      "kind": "Multiple choice",
      "prompt": "**Compare patterns:** Which distinction between **Command** and **Strategy** is most accurate?",
      "options": [
        "Command packages a request for execution, Strategy supplies an interchangeable algorithm",
        "Command requires one algorithm, Strategy queues requests",
        "Strategy always supports undo, Command never does",
        "There is no meaningful distinction"
      ],
      "correct": "A",
      "memo": "Command represents an operation/request with receiver and parameters; Strategy selects a behavior/algorithm the context delegates to.",
      "marks": 1
    },
    {
      "id": 16,
      "kind": "True or false",
      "prompt": "**True/False:** A Command object must be executed as soon as it is constructed.",
      "correct": "false",
      "memo": "False. Deferring, queuing or logging execution is a principal benefit; immediate execution is possible but not required.",
      "marks": 1
    },
    {
      "id": 17,
      "kind": "True or false",
      "prompt": "**True/False:** `GetUserCommand` can store a repository reference and a user ID as fields, then invoke `repo.getUser(userId)` in `execute()`.",
      "correct": "true",
      "memo": "True. The command encapsulates both the receiver and arguments necessary to perform the request.",
      "marks": 1
    },
    {
      "id": 18,
      "kind": "True or false",
      "prompt": "**True/False:** Moving three calls into three Command objects guarantees the database engine will execute one SQL batch.",
      "correct": "false",
      "memo": "False. It still executes three repository operations unless batching is implemented separately.",
      "marks": 1
    },
    {
      "id": 19,
      "kind": "True or false",
      "prompt": "**True/False:** The invoker can execute an object through the `Command` interface without knowing whether it sends email, deletes a file or updates a profile.",
      "correct": "true",
      "memo": "True. Interface polymorphism decouples the invoker from concrete operations.",
      "marks": 1
    },
    {
      "id": 20,
      "kind": "True or false",
      "prompt": "**True/False:** Every Command implementation must have an `undo()` method to qualify for the Command pattern.",
      "correct": "false",
      "memo": "False. Undo is a possible extension, not a required contract.",
      "marks": 1
    }
  ],
  "totalMarks": 20
};

window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-8-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 8,
  "title": "Observer Pattern",
  "session": 1,
  "limitSeconds": 1800,
  "version": 3,
  "group": "design-patterns",
  "intro": "20 concise Observer MCQs, code spotting and true/false about subscriptions, event payloads and dispatch.",
  "source": "Original Java questions based on weather, news, inventories, user notifications and event delivery.",
  "questions": [
    {
      "id": 1,
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
      "id": 2,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A news feed calls `notifyObservers(article)` when a story is published. What does `notifyObservers()` typically do?",
      "options": [
        "Instantiates a new Observer class for every reader",
        "Loops through subscribers and calls each observer's `update(article)`",
        "Replaces the article's superclass",
        "Automatically writes the story to a database"
      ],
      "correct": "B",
      "memo": "The subject iterates registered observers and invokes their update method with an event or current data.",
      "marks": 1
    },
    {
      "id": 3,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** `Observer.update(Post post)` receives the newly published post. Why might `Post` be passed as an argument?",
      "options": [
        "The interface must always accept a Post object",
        "The event payload identifies what changed so the observer needn't fetch it again",
        "Java requires every update() to return a Post",
        "The subject can no longer have state"
      ],
      "correct": "B",
      "memo": "Push-style Observer conveys useful event data; no-argument update() with a subject lookup is also possible.",
      "marks": 1
    },
    {
      "id": 4,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A mobile app is registered for order updates but the user unsubscribes. Which method removes its listener from the subject's registry?",
      "options": [
        "notifyObservers()",
        "removeObserver(mobileListener)",
        "new Post()",
        "update(null)"
      ],
      "correct": "B",
      "memo": "Detachment removes that listener from future notifications but doesn't delete the user or order.",
      "marks": 1
    },
    {
      "id": 5,
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
      "id": 6,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A `List<Observer>` contains the exact same observer reference twice. One notification loops through the List. How many `update()` calls does that observer get?",
      "options": [
        "Zero",
        "One, because Observer guarantees uniqueness",
        "Two",
        "It fails at compile time"
      ],
      "correct": "C",
      "memo": "ArrayList can store duplicate references; use a Set or duplicate registration guard for once-per-listener behavior.",
      "marks": 1
    },
    {
      "id": 7,
      "kind": "Multiple choice",
      "prompt": "**Spot the bug:** A publisher adds an article to its list but never calls `notifyObservers()`. What is the likely outcome?",
      "options": [
        "Java automatically watches collection changes",
        "Registered observers receive no callback unless another part of the app notifies them",
        "All observers are deleted",
        "The compiler rejects `List.add`"
      ],
      "correct": "B",
      "memo": "Observer notifications must be triggered by the Subject/application logic; mutating a List does not broadcast events.",
      "snippet": "void publish(Article a) {\n  articles.add(a);\n  // missing notifyObservers(a);\n}",
      "marks": 1
    },
    {
      "id": 8,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** An observer calls `removeObserver(this)` while the subject iterates an ArrayList via for-each. What is a likely problem?",
      "options": [
        "ConcurrentModificationException or inconsistent iteration",
        "The code becomes a Factory Method",
        "All observers automatically remain subscribed",
        "StringIndexOutOfBoundsException always"
      ],
      "correct": "A",
      "memo": "Mutating a fail-fast collection during iteration can throw; use a snapshot or CopyOnWriteArrayList with defined semantics.",
      "snippet": "for (Observer observer: observers) {\n  observer.update(event); // may remove itself\n}",
      "marks": 1
    },
    {
      "id": 9,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A new SlackNotifier implements `BuildObserver` and should receive build failures alongside EmailNotifier. What changes in the CI subject?",
      "options": [
        "The subject must extend SlackNotifier",
        "Register SlackNotifier through the existing BuildObserver interface",
        "Remove BuildObserver interface",
        "Change all existing observers to SlackNotifier subclasses"
      ],
      "correct": "B",
      "memo": "The subject depends on Observer abstractions; new observer types implement and register through the same interface.",
      "marks": 1
    },
    {
      "id": 10,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A stock ticker publishes price changes to observers. Which relationship best describes the Observer pattern?",
      "options": [
        "One chosen algorithm",
        "One Subject notifying many registered observers",
        "One factory creating many products",
        "One wrapper storing a component"
      ],
      "correct": "B",
      "memo": "Observer is a one-to-many notification relationship for state-change events.",
      "marks": 1
    },
    {
      "id": 11,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A service sends only `update()` without data. Listeners ask the service for the current price. What notification variant is this?",
      "options": [
        "Push",
        "Pull",
        "Decorator",
        "Factory"
      ],
      "correct": "B",
      "memo": "In a pull model, observers retrieve current state rather than having it pushed in update(event).",
      "marks": 1
    },
    {
      "id": 12,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A large event platform has one million subscribers. What is the main scalability concern with synchronously iterating all observers on one request?",
      "options": [
        "Factory interfaces cannot return lists",
        "Slow fan-out, failures and process-local state",
        "Java cannot create one million objects",
        "The subject turns into a subclass"
      ],
      "correct": "B",
      "memo": "Large fan-out is better handled by event queues, async workers, retries and backpressure when required.",
      "marks": 1
    },
    {
      "id": 13,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A user is banned from posting in a discussion forum. Does Observer automatically remove their notification subscription?",
      "options": [
        "Yes, Observer knows Reddit business policies",
        "No, banning/unsubscribing are separate business rules; removal must be implemented",
        "Yes, update() deletes accounts",
        "No, Observer prohibits unsubscription"
      ],
      "correct": "B",
      "memo": "Registration and removal are explicit operations; a ban only triggers removal if application policy says so.",
      "marks": 1
    },
    {
      "id": 14,
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
      "id": 15,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A medical appointment service sends private details to every subscribed listener, including public lobby displays. Which improvement is most important?",
      "options": [
        "Send all data to all listeners and rely on their discretion",
        "Filter by authorization/preferences and share minimal event payloads",
        "Make update() static",
        "Store observers as Strings"
      ],
      "correct": "B",
      "memo": "Push only information recipients may see; filtering/minimal payloads protect privacy.",
      "marks": 1
    },
    {
      "id": 16,
      "kind": "True or false",
      "prompt": "**True/False:** A subject can store an Observer interface reference rather than referring to concrete email or mobile-notification classes.",
      "correct": "true",
      "memo": "True. The abstraction decouples publishers from notification implementations.",
      "marks": 1
    },
    {
      "id": 17,
      "kind": "True or false",
      "prompt": "**True/False:** An Observer interface must define `void update(Post post)` exactly; no other event type or signature qualifies.",
      "correct": "false",
      "memo": "False. The update contract may accept any relevant event type, a subject reference or no parameters.",
      "marks": 1
    },
    {
      "id": 18,
      "kind": "True or false",
      "prompt": "**True/False:** Removing an observer from one subject necessarily deletes the observer object from memory immediately.",
      "correct": "false",
      "memo": "False. It only detaches that registration; other references may keep the object alive.",
      "marks": 1
    },
    {
      "id": 19,
      "kind": "True or false",
      "prompt": "**True/False:** It can be valid to trigger notifications only for meaningful state changes rather than every field assignment.",
      "correct": "true",
      "memo": "True. The application defines relevant observable changes.",
      "marks": 1
    },
    {
      "id": 20,
      "kind": "True or false",
      "prompt": "**True/False:** Observer and Strategy are interchangeable because both use Java interfaces.",
      "correct": "false",
      "memo": "False. They solve different problems: notifications to dependents versus algorithm selection.",
      "marks": 1
    }
  ],
  "totalMarks": 20
};

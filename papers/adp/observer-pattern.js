window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-8-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 8,
  "title": "Observer Pattern",
  "session": 1,
  "limitSeconds": 4500,
  "version": 1,
  "group": "design-patterns",
  "intro": "20 fully independent Java questions on event subscriptions across deliveries, inventory, news, weather, CI pipelines and ticket alerts, with tracing, diagrams, test cases and memos.",
  "source": "Original Observer pattern exam practice; all scenarios are simplified fictional Java systems.",
  "questions": [
    {
      "id": 1,
      "kind": "Definitions",
      "prompt": "**Scenario:** A parcel-delivery application tracks orders. When an order changes from 'packed' to 'out for delivery', the mobile app, a customer email service and a warehouse dashboard may all need to react. The Order object must not depend on these three concrete notification implementations.\n\n**Task:** Define the Observer pattern. Identify the **Subject**, **Observer interface**, concrete observers and the **one-to-many** relationship in this order-tracking system.",
      "marks": 6,
      "memo": "Observer maintains dependents that are notified of a subject's relevant state changes (2). Order is Subject; OrderObserver.update(event) is Observer contract (2); MobileNotifier, EmailNotifier and DashboardUpdater are distinct concrete observers held in subject's registry (2)."
    },
    {
      "id": 2,
      "kind": "Short answer",
      "prompt": "**Scenario:** A news feed maintains a list of articles. A new article triggers registered desktop and mobile subscribers. The Subject can call either `observer.update(article)` or `observer.update()`.\n\n**Task:** Explain the **push** versus **pull** alternatives. Why might a method accept an `Article` object, and what trade-off comes with sending large articles?",
      "marks": 5,
      "memo": "Push: update(Article) sends event details directly (2); pull: update() causes observer to ask subject for changed data (2); large payloads may waste bandwidth/couple observers to data representation, so ID/event can be preferable (1)."
    },
    {
      "id": 3,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A stock-price tracker stores a list of registered `PriceObserver` objects. The `StockTicker` updates its current price and needs to notify those observers.\n\nWhich method should iterate registered observers?",
      "marks": 1,
      "memo": "B. StockTicker.notifyObservers() is the subject's notification loop.",
      "options": [
        "PriceObserver.update() on one concrete observer",
        "StockTicker.notifyObservers()",
        "StockTicker.price() getter only",
        "new PriceObserver() for every price change"
      ],
      "correct": "B"
    },
    {
      "id": 4,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A weather dashboard subscribes to temperature changes. A user closes the dashboard and unsubscribes while another dashboard remains active.\n\nWhat should `removeObserver(closedDashboard)` change?",
      "marks": 1,
      "memo": "B. Remove that dashboard's reference from the WeatherStation's registry, without deleting other subscribers.",
      "options": [
        "Delete WeatherStation's class",
        "Remove only the closed dashboard from the subject's observer collection",
        "Remove all other dashboards",
        "Change the concrete Observer interface"
      ],
      "correct": "B"
    },
    {
      "id": 5,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A build server publishes an event whenever a build fails. Its `notifyObservers(BuildEvent event)` passes the event to several listeners rather than requiring them to query the build server.\n\nThis illustrates which event-delivery style?",
      "marks": 1,
      "memo": "A. Push notification because information travels in update(event).",
      "options": [
        "Push: the event is sent to update(event)",
        "Pull: the observer fetches current state",
        "Polling without a subject",
        "Inheritance-based event handling only"
      ],
      "correct": "A"
    },
    {
      "id": 6,
      "kind": "True or false",
      "prompt": "**Scenario:** A billing service wants to notify a web UI, a webhook and an audit recorder. The developer thinks `Invoice` must store three lists typed as `WebUI`, `Webhook` and `AuditRecorder`.\n\n**Statement:** The subject must know every concrete observer class. Correct the statement if false.",
      "marks": 2,
      "memo": "False. Subject keeps Observer interface references; any concrete class implementing that contract may register, avoiding direct coupling.",
      "correct": "false"
    },
    {
      "id": 7,
      "kind": "True or false",
      "prompt": "**Scenario:** A Git repository watcher detects every file save, but the product manager only wants notifications when a commit is pushed to the remote branch.\n\n**Statement:** Observer requires notifications on **every** internal state change, even if the application regards the change as irrelevant. Correct or justify.",
      "marks": 2,
      "memo": "False. The application defines which state transitions are observable and when notifyObservers() is called. Only relevant commit-push events need broadcast.",
      "correct": "false"
    },
    {
      "id": 8,
      "kind": "Code tracing",
      "prompt": "**Scenario:** A warehouse inventory tracker notifies two registered listeners in insertion order. The subject uses an `ArrayList<StockObserver>`. Alice is registered before Bob, then Alice is removed before the second stock update.\n\n**Task:** Give the exact four? output lines (if fewer than four, say how many). Explain why the second event reaches fewer listeners.",
      "marks": 7,
      "memo": "Exactly three lines: Alice 12, Bob 12, Bob 7 (3). ArrayList preserves registration order (1); removal detaches Alice (2), so later notification goes only to Bob (1).",
      "snippet": "interface StockObserver { void update(int quantity); }\nclass Listener implements StockObserver {\n  private final String name;\n  Listener(String name){ this.name=name; }\n  public void update(int q){ System.out.println(name+\" \"+q); }\n}\nclass Inventory {\n  private final java.util.List<StockObserver> observers = new java.util.ArrayList<>();\n  void add(StockObserver o){ observers.add(o); }\n  void remove(StockObserver o){ observers.remove(o); }\n  void setStock(int qty){ for(StockObserver o: observers) o.update(qty); }\n}\nInventory inventory = new Inventory();\nListener alice = new Listener(\"Alice\");\nListener bob = new Listener(\"Bob\");\ninventory.add(alice); inventory.add(bob);\ninventory.setStock(12);\ninventory.remove(alice);\ninventory.setStock(7);"
    },
    {
      "id": 9,
      "kind": "Code tracing",
      "prompt": "**Scenario:** A price alert subject stores observers in an ordinary Java `ArrayList`, which permits duplicate entries. A user accidentally subscribes twice with the **same object reference**.\n\n**Task:** How many calls to `update()` occur per event? Explain whether the Observer pattern itself prevents this and suggest a remedy.",
      "marks": 5,
      "memo": "Two update calls per event (3); Observer pattern does not define duplicate prevention (1); a Set or duplicate check can enforce one registration (1).",
      "snippet": "java.util.List<Observer> listeners = new java.util.ArrayList<>();\nlisteners.add(alice);\nlisteners.add(alice);\nfor (Observer observer : listeners) observer.update(event);"
    },
    {
      "id": 10,
      "kind": "Java debugging",
      "prompt": "**Scenario:** An app lets users unsubscribe during a notification callback. Its subject iterates an `ArrayList` using a for-each loop. One observer's `update()` calls `removeObserver(this)` on the same list.\n\n**Task:** Explain the risk during iteration. Propose two safe approaches and state what consistency each implies.",
      "marks": 7,
      "memo": "Fail-fast iterator may throw ConcurrentModificationException when modified mid-iteration (3); iterate a snapshot to finish original set or use CopyOnWriteArrayList for stable iteration snapshot (3); define whether removed listeners get current event (1).",
      "snippet": "for (Observer o : observers) {\n    o.update(event); // some observers call observers.remove(this)\n}"
    },
    {
      "id": 11,
      "kind": "Error identification",
      "prompt": "**Scenario:** A news website stores every published article in `posts`. Users have registered observers, but the web team notices nobody receives new-article notifications even though the list visibly changes.\n\n**Task:** Identify the missing Observer step and write the correct ordering of state mutation and notification.",
      "marks": 6,
      "memo": "Changing ArrayList is not an automatic event (2); add article successfully, then call notifyObservers(article) (2); each attached observer receives update(article) (2).",
      "snippet": "void publish(Article article) {\n    posts.add(article);\n    // notification code omitted\n}"
    },
    {
      "id": 12,
      "kind": "Diagram reasoning",
      "prompt": "**Scenario:** A weather station sends temperature updates to a phone display and an archive logger. The subject should have no direct dependency on either concrete display class.\n\n**Task:** Read the UML and identify Subject, Observer, two concrete observer types, the registration operations and the one-to-many relationship.",
      "marks": 7,
      "memo": "WeatherStation is Subject implementation and manages attach/detach/notify (2); WeatherObserver is interface with update(Reading) (2); PhoneDisplay and ArchiveLogger implement it (2); registry supplies one-to-many (1).",
      "diagram": "classDiagram\nclass WeatherSubject {\n <<interface>>\n +addObserver(WeatherObserver)\n +removeObserver(WeatherObserver)\n +notifyObservers(Reading)\n}\nclass WeatherObserver {\n <<interface>>\n +update(Reading)\n}\nclass WeatherStation {\n -List~WeatherObserver~ observers\n +record(Reading)\n}\nclass PhoneDisplay\nclass ArchiveLogger\nWeatherSubject <|.. WeatherStation\nWeatherObserver <|.. PhoneDisplay\nWeatherObserver <|.. ArchiveLogger\nWeatherStation o-- WeatherObserver : notifies 0..*"
    },
    {
      "id": 13,
      "kind": "Scenario application",
      "prompt": "**Scenario:** A forum has optional thread subscriptions. A user subscribes to a programming discussion and wants alerts on new replies, but has disabled notifications for posts marked 'spoiler'. Other subscribed users may have different preferences.\n\n**Task:** Model the Subject and Observer roles and explain where per-user notification preferences should be evaluated without hard-coding every user type into Thread.",
      "marks": 7,
      "memo": "Thread as subject and ReplyObserver contract (2); subscription registry and update(ReplyEvent) (2); filter preferences at notification/delivery layer or observer-specific policy (2); avoid leaking spoiler payload before eligibility filtering (1)."
    },
    {
      "id": 14,
      "kind": "Scenario analysis",
      "prompt": "**Scenario:** A customer unsubscribes from order notifications, but their order remains active and they may still view the order in the application.\n\n**Task:** Does detaching them as an Observer delete the customer account or cancel the order? Distinguish the subscription state from underlying business state.",
      "marks": 5,
      "memo": "No, detach changes only event registration/delivery (2); customer/order lifecycle remains separate (2); unsubscribing is an explicit business action determining call to removeObserver (1)."
    },
    {
      "id": 15,
      "kind": "Java implementation",
      "prompt": "**Scenario:** A library sends updates when a reserved book becomes available. Registered readers receive the `BookAvailableEvent`. The subject must allow attaching and detaching observers.\n\n**Task:** Write Java `AvailabilityObserver.update(BookAvailableEvent)`, `AvailabilitySubject.add/remove/notify` and a `LibraryReservation` concrete subject that notifies after updating availability.",
      "marks": 10,
      "memo": "Correct observer/subject interfaces (3); subject holds collection of Observer references (2); attach and detach methods (2); state change triggers notify(event) (2); event delivered to every registered observer (1)."
    },
    {
      "id": 16,
      "kind": "Java implementation",
      "prompt": "**Scenario:** A CI pipeline needs to notify both a Slack channel and an email service when a release build fails. The pipeline should only depend on `BuildObserver`, not the concrete delivery integrations.\n\n**Task:** Sketch two concrete Java observer classes, showing constructor-injected delivery clients and `update(BuildEvent)` methods. Explain how the subject registers them.",
      "marks": 8,
      "memo": "Both observer implementations implement BuildObserver.update(event) (3); each uses injected Slack/Email client to deliver (2); pipeline registers through Observer interface (2); errors/retries acknowledged (1)."
    },
    {
      "id": 17,
      "kind": "Testing",
      "prompt": "**Scenario:** A traffic-monitoring subject broadcasts incident events. The spec requires one callback per registered observer and no callback after unsubscribe. A failing observer must not silently prevent all later observers from hearing about incidents.\n\n**Task:** Design four JUnit 5 tests: registered, detached, duplicate and failure behavior. State expected assertions for each.",
      "marks": 8,
      "memo": "Once after register (2); zero after remove (2); duplicate behavior matches documented Set/list semantics (2); exception handling or isolation policy is explicitly verified (2)."
    },
    {
      "id": 18,
      "kind": "Comparison",
      "prompt": "**Scenario:** A weather app reacts to new readings by notifying all screens, while separately choosing one of three weather prediction algorithms for its forecasts.\n\n**Task:** Identify which requirement uses **Observer** and which uses **Strategy**. Compare whether each typically involves one-to-many event subscribers or one selected delegated algorithm.",
      "marks": 7,
      "memo": "Observer notifies one-to-many subscribed screens on readings (3); Strategy selects one prediction algorithm behind shared interface for forecast computation (3); both use interfaces but different interaction patterns (1)."
    },
    {
      "id": 19,
      "kind": "Architecture trade-off",
      "prompt": "**Scenario:** A shopping platform has one million users subscribed to product restock notifications. An in-memory `for` loop calling every observer synchronously takes minutes and fails if the process dies.\n\n**Task:** Name at least three bottlenecks and propose an event-bus or queue-based solution. Explain how this relates to, but goes beyond, the textbook Observer pattern.",
      "marks": 8,
      "memo": "Large synchronous fan-out latency (2); memory/process locality and unreliable delivery/failure handling (2); publish restock event to queue/bus, async consumers with retries/batching/backpressure (3); messaging is scalable distribution of Observer-like events (1)."
    },
    {
      "id": 20,
      "kind": "Integrated reasoning",
      "prompt": "**Scenario:** A ticket-booking site sends alerts when an event has new seats available. Users register and unregister alerts, choose channels (email or push), and may receive events for several venues. The site must avoid revealing private reservation information in notifications.\n\n**Task:** Design Subject and Observer interfaces with an event payload, registration lifecycle and delivery flow. Discuss push-vs-pull payload choices, privacy, and one testing concern.",
      "marks": 10,
      "memo": "EventAvailabilitySubject + AvailabilityObserver abstraction and subscription lifecycle (3); notify when seats change and invoke update(event) (2); channel/venue filtering (2); send minimal event ID publicly, fetch private data after auth where appropriate (2); test notification/detach or idempotence (1)."
    }
  ],
  "totalMarks": 113
};

window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-4-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 4,
  "title": "Simple Factory",
  "session": 1,
  "limitSeconds": 1800,
  "version": 3,
  "group": "design-patterns",
  "intro": "20 concise self-contained Simple Factory questions: tricky MCQs, Java bug spotting and true/false. Automatically marked.",
  "source": "Original Java revision questions; Simple Factory is a common non-GoF creational idiom.",
  "questions": [
    {
      "id": 1,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A document importer has separate `CsvImporter` and `JsonImporter` classes. Controllers repeat type checks and `new` calls. Which change best represents a Simple Factory?",
      "options": [
        "Add a method inside every controller that repeats the switch",
        "Introduce `ImporterFactory.create(type)` returning an Importer implementation",
        "Make CsvImporter extend JsonImporter",
        "Replace both importer classes with one database table"
      ],
      "correct": "B",
      "memo": "A Simple Factory centralizes product selection and construction, removing repeated concrete constructor decisions from callers.",
      "marks": 1
    },
    {
      "id": 2,
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
      "id": 3,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** A teammate wants a static factory method in Java. Which declaration is valid **at the top level**?",
      "options": [
        "`static class VMFactory { ... }`",
        "`class VMFactory { static VM create(){ ... } }`",
        "`static interface VMFactory { ... }`",
        "`abstract static class VMFactory { ... }`"
      ],
      "correct": "B",
      "memo": "A top-level class is not static; a normal top-level class can contain static factory methods.",
      "snippet": "class VMFactory {\n  static VM create() { return new EC2(); }\n}",
      "marks": 1
    },
    {
      "id": 4,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** What does the program print when a Simple Factory selects a product?",
      "options": [
        "EC2",
        "Azure",
        "VM",
        "Compilation fails because interface types cannot reference implementations"
      ],
      "correct": "A",
      "memo": "The branch for true creates EC2, and Java dispatches name() on the runtime EC2 object.",
      "snippet": "interface VM { String name(); }\nclass EC2 implements VM { public String name(){return \"EC2\";} }\nclass AzureVM implements VM { public String name(){return \"Azure\";} }\nclass VMFactory {\n static VM create(boolean aws) { return aws ? new EC2() : new AzureVM(); }\n}\nSystem.out.println(VMFactory.create(true).name());",
      "marks": 1
    },
    {
      "id": 5,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A factory is asked for provider `\"ORACLE\"` but supports only AWS and Azure. Which behavior is safest for a production deployment tool?",
      "options": [
        "Silently use AWS",
        "Return null and let a future method fail",
        "Reject with a clear error explaining unsupported provider",
        "Randomly choose AWS or Azure"
      ],
      "correct": "C",
      "memo": "Rejecting invalid input makes the failure explicit and avoids accidental deployment to an unintended cloud.",
      "marks": 1
    },
    {
      "id": 6,
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
      "id": 7,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A factory builds an `EC2Config` Java object with a region and security group. Does `new EC2Config()` by itself launch a cloud VM?",
      "options": [
        "Yes, Java automatically invokes AWS",
        "Only when the constructor or another invoked method actually calls a cloud SDK/API",
        "Yes, if the class contains the word EC2",
        "No Java program can launch an AWS VM"
      ],
      "correct": "B",
      "memo": "Object construction is not infrastructure provisioning unless code actually performs the external SDK/API operation.",
      "marks": 1
    },
    {
      "id": 8,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A VM factory generates inbound rules: SSH port 22 from `0.0.0.0/0`, HTTPS port 443 from the internet. Which rule is the primary least-privilege concern?",
      "options": [
        "HTTPS port 443 open publicly, always",
        "SSH port 22 open to all IPv4 addresses",
        "The class name VMFactory",
        "Returning a VM interface"
      ],
      "correct": "B",
      "memo": "Broad public SSH ingress significantly increases exposure; use restricted sources or managed access instead.",
      "marks": 1
    },
    {
      "id": 9,
      "kind": "Multiple choice",
      "prompt": "**Compare:** A Simple Factory uses a static switch; a classic Factory Method uses an overridable creator hook. Which distinction is accurate?",
      "options": [
        "Both require a subclass for each caller",
        "Simple Factory centralizes selection; Factory Method delegates product choice to concrete creators",
        "Only Simple Factory can return an interface",
        "Factory Method cannot use inheritance"
      ],
      "correct": "B",
      "memo": "A Simple Factory often changes its switch when adding products; Factory Method introduces new concrete creators/overrides.",
      "marks": 1
    },
    {
      "id": 10,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** The factory's `default` branch returns `null`. A client immediately calls `vm.provision()`. What can happen for an unknown provider?",
      "options": [
        "The VM is automatically AWS",
        "A NullPointerException",
        "The compiler replaces null with a default object",
        "The factory method becomes abstract"
      ],
      "correct": "B",
      "memo": "For unsupported input `create` returns null and the subsequent invocation dereferences it.",
      "snippet": "static VM create(String provider) {\n switch(provider) {\n   case \"AWS\": return new EC2();\n   case \"AZURE\": return new AzureVM();\n   default: return null;\n }\n}\nVM vm = create(\"OTHER\");\nvm.provision();",
      "marks": 1
    },
    {
      "id": 11,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A testing application requests three independently configured VMs. What should a Simple Factory ideally return when those objects are mutable?",
      "options": [
        "The identical singleton each time",
        "Fresh VM/config instances or suitably isolated copies",
        "A List containing the same VM three times",
        "A concrete constructor name as a string"
      ],
      "correct": "B",
      "memo": "Avoid shared mutable state between independent deployments; new instances or immutable configurations are appropriate.",
      "marks": 1
    },
    {
      "id": 12,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A cloud factory currently creates only VMs. Deployments also require provider-matched storage and load balancers. Which extension best models *families* of related products?",
      "options": [
        "Abstract Factory with createVM, createStorage, createLoadBalancer",
        "Keep one static factory method for the VM and hardcode other provider types in clients",
        "Observer",
        "Decorator that prints resource names"
      ],
      "correct": "A",
      "memo": "Abstract Factory exposes several related product-creation operations per provider.",
      "marks": 1
    },
    {
      "id": 13,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A report generator has one trivial immutable product and no planned variants. Which design choice is reasonable?",
      "options": [
        "Always create five layers of factories",
        "Direct construction can be simpler than a factory",
        "Every constructor must be private",
        "Use Abstract Factory regardless"
      ],
      "correct": "B",
      "memo": "Factory abstraction should solve an actual construction, configuration or variability problem.",
      "marks": 1
    },
    {
      "id": 14,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A factory currently accepts provider names as free-form strings. The team introduces `enum Provider { AWS, AZURE }`. What does this primarily improve?",
      "options": [
        "It makes cloud calls free",
        "It reduces invalid selection values and typo-prone string comparisons",
        "It guarantees that configuration objects are immutable",
        "It automatically adds a third cloud"
      ],
      "correct": "B",
      "memo": "Enum inputs make allowed provider values explicit; null and unsupported cases still need handling.",
      "marks": 1
    },
    {
      "id": 15,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A test asserts `VMFactory.create(AWS)` returns an EC2 object. Which additional test most directly detects accidental reuse of a mutable configuration?",
      "options": [
        "Call create twice and assert modifications to one do not affect the other",
        "Check the class name contains Factory",
        "Assert the method is static",
        "Check only that both calls return non-null"
      ],
      "correct": "A",
      "memo": "Independent calls must produce isolated mutable state when the contract promises independent configurations.",
      "marks": 1
    },
    {
      "id": 16,
      "kind": "True or false",
      "prompt": "**True/False:** A Simple Factory has to be one of the original Gang of Four 23 design patterns.",
      "correct": "false",
      "memo": "False. Simple Factory is a common creation idiom but not one of the original GoF 23 patterns.",
      "marks": 1
    },
    {
      "id": 17,
      "kind": "True or false",
      "prompt": "**True/False:** Centralizing repeated default configuration in a factory can reduce inconsistent settings between callers.",
      "correct": "true",
      "memo": "True. One construction path reduces duplicated configuration; defaults still need to be safe and validated.",
      "marks": 1
    },
    {
      "id": 18,
      "kind": "True or false",
      "prompt": "**True/False:** Returning a `VM` interface from a factory requires the factory to return an instance of the interface itself rather than an implementing class.",
      "correct": "false",
      "memo": "False. Interfaces are not directly instantiated; factories return objects whose concrete classes implement the interface.",
      "marks": 1
    },
    {
      "id": 19,
      "kind": "True or false",
      "prompt": "**True/False:** A static `create()` method can still return a different concrete product depending on its input.",
      "correct": "true",
      "memo": "True. Static concerns how the factory method is called, not whether it can select among concrete products.",
      "marks": 1
    },
    {
      "id": 20,
      "kind": "True or false",
      "prompt": "**True/False:** A Simple Factory automatically makes every future product addition possible without modifying any existing class.",
      "correct": "false",
      "memo": "False. A switch-based factory often needs changing when new product choices are added.",
      "marks": 1
    }
  ],
  "totalMarks": 20
};

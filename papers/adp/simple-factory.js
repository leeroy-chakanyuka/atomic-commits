window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-4-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 4,
  "title": "Simple Factory",
  "session": 1,
  "limitSeconds": 4500,
  "version": 1,
  "group": "design-patterns",
  "intro": "20 independent Java Simple Factory exercises using importers, exporters and cloud configuration, with explicit premises, complete code snippets, UML and detailed marking guidance.",
  "source": "Original exam practice; Simple Factory is a common convention rather than one of the original GoF 23 patterns.",
  "questions": [
    {
      "id": 1,
      "kind": "Definitions",
      "prompt": "**Scenario:** A document importer accepts CSV and JSON files. Controllers currently repeat `new CsvImporter()` and `new JsonImporter()`, plus setup code. The team wants callers to request an importer by file type without knowing concrete constructors.\n\n**Task:** Define a **Simple Factory**, identify the method it would expose, and explain which construction responsibilities move out of the client.",
      "marks": 4,
      "memo": "A dedicated method/class chooses and creates a concrete product (2); the client no longer repeats selection/configuration code (2)."
    },
    {
      "id": 2,
      "kind": "Short answer",
      "prompt": "**Scenario:** A cloud administration program creates test virtual machines using Java objects that hold machine size, region and inbound network rules. Creating a configured Java object is separate from calling a cloud SDK to deploy it.\n\n**Task:** Distinguish a factory constructing/configuring a VM wrapper from provision() actually creating cloud infrastructure. Give an example of repeated setup worth centralizing.",
      "marks": 4,
      "memo": "Construction may assemble/configure a Java resource object (2); actual cloud provisioning occurs only if a real SDK/API call executes (2)."
    },
    {
      "id": 3,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** Three developers propose ways of constructing a report-export object. One uses a centralized static switch on the requested format; another uses an overridable creation hook in a subclass; another directly calls constructors everywhere.\n\n**Task:** Select the example that best matches **Simple Factory**, not the GoF Factory Method pattern.",
      "marks": 1,
      "memo": "A. A central selection method is the conventional Simple Factory approach.",
      "options": [
        "A static `VMFactory.create(provider)` selects concrete VM types",
        "A subclass overrides an inherited `createVM()` hook",
        "A concrete VM subclasses another VM",
        "A client directly calls `new EC2()` everywhere"
      ],
      "correct": "A"
    },
    {
      "id": 4,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A VM-management UI passes a provider name to `VMFactory.create(name)`. The factory supports AWS and Azure only. A user enters an unsupported name, and silently deploying to the wrong cloud would be costly.\n\n**Task:** Choose the safest behavior for `VMFactory.create(\"UNKNOWN\")`.",
      "marks": 1,
      "memo": "C. Fail fast or return an explicit error so the caller cannot accidentally deploy to another provider.",
      "options": [
        "Return a random provider",
        "Return `null` silently",
        "Fail clearly with an exception or explicit result",
        "Create both cloud VMs"
      ],
      "correct": "C"
    },
    {
      "id": 5,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A simple factory switches on the selected document type (PDF or CSV) and returns an implementation of `ReportExporter`. The product owner adds XLSX next month.\n\n**Task:** Choose which code is most likely to need editing in a switch-based Simple Factory.",
      "marks": 1,
      "memo": "A. A switch-based Simple Factory typically needs an additional XLSX branch and constructor mapping.",
      "options": [
        "Adding the new XLSX case to the factory's format switch",
        "Changing a caller's variable name",
        "Calling export() twice on one report",
        "Reading the filename extension after export"
      ],
      "correct": "A"
    },
    {
      "id": 6,
      "kind": "True or false",
      "prompt": "**Scenario:** A teammate proposes `static class ExporterFactory` as a top-level Java class. They want a reusable utility method `create(type)` but are unsure how Java uses static.\n\n**Task:** Decide whether the proposed top-level declaration is legal and state a valid Java alternative.",
      "marks": 2,
      "memo": "False. Java cannot declare a top-level static class. Declare a normal top-level ExporterFactory with static create(type), or use a static nested class when appropriate.",
      "correct": "false"
    },
    {
      "id": 7,
      "kind": "True or false",
      "prompt": "**Scenario:** An internal API repeatedly builds EC2 configurations with the same tags, machine shape and permitted HTTPS port. The developer moves the defaults into `EC2ConfigFactory.createWebVm()`.\n\n**Task:** Judge whether centralization can help even without an inheritance hierarchy.",
      "marks": 2,
      "memo": "True. A factory method can centralize repeated configuration without inheritance or runtime polymorphic creators.",
      "correct": "true"
    },
    {
      "id": 8,
      "kind": "Code tracing",
      "prompt": "**Scenario:** The following self-contained Java-style statements use a common `VM` product contract and a static Simple Factory. No actual AWS/Azure API calls take place; these are ordinary objects that return provider names.\n\n**Task:** Predict the exact printed lines and count the objects constructed by two independent factory calls.",
      "marks": 5,
      "memo": "Output: `EC2`, then `Azure` (2). Exactly two factory invocations create two objects (1); each variable has declared type VM (2).",
      "snippet": "interface VM { String provider(); }\nclass EC2 implements VM { public String provider(){return \"EC2\";} }\nclass AzureVM implements VM { public String provider(){return \"Azure\";} }\nclass VMFactory {\n  static VM create(boolean aws) { return aws ? new EC2() : new AzureVM(); }\n}\nSystem.out.println(VMFactory.create(true).provider());\nSystem.out.println(VMFactory.create(false).provider());"
    },
    {
      "id": 9,
      "kind": "Code tracing",
      "prompt": "**Scenario:** A configuration factory promises a fresh mutable `Config` for each test deployment. Instead, it returns one static default object. Two callers believe their region choices are independent.\n\n**Task:** Trace the output and explain the aliasing bug. State what the factory must change.",
      "marks": 5,
      "memo": "Both `a` and `b` reference the **same** object (2); both print `eu-west-1` (2). A factory should create/copy independent configuration when isolation is required (1).",
      "snippet": "class Config { String region = \"us-east-1\"; }\nclass ConfigFactory {\n  private static final Config DEFAULT = new Config();\n  static Config create() { return DEFAULT; }\n}\nConfig a = ConfigFactory.create();\nConfig b = ConfigFactory.create();\na.region = \"eu-west-1\";\nSystem.out.println(a.region);\nSystem.out.println(b.region);"
    },
    {
      "id": 10,
      "kind": "Error identification",
      "prompt": "**Scenario:** An AWS VM factory creates a security-group configuration opening inbound ports 80 (HTTP), 443 (HTTPS), and 22 (SSH). The factory's SSH rule accepts traffic from every IPv4 address.\n\n**Task:** Identify the insecure rule, describe the exposure, and propose a least-privilege alternative. Assume this Java code will eventually configure a real security group.",
      "marks": 6,
      "memo": "Opening port 22 to `0.0.0.0/0` grants broad inbound access (2); restrict SSH source CIDR, prefer SSM/Bastion or no public SSH (2); verify provider-side rules before deployment (2).",
      "snippet": "class VMFactory {\n  static EC2Config create() {\n    EC2Config c = new EC2Config();\n    c.allowInbound(22, \"0.0.0.0/0\");\n    c.allowInbound(80, \"0.0.0.0/0\");\n    c.allowInbound(443, \"0.0.0.0/0\");\n    return c;\n  }\n}"
    },
    {
      "id": 11,
      "kind": "Java debugging",
      "prompt": "**Scenario:** A Simple Factory accepts strings from a dropdown and returns an implementation of `VM`. It covers AWS and Azure but returns `null` for typos or unknown names.\n\n**Task:** Find the failure mode shown in the code and give a safer implementation approach using exceptions, validation or a typed result.",
      "marks": 6,
      "memo": "Unsupported input reaches `default` and returns null (2); use explicit IllegalArgumentException or a typed error result (2); prefer enum/validated types instead of uncontrolled strings (2).",
      "snippet": "static VM create(String name) {\n  switch (name) {\n    case \"AWS\": return new EC2();\n    case \"AZURE\": return new AzureVM();\n    default: return null;\n  }\n}"
    },
    {
      "id": 12,
      "kind": "Diagram reasoning",
      "prompt": "**Scenario:** A deployment CLI asks a static factory for an abstract `VM`. The factory switches between `EC2` and `AzureVM`. The client knows the provider selection value but does not construct concrete VM classes itself.\n\n**Task:** Read the Mermaid class diagram and name the factory, product contract, concrete products and remaining coupling to provider selection.",
      "marks": 6,
      "memo": "Factory: VMFactory (1); product: VM (1); implementations EC2 and AzureVM (2); client still chooses the provider argument and factory must know concrete classes (2).",
      "diagram": "classDiagram\nclass VM {\n <<interface>>\n +provision()\n}\nclass EC2\nclass AzureVM\nclass VMFactory {\n +create(provider) VM\n}\nVM <|.. EC2\nVM <|.. AzureVM\nVMFactory ..> EC2 : constructs\nVMFactory ..> AzureVM : constructs"
    },
    {
      "id": 13,
      "kind": "Scenario application",
      "prompt": "**Scenario:** A software testing team creates around 50 short-lived VMs each week. Nearly every VM needs consistent base tags, disk defaults and a restricted security-group configuration, though regions and machine sizes differ.\n\n**Task:** Identify what belongs in a `VMFactory` and what should be provided as explicit validated parameters.",
      "marks": 6,
      "memo": "Put shared valid defaults, repeated construction and invariant validation in factory (3); expose disk, region, tags, optional ingress as explicit validated parameters (2); avoid hiding credentials/secrets (1)."
    },
    {
      "id": 14,
      "kind": "Scenario analysis",
      "prompt": "**Scenario:** A cloud factory has a helper `allowOutboundAll()`. It was introduced because development environments frequently need internet access, but production now handles sensitive data.\n\n**Task:** Discuss both the consistency benefit and least-privilege drawback of making unrestricted outbound traffic a silent default.",
      "marks": 6,
      "memo": "Single place ensures consistent behavior and easier updates (2); all egress can violate least privilege across environments (2); allow validated policy overrides/configuration and tests (2)."
    },
    {
      "id": 15,
      "kind": "Java implementation",
      "prompt": "**Scenario:** A CLI tool asks for AWS or Azure using the Java enum `Provider { AWS, AZURE }`. Its VM factory should return a `VM` abstraction, allowing both products to be used by the same deployment code.\n\n**Task:** Implement `VMFactory.create(Provider provider)` with correct selection and explicit null handling. Provide Java code, not pseudocode.",
      "marks": 9,
      "memo": "Interface/enum (2); correct AWS→EC2 and AZURE→AzureVM selection (3); return common VM interface (2); reject null or unsupported values without silent fallback (2)."
    },
    {
      "id": 16,
      "kind": "Java implementation",
      "prompt": "**Scenario:** A web server builder is used by test environments with different regions. Each call must create a distinct mutable configuration. HTTPS (443) is required, HTTP (80) is optional, and publicly accessible SSH must never be enabled by the default.\n\n**Task:** Implement a static factory method (adjust the signature if needed to accept HTTP choice) and explain security defaults.",
      "marks": 9,
      "memo": "New config per invocation (2); validate region (2); port 443 (1); conditional port 80 (2); no unrestricted SSH and explain policy (2)."
    },
    {
      "id": 17,
      "kind": "Testing",
      "prompt": "**Scenario:** A cloud-provider factory is refactored and a regression once returned an Azure VM for AWS requests. Another regression reused the same mutable config object for multiple requests.\n\n**Task:** Describe four focused JUnit 5 tests or assertions for valid providers, unsupported provider and configuration isolation.",
      "marks": 8,
      "memo": "AWS produces EC2 (2), Azure produces AzureVM (2), invalid provider throws/returns error (2), different calls give independent mutable configurations (2)."
    },
    {
      "id": 18,
      "kind": "Comparison",
      "prompt": "**Scenario:** A service initially uses a static Simple Factory `createExporter(format)`, which switches on format strings. Now individual teams want to add formats through separate creator subclasses without editing a central conditional.\n\n**Task:** Contrast that Simple Factory with polymorphic **Factory Method** and explain which code must change as product types expand.",
      "marks": 6,
      "memo": "Simple Factory concentrates selection and usually requires editing its switch (3); Factory Method lets a new concrete creator implement/override creation while existing generic client uses creator abstraction (3)."
    },
    {
      "id": 19,
      "kind": "Architecture trade-off",
      "prompt": "**Scenario:** A tiny one-off console program constructs exactly one immutable `JsonExporter`. There are no alternative formats, special configuration steps, or tests requiring product substitution.\n\n**Task:** Argue whether `new JsonExporter()` is clearer than a dedicated factory. Name conditions that would justify adding a factory later.",
      "marks": 6,
      "memo": "Direct construction is clearest when one trivial immutable product is created once (2); a factory becomes useful with repeated validation, configuration, variability or controlled substitutions (3); abstractions should pay for themselves (1)."
    },
    {
      "id": 20,
      "kind": "Integrated reasoning",
      "prompt": "**Scenario:** A VM factory already supports AWS and Azure. A deployment job now needs a provider-matched virtual machine, object-storage resource and load balancer. Accidentally mixing AWS and Azure resources in one job is undesirable.\n\n**Task:** Explain why moving to a provider-oriented **Abstract Factory** would be appropriate, and how it differs from merely having three unrelated factory utility methods.",
      "marks": 10,
      "memo": "Simple Factory is useful for one VM construction decision (2); Abstract Factory groups matching VM/storage/LB methods in CloudFactory (3); AWSFactory/AzureFactory return coherent products with shared contracts (3); one injected CloudFactory keeps deployment provider-neutral (2)."
    }
  ],
  "totalMarks": 103
};

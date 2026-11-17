window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-6-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 6,
  "title": "Abstract Factory",
  "session": 1,
  "limitSeconds": 4500,
  "version": 1,
  "group": "design-patterns",
  "intro": "20 standalone Java Abstract Factory questions based on a fully introduced AWS/Azure deployment simulator, with object-family consistency, safety, UML, Java and tests.",
  "source": "Original design-pattern Java questions; simplified EC2/S3/Azure wrapper objects are teaching examples, not live SDK deployments.",
  "questions": [
    {
      "id": 1,
      "kind": "Definitions",
      "prompt": "**Scenario:** A deployment application must run on AWS or Azure. One deployment creates a virtual machine and object storage. On AWS it uses EC2 and S3; on Azure it uses Azure Virtual Machines and Azure Blob Storage containers. Client deployment code should not directly instantiate provider SDK classes.\n\n**Task:** Define the **Abstract Factory** pattern. Identify the abstract factory, concrete provider factories, abstract product interfaces, and each related product family.",
      "marks": 5,
      "memo": "Provides common contract for creating related products without naming concrete classes (2); family = matching EC2/S3/ELB or Azure VM/Blob/Load Balancer products (3)."
    },
    {
      "id": 2,
      "kind": "Short answer",
      "prompt": "**Scenario:** The deployment client currently calls separate `new EC2()` and `new S3Bucket()` constructors. The team proposes one `CloudFactory` contract with `VirtualMachine createVM()` and `CloudStorage createStorage()`.\n\n**Task:** Explain why these two methods belong to one Abstract Factory and why VirtualMachine and CloudStorage should be distinct product interfaces rather than a single combined VM/Storage class.",
      "marks": 5,
      "memo": "Abstract Factory builds related products from a shared provider (3); methods return distinct abstract product interfaces (2)."
    },
    {
      "id": 3,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A multi-cloud platform needs matching compute and storage for every environment. A developer shows three designs: a static EC2 helper; one provider-oriented factory returning both VM and storage; and a subclass that adds a tag to EC2.\n\n**Task:** Choose the design that demonstrates Abstract Factory and explain the significance of a product **family**.",
      "marks": 1,
      "memo": "B. Concrete factories produce compatible groups of different products.",
      "options": [
        "A class with a single static method for EC2",
        "AWSFactory creates EC2 and S3; AzureFactory creates Azure VM and Blob storage",
        "An EC2 subclass that adds a tag",
        "A VM subclass containing its own logging method"
      ],
      "correct": "B"
    },
    {
      "id": 4,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** AWS and Azure SDK classes have very different names, but the deployment workflow needs only `vm.provision()` and `storage.provision()`. The team defines provider-neutral `VirtualMachine` and `CloudStorage` Java interfaces.\n\n**Task:** Identify the benefit of returning these interfaces from `CloudFactory` rather than concrete SDK types.",
      "marks": 1,
      "memo": "B. Client depends on resource capabilities, not EC2 or Azure class names.",
      "options": [
        "To force all resources to be the same class",
        "To allow client deployment logic to use provider-neutral contracts",
        "To hide every configuration value",
        "To ensure cloud APIs never fail"
      ],
      "correct": "B"
    },
    {
      "id": 5,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A student designing a cross-cloud Object Storage abstraction knows that AWS S3 stores objects in buckets but cannot recall how Azure organises its blobs. The Abstract Factory needs a storage implementation for each provider.\n\n**Task:** Choose the closest Azure equivalent to an S3 bucket in this simplified design.",
      "marks": 1,
      "memo": "B. Blob Storage containers hold objects/blobs within a storage account.",
      "options": [
        "An Azure VM",
        "An Azure Blob Storage container",
        "An Azure SQL row",
        "An Azure AD account"
      ],
      "correct": "B"
    },
    {
      "id": 6,
      "kind": "True or false",
      "prompt": "**Scenario:** A new application already has `AWSFactory` and `AzureFactory`. Each one must be able to create both compute and storage resources. Someone proposes adding separate `AWSVMFactory`, `AWSStorageFactory`, `AzureVMFactory` and `AzureStorageFactory` as a **requirement** of Abstract Factory.\n\n**Task:** Decide whether such per-resource factories are mandatory. Correct the statement if false.",
      "marks": 2,
      "memo": "False. A provider factory commonly creates the full VM/storage family.",
      "correct": "false"
    },
    {
      "id": 7,
      "kind": "True or false",
      "prompt": "**Scenario:** A UML diagram labels `AWSFactory.createVM()` as a factory method inside a concrete Abstract Factory implementation. A reviewer claims the two patterns cannot appear together in one implementation.\n\n**Task:** Evaluate the claim and explain the relationship between factory methods and the Abstract Factory interface.",
      "marks": 2,
      "memo": "True. Abstract Factory and Factory Method can cooperate; they are not mutually exclusive.",
      "correct": "true"
    },
    {
      "id": 8,
      "kind": "Code tracing",
      "prompt": "**Scenario:** The following code implements a simplified provider-neutral deployment model. `EC2` and `S3` are Java wrappers, not live cloud resources. `AWSFactory` returns both through `CloudFactory` and the client invokes the product methods.\n\n**Task:** Predict the exact console output and explain the factory and product dynamic-dispatch calls.",
      "marks": 6,
      "memo": "Prints `EC2` then `S3` (2); AWSFactory implementation selected at runtime (2); resource interface methods dispatched to AWS concrete products (2).",
      "snippet": "interface VM { String provision(); }\ninterface Storage { String provision(); }\ninterface CloudFactory { VM createVM(); Storage createStorage(); }\nclass EC2 implements VM { public String provision(){return \"EC2\";} }\nclass S3 implements Storage { public String provision(){return \"S3\";} }\nclass AWSFactory implements CloudFactory {\n public VM createVM(){return new EC2();}\n public Storage createStorage(){return new S3();}\n}\nCloudFactory f = new AWSFactory();\nSystem.out.println(f.createVM().provision());\nSystem.out.println(f.createStorage().provision());"
    },
    {
      "id": 9,
      "kind": "Code tracing",
      "prompt": "**Scenario:** An infrastructure tool stores a variable of declared type `CloudFactory`. It first references `new AWSFactory()` and creates a VM, then points to `new AzureFactory()` and creates another. Assume all four implementations exist and follow the Java interfaces.\n\n**Task:** State the expected concrete VM type before and after reassignment. Explain what method signatures the compiler sees versus which override runs at runtime.",
      "marks": 5,
      "memo": "Declared type and method availability stay CloudFactory (2); concrete outputs switch from AWS products to Azure products after assignment (2); dynamic dispatch occurs for both creation methods (1).",
      "snippet": "// Assume the following types are correctly implemented:\ninterface VirtualMachine { String provision(); }\ninterface CloudStorage { String provision(); }\ninterface CloudFactory {\n    VirtualMachine createVM();\n    CloudStorage createStorage();\n}\n// AWSFactory returns EC2 and S3Bucket;\n// AzureFactory returns AzureVM and AzureBlobContainer.\nCloudFactory f = new AWSFactory();\nVirtualMachine first = f.createVM();\nf = new AzureFactory();\nVirtualMachine second = f.createVM();"
    },
    {
      "id": 10,
      "kind": "Error identification",
      "prompt": "**Scenario:** An implementation of `CloudFactory` returns `AzureBlobContainer` when its caller asked `AWSFactory` to create storage. Both AzureBlobContainer and S3Bucket implement the common `CloudStorage` interface.\n\n**Task:** Does Java's type system necessarily reject this code? Explain the product-family compatibility error and how testing can detect it.",
      "marks": 7,
      "memo": "Java accepts the return when AzureBlobContainer implements CloudStorage (2); CloudFactory does not encode a provider marker in its return type, so a bad AWSFactory can mix providers (3); factory-family integration/contract tests or provider tags/typed families are needed (2).",
      "snippet": "class AWSFactory implements CloudFactory {\n public VM createVM(){ return new EC2(); }\n public Storage createStorage(){ return new AzureBlobContainer(); }\n}"
    },
    {
      "id": 11,
      "kind": "Java debugging",
      "prompt": "**Scenario:** The abstract factory interface declares `VirtualMachine createVM()`. The AWS implementation overrides the method with a more specific `EC2 createVM()`. `EC2 implements VirtualMachine`.\n\n**Task:** Does this compile? State the Java rule for **covariant return types**, and explain the condition under which it would fail.",
      "marks": 5,
      "memo": "Covariant return is legal when EC2 implements/extends VirtualMachine (3); method name and parameter signature match (2).",
      "snippet": "interface CloudFactory { VirtualMachine createVM(); }\nclass AWSFactory implements CloudFactory {\n @Override public EC2 createVM() { return new EC2(); }\n}"
    },
    {
      "id": 12,
      "kind": "Diagram reasoning",
      "prompt": "**Scenario:** The following class diagram represents a cloud Abstract Factory. The provider abstractions are simplified and the arrows marked 'creates' represent construction dependencies, not class inheritance.\n\n**Task:** Identify two concrete factories, two abstract product contracts, four concrete products and the relationships that keep each provider's family together.",
      "marks": 8,
      "memo": "AWSFactory and AzureFactory implement CloudFactory (2); VM→EC2/AzureVM hierarchy (2); Storage→S3/Blob hierarchy (2); dotted arrows identify matching concrete product construction (2).",
      "diagram": "classDiagram\nclass CloudFactory {\n <<interface>>\n +createVM() VM\n +createStorage() Storage\n}\nclass AWSFactory\nclass AzureFactory\nCloudFactory <|.. AWSFactory\nCloudFactory <|.. AzureFactory\nclass VM {\n <<interface>>\n}\nclass Storage {\n <<interface>>\n}\nclass EC2\nclass AzureVM\nclass S3Bucket\nclass BlobContainer\nVM <|.. EC2\nVM <|.. AzureVM\nStorage <|.. S3Bucket\nStorage <|.. BlobContainer\nAWSFactory ..> EC2 : creates\nAWSFactory ..> S3Bucket : creates\nAzureFactory ..> AzureVM : creates\nAzureFactory ..> BlobContainer : creates"
    },
    {
      "id": 13,
      "kind": "Scenario application",
      "prompt": "**Scenario:** A deployment previously needed only a VM and object storage. New requirements say it also needs a load balancer: an AWS Elastic Load Balancer with AWS deployments and an Azure Load Balancer with Azure deployments.\n\n**Task:** Extend the Abstract Factory hierarchy. List the new abstract product interface, the method added to CloudFactory, and the concrete implementations in each provider.",
      "marks": 8,
      "memo": "Abstract LoadBalancer interface (2); CloudFactory.createLoadBalancer() (2); AWS ELB and Azure Load Balancer concrete classes (2); both concrete factories implement method (2)."
    },
    {
      "id": 14,
      "kind": "Scenario analysis",
      "prompt": "**Scenario:** A previously AWS-only `deploy(CloudFactory factory)` method creates `VirtualMachine` and `CloudStorage`, then calls `provision()` on each. Its body never names EC2 or S3. The team wants to support Azure with no copy-pasted deployment workflow.\n\n**Task:** Specify the concrete product and factory classes needed for Azure, where the factory is selected, and what should remain unchanged.",
      "marks": 7,
      "memo": "Add Azure concrete VM/storage implementations (2); AzureFactory implements creation methods (2); select/inject AzureFactory at composition boundary (2); test common VM/storage contracts (1)."
    },
    {
      "id": 15,
      "kind": "Java implementation",
      "prompt": "**Scenario:** You are writing a teaching simulator that logs cloud resource creation, not a program that makes actual AWS/Azure SDK calls. One provider returns EC2 and S3; the other returns AzureVM and BlobContainer. The client only understands two product contracts.\n\n**Task:** Write Java interfaces `CloudFactory`, `VirtualMachine`, `CloudStorage`, and concrete provider factories that return the correct products. Show suitable product method signatures.",
      "marks": 10,
      "memo": "CloudFactory declares createVM and createStorage, returning respective interfaces (3); both factory classes implement their methods (2); AWS maps EC2/S3 and Azure maps AzureVM/BlobContainer (4); include product provision method signatures (1)."
    },
    {
      "id": 16,
      "kind": "Java implementation",
      "prompt": "**Scenario:** A cloud deployment service uses `deploy(CloudFactory factory)` to provision a VM and associated object storage. Sometimes VM provisioning succeeds but storage provisioning fails. It is unacceptable to leave a billable orphan VM without reporting the failure.\n\n**Task:** Write or sketch Java `deploy` using only provider-neutral interfaces. Include error reporting and a reasonable cleanup/rollback strategy for partial failure.",
      "marks": 9,
      "memo": "Receive CloudFactory rather than provider flags (2); create both VM and storage (2); provision via interfaces only (2); report failures and rollback/cleanup a successfully created VM if storage fails (3)."
    },
    {
      "id": 17,
      "kind": "Testing",
      "prompt": "**Scenario:** After adding Azure, a developer accidentally returns an AWS object-storage type from AzureFactory. The CI suite currently checks only that methods return non-null, so it misses this bug.\n\n**Task:** Propose four automated tests: correct AWS VM, correct AWS storage, correct Azure family, and generic deployment behavior. Explain what an assertion must check beyond non-null.",
      "marks": 8,
      "memo": "AWS VM correct (2), AWS storage correct (2), Azure pair correct (2), deploy accepts either with stub/mocked contracts (2)."
    },
    {
      "id": 18,
      "kind": "Comparison",
      "prompt": "**Scenario:** An existing factory framework has an overridable `createVM()` method in a creator hierarchy. Another project requires one provider object to create **both** a VM and storage resource.\n\n**Task:** Compare **Factory Method** and **Abstract Factory**, focusing on their main intent and structure. Explain how a concrete Abstract Factory can itself implement factory methods.",
      "marks": 7,
      "memo": "Factory Method polymorphically decides a concrete product via a creator method (3); Abstract Factory groups multiple related creation methods into families (3); one can implement the other (1)."
    },
    {
      "id": 19,
      "kind": "Architecture trade-off",
      "prompt": "**Scenario:** A multi-cloud service currently supports two products (VM and storage) across AWS and Azure. Product management proposes both a third cloud provider, Google Cloud, and a new **managed database** product type.\n\n**Task:** Which change is generally easier to add in Abstract Factory: a new provider family or a new product category? Identify which interfaces/implementations need updating in each case.",
      "marks": 8,
      "memo": "New provider = implement existing CloudFactory methods in GCPFactory and products (4); new product kind requires editing factory interface and every existing provider factory (3); recognize interface evolution/testing cost (1)."
    },
    {
      "id": 20,
      "kind": "Integrated reasoning",
      "prompt": "**Scenario:** A company deploys three related resources per environment: compute, object storage, and load balancing. It supports AWS and Azure today. Operators choose the provider at deployment start, and the generic workflow uses only Java abstractions.\n\n**Task:** Design the full family-based factory solution, including interfaces and product mappings. Explain why the workflow no longer needs provider-specific branches, and why Java alone cannot prove a factory never returns a mismatched product family.",
      "marks": 10,
      "memo": "Common factory and three product contracts (3); concrete provider families implement all (3); composition root picks provider; deploy never branches by provider (2); types may not prevent mixed families if concrete factory intentionally returns wrong provider, so tests/constraints needed (2)."
    }
  ],
  "totalMarks": 115
};

window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-24-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 24,
  "title": "Spring Security · Paper 4: Tests, Threats & Debugging",
  "session": 1,
  "limitSeconds": 1800,
  "version": 3,
  "group": "spring-security",
  "intro": "20 Java Spring Security scenario questions on MockMvc tests, method proxies, CSRF failures, IDOR, logging and HTTP debugging.",
  "source": "Original Spring Security 6 and modern web application security revision questions.",
  "questions": [
    {
      "id": 1,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A protected Spring MVC endpoint works when called normally but your `MockMvc` test expects a 200 with no credentials and receives 401 or a redirect. What's the most likely explanation?",
      "options": [
        "JPA entities cannot be tested",
        "GET always requires CSRF tokens",
        "The test method must be static",
        "Security is active and the test needs an appropriate authenticated principal or must expect an unauthenticated response"
      ],
      "correct": "D",
      "memo": "A secured endpoint may respond with 401 or an authentication redirect when no principal is provided. Match the test to the authorization contract.",
      "marks": 1
    },
    {
      "id": 2,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** A MockMvc POST to a session-authenticated, CSRF-protected endpoint returns 403 despite an authenticated test user. What should the test add?",
      "options": [
        "`.accept(\"image/jpeg\")`",
        "`.with(user(\"admin\").roles(\"ADMIN\"))` is enough to bypass CSRF",
        "`.with(csrf())` to the request where appropriate",
        "`.with(anonymous())`"
      ],
      "correct": "C",
      "memo": "An authenticated user is not enough for CSRF-protected state-changing requests; add a CSRF token in test requests.",
      "snippet": "mockMvc.perform(post(\"/profile\")\n  .with(user(\"alice\").roles(\"USER\"))\n  .with(csrf()))\n  .andExpect(status().isOk());",
      "marks": 1
    },
    {
      "id": 3,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A `@PreAuthorize` rule reads `#id`, but the Java method parameter is named `recordId` and no suitable parameter metadata/annotation maps it to `id`. What is the probable failure?",
      "options": [
        "Spring converts it to a CSS class",
        "The SpEL parameter reference may not resolve as intended, causing authorization failure",
        "Method-security expressions ignore parameter names",
        "The database renames the parameter"
      ],
      "correct": "B",
      "memo": "Method-security expressions need valid parameter references. Match the actual parameter or use an explicit naming mechanism.",
      "marks": 1
    },
    {
      "id": 4,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A service method annotated `@PreAuthorize` is called from another method inside the same instance via `this.protectedMethod()`. With proxy-based interception, why may the check not execute?",
      "options": [
        "Self-invocation bypasses the proxy boundary",
        "Java will not compile two methods in the same class",
        "Security only executes for GET requests",
        "JVM always interprets `this` as anonymous"
      ],
      "correct": "A",
      "memo": "Spring AOP proxy advice typically applies to calls crossing the proxy, not direct self-invocation.",
      "marks": 1
    },
    {
      "id": 5,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A controller catches every AuthenticationException and always returns HTTP 200 with `{error:'invalid'}`. What's the API concern?",
      "options": [
        "It makes success and failure indistinguishable through HTTP status codes, breaking standard client handling",
        "Returning JSON is forbidden",
        "All browsers erase failed responses",
        "It prevents controller mapping"
      ],
      "correct": "A",
      "memo": "Use appropriate status codes, e.g., 401 for unauthenticated access; do not disguise authentication failure as success.",
      "marks": 1
    },
    {
      "id": 6,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A developer tests an admin endpoint using `@WithMockUser(roles=\"ADMIN\")`. Which authority is typically granted to that test user?",
      "options": [
        "`ADMIN` without prefix",
        "`SCOPE_ADMIN` only",
        "Every role in the application",
        "`ROLE_ADMIN`"
      ],
      "correct": "D",
      "memo": "WithMockUser roles commonly map to ROLE_-prefixed GrantedAuthority values.",
      "marks": 1
    },
    {
      "id": 7,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** A test request uses `@WithMockUser(username=\"jo\", roles=\"USER\")`. The controller is guarded by `hasRole('ADMIN')`. What result should a correctly configured method-security test expect?",
      "options": [
        "The controller is skipped only for anonymous users",
        "ROLE_USER is automatically promoted to ROLE_ADMIN",
        "Access is denied",
        "Access is granted because the user exists"
      ],
      "correct": "C",
      "memo": "The authenticated mock principal has ROLE_USER, not ROLE_ADMIN, so the admin rule denies access.",
      "snippet": "@PreAuthorize(\"hasRole('ADMIN')\")\npublic String restricted() { return \"secret\"; }",
      "marks": 1
    },
    {
      "id": 8,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** Your logging filter records the complete `Authorization` header for every request. What's the most important security flaw?",
      "options": [
        "It forces 404 responses",
        "It may leak bearer tokens into log systems",
        "It improves encryption",
        "Authorization headers cannot contain secrets"
      ],
      "correct": "B",
      "memo": "Bearer tokens are credentials. Logging them can expose authenticated access via logs and monitoring systems.",
      "marks": 1
    },
    {
      "id": 9,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An API stores the login user's numeric ID in a request query parameter and trusts it to select whose records to edit. What is the main authorization risk?",
      "options": [
        "GET endpoints cannot have parameters",
        "IDOR / broken object-level authorization: an attacker can change the ID to target someone else's records",
        "SQL is always executed twice",
        "Spring's role prefix is doubled"
      ],
      "correct": "B",
      "memo": "Bind authorization to the authenticated principal and resource ownership rather than trusting caller-supplied object IDs.",
      "marks": 1
    },
    {
      "id": 10,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A security policy permits public access to `/api/items/*` but assumes that wildcard includes `/api/items/2026/photos/1`. What should the team verify?",
      "options": [
        "Path-matcher semantics: a single-segment wildcard may not match nested paths",
        "`*` always matches every nested path",
        "All routes share identical patterns across matcher implementations",
        "The JPA transaction timeout"
      ],
      "correct": "A",
      "memo": "Matcher semantics vary; a single `*` generally matches a segment, while `**` commonly covers multiple path segments. Validate actual chosen matcher behavior.",
      "marks": 1
    },
    {
      "id": 11,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A user is authenticated, but a controller action is forbidden by authorization rules. The application responds 403. What should the developer inspect first?",
      "options": [
        "CSS media queries",
        "JPA generation strategy",
        "File upload multipart size",
        "Assigned authorities and the applicable authorization matcher or method rule"
      ],
      "correct": "D",
      "memo": "An authenticated user's 403 usually points to missing authority, ownership, CSRF, or another authorization failure.",
      "marks": 1
    },
    {
      "id": 12,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A POST protected by session authentication fails with 403 even for an admin. Which cause is worth checking before assuming role mapping is broken?",
      "options": [
        "Whether the request uses DTOs",
        "Whether there is a favicon",
        "A missing or invalid CSRF token",
        "Whether the application has an index on the user table"
      ],
      "correct": "C",
      "memo": "CSRF checks can reject POST before authorization outcomes; investigate error details and the security filter chain.",
      "marks": 1
    },
    {
      "id": 13,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A CORS preflight OPTIONS request contains an Origin and Access-Control-Request-Method but no session cookie. Why may correct CORS processing order matter?",
      "options": [
        "CSRF tokens must be in preflight bodies",
        "Origin header proves authentication",
        "Preflight typically lacks credentials and should be handled by appropriate CORS processing before security rules deny it as unauthenticated",
        "OPTIONS always bypasses all servlet filters automatically"
      ],
      "correct": "C",
      "memo": "Proper CORS integration can handle preflight requests without requiring user credentials and avoid accidental 401/403 responses.",
      "marks": 1
    },
    {
      "id": 14,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A team adds a password reset token to a URL and records full URLs in analytics. What should be addressed?",
      "options": [
        "Passwords should be embedded in token URLs",
        "Secret reset tokens can leak through logs, referrers, and analytics; minimize exposure and use short-lived one-time tokens",
        "Logging secrets is harmless behind HTTPS",
        "Reset tokens should be valid forever"
      ],
      "correct": "B",
      "memo": "Reset URLs often carry sensitive temporary credentials; protect against disclosure, replay and persistence.",
      "marks": 1
    },
    {
      "id": 15,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A project implements custom authentication but stores password hashes using fast SHA-256 without a work factor or per-password salt. Which security improvement is most appropriate?",
      "options": [
        "Use an adaptive password hashing algorithm supported by PasswordEncoder, e.g. bcrypt/Argon2 where available",
        "Double the password length by repetition only",
        "Remove all authentication error handling",
        "Replace hashes with Base64 strings"
      ],
      "correct": "A",
      "memo": "Generic fast hashes are inappropriate for password storage. Adaptive, salted password hashing increases resistance to offline cracking.",
      "marks": 1
    },
    {
      "id": 16,
      "kind": "True or false",
      "prompt": "**True/False:** Mocking an authenticated principal automatically provides a valid CSRF token for every state-changing MockMvc request.",
      "correct": "false",
      "memo": "Authentication and CSRF are separate filters/requirements; tests may need to supply both.",
      "marks": 1
    },
    {
      "id": 17,
      "kind": "True or false",
      "prompt": "**True/False:** Spring's proxy-based method-security interception may be bypassed by direct self-invocation.",
      "correct": "true",
      "memo": "Calling the secured method through `this` can avoid the proxy and its advice.",
      "marks": 1
    },
    {
      "id": 18,
      "kind": "True or false",
      "prompt": "**True/False:** Authorization must be checked on a server even when the frontend hides buttons for unauthorized users.",
      "correct": "true",
      "memo": "Client-side UI is not a security boundary. Backend authorization is required.",
      "marks": 1
    },
    {
      "id": 19,
      "kind": "True or false",
      "prompt": "**True/False:** Logging bearer tokens in plaintext is safe whenever the log directory is not publicly browsable.",
      "correct": "false",
      "memo": "Credentials can leak through log storage, access, retention, or incidents; avoid recording bearer tokens.",
      "marks": 1
    },
    {
      "id": 20,
      "kind": "True or false",
      "prompt": "**True/False:** A correctly authenticated user can still fail a POST because of CSRF checks unrelated to their role.",
      "correct": "true",
      "memo": "A POST may require a valid CSRF token independent of the user's authorization roles.",
      "marks": 1
    }
  ],
  "totalMarks": 20
};

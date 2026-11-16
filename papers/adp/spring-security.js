window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-3-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 3,
  "title": "Spring Security: Intermediate",
  "session": 1,
  "limitSeconds": 5400,
  "version": 1,
  "group": "spring-security",
  "intro": "30 applied Spring Security questions. Java configuration, identity and password storage, request rules, method security, sessions, CSRF, code review and testing. No OAuth flows.",
  "source": "Spring Security official servlet architecture, Java configuration and HTTP request authorization reference; examples are original study material.",
  "resources": [
    {
      "title": "Spring Security: Java Configuration",
      "url": "https://docs.spring.io/spring-security/reference/servlet/configuration/java.html"
    },
    {
      "title": "Spring Security: Filter Architecture",
      "url": "https://docs.spring.io/spring-security/reference/servlet/architecture.html"
    },
    {
      "title": "Spring Security: Authorize Requests",
      "url": "https://docs.spring.io/spring-security/reference/servlet/authorization/authorize-http-requests.html"
    }
  ],
  "questions": [
    {
      "id": 1,
      "kind": "Definitions",
      "prompt": "Distinguish **authentication** and **authorization** in Spring Security, using a student portal example.",
      "marks": 4,
      "memo": "Authentication establishes identity (2), authorization decides permissions for a known principal (2). E.g. login proves student identity; role-based rule determines access to admin reports."
    },
    {
      "id": 2,
      "kind": "Definitions",
      "prompt": "Explain the responsibility of a `SecurityFilterChain` bean and why its filters execute before a Spring MVC controller.",
      "marks": 4,
      "memo": "Defines request security rules and configures filters (2). Servlet filters intercept HTTP requests before controller dispatch to apply authentication, exploit protection and authorization (2)."
    },
    {
      "id": 3,
      "kind": "Definitions",
      "prompt": "What are `UserDetailsService`, `UserDetails` and `PasswordEncoder` responsible for?",
      "marks": 6,
      "memo": "UserDetailsService loads a user by username (2); UserDetails carries username, stored encoded password, authorities and account status (2); PasswordEncoder matches raw credentials against encoded representation and encodes new passwords (2)."
    },
    {
      "id": 4,
      "kind": "Short answer",
      "prompt": "Contrast `hasRole(\"ADMIN\")` with `hasAuthority(\"ROLE_ADMIN\")`. Why does the prefix matter?",
      "marks": 4,
      "memo": "`hasRole(\"ADMIN\")` looks for ROLE_ADMIN convention (2); `hasAuthority(\"ROLE_ADMIN\")` checks that exact authority string (2). Do not write hasRole(\"ROLE_ADMIN\") expecting no prefixing."
    },
    {
      "id": 5,
      "kind": "Multiple choice",
      "prompt": "A request arrives at `/admin/reports` from an authenticated user with only `ROLE_USER`. What is the expected authorization outcome?",
      "marks": 1,
      "memo": "B. Denied (typically 403); authenticated but lacks required role.",
      "options": [
        "Always 200 because logged in.",
        "Forbidden/denied due to missing ADMIN role.",
        "Redirect to /admin automatically.",
        "User's password is reset."
      ],
      "correct": "B"
    },
    {
      "id": 6,
      "kind": "Multiple choice",
      "prompt": "Which rule permits unauthenticated requests to a public registration endpoint?",
      "marks": 1,
      "memo": "A. `.requestMatchers(\"/register\").permitAll()`.",
      "options": [
        ".requestMatchers(\"/register\").permitAll()",
        ".anyRequest().denyAll()",
        ".requestMatchers(\"/register\").authenticated()",
        ".requestMatchers(\"/register\").hasRole(\"ADMIN\")"
      ],
      "correct": "A"
    },
    {
      "id": 7,
      "kind": "Multiple choice",
      "prompt": "Which component should normally be responsible for checking a submitted password against a stored encoded hash?",
      "marks": 1,
      "memo": "C. PasswordEncoder.matches(raw, encoded).",
      "options": [
        "HttpServletRequest.toString()",
        "PasswordEncoder.decode()",
        "PasswordEncoder.matches(raw, encoded)",
        "SecurityFilterChain.getPassword()"
      ],
      "correct": "C"
    },
    {
      "id": 8,
      "kind": "True or false",
      "prompt": "`permitAll()` means Spring Security never runs any filters for that URL. Correct the statement if false.",
      "marks": 2,
      "memo": "False. PermitAll is an authorization decision; the matching security filter chain can still run and provide other protections. It does not mean 'exclude from all filters'.",
      "correct": "false"
    },
    {
      "id": 9,
      "kind": "True or false",
      "prompt": "A user with `ROLE_USER` can automatically access an endpoint protected by `hasRole(\"ADMIN\")` because the user is authenticated. Correct if false.",
      "marks": 2,
      "memo": "False. Authentication does not grant every authority. Missing ROLE_ADMIN causes access denial.",
      "correct": "false"
    },
    {
      "id": 10,
      "kind": "Fill in the blanks",
      "prompt": "Complete a minimal security rule set. Provide exact method names.",
      "marks": 2,
      "memo": "requestMatchers; authenticated.",
      "blanks": 2,
      "accepted": [
        [
          "requestMatchers"
        ],
        [
          "authenticated"
        ]
      ],
      "snippet": "http.authorizeHttpRequests(auth -> auth\n  .__1__(\"/login\", \"/register\").permitAll()\n  .anyRequest().__2__()\n);"
    },
    {
      "id": 11,
      "kind": "Fill in the blanks",
      "prompt": "Complete the role check and form-login configuration.",
      "marks": 2,
      "memo": "hasRole; formLogin.",
      "blanks": 2,
      "accepted": [
        [
          "hasRole"
        ],
        [
          "formLogin"
        ]
      ],
      "snippet": "http\n  .authorizeHttpRequests(auth -> auth\n    .requestMatchers(\"/admin/**\").__1__(\"ADMIN\")\n    .anyRequest().authenticated())\n  .__2__(Customizer.withDefaults());"
    },
    {
      "id": 12,
      "kind": "Matching",
      "prompt": "Match the Spring Security term with its responsibility.",
      "marks": 3,
      "memo": "1 → C, 2 → A, 3 → B.",
      "matchItems": [
        {
          "text": "Stores the currently authenticated principal for request processing",
          "correct": "C"
        },
        {
          "text": "Loads application user information by username",
          "correct": "A"
        },
        {
          "text": "Hashes and verifies submitted passwords",
          "correct": "B"
        }
      ],
      "matchOptions": [
        {
          "letter": "A",
          "text": "UserDetailsService"
        },
        {
          "letter": "B",
          "text": "PasswordEncoder"
        },
        {
          "letter": "C",
          "text": "SecurityContext"
        },
        {
          "letter": "D",
          "text": "ViewResolver"
        }
      ]
    },
    {
      "id": 13,
      "kind": "Identify the term",
      "prompt": "Which exception type is commonly used when authorization fails for a user attempting a forbidden action?",
      "marks": 1,
      "memo": "AccessDeniedException.",
      "accepted": [
        [
          "AccessDeniedException",
          "org.springframework.security.access.AccessDeniedException"
        ]
      ]
    },
    {
      "id": 14,
      "kind": "Code tracing",
      "prompt": "For the configuration below, determine whether unauthenticated `/health`, authenticated USER `/profile`, and authenticated USER `/admin/audit` are permitted.",
      "marks": 6,
      "memo": "`/health` permitAll (2); `/profile` authenticated permitted (2); `/admin/audit` denied without ROLE_ADMIN (2).",
      "snippet": "http.authorizeHttpRequests(auth -> auth\n  .requestMatchers(\"/health\").permitAll()\n  .requestMatchers(\"/admin/**\").hasRole(\"ADMIN\")\n  .anyRequest().authenticated()\n);"
    },
    {
      "id": 15,
      "kind": "Error identification",
      "prompt": "The broad rule appears before the restrictive admin rule. Explain why this can be dangerous and reorder the rules.",
      "marks": 6,
      "memo": "The first matching authorization rule applies; `anyRequest().permitAll()` before admin either violates config ordering restrictions or defeats intended specific rule (3). Put admin matcher first and catch-all last (3).",
      "snippet": "http.authorizeHttpRequests(auth -> auth\n  .anyRequest().permitAll()\n  .requestMatchers(\"/admin/**\").hasRole(\"ADMIN\")\n);"
    },
    {
      "id": 16,
      "kind": "Java implementation",
      "prompt": "Write a Spring Security configuration class containing a `SecurityFilterChain` bean that permits `/login` and `/public/**`, requires `ADMIN` for `/admin/**`, and requires login everywhere else. Enable form login.",
      "marks": 9,
      "memo": "Rubric: @Configuration/bean method (2), authorizeHttpRequests (1), permitAll patterns (2), ADMIN role (2), anyRequest authenticated + formLogin + http.build() (2). Use modern lambda DSL.",
      "snippet": "@Configuration\nclass SecurityConfig {\n  @Bean\n  SecurityFilterChain chain(HttpSecurity http) throws Exception {\n    // Fill in the rules using lambda DSL\n    return http.build();\n  }\n}"
    },
    {
      "id": 17,
      "kind": "Java debugging",
      "prompt": "The following bean keeps plaintext user passwords. Explain the risk and provide an improved version using a suitable encoder.",
      "marks": 7,
      "memo": "Plaintext storage can leak credentials and insecure comparisons (2). Configure PasswordEncoder such as BCryptPasswordEncoder (2); store encoded hash at user creation and use matches via auth flow (3).",
      "snippet": "@Bean\nUserDetailsService users() {\n  UserDetails u = User.withUsername(\"student\")\n    .password(\"secret123\")\n    .roles(\"USER\").build();\n  return new InMemoryUserDetailsManager(u);\n}"
    },
    {
      "id": 18,
      "kind": "Diagram reasoning",
      "prompt": "Use the request-processing diagram. Identify where authentication and authorization occur, and why a controller should not be the only place validating access.",
      "marks": 6,
      "memo": "Filter chain performs credentials/principal processing (2) and authorization policy (2) before MVC controller; controller-only checks can be inconsistent/bypassed in other endpoints and defense in depth is appropriate (2).",
      "diagram": "flowchart LR\n R[HTTP request] --> F[Security filters]\n F --> A[Authentication]\n A --> Z[Authorization]\n Z -->|Allowed| C[Spring MVC controller]\n Z -->|Denied| D[401 or 403 response]"
    },
    {
      "id": 19,
      "kind": "Code tracing",
      "prompt": "A controller declares `@PreAuthorize(\"hasRole('ADMIN')\")` but has method security disabled. What behavior might differ from the developer's expectation?",
      "marks": 6,
      "memo": "The annotation is not enforced unless method security infrastructure is enabled (typically @EnableMethodSecurity) (3). Request-level rules may still protect routes, but cannot assume this method annotation runs (3).",
      "snippet": "@Service\nclass ReportService {\n  @PreAuthorize(\"hasRole('ADMIN')\")\n  public String fullReport() { return \"secret\"; }\n}"
    },
    {
      "id": 20,
      "kind": "Comparison",
      "prompt": "Compare **request-level authorization** using `requestMatchers` and **method-level authorization** using `@PreAuthorize`. When would you use both?",
      "marks": 6,
      "memo": "Request-level protects URL entry points in filter chain (2); method-level protects service invocation regardless of caller/protocol (2); combine for defense in depth and business-level security (2)."
    },
    {
      "id": 21,
      "kind": "Scenario application",
      "prompt": "An API serves `/api/catalog` publicly but restricts `/api/orders` to signed-in users. Write the matcher ordering and explain what happens when an anonymous user POSTs to `/api/orders`.",
      "marks": 6,
      "memo": "Put public matcher first, orders authenticated, anyRequest policy (3). Anonymous denied/challenged for authentication; if session and CSRF protection relevant, stateful unsafe methods may separately require a valid CSRF token (3)."
    },
    {
      "id": 22,
      "kind": "CSRF reasoning",
      "prompt": "A developer disables CSRF protection for an HTML form-based banking site because POST requests receive HTTP 403. Explain the risk and a proper fix.",
      "marks": 8,
      "memo": "Browser auto-sends cookies, so CSRF can trick a signed-in browser into unsafe actions (3). Keep CSRF enabled for session-authenticated forms; include framework-issued CSRF token in form/requests (3). Disabling is not a blanket fix and may only make sense for suitable non-cookie stateless APIs (2)."
    },
    {
      "id": 23,
      "kind": "Session reasoning",
      "prompt": "Explain how stateful login sessions differ from a stateless HTTP Basic API in terms of request authentication and browser behavior. Do not discuss OAuth.",
      "marks": 6,
      "memo": "Session stores authenticated context/server-managed browser session (2); stateless API reauthenticates on each request, e.g. HTTP Basic credentials supplied each time (2); browser credentials/cookies and CSRF considerations differ by mechanism (2)."
    },
    {
      "id": 24,
      "kind": "Security scenario",
      "prompt": "An administrator accidentally grants `ROLE_ADMIN` to every new registered user. Which system component and data flow should be fixed? Propose two protective tests.",
      "marks": 7,
      "memo": "Registration assigns least-privilege ROLE_USER on server, never trusting client-supplied roles (3); test new users lack ROLE_ADMIN (2) and admin endpoints reject such accounts (2)."
    },
    {
      "id": 25,
      "kind": "Java debugging",
      "prompt": "This filter logs a password header before authenticating. Explain two issues and propose a safe logging policy.",
      "marks": 6,
      "memo": "Sensitive credentials must not enter logs (2); custom password header and printing are insecure/poor authentication design (2); use standard auth mechanism, redact secrets, log principal/result/trace ID (2).",
      "snippet": "String password = request.getHeader(\"X-Password\");\nlog.info(\"Login attempt password={}\", password);\nchain.doFilter(request, response);"
    },
    {
      "id": 26,
      "kind": "Error identification",
      "prompt": "Explain the problem with returning `200 OK` when an anonymous user requests `/api/private`. Which 4xx statuses distinguish not authenticated and authenticated but forbidden?",
      "marks": 6,
      "memo": "Anonymous: 401 Unauthorized/challenge is typical for HTTP API authentication failure (2). Authenticated lacking authority: 403 Forbidden (2). Returning 200 exposes data/obscures protection; note browser form login may redirect instead of 401 (2)."
    },
    {
      "id": 27,
      "kind": "Testing",
      "prompt": "Write an outline of **three** MockMvc security tests for public endpoints, protected endpoints, and admin-only endpoints. State user context and expected status.",
      "marks": 6,
      "memo": "One public endpoint succeeds anonymously (2); protected endpoint denies/challenges anonymous (2); admin-only endpoint denies USER (2). Use @WithMockUser / test request post-processors as appropriate."
    },
    {
      "id": 28,
      "kind": "Code review",
      "prompt": "A developer tests `hasAuthority(\"ADMIN\")` but users have the authority `ROLE_ADMIN`. Explain failure and correct the configuration two different ways.",
      "marks": 6,
      "memo": "Exact authority mismatched (2). Use `hasAuthority(\"ROLE_ADMIN\")` (2) or `hasRole(\"ADMIN\")` (2).",
      "snippet": "UserDetails u = User.withUsername(\"ana\")\n  .password(\"{noop}demo\")\n  .roles(\"ADMIN\").build();\n// Authorization:\n.requestMatchers(\"/admin/**\").hasAuthority(\"ADMIN\")"
    },
    {
      "id": 29,
      "kind": "Implementation",
      "prompt": "Implement a service method secured with `@PreAuthorize` so a user can read their own profile or any ADMIN can read it. Specify a necessary supporting configuration annotation.",
      "marks": 8,
      "memo": "`@EnableMethodSecurity` for method security (2). Example `@PreAuthorize(\"#username == authentication.name or hasRole('ADMIN')\")` with matching parameter names (4). Ensure service method/return and deny other users (2).",
      "snippet": "public Profile readProfile(String username) {\n  return repository.findByUsername(username).orElseThrow();\n}"
    },
    {
      "id": 30,
      "kind": "Integrated review",
      "prompt": "Design security for a student course portal with public catalogue, learner dashboard, admin dashboard and a protected `publishResults()` service method. Give matcher order, UserDetailsService, encoder choice, method security rule, and four tests.",
      "marks": 12,
      "memo": "Matcher order public → admin → authenticated catch-all (3); UserDetailsService and encoded password storage (2); @EnableMethodSecurity and @PreAuthorize ADMIN on publishResults (2); CSRF/session consideration for browser forms (1); tests for anonymous public, anonymous protected, USER admin denied, ADMIN publish success (4).",
      "diagram": "flowchart TD\n C[Course catalogue] --> P[permitAll]\n L[Learner dashboard] --> U[authenticated]\n A[Admin dashboard] --> R[ROLE_ADMIN]\n S[publishResults service] --> M[Method authorization]"
    }
  ],
  "totalMarks": 150
};

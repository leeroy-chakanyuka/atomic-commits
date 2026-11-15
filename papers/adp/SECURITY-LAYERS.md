# ADP Spring Security: learning layers

This is a curriculum plan, not an instruction to publish all the planned papers now. **Only Layer 1 is included in the current review branch.**

## Layer 1: Intermediate Spring Security (live pilot, 30 questions)

Learn the architecture and make the usual application decisions correctly:

- Authentication vs authorization: `Authentication`, `SecurityContext`, authorities.
- `SecurityFilterChain` and the modern lambda-based `HttpSecurity` configuration.
- URL matchers and ordering: `permitAll`, `authenticated`, `hasRole`, `hasAuthority`.
- `UserDetailsService`, `UserDetails`, safe password encoding and least-privilege registration.
- Form login, session state, error responses (401/403), method security with `@PreAuthorize` and `@EnableMethodSecurity`.
- CSRF on session/cookie-based apps, especially forms. Avoid blanket disabling.
- Code tracing, missing-annotation debugging, permission regressions and MockMvc tests.

**Question mix:** concept identification, multiple-choice, true/false with corrections, fill-ins, code tracing, buggy configuration, secure Java implementations, diagrams and integrated case studies.

## Layer 2: Application integration (later, after quality review)

Focus on a realistic Spring Boot app with a registration endpoint, login form, authorization rules and a persistent user repository. Cases would examine:

- Loading `UserDetails` from JPA repositories while keeping persistence and security concerns separate.
- Wiring `PasswordEncoder` into registration rather than storing raw passwords.
- Distinguishing 401, 403, redirects and validation errors in tests.
- `@PreAuthorize` on service methods, including object ownership checks.
- Session behavior and CSRF testing using `MockMvc`.

## Layer 3: Advanced practical review (later; optional)

- Security regression tests and mistaken matcher ordering.
- Session fixation, insecure logging, overly broad roles and defense in depth.
- Proxy method-security limitations and self-invocation.
- Secure-by-default API configuration without introducing an OAuth deep dive.

## Out of scope for this exam pilot

OAuth2 authorization-server setup, social login, OpenID Connect, SAML, complex token brokerage, and large identity-platform architecture are intentionally excluded. Introducing JWT is also **not** required by the current intermediate paper.

## Quality gate before full rollout

1. Read the **questions** without the memo: can you infer the task and assumptions?
2. Check the source code examples against modern Spring Security servlet configuration.
3. Test each objective answer and the manual-marking instructions.
4. Ensure errors are unsafe in realistic ways, not contrived syntax mistakes only.
5. Keep the memorandums hidden until submission; do not change deployed PRM/ITS keys.

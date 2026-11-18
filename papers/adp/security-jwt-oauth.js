window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-23-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 23,
  "title": "Spring Security · Paper 3: JWT, OAuth2 & Roles",
  "session": 1,
  "limitSeconds": 1800,
  "version": 3,
  "group": "spring-security",
  "intro": "20 Java Spring Security questions on JWT verification, resource-server configuration, authorities, scopes and OAuth2 concepts.",
  "source": "Original questions on Spring Security 6 OAuth2 resource servers; audience and issuer validation depend on explicit configuration.",
  "questions": [
    {
      "id": 1,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A browser sends a JWT in `Authorization: Bearer <token>` to a Spring OAuth2 resource server. Which activity is required before trusting the token's claims?",
      "options": [
        "Parse it as SQL",
        "Decode its Base64URL payload only",
        "Validate its signature, expiry, and relevant issuer/audience constraints as configured",
        "Ask the controller to compare Strings"
      ],
      "correct": "C",
      "memo": "JWT payloads are merely encoded, not inherently trustworthy. The resource server must validate the cryptographic signature and relevant registered claims.",
      "marks": 1
    },
    {
      "id": 2,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A client obtains an access token from an authorization server, then calls a protected API. Which role does the API usually perform?",
      "options": [
        "CSS rendering service",
        "OAuth2 resource server",
        "JPA entity manager",
        "OAuth2 authorization server automatically"
      ],
      "correct": "B",
      "memo": "The API consuming and validating bearer access tokens is a resource server, separate from the issuer/authorization server.",
      "marks": 1
    },
    {
      "id": 3,
      "kind": "Multiple choice",
      "prompt": "**Code reasoning:** Which Spring Security configuration is typically used to validate JWT bearer tokens on a resource server?",
      "options": [
        "`.oauth2ResourceServer(oauth2 -> oauth2.jwt(Customizer.withDefaults()))`",
        "`.formLogin(form -> form.disable())` alone",
        "`.authorizeHttpRequests(a -> a.anyRequest().permitAll())` only",
        "`.rememberMe(Customizer.withDefaults())`"
      ],
      "correct": "A",
      "memo": "oauth2ResourceServer().jwt() activates JWT resource-server authentication; appropriate issuer/jwk configuration is also required.",
      "snippet": "http.oauth2ResourceServer(o -> o.jwt(Customizer.withDefaults()));",
      "marks": 1
    },
    {
      "id": 4,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A JWT is syntactically well-formed and not expired, but its issuer is not the trusted issuer configured for your API. What should happen?",
      "options": [
        "Convert it to a session cookie automatically",
        "Grant ROLE_ADMIN",
        "Accept it because it has three dot-separated sections",
        "Reject it if issuer validation is required by the configured resource server"
      ],
      "correct": "D",
      "memo": "A token may be correctly formatted yet untrusted. Validate issuer according to your authorization-server configuration.",
      "marks": 1
    },
    {
      "id": 5,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A JWT header says `alg=none` while the API expects signed tokens from a trusted authority. Which behavior is safe?",
      "options": [
        "Treat it as a password hash",
        "Call the authorization server's logout endpoint",
        "Accept it if the username claim is present",
        "Reject unsigned tokens in a signed-token validation flow"
      ],
      "correct": "D",
      "memo": "An unsigned token must not bypass signature validation; trust only configured token algorithms and keys.",
      "marks": 1
    },
    {
      "id": 6,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A user has `ROLE_ADMIN` authority, but Spring's default JWT resource server maps scopes to `SCOPE_...` authorities. What do you need before `hasRole(\"ADMIN\")` will work with those tokens?",
      "options": [
        "Rename the endpoint to /admin",
        "Nothing, because `scope` always means role",
        "Map the relevant token claim into the expected role authority, or authorize using the actual `SCOPE_...` values",
        "Disable all signature verification"
      ],
      "correct": "C",
      "memo": "By default scopes appear as SCOPE_ authorities, not ROLE_ authorities. Configure appropriate converters or use hasAuthority for scopes.",
      "marks": 1
    },
    {
      "id": 7,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An access token has scopes `read:orders` but not `write:orders`. What is the clearest way to protect a read-only endpoint?",
      "options": [
        "Allow all authenticated callers to write",
        "Require a corresponding scope authority such as `SCOPE_read:orders`",
        "Trust the token's email domain alone",
        "Demand a browser session regardless of the API design"
      ],
      "correct": "B",
      "memo": "Method or request authorization may target mapped SCOPE_ authorities. Scope strings are independent of roles.",
      "marks": 1
    },
    {
      "id": 8,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A stolen bearer token remains valid until expiry. Which architectural limitation explains this risk?",
      "options": [
        "Bearer possession is sufficient to act as the holder unless additional protections exist",
        "JPA indexes automatically revoke tokens",
        "JWTs cannot have expiry claims",
        "Bearer tokens can only be used in browsers"
      ],
      "correct": "A",
      "memo": "Bearer tokens are proof-of-possession-free credentials; short expiry, transport security, audience restriction and revocation mechanisms may mitigate risk.",
      "marks": 1
    },
    {
      "id": 9,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** Your API serves two audiences: a public website and an internal back-office. A JWT intended for the public site's API is presented to the back-office API. What should be validated?",
      "options": [
        "The back-office resource server's expected `aud` audience",
        "Only the token's display name",
        "The first character of the token",
        "Whether it contains the word 'JWT'"
      ],
      "correct": "A",
      "memo": "Audience validation helps reject tokens issued for a different resource.",
      "marks": 1
    },
    {
      "id": 10,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An authorization server rotates signing keys and publishes JWKS. What is the resource server's relationship to JWKS?",
      "options": [
        "It should download private signing keys into every client",
        "It must store plaintext passwords in JWKS",
        "It ignores JWT signatures when keys rotate",
        "It can use trusted published public keys to validate signed tokens and accommodate key rotation"
      ],
      "correct": "D",
      "memo": "JWKS exposes public key material for verifying signatures. A configured JWK source can accommodate rotating public keys.",
      "marks": 1
    },
    {
      "id": 11,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An API endpoint is public and accepts optional bearer authentication. A malformed bearer token is submitted. Why might the request still be rejected even though the endpoint has permitAll()?",
      "options": [
        "The controller creates a session automatically",
        "Malformed JSON always means SQL injection",
        "Authentication filters may reject invalid presented credentials before the authorization decision",
        "permitAll disables all authentication filters"
      ],
      "correct": "C",
      "memo": "PermitAll controls authorization; presenting invalid bearer credentials can still fail authentication during the filter chain.",
      "marks": 1
    },
    {
      "id": 12,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** A developer writes `hasAuthority(\"ADMIN\")` but authentication grants `ROLE_ADMIN`. Why is access denied?",
      "options": [
        "Authority names are ignored by Spring",
        "hasAuthority checks for the exact authority String; ADMIN differs from ROLE_ADMIN",
        "hasAuthority automatically adds ROLE_",
        "Java compares Strings ignoring prefixes"
      ],
      "correct": "B",
      "memo": "hasAuthority checks an exact authority, unlike hasRole with its default ROLE_ convention.",
      "snippet": ".requestMatchers(\"/ops/**\").hasAuthority(\"ADMIN\")",
      "marks": 1
    },
    {
      "id": 13,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A refresh token is used to obtain a new access token. Should a normal resource server generally treat a refresh token as authorization to access `/orders`?",
      "options": [
        "Yes, all OAuth2 token types are interchangeable",
        "No; refresh tokens are ordinarily submitted to the authorization server's token endpoint, not used as resource-server access tokens",
        "Yes, because it expires later",
        "Only if the request is GET"
      ],
      "correct": "B",
      "memo": "Access and refresh tokens have distinct purposes. Resource servers ordinarily authorize requests using access tokens.",
      "marks": 1
    },
    {
      "id": 14,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A customer consents to a third-party app reading their profile without handing the app their password. Which OAuth2 benefit is illustrated?",
      "options": [
        "Delegated authorization with scoped access",
        "Hashing passwords at every API",
        "Relational joins",
        "Java inheritance"
      ],
      "correct": "A",
      "memo": "OAuth2 facilitates scoped delegated access through tokens instead of distributing account passwords.",
      "marks": 1
    },
    {
      "id": 15,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A frontend app uses Authorization Code with PKCE. What attack does PKCE primarily help prevent?",
      "options": [
        "XSS from any source on all pages",
        "SQL injection in every JDBC query",
        "Duplicate JPA results",
        "An intercepted authorization code being redeemed by an unauthorized party that lacks the code verifier"
      ],
      "correct": "D",
      "memo": "PKCE binds the authorization request to a secret code verifier, reducing authorization-code interception/replay by a different party.",
      "marks": 1
    },
    {
      "id": 16,
      "kind": "True or false",
      "prompt": "**True/False:** Base64URL-decoding a JWT and reading its claims is sufficient to prove that the token was issued by your trusted provider.",
      "correct": "false",
      "memo": "Encoded claims are untrusted until cryptographic and relevant claim validation succeeds.",
      "marks": 1
    },
    {
      "id": 17,
      "kind": "True or false",
      "prompt": "**True/False:** A validly signed JWT may still be unacceptable to an API because its `aud` audience is wrong.",
      "correct": "true",
      "memo": "Resource servers should validate audience where appropriate to prevent cross-resource token use.",
      "marks": 1
    },
    {
      "id": 18,
      "kind": "True or false",
      "prompt": "**True/False:** Spring Security's default scope-based JWT authorities commonly use an `SCOPE_` prefix.",
      "correct": "true",
      "memo": "The default resource-server authorities converter prefixes mapped scopes with SCOPE_.",
      "marks": 1
    },
    {
      "id": 19,
      "kind": "True or false",
      "prompt": "**True/False:** `hasAuthority(\"ADMIN\")` and `hasRole(\"ADMIN\")` are always interchangeable under the default role prefix.",
      "correct": "false",
      "memo": "hasAuthority checks exactly ADMIN; hasRole typically expects ROLE_ADMIN.",
      "marks": 1
    },
    {
      "id": 20,
      "kind": "True or false",
      "prompt": "**True/False:** OAuth2 scopes describe delegated permissions, while application roles may be modeled independently.",
      "correct": "true",
      "memo": "Roles and scopes are distinct concepts, even when both are mapped to GrantedAuthority objects.",
      "marks": 1
    }
  ],
  "totalMarks": 20
};

Spring React
========================================

How to run
----------------------------------------

```shell
docker compose up
```

```shell
./mvnw spring-boot:run -Dspring-boot.run.jvmArguments='
-Dserver.error.whitelabel.enabled=true
-Dapp.security.cors.allowed-origins=http://localhost:3000
-Dapp.frontend.oidc.authority=http://localhost:8000
-Dapp.frontend.oidc.redirectUri=http://localhost:8080
-Dapp.frontend.oidc.clientId=spring-react
-Dapp.frontend.oidc.authorizationEndpoint=http://localhost:8000/realms/master/protocol/openid-connect/auth
-Dapp.frontend.oidc.tokenEndpoint=http://localhost:8000/realms/master/protocol/openid-connect/token
-Dapp.frontend.oidc.userinfoEndpoint=http://localhost:8000/realms/master/protocol/openid-connect/userinfo
-Dapp.frontend.oidc.signoutUriTemplate=${authority}/realms/master/protocol/openid-connect/logout?client_id=${clientId}&post_logout_redirect_uri=${redirectUri}&id_token_hint=${idToken}
'
```

```shell
(cd src/main/resources/frontend && \
NODE_ENV=development \
PORT=3000 \
API_BASE_URI=http://localhost:8080 \
npx webpack serve)
```

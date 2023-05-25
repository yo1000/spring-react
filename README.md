Spring React
========================================

How to run
----------------------------------------

### for Keycloak

```shell
docker compose up
```

```shell
./mvnw spring-boot:run -Dspring-boot.run.jvmArguments='
-Dserver.error.whitelabel.enabled=true
-Dspring.security.oauth2.resourceserver.jwt.issuer-uri=http://localhost:8000/realms/master
-Dapp.security.idp=keycloak
-Dapp.security.cors.allowed-origins=http://localhost:3000
-Dapp.frontend.oidc.authority=http://localhost:8000
-Dapp.frontend.oidc.redirectUri=http://localhost:8080
-Dapp.frontend.oidc.clientId=spring-react
-Dapp.frontend.oidc.authorizationEndpoint=${authority}/realms/master/protocol/openid-connect/auth
-Dapp.frontend.oidc.tokenEndpoint=${authority}/realms/master/protocol/openid-connect/token
-Dapp.frontend.oidc.userinfoEndpoint=${authority}/realms/master/protocol/openid-connect/userinfo
-Dapp.frontend.oidc.signoutUri=${authority}/realms/master/protocol/openid-connect/logout?client_id=${clientId}&post_logout_redirect_uri=${redirectUri}&id_token_hint=${idToken}
'
```

```shell
(cd src/main/resources/frontend && \
NODE_ENV=development \
IDP=keycloak \
PORT=3000 \
API_BASE_URI=http://localhost:8080 \
npx webpack serve)
```

### for Cognito

Setup cognito

1. Create user pool
2. Create user
3. Create group naming as "admin", and assign user to created group

Following, replace variables in double brackets.

```shell
./mvnw spring-boot:run -Dspring-boot.run.jvmArguments='
-Dserver.error.whitelabel.enabled=true
-Dspring.security.oauth2.resourceserver.jwt.issuer-uri=https://cognito-idp.ap-northeast-1.amazonaws.com/{{cognito-user-pool-id}}
-Dapp.security.idp=cognito
-Dapp.security.cors.allowed-origins=http://localhost:3000
-Dapp.frontend.oidc.authority=https://{{cognito-subdomain}}.auth.{{cognito-region}}.amazoncognito.com
-Dapp.frontend.oidc.redirectUri=http://localhost:8080
-Dapp.frontend.oidc.clientId={{cognito-client-id:abcdefghijklmnopqrstuvwxyz}}
-Dapp.frontend.oidc.authorizationEndpoint=${authority}/oauth2/authorize
-Dapp.frontend.oidc.tokenEndpoint=${authority}/oauth2/token
-Dapp.frontend.oidc.userinfoEndpoint=${authority}/oauth2/userInfo
-Dapp.frontend.oidc.signoutUri=${authority}/logout?client_id=${clientId}&logout_uri=${redirectUri}
'
```

Following, replace variables in double brackets.

```shell
(cd src/main/resources/frontend && \
NODE_ENV=development \
IDP=cognito \
PORT=3000 \
API_BASE_URI=http://localhost:8080 \
npx webpack serve)
```

Project structure
----------------------------------------

* `(B)`: Backend
* `(F)`: Frontend
* `(*)`: Others

```
/ ...................................... (*) Project root
|_ src/
|   |_ main/
|       |_ java/ ....................... (B) Backend root
|       |   |_ (...)/
|       |       |_ config/ ............. (B) Configuration
|       |       |_ domain/ ............. (B) Domain
|       |       |_ infrastructure/ ..... (B) Persistence
|       |       |_ presentation/ ....... (B) Controller
|       |
|       |_ resources/
|           |_ frontend/ ............... (F) Frontend root
|           |   |_ src/
|           |   |   |_ clients/ ........ (F) API clients
|           |   |   |_ components/ ..... (F) Screen parts
|           |   |   |_ pages/ .......... (F) Screen
|           |   |   |_ App,js .......... (F) Routing
|           |   |   |_ index.js ........ (F) JS root
|           |   |
|           |   |_ public/
|           |   |   |_ index.html ...... (F) HTML root
|           |   |
|           |   |_ package.json ........ (F) Node.JS build config
|           |   |_ webpack.config.js ... (F) Webpack build config
|           |
|           |_ application.yml ......... (B) Spring Boot config file
|           |_ schema.sql .............. (B) Development database setup file
|
|_ compose.yml ......................... (*) IDP and others
|_ keycloak-setup.sh ................... (*) IDP setup script
|_ pom.xml ............................. (B) Java build config
```

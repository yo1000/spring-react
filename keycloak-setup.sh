#!/bin/bash

KEEP_ENV=$(cat /tmp/.env | grep -v 'READY=')
echo "${KEEP_ENV}" > /tmp/.env

KEYCLOAK_URL_BASE=${KEYCLOAK_URL_BASE:-"http://localhost:8080"}
KEYCLOAK_REALM=${KEYCLOAK_REALM:-"master"}
KEYCLOAK_CLIENT_ID=${KEYCLOAK_CLIENT_ID:-"spring-react"}
KEYCLOAK_ADMIN=${KEYCLOAK_ADMIN:-"admin"}
KEYCLOAK_ADMIN_PASSWORD=${KEYCLOAK_ADMIN_PASSWORD:-"admin"}

RETRY_SEC=1
RETRY_SEC_MAX=300
while [[ -z "$(curl -sI ${KEYCLOAK_URL_BASE}/health | head -n1 | grep 200)" ]]; do
  if [[ $RETRY_SEC -gt $RETRY_SEC_MAX ]]; then
    echo "Timeout: ${RETRY_SEC} > ${RETRY_SEC_MAX}"
    exit 1
  fi

  echo "Sleep: ${RETRY_SEC}"
  sleep $RETRY_SEC
  RETRY_SEC=$(expr $RETRY_SEC + $RETRY_SEC)
done

# Authenticate
KC_ACCESS_TOKEN=$(
curl -s \
  -d "client_id=admin-cli" \
  -d "username=${KEYCLOAK_ADMIN}" \
  -d "password=${KEYCLOAK_ADMIN_PASSWORD}" \
  -d "grant_type=password" \
  "${KEYCLOAK_URL_BASE}/realms/${KEYCLOAK_REALM}/protocol/openid-connect/token" \
  | jq -r ".access_token" \
)

# Create client and get client-secret ** but UI is not required secret because by "public" client.
curl -s \
  -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: bearer ${KC_ACCESS_TOKEN}" \
  -d "{
    \"clientId\": \"${KEYCLOAK_CLIENT_ID}\",
    \"implicitFlowEnabled\": true,
    \"publicClient\": true,
    \"redirectUris\": [\"*\"],
    \"webOrigins\": [\"*\"]
  }" \
  "${KEYCLOAK_URL_BASE}/admin/realms/${KEYCLOAK_REALM}/clients" \

KC_CLIENT_RESP=$(
curl -s \
  -X GET \
  -H "Content-Type: application/json" \
  -H "Authorization: bearer ${KC_ACCESS_TOKEN}" \
  "${KEYCLOAK_URL_BASE}/admin/realms/${KEYCLOAK_REALM}/clients?clientId=${KEYCLOAK_CLIENT_ID}" \
)

KC_CLIENT_ID=$(
echo "${KC_CLIENT_RESP}" \
  | jq -r '.[0].id' \
)

KC_CLIENT_SECRET=$(
echo "${KC_CLIENT_RESP}" \
  | jq -r '.[0].secret' \
)

# Re-Authenticate
KC_ACCESS_TOKEN=$(
curl -s \
  -d "client_id=admin-cli" \
  -d "username=${KEYCLOAK_ADMIN}" \
  -d "password=${KEYCLOAK_ADMIN_PASSWORD}" \
  -d "grant_type=password" \
  "${KEYCLOAK_URL_BASE}/realms/${KEYCLOAK_REALM}/protocol/openid-connect/token" \
  | jq -r ".access_token" \
)

# Create user
curl -s \
  -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: bearer ${KC_ACCESS_TOKEN}" \
  -d "{
    \"username\": \"squall\",
    \"email\": \"squall@localhost\",
    \"emailVerified\": true,
    \"firstName\": \"Squall\",
    \"lastName\": \"Leonhart\",
    \"enabled\": true,
    \"credentials\": [{
      \"type\": \"password\",
      \"temporary\": false,
      \"value\": \"squall-1234\"
    }]
  }" \
  "${KEYCLOAK_URL_BASE}/admin/realms/${KEYCLOAK_REALM}/users" \

curl -s \
  -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: bearer ${KC_ACCESS_TOKEN}" \
  -d "{
    \"username\": \"rinoa\",
    \"email\": \"rinoa@localhost\",
    \"emailVerified\": true,
    \"firstName\": \"Rinoa\",
    \"lastName\": \"Heartilly\",
    \"enabled\": true,
    \"credentials\": [{
      \"type\": \"password\",
      \"temporary\": false,
      \"value\": \"rinoa-1234\"
    }]
  }" \
  "${KEYCLOAK_URL_BASE}/admin/realms/${KEYCLOAK_REALM}/users" \

curl -s \
  -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: bearer ${KC_ACCESS_TOKEN}" \
  -d "{
    \"username\": \"seifer\",
    \"email\": \"seifer@localhost\",
    \"emailVerified\": true,
    \"firstName\": \"Seifer\",
    \"lastName\": \"Almasy\",
    \"enabled\": true,
    \"credentials\": [{
      \"type\": \"password\",
      \"temporary\": false,
      \"value\": \"seifer-1234\"
    }]
  }" \
  "${KEYCLOAK_URL_BASE}/admin/realms/${KEYCLOAK_REALM}/users" \

echo "User created

| Username | Email            | Password    |
|----------|------------------|-------------|
| squall   | squall@localhost | squall-1234 |
| rinoa    | rinoa@localhost  | rinoa-1234  |
| seifer   | seifer@localhost | seifer-1234 |
"

while :; do sleep 10; done

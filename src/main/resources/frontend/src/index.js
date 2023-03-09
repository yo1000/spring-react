import React from "react";
import ReactDOM from "react-dom";
import {AuthProvider} from "react-oidc-context";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root')
)

function format(template, params) {
  return !params ? template : new Function(
    ...Object.keys(params),
    `return \`${template}\``
  )(...Object.values(params).map(p => p ?? ''))
}

fetch('/config')
  .then(resp => {
    if (!resp.ok) throw new Error(resp.statusText)

    return resp.json()
  })
  .then(data => {
    const oidcConfig = {
      authority: data.oidc.authority,
      client_id: data.oidc.clientId,
      redirect_uri: data.oidc.redirectUri,
      response_type: 'code',
      metadata: {
        authorization_endpoint: data.oidc.authorizationEndpoint,
        token_endpoint: data.oidc.tokenEndpoint,
        userinfo_endpoint: data.oidc.userinfoEndpoint,
      },
      scope: "openid",
      loadUserInfo: true,
      accessTokenExpiringNotificationTimeInSeconds: 30,
      onSigninCallback: (_user) => {
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        )
      },
      onRemoveUser: () => {
        const template = data.oidc.signoutUriTemplate

        const authority = data.oidc.authority
        const clientId = data.oidc.clientId
        const redirectUri = encodeURIComponent(data.oidc.redirectUri)
        const idToken = localStorage.getItem("idtoken")
        localStorage.removeItem("idtoken")

        window.location = format(template, {
          authority: authority,
          clientId: clientId,
          redirectUri: redirectUri,
          idToken: idToken
        })
      }
    }

    root.render(
      <React.StrictMode>
        <AuthProvider {...oidcConfig}>
          <BrowserRouter>
            <App/>
          </BrowserRouter>
        </AuthProvider>
      </React.StrictMode>
    )
  })
  .catch(reason => {
    console.log(reason)

    const oidcConfig = {
      authority: process.env.OIDC_AUTHORITY,
      client_id: process.env.OIDC_CLIENT_ID,
      redirect_uri: process.env.OIDC_REDIRECT_URI,
      response_type: 'code',
      metadata: {
        authorization_endpoint: process.env.OIDC_AUTHORIZATION_ENDPOINT,
        token_endpoint: process.env.OIDC_TOKEN_ENDPOINT,
        userinfo_endpoint: process.env.OIDC_USERINFO_ENDPOINT,
      },
      scope: "openid",
      loadUserInfo: true,
      accessTokenExpiringNotificationTimeInSeconds: 30,
      onSigninCallback: (_user) => {
        localStorage.removeItem("idtoken")
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        )
      },
      onRemoveUser: () => {
        const template = process.env.OIDC_SIGNOUT_URI_TEMPLATE

        const authority = process.env.OIDC_AUTHORITY
        const clientId = process.env.OIDC_CLIENT_ID
        const redirectUri = encodeURIComponent(process.env.OIDC_REDIRECT_URI)
        const idToken = localStorage.getItem("idtoken")
        localStorage.removeItem("idtoken")

        window.location = format(template, {
          authority: authority,
          clientId: clientId,
          redirectUri: redirectUri,
          idToken: idToken
        })

      }
    }

    root.render(
      <React.StrictMode>
        <AuthProvider {...oidcConfig}>
          <BrowserRouter>
            <App/>
          </BrowserRouter>
        </AuthProvider>
      </React.StrictMode>
    )
  })

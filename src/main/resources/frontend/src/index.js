import React from "react";
import ReactDOM from "react-dom";
import {AuthProvider} from "react-oidc-context";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root')
)

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
        const clientId = data.oidc.clientId
        const redirectUri = encodeURIComponent(data.oidc.redirectUri)
        const idToken = localStorage.getItem("idtoken")
        localStorage.removeItem("idtoken")

        window.location = `${data.oidc.authority}/realms/master/protocol/openid-connect/logout?client_id=${clientId}&post_logout_redirect_uri=${redirectUri}&id_token_hint=${idToken}`
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
        authorization_endpoint: `${process.env.OIDC_AUTHORITY}/realms/master/protocol/openid-connect/auth`,
        token_endpoint: `${process.env.OIDC_AUTHORITY}/realms/master/protocol/openid-connect/token`,
        userinfo_endpoint: `${process.env.OIDC_AUTHORITY}/realms/master/protocol/openid-connect/userinfo`,
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
        const clientId = process.env.OIDC_CLIENT_ID
        const redirectUri = encodeURIComponent(process.env.OIDC_REDIRECT_URI)
        const idToken = localStorage.getItem("idtoken")
        localStorage.removeItem("idtoken")

        window.location = `${process.env.OIDC_AUTHORITY}/realms/master/protocol/openid-connect/logout?client_id=${clientId}&post_logout_redirect_uri=${redirectUri}&id_token_hint=${idToken}`
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

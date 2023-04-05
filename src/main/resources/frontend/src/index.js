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

/**
 * @typedef {object} Oidc
 * @property {string} authority
 * @property {string} clientId
 * @property {string} redirectUri
 * @property {string} authorizationEndpoint
 * @property {string} tokenEndpoint
 * @property {string} userinfoEndpoint
 * @property {string} signoutUri
 */

/**
 * @typedef {object} Config
 * @property {Oidc} oidc
 */

fetch('/api/config')
  .then(resp => {
    if (!resp.ok) throw new Error(resp.statusText)

    return resp.json()
  })
  .then(/** @type {Config} */ data => {
    const authority = data.oidc.authority
    const clientId = data.oidc.clientId
    const redirectUri = data.oidc.redirectUri

    const authorizationEndpointTemplate = data.oidc.authorizationEndpoint
    const tokenEndpointTemplate = data.oidc.tokenEndpoint
    const userinfoEndpointTemplate = data.oidc.userinfoEndpoint

    const oidcConfig = {
      authority: authority,
      client_id: clientId,
      redirect_uri: redirectUri,
      response_type: 'code',
      metadata: {
        authorization_endpoint: format(authorizationEndpointTemplate, {
          authority: authority,
        }),
        token_endpoint: format(tokenEndpointTemplate, {
          authority: authority,
        }),
        userinfo_endpoint: format(userinfoEndpointTemplate, {
          authority: authority,
        }),
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
        const signoutUriTemplate = data.oidc.signoutUri
        const idToken = localStorage.getItem("idtoken")
        localStorage.removeItem("idtoken")

        window.location = format(signoutUriTemplate, {
          authority: authority,
          clientId: clientId,
          redirectUri: encodeURIComponent(redirectUri),
          idToken: idToken,
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

    const authority = process.env.OIDC_AUTHORITY
    const clientId = process.env.OIDC_CLIENT_ID
    const redirectUri = process.env.OIDC_REDIRECT_URI

    const authorizationEndpointTemplate = process.env.OIDC_AUTHORIZATION_ENDPOINT
    const tokenEndpointTemplate = process.env.OIDC_TOKEN_ENDPOINT
    const userinfoEndpointTemplate = process.env.OIDC_USERINFO_ENDPOINT

    const oidcConfig = {
      authority: authority,
      client_id: clientId,
      redirect_uri: redirectUri,
      response_type: 'code',
      metadata: {
        authorization_endpoint: format(authorizationEndpointTemplate, {
          authority: authority,
        }),
        token_endpoint: format(tokenEndpointTemplate, {
          authority: authority,
        }),
        userinfo_endpoint: format(userinfoEndpointTemplate, {
          authority: authority,
        }),
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
        const signoutUriTemplate = process.env.OIDC_SIGNOUT_URI
        const idToken = localStorage.getItem("idtoken")
        localStorage.removeItem("idtoken")

        window.location = format(signoutUriTemplate, {
          authority: authority,
          clientId: clientId,
          redirectUri: encodeURIComponent(redirectUri),
          idToken: idToken,
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

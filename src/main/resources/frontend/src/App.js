import React, {useEffect, useState} from "react";
import {useAuth} from "react-oidc-context";
import {site} from "./site"
import Home from "./pages/Home";
import Items from "./pages/Items";
import Weapons from "./pages/Weapons";
import {NavLink, Route, Routes} from "react-router-dom";
import {style} from "./theme";
import {minimatch} from "minimatch";
import AuthoritiesClient from "./clients/AuthoritiesClient";
import Cards from "./pages/Cards";
import Empty from "./pages/Empty";
import {Button, Flex, Link, View} from "@adobe/react-spectrum";

export default function App() {
  const auth = useAuth()
  const [authorities, setAuthorities] = useState([])

  const authoritiesClient = new AuthoritiesClient(auth)

  useEffect(() => {
    authoritiesClient
      .get()
      .then(data => setAuthorities(data))
  }, [auth])

  const matchPath = (pattern, path) => {
    const normalized = pattern.match(/\/[*]+$/) ? `${path}/` : path
    return minimatch(normalized, pattern)
  }

  return (
    <div css={style}>
      <Flex direction="column">
        <View>
          <nav>
            <ul>
              <li>
                <div>{site.title}</div>
              </li>
              <li>
                <Link>
                  <NavLink to="/">Home</NavLink>
                </Link>
              </li>
              {
                authorities.filter(a => a.authorized).some(a => matchPath(a.uri, "/api/items"))
                  ? <li>
                    <Link>
                      <NavLink to="/items">Items</NavLink>
                    </Link>
                  </li>
                  : <></>
              }
              {
                authorities.filter(a => a.authorized).some(a => matchPath(a.uri, "/api/weapons"))
                  ? <li>
                    <Link>
                      <NavLink to="/weapons">Weapons</NavLink>
                    </Link>
                  </li>
                  : <></>
              }
              {
                authorities.filter(a => a.authorized).some(a => matchPath(a.uri, "/api/cards"))
                  ? <li>
                    <Link>
                      <NavLink to="/cards">Cards</NavLink>
                    </Link>
                  </li>
                  : <></>
              }
              <li>
                <Link>
                  <NavLink to="/empty">Empty</NavLink>
                </Link>
              </li>
            </ul>
            <ul class="right">
              {
                auth.activeNavigator === 'signinSilent'
                  ? <li><div>Signing you in...</div></li> :
                auth.activeNavigator === 'signoutRedirect'
                  ? <li><div>Signing you out...</div></li> :
                auth.isLoading
                  ? <li><div>Loading...</div></li> :
                auth.error
                  ? <li><div>{`Oops... ${auth.error.message}`}</div></li> :
                auth.isAuthenticated ? (
                  <>
                    <li className="userDisplayName">
                      <div>{auth.user?.profile.name}</div>
                    </li>
                    <li>
                      <Button variant="outline-secondary" onPress={() => {
                        localStorage.setItem("idtoken", auth.user?.id_token)
                        void auth.removeUser();
                      }}>Sign out</Button>
                    </li>
                  </>
                ) : (
                  <li>
                    <Button variant="outline-secondary" onPress={() => void auth.signinRedirect()}>Sign in</Button>
                  </li>
                )
              }
            </ul>
          </nav>
        </View>
        <View>
          <div className="main">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/items" element={<Items/>} />
              <Route path="/weapons" element={<Weapons/>} />
              <Route path="/cards" element={<Cards/>} />
              <Route path="/empty" element={<Empty/>} />
            </Routes>
          </div>
        </View>
      </Flex>
    </div>
  )
}

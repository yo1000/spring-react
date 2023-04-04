import React, {useEffect, useState} from "react";
import {useAuth} from "react-oidc-context";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {site} from "./site"
import Home from "./pages/Home";
import Items from "./pages/Items";
import Weapons from "./pages/Weapons";
import {Route, Routes} from "react-router-dom";
import {style} from "./theme";
import {minimatch} from "minimatch";
import AuthoritiesClient from "./clients/AuthoritiesClient";
import Cards from "./pages/Cards";
import Empty from "./pages/Empty";

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
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand>{site.title}</Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              {
                authorities.filter(a => a.authorized).some(a => matchPath(a.uri, "/api/items"))
                  ? <Nav.Link href="/items">Items</Nav.Link>
                  : <></>
              }
              {
                authorities.filter(a => a.authorized).some(a => matchPath(a.uri, "/api/weapons"))
                  ? <Nav.Link href="/weapons">Weapons</Nav.Link>
                  : <></>
              }
              {
                authorities.filter(a => a.authorized).some(a => matchPath(a.uri, "/api/cards"))
                  ? <Nav.Link href="/cards">Cards</Nav.Link>
                  : <></>
              }
              <Nav.Link href="/empty">Empty</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
              {
                auth.activeNavigator === 'signinSilent'
                  ? <Navbar.Text>Signing you in...</Navbar.Text> :
                auth.activeNavigator === 'signoutRedirect'
                  ? <Navbar.Text>Signing you out...</Navbar.Text> :
                auth.isLoading
                  ? <Navbar.Text>Loading...</Navbar.Text> :
                auth.error
                  ? <Navbar.Text>{`Oops... ${auth.error.message}`}</Navbar.Text> :
                auth.isAuthenticated ? (
                  <>
                    <Navbar.Text className="userDisplayName">{auth.user?.profile.name}</Navbar.Text>
                    <Button variant="outline-secondary" onClick={() => {
                      localStorage.setItem("idtoken", auth.user?.id_token)
                      void auth.removeUser();
                    }}>Sign out</Button>
                  </>
                ) : (
                  <Button variant="outline-secondary" onClick={() => void auth.signinRedirect()}>Sign in</Button>
                )
              }
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="main">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/items" element={<Items/>} />
          <Route path="/weapons" element={<Weapons/>} />
          <Route path="/cards" element={<Cards/>} />
          <Route path="/empty" element={<Empty/>} />
        </Routes>
      </Container>
    </div>
  )
}

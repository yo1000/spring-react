import {Badge, Table} from "react-bootstrap";
import {useAuth} from "react-oidc-context";
import {css} from "@emotion/react";
import {useEffect, useState} from "react";
import AuthoritiesClient from "../clients/AuthoritiesClient";

export default function Home() {
  const style = css`
    th {
      width: 20%;
    }
    
    td {
      ul {
        padding: 0;

        li {
          list-style: none;
          
          .badge {
            width: 4rem;
            margin-right: 0.5rem;
          }
        }
      }
    }
    
    .table-striped-columns>:not(caption)>tr>:nth-child(2n) {
      --bs-table-accent-bg: none;
    }
    
    .table-striped-columns>:not(caption)>tr>:nth-child(2n + 1) {
      --bs-table-accent-bg: var(--bs-table-striped-bg);
      color: var(--bs-table-striped-color);
    }
  `

  const auth = useAuth()
  const [authorities, setAuthorities] = useState([])

  const authoritiesClient = new AuthoritiesClient(auth)

  useEffect(() => {
    authoritiesClient
      .get()
      .then(data => setAuthorities(data))
  }, [auth])

  return (
    <div css={style}>
      <Table striped="columns">
        <tbody>
        <tr>
          <th>ID</th>
          <td>{auth.user?.profile.sub}</td>
        </tr>
        <tr>
          <th>Username</th>
          <td>{auth.user?.profile.preferred_username}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{auth.user?.profile.email}</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>{auth.user?.profile.name}</td>
        </tr>
        <tr>
          <th>Given name</th>
          <td>{auth.user?.profile.given_name}</td>
        </tr>
        <tr>
          <th>Family name</th>
          <td>{auth.user?.profile.family_name}</td>
        </tr>
        <tr>
          <th>Authorities</th>
          <td><ul>{authorities ? authorities.map(a => (
            <li>
              {
                a.authorized
                  ? <Badge bg="success">allow</Badge>
                  : <Badge bg="danger">deny</Badge>
              }
              <code>{a.method} {a.uri}</code>
            </li>
          )) : ""}</ul></td>
        </tr>
        </tbody>
      </Table>
    </div>
  )
}

import {useAuth} from "react-oidc-context";
import {css} from "@emotion/react";
import {useEffect, useState} from "react";
import AuthoritiesClient from "../clients/AuthoritiesClient";
import {Badge} from "@adobe/react-spectrum";

export default function Home() {
  const style = css`
    th {
      width: 20%;
    }
    
    td {
      ul {
        padding: 0;
        margin-bottom: 0.25rem;

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
      <table>
        <thead>
        <tr>
          <th>Key</th>
          <th>Value</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>ID</td>
          <td><code>{auth.user?.profile.sub}</code></td>
        </tr>
        <tr>
          <td>Username</td>
          <td><code>{auth.user?.profile.preferred_username}</code></td>
        </tr>
        <tr>
          <td>Email</td>
          <td><code>{auth.user?.profile.email}</code></td>
        </tr>
        <tr>
          <td>Name</td>
          <td><code>{auth.user?.profile.name}</code></td>
        </tr>
        <tr>
          <td>Given name</td>
          <td><code>{auth.user?.profile.given_name}</code></td>
        </tr>
        <tr>
          <td>Family name</td>
          <td><code>{auth.user?.profile.family_name}</code></td>
        </tr>
        <tr>
          <td>Authorities</td>
          <td>
            <ul>
              {
                authorities
                  ? authorities.map(a => (
                    <li>
                      {
                        a.authorized
                          ? <Badge variant="positive">allow</Badge>
                          : <Badge variant="negative">deny</Badge>
                      }
                      <code>{a.method} {a.uri}</code>
                    </li>
                  ))
                  : <></>
              }
            </ul>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

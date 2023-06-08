import {useAuth} from "react-oidc-context";
import React, {useEffect, useState} from "react";
import AuthoritiesClient from "../clients/AuthoritiesClient";
import Badge from "../components/Badge";
import Content from "../components/Content";

export default function Home() {
  const auth = useAuth()
  const [authorities, setAuthorities] = useState([])

  const authoritiesClient = new AuthoritiesClient(auth)

  useEffect(() => {
    authoritiesClient
      .get()
      .then(data => setAuthorities(data))
  }, [auth])

  return (
    <Content heading="Signed in user">
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
        <tr>
          <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
            Key
          </th>
          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
            Value
          </th>
        </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
        <tr>
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
            ID
          </td>
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
            <code>{auth.user?.profile.sub}</code>
          </td>
        </tr>
        <tr>
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
            Username
          </td>
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
            <code>{auth.user?.profile.preferred_username}</code>
          </td>
        </tr>
        <tr>
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
            Email
          </td>
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
            <code>{auth.user?.profile.email}</code>
          </td>
        </tr>
        <tr>
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
            Name
          </td>
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
            <code>{auth.user?.profile.name}</code>
          </td>
        </tr>
        <tr>
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
            Given name
          </td>
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
            <code>{auth.user?.profile.given_name}</code>
          </td>
        </tr>
        <tr>
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
            Family name
          </td>
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
            <code>{auth.user?.profile.family_name}</code>
          </td>
        </tr>
        <tr>
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
            Authorities
          </td>
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
            <ul role="list">
              {
                authorities
                  ? authorities.map(a => (
                    <li key={`${a.method}.${a.uri}`} className="flex gap-x-4 py-1 first:pt-0 last:pb-0">
                      {
                        a.authorized
                          ? <Badge color="green" width={30}>allow</Badge>
                          : <Badge color="red" width={30}>deny</Badge>
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
    </Content>
  )
}

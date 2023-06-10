import React, {useState} from "react";
import Content from "../../components/Content";
import Button from "../../components/Button";
import Notification, {Message} from "../../components/Notification";
import Panel, {Flow, Section} from "../../components/Panel";

export default function NotificationDemo() {
  const [messages, setMessages] = useState([])

  return (
    <Content heading="Notification Demo">
      <Notification>
        {messages.map(message => (
          <Message
            key={message.id}
            header={message.header}
            body={message.body}
            type={message.type}
            onClose={async () => {
              setMessages(messages.filter(m => m.id !== message.id))
            }}
          />
        ))}
      </Notification>

      <Panel>
        <Section>
          <Flow>
            <Button type="info" onClick={async () => {
              setMessages([...messages, {
                id: crypto.randomUUID(),
                header: "Notification demo",
                body: "New message",
                type: "info",
              }])
            }}>Notify info</Button>
          </Flow>

          <Flow>
            <Button type="success" onClick={async () => {
              setMessages([...messages, {
                id: crypto.randomUUID(),
                header: "Notification demo",
                body: "New message",
                type: "success",
              }])
            }}>Notify success</Button>
          </Flow>

          <Flow>
            <Button type="warn" onClick={async () => {
              setMessages([...messages, {
                id: crypto.randomUUID(),
                header: "Notification demo",
                body: "New message",
                type: "warn",
              }])
            }}>Notify warn</Button>
          </Flow>

          <Flow>
            <Button type="error" onClick={async () => {
              setMessages([...messages, {
                id: crypto.randomUUID(),
                header: "Notification demo",
                body: "New message",
                type: "error",
              }])
            }}>Notify error</Button>
          </Flow>
        </Section>
      </Panel>
    </Content>
  )
}

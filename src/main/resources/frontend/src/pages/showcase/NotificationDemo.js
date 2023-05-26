import React, {useState} from "react";
import Content from "../../components/Content";
import Button from "../../components/Button";
import Notification, {Message} from "../../components/Notification";

export default function NotificationDemo() {
  const [messages, setMessages] = useState([])

  return (
    <Content heading="Notification Demo">
      <div className="pt-6">
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

        <div className="mb-2">
          <Button type="info" onClick={async () => {
            setMessages([...messages, {
              id: crypto.randomUUID(),
              header: "Notification demo",
              body: "New message",
              type: "info",
            }])
          }}>Notify info</Button>
        </div>
        <div className="mb-2">
          <Button type="success" onClick={async () => {
            setMessages([...messages, {
              id: crypto.randomUUID(),
              header: "Notification demo",
              body: "New message",
              type: "success",
            }])
          }}>Notify success</Button>
        </div>
        <div className="mb-2">
          <Button type="warn" onClick={async () => {
            setMessages([...messages, {
              id: crypto.randomUUID(),
              header: "Notification demo",
              body: "New message",
              type: "warn",
            }])
          }}>Notify warn</Button>
        </div>
        <div className="mb-2">
          <Button type="error" onClick={async () => {
            setMessages([...messages, {
              id: crypto.randomUUID(),
              header: "Notification demo",
              body: "New message",
              type: "error",
            }])
          }}>Notify error</Button>
        </div>
      </div>
    </Content>
  )
}

import React from "react";
import Content from "../../components/Content";
import Button from "../../components/Button";
import Panel, {Flow, Section} from "../../components/Panel";

export default function ButtonDemo() {
  return (
    <Content heading="Button Demo">
      <Panel>
        <Section>
          <Flow>
            <Button>Default</Button>
          </Flow>
        </Section>

        <Section>
          <Flow>
            <Button type="primary">Primary</Button>
            <Button type="secondary">Secondary</Button>
          </Flow>
        </Section>

        <Section>
          <Flow>
            <Button type="info">Info</Button>
            <Button type="help">Help</Button>
          </Flow>
        </Section>

        <Section>
          <Flow>
            <Button type="success">Success</Button>
            <Button type="ok">OK</Button>
          </Flow>
        </Section>

        <Section>
          <Flow>
            <Button type="warn">Warn</Button>
            <Button type="attention">Attention</Button>
          </Flow>
        </Section>

        <Section>
          <Flow>
            <Button type="error">Error</Button>
            <Button type="danger">Danger</Button>
            <Button type="ng">NG</Button>
          </Flow>
        </Section>
      </Panel>
    </Content>
  )
}

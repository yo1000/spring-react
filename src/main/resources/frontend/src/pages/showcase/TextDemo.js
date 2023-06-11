import React from "react";
import Content from "../../components/Content";
import {FormatType, Text} from "../../components/Input";
import Panel, {Flow, Section} from "../../components/Panel";

export default function TextDemo() {
  return (
    <Content heading="Text Demo">
      <Panel>
        <Section>
          <Flow>
            <Text>Standard text</Text>
          </Flow>
          <Flow>
            <Text format={FormatType.digitGrouping}>7800</Text>
            <Text format={FormatType.dateGrouping}>19990211</Text>
          </Flow>
        </Section>
      </Panel>
    </Content>
  )
}

import React from "react";
import Content from "../../components/Content";
import Input, {FormatTypes} from "../../components/Input";
import Panel, {Flow, Section} from "../../components/Panel";

export default function InputDemo() {
  return (
    <Content heading="Input Demo">
      <Panel>
        <Section>
          <Flow>
            <Input label="Standard input"/>
          </Flow>
          <Flow>

            <Input
              label="Digit grouped input"
              format={FormatTypes.digitGrouping}
              value={7800}
            />
            <Input
              label="Date grouped input"
              format={FormatTypes.dateGrouping}
              value={19990211}
            />
          </Flow>
        </Section>
      </Panel>
    </Content>
  )
}

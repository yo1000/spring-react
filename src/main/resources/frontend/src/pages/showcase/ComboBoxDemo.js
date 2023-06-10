import React from "react";
import Content from "../../components/Content";
import ComboBox from "../../components/ComboBox";
import Panel, {Flow, Section} from "../../components/Panel";

export default function ComboBoxDemo() {
  return (
    <Content heading="ComboBox Demo">
      <Panel>
        <Section>
          <Flow>
            <ComboBox label="Element" items={[{
              label: "Fire",
              value: "1"
            }, {
              label: "Ice",
              value: "2"
            }, {
              label: "Thunder",
              value: "3"
            }, {
              label: "Earth",
              value: "4"
            }, {
              label: "Poison",
              value: "5"
            }, {
              label: "Wind",
              value: "6"
            }, {
              label: "Water",
              value: "7"
            }, {
              label: "Holy",
              value: "8"
            }]} />
          </Flow>
        </Section>
      </Panel>
    </Content>
  )
}

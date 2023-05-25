import React from "react";
import Content from "../../components/Content";
import ComboBox from "../../components/ComboBox";

export default function ComboBoxDemo() {
  return (
    <Content heading="ComboBox Demo">
      <div className="pt-6">
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
      </div>
    </Content>
  )
}

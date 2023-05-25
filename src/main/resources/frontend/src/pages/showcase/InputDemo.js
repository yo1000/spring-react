import React from "react";
import Content from "../../components/Content";
import Input, {FormatTypes} from "../../components/Input";

export default function InputDemo() {
  return (
    <Content heading="Input Demo">
      <div className="pt-6">
        <Input
          label="Standard input"
        />
      </div>
      <div className="pt-6">
        <Input
          label="Digit grouped input"
          format={FormatTypes.digitGrouping}
          value={7800}
        />
      </div>
      <div className="pt-6">
        <Input
          label="Date grouped input"
          format={FormatTypes.dateGrouping}
          value={19990211}
        />
      </div>
    </Content>
  )
}

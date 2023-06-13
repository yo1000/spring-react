import React, {useState} from "react";
import Content from "../../components/Content";
import Panel, {Flow, Section} from "../../components/Panel";
import Paginator from "../../components/Paginator";

export default function PaginatorDemo() {
  const [number, setNumber] = useState(0)

  return (
    <Content heading="Paginator Demo">
      <Panel>
        <Section>
          <Flow>
            <Paginator
              number={number} totalPages={20} size={20} totalElements={390}
              onClick={async (pageable) => {
                setNumber(pageable.number)
              }}
            />
          </Flow>
        </Section>
      </Panel>
    </Content>
  )
}

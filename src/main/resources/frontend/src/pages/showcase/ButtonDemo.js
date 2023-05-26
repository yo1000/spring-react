import React from "react";
import Content from "../../components/Content";
import Button from "../../components/Button";

export default function ButtonDemo() {
  return (
    <Content heading="Button Demo">
      <div className="pt-6">
        <div className="mb-2">
          <Button>Default</Button>
        </div>

        <hr className="mb-2"/>

        <div className="mb-2">
          <Button type="primary">Primary</Button>
        </div>
        <div className="mb-2">
          <Button type="secondary">Secondary</Button>
        </div>

        <hr className="mb-2"/>

        <div className="mb-2">
          <Button type="info">Info</Button>
        </div>
        <div className="mb-2">
          <Button type="help">Help</Button>
        </div>

        <hr className="mb-2"/>

        <div className="mb-2">
          <Button type="success">Success</Button>
        </div>
        <div className="mb-2">
          <Button type="ok">OK</Button>
        </div>

        <hr className="mb-2"/>

        <div className="mb-2">
          <Button type="warn">Warn</Button>
        </div>
        <div className="mb-2">
          <Button type="attention">Attention</Button>
        </div>

        <hr className="mb-2"/>

        <div className="mb-2">
          <Button type="error">Error</Button>
        </div>
        <div className="mb-2">
          <Button type="danger">Danger</Button>
        </div>
        <div className="mb-2">
          <Button type="ng">NG</Button>
        </div>
      </div>
    </Content>
  )
}

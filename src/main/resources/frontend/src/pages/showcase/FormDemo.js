import React from "react";
import Content from "../../components/Content";
import Form, {
  ButtonSection,
  FullWidth,
  HalfWidth,
  InputSection,
  QuarterWidth,
  ThirdWidth,
  TwoThirdsWidth
} from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Alert from "../../components/Alert";

export default function FormDemo() {
  return (
    <Content heading="Form Demo">
      <Form>
        <Alert
          heading="Heading text"
          messages={[
            "caused by...",
          ]}/>
        <InputSection>
          <FullWidth>
            <Input label="Full width"/>
          </FullWidth>

          <HalfWidth>
            <Input label="Half width"/>
          </HalfWidth>
          <HalfWidth>
            <Input/>
          </HalfWidth>

          <ThirdWidth>
            <Input label="Third width"/>
          </ThirdWidth>
          <TwoThirdsWidth>
            <Input label="Two thirds width"/>
          </TwoThirdsWidth>

          <QuarterWidth>
            <Input label="Quarter width"/>
          </QuarterWidth>
          <QuarterWidth>
            <Input/>
          </QuarterWidth>
          <QuarterWidth>
            <Input/>
          </QuarterWidth>
          <QuarterWidth>
            <Input/>
          </QuarterWidth>
        </InputSection>

        <ButtonSection>
          <Button>Button</Button>
        </ButtonSection>
      </Form>
    </Content>
  )
}

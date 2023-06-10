import React from "react";
import Content from "../../components/Content";
import Panel, {
  Flow,
  FullWidth,
  Grid,
  HalfWidth,
  QuarterWidth,
  Section,
  ThirdWidth,
  TwoThirdsWidth
} from "../../components/Panel";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Alert from "../../components/Alert";
import DataTable from "../../components/DataTable";
import {css} from "@emotion/react";

export default function LayoutDemo() {
  const style = css`
    .dataTableBody {
      max-height: calc(20rem);
      height: calc(20rem);
    }
  `

  return (
    <div css={style}>
      <Content heading="Form Demo">
        <Panel>
          <Alert
            heading="Heading text"
            messages={[
              "caused by...",
            ]}
          />
          <Section>
            <Grid>
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
            </Grid>
          </Section>

          <Section>
            <Flow>
              <Input/>
              <Input/>
              <Input/>
            </Flow>
            <Flow>
              <Input label="New line in Flow"/>
            </Flow>
          </Section>

          <Section>
            <Grid>
              <ThirdWidth>
                <Input label="Grid and Flow mixed"/>
              </ThirdWidth>
              <ThirdWidth>
                <Input/>
              </ThirdWidth>
              <ThirdWidth>
                <Input/>
              </ThirdWidth>
            </Grid>
            <Flow>
              <Input/>
              <Input/>
              <Input/>
            </Flow>
          </Section>

          <Section>
            <Flow align="right">
              <Input label="Align right"/>
              <Input/>
              <Input/>
            </Flow>
          </Section>
          <Section>
            <Flow align="right">
              <Button type="secondary">Button</Button>
              <Button>Button</Button>
            </Flow>
          </Section>
        </Panel>

        {/*<Panel>*/}
        {/*  <Section>*/}
        {/*    <Grid>*/}
        {/*      <ThirdWidth>*/}
        {/*        <Input label="Third width"/>*/}
        {/*      </ThirdWidth>*/}
        {/*      <TwoThirdsWidth>*/}
        {/*        <Input label="Two thirds width"/>*/}
        {/*      </TwoThirdsWidth>*/}
        {/*    </Grid>*/}
        {/*    <Grid>*/}
        {/*      <ThirdWidth>*/}
        {/*        <Input label="Third width"/>*/}
        {/*      </ThirdWidth>*/}
        {/*      <TwoThirdsWidth>*/}
        {/*        <Input label="Two thirds width"/>*/}
        {/*      </TwoThirdsWidth>*/}
        {/*    </Grid>*/}

        {/*    <Flow align="right">*/}
        {/*      <Button>Button</Button>*/}
        {/*    </Flow>*/}
        {/*    <Flow align="right">*/}
        {/*      <Button>Button</Button>*/}
        {/*    </Flow>*/}
        {/*  </Section>*/}
        {/*  <Section>*/}
        {/*    <Flow align="right">*/}
        {/*      <Button>Button</Button>*/}
        {/*      <Button>Button</Button>*/}
        {/*    </Flow>*/}
        {/*  </Section>*/}
        {/*</Panel>*/}

        <Panel>
          <Alert
            heading="Heading text"
            messages={[
              "caused by...",
            ]}
          />
          <Section>
            <Grid>
              <FullWidth>
                <DataTable
                  id="dataTable"
                  data={[{
                    seq: 1,
                    english: "Junction",
                    japanese: "ジャンクション",
                  }, {
                    seq: 2,
                    english: "Item",
                    japanese: "アイテム",
                  }, {
                    seq: 3,
                    english: "Magic",
                    japanese: "まほう",
                  }, {
                    seq: 4,
                    english: "Status",
                    japanese: "ステータス",
                  }, {
                    seq: 5,
                    english: "GF",
                    japanese: "Ｇ.Ｆ.",
                  }, {
                    seq: 6,
                    english: "Ability",
                    japanese: "アビリティ",
                  }, {
                    seq: 7,
                    english: "Switch",
                    japanese: "いれかえ",
                  }, {
                    seq: 8,
                    english: "Card",
                    japanese: "カード",
                  }, {
                    seq: 9,
                    english: "Config",
                    japanese: "コンフィグ",
                  }, {
                    seq: 10,
                    english: "Tutorial",
                    japanese: "チュートリアル",
                  }, {
                    seq: 11,
                    english: "Save",
                    japanese: "セーブ",
                  }]}
                  props={[{
                    name: "seq",
                    head: "#",
                    columnWidth: "8rem",
                  }, {
                    name: "english",
                    head: "English",
                    columnWidth: "20rem",
                  }, {
                    name: "japanese",
                    head: "Japanese",
                    columnWidth: "20rem",
                  }]}
                />
              </FullWidth>
            </Grid>
          </Section>

          <Section>
            <Flow align="right">
              <Button>Button</Button>
            </Flow>
          </Section>
        </Panel>
      </Content>
    </div>
  )
}

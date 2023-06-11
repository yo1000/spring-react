import React from "react";
import Content from "../../components/Content";
import Panel, {Flow, FullWidth, Grid, HalfWidth, QuarterWidth, Section, ThirdWidth} from "../../components/Panel";
import Input, {Text} from "../../components/Input";

export default function PanelDemo() {
  return (
    <div>
      <Content heading="Panel Demo">
        <Panel>
          <Section>
            <Grid>
              <FullWidth>
                <Panel>
                  <Section>
                    <Flow>
                      <Text>Panel in Panel</Text>
                      <Input/>
                    </Flow>
                  </Section>
                </Panel>
              </FullWidth>

              <HalfWidth>
                <Panel>
                  <Section>
                    <Flow>
                      <Text>Panel in Panel</Text>
                      <Input/>
                    </Flow>
                  </Section>
                </Panel>
              </HalfWidth>
              <HalfWidth>
                <Panel border={false}>
                  <Section>
                    <Flow>
                      <Text>Panel in Panel</Text>
                      <Input value="Borderless panel"/>
                    </Flow>
                  </Section>
                </Panel>
              </HalfWidth>

              <ThirdWidth>
                <Panel>
                  <Section>
                    <Flow>
                      <Text>Panel in Panel</Text>
                      <Input/>
                    </Flow>
                  </Section>
                </Panel>
              </ThirdWidth>
              <ThirdWidth>
                <Panel>
                  <Section>
                    <Flow>
                      <Text>Panel in Panel</Text>
                      <Input/>
                    </Flow>
                  </Section>
                </Panel>
              </ThirdWidth>
              <ThirdWidth>
                <Panel border={false}>
                  <Section>
                    <Flow>
                      <Text>Panel in Panel</Text>
                      <Input value="Borderless panel"/>
                    </Flow>
                  </Section>
                </Panel>
              </ThirdWidth>

              <QuarterWidth>
                <Panel>
                  <Section>
                    <Flow>
                      <Text>Panel in Panel</Text>
                      <Input/>
                    </Flow>
                  </Section>
                </Panel>
              </QuarterWidth>
              <QuarterWidth>
                <Panel>
                  <Section>
                    <Flow>
                      <Text>Panel in Panel</Text>
                      <Input/>
                    </Flow>
                  </Section>
                </Panel>
              </QuarterWidth>
              <QuarterWidth>
                <Panel>
                  <Section>
                    <Flow>
                      <Text>Panel in Panel</Text>
                      <Input/>
                    </Flow>
                  </Section>
                </Panel>
              </QuarterWidth>
              <QuarterWidth>
                <Panel border={false}>
                  <Section>
                    <Flow>
                      <Text>Panel in Panel</Text>
                      <Input value="Borderless panel"/>
                    </Flow>
                  </Section>
                </Panel>
              </QuarterWidth>

              <FullWidth>
                <Panel>
                  <Section>
                    <Grid>
                      <HalfWidth>
                        <Panel>
                          <Section>
                            <Grid>
                              <HalfWidth>
                                <Panel>
                                  <Section>
                                    <Flow>
                                      <Text>Panel in Panel in Panel in Panel</Text>
                                    </Flow>
                                  </Section>
                                </Panel>
                              </HalfWidth>
                              <HalfWidth>
                                <Text>Panel in Panel in Panel</Text>
                              </HalfWidth>
                            </Grid>
                          </Section>
                        </Panel>
                      </HalfWidth>
                      <HalfWidth>
                        <Text>Panel in Panel</Text>
                      </HalfWidth>
                    </Grid>
                  </Section>
                </Panel>
              </FullWidth>
            </Grid>
          </Section>
        </Panel>
      </Content>
    </div>
  )
}

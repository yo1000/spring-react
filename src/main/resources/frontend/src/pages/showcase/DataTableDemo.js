import React from "react";
import DataTable from "../../components/DataTable";
import Content from "../../components/Content";
import Panel, {FullWidth, Grid, Section} from "../../components/Panel";

export default function DataTableDemo() {
  return (
    <Content heading="DataTable Demo">
      <Panel>
        <Section>
          <Grid>
            <FullWidth>
              <DataTable
                id="dataTable"
                data={[{
                  seq: 1,
                  english: "Squall Leonhart",
                  japanese: "スコール・レオンハート",
                  age: 17,
                  birthday: "August 23",
                  gender: "Male",
                }, {
                  seq: 2,
                  english: "Rinoa Heartilly",
                  japanese: "リノア・ハーティリー",
                  age: 17,
                  birthday: "March 3",
                  gender: "Female",
                }, {
                  seq: 3,
                  english: "Quistis Trepe",
                  japanese: "キスティス・トゥリープ",
                  age: 18,
                  birthday: "October 4",
                  gender: "Female",
                }, {
                  seq: 4,
                  english: "Zell Dincht",
                  japanese: "ゼル・ディン",
                  age: 17,
                  birthday: "March 17",
                  gender: "Male",
                }, {
                  seq: 5,
                  english: "Selphie Tilmitt",
                  japanese: "セルフィ・ティルミット",
                  age: 17,
                  birthday: "July 16",
                  gender: "Female",
                }, {
                  seq: 6,
                  english: "Irvine Kinneas",
                  japanese: "アーヴァイン・キニアス",
                  age: 17,
                  birthday: "November 24",
                  gender: "Male",
                }, {
                  seq: 7,
                  english: "Laguna Loire",
                  japanese: "ラグナ・レウァール",
                  age: 44,
                  birthday: "January 3",
                  gender: "Male",
                }, {
                  seq: 8,
                  english: "Kiros Seagill",
                  japanese: "キロス・シーゲル",
                  age: 40,
                  birthday: "July 6",
                  gender: "Male",
                }, {
                  seq: 9,
                  english: "Ward Zabac",
                  japanese: "ウォード・ザバック",
                  age: 42,
                  birthday: "February 25",
                  gender: "Male",
                }, {
                  seq: 10,
                  english: "Seifer Almasy",
                  japanese: "サイファー・アルマシー",
                  age: 18,
                  birthday: "December 22",
                  gender: "Male",
                }, {
                  seq: 11,
                  english: "Edea Kramer",
                  japanese: "イデア・クレイマー",
                  age: null,
                  birthday: null,
                  gender: "Female",
                }]}
                props={[{
                  name: "seq",
                  head: "#",
                  columnWidth: "4rem",
                }, {
                  name: "english",
                  head: "English",
                  columnWidth: "20rem",
                }, {
                  name: "japanese",
                  head: "Japanese",
                  columnWidth: "20rem",
                }, {
                  name: "age",
                  head: "Age",
                  columnWidth: "8rem",
                }, {
                  name: "birthday",
                  head: "Birthday",
                  columnWidth: "12rem",
                }, {
                  name: "gender",
                  head: "Gender",
                  columnWidth: "8rem",
                }]}
              />
            </FullWidth>
          </Grid>
        </Section>
      </Panel>
    </Content>
  )
}

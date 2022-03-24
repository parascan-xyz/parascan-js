import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Table from "./Table";
import { tableColumns, tableData } from "../../utils/data";
import { Column, Row } from "react-table";

export default {
  title: "Info/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const WithEmptyData = Template.bind({});
WithEmptyData.args = {
  columns: tableColumns,
  data: [],
};

export const WithRealData = Template.bind({});
WithRealData.args = {
  columns: tableColumns,
  data: tableData,
};

//ReactElement<{rows: Row[]}>
function ExpandHeader({ rows }: { rows: Row[] }) {
  const [expanded, setExpanded] = useState(false);
  const toggleState = () => {
    rows.map((row) => row.toggleRowExpanded(!expanded));
    setExpanded(!expanded);
  };
  return <span onClick={toggleState}>{expanded ? "👇" : "👉"}</span>;
}

const expansionColumns: Array<Column> = tableColumns;
expansionColumns.push({
  Header: ({ rows }) => <ExpandHeader rows={rows} />,
  id: "expander",
  Cell: ({ row }) => (
    <span {...row.getToggleRowExpandedProps()}>
      {row.isExpanded ? "👇" : "👉"}
    </span>
  ),
});
export const WithExpansion = Template.bind({});
WithExpansion.args = {
  columns: expansionColumns,
  data: tableData,
};

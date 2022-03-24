//import { TimeSinceText, LinkId } from "../components/format";
import LinkId from "../components/format/LinkId";
import TimeSinceText from "../components/format/TimeSinceText";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const tableColumns = [
  { Header: "Block", accessor: "id" },
  { Header: "Date", accessor: "date" },
  { Header: "Extrinsics", accessor: "extrinsics" },
  { Header: "Transactions", accessor: "transactions" },
  { Header: "Events", accessor: "events" },
];

export const tableData = arr.map(() => ({
  id: (
    <LinkId id="0x000000000000000000000000000000000000dead" route="address" />
  ),
  date: <TimeSinceText time={1647711073987} />,
  extrinsics: 20,
  transactions: 10,
  events: 5,
}));

export const chartData = [];

export const overviewData = [
  { label: "Number", value: 145 },
  {
    label: "Hash",
    value: "0xd2e60285231c35f9e2baa6610900a91cce8aa7eaebc34213643b7e7c8cee4182",
  },
  {
    label: "Timestamp",
    value: <TimeSinceText time="2022-02-11T13:12:06.285" />,
  },
];

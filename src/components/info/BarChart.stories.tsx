import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BarChart from "./BarChart";
import { rawData } from "./chartData";
import { formatAmount } from "../../utils";

const data = rawData.map((d) => ({
  time: new Date(d.time),
  value: Number(d.value),
}));

export default {
  title: "Info/BarChart",
  component: BarChart,
  args: { data: data },
} as ComponentMeta<typeof BarChart>;

const Template: ComponentStory<typeof BarChart> = (args) => {
  const [hoverValue, setHoverValue] = useState<number | undefined>();
  const [hoverDate, setHoverDate] = useState<string | undefined>();
  const locale = "en";
  const currentDate = new Date().toLocaleString(locale, {
    month: "short",
    year: "numeric",
    day: "numeric",
  });

  return (
    <Box width={"600px"} h="300px">
      <Text>Title</Text>
      {hoverValue && hoverValue > 0 ? (
        <Text>${formatAmount(hoverValue)}</Text>
      ) : (
        <Text>LDING</Text>
      )}
      <Text>{hoverDate ?? currentDate}</Text>
      <BarChart
        {...args}
        setHoverDate={setHoverDate}
        setHoverValue={setHoverValue}
      />
    </Box>
  );
};

export const Normal = Template.bind({});

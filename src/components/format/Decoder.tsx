import { Stack, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";

export default function Decoder({ hexData }: Props): ReactElement<Props> {
  return (
    <Stack direction={"row"}>
      {/* Add decode dropdown with functions */}
      <Text>hexData</Text>
    </Stack>
  );
}

type Props = {
  hexData: string;
};

type Decode = {
  name: string;
  symbol: string;
  function: (x: string) => string;
};

import React, { ReactElement } from "react";
import { Tooltip } from "@chakra-ui/react";
import { timeSince } from "../../utils";

export default function TimeSinceText({ time }: Props): ReactElement<Props> {
  return (
    <Tooltip label={new Date(time).toUTCString()}>{timeSince(time)}</Tooltip>
  );
}

type Props = {
  time: number | string;
};

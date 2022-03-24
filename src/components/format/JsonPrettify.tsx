import React, { ReactElement } from "react";
import { JSONArray, JSONObject } from "../../utils/types";

export default function JsonPrettify({ data }: Props): ReactElement<Props> {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

type Props = {
  data: JSONObject | JSONArray;
};

import React, { ReactElement } from "react";
import { Link, Text, Tooltip } from "@chakra-ui/react";
import { truncateText } from "../../utils";
import ClipboardCopy from "./ClipboardCopy";

/**
 *
 * @prop id - id to route
 * @prop route - path like tx, account, token etc
 * @prop truncate - truncate length for routes in ["account", "address", "stake", "token", "tx"]
 * @prop copyable - should copy icon be added?
 * @returns
 */
export default function LinkId({
  id,
  route,
  truncate = 6,
  copyable = true,
}: Props): ReactElement<Props> {
  if (id) {
    return (
      <Text>
        <Tooltip label={truncate > 0 ? id : null}>
          <Link href={`/${route}/${id}`} color="blue.600">
            {route &&
            ["account", "address", "stake", "token", "tx"].includes(route)
              ? truncateText(id, truncate)
              : id}
          </Link>
        </Tooltip>
        {copyable && (
          <Tooltip label="copy">
            <ClipboardCopy text={id} />
          </Tooltip>
        )}
      </Text>
    );
  } else {
    return <Link href="#" />;
  }
}

type Props = {
  id?: string;
  route?: string;
  truncate?: number;
  copyable?: boolean;
};

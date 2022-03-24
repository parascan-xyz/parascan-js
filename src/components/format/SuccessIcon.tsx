import React, { ReactElement } from "react";
import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";
import { CSSObject } from "@chakra-ui/react";

/**
 * return a success icon or failed icon
 * @prop success - true  or false
 * @returns
 */
export default function SuccessIcon({ success }: Props): ReactElement<Props> {
  return success ? (
    <CheckCircleIcon color="green" _hover={"success" as CSSObject} />
  ) : (
    <CloseIcon color="red" _hover={"failed" as CSSObject} />
  );
}

type Props = {
  success: boolean;
};

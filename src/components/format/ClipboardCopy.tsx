import React, { ReactElement } from "react";
import { CopyIcon } from "@chakra-ui/icons";
import { IconProps } from "@chakra-ui/react";

// add tooltip & label and notify when copied
export default function ClipboardCopy({
  text,
  ...iconProp
}: Props): ReactElement<Props> {
  return (
    <CopyIcon
      _hover={{ opacity: 0.5 }}
      onClick={() => {
        navigator.clipboard.writeText(text);
      }}
    />
  );
}

interface Props extends IconProps {
  text: string;
}

// type Props = IconProps & {
//   text: string;
// };

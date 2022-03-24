import { Spinner, Stack, Text } from "@chakra-ui/react";

export default function Loader({ text }: Props) {
  return (
    <Stack direction={"column"} zIndex={-1}>
      <Spinner size="xl" />
      <Text size="xl">{text || "Loading"}</Text>
    </Stack>
  );
}

type Props = {
  text?: string;
};

import { footerprops } from "@lib/types";
import { Text } from "@mantine/core";

export default function Footer(props:footerprops) {
  return (
    <>
      <Text ta="center" my="sm" c="dimmed" fz={15}>Copyright © {props.year} {props.name} {props.id}</Text>
    </>
  );
}

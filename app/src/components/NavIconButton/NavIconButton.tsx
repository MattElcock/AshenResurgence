import { LinkBox, Icon, Text, LinkOverlay } from "@chakra-ui/react";
import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

type NavIconButtonProps = {
  icon: IconType;
  label: string | ReactNode;
  href: string;
};

const NavIconButton = ({ icon, label, href }: NavIconButtonProps) => {
  return (
    <LinkBox
      display="flex"
      flexDirection="column"
      gap={1}
      padding={3}
      border="1px solid white"
      borderRadius="5px"
      alignItems="center"
      justifyContent="center"
      w="6rem"
      h="6rem"
    >
      <Icon as={icon} w={6} h={6} />
      <LinkOverlay href={href}>
        <Text textAlign="center">{label}</Text>
      </LinkOverlay>
    </LinkBox>
  );
};

export { NavIconButton };

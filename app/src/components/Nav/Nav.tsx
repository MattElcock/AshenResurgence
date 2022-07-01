import {
  Avatar,
  Flex,
  LinkBox,
  LinkOverlay,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { NavIconButton } from "components/NavIconButton";
import { MdHome, MdPerson, MdTrackChanges } from "react-icons/md";
import { IoDice } from "react-icons/io5";

const Nav = () => {
  return (
    <Flex
      paddingX="1rem"
      paddingY="2rem"
      color="white"
      direction="column"
      align="center"
      height="100%"
      flex="1"
    >
      <List spacing={5}>
        <ListItem>
          <NavIconButton icon={MdHome} label="Home" href="/" />
        </ListItem>
        <ListItem>
          <NavIconButton
            icon={MdPerson}
            label="Characters"
            href="/characters"
          />
        </ListItem>
        <ListItem>
          <NavIconButton
            icon={IoDice}
            label="Roll System"
            href="/roll-system"
          />
        </ListItem>
        <ListItem>
          <NavIconButton
            icon={MdTrackChanges}
            label="Interactive Sheet"
            href="/sheet-tracker"
          />
        </ListItem>
      </List>
      <Text marginTop="auto">Sign out</Text>
    </Flex>
  );
};

export { Nav };

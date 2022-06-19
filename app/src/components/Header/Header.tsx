import { Flex, Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const Header = () => {
  console.log(process.env.PUBLIC_URL);
  return (
    <Flex padding="1rem 2rem" align="center" gap={5}>
      <Image
        src={`${process.env.PUBLIC_URL}/images/AshenLogo.png`}
        width="70px"
        height="76px"
      />
      <Text fontSize="3xl" color="white">
        The Ashen Resurgence
      </Text>
    </Flex>
  );
};

export { Header };

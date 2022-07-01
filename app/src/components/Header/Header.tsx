import { Flex, Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const Header = () => {
  console.log(process.env.PUBLIC_URL);
  return (
    <Flex paddingY="0.5rem" paddingX="2rem" align="center" gap={5}>
      <Image
        src={`${process.env.PUBLIC_URL}/images/AshenLogo.png`}
        width="50px"
        height="55px"
      />
      <Text fontSize="2xl" color="white">
        The Ashen Resurgence
      </Text>
    </Flex>
  );
};

export { Header };

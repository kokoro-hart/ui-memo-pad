import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

import { Container } from "@/components/Layouts/Container";
import { getPath } from "@/utils";

import { Link } from "../Link";

export const Header: FC = () => {
  return (
    <Box as="header" bg="background.100" h="75px">
      <Container h="100%" display="flex" alignItems="center">
        <Link href={getPath.home}>
          <Flex gap="8px" alignItems="center">
            <Image
              boxSize={{ base: "32px", md: "40px" }}
              src="/image/kokoro-tobita-icon.png"
              alt="Dan Abramov"
              border="1px solid"
              borderColor="border.100"
              borderRadius="full"
              htmlWidth="32"
              htmlHeight="32"
            />
            <Text fontSize={{ base: "16px", md: "18px" }} fontWeight={700}>
              UI Memo
            </Text>
          </Flex>
        </Link>
      </Container>
    </Box>
  );
};

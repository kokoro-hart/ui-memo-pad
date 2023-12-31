import { Box, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";

import { Cards } from "@/components/Elements/Cards";
import { AppLayout } from "@/components/Layouts/AppLayout/AppLayout";
import { Head } from "@/components/Layouts/Head";
import { getPath } from "@/utils";

const Home: FC = () => {
  const HeadProps = {
    url: getPath.home,
    title: "開発者のUIメモ帳",
    description:
      "WebサイトやWebアプリでよく使用されるUIのバリエーションや事例をまとめています。学習や実装パターンの把握のリファレンスとしてご活用ください。",
    ogImage: "",
  };
  return (
    <>
      <Head {...HeadProps} />
      <AppLayout>
        <Heading
          as="h1"
          fontSize={{ base: "22px", md: "28px" }}
          display="flex"
          gap="10px"
          alignItems="center"
        >
          開発者のUIメモ帳
        </Heading>

        <Text fontSize={{ base: "14px", md: "15px" }} mt="32px">
          WebサイトやWebアプリでよく使用されるUIのバリエーションや事例をまとめています。学習や実装パターンの把握のリファレンスとしてご活用ください。
        </Text>

        <Box as="div" mt={{ base: "32px", md: "48px" }}>
          <Cards />
        </Box>
      </AppLayout>
    </>
  );
};

export default Home;

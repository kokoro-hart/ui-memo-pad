import { FC } from "react";

import { Head } from "@/components/Layouts/Head";
import { ReferenceLayout } from "@/components/Layouts/ReferenceLayout";
import { FormsResources, fv, resources } from "@/features/Forms";
import { Nav } from "@/features/Reference";
import { getMetaData } from "@/features/Reference/api";
import { MetaData } from "@/features/Reference/types";
import { getPath } from "@/utils";

export const getStaticProps = async () => {
  const metaData = await getMetaData(resources);

  return {
    props: {
      metaData,
    },
  };
};

type Props = {
  metaData: MetaData[];
};

const Resources: FC<Props> = ({ metaData }) => {
  const head = {
    url: getPath.resources("forms"),
    title: "フォーム - 開発者のUIメモ帳",
    description:
      "WebサイトやWebアプリでよく使用されるUIのバリエーションや事例をまとめています。学習や実装パターンの把握のリファレンスとしてご活用ください。",
    ogImage: "",
  };
  return (
    <>
      <Head {...head} />
      <ReferenceLayout fv={fv}>
        <Nav slug="forms" />
        <FormsResources mt={{ base: "32px", md: "40px" }} metaData={metaData} />
      </ReferenceLayout>
    </>
  );
};

export default Resources;

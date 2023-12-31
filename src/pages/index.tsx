import MainLayout from "@layouts/MainLayout";
import { NavigatorButtons } from "@subsets/home/buttons";
import React from "react";

const Content = () => {
  return (
    <main>
      <NavigatorButtons />
    </main>
  );
};

const Page = () => {
  return <Content />;
};

Page.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

export default Page;

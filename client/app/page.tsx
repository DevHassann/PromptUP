import React from "react";

import Header from "../components/layouts/header";
import { HomePageProps } from "../interfaces/pages.interface";
import MetaData from "@/functions/meta-data";

const page = (props: HomePageProps) => {
  return (
    <>
      <MetaData
        title="PromptUp"
        description="PromptUp is an AI generated prompt marketplace"
        keywords="AI Prompt Marketplace, AI, AI Prompts, Marketplace"
      />
      <Header activeItem={0} />
    </>
  );
};

export default page;

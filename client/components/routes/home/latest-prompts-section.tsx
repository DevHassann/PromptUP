import React from "react";

import PromptCard from "../../../components/common/prompt-card";

import { PromptCardFakeData } from "../../../static/prompt-card-fake-data";

import { styles } from "../../../styles/partials";

const LatesPromptSection = () => {
  return (
    <div className="w-[95%] lg:w-[90%] xl:w-[80%] 2xl:w-[75%] m-auto mt-4 max-lg:mt-8">
      <h1 className={`${styles.heading} p-2`}>Latest Prompts</h1>
      <div className="w-full flex flex-wrap mt-5">
        {PromptCardFakeData.map((item: any) => (
          <PromptCard prompt={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default LatesPromptSection;

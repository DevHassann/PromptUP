import { SignUp } from "@clerk/nextjs";
import MetaData from "../../../../functions/meta-data";

export default function Page() {
  return (
    <>
      <MetaData
        title="PromptUp - Sign Up"
        description="PromptUp is an AI generated prompt marketplace"
        keywords="AI Prompt Marketplace, AI, AI Prompts, Marketplace"
      />
      <div className="w-full h-screen flex items-center justify-center">
        <SignUp />
      </div>
    </>
  );
}

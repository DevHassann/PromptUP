import React from "react";

import MetaData from "../functions/meta-data";

import Header from "../components/layouts/header";
import HeroSection from "../components/routes/home/hero-section";
import AboutSection from "../components/routes/home/about-section";
import LatesPromptSection from "../components/routes/home/latest-prompts-section";
import BestSellerSection from "../components/routes/home/best-seller-section";
import FutureSection from "../components/routes/home/future-setion";
import PartnerSection from "../components/routes/home/partners-section";
import Seperator from "../components/common/seperator";
import Footer from "../components/layouts/footer";

import { HomePageProps } from "../interfaces/pages.interface";

const page = (props: HomePageProps) => {
  return (
    <>
      <MetaData
        title="PromptUp"
        description="PromptUp is an AI generated prompt marketplace"
        keywords="AI Prompt Marketplace, AI, AI Prompts, Marketplace"
      />

      <Header activeItem={0} />
      <HeroSection />
      <AboutSection />
      <LatesPromptSection />
      <BestSellerSection />
      <FutureSection />
      <Seperator />
      <PartnerSection />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default page;

"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

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
import Loader from "../components/common/loader";

import { HomePageProps } from "../interfaces/pages.interface";

const page = (props: HomePageProps) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, [isMounted]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/me")
      .then((res) => {
        setUser(res.data.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <MetaData
        title="PromptUp"
        description="PromptUp is an AI generated prompt marketplace"
        keywords="AI Prompt Marketplace, AI, AI Prompts, Marketplace"
      />

      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Header activeItem={0} user={user} />
          <HeroSection />
          <Seperator />
          <AboutSection />
          <LatesPromptSection />
          <FutureSection />
          <BestSellerSection />
          <PartnerSection />
          <br />
          <br />
          <br />
          <br />
          <Footer />
        </>
      )}
    </>
  );
};

export default page;

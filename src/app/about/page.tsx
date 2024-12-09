import Problem from "@/app/components/about_component/companies";
import Work from "@/app/components/about_component/work";
import Footer from "@/app/components/Landing-page-component/footer";
import Header from "@/app/components/pages_component/header";
import React from "react";
import About_Us from "@/app/components/about_component/about";
import Team from "../components/pages_component/team";
import Companies from "@/app/components/about_component/companies";

const AboutPage = () => {
  return (
    <>
      <Header />
      <About_Us />
      <Problem />
      <Team />
      <Companies />
      <Work />
      <Footer />
    </>
  );
};

export default AboutPage;
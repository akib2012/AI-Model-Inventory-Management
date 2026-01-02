import React from "react";
import Herosection from "../Components/Herosection";
import Getstrted from "../Components/Getstrted";
import RecentModel from "../Components/RecentModel";
import AboutAimodel from "../Components/AboutAimodel";
// import Footer from "../Components/Footer";
import FeaturedModels from "../Components/FeaturedModels";
import AIUseCases from "../Components/AIUseCases";
import WhyChoose from "../Components/WhyChoose";
import ModelStats from "../Components/ModelStats";
import Testimonials from "../Components/Testimonials";
// import TechStack from "../Components/TechStack";
import HowItWorks from "../Components/HowItWorks";
import CTASection from "../Components/CTASection";

const Homepage = () => {
  return (
    <div >
      <div className=" mt-6 ">
        <Herosection ></Herosection>
        <Getstrted></Getstrted>
        

      </div>

      <div >
            <RecentModel></RecentModel>
            <AboutAimodel></AboutAimodel>
            <FeaturedModels></FeaturedModels>
            <AIUseCases></AIUseCases>
            <WhyChoose></WhyChoose>
            <ModelStats></ModelStats>
            <Testimonials></Testimonials>
            {/* <TechStack></TechStack> */}
            <HowItWorks></HowItWorks>
            <CTASection></CTASection>
          

      </div>
    </div>
  );
};

export default Homepage;

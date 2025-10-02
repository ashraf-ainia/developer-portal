
import MainSection from "@components/portal/landingPage/MainSection";
import Service from "@components/portal/landingPage/ServiceSection";
import Advantages from "@components/portal/landingPage/Advantages";
import Partners from "@components/portal/landingPage/Partners";
import Contact from "@components/portal/landingPage/Contact";

export default function Home() {
  return (
    <div>
      <MainSection />
      <Service />
      <Advantages />
      <Partners />
      <Contact />
    </div>
  );
}

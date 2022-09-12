import CtaSection from "../Components/CtaSection";
import Faq from "../Components/Faq";
import HomePage from "../Components/HomePage";
import InfoSection from "../Components/InfoSection";
import OurCustomers from "../Components/OurCustomers";
import Section4 from "../Components/Section-4";
import Footer from '../Components/Footer'


export default function Home() {
  return (
    <div className="home" >
      {/* <HomePage /> */}
      {/* <OurCustomers /> */}
      {/* <InfoSection /> */}
      <Section4 />
      <Faq />
      <CtaSection />
      <Footer />
    </div>
  )
}

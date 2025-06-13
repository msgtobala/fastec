import ClientStories from "./components/client-stories/ClientStories";
import Footer from "./components/common/footer/Footer";
import Header from "./components/common/Header";
import Search from "./components/common/Search";
import ServicesCards from "./components/common/ServicesCards";
import WhatsAppFloatingButton from "./components/common/WhatsAppFloatingButton";
import ContactUs from "./components/contactus/ContactUs";
import FAQ from "./components/faq/FAQ";
import HeroBanner from "./components/hero/HeroBanner";
import Oppurtunities from "./components/oppurtunities/Oppurtunities";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Header />
      <WhatsAppFloatingButton />
      <HeroBanner />
      <div className="relative top-[67px] left-1/2 -translate-x-1/2">
        <Search />
      </div>
      <ServicesCards />
      <Oppurtunities />
      <FAQ />
      <ClientStories />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;

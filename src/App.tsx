import ServicesCards from "./components/common/ServicesCards";
import SmartSuggestion from "./components/hero/SmartSuggestion";
import ContactUs from "./components/contactus/ContactUs";

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full flex-col gap-50 py-15">
      <SmartSuggestion />
      <ServicesCards />
      <ContactUs />
    </div>
  );
};

export default App;

import ClientStories from "./components/client-stories/ClientStories";
import Footer from "./components/common/footer/Footer";
import Search from "./components/common/Search";
import FAQ from "./components/faq/FAQ";
import Oppurtunities from "./components/oppurtunities/Oppurtunities";

const App = () => {
  return (
    <>
      <Oppurtunities />
      <Search />
      <FAQ />
      <ClientStories />
      <Footer />
    </>
  );
};

export default App;

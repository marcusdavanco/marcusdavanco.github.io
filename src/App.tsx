import GlobalStyle from "./styles/global";
import { Header } from "./components/header";
import { Banner } from "./components/banner";
import { Intro } from "./components/intro";
import { Filters } from "./components/filters";
import { Gallery } from "./components/gallery";
import { SocialProof } from "./components/socialProof";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Banner />
      <Intro />
      <Filters />
      <Gallery />
      <SocialProof />
    </>
  );
}

export default App;

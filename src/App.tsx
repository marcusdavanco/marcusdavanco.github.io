import GlobalStyle from "./styles/global";
import { Header } from "./components/header";
import { Banner } from "./components/banner";
import { Intro } from "./components/intro";
import { Skills } from "./components/skills";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Banner />
      <Intro />
      <Skills />
    </>
  );
}

export default App;

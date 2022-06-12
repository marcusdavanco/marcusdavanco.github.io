import GlobalStyle from "./styles/global";
import { Header } from "./components/header";
import { Banner } from "./components/banner";
import { Intro } from "./components/intro";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Banner />
      <Intro />
    </>
  );
}

export default App;

import Header from "./components/Header";
import List from "./components/Main";
import { GlobalStyle } from "./globalstyle";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  Aos.init({
    once: true,
  });
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <List />
      </main>
    </>
  );
}

export default App;

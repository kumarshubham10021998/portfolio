import { useContext } from "react";
import Navbar from "./components/Navbar";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom"
const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Router>
      <Navbar />
      <Toggle />
          <Switch>
          <Route  exact path="/"><Intro/></Route>
            <Route  exact path="/about"><About /></Route>
            <Route  exact path="/contact"><Contact /></Route>
           

          </Switch>
        </Router>
      {/* <About /> */}
      {/* <ProductList /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default App;

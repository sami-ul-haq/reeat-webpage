import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <HeroSection />
        {/* <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
        </Switch> */}
      </BrowserRouter>
    </>
  );
}

export default App;

import Layout from "./components/layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";

import NoMatch from "./pages/no-match";

import DataTypes from "./pages/data-types";
import Gallery from "./pages/gallery";
import Tabs from "./pages/tabs";
import Games from "./pages/games";
import GameInfo from "./pages/game-info";
import Cars from "./pages/cars";
import Glovo from "./pages/glovo";
import Skills from "./pages/skills";
import API from "./pages/API";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="skills" element={<Skills />} />
          <Route path="data-types" element={<DataTypes />} />
          <Route path="glovo" element={<Glovo />} />
          <Route path="tabs" element={<Tabs />} />
          <Route path="cars" element={<Cars />} />
          <Route path="phones"></Route>
          <Route path="games">
            <Route index element={<Games />} />
            <Route path=":gameId" element={<GameInfo />} />
          </Route>
          <Route path="API" element={<API />}>
            <Route path="history" element={"History"} />
          </Route>

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

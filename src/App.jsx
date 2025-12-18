import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import Game from "./pages/Game";
import Info from "./pages/Info";
import Help from "./pages/Help";
import Play from "./pages/Play";

const App = () => <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}>
      <Route index element={<Info />} />
      <Route path="/help" element={<Help />} />
      <Route path="/play" element={<Play />} />
    </Route>
    <Route path="/game" element={<Game />} />
  </Routes>
</BrowserRouter>;

export default App;
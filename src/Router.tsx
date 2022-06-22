import { BrowserRouter, Routes, Route } from "react-router-dom";
import CampeosCopa from "./pages/CampeosCopa";
import Home from "./pages/Home";
import ListaMercado from "./pages/ListaMercado";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mercado" element={<ListaMercado />} />
        <Route path="/campeos" element={<CampeosCopa />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import English from "./Home/english-page";
import Portugues from "./Home/portuguese-page";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      <main className="flex-1 overflow-y-auto bg-slate-100">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default function Routess() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/portugues" element={<Portugues />} />
          <Route path="/" element={<English />} />
        </Route>
        <Route
          path="*"
          element={<h1>Página não encontrada! Verifique a URL.</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

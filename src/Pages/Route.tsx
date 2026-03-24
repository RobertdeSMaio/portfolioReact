import {
  BrowserRouter,
  Outlet,
  Route,
  Routes as RouterProvider,
} from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import App from "./Home/App";

const Layout = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Header />
      <main className="flex-1 overflow-y-auto bg-slate-100">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default function Routes() {
  <BrowserRouter>
    <RouterProvider>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
      </Route>
      ;
      <Route
        path="*"
        element={<h1>Página não encontrada! Verifique a URL.</h1>}
      />
    </RouterProvider>
  </BrowserRouter>;
}

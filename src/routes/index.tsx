import { Outlet, Route, Routes } from "react-router-dom";
import MyLayout from "../components/layouts/MainLayout";
import { ShortlyRoute } from "./ShortlyRoute";
import ShortlyLayout from "../components/layouts/ShortlyLayout";
import MainLayout from "../components/layouts/MainLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <ShortlyRoute>
            <ShortlyLayout>d</ShortlyLayout>
          </ShortlyRoute>
        }
      >
        <Route path="/tela-em-breve-1" element={<ShortlyLayout />} />
        <Route path="/tela-em-breve-2" element={<ShortlyLayout />} />
        <Route path="/tela-em-breve-3" element={<ShortlyLayout />} />
        <Route path="/tela-em-breve-4" element={<ShortlyLayout />} />
        <Route path="/tela-em-breve-5" element={<ShortlyLayout />} />
      </Route>

      <Route
        element={
          <MainLayout>
            <Outlet />
          </MainLayout>
        }
      >
        <Route />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

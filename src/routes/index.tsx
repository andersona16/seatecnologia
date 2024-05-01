import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ComingSoonPage from "../components/ComingSoonPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      {[1, 2, 3, 4, 5].map((number) => (
        <Route
          key={number}
          path={`/em-breve-${number}`}
          element={<ComingSoonPage />}
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;

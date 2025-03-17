import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { paths } from "./paths";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={paths.HOME} element={<MainPage />} />
    </Routes>
  );
};

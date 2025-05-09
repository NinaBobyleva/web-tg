import { Route, Routes } from "react-router-dom";
import { AddMaterialsPage } from "./pages/AddMaterialsPage/AddMaterialsPage";
import { paths } from "./paths";
import { Layout } from "./components/Layout/Layout";
import { BasketPage } from "./pages/BasketPage/BasketPage";
import { HomePage } from "./pages/HomePage/HomePage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={paths.HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={paths.UPDATE} element={<AddMaterialsPage />} />
        <Route path={paths.BASKET} element={<BasketPage />} />
      </Route>
    </Routes>
  );
};

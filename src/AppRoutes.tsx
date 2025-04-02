import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { paths } from "./paths";
import { Layout } from "./components/Layout/Layout";
import { BasketPage } from "./pages/BasketPage/BasketPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={paths.HOME} element={<Layout />} >
        <Route index element={<MainPage />} />
        <Route path={paths.BASKET} element={<BasketPage />} />
      </Route>
    </Routes>
  );
};

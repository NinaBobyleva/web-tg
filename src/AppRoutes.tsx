import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { ImagePage } from "./pages/ImagePage/ImagePage";
import { paths } from "./paths";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={paths.HOME} element={<MainPage />} />
      <Route path={paths.IMG_PAGE} element={<ImagePage />} />
    </Routes>
  );
};

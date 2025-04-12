import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Wrapper } from "../Wrapper/Wrapper";

export const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
};

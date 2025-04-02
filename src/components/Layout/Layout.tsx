import { Outlet } from "react-router-dom";
import { EditOrderBlock } from "../EditOrderBlock/EditOrderBlock";
import { Header } from "../Header/Header";
import { Wrapper } from "../Wrapper/Wrapper";

export const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <EditOrderBlock />
      <Outlet />
    </Wrapper>
  );
};

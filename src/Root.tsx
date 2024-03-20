import { Outlet } from "react-router-dom";
import { Header } from "./presentation/component";

export const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

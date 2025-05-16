import React from "react";
import { Header } from "../components";
import { RelativeDiv } from "./elements";

type MainLayoutProps = {
  children: React.ReactNode;
  hideExplore?: boolean;
};

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  hideExplore,
}) => {
  return (
    <RelativeDiv>
      <Header hideExplore={hideExplore} />
      <main>{children}</main>
    </RelativeDiv>
  );
};

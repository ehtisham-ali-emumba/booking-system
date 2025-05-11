import React from "react";
import { Header } from "../components";

type MainLayoutProps = {
  children: React.ReactNode;
  hideExplore?: boolean;
};

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  hideExplore,
}) => {
  return (
    <div style={{ position: "relative" }}>
      <Header hideExplore={hideExplore} />
      <main>{children}</main>
    </div>
  );
};

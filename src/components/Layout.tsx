import React from "react";
import { Navbar } from ".";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="px-2 lg:px-0 pb-4 mx-auto max-w-screen-xl">{children}</main>
    </>
  );
};

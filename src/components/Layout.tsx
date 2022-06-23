import React from "react";
import { Navbar } from ".";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-screen-xl">{children}</main>
    </>
  );
};

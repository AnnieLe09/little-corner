import React from "react";
import Navbar from "./components/navbar/Navbar";

export default function MainTemplate({ children }) {
  return (
    <>
      {children}
      <Navbar />
    </>
  );
}

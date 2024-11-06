import React from "react";
import MainTemplate from "../../templates/MainTemplate";
import Hero from "./components/hero/Hero";

export default function HomePage() {
  return (
    <MainTemplate
      children={
        <div>
          <Hero />
        </div>
      }
    />
  );
}

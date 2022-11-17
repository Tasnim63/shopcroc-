import React from "react";
import Foodbanner from "./Foodbanner";
import HomeBanner from "./HomeBanner";
import Vagetable from "./Vagetable";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <Vagetable />
      <Foodbanner/>
    </>
  );
}

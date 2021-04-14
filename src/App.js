import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState, useRef } from "react";
// import VersionList from "./components/versionList"
import Banner from "./components/banner";

function App() {
  let imgList = [
    {
      src:
        "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1242620113,3485135282&fm=26&gp=0.jpg",
      alt: "image-0",
    },
    {
      src:
        "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2409223494,1882453675&fm=26&gp=0.jpg",
      alt: "image-1",
    },
    {
      src:
        "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=130745297,1952331828&fm=26&gp=0.jpg",
      alt: "image-2",
    },
    {
      src:
        "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2410960174,2438680211&fm=26&gp=0.jpg",
      alt: "image-3",
    },
    {
      src:
        "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1242620113,3485135282&fm=26&gp=0.jpg",
      alt: "image-4",
    },
    {
      src:
        "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2409223494,1882453675&fm=26&gp=0.jpg",
      alt: "image-5",
    },
  ];
  useEffect(() => {});
  return (
    <div className="App">
      <Banner
        imgList={imgList}
        autoTime={2000}
        autoPlay={true}
        isNeedDot={false}
        hasArrow={false}
        width={300}
        speed={300}
      />
    </div>
  );
}

export default App;

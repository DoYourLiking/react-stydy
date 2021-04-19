
import "./App.css";
import { useEffect, useState, useRef } from "react";
// import VersionList from "./components/versionList"
import Banner from "./components/banner";
import Menu from "./components/menu";

function App() {
  let imgList = [
    {
      src:
        "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2410960174,2438680211&fm=26&gp=0.jpg",
      alt: "image--1",
    },
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
    {
      src:
        "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=130745297,1952331828&fm=26&gp=0.jpg",
      alt: "image-6",
    },
  ];
  useEffect(() => {});
  return (
    <div className="App">
      <Banner
        imgList={imgList}
        autoTime={1000}
        autoPlay={false}
        isNeedDot={false}
        width={300}
        speed={300}
      />
      <Menu
        content={{
          name:'0',
          children:  [
            {
              name: "1",
              children: [
                { name: "1-1" },
                {
                  name: "1-2",
                  children: [{ name: "1-2-1" }, { name: "1-2-2" }],
                },
              ],
            },
            {
              name: "2",
              children: [
                { name: "2-1" },
                {
                  name: "2-2",
                  children: [{ name: "2-2-1" }, { name: "2-2-2" }],
                },
              ],
            },
            {
              name: "3",
              children: [
                { name: "3-1" },
                { name: "3-2", children: [{ name: "3-2-1" }, { name: "3-2-2" }] },
              ],
            }
          ]        
        }}
      />
    </div>
  );
}

export default App;

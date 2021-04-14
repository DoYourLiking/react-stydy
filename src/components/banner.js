import { createRef, useEffect, useRef, useState } from "react";
import "./banner.css";
const Banner = function (props) {
  let imgList = props.imgList;
  let width = props.width;
  let [index, setIndex] = useState(0);
  let [transition, setTransition] = useState(
    `transform linear ${props.speed}ms`
  );
  let len = imgList.length;
  let ref = useRef(null);
  let controlDom = ref.current;
  ref.current = { controlFlag: false, left: 0 };
  useEffect(() => {
    document.getElementById("ban").style.left = `-${width >> 1}px`;
    let timer;
    if (props.autoPlay) {
      timer = setInterval(() => {
        if (ref.current.controlFlag) return;
        setIndex((index) => {
          index++;
          if (index == len - 1) {
            setTransition("linear 0ms");
            return (index = 0);
          }
          setTransition(`transform linear ${props.speed}ms`);
          return index;
        });
      }, props.autoTime);
    }
    return () => {
      clearInterval(timer);
    };
  }, []);
  function handleMouseD(e) {
    ref.current.controlFlag = true;
    ref.current.left = e.clientX;
    ref.current.X = document.getElementById("ban").style.left;
    console.log(ref.current);
  }
  function handleMouseM(e) {
    if (ref.current.controlFlag) {
      let diff = e.clientX - ref.current.left;
      document.getElementById("ban").style.left = (-width >> 1) + diff + "px";
    }
  }
  function handleMouseU() {
    ref.current.controlFlag=false
  }
  return (
    <div className="banner">
      <div
        className="banner-control"
        ref={ref}
        onMouseDown={(e) => {
          handleMouseD(e);
        }}
        onMouseMove={(e) => {
          handleMouseM(e);
        }}
        onMouseUp={() => {
          handleMouseU();
        }}
        id="ban"
        style={{
          transition: transition,
          transform: `translate(-${index * width}px)`,
        }}
      >
        {imgList.map((item) => {
          return (
            <div className="banner-image-wrapper" key={item.alt} >
              <img className="banner-image" src={item.src} alt={item.alt} draggable="false"/>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Banner;

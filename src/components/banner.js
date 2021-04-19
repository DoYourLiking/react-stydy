import { useEffect, useRef, useState } from "react";
import "./banner.css";
const Banner = function (props) {
  let imgList = props.imgList;
  let width = props.width;
  let [index, setIndex] = useState(1); //初始位置
  let [isAnimal, setIsAnimal] = useState(false);
  let len = imgList.length;
  let ref = useRef(null);
  let [x, setX] = useState(0);
  useEffect(() => {
    setMoveDistance();
  }, [index]);
  useEffect(() => {
    ref.current.style.left = `-150px`;
    let timer;
    if (props.autoPlay) {
      //自动轮播
      timer = setInterval(() => {
        ref.current.style.transitionProperty = "all"; //这一步必要的，因为一开始react会置为none,导致后续的动画结束事件无法被监听，导致无法回复原来的位置
        setIndex((index) => index + 1);
      }, props.autoTime);
    }
    return () => {
      clearInterval(timer);
    };
  }, []);

  //监听index的改变
  function setMoveDistance() {
    //监听动画结束的函数，在动画结束后对index进行判断，选择是否位置回归
    const transitionend = function () {
      ref.current.style.transitionProperty = "none";
      setIsAnimal(false);
      console.log(index);
      if (index === len - 3) {
        //用setTimeout防止卡顿
        setTimeout(() => {
          setIndex(1);
        }, 0);
      }
      if (index === 0) {
        setTimeout(() => {
          setIndex(len - 4);
        }, 0);
      }
      ref.current.removeEventListener("transitionend", transitionend, false);
    };
    ref.current.addEventListener("transitionend", transitionend, false);
    console.log(`index改变`);
    let distance = -width * index + "px";
    ref.current.style.transform = `translate3d(${distance}, 0, 0)`;
  }
  function handleMouseD(e) {
    setX(e.clientX);
  }
  function handleMouseU(e) {
    if (isAnimal) return;
    let LorR = e.clientX - x;
    setIsAnimal(true);
    console.log(LorR);
    ref.current.style.transitionProperty = "all";
    if (LorR >= 50) {
      setIndex(index - 1);
    }
    if (LorR <= -50) {
      setIndex(index + 1);
    }
  }
  return (
    <div className="banner">
      <div
        className="banner-control"
        ref={ref}
        onMouseDown={(e) => {
          handleMouseD(e);
        }}
        onMouseUp={(e) => {
          handleMouseU(e);
        }}
        id="ban"
      >
        {imgList.map((item) => {
          return (
            <div className="banner-image-wrapper" key={item.alt}>
              <img
                className="banner-image"
                src={item.src}
                alt={item.alt}
                draggable="false" //这个是取消darg事件导致的不能复原
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Banner;
//轮播组件的关键在于对动画结束事件进行监听，在动画结束以后进行位置复原。

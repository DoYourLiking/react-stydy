import { useEffect, useState, useRef } from "react"
function VersionList() {
    const itemHeight: number = 40
    const [DataSource, SetDataSource] = useState([""])
    const scrollDom: any = useRef()
    const [totalH, setTotalH] = useState(400*40)
    const [transform, setTransform] = useState("")
    //真正渲染的数据
    const [showData, setShowData] = useState([""])
  
    //effect中获取dom
    useEffect(() => {
      createDataSource()
      showRealList(0)
    },[])
    const createDataSource = function () {
      let List = new Array(400).fill(0).map((item, index) => {
        return `name:名称${index}`
      })
      SetDataSource([...List])
    }
  
    const showRealList = function (scrollTop = 0) {
      console.log(scrollDom.current)
      let start = scrollTop / itemHeight | 0
      let viewNum = scrollDom.current.clientHeight / itemHeight | 0
      let end = start + viewNum
      setShowData(DataSource.slice(start, end))
      let transformY = start * itemHeight + "px"
      console.log(transformY)
      setTransform(`translate3d(0, ${transformY}, 0)`)
    }
  
    return <div className="virtual-List" ref={scrollDom} onScroll={()=>{showRealList(scrollDom.current.scrollTop);console.log(1)}}>
      <div className="virtual-List-height" style={{ height: totalH + "px" }}></div>
      <div className="view-content" style={{ transform: transform }} >
        {
          showData.map((item) => {
            return (<div key={item} className="view-item">
              {item}
            </div>)
          })
        }
      </div>
    </div>
  }
  //大坑 onscroll必须写在有高度的width上面
  
  export default VersionList;
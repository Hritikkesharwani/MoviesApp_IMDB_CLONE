import React,{useState} from 'react'

function Pagination() {
  let [pageNum,setPage] = useState(1);
  function Gofwd(){
       setPage(pageNum+1);
  }
  function Gobwd(){
    if(pageNum>1)
     setPage(pageNum-1);
  }
  return (
    <div>
        <div className="flex w-full justify-center mb-8">

        <button className=" p-2  border-green-600 text-green-400 rounded-l-xl "  onClick={ Gobwd} >Previous</button>
        <button className=" p-2 border-l-2 border-r-2 border-green-600 text-green-400 ">{pageNum}</button>
        <button className=" p-2  border-green-600 text-green-400 rounded-r-xl " onClick={Gofwd}>Next</button>
        </div>
    </div>
  )
}

export default Pagination
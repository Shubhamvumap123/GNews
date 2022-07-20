import React,{useState,useEffect} from 'react'

const News = () => {
    const [search,setsearch] = useState(" ")
const [news,setnews]=useState([]);


  return (
    <>
    <input type="text" placeholder="News Search" />
    </>
  )
}

export default News
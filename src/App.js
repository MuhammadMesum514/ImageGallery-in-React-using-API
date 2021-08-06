
// import './App.css';
// import { data } from "autoprefixer";
import SearchImage from "./components/SearchImage";
import ImageCard from "./components/ImageCard";
import React,{useState,useEffect} from "react";
function App() {
  const [images,setImage]=useState([]);
  const [loading,setisLoading]=useState(true);
  const [item,setItem]=useState('');
useEffect(()=>{
  fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${item} &image_type=photo&pretty=true`)
  .then(res=>res.json())
  .then(data=>{
    setImage(data.hits);
    setisLoading(false);
  },[item])
  // .then(data=>console.log(data))
  .catch(err=>console.log(err))
})
  return (
    <div>
      {/* <nav class="flex items-center text-center justify-between flex-wrap bg-green-300 p-6"> */}
  <div className="flex justify-center bg-green-800 p-6 text-white ">
    <span className="font-semibold inline-block align-middle r text-xl tracking-tight">Image Gallery Website</span>
  </div>
    <div className="container mx-auto">
      
     {!loading && images.length===0 && <h1 className="text-6xl text-center mx-auto mt-32">
     No Image Found..☹😞</h1>}
      <SearchImage searchtext={(text)=>setItem(text)} />
      {loading?<h1 className="text-6xl text-center mx-auto mt-32">Loading..😎🎈</h1>:
      <div className="grid grid-cols-3 gap-2  lg:ml-36 md:ml-10">
        { images.map(image =>(
          <ImageCard key={image.id} image={image}/>
        ))}       
        
        </div>
}</div>
</div>    
    
  );
}

export default App;

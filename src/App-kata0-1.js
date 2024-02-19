import React, {useEffect, useState} from "react";
import SearchForm from './Components/SearchForm';
import GifList from "./Components/GifList";

function App() {
  const [gifs, setGifs] = useState([]);
  useEffect(()=>{
    fetch("https://api.giphy.com/v1/gifs/trending?api_key=Yna6jlkjPAejI3SsE1gf0sAD7ErbYUgJ&limit=24&rating=g")
    .then(res => res.json())
    .then(resData => console.log(resData))
    .catch(err => console.log(err)); 
    // .then(resData => setGifs(res)); 
    //https://developers.giphy.com/docs/api/endpoint/#trending
    // https://developers.giphy.com/dashboard/
  },[]);

  return (
    <div>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm />
        </div>
      </div>
      <div className="main-content">
        <GifList />
      </div>
    </div>
  );
}

export default App;

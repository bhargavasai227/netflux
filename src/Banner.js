import React, { useState,useEffect } from 'react';
import axios from 'axios'; 
let x='https://image.tmdb.org/t/p/original/';
let b ="https://api.themoviedb.org/3/discover/movie?api_key=0d33c37eb01e3fc68abdffc711e2250a&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1"
function Banner() {
    const [Movies,setMovies]=useState([]);
    let [ran,setran]=useState(Math.floor(Math.random()*10))
    useEffect(() => {
      const data = async()=>{
        const req = await axios(b);
         
         setMovies(req.data.results[ran]);
        return 0;
      }
      data();
    }, [ran])
    setTimeout(() => {
       if(ran<=14)
        setran(ran+1) 
       else{
        setran(1)
       }
    }, 10000);
   
    let item=Movies; 
    let src=x+item.backdrop_path;
    const styles = {
    
      key:'{item.id}',
      backgroundImage: `url(${src})`,
      height: "300px",
      width:"100%",
      backgroundSize: "cover",
      backgroundPosition: "top center",
      marginBottom:"5px"
    };
    // console.log(item);
  return (<header className='ban-header'
  style={styles}
  >
    <div className='ban'>
     <div className='total_ban'>
     <h1 className='banner_title'>{item.title}</h1>
     <div className='discription'>
     <p style={{color:"GrayText"}}>{item.overview}</p>
     </div>
     <h6>[{item.vote_average}]</h6>
     </div>
     
    <div className='btn'>
      <button onClick={()=>{alert("added to watchlist")}} className="buttons" value='add'>add</button>
      <button onClick={()=>{alert("plying")}} className="buttons" value={"play"}>play</button>
    </div>
    </div>
    </header>
  )
}

export default Banner
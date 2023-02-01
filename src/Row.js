import React,{ useState,useEffect,useRef} from 'react';
import axios from 'axios';
import Youtube from "react-youtube";
 
function Row({title,fetch,isLargerow}){
const [Movies, setM] = useState([]); 
let[triler,settriler]=useState();
let x='https://image.tmdb.org/t/p/original/';// eslint-disable-next-line

     useEffect(() => {
        const fetchData= async()=>{
            const req = await axios("https://api.themoviedb.org/3/"+fetch);
            // console.table(req.data.results);
            setM(req.data.results);
            console.log('ran');
        }
        fetchData();
    }, []);
//  console.log(Movies);
const movieid=undefined;
const onClick=async(movieid)=>{
    console.log(movieid);
    if(triler){settriler('');}
    else{

        const api=`https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=0d33c37eb01e3fc68abdffc711e2250a&language=en-US`
       const req_triler=await axios(api);
       console.log(req_triler);
       if(req_triler.data.results.length===0){
        settriler("dQw4w9WgXcQ")
       }
       else
       settriler(req_triler.data.results[0].key);
    }
    }
    const opts = {
        height: '600',
        width: '100%',
        playerVars: {
           https:"//developers.google.com/youtube/player_parameters",
          autoplay: 1,
        },
      };
      const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });
    return(
        <div className='row'>
                <h2>{title}</h2>
        <div className='row_items'>
         {Movies.map(item  => (

            !isLargerow?<div className="hi" style={{position:"relative"}} ><div className='btmtxt'>{item.title}</div><img onClick={()=>onClick(item.id)} src={x+item.backdrop_path} alt={item.title} key={item.title} loading="lazy" className='poster sec'></img>
            </div>:<img onClick={()=>onClick(item.id)}src={x+item.poster_path} alt={item.title} key={item.title} className='poster fir' ></img>
        ))}
        </div>
        <div ref={divRef} />
        {triler&&<Youtube videoId={triler} opts={opts} loading="loadind" title="hi"/>}
        </div>

    );
}

export default Row;
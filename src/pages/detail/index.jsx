import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import ReactPlayer from 'react-player';
import Error from "../../components/error";
import Description from "./description";
import Comment from "./comment";
import Kanal from "./channel";
import VideoCards from "../../components/card";
import yükleme from "../../components/basic-loader";








const Detail = () => {

  const [video,setVideo]=useState(null);
  const [error,setError]=useState(null);



  const [params] = useSearchParams();
  const id = params.get("v");



  useEffect(()=>{

    const params = {id, extend: 1, geo: "TR" , lang:"tr"};


    api.get("/video/info" ,{params})
    .then((res)=>setVideo(res.data)
    ).catch((err)=>setError(err)
    );
  },[id])

 
  


  
   
  return (
   <div className="detai-page h-screen overflow-auto">
     <div className="page-content">
      {/* video  içerği */}

      <div>
        {/* oynatıcı */}
        <div className="h-[30vh] md:h-[50vh] lg:h-[60vh] rounded overflow-hidden">
        <ReactPlayer 
        url={`https://www.youtube.com/watch?v=${id}`}

        playing
        controls
        width= "100%"
        height="100%"
        />

        </div>




        {error ? <Error msg={error} /> : !video ? <yükleme/> :
        <div>
          {/* baslık */}

            <h1 className="my-3 text-xl font-bold"> {video.title} </h1>

          {/* kanalbilgisi */}

          <Kanal video= { video } />

          {/* açıklama alanı */}

          <Description video = {video} />

          {/* yorumlar */}
          <Comment videoId={id} />

        </div> }






      </div>

       {/* önerilen  içerği */}
       
       <div className="flex flex-col gap-5 p-1">
          {video?.relatedVideos.data.map((item, key) => (
            <VideoCards key={key} item={item} isRow={true} />
          ))}
        </div>


     </div>
   </div>
  )
}

export default Detail;
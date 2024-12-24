import { millify } from "millify";
import { useState } from "react";


const Description = ({video}) => {

    const [isOpen,setIsOpen]=useState(false);
    const text = isOpen ? video.description : video.description.slice(0, 100) + " ...daha fazla";


  return (
    <div 
    // !  ( !is open) toggle etkisi yapar 
    onClick={()=> setIsOpen(!isOpen) }
    className='bg-secondary rounded p-2 mt-4 cursor-pointer hover:bg-opacity-80'>
        <div className='flex gap-4 mb-2'>
            <p> {millify(video.viewCount)} Görüntülenme</p>
            {/* new date sayıyla verilen tarihi yazıyla gösteriririz */}
            <p>  {new Date(video.publishDate).toLocaleDateString("tr", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })} </p>
        </div>
          {/*  whitespace-pre-wrap satır arası verir */}
        <p className="whitespace-pre-wrap"> {text} </p>
    </div>
  )
}

export default Description;
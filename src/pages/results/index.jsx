
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from "../../utils/api"
import Error from "../../components/error";
import yükleme from '../../components/basic-loader';
import VideoCards from "../../components/card";

const Result = () => {

const [error,setError]=useState(null);
const [data,setData]=useState([]);
const [token,setToken]=useState(null);
const [isLoading,setIsLoading]=useState(true);
const [page,setPage]=useState(1);

  const [params] = useSearchParams();
  const query = params.get("search_query");

useEffect(()=>{

  const params ={query , token: page> 1 ? token : undefined};

  api .get("/search", { params }).then((res)=> {
    setData( (prev) => [...prev, ...res.data.data]);
  setToken(res.data.continuation)
  }
  ).catch((err)=>setError(err)
  ).finally(()=>setIsLoading(false));

},[query ,page]);


useEffect(()=>{
  setData([]);
  setToken(null);
  setPage(1);
},[query])

   
  return (
    <div className='p-4 sm:p6 md:p-10 h-[93vh] overflow-y-auto'>
        <h2 className='text-xl mb-5'>
          <span className='font-bold m-2' > {query} </span>
          <span> İçin sonuçlar </span>
        </h2>
        {isLoading && <yükleme/>}
        {error && <Error msg={error} />}
        
        <div className='flex flex-col gap-5 justify-center'>
          {data.map((item , key)=> <VideoCards key={key} item ={item} isRow={true} />)}
        </div>

        <div className='flex justify-center my-10'>

          <button onClick={()=>setPage(page + 1)}

            className='bg-secondary py-2 px-5 rounded-md hover:bg-zinc-800 transition' >Daha fazla</button>
        </div>

    </div>
  )
}

export default Result
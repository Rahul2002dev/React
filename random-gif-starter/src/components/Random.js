import axios from 'axios';
import React, { useEffect, useState } from 'react'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
function Random() {
    const [gif,setgif] = useState('');


    async function fetchData(){
        
            const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
            const {data} = await axios.get(url);
            const imageSource = data.data.images.downsized_large.url;
            setgif(imageSource);
        
    }

    useEffect (() => {
        fetchData();
    },[])
    function clickhandler(){
        fetchData();
    }
  return (
    <div className='w-1/2 h-[450px] bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='text-2xl underline uppercase font-bold'>A Random gif</h1>
        <img src={gif} width="450"/>
        <button onClick={clickhandler} className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg'>
            Generate
        </button>
    </div>
  )
}

export default Random
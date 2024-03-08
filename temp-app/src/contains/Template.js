import React, { useState } from "react";
import { useEffect } from "react";
function Template(props){
    const data = props.data;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [Data, setData] = useState({ name: '', tought: '' });

    useEffect(() => {
        const currentItem = data[currentIndex];
        setData(currentItem);
    }, [data, currentIndex]);

    function righthandler() {
        
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Object.keys(data).length);
    }

    function lefthandler() {
        
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? Object.keys(data).length - 1 : prevIndex - 1
        );
    }

    return(
             <div className="flex flex-col items-center justify-between bg-blue-500 w-[40%] h-[300px]">
                <h2>{Data.name}</h2>
                <div>{Data.tought}</div>
                <div className="flex items-end justify-end space-x-20">
                    <button className="rounded-sm bg-green-500" onClick={lefthandler} >
                        left
                    </button>
                    <button className="rounded-sm bg-red-500" onClick={righthandler}>
                        right
                    </button>
                </div>
            </div>
       
    )
}

export default Template;
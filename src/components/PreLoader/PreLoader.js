import React,{ useState, useEffect } from 'react'
import { HomePage } from '../../pages/HomePage';
import './PreLoader.css'




export const PreLoader = () => {
    var Spinner = require('react-spinkit');

    const [done, setDone] = useState(undefined);

    useEffect(()=>{
        setTimeout(() => {
            setDone(true);
            
        }, 3000);
    },[]);
  return (
    <div>
        {
            !done ? ( <Spinner className="loading" name="ball-scale-multiple" color="red"/>

            ) : (
                <HomePage/>
            )}
        
    </div>
  )
}

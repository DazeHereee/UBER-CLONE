import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import {useGSAP} from '@gsap/react';
import { gsap } from "gsap";

const CaptainRiding = () => {
    const [finishRidePanel, setFinishRidePanel] = useState(false);
    const finishRidePanelRef = useRef(null);

    useGSAP(function (){
        if(finishRidePanel){
          gsap.to(finishRidePanelRef.current,{
            translateY:'0%',
          })
        }else{
          gsap.to(finishRidePanelRef.current,{
            translateY:'100%',
          })
        }
      },[finishRidePanel])

  return (
<div className='h-screen relative'>
      <div className='fixed p-3 top-0 flex items-center justify-between w-full'>
        <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="logo-png" />
        <Link to='/captain-home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full '>
            <i className='text-lg font-bold ri-logout-box-r-line'></i>
        </Link>
      </div>
      <div className='h-4/5'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="map-image" />
      </div>
      <div className='h-1/5 p-6 bg-yellow-400 flex items-center realtive justify-between relative' onClick={()=>{
        setFinishRidePanel(true);
      }}>
      <h5 className='p-1 text-center w-[90%] absolute top-0' onClick={()=>{
        
    }} ><i className="text-3xl text-gray-800 ri-arrow-up-wide-line"></i></h5>
            <h4 className='text-xl font-semibold'>4 KM away</h4>
            <button className='w-full mt-5 flex justify-center  bg-green-600 font-semibold p-3 rounded-lg text-white'>Complete Ride</button>
      </div>
      <div ref={finishRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white py-10 px-3 pt-10'>
          <FinishRide setFinishRidePanel={setFinishRidePanel}/>
        </div>
    </div>
  )
}

export default CaptainRiding

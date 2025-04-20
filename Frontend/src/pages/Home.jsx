import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react';
import { gsap } from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const vehiclePanelRef = useRef(null)
  const panelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)
  const [waitingForDriver, setWaitingForDriver] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
  }

  useGSAP(function (){
    if(panelOpen){
      gsap.to(panelRef.current,{
        height:'70%',
        padding:24,
      })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }else{
      gsap.to(panelRef.current,{
        height:'0%',
        padding:0,
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  },[panelOpen])

  useGSAP(function (){
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        translateY:'0%',
      })
    }else{
      gsap.to(vehiclePanelRef.current,{
        translateY:'100%',
      })
    }
  },[vehiclePanel])

  useGSAP(function (){
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current,{
        translateY:'0%',
      })
    }else{
      gsap.to(confirmRidePanelRef.current,{
        translateY:'100%',
      })
    }
  },[confirmRidePanel])

  useGSAP(function (){
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
        translateY:'0%',
      })
    }else{
      gsap.to(vehicleFoundRef.current,{
        translateY:'100%',
      })
    }
  },[vehicleFound])

  useGSAP(function (){
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current,{
        translateY:'0%',
      })
    }else{
      gsap.to(waitingForDriverRef.current,{
        translateY:'100%',
      })
    }
  },[waitingForDriver])

  return (
    <div className='relative h-screen overflow-hidden'>
        <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="logo"/>
        <div className='h-screen w-screen '>
      <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="map-image" />
        </div>
        <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
      <div className='h-[30%] bg-white p-6 relative'>
        <h5 ref={panelCloseRef} onClick={()=>{
          setPanelOpen(false)
        }} className='absolute top-6 right-6 text-2xl opacity-0'>
        <i className="ri-arrow-down-wide-line"></i>
        </h5>
      <h4 className='text-3xl font-semibold'>Find a trip</h4>
      <form onSubmit={(e)=> {
        submitHandler(e)
        }} className='flex flex-col'>
        <div className='line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full'></div>
        <input type="text"
        onClick={() => setPanelOpen(true)}
        value={pickup}
        onChange={(e) => setPickup(e.target.value)}
        placeholder='Add a pick-up location'
        className='bg-[#eeeeee] rounded-lg px-12 py-2 text-base w-full mt-5' 
        />
        <input type="text"
        onClick={() => setPanelOpen(true)}
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder='Enter your destination'
        className='bg-[#eeeeee] rounded-lg px-12 py-2 text-base w-full mt-3'
        />
      </form>
      </div>
      <div ref={panelRef} className='h-0 bg-white'>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel}/>
      </div>
        </div>
        <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 bg-white py-10 px-3 translate-y-full pt-10'>
            <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
        </div>
        <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 bg-white py-10 px-3 translate-y-full pt-10'>
            <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
        </div>
        <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 bg-white py-10 px-3 translate-y-full pt-10'>
            <LookingForDriver setVehicleFound={setVehicleFound}/>
        </div>
        <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0 bg-white py-10 px-3 translate-y-full pt-10'>
            <WaitingForDriver waitingForDriver={waitingForDriver}/>
        </div>
    </div>
  )
}

export default Home

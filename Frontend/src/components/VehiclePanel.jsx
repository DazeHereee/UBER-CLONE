import React from 'react'
import 'remixicon/fonts/remixicon.css'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
        props.setVehiclePanel(false)
      }} ><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
      <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
        <div onClick={()=>{
          props.setConfirmRidePanel(true)
        }} className='w-full border-2 mb-2 active:border-black rounded-xl flex items-center justify-between p-3'>
          <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png" alt="car-logo" />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill">4</i></span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-medium text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹193.20</h2>
        </div>
        <div onClick={()=>{
          props.setConfirmRidePanel(true)
        }} className='w-full border-2 mb-2 active:border-black rounded-xl flex items-center justify-between p-3'>
          <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1698944322/assets/92/00189a-71c0-4f6d-a9de-1b6a85239079/original/UberMoto-India-Orange.png" alt="bike-logo" />
          <div className='-ml-2 w-1/2'>
            <h4 className='font-medium text-base'>Moto<span><i className="ri-user-3-fill">1</i></span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-medium text-xs text-gray-600'>Affordable motorcycle rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹65.17</h2>
        </div>
        <div onClick={()=>{
          props.setConfirmRidePanel(true)
        }} className='w-full border-2 mb-2 active:border-black rounded-xl flex items-center justify-between p-3'>
          <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="auto-logo" />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberAuto<span><i className="ri-user-3-fill">3</i></span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-medium text-xs text-gray-600'>Affordable auto rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹118.86</h2>
        </div>
    </div>
  )
}

export default VehiclePanel

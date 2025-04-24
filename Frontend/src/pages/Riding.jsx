import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
      <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full '>
      <i className='text-lg font-bold ri-home-5-line'></i>
      </Link>
      <div className='h-1/2 p-4'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="map-image" />
      </div>
      <div className='h-1/2'>
        <div className='flex items-center justify-between'>
          <img className='h-25' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png" alt="car-logo" />
        <div className='text-rigth'>
        <h2 className='text-lf font-medium text-right pr-2 text-gray-600'>Kuldeep</h2>
          <h4 className='text-xl font-semibold -mt-1 -md-1'>MP04 AB 1234</h4>
          <p className='text-sm text-gray-600'>Maruti Suzuki Wagnor</p>
        </div>
        </div>
        <div className='flex gap-2 justify-between items-center flex-col'>
          <div className='w-full mt-5'>
             <div className='flex items-center gap-5 p-3 border-b-2 '>
             <i className='ri-square-fill text-lg'></i>
                <div>
                  <h3 className='text-lg font-medium'>562/11-A</h3>
                  <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
                </div>
             </div>
             <div className='flex items-center gap-5 p-3'>
             <i className='ri-currency-line text-lg'></i>
                <div>
                  <h3 className='text-lg font-medium'>₹193.20</h3>
                  <p className='text-sm -mt-1 text-gray-600'>Cash</p>
                </div>
             </div>
          </div>
        </div>
        <button onClick={()=>{
            props.setVehicleFound(true)
            props.setConfirmRidePanel(false)
          }} className='w-full mt-5 bg-green-600 font-semibold p-2 rounded-lg text-white'>Make a Payment</button>
      </div>
    </div>
  )
}

export default Riding

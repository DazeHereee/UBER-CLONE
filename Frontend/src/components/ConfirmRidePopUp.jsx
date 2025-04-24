import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ConfirmRidePopUp = (props) => {

  const [otp, setOtp] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
        props.setRidePopUpPanel(false);
        }} ><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Confirm this ride to start</h3>
        <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
            <div className='flex items-center gap-3'>
                <img className='h-12 rounded-full object-cover w-12' src="https://pbs.twimg.com/media/BcINeMVCIAABeWd.jpg:large" alt="person-png" />
                <h2 className='text-lg font-medium'>Harsh Patel</h2>
            </div>
            <h5 className='text-lg font-semibold'>2.2 KM</h5>
        </div>
        <div className='flex gap-2 justify-between items-center flex-col'>
          <div className='w-full'>
             <div className='flex items-center gap-5  p-3 border-b-2 '>
                <i className='ri-map-pin-2-fill text-lg'></i>
                <div>
                  <h3 className='text-lg font-medium'>562/11-A</h3>
                  <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
                </div>
             </div>
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
          <div className='mt-6 w-full'>
            <form onSubmit={(e)=>{
              submitHandler(e)
            }}>
              <input 
              type="text"
              onChange={(e) => setOtp(e.target.value)}
              value={otp}
              placeholder='Enter your OTP'
              className='bg-[#eeeeee] font-mono rounded-lg px-6 py-4 text-lg w-full mt-3' 
              />
            <Link to='/captain-riding' className='w-full text-lg mt-5 flex justify-center  bg-green-600 font-semibold p-3 rounded-lg text-white'>Confirm</Link>
            <button onClick={()=>{
            props.setConfirmRidePopUpPanel(false);
            }} className='w-full mt-2 bg-red-600 text-lg font-semibold p-3 rounded-lg text-white'>Cancel</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default ConfirmRidePopUp

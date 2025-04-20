import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CaptainSignup = () => {
  const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');

    const {captain, setCaptain} = React.useContext(CaptainDataContext);
  
    const submitHandler = async(e) => {
      e.preventDefault();
      const captainData = {
        fullname:{
          firstname: firstName,
          lastname: lastName,
        },
        email: email,
        password: password,
        vehicle:{
          color: vehicleColor,
          plate: vehiclePlate,
          capacity: vehicleCapacity,
          vehicleType: vehicleType,
        }
      }
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)
      if(response.status === 201){
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
      }
      setEmail('');
      setPassword('');
      setFirstName('');
      setPassword('');
      setVehicleColor('');
      setVehiclePlate('');
      setVehicleCapacity('');
      setVehicleType('');
    }
  return (
    <div>
      <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
          <img className='w-16 mb-2' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="logo" />
          <form onSubmit={(e) => {
            submitHandler(e)
          }}
            className='bg-white py-7 px-4'>
            <h3 className='text-lg font-medium mb-2'>What's our Captain's name</h3>
            <div className='flex gap-4 mb-3'>
              <input
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className='bg-[#eeeeee] w-1/2 mb-3 rounded px-4 py-2 text-lg placeholder:text-base'
                placeholder='First Name'
                type="text"
              />
              <input
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className='bg-[#eeeeee] w-1/2 mb-3 rounded px-4 py-2 text-lg placeholder:text-base'
                placeholder='Last Name'
                type="text"
              />
            </div>
            <h3 className='text-lg font-medium mb-2'>What's our Captain's email</h3>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
              placeholder='email@example.com'
            />
            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
              placeholder='password'
            />
            <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
            <div className='flex gap-4 mb-7'>
            <input
              type="text"
              required
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              className='bg-[#eeeeee] mb-3 rounded px-4 py-2 w-1/2 text-lg placeholder:text-base'
              placeholder='Vehicle Color'
            />
            <input
              type="text"
              required
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              className='bg-[#eeeeee] mb-3 rounded px-4 py-2 w-1/2 text-lg placeholder:text-base'
              placeholder='Vehicle Plate Number'
            />
            </div>
            <div className='flex gap-4 mb-7'>
            <input
              type="number"
              required
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              className='bg-[#eeeeee] mb-3 rounded px-4 py-2 w-1/2 text-lg placeholder:text-base'
              placeholder='Vehicle Capacity'
            />
            <select
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className='bg-[#eeeeee] mb-3 rounded px-4 py-2 w-1/2 text-lg placeholder:text-base'
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
            </div>
            <button
              className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
              Create Captain Account</button>
          </form>
          <p className='text-center'>Already have a account? <Link to='/captain-login' className='text-blue-600 '>Login in here</Link></p>
        </div>
        <div>
          <p className='text-[10px] leading-tight'>
            This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" className='text-blue-600'>Privacy Policy</a> and <a href="https://policies.google.com/terms" className='text-blue-600'>Terms of Service</a> apply.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CaptainSignup

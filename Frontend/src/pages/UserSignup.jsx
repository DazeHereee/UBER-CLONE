import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      username:{
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password
    })
    setEmail('');
    setPassword('');
    setFirstName('');
    setPassword('');
  }
  return (
    <div>
          <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="logo"/>
      <form onSubmit={(e)=> {
        submitHandler(e)
        }} 
        className='bg-white py-7 px-4'>
        <h3 className='text-lg font-medium mb-2'>What's your name</h3>
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
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
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
        <button
        className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
          Login</button>
      </form>
      <p className='text-center'>Already have a account? <Link to='/login' className='text-blue-600 '>Login in here</Link></p>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>
          By proceeding, you consent to get calls, WhatsApp or SMS
          messages, including by automated means, from Uber and its
          affiliates at the number you provided.
        </p>
      </div>
    </div>
    </div>
  )
}

export default UserSignup

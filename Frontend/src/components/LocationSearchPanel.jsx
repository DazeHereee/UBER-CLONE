import React from 'react'

const LocationSearchPanel = (props) => {

  //sample array for location
  const locations = [
    'Near Civil Hospital Tauru',
    'Near Civil Hospital Tauru',
    'Near Civil Hospital Tauru',
    'Near Civil Hospital Tauru',
  ]
  return (
    <div>
      {/* this is just a sample data */}
      {
        locations.map(function(elem,idx){
          return (
            <div key={idx} onClick={()=>{
              props.setVehiclePanel(true)
              props.setPanelOpen(false)
            }} 
            className='flex gap-4 border-2 p-3 rounded-xl border-gray-100 active:border-black items-center my-4 justify-start'>
              <h2 className='bg-[#eee] h-8 w-12 gap rounded-full flex items-center justify-center'><i className="ri-map-pin-fill"></i></h2>
              <h4 className='font-medium'>{elem}</h4>
            </div>
          )
        })
      }

    </div>
  )
}

export default LocationSearchPanel

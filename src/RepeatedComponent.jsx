import React from 'react'

function RepeatedComponent() {
  return (
    <div className='w-72 h-72 rounded shadow-md mr-64 mb-12'>
      <div className="w-full bg-gray-400 h-1/2 rounded-t"></div>
       <p className="font-bold ml-3 mt-3 mb-2">Name</p>
       <p className='ml-3  mb-2'>HTML COMPONENT NAME</p>
       <p className="font-bold ml-3 mt-3 mb-2">Occurences</p>
       <p className='ml-3  mb-2'>5</p>
    </div>
  )
}

export default RepeatedComponent
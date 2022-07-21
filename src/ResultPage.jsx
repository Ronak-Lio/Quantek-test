import React from 'react'
import RepeatedComponent from './RepeatedComponent'
import { useNavigate } from 'react-router-dom'

function ResultPage() {
    const navigate  = useNavigate();
    
  return (
    <div className='p-10'>
       <div className='w-full flex justify-between'>
          <p className="text-3xl font-bold">
            Results
          </p>
          <button className='mt-3 bg-amber-400 p-3 rounded-sm border-gray-500 border-2'
          onClick = {() => navigate('/')}>Run Again</button>
       </div>
       <div className='w-screen mt-8'>
       <div className="w-11/12 flex flex-wrap justify-between ml-auto ">
           <RepeatedComponent/>
           <RepeatedComponent/>
           <RepeatedComponent/>
           <RepeatedComponent/>
       </div>
       </div>
    </div>
  )
}

export default ResultPage
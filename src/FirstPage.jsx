import React from 'react'
import { useNavigate } from 'react-router-dom'

function FirstPage() {
  const navigate  = useNavigate();

  return (
    <div className='p-10 h-full'>
      <p className='text-3xl font-bold mb-6'>Find Similar Nodes</p>
     <p className='font-bold'>Paste HTML in textbox below</p>
     <div className='w-full h-full flex flex-col items-center mt-4'>
      <textarea name="" id="" cols="30" rows="10"
      className=' w-full h-4/6 resize-none border-black border-2 p-2 '
      ></textarea>
      <button className='mt-3 bg-amber-400 p-3 rounded-sm border-gray-500 border-2'
       onClick = {() => navigate('/result')}
      >Process Code</button>
     </div>
    </div>
  )
}
 
export default FirstPage
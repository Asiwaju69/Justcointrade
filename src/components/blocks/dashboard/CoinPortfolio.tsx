import React from 'react'

const CoinPortfolio:React.FC = () => {
  return (
    <div className='grid grid-cols-[1fr,0.3fr] max-lg:grid-cols-[1fr,0.4fr] max-md:grid-cols-1 gap-8 h-[30vh]'>
      {/* first section, move to a component */}
      <div className='bg-white rounded-lg p-8 grid grid-cols-[1fr,0.4fr] '>
        <div className='flex gap-4'>
          {/* wallet icon */}
          <>
          <svg className="w-12 h-12 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M7 6c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z" clip-rule="evenodd"/>
    <path fill-rule="evenodd" d="M2 11c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clip-rule="evenodd"/>
    <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
  </svg>
  
          </>
          <div>
          <span className='text-[#5D636A] text-base font-semibold'>Account Balance </span>
          <h2 style={{fontFamily:"Trebuchet MS"}} className='font-bold text-2xl'>USD: 20000</h2>
          </div>
        </div>
        <div>djdfk</div>
      </div>

{/* second section, move to a component */}
<div className='flex flex-col gap-6'>
  <span >Info</span>
<div style={{ background: "linear-gradient(135deg,#c0cffe 0,#f3dff4 56.25%,#f9d8e5 96.35%)" }} className='h-full rounded-lg p-4'>jkdjkfjk</div>

</div>
    </div>
  )
}

export default CoinPortfolio
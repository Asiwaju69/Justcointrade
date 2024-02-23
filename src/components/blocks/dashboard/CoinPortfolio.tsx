import Dashboard_Button from '@/components/props/Dashboard_Button';
import React from 'react'
import { FcCurrencyExchange } from "react-icons/fc";
import { MdUpgrade } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa6";
import { IoCardOutline } from "react-icons/io5";
import { BiDonateHeart } from "react-icons/bi";

const CoinPortfolio:React.FC = () => {
  return (
    <section className='grid grid-cols-[1fr,0.3fr] max-lg:grid-cols-[1fr,0.4fr] max-md:grid-cols-1 gap-8 min-h-[30vh]'>
      {/* first section, move to a component */}
      <div className='bg-white rounded-lg p-8  flex flex-col gap-10 justify-between '>
      <div className='grid grid-cols-[1fr,0.4fr] max-md:grid-cols-1 gap-8 '>
      <div className='flex gap-4'>
          {/* wallet icon */}
          <>
          <svg className="w-12 h-12 text-[var(--background)] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M7 6c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z" clip-rule="evenodd"/>
    <path fill-rule="evenodd" d="M2 11c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clip-rule="evenodd"/>
    <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
  </svg>
  
          </>
          <div>
          <span className='text-[#5D636A] text-base max-lg:text-[14px] font-semibold'>Account Balance </span>
          <h2 style={{fontFamily:"Trebuchet MS"}} className='font-bold text-2xl max-lg:text-xl'>USD: 20000</h2>
          </div>
        </div>

        {/*  deposit and withdrawal section */}
        <div className='flex items-end gap-3'>
        <button
    className="flex items-center gap-2 px-4 h-10 text-sm max-lg:text-[12px] text-[var(--background)] duration-150 bg-indigo-50 rounded-lg hover:bg-indigo-100 active:bg-indigo-200"
>
<svg className="w-5 h-5  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/>
  </svg>
    Deposit
</button>
{/* withdraw */}
<button
    className="flex items-center gap-2 px-4 h-10 text-sm max-lg:text-[12px] text-[var(--background)] duration-150 bg-indigo-50 rounded-lg hover:bg-indigo-100 active:bg-indigo-200"
>
<svg className="w-5 h-5  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2M12 4v12m0-12 4 4m-4-4L8 8"/>
  </svg>
    Withdraw
</button>
        </div>
      </div>

      {/* second part with quick actions */}
      <div className='my-3'>
        <h2 className='text-[#5D636A] font-semibold text-[17px] '> Quick Actions</h2>
        <div className='w-full mt-6 flex gap-4 overflow-x-scroll '>
        
        <Dashboard_Button onClick={()=>{}} title='Current plan' icon={<FcCurrencyExchange/>}/>
        <Dashboard_Button onClick={()=>{}} title='Upgrade plan' icon={<MdUpgrade/>}/>
        <Dashboard_Button onClick={()=>{}} title='Buy assets' icon={<FaLayerGroup/>}/>
        <Dashboard_Button onClick={()=>{}} title='Your cards' icon={<IoCardOutline/>}/>
        <Dashboard_Button onClick={()=>{}} title='Donate to a cause' icon={<BiDonateHeart/>}/>
    
        </div>
       
      </div>
      </div>

{/* second section, move to a component */}
<div className='flex flex-col gap-6'>
  <span >Info</span>
<div style={{ background: "linear-gradient(135deg,#c0cffe 0,#f3dff4 56.25%,#f9d8e5 96.35%)" }} className='h-full rounded-lg p-4'>jkdjkfjk</div>

</div>
    </section>
  )
}

export default CoinPortfolio
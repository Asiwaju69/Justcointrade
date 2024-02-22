import React from 'react'
import Logo from '../Logo'
import { TbLogout2 } from "react-icons/tb";

const Dashboard_Header:React.FC = () => {
  return (
    <header className='w-full h-[8vh] bg-white grid place-items-center '>
      <div className='p-2 w-[80%] max-xl:w-[85%] max-lg:w-[95%] flex items-center justify-between'>
        
        <div>
          <Logo/>
        </div>

       
          <section className='flex items-center gap-8 max-md:gap-3'>
            {/* profile */}
            <div className='bg-[#EBEBEB] max-md:hidden cursor-pointer hover:shadow-sm ease-in transition-all duration-200 h-full p-[10px] rounded-md flex items-center gap-3'>
              {/* circle */}
              <div className='uppercase w-8 h-8 grid place-items-center p-1 ring-2 ring-gray-400 text-white bg-[var(--background)] rounded-full'>
                IS
              </div>

              <div className='flex items-center gap-5 text-gray-600 '>
              <span className='text-sm font-medium'>Isaac Etor</span>

              {/* icon */}
              <div>
              <svg className="w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
  </svg>
              </div>
              </div>

            </div>

{/* sign out */}
 {/* circle */}
 <div className='cursor-pointer uppercase w-8 h-8 grid place-items-center p-1 ring-2 ring-gray-400  md:hidden tracking-wider  text-white bg-[var(--background)] rounded-full'>
                IS
              </div>
            <div className='text-2xl max-md:text-xl text-gray-600 cursor-pointer'>
              <TbLogout2/>
            </div>
          </section>
        
      </div>
    </header>
  )
}

export default Dashboard_Header
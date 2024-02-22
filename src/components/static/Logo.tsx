import React from 'react'

const Logo:React.FC = () => {
  return (
    <div>
        <a href="/">
         {/* <img src="https://floatui.com/logo.svg" width={150} className="mx-auto" /> */}
         <h2 className="text-[var(--background)] sm:mx-auto tracking-tighter font-black max-md:text-xl text-2xl">JustCoinTrades</h2>
        </a>

    </div>
  )
}

export default Logo
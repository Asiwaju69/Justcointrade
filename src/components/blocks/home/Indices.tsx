import React from 'react'

const Indices:React.FC = () => {

    
        return (
            <section className="relative py-14">
                <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
                  
                    <div className="mt-12">
                        <div className="grid items-center ">
                        <div  className="bg-white rounded-xl border shadow-md">
                                     
                                            <div className="flex items-center p-4 h-[70vh]">
                                            <iframe className='w-full h-full border-0'  src="https://www.tradingview-widget.com/embed-widget/forex-cross-rates/" ></iframe>
                                            </div>
                                        
                                    </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 w-full h-[370px] bg-gray-900" ></div>
            </section>
        )
    }

export default Indices
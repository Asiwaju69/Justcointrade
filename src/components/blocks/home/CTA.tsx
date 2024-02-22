import React from 'react'

const CTA :React.FC= () => {

        return (
            <section className="py-28 relative">
                <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
                    <div className="max-w-xl md:mx-auto">
                        <p className="text-white text-3xl font-semibold sm:text-4xl">
                            Build the future with us
                        </p>
                        <p className="text-blue-100 mt-3">
                        We want you to not just Trade in the world’s financial markets, but also with a simple and user friendly online platform.
                        </p>
                    </div>
                    <div className="mt-4">
                        <a href="register" className="inline-block py-2 px-4 text-gray-800 font-medium bg-white duration-150 hover:bg-gray-100 active:bg-gray-200 rounded-full">
                            Get started now
                        </a>
                    </div>
                </div>
                <div className="absolute top-0 w-full h-full" style={{ background: "linear-gradient(98.7deg,#5240f9 19.95%,#f3526d 89.51%)" }}></div>
            </section>
        )
    }

export default CTA
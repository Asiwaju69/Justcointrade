import React from 'react'

const HappyCustomers:React.FC = () => {


        const stats = [
            {
                data: "255+",
                title: "Expert Consultants"
            },
            {
                data: "100K+",
                title: "Trusted Clients"
            },
            {
                data: "20M+",
                title: "Total revenue"
            },
        ]
    
        return (
            <section className="my-5 py-28 bg-gray-50 text-gray-800">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="text-3xl font-semibold sm:text-4xl">
                            Our customers are always happy
                        </h3>
                        <p className="mt-3 text-gray-700">
                            Checkout our statistics, the numbers don't lie.
                        </p>
                    </div>
                    <div className="mt-12">
                        <ul className="flex flex-col gap-4 items-center justify-center sm:flex-row">
                            {
                                stats.map((item, idx) => (
                                    <li key={idx}  style={{ background: "linear-gradient(98.7deg,#5240f9 19.95%,#f3526d 89.51%)" }}  className="w-full text-center  px-12 py-4 rounded-lg sm:w-auto">
                                        <h4 className="text-4xl text-white font-semibold">{item.data}</h4>
                                        <p className="mt-3 text-gray-300 font-medium">{item.title}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
        )
    }

export default HappyCustomers
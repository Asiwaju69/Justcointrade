import React, { useRef, useState } from 'react'

import Logo from '@/components/static/Logo'

const Verification:React.FC = () => {

        document.title="Verification - JustCoinTrade"

        const [otp, setOtp] = useState(['', '', '', '', '', '']);
        const inputRefs = useRef([]);
    
        // Function to handle changes in the input fields
        const handleChange = (index:any, event:any) => {
            const value = event.target.value;
            // Update the OTP array with the new value
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
    
            // Move focus to the next input field if available
            if (value !== '' && index < otp.length - 1) {
                inputRefs?.current[index + 1].focus();
            }
    
            // If the last input is filled, submit the form
            if (index === otp.length - 1 && value !== '') {
                handleSubmit();
            }
        };
    
        // Function to handle form submission
        const handleSubmit = () => {
            const otpValue = otp.join('');
            console.log('OTP submitted:', otpValue);
            // You can perform your submission logic here
        };
    
            return (
                <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
                    <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                        <div className="text-center">
                            <Logo/>
                            <div className="mt-5 space-y-2">
                                <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Enter verification code</h3>

                            </div>
                        </div>
                        <div className="bg-white shadow p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg">
                          
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="space-y-5"
                            >
                                     <div className='flex gap-4'>
                                     {otp.map((digit, index) => (
                
                <div className="w-16 h-16 ">
                <input key={index} maxLength={1} value={digit} ref={(input) => (inputRefs.current[index] = input)}onChange={(e) => handleChange(index, e)}  className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" />
              </div>
            ))}
                                     </div>
                        
                                <button style={{backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"}}
                                    className="w-full px-4 py-3 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                                >
                                    Reset Password
                                </button>
                            </form>
                        </div>

                        <div className="text-center">
                    <a href="/">Back Home</a>
                        </div>
                    
                        <div className="text-center">
                    <p>© {new Date().getFullYear()} JustCoinTrades.</p>
                        </div>
                
                    </div>
                </main>
            )
        }
    



export default Verification


import React, { useRef, useState } from 'react'

import Logo from '@/components/static/Logo'

const Verification:React.FC = () => {

        document.title="Verification - JustCoinTrade"

        const [otp, setOtp] = useState(['', '', '', '', '', '']);
        const inputRefs = useRef<HTMLInputElement[]>([]);
    
        const handleChange = (index: number, event: any) => {
            const value = event.target.value;
    
            // Handle backspace
            if (event.nativeEvent.inputType === 'deleteContentBackward' && index > 0) {
                inputRefs.current[index - 1].focus();
            }
    
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
    
            if (value !== '' && index < otp.length - 1) {
                inputRefs.current[index + 1].focus();
            }
    
            if (index === otp.length - 1 && value !== '') {
                handleSubmit("");
            }
        };
    
        const handleSubmit = (e:any) => {
            const otpValue = otp.join('');
            e.preventDefault() 
            console.log('OTP submitted:', otpValue);
            // Perform submission logic
        };
    
            return (
                <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
                    <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                        <div className="text-center">
                            <Logo/>
                            <div className="mt-5 space-y-2">
                                <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Enter OTP</h3>
                                <p>Please check your email for your OTP. if you can't find it in your mail, please check your spam.</p>

                            </div>
                        </div>
                        <div className="bg-white shadow p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg">
                          
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-5"
                            >
                                     <div className='flex gap-4'>
                                     {otp.map((digit, index) => (
                
                <div className="w-16 h-16 ">
                <input key={index} maxLength={1} value={digit} ref={(input) => (inputRefs.current[index] = input as HTMLInputElement)} onChange={(e) => handleChange(index, e)}  className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-[var(--background)] " type="text" />
              </div>
            ))}
                                     </div>
                        
                                <button  style={{ background: "linear-gradient(98.7deg,#5240f9 19.95%,#f3526d 89.51%)" }}
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


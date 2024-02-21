import Logo from '@/components/static/Logo'
import React from 'react'

const Login:React.FC = () => {

    document.title="Login - JustCoinTrade"

        return (
            <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
                <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                    <div className="text-center">
                        <Logo/>
                        <div className="mt-5 space-y-2">
                            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                            <p className="">Don't have an account? <a href="register" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</a></p>
                        </div>
                    </div>
                    <div className="bg-white shadow p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg">
                      
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="space-y-5"
                        >
                                       <div>
                        <label
  htmlFor="UserEmail"
  className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
>
  <input
    type="email"
    required
    id="UserEmail"
    placeholder="Email"
    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
  />

  <span
    className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
  >
    Email
  </span>
</label>
                        </div>
                        <div>
                        <label
  htmlFor="Password"
  className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
>
  <input
    type="Password"
    required
    id="Password"
    placeholder="Password"
    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
  />

  <span
    className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
  >
    Password
  </span>
</label>
                        </div>
                            <button style={{backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"}}
                                className="w-full px-4 py-3 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                            >
                                Sign in
                            </button>
                        </form>
                    </div>
                    <div className="text-center">
                        <a href="forget-password" className="hover:text-indigo-600">Forgot password?</a>
                    </div>
                    <div className="text-center">
                <p>© {new Date().getFullYear()} JustCoinTrades.</p>
                    </div>
            
                </div>
            </main>
        )
    }

export default Login
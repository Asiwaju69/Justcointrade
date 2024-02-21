import Logo from '@/components/static/Logo'
import React from 'react'

const Register:React.FC = () => {
    document.title="Create account - JustCoinTrade"

    return (
        <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
            <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                <div className="text-center">
                   <Logo/>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Create an account</h3>
                        <p className="">Already have an account? <a href="login" className="font-medium text-indigo-600 hover:text-indigo-500">Log in</a></p>
                    </div>
                </div>
                <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-5"

                    >
                        <div>
                        <label
  htmlFor="Full Name"
  className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
>
  <input
    type="text"
    required
    id="Full Name"
    placeholder="Full Name"
    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
  />

  <span
    className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
  >
    Full Name
  </span>
</label>
                        </div>
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


<div className="flex items-center py-4 mt-2 px-2">
    <input required type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="link-checkbox" className="ms-2 text-sm font-medium text-gray-900 ">I agree with the <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
</div>

                        </div>
                        <button style={{backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"}}
                            className="w-full px-4 py-3 text-white font-medium  hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                        >
                            Create account
                        </button>
                    </form>
                 
                </div>
                <div className="text-center">
                <p>© {new Date().getFullYear()} JustCoinTrades.</p>
                    </div>
            </div>
        </main>
    )
}


export default Register
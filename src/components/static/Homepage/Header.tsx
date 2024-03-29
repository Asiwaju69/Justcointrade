import { FC, useState, useEffect } from 'react';

const Header:FC = () => {
  const [state, setState] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          const isScrolled = window.scrollY > 100;
          setScroll(isScrolled);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  
      // Replace javascript:void(0) paths with your paths
      const navigation = [
          { title: "Features", path: "javascript:void(0)" },
          { title: "Why choose us", path: "javascript:void(0)" },
          { title: "Get started ", path: "javascript:void(0)" },
          { title: "Pricing", path: "javascript:void(0)" },
          { title: "Pricing", path: "javascript:void(0)" }
      ]
  
 
  
      return (
          <nav className={` ${scroll ? "border-b" : null} bg-white  transition-all ease-in-out py-2 md:text-sm ${state ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0" : ""}`}>
              <div className="gap-x-14 items-center  mx-auto px-4 md:flex md:px-16">
                  <div className="flex items-center justify-between py-5 md:block">
                      <a href="javascript:void(0)">
                         <h2 className='text-[var(--background)] font-extrabold text-xl tracking-[-0.10em] '>JustCoinTrades</h2>
                      </a>
                      <div className="md:hidden">
                          <button className="menu-btn text-gray-500 hover:text-gray-800"
                              onClick={() => setState(!state)}
                          >
                              {
                                  state ? (
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                      </svg>
                                  ) : (
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                      </svg>
                                  )
                              }
                          </button>
                      </div>
                  </div>
                  <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                      <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                          {
                              navigation.map((item, idx) => {
                                  return (
                                      <li key={idx} className="text-gray-700 hover:text-gray-900">
                                          <a href={item.path} className="block">
                                              {item.title}
                                          </a>
                                      </li>
                                  )
                              })
                          }
                      </ul>
                      <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
                          <a href="/login" className="block text-gray-700 hover:text-gray-900">
                              Log in
                          </a>
                          <a  style={{ background: "linear-gradient(98.7deg,#5240f9 19.95%,#f3526d 89.51%)" }} href="register" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium  hover:bg-[var(--background)] hover:text-white rounded-full md:inline-flex">
                              Create account
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                              </svg>
                          </a>
                      </div>
                  </div>
              </div>

                  {/* back to top */}
{scroll &&     <a href='#'    className="fixed transition-all ease-in duration-3000 bottom-20 right-10 max-md:right-5 z-20 rounded-full bg-gray-100 p-3 hover:border-[var(--background)] hover:border justify-center items-center shadow-md">
        <i className="text-3xl text-gray-800 grid place-items-center"> 
        <svg className="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v13m0-13 4 4m-4-4-4 4"/>
  </svg>
        </i>
    </a>}
    {/* end back to top */}
          </nav>
      )
  
}

export default Header
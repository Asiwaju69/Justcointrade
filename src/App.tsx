import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { appRoutes } from './routes'

const App:React.FC = () => {
  return (
  <>
    {/* <RecoilRoot> */}
        <RouterProvider router={appRoutes} />
      {/* </RecoilRoot> */}
      </>
  )
}

export default App
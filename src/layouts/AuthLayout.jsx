import { Outlet } from "react-router-dom"

import Logo from '../assets/img/logo.svg'

export default function AuthLayout() {
  return (
    <main className="max-w-4xl m-auto mt-10 md:mt-20 flex flex-col md:flex-row items-center">
      <img 
        src={ Logo }
        alt='imagen logotipo'
        className="max-w-xs"
      />

      <div className="p-10 w-full">
        <Outlet />
      </div>
    </main>
  )
}

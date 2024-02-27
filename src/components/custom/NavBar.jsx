import React from 'react'
import { Button } from '../ui/button'

export default function NavBar() {
  return (
    <>
     <nav className="flex flex-col sm:flex-row items-center justify-between px-16 h-auto sm:h-20 bg-[#080E2D]">
      <div className="flex items-center text-white mb-4 sm:mb-0">
    <span className="font-semibold text-xl tracking-tight">Logo</span>
    </div>
  <div className="flex-grow flex flex-col sm:flex-row items-center justify-between">
    <div className="flex justify-center flex-grow mb-4 sm:mb-0">
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 space-x-0 sm:space-x-4">
        <a href="#responsive-header" className="text-white hover:text-blue">
          Handluj
        </a>
        <a href="#responsive-header" className="text-white hover:text-blue">
          Usługi
        </a>
        <a href="#responsive-header" className="text-white hover:text-black">
          O nas
        </a>
        <a href="#responsive-header" className="text-white hover:text-black">
          Kontakt
        </a>
      </div>
    </div>
    <div className="flex space-x-2">
      <button className="text-sm px-4 py-2 border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white">
        Logowanie
      </button>
      <button className="text-sm px-4 py-2 border bg-black rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white">
        Załóż konto
      </button>
    </div>
  </div>
  </nav>
    </>

  )
}


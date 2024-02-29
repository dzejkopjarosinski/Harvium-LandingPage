import React from 'react'
import { Button } from '../ui/button'

export default function NavBar() {
  return (
    <>
     <nav className="flex flex-col border-b-2 border-[#9747FF] sm:flex-row items-center justify-between px-16 h-auto sm:h-20 bg-[#080E2D]">
      <div className="flex items-center text-white mb-4 sm:mb-0">
    <span className="font-semibold text-xl tracking-tight">Logo</span>
    </div>
  <div className="flex-grow flex flex-col sm:flex-row items-center justify-between">
    <div className="flex justify-center flex-grow mb-4 sm:mb-0">
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 space-x-0 sm:space-x-4">
        <a href="Handluj" className="text-white hover:text-yellow-300">
          Handluj
        </a>
        <a href="Uslugi" className="text-white hover:text-yellow-300">
          Usługi
        </a>
        <a href="O nas" className="text-white hover:text-yellow-300">
          O nas
        </a>
        <a href="Kontakt" className="text-white hover:text-yellow-300">
          Kontakt
        </a>
      </div>
    </div>
    <div className="flex space-x-2">
      <button className="transition ease-in-out duration-200 delay-50 text-sm px-4 py-2 border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white">
        Logowanie
      </button>
      <button className="transition ease-in-out duration-200 delay-50 text-sm px-4 py-2 border bg-black rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white">
        Załóż konto
      </button>
    </div>
  </div>
  </nav>
    </>

  )
}
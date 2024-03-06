import React from 'react'
import NavBar from '../custom/NavBar'
import Footer from '../custom/Footer'

export default function About() {
  return (
    <>
    <NavBar />
    <div className="bg-background-primary h-screen flex justify-center items-center">
        <div className="flex flex-col w-1/2 px-4 text-white ">
            <h2 className='lg:text-4xl text-4xl font-bold items-center gap-6'>O nas</h2>
            <p className='text-xl mt-2 non-italic'>Opis o nas, który wjebiemy dokładnie tutaj</p>
        </div>
        
    </div>
    <Footer />
    </>
  )
}
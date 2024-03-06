import React from 'react';
import CustomForm from '../custom-ui/CustomForm.jsx';



export default function ContactUs() {
  return (
    <div className="bg-background-primary h-screen flex md:flex-row flex-col  justify-evenly">
        <div className="flex flex-col px-4 text-white md:pl-20 pt-[200px]">
            <h2 className='lg:text-4xl text-4xl font-bold items-center gap-6'>Tytuł zachęcający do kontaktu</h2>
            <p className='text-xl mt-2 non-italic'>Opis zachecający do kontaktu</p>
        </div>
        <div className="flex flex-row px-4 text-white justify-center lg:w-[600px] w-auto md:pt-[200px] pt-[150px] mb-[150px] lg:mb-0">
            <CustomForm />
        </div>
        
    </div>
  )
}

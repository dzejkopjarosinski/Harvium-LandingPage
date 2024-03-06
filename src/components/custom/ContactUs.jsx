import React from 'react';
import CustomForm from '../custom-ui/CustomForm.jsx';



export default function ContactUs() {
  return (
    <div className="bg-background-primary h-screen flex justify-center">
        <div className="flex flex-col w-1/2 px-4 text-white pl-20 pt-[200px]">
            <h2 className='lg:text-4xl text-4xl font-bold items-center gap-6'>Tytuł zachęcający do kontaktu</h2>
            <p className='text-xl mt-2 non-italic'>Opis zachecający do kontaktu</p>
        </div>
        <div className="flex flex-row w-1/2 px-4 text-white justify-center pl-20 pt-[200px]">
            <CustomForm />
        </div>
        
    </div>
  )
}

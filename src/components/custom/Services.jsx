import React from 'react'

export default function Services() {
  return (

    <div className='bg-background-primary text-white px-28 py-16'>
        <h1 className='flex justify-center font-bold text-4xl mb-12'>Usługi, które oferujemy</h1>
        <div className='flex flex-row gap-10'>
            <div className='flex flex-col justify-start items-start gap-6'>
                <img src="https://reactjs.org/logo-og.png" alt="React Image" />
                <h2 className="text-2xl font-bold">Platforma Handlowa</h2>
                <p className='mt-2 non-italic text-lg h-40'>Budujemy najbardziej zaawansowaną platformę do handlu produktami spożywczymi i przemysłowymi na świecie</p>
                <button className='mt-2'>Button </button>
            </div>

            <div className='flex flex-col justify-start items-start gap-6'>
                <img src="https://reactjs.org/logo-og.png" alt="React Image" />
                <h2 className="text-2xl font-bold">Tworzymy rynek</h2>
                <p className='mt-2 non-italic text-lg h-40'>Łączymy dostawców z potencjalnymi rynkami zbytu</p>
                <button className='mt-2'>Button </button>
            </div>

            <div className='flex flex-col justify-start items-start gap-6'>
                <img src="https://reactjs.org/logo-og.png" alt="React Image" />
                <h2 className="text-2xl font-bold">Przetwarzamy dane</h2>
                <p className='mt-2 non-italic text-lg h-40'>Dzięki nam szybciej zauważysz nadchodzące trendy oraz uzyskasz dostęp do rzetelnych informacji</p>
                <button className='mt-2'>Button </button>
            </div>
        </div>
    </div>
    


  )
}

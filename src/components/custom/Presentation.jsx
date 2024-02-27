import React from 'react'

export default function Presentation() {
  return (

<div className='bg-[#080E2D] flex flex-col items-center justify-center gap-4 sm:gap-20 text-white pt-28 pb-28 pl-16 pr-16'>
    <div className='text-center sm:text-left'>
        <h1 className="text-4xl font-bold items-start gap-6 ml-10">Dlaczego Warto z nami handlować ?</h1>
        <p className='mt-2 non-italic text-lg'>Zobacz poniższe wideo, aby dowiedzieć się w jaki sposób możemy wspomóc twój biznes</p>
        
        <div className='flex space-x-2 mt-2 justify-center'>
            <button className="bg-blue-700 text-white px-4 py-2 rounded mt-4 mr-4">Kup teraz</button>
            <button className="bg-blue-700 text-white px-4 py-2 rounded mt-4 ml-2">Skontaktuj się z nami</button>
        </div>
    </div>

    <div className='flex space-x-2 overflow-hidden mt-2 justify-center'>
        <iframe
            width="900"
            height="500"
            src="https://www.youtube.com/watch?v=Cy3pduevRiE"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
            className="rounded-lg"
        />
    </div>


    <div className='flex flex-row gap-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
            <img src="https://reactjs.org/logo-og.png" alt="React Image" />
            <h2 className="text-2xl font-bold">Platforma Handlowa</h2>
            <p className='mt-2 non-italic text-lg'>Budujemy najbardziej zaawansowaną platrofmę do handlu produktami spożywczymi i przemysłowymi na świecie</p>
            <button className='mt-4'>Button </button>
        </div>

        <div className='flex flex-col justify-start items-start gap-6'>
            <img src="https://reactjs.org/logo-og.png" alt="React Image" />
            <h2 className="text-2xl font-bold">Tworzymy rynek</h2>
            <p className='mt-2 non-italic text-lg'>Łączymy dostawców z potencjalnymi rynkami zbytu</p>
            <button className='mt-4'>Button </button>
        </div>

        <div className='flex flex-col justify-start items-start gap-6'>
            <img src="https://reactjs.org/logo-og.png" alt="React Image" />
            <h2 className="text-2xl font-bold">Przetwarzamy dane</h2>
            <p className='mt-2 non-italic text-lg'>Dzięki nam szybciej zauważysz nadchodzące trendy oraz uzyskasz dostęp do rzetelnych informacji</p>
            <button className='mt-4'>Button </button>
        </div>
    </div>

</div>


  )
}

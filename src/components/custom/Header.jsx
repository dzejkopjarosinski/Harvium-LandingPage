import React from 'react'

export default function Header() {
  return (
    <header className="bg-background-primary flex flex-row sm:flex-row items-center gap-4 sm:gap-20 text-white px-14 py-16 ">
  <div className="flex flex-row mb-4 sm:mb-0">
    <div className='flex flex-col justify-center w-1/2 px-10'>
      <h1 className="text-6xl font-bold items-start gap-6 ">Handluj z nami</h1>
      <p className='text-xl mt-2 non-italic font-bold'>Harvium jest nowoczesną platformą do kompleksowej obsługi zleceń na całym świecie. <br/> Z nami łatwiej znajdziesz rynek zbytu oraz kupisz towar po konkurencyjnej cenie.</p>
      <div className='flex flex-row'>
        <button className="flex flex-row bg-black text-white px-6 py-2 rounded mt-4 mr-4">Kup teraz<img src='src/assets/arrow.png' className='scale-50'></img></button>
        <button className="bg-transparent border-2 border-black text-white px-4 py-2 rounded mt-4 ml-2">Skontaktuj się z nami</button>
      </div>
    </div>
    <div className='w-1/2 px-10'>
      <img className='border h-96 w-96 flex pl-40 sm:pl-0'></img>
    </div>
  </div>
  
</header>
  )
}

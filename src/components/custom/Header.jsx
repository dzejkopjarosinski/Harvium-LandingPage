import React from 'react'

export default function Header() {
  return (
    <header className="bg-[#080E2D] flex flex-col sm:flex-row items-center gap-4 sm:gap-20 text-white pt-28 pb-28 pl-16 pr-16 ">
  <div className="flex-col mb-4 sm:mb-0">
    <div>
      <h1 className="text-6xl font-bold items-start gap-6 ">Handluj z nami</h1>
      <p className='mt-2 non-italic font-bold'>Harvium jest nowoczesną platformą do kompleksowej obsługi zleceń na całym świecie. <br/> Z nami łatwiej znajdziesz rynek zbytu oraz kupisz towar po konkurencyjnej cenie.</p>
      <div className="">
        <button className="bg-blue-900 text-white px-4 py-2 rounded mt-4 mr-4">Kup teraz</button>
        <button className="bg-blue-900 text-white px-4 py-2 rounded mt-4 ml-2">Skontaktuj się z nami</button>
      </div>
    </div>
  </div>
  <img className='border h-64 w-48 flex pl-40 sm:pl-0'></img>
</header>
  )
}

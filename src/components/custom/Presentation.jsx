import React from 'react'

export default function Presentation() {
  return (

<div className='bg-background-primary flex flex-col items-center justify-center gap-4 sm:gap-20 text-white pt-28 pb-28 pl-16 pr-16'>
    <div className='text-center sm:text-left'>
        <h1 className="text-4xl font-bold items-start gap-6 text-center">Dlaczego Warto z nami handlować ?</h1>
        <p className='mt-2 non-italic text-lg'>Zobacz poniższe wideo, aby dowiedzieć się w jaki sposób możemy wspomóc twój biznes</p>
        
        <div className='flex space-x-2 mt-2 justify-center'>
            <button className="bg-blue-700 text-white px-4 py-2 rounded mt-4 mr-4">Kup teraz</button>
            <button className="bg-blue-700 text-white px-4 py-2 rounded mt-4 ml-2">Skontaktuj się z nami</button>
        </div>
    </div>

    <div className='flex overflow-hidden mt-2 justify-center'>
        <iframe src="https://www.youtube.com/embed/Cy3pduevRiE?si=xIryn4Q4vfI3SrqK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='rounded-lg lg:w-video-lg lg:h-video-lg sm:w-video-sm sm:h-video-sm'></iframe>
    </div>

</div>


  )
}

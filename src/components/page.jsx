import React from 'react';
import jacky from '../assets/jacky.jpeg';
import paulin from '../assets/paulin.jpeg';
import sunny from '../assets/sunny.jpeg';
import yampano from '../assets/yampano.jpeg';
import fabrizio from '../assets/fabrizio.jpeg'
import rashford from '../assets/rashford.jpeg'

const Page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white w-[460px] h-[800px]">
        <nav className="flex justify-between items-center p-4">
          <h1 className="text-4xl font-dancing font-bold">Instagram</h1>
          <div className="flex flex-row gap-10">
            <img src="heart-regular.svg" className="w-8" />
            <img src="fb-msg.svg" className="w-10" />
          </div>
        </nav>
        {/** Stories */}
        <div className="flex justify-around items-center p-4 space-x-4 overflow-hidden">
          {/* Paulin (No Border) */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full p-1">
              <img
                src={paulin}
                className="w-full h-full rounded-full object-cover"
                alt="Paulin"
              />
            </div>
            <p className="mt-2 text-sm font-bold text-gray-800">your story</p>
          </div>

          {/* Yampano */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-4 border-red-500 p-1">
              <img
                src={yampano}
                className="w-full h-full rounded-full object-cover"
                alt="Yampano"
              />
            </div>
            <p className="mt-2 text-sm font-bold text-gray-800">yampano_wa_boi</p>
          </div>

          {/* Sunny */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-4 border-red-500 p-1">
              <img
                src={sunny}
                className="w-full h-full rounded-full object-cover"
                alt="Sunny"
              />
            </div>
            <p className="mt-2 text-sm font-bold text-gray-800">sunny_cissy</p>
          </div>

          {/* Jacky */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-4 border-red-500 p-1">
              <img
                src={jacky}
                className="w-full h-full rounded-full object-cover"
                alt="Jacky"
              />
            </div>
            <p className="mt-2 text-sm font-bold text-gray-800">uwase_ja_sherry</p>
          </div>
        </div>

        {/** post */}
        <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-row gap-2 p-2'>
                <img src={fabrizio} className='w-8 h-8 rounded-full'/>
                <p className='flex flex-col gap-2 '>
                    <p className='h-2 font-medium'>fabriziorom</p>
                    <p className='h- font-bold'>Old Traford</p>
                </p>
                <img src='/verif.svg' className='text-blue'/>
            </div>
            <img src='/menu.svg'/>
        </div>
        <div>
            <img src={rashford} className='h-[420px] w-full '/>
        </div>
       <div className='flex flex-row justify-between items-center p-3'>
       <div className='flex flex-row space-x-1 '>
            <icon className='flex flex-row justify-center items-center gap-1'>
                <img src='/heart-regular.svg' className='w-7 h-9'/>
                <h3>7,287</h3>
            </icon>
            <icon className='flex flex-row justify-center items-center gap-1'>
                <img src='/comment.svg' className='w-7 h-9'/>
                <p>42</p>
            </icon>
            <icon>
                <img src='/share.svg' className='w-7 h-9'/>
            </icon>
        </div>

        <img src='/bookmark.svg' className='w-7 h-9'/>
       </div>
       {/**footer */}
       <div className='flex flex-row space-x-14 justify-center items-center'>
        <img src='/house.svg' className='w-8 h-8'/>
        <img src='/search.svg' className='w-8 h-8'/>
        <img src='/add.svg' className='w-8 h-8'/>
        <img src='/film.svg' className='w-8 h-8'/>
        <img src={paulin} className='w-8 h-8 rounded-full'/> 
       </div>
      </div>
    </div>
  );
};

export default Page;

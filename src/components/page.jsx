import React from 'react';
import jacky from '../assets/jacky.jpeg';
import paulin from '../assets/paulin.jpeg';
import sunny from '../assets/sunny.jpeg';
import yampano from '../assets/yampano.jpeg';
import fabrizio from '../assets/fabrizio.jpeg';
import rashford from '../assets/rashford.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const Page = () => {
  const stories = [
    { src: yampano, name: "yampano_wa_boi" },
    { src: sunny, name: "sunny_cissy" },
    { src: jacky, name: "uwase_ja_sherry" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white w-full max-w-[460px] h-screen overflow-y-auto shadow-lg">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-4">
          <h1 className="text-2xl md:text-4xl font-dancing font-bold">Instagram</h1>
          <div className="flex flex-row gap-4 relative">
            <img src="heart-regular.svg" className="w-6 md:w-8" alt="Heart" />
            <div className="relative">
              <img src="fb-msg.svg" className="w-6 md:w-8" alt="Messenger" />
              {/* Notification Badge */}
              <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                4
              </div>
            </div>
          </div>
        </nav>

        {/* Stories */}
        <div className="flex justify-center gap-4 items-center px-4 py-2">
          {/* Your Story */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full p-1 relative">
              <img
                src={paulin}
                className="w-full h-full rounded-full object-cover"
                alt="Paulin"
              />
              <FontAwesomeIcon
                icon={faCirclePlus}
                style={{ color: "#74C0FC" }}
                className="absolute bottom-0 right-0 z-10 w-5 h-5 md:w-7 md:h-7 bg-white rounded-full"
              />
            </div>
            <p className="mt-2 text-xs md:text-sm font-bold text-gray-800">your story</p>
          </div>

          {/* Other Stories */}
          {stories.map((story, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-red-500 p-1">
                <img
                  src={story.src}
                  className="w-full h-full rounded-full object-cover"
                  alt={story.name}
                />
              </div>
              <p className="mt-2 text-xs md:text-sm font-bold text-gray-800">{story.name}</p>
            </div>
          ))}
        </div>

        {/* Post */}
        <div className="">
          {/* Post Header */}
          <div className="flex justify-between items-center mb-4 pr-4 pl-4">
            <div className="flex items-center gap-2">
              <img src={fabrizio} className="w-8 h-8 rounded-full" alt="Fabrizio" />
              <div className="text-sm">
                <p className="font-medium">fabriziorom</p>
                <p className="text-gray-500">Old Trafford</p>
              </div>
              <img src="/verif.svg" className="w-4 h-4 text-blue-500" alt="Verified" />
            </div>
            <img src="/menu.svg" className="w-6" alt="Menu" />
          </div>

          {/* Post Image */}
          <div className="relative">
            <img src={rashford} className="h-[420px] w-full" alt="Rashford" />
          </div>

          {/* Post Actions */}
          <div className="flex justify-between items-center mt-3 pr-3 pl-3">
            <div className="flex space-x-4">
              <div className="flex items-center space-x-1">
                <img src="/heart-regular.svg" className="w-6 h-6" alt="Like" />
                <span className="text-sm">7,287</span>
              </div>
              <div className="flex items-center space-x-1">
                <img src="/comment.svg" className="w-6 h-6" alt="Comment" />
                <span className="text-sm">42</span>
              </div>
              <img src="/share.svg" className="w-6 h-6" alt="Share" />
            </div>
            <img src="/bookmark.svg" className="w-6 h-6" alt="Bookmark" />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center p-2 mt-4 border-t">
          <img src="/house.svg" className="w-7 h-7" alt="Home" />
          <img src="/search.svg" className="w-7 h-7" alt="Search" />
          <img src="/add.svg" className="w-8 h-8" alt="Add" />
          <img src="/film.svg" className="w-8 h-8" alt="Reels" />
          <img src={paulin} className="w-7 h-7 rounded-full" alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Page;

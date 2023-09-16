'use client'
import { useState } from 'react';

const images = [
  'https://th.bing.com/th/id/R.0465e2300971f255a69e714d4ada146d?rik=c9lBvOAjm1Qspw&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2014%2f03%2fengineering-images.jpg&ehk=Vope0bu3tvoTnVCIDmT9Kzo6LmXA1btxZCOO5hMspxI%3d&risl=&pid=ImgRaw&r=0',
  'https://th.bing.com/th/id/R.292de4c85a5a18702d7a653d89555fae?rik=TwgRpiA0TZOP5Q&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2014%2f06%2fEngineering-pictures-9.jpg&ehk=ZiEv8KLX%2bu6GbmuvPB778EniA7Gb53FqhP2geip0UeM%3d&risl=&pid=ImgRaw&r=0',
  'https://previews.agefotostock.com/previewimage/medibigoff/04fc6b71289ad7b978d0c63be7a7b8a0/b20-2472690.jpg',
  'https://www.wyofile.com/wp-content/uploads/2013/01/uwengineering_lab.jpg',
  'https://th.bing.com/th/id/R.0465e2300971f255a69e714d4ada146d?rik=c9lBvOAjm1Qspw&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2014%2f03%2fengineering-images.jpg&ehk=Vope0bu3tvoTnVCIDmT9Kzo6LmXA1btxZCOO5hMspxI%3d&risl=&pid=ImgRaw&r=0',
  'https://th.bing.com/th/id/R.292de4c85a5a18702d7a653d89555fae?rik=TwgRpiA0TZOP5Q&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2014%2f06%2fEngineering-pictures-9.jpg&ehk=ZiEv8KLX%2bu6GbmuvPB778EniA7Gb53FqhP2geip0UeM%3d&risl=&pid=ImgRaw&r=0',
  'https://previews.agefotostock.com/previewimage/medibigoff/04fc6b71289ad7b978d0c63be7a7b8a0/b20-2472690.jpg',
  'https://www.wyofile.com/wp-content/uploads/2013/01/uwengineering_lab.jpg',
  'https://th.bing.com/th/id/R.0465e2300971f255a69e714d4ada146d?rik=c9lBvOAjm1Qspw&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2014%2f03%2fengineering-images.jpg&ehk=Vope0bu3tvoTnVCIDmT9Kzo6LmXA1btxZCOO5hMspxI%3d&risl=&pid=ImgRaw&r=0',
  'https://th.bing.com/th/id/R.292de4c85a5a18702d7a653d89555fae?rik=TwgRpiA0TZOP5Q&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2014%2f06%2fEngineering-pictures-9.jpg&ehk=ZiEv8KLX%2bu6GbmuvPB778EniA7Gb53FqhP2geip0UeM%3d&risl=&pid=ImgRaw&r=0',
  'https://previews.agefotostock.com/previewimage/medibigoff/04fc6b71289ad7b978d0c63be7a7b8a0/b20-2472690.jpg',
  'https://www.wyofile.com/wp-content/uploads/2013/01/uwengineering_lab.jpg',
  'https://th.bing.com/th/id/R.0465e2300971f255a69e714d4ada146d?rik=c9lBvOAjm1Qspw&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2014%2f03%2fengineering-images.jpg&ehk=Vope0bu3tvoTnVCIDmT9Kzo6LmXA1btxZCOO5hMspxI%3d&risl=&pid=ImgRaw&r=0',
  'https://th.bing.com/th/id/R.292de4c85a5a18702d7a653d89555fae?rik=TwgRpiA0TZOP5Q&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2014%2f06%2fEngineering-pictures-9.jpg&ehk=ZiEv8KLX%2bu6GbmuvPB778EniA7Gb53FqhP2geip0UeM%3d&risl=&pid=ImgRaw&r=0',
  'https://previews.agefotostock.com/previewimage/medibigoff/04fc6b71289ad7b978d0c63be7a7b8a0/b20-2472690.jpg',
  'https://www.wyofile.com/wp-content/uploads/2013/01/uwengineering_lab.jpg',
]; // Replace these paths with your image URLs

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <button
        onClick={prevImage}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-l"
      >
        &#10094; Previous
      </button>
      <img
        className="w-full"
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
      />
      <button
        onClick={nextImage}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-r"
      >
        Next &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;

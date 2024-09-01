// src/components/Images.jsx
import { useEffect, useState } from 'react';
import './images.css';
import toast, { Toaster } from 'react-hot-toast';

function Images({ toggleSearch }) {
  const [imageUrls, setImageUrls] = useState([]);
  const [input, setInput] = useState(''); // Initialize as an empty string

  useEffect(() => {
    async function fetchImage(query) {
      try {
        // use localhost when developing http://localhost:5000 
        // use vercel link when pushing changes to github
        const response = await fetch(`https://wallpaper-app-five.vercel.app/?query=${encodeURIComponent(query)}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        

        if (Array.isArray(data.urls)) {
          setImageUrls(data.urls); // Update state with the array of URLs
        } else {
          console.error('Expected an array of URLs, but got:', data.urls);
        }
      } catch (error) {
        toast.error('Failed to load images. Please try again later.');
        console.error(error); // Log the error for debugging
      }
    }

    if (input) {
      fetchImage(input); // Fetch images based on input
    } else {
      fetchImage('tourism'); // Default query
    }
  }, [input]); // Dependency array includes 'input'

  const handleDownload = async (url) => {
    try {
      // Fetch the image as a blob
      const response = await fetch(url, {
        method: 'GET',
        headers: {},
      });
      const blob = await response.blob();

      // Create a temporary link to download the blob
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'pexels-image.jpg'; // Default file name or extract from URL
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up the URL object
      window.URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error('Failed to download the image:', error);
    }
  };
  

  return (
    <div>
      <Toaster position='top-center' reverseOrder={false} />
      {toggleSearch && ( // Conditionally render the input based on toggleSearch
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Search for all images on Magic Stock'
          className='outline-none w-full h-14 lg:text-2xl font-poppins text-center mb-4'
        />
      )}
      <div className='masonry  p-6'>
        <div></div>
        {imageUrls.length > 0 ? (
          imageUrls.map((url, index) => (
            <div key={index} className='image-container cursor-pointer sm:grid-cols-4 masonry-item'>
                <div className='flex flex-col items-center'>
              <img src={url} alt={`Image ${index}`} loading='lazy' />
              <div className='download  w-8 justify-center items-center  '>
                <div className='flex justify-center '>
                <img 
                  src='/download.png' // Correct the path if necessary
                  className='download'
                  alt='Download' 
                  onClick={() => handleDownload(url)}
                />
                {/* <img 
                  src='/Heart.png' // Correct the path if necessary
                  className='download w-1'
                  alt='Download' 
                  onClick={() => handleDownload(url)}
                /> */}
                </div>
              </div>
              </div>
            </div>
          ))
        ) : (
          <div className='flex justify-center items-center text-center'>
            <p className='font-poppins flex justify-center text-2xl'>Loading images...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Images;

// Import necessary components and libraries
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useTheme from '../hooks/useTheme';
import Typewriter from 'typewriter-effect';

/**
 * @function Error  
 * @description This component is the error page of the website.
 * @returns Error component
 */
function Error() {
  // Custom hook to handle theme
  useTheme();
  
  // Navigate hook for redirection
  const navigateTo = useNavigate();
  
  // Array of error messages
  const errorMessages = [
    "Oops! The data went for a walk and forgot to leave a trail. We're on the case!",
    "Access Denied! You've stumbled upon a classified dataset. Let's explore the public ones!",
    "Data servers are on a break, enjoying their virtual coffee. They'll be back soon!",
    "404 Error: Dataset Not Found. It's hiding, but we're determined to find it!",
    "Uh-oh! Our algorithms are playing hide-and-seek with the datasets. We'll bring them out soon!"
  ];

  // State to hold the current error message
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle redirection to the home page
  const handleRedirect = () => {
    navigateTo('/');
  };

  useEffect(() => {
    // Choose a random error message when the component mounts
    const randomIndex = Math.floor(Math.random() * errorMessages.length);
    setErrorMessage(errorMessages[randomIndex]);
  }, []);

  // Render the JSX element
  return (
    <div className="bg-gray-100 dark:bg-customGray flex justify-center items-center flex-col dark:text-white min-h-screen overflow-x-clip">
      <h1 className="text-8xl font-bold nunito">
        <span className="text-amber-500">404</span> Error<span className="text-amber-500">!</span>
      </h1>

      <p className="text-3xl py-2 w-[36rem] text-center">
        <Typewriter
          options={{
            strings: [errorMessage],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 'natural',
            pauseFor: 1000
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(errorMessage)
              .pauseFor(1000)
              .deleteAll()
              .typeString(errorMessages[(Math.floor(Math.random() * errorMessages.length))])
              .start();
          }}
        />
      </p>

      <button className="p-2 border-2 mt-6 hover:scale-105 duration-300 animate-bounce border-white rounded-lg" onClick={handleRedirect}>
        Go to Home
      </button>
    </div>
  );
};

export default Error;

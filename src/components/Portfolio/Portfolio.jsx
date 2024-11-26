import React from 'react'

function Portfolio() {

    
  return (
    <div className='max-w-full h-auto lg:py-28' >
      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 mx-auto">
          <div className='border-2 border-black h-52 py-4 rounded-md'>
            <h2 className='text-2xl font-medium mb-4 text-red-600'>Weather-App</h2>
            <p className='text-justify px-2 text-gray-600'>This weather app allows users to input a city name and fetch real-time weather information from an online weather service.</p>
          </div>
          <div className='border-2 border-black h-52 py-4 rounded-md'>
            <h2 className='text-2xl font-medium mb-4 text-red-600'>Tic-Tac-Toe</h2>
            <p className='text-justify px-2 text-gray-600'>The Tic-Tac-Toe game is a classic two-player game developed using HTML, CSS, and JavaScript. The game is played on a 3x3 grid where players take turns marking their respective symbol—either "X" or "O"—in empty cells.</p>
          </div>
          <div className='border-2 border-black h-52 py-4 rounded-md'>
            <h2 className='text-2xl font-medium mb-4 text-red-600'>Reactify</h2>
            <p className='text-justify px-2 text-gray-600'>I developed a dynamic web application using React, which showcases my skills in building responsive and interactive user interfaces. The app leverages React’s component-based architecture, enabling efficient updates and seamless user interactions.</p>
          </div>
      </div>
    </div>
  )
}

export default Portfolio


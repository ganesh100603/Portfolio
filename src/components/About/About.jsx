import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:7/12 lg:w-6/12 mx-auto">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          About Me
                      </h2>
                      <p className="mt-6 text-gray-600 text-justify">
                      Motivated and detail-oriented web developer with expertise in HTML, CSS, and JavaScript, specializing in 
                      crafting responsive, user-friendly interfaces. Recently began working with ReactJS, adding a modern, 
                      component-based approach to my development toolkit. 
                      </p>
                      <p className="mt-4 text-gray-600 text-justify ">
                      Proficient in writing clean, well-organized code, 
                      enhancing site performance, and ensuring cross-browser compatibility. Skilled in building dynamic, interactive 
                      features through JavaScript and modern CSS techniques, including layouts and styling. 
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}
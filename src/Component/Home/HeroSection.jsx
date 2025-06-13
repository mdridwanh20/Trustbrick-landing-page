import React from 'react'
import coverImg from '../../assets/cover image.jpeg'

export default function HeroSection() {

  return (
    <div>
      <section id='home' class="bg-cover pt-20 border relative bg-no-repeat bg-center h-screen flex items-center justify-center text-center py-16"
      style={{backgroundImage: `url(${coverImg})`}}
      >
        <div className='absolute inset-0 bg-black/60'></div>

    <div class="container mx-auto z-10 text-white px-4">

      <h1 class="text-4xl md:text-5xl font-bold  mb-4">We're Building Your Future</h1>

      <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        Whatever the level of support you require, we are sure that we will have a package that meets your needs.
      </p>

      <div class="flex justify-center">
        <input 
          type="email" 
          placeholder="Enter Your Email" 
          class="px-4 py-2 lg:w-72 w-40 border border-gray-400 rounded-l-full text-white focus:outline-none "
        />
        <button 
          class="bg-[var(--primaryColor)] px-3 lg:text-xl text-sm cursor-pointer lg:px-6 lg:py-3 rounded-r-full font-normal brandColorHover transition"
        >
          Get Started
        </button>
      </div>
      
    </div>

  </section>

    </div>
  )
}

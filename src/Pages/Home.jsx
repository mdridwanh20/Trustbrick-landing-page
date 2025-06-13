import React from 'react'
import HeroSection from '../Component/Home/HeroSection'
import Featured from '../Component/Home/Featured'
import Expertise from '../Component/Home/Expertise'
import Services from './Services'
import Navbar from '../Component/Common/Navbar'
import Footer from '../Component/Common/Footer'
import WorkSection from '../Component/Home/WorkSection'
import Testimonials from '../Component/Home/Testimonials'
import MapSection from '../Component/Home/MapSection'

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      
      <HeroSection></HeroSection>

     <div className='container m-auto px-3'>
       <Services></Services>
      <Featured></Featured>
      <Expertise></Expertise>
      <WorkSection></WorkSection>
      <Testimonials></Testimonials>
      <MapSection></MapSection>
     </div>

      <Footer></Footer>

    </div>
  )
}

import React, { } from 'react'
import FindJobs from '../../Components/FindJobs/findJobs'
import Hero from '../../Components/Hero/hero'
import NewsLetter from '../../Components/NewsLetter/newsLetter'
import OpenJobs from '../../Components/OpenJobs/openJobs'
import Testimonials from '../../Components/Testimonials/testimonials'
import useLocalContext from '../../Hooks/useLocalContext'
import './home.css'

function Home({data}) {

  const { auth } = useLocalContext();

  console.log(auth)
  return (
    <div>
        <Hero/>
        <FindJobs data={data}/>
        <OpenJobs data={data}/>
        <Testimonials/>
        <NewsLetter/>
    </div>
  )
}

export default Home

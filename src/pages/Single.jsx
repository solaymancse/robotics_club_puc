import React from 'react'
import { SingleEvent } from '../components/Events/SingleEvent'
import { Footer } from '../components/Footer/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import { TopBar } from '../components/TopBar/TopBar'

export const Single = () => {
  return (
    <div>
        <TopBar/>
        <Navbar/>
        <SingleEvent/>
        <Footer/>
    </div>
  )
}

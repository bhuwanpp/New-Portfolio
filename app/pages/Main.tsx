import React from 'react'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import About from './About'
import Project from './Projects'
import Contacts from './Contacts'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

export default function Main() {
  return (
    <main className='text-text font-light  '>
      <Header/>
      <Sidebar/>
      <MainSection/>
      <About/>
      <Project/>
      <Contacts/>
      <Footer/>
    </main>
  )
}

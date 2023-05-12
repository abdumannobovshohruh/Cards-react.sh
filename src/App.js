import React from 'react'
import Cards from './components/Cards/cards'
import FooterPage from './components/Footer/FooterPage'
import { NavbarPage } from './components/NavbarPage/NavbarPage'
import Section from './components/SectionPage/section'


export default function App() {
  return (
    <div> 
      <NavbarPage/>
     <Cards/>
     <Section/>
     <FooterPage/>
    </div>
  )
}

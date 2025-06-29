

import React,{useState}from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'

import { Gents,Ladies } from '../data';
import WomanCollection from '../components/WomanCollection'

const MainPage = () => {
 const [gentsFashon] = useState(Gents);
const [ladiesFashon] = useState(Ladies);
 
  console.log(Gents);
  return (
    <div>
      <Header/>
      <Banner/>
      <Collections gentsFashon={gentsFashon}/>
      <WomanCollection ladiesFashon={ladiesFashon} />
      <Footer/>

    </div>
  )
}

export default MainPage

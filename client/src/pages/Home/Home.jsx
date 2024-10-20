import React from 'react'
import Carousel from '../Carousel/Carousel'
import Categories from '../Categories/Categories'
import NewLaunch from '../NewLaunch/NewLaunch'
import Delivery from '../Delivery/Delivery'
import Info from '../Info/Info'

import VegetableCarousel from '../VegetableCarousel/VegetableCarousel'

import Counter from '../Counter/Counter'


function Home() {
  return (
    <div>

      <Carousel />
      <Categories />
      <NewLaunch />
      
      <VegetableCarousel />
      <Info />
      <Delivery/>
      <Counter />
     
      

    </div>
  )
}

export default Home

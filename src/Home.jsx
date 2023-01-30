import React from 'react'
import Banner from './components/Banner/Banner'
import CategoriesCard from './components/Card/categoriesCard/CategoriesCard'
import Head from './components/Header/Head'


const Home = () => {
  return (
    <div>
        <Head/>
        <Banner/>
        <CategoriesCard/>
        
        
    </div>
  )
}

export default Home
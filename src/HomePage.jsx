import React from 'react'
import Header from './Layout/Header'
import Content from './Layout/Content'
import Footer from './Layout/Footer'
import style from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={style.container}>
        <Header/>
        <Content/>
        <Footer/>
    </div>
  )
}

export default HomePage
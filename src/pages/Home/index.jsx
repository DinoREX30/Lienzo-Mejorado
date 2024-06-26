import React from 'react'
import Layout from '../../Components/Layout'
import Carousel from '../../Components/Carousel'
import AnimatedText from '../../Components/AnimatedText'
import SectionLanding from '../../Components/SectionLanding'
import Footer from '../../Components/Footer'

export default function Home() {
  return (
    <>
    <Layout>
      <Carousel/>
      <AnimatedText/>
      <SectionLanding/>
    </Layout>
    <Footer/>
    </>
  )
}

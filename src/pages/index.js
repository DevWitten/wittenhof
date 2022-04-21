import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import About from "../components/About"
import Contact from "../components/Contact"
import ImageSlider from "../components/SimpleImageSlider"

const IndexPage = () => (
  <Layout>
    <Seo title="Avaleht" />
    <Hero />
    <About />
    <ImageSlider />
    <Contact />
  </Layout>
)

export default IndexPage

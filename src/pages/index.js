import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import About from "../components/About"
import Contact from "../components/Contact"
import History from "../components/History"

const IndexPage = () => (
  <Layout>
    <Seo title="Avaleht" />
    <Hero />
    <About />
    <History />
    <Contact />
  </Layout>
)

export default IndexPage

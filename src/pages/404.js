import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>Sinu otsitud lehte ei leitud.</p>
    <a href="/">Tagasi avalehele</a>
  </Layout>
)

export default NotFoundPage

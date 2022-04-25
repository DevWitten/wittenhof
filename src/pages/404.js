import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="page_not_found_wrapper text-center flex">
      <div className="block m-auto">
        <h1 className="text-4xl">404: Not Found</h1>
        <br />
        <p>Sinu otsitud lehte ei leitud.</p>
        <br />
        <p className="btn-home rounded">
          <a href="/">Tagasi avalehele</a>
        </p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

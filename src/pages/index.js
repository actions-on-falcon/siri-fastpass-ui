import React from 'react'

import SEO from '../components/seo'
import Image from '../components/image'
import Layout from '../components/layout'

const keywords = ['gatsby', 'application', 'react']

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={keywords} />

    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <div style={{maxWidth: '300px', marginBottom: '1.45rem'}}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
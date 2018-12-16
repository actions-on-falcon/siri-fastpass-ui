import React from 'react'

import SEO from '../components/seo'
import Image from '../components/image'
import Layout from '../components/layout'
import Index from '../components/Index'

const keywords = ['gatsby', 'application', 'react']

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={keywords} />

    <Index />
  </Layout>
)

export default IndexPage

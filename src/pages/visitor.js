import React from 'react'

import SEO from '../components/seo'
import Image from '../components/image'
import Layout from '../components/layout'
import Pass from '../components/Pass'

const IndexPage = () => (
  <Layout>
    <SEO title="Visitor Pass" keywords={['react']} />
    <Pass />
  </Layout>
)

export default IndexPage

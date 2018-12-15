import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Verify from '../components/Verify'

const VerifyVisitorPage = () => (
  <Layout>
    <SEO title="Visitor Pass" keywords={['react']} />

    <Verify />
  </Layout>
)

export default VerifyVisitorPage

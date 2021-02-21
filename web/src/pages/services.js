import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ServicePreviewGrid from '../components/services-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { mapEdgesToNodes } from '../lib/helpers'

import { responsiveTitle1 } from '../components/typography.module.css'

export const query = graphql`
  query ServicePageQuery {
    services: allSanityServices {
      edges {
        node {
          id
          title
          mainImage {
            asset {
              _id
            }
            alt
          }
          _rawBody
        }
      }
    }
  }
`

const ServicePage = props => {
  const { data, errors } = props
  console.log(data)

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const page = data && data.services
  console.log(page)

  const projectNodes = (data || {}).services ? mapEdgesToNodes(data.services) : []

  console.log(projectNodes)

  if (!page) {
    throw new Error(
      'Missing "About" page data. Open the studio at http://localhost:3333 and add "About" page data and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={page.title} />
      <Container>
        <h1 className={responsiveTitle1}>Services</h1>
        {projectNodes && <ServicePreviewGrid nodes={projectNodes} />}
      </Container>
    </Layout>
  )
}

export default ServicePage

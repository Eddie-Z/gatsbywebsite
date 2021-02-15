import React from 'react'
import BlockContent from '../components/block-content'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import PeopleGrid from '../components/people-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import { responsiveTitle1, responsiveTitle2 } from '../components/typography.module.css'

const Introduction = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const page = data && data.page
  console.log(page)
  //   const personNodes =
  //     data && data.people && mapEdgesToNodes(data.people).filter(filterOutDocsWithoutSlugs)

  if (!page) {
    throw new Error(
      'Missing "About" page data. Open the studio at http://localhost:3333 and add "About" page data and restart the development server.'
    )
  }

  return (
    <Container>
      <h1 className={responsiveTitle1}>{page.title}</h1>
      <BlockContent blocks={page._rawBody || []} />
      {/* {personNodes && personNodes.length > 0 && <PeopleGrid items={personNodes} title="People" />} */}
      <h2 className={responsiveTitle2}>{page.email}</h2>
    </Container>
  )
}

export default Introduction

import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'

import { responsiveTitle1 } from '../components/typography.module.css'

export const query = graphql`
  query ProjectsPageQuery {
    projects: allSanityPersonalproject(limit: 12) {
      edges {
        node {
          id
          github
          mainImage {
            asset {
              _id
            }
            alt
          }
          title
          slug {
            current
          }
        }
      }
    }
  }
`

const ProjectsPage = props => {
  const { data, errors } = props
  console.log(data)
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const projectNodes =
    data && data.projects && mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)

  const isPersonalProject = true

  return (
    <Layout>
      <SEO title="Projects" />
      <Container>
        <h1 className={responsiveTitle1}>Projects</h1>
        {projectNodes && projectNodes.length > 0 && (
          <ProjectPreviewGrid nodes={projectNodes} isPersonalProject={isPersonalProject} />
        )}
      </Container>
    </Layout>
  )
}

export default ProjectsPage

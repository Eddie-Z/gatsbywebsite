import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { Link } from 'gatsby'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
import Container from './container'
import RoleList from './role-list'

import styles from './project.module.css'

function Project(props) {
  console.log(props)
  const { _rawBody, title, categories, members, startedAt, endedAt, role, github } = props

  const startAtDate = new Date(startedAt)
  const endAtDate = new Date(endedAt)
  const startDate =
    startAtDate.getFullYear() + '-' + (startAtDate.getMonth() + 1) + '-' + startAtDate.getDate()
  const endDate =
    endAtDate.getFullYear() + '-' + (endAtDate.getMonth() + 1) + '-' + endAtDate.getDate()
  return (
    <article className={styles.root}>
      {/* {props.mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )} */}
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </div>
          <aside className={styles.metaContent}>
            {/* {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do YYYY')}
              </div>
            )} */}
            <h1> Start: {startDate}</h1>

            <h1> End: {endDate}</h1>
            <h1> {role} </h1>
            <h1>
              {github && (
                <a target="_blank" href={github}>
                  Github Repository
                </a>
              )}
            </h1>

            {/* {members && <RoleList items={members} title="Authors" />}
            {categories && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>{endedAt}</ul>
              </div>
            )} */}
            {/* {relatedProjects && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Related projects</h3>
                <ul>
                  {relatedProjects.map(project => (
                    <li key={`related_${project._id}`}>
                      <Link to={`/project/${project.slug.current}`}>{project.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )} */}
          </aside>
        </div>
      </Container>
    </article>
  )
}

export default Project

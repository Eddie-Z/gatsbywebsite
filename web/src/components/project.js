import React from 'react'
import BlockContent from './block-content'
import Container from './container'

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
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </div>
          <aside className={styles.metaContent}>
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
          </aside>
        </div>
      </Container>
    </article>
  )
}

export default Project

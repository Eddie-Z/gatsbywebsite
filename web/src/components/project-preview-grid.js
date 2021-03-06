import React from 'react'
import ProjectPreview from './project-preview'

import styles from './project-preview-grid.module.css'

import { responsiveTitle1, responsiveTitle2 } from '../components/typography.module.css'

function ProjectPreviewGrid(props) {
  return (
    <div className={styles.root}>
      <h1 className={responsiveTitle1}>{props.isPersonalProject ? '' : 'Experience.'}</h1>

      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <ProjectPreview {...node} isPersonalProject={props.isPersonalProject} />
            </li>
          ))}
      </ul>
    </div>
  )
}

ProjectPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default ProjectPreviewGrid

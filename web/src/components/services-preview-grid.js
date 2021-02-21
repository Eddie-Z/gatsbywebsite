import React from 'react'

import { cn, buildImageObj } from '../lib/helpers'
import { responsiveTitle3 } from './typography.module.css'
import BlockText from './block-text'
import { imageUrlFor } from '../lib/image-url'

import ServicePreview from './service-preview'

import styles from './services-preview-grid.module.css'

function ServicePreviewGrid(props) {
  console.log(props)
  return (
    <div className={styles.root}>
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <ServicePreview {...node} />
            </li>
          ))}
      </ul>
    </div>
  )
}

ServicePreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default ServicePreviewGrid

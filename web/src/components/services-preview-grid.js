import { Link } from 'gatsby'
import React from 'react'
import ProjectPreview from './project-preview'
import { cn, buildImageObj } from '../lib/helpers'
import { responsiveTitle3 } from './typography.module.css'
import BlockText from './block-text'
import { imageUrlFor } from '../lib/image-url'

import styles from './project-preview-grid.module.css'

import { responsiveTitle1, responsiveTitle2 } from '../components/typography.module.css'

function ServicePreviewGrid(props) {
  console.log(props)
  return (
    <div className={styles.root}>
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              {node.mainImage && node.mainImage.asset && (
                <img
                  src={imageUrlFor(buildImageObj(node.mainImage))
                    .width(450)
                    .height(Math.floor((9 / 16) * 600))
                    .url()}
                  alt={node.mainImage.alt}
                />
              )}
              <h3 className={cn(responsiveTitle3, styles.title)}>{node.title}</h3>
              {node._rawBody && (
                <div className={styles.excerpt}>
                  <BlockText blocks={node._rawBody} />
                </div>
              )}
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

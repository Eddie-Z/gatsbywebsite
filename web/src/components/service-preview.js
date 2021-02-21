import { Link } from 'gatsby'
import React from 'react'
import { cn, buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockText from './block-text'

import styles from './service-preview.module.css'
import { responsiveTitle3 } from './typography.module.css'

function ServicePreview(props) {
  return (
    <div className={styles.leadMediaThumb}>
      {props.mainImage && props.mainImage.asset && (
        <img
          src={imageUrlFor(buildImageObj(props.mainImage))
            .width(450)
            .height(Math.floor((9 / 16) * 600))
            .url()}
          alt={props.mainImage.alt}
        />
      )}
      <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
      {props._rawBody && (
        <div className={styles.excerpt}>
          <BlockText blocks={props._rawBody} />
        </div>
      )}
    </div>
  )
}

export default ServicePreview

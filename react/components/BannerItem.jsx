import React from 'react'
import { useRuntime } from 'vtex.render-runtime'
import CTABanner from './CTABanner'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES_SILIDER } from '../cssHandles'

import styles from './style.css'

const BannerItem = ({content,desktopImage,imageAlt = "",imageTitle = "",mobileImage}) => {
  const { deviceInfo } = useRuntime()
  const { isMobile } = deviceInfo

  const { additionalDef, tabSelect} = content

  const handles = useCssHandles(CSS_HANDLES_SILIDER)



if (additionalDef == "No") return (
  <>
    <div className={`${styles.contentBannerItem} ${handles.contentBanner} `}>
      <a
        href={tabSelect.urlBanner}
        target={tabSelect.externo ? '_blank' : '_self'}
        rel={tabSelect.externo ? 'noopener noreferrer' : ''}
        className={styles.contentBannerItem_link}
      >
        <img src={isMobile ? mobileImage : desktopImage} alt={imageAlt} className={`${styles.contentBannerItem_img} ${handles.contentBanner_img}`} />

      </a>
    </div>
  </>
)

  return (
    <div className={styles.contentBannerItem}>
        <img src={isMobile ? mobileImage : desktopImage} alt={imageAlt}
          className={`${styles.contentBannerItem_img} ${handles.contentBanner_img}`}
        />
        <CTABanner {...tabSelect}/>
    </div>
  )
}

export default BannerItem

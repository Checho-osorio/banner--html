import React from 'react'

import Style from './style.css'
import BtnCta from './BtnCta'
import { useRuntime } from 'vtex.render-runtime'

import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES_SILIDER } from '../cssHandles'

const CTABanner = ({ colorText, itemsBtn, posicionHorizontal, posicionVertical, textoDescriptcion, textoPrincipal, anchoMaximo = "410px", alineacionContent = 'flex-start', textAlign = 'start', posicionHorizontalMobileBtn }) => {

  const { deviceInfo } = useRuntime()
  const { isMobile } = deviceInfo

  const handles = useCssHandles(CSS_HANDLES_SILIDER)

  const styles = {
    container: {
      position: 'absolute',
      width: "90%",
      height: "90%",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: "auto",
      display: 'flex',
      alignItems: posicionVertical,
      justifyContent: isMobile ? posicionHorizontalMobileBtn : posicionHorizontal
    },
    texto: {
      color: colorText,
      textAlign: textAlign
    },

    containtCTA: {
      maxWidth: anchoMaximo,
      alignItems: alineacionContent
    }
  }

  return (
    <div style={styles.container} className={`${handles.containerCTA}`}>

      <div style={styles.containtCTA} className={`${Style.contentCTA} ${handles.containerCTA_element}`}>
        <p style={styles.texto} className={`${handles.containerCTA_element_title}`}>{textoPrincipal}</p>
        <p style={styles.texto} className={`${handles.containerCTA_element_subtitle}`}>{textoDescriptcion}</p>

        <div className={`${Style.ContentBtn_CTA}`}>
          {
            itemsBtn.map((item, index) => (
              <BtnCta key={index} {...item} />
            ))
          }
        </div>
      </div>


    </div>
  )
}

export default CTABanner

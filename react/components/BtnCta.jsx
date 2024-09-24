import React, { useState } from 'react'
import { useRuntime } from 'vtex.render-runtime'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES_SILIDER } from '../cssHandles'


const BtnCta = ({
  colorFondo = '#000',
  colorFondoHover = '#EBF73A',
  __editorItemTitle = 'btn CTA',
  link = '#',
  colorText = '#fff',
  colorTextoHover = '#000',
  colorborde = '#fff',
  externo,
  tamanoFuenteDesk = "18px",
  tamanoFuenteMob = "14px"

}) => {

  const handles = useCssHandles(CSS_HANDLES_SILIDER)
  const { deviceInfo } = useRuntime()
  const { isMobile } = deviceInfo

  const [hovered, setHovered] = useState(false);

  const styles = {
    container: {
      color: hovered ? colorTextoHover || '#000' : colorText,
      backgroundColor: hovered ? colorFondoHover : colorFondo,
      borderColor: hovered ? colorFondoHover : colorborde,
      padding: '10px 20px',
      textDecoration: 'none',
      transition: 'all 0.3s, color 0.3s',
      fontSize: tamanoFuenteDesk,
    }
  }

  const stylesMobile = {
    container: {
      backgroundColor: colorFondoHover,
      color: colorTextoHover,
      borderColor: colorFondoHover,
      padding: '10px 20px',
      textDecoration: 'none',
      fontSize: tamanoFuenteMob,
      textAlign: "center"
    }
  }



  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };



  return (
    <a
      href={link}
      target={externo ? '_blank' : '_self'}
      rel={externo ? 'noopener noreferrer' : ''}
      className={handles.contentBtn_CTA}
      style={isMobile ? stylesMobile.container : styles.container}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      {__editorItemTitle}
    </a>
  )
}

export default BtnCta


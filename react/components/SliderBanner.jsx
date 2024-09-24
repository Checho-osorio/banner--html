import React from 'react'
import { SCHEMA } from '../schema/schema'
import { SliderLayout } from 'vtex.slider-layout'
import BannerItem from './BannerItem';
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES_SILIDER } from '../cssHandles'


const SliderBanner = ({ slider }) => {

  const handles = useCssHandles(CSS_HANDLES_SILIDER)



  return (

    <div className={`${handles.containterSlider}`} >
      <SliderLayout
        showPaginationDots="desktopOnly"
        showNavigationArrows="always"
        infinite={true}
        fullWidth={true}
        itemsPerPage={{ desktop: 1, phone: 1 }}
        blockClass="Slider-Banner-Principal"
        autoplay={{
          stopOnHover: true,
          timeout: 5000
        }}
      >

        {
          slider?.map((item, index) => (
            <BannerItem key={index} {...item} />
          ))
        }

      </SliderLayout>


    </div>
  )
}
SliderBanner.schema = SCHEMA
export default SliderBanner

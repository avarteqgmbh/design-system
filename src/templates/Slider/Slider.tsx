import React from 'react'
import { Slide, SlideItem } from './Slide'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Box } from '../../components'

export interface SliderProps {
  fullWidth?: boolean
  slides: SlideItem[]
}

export const Slider = (props: SliderProps): JSX.Element => {
  const { fullWidth = false, slides } = props

  return (
    <Box sx={{ maxWidth: fullWidth ? '100%' : 1200 }}>
      <Carousel
        autoPlay
        infiniteLoop
        stopOnHover
        showArrows={false}
        showStatus={false}
      >
        {slides &&
          slides.map((slide) => {
            return <Slide fullWidth={fullWidth} {...slide} />
          })}
      </Carousel>
    </Box>
  )
}

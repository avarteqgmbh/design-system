import React from 'react'
import { Slide, SlideItem } from './Slide'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

export interface SliderProps {
  slides: SlideItem[]
}

export const Slider = (props: SliderProps): JSX.Element => {
  const { slides } = props

  return (
    <Carousel autoPlay infiniteLoop showStatus={false}>
      {slides &&
        slides.map((slide) => {
          return <Slide {...slide} />
        })}
    </Carousel>
  )
}

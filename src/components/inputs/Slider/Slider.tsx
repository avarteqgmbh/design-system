import React from 'react'
import { Slider as MuiSlider, SliderProps } from '@material-ui/core'

export interface Slide {
  title: string
  subtitle: string
  src: string
  link?: string
  children?: React.ReactNode
}

export interface SliderPropsMui extends SliderProps {
  title?: string
  slides?: Slide
}
export function Slider(props: SliderPropsMui): JSX.Element {
  return <MuiSlider {...props} />
}

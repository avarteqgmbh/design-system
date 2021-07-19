import React from 'react'
import { Slider as MuiSlider, SliderProps } from '@material-ui/core'

export function Slider(props: SliderProps): JSX.Element {
  return <MuiSlider {...props} />
}

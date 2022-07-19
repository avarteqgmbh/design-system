import React from 'react'
import { Slider as MuiSlider, SliderProps } from '@mui/material'

export function Slider(props: SliderProps): JSX.Element {
  const { sx } = props

  return <MuiSlider {...props} sx={{ ...styles, ...sx }} />
}

const styles = {
  height: 6,
  '& .MuiSlider-thumb': {
    '&:before': {
      display: 'none'
    }
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: '32px',
    height: '32px',
    borderRadius: '50% 50% 50% 0',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)'
    },
    '& > *': {
      transform: 'rotate(45deg)'
    }
  },
  '& .MuiSlider-thumbColorPrimary': {
    '& .MuiSlider-valueLabel': {
      bgcolor: 'primary.main'
    }
  },
  '& .MuiSlider-thumbColorSecondary': {
    '& .MuiSlider-valueLabel': {
      bgcolor: 'secondary.main'
    }
  }
}

import React from 'react'
import {
  MobileStepper as MuiMobileStepper,
  MobileStepperProps as MuiMobileStepperProps
} from '@mui/material'

export function MobileStepper(props: MuiMobileStepperProps): JSX.Element {
  const { sx } = props
  return <MuiMobileStepper {...props} sx={{ ...styles, ...sx }} />
}

const styles = {
  '& .MuiMobileStepper-dot': {
    bgcolor: 'background.medium',
    '&.MuiMobileStepper-dotActive': {
      bgcolor: 'primary.main'
    }
  }
}

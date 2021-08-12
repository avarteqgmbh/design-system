import React from 'react'
import {
  MobileStepper as MuiMobileStepper,
  MobileStepperProps as MuiMobileStepperProps,
  makeStyles,
  createStyles
} from '@material-ui/core'

export function MobileStepper(props: MuiMobileStepperProps): JSX.Element {
  const classes = useStyles()

  return <MuiMobileStepper {...props} className={classes.root} />
}

const useStyles = makeStyles(() => {
  return createStyles({
    root: {}
  })
})

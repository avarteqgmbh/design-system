import React from 'react'
import {
  Step as MuiStep,
  StepProps as MuiStepProps,
  makeStyles,
  createStyles
} from '@material-ui/core'

export function Step(props: MuiStepProps): JSX.Element {
  const classes = useStyles()
  const { children } = props

  return (
    <MuiStep {...props} className={classes.root}>
      {children}
    </MuiStep>
  )
}

const useStyles = makeStyles(() => {
  return createStyles({
    root: {}
  })
})

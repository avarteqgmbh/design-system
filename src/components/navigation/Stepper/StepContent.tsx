import React from 'react'
import {
  StepContent as MuiStepContent,
  StepContentProps as MuiStepContentProps,
  makeStyles,
  createStyles
} from '@material-ui/core'

export function StepContent(props: MuiStepContentProps): JSX.Element {
  const classes = useStyles()
  const { children } = props

  return (
    <MuiStepContent {...props} className={classes.root}>
      {children}
    </MuiStepContent>
  )
}

const useStyles = makeStyles(() => {
  return createStyles({
    root: {}
  })
})

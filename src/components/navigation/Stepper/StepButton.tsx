import React from 'react'
import {
  StepButton as MuiStepButton,
  StepButtonProps as MuiStepButtonProps,
  makeStyles,
  createStyles
} from '@material-ui/core'

export function StepButton(props: MuiStepButtonProps): JSX.Element {
  const classes = useStyles()
  const { children } = props

  return (
    <MuiStepButton {...props} className={classes.root}>
      {children}
    </MuiStepButton>
  )
}

const useStyles = makeStyles(() => {
  return createStyles({
    root: {}
  })
})

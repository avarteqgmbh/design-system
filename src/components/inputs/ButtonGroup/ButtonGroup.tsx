import React from 'react'
import { ButtonGroup as MuiButtonGroup, ButtonGroupProps } from '@mui/material'
import { Theme } from '../../../theme/types'
import { makeStyles } from '../../../theme/ThemeProvider'

export function ButtonGroup(props: ButtonGroupProps): JSX.Element {
  const { className } = props
  const classes = useStyles()

  return (
    <MuiButtonGroup {...props} className={`${classes.root} ${className}`} />
  )
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      borderRadius: theme.radius.button,
      '& .MuiButton-root.MuiButton-outlinedPrimary': {
        borderColor: theme.palette.primary.main
      },
      '& .MuiButton-root.MuiButton-containedSecondary': {
        borderColor: theme.palette.background.border
      }
    }
  }
})

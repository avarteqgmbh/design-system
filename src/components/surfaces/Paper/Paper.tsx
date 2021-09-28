import React from 'react'
import { Paper as MuiPaper, PaperProps as MuiPaperProps } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export function Paper(props: MuiPaperProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiPaper
      classes={{
        root: classes.root
      }}
      {...props}
    />
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})

import React from 'react'
import { Typography as MuiTypography, TypographyProps } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export function Typography(props: TypographyProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiTypography
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

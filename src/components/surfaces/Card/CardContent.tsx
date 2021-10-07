import React from 'react'
import { CardContent as MuiCardContent, CardContentProps } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export function CardContent(props: CardContentProps): JSX.Element {
  const classes = useStyles()
  const { children } = props
  return (
    <MuiCardContent
      classes={{
        root: classes.root
      }}
      {...props}
    >
      {children}
    </MuiCardContent>
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})

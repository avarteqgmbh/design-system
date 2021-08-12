import React from 'react'
import {
  CardHeader as MuiCardHeader,
  CardHeaderProps,
  makeStyles
} from '@material-ui/core'
import { Theme } from '../../../theme/types'

export function CardHeader(props: CardHeaderProps): JSX.Element {
  const classes = useStyles()
  const { children } = props
  return (
    <MuiCardHeader
      classes={{
        root: classes.root
      }}
      {...props}
    >
      {children}
    </MuiCardHeader>
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})

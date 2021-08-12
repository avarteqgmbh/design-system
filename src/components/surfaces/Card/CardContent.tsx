import React from 'react'
import {
  CardContent as MuiCardContent,
  CardContentProps,
  makeStyles
} from '@material-ui/core'
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

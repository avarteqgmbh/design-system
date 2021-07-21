import React from 'react'
import {
  List as MuiList,
  ListProps as MuiListProps,
  makeStyles
} from '@material-ui/core'
import { Theme } from '../../../theme/types'

export function List(props: MuiListProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiList
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

import React from 'react'
import {
  MenuList as MuiMenuList,
  MenuListProps,
  makeStyles
} from '@material-ui/core'
import { Theme } from '../../../theme/types'

export function MenuList(props: MenuListProps): JSX.Element {
  const { children } = props
  const classes = useStyles()
  return (
    <MuiMenuList
      classes={{
        root: classes.root
      }}
      {...props}
    >
      {children}
    </MuiMenuList>
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})

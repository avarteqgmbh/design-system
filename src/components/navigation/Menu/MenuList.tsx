import React from 'react'
import { MenuList as MuiMenuList, MenuListProps } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
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

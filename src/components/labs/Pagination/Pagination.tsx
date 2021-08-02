import React from 'react'
import { Pagination as MuiPagination, PaginationProps } from '@material-ui/lab'

import { makeStyles } from '@material-ui/core'
import { Theme } from '../../../theme/types'

export function Pagination(props: PaginationProps): JSX.Element {
  const classes = useStyles()
  const { variant = 'outlined' } = props
  const { color = 'primary' } = props
  return (
    <MuiPagination
      classes={{
        root: classes.root
      }}
      {...props}
      variant={variant}
      color={color}
    />
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})

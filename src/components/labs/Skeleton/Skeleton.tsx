import React from 'react'
import { Skeleton as MuiSkeleton, SkeletonProps } from '@material-ui/lab'

import { makeStyles } from '@material-ui/core'
import { Theme } from '../../../theme/types'

export function Skeleton(props: SkeletonProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiSkeleton
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

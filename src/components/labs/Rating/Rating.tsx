import React from 'react'
import { Rating as MuiRating, RatingProps } from '@material-ui/lab'

import { makeStyles } from '@material-ui/core'
import { Theme } from '../../../theme/types'

export function Rating(props: RatingProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiRating
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

import React from 'react'
import { Rating as MuiRating } from '@mui/material'
import { RatingProps } from '@mui/lab'

export function Rating(props: RatingProps): JSX.Element {
  return <MuiRating {...props} />
}

import React from 'react'
import { Rating as MuiRating } from '@mui/material'
import { RatingProps } from '@mui/lab'

export function Rating(props: RatingProps): JSX.Element {
  const { sx } = props
  return <MuiRating {...props} sx={{ ...styles, ...sx }} />
}

const styles = {
  '& .MuiRating-icon.MuiRating-iconEmpty': {
    color: 'text.hint'
  }
}

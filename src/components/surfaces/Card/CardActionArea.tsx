import React from 'react'
import { CardActionArea as MuiCardActionArea, CardActionAreaProps } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '../../../theme/types'

export interface MuiCardActionAreaProps extends CardActionAreaProps {
  href?: string
}

export function CardActionArea(props: MuiCardActionAreaProps): JSX.Element {
  const classes = useStyles()
  const { children } = props
  return (
    <MuiCardActionArea
      classes={{
        root: classes.root
      }}
      {...props}
    >
      {children}
    </MuiCardActionArea>
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})

import React from 'react'
import { makeStyles, Button, Typography } from '@material-ui/core'

import { Theme } from '../theme/types'

export function Home(): JSX.Element {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography className={classes.h1} variant='h1'>
        Design System 2.0
      </Typography>
      <Typography variant='overline'>
        The next level anynines Design System providing a new Storybook package
        powered by Material UI.
      </Typography>
      <Button color='primary' variant='contained'>
        Something
      </Button>
    </div>
  )
}

const useStyles = makeStyles<Theme>((theme) => {
  return {
    root: {
      background: theme.palette.background.light
    },
    h1: {
      color: 'red'
    }
  }
})

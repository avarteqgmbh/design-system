import React from 'react'
import { Fab as MuiFab, FabProps as MuiFabProps } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export function FloatingActionButton(props: MuiFabProps): JSX.Element {
  const classes = useStyles()
  const { children } = props
  return (
    <MuiFab
      classes={{
        root: classes.root
      }}
      {...props}
    >
      {children}
    </MuiFab>
  )
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      boxShadow: 'none',
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: theme.palette.background.border,

      '&.MuiFab-default': {
        background: theme.palette.background.medium,
        color: theme.palette.text.primary
      },

      '&.MuiFab-primary': {
        background: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,

        '&:hover': {
          background: theme.palette.primary.dark,
          borderColor: theme.palette.primary.dark
        }
      },

      '&.MuiFab-secondary': {
        background: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,

        '&:hover': {
          background: theme.palette.secondary.dark,
          borderColor: theme.palette.secondary.dark
        }
      },

      '&:hover': {
        background: theme.palette.background.light,
        borderColor: theme.palette.background.light
      }
    }
  }
})

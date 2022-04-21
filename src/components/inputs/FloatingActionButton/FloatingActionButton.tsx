import React from 'react'
import { Fab as MuiFab, FabProps as MuiFabProps } from '@mui/material'

export function FloatingActionButton(props: MuiFabProps): JSX.Element {
  const { children, sx } = props

  return (
    <MuiFab
      sx={{
        ...sx,
        ...styles
      }}
      {...props}
    >
      {children}
    </MuiFab>
  )
}

const styles = {
  boxShadow: 'none',
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: 'background.border',

  '&.MuiFab-primary': {
    bgcolor: 'primary.light',
    borderColor: 'primary.main',
    color: 'primary.contrastText',
    '&:hover': {
      bgcolor: 'primary.dark',
      borderColor: 'primary.dark'
    }
  },

  '&.MuiFab-secondary': {
    bgcolor: 'secondary.main',
    borderColor: 'secondary.main',
    color: 'secondary.contrastText',

    '&:hover': {
      bgcolor: 'secondary.dark',
      borderColor: 'secondary.dark'
    }
  },

  '&:hover': {
    bgcolor: 'background.light',
    borderColor: 'background.light'
  }
}

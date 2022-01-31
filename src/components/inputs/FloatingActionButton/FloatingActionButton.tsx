import React from 'react'
import { Fab as MuiFab, FabProps as MuiFabProps } from '@mui/material'

export function FloatingActionButton(props: MuiFabProps): JSX.Element {
  const { children } = props
  return (
    <MuiFab
      sx={{
        bgcolor: 'bg.light',
        boxShadow: 'none',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'bg.border',

        '& .MuiSvgIcon-root': {
          color: 'text.primary'
        },

        '&:hover': {
          bgcolor: 'bg.medium'
        }
      }}
      {...props}
    >
      {children}
    </MuiFab>
  )
}

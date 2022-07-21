import React from 'react'
import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps
} from '@mui/material'

export function Dialog(props: MuiDialogProps): JSX.Element {
  const { sx } = props

  return (
    <MuiDialog
      BackdropProps={{
        sx: {
          backdropFilter: 'blur(6px)'
        }
      }}
      {...props}
      sx={{ ...styles, ...sx }}
    />
  )
}

const styles = {
  '& .MuiDialogActions-root': {
    padding: '16px 24px'
  }
}

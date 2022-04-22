import React from 'react'
import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps
} from '@mui/material'

export function Dialog(props: MuiDialogProps): JSX.Element {
  const { sx } = props

  return (
    <MuiDialog
      sx={{
        ...sx,
        ...styles
      }}
      {...props}
    />
  )
}

const styles = {
  '& .MuiDialogActions-root': {
    padding: '16px 24px'
  }
}

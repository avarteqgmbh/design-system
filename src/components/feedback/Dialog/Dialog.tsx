import React from 'react'
import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'

export function Dialog(props: MuiDialogProps): JSX.Element {
  const classes = useStyles()

  return (
    <MuiDialog
      classes={{
        root: classes.root
      }}
      {...props}
    />
  )
}

const useStyles = makeStyles(() => {
  return {
    root: {
      '& .MuiDialogActions-root': {
        padding: '16px 24px'
      }
    }
  }
})

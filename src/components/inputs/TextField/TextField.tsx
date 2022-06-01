/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps
} from '@mui/material'
import { Theme } from '../../../theme/types'

export function TextField(props: MuiTextFieldProps): JSX.Element {
  const { variant = 'outlined', sx } = props

  return (
    <MuiTextField
      // @ts-ignore
      sx={{ ...sx, ...styles }}
      variant={variant}
      {...props}
    />
  )
}

const styles = {
  borderRadius: (theme: Theme): string => {
    return `${theme.radius.medium}px`
  },
  '& svg': {
    color: 'text.primary'
  },
  '& .MuiInput-underline': {
    '&:before': {
      borderColor: 'background.border'
    }
  },
  '& .MuiOutlinedInput-root': {
    bgcolor: 'background.input'
  },
  '& .MuiFilledInput-root': {
    bgcolor: 'background.input',
    borderRadius: (theme: Theme): string => {
      return `${theme.radius.medium}px`
    },
    overflow: 'hidden',
    '&:before': {
      opacity: 0
    }
  },
  '& .MuiInputLabel-root': {
    color: 'text.secondary',
    '&.Mui-focused': {
      color: 'primary.main'
    }
  },
  '&:hover': {
    '& .MuiInputLabel-root': {
      color: 'text.primary'
    }
  }
}

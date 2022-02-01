import React from 'react'
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps
} from '@mui/material'

export function TextField(props: MuiTextFieldProps): JSX.Element {
  const { variant = 'outlined' } = props
  return (
    <MuiTextField
      sx={{
        bgcolor: 'inherit',
        borderRadius: '8px',

        '& .MuiFilledInput-root': {
          borderRadius: '8px',
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
      }}
      variant={variant}
      {...props}
    />
  )
}

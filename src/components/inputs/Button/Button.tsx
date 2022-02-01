import React from 'react'
import { Button as MuiButton, ButtonProps } from '@mui/material'

export const Button: React.FC<ButtonProps> = (props) => {
  const { variant = 'contained', color = 'primary' } = props
  return (
    <MuiButton
      variant={variant}
      color={color}
      sx={{
        '&.MuiButton-root': {
          fontFamily: 'Lato',
          fontWeight: 'bold',
          borderRadius: '8px'
        },
        '&.MuiButton-containedPrimary': {
          bgcolor: 'primary.main'
        },
        '&.MuiButton-textPrimary': {
          color: 'primary.main'
        },
        '&.MuiButton-outlinedPrimary': {
          color: 'primary.main',
          borderColor: 'primary.main'
        },
        '&.MuiButton-containedSecondary': {
          bgcolor: 'secondary.main'
        },
        '&.MuiButton-textSecondary': {
          color: 'secondary.main'
        },
        '&.MuiButton-outlinedSecondary': {
          color: 'secondary.main',
          borderColor: 'secondary.main'
        },
        '&.MuiButton-containedSuccess': {
          bgcolor: 'success.main'
        },
        '&.MuiButton-textSuccess': {
          color: 'success.main'
        },
        '&.MuiButton-outlinedSuccess': {
          color: 'success.main',
          borderColor: 'success.main'
        },
        '&.MuiButton-containedError': {
          bgcolor: 'error.main'
        },
        '&.MuiButton-textError': {
          color: 'error.main'
        },
        '&.MuiButton-outlinedError': {
          color: 'error.main',
          borderColor: 'error.main'
        },
        '&.MuiButton-containedWarning': {
          bgcolor: 'warning.main'
        },
        '&.MuiButton-textWarning': {
          color: 'warning.main'
        },
        '&.MuiButton-outlinedWarning': {
          color: 'warning.main',
          borderColor: 'warning.main'
        },
        '&.MuiButton-containedInfo': {
          bgcolor: 'info.main'
        },
        '&.MuiButton-textInfo': {
          color: 'info.main'
        },
        '&.MuiButton-outlinedInfo': {
          color: 'info.main',
          borderColor: 'info.main'
        },
        // eslint-disable-next-line react/destructuring-assignment
        ...props.sx
      }}
      {...props}
    />
  )
}

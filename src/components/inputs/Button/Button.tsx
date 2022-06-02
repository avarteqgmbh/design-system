import React from 'react'
import { Button as MuiButton, ButtonProps } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Button: React.FC<ButtonProps> = (props) => {
  const { variant = 'contained', color = 'primary' } = props

  return <StyledButton {...props} variant={variant} color={color} />
}

const StyledButton = styled(MuiButton)(({ theme }) => {
  return {
    display: 'flex',
    textTransform: 'none',
    padding: theme.spacing(3, 5),
    fontWeight: 'bold',
    borderRadius: `${theme.radius.button}px`,
    boxShadow: 'none',

    '&.MuiButton-containedSecondary': {
      bgcolor: 'background.light',
      color: 'text.primary'
    },

    '&.Mui-disabled': {
      bgcolor: 'background.medium',
      color: 'text.disabled'
    },

    '&.MuiButton-sizeLarge': {
      padding: theme.spacing(4, 6)
    },

    '&.MuiButton-sizeSmall': {
      padding: theme.spacing(2, 4)
    }
  }
})

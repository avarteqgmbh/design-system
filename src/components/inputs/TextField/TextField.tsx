import React from 'react'
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps
} from '@mui/material'
import { styled } from '@mui/material/styles'

export const TextField: React.FC<MuiTextFieldProps> = (props) => {
  const { variant = 'outlined' } = props

  return <StyledMuiTextField variant={variant} {...props} />
}

const StyledMuiTextField = styled(MuiTextField)(({ theme }) => {
  return {
    borderRadius: theme.radius.medium,
    '& svg': {
      color: theme.palette.text.primary
    },
    '& .MuiInput-underline': {
      '&:before': {
        borderColor: theme.palette.background.border
      }
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: theme.palette.background.input
    },
    '& .MuiFilledInput-root': {
      backgroundColor: theme.palette.background.input,
      borderRadius: theme.radius.medium,
      overflow: 'hidden',
      '&:before': {
        opacity: 0
      }
    },
    '& .MuiInputLabel-root': {
      color: theme.palette.text.secondary,
      '&.Mui-focused': {
        color: theme.palette.primary.main
      }
    },
    '&:hover': {
      '& .MuiInputLabel-root': {
        color: theme.palette.text.primary
      }
    }
  }
})

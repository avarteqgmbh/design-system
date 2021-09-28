import React from 'react'
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '../../../theme/types'

export function TextField(props: MuiTextFieldProps): JSX.Element {
  const { variant = 'outlined' } = props
  const classes = useStyles()
  return (
    <MuiTextField
      classes={{
        root: classes.root
      }}
      variant={variant}
      {...props}
    />
  )
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      background: theme.palette.background.default,
      borderRadius: theme.radius.medium,

      '& .MuiSvgIcon-root': {
        color: theme.palette.text.primary
      },

      '&:hover, &:focus-within': {
        background: theme.palette.background.medium
      },

      '& .MuiInputBase-root': {
        borderRadius: theme.radius.medium
      },

      '& fieldset.MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent',
        border: 'none'
      },

      '& .MuiOutlinedInput-root': {
        background: 'inherit',
        borderRadius: theme.radius.medium,
        overflow: 'hidden',
        borderColor: theme.palette.background.border,
        borderStyle: 'solid',
        borderWidth: 1,
        transitionDuration: '280ms',
        transitionProperty: 'background',
        transitionTimingFunction: 'ease-in-out',

        '& .MuiOutlinedInput-input.MuiOutlinedInput-inputAdornedStart': {
          paddingLeft: theme.spacing(3)
        },

        '& .MuiInputLabel-root': {
          padding: theme.spacing(2, 3),
          background: 'transparent'
        },

        '&:hover, &:focus-within': {
          background: theme.palette.background.light
        },

        '&:focus-within': {
          borderColor: theme.palette.primary.main
        }
      },

      '& .MuiFormLabel-root.MuiInputLabel-shrink': {
        color: theme.palette.text.primary,
        transform: 'translate(16px, 8px) scale(0.75)'
      },

      '&:focus-within': {
        '& .MuiFormLabel-root.MuiInputLabel-shrink': {
          borderColor: theme.palette.primary.main
        }
      },

      '&:hover': {
        '& .MuiFormLabel-root.MuiInputLabel-shrink': {
          background: theme.palette.background.paper,
          color: theme.palette.text.primary
        }
      }
    }
  }
})

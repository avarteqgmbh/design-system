import React from 'react'
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  makeStyles
} from '@material-ui/core'
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

        '& MuiInputLabel-root': {
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
        background: theme.palette.background.paper,
        padding: '6px 8px',
        borderRadius: 20,
        color: theme.palette.text.primary,
        boxShadow: theme.shadows[2],
        transform: 'translate(8px, -10px) scale(0.75)'
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

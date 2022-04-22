import React from 'react'
import { Button as MuiButton, ButtonProps } from '@mui/material'

export function Button(props: ButtonProps): JSX.Element {
  const { variant = 'contained', color = 'primary', sx } = props

  return (
    <MuiButton
      sx={{
        ...sx,
        ...styles
      }}
      variant={variant}
      color={color}
      {...props}
    />
  )
}

const styles = {
  display: 'flex',
  paddingTop: 3,
  paddingBottom: 3,
  paddingLeft: 5,
  paddingRight: 5,
  borderRadius: 'radius.button',
  boxShadow: 'none',
  '&:hover': {
    bgcolor: 'shadows[0]'
  },

  '&.MuiButton-text': {
    borderColor: 'transparent',
    bgcolor: 'transparent',
    '&:hover': {
      bgcolor: 'background.light'
    }
  },
  '&.MuiButton-textPrimary': {
    borderColor: 'transparent',
    bgcolor: 'transparent',
    color: 'primary.main',
    '&:hover': {
      color: 'common.white',
      bgcolor: 'primary.main'
    }
  },
  '&.MuiButton-sizeLarge': {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 6,
    paddingRight: 6
  },
  '&.MuiButton-sizeSmall': {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 4,
    paddingRight: 4
  },
  '&.MuiButton-outlined': {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'background.border',
    color: 'text.primary',
    '&:hover': {
      bgcolor: 'background.light',
      borderColor: 'text.primary'
    }
  },
  '&.MuiButton-outlinedPrimary': {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'primary.main',
    color: 'primary.main',
    '&:hover': {
      bgcolor: 'primary.main',
      color: 'common.white',
      borderColor: 'primary.dark'
    }
  },
  '&.MuiButton-outlinedSecondary': {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'secondary.main',
    color: 'secondary.main',
    '&:hover': {
      bgcolor: 'secondary.main',
      color: 'common.white',
      borderColor: 'secondary.dark'
    }
  },
  '&.MuiButton-contained': {
    bgcolor: 'background.paper',
    color: 'text.primary',
    '&:hover': {
      bgcolor: 'background.light'
    }
  },
  '&.MuiButton-containedPrimary': {
    bgcolor: 'primary.main',
    color: 'common.white',
    borderColor: 'primary.light',
    '&:hover': {
      color: 'common.white',
      bgcolor: 'primary.dark'
    }
  },
  '&.MuiButton-containedSecondary': {
    bgcolor: 'secondary.light',
    '&:hover': {
      bgcolor: 'secondary.main'
    }
  },
  '&.MuiButton-disabled': {
    '&$disabled': {
      color: 'text.disabled',
      bgcolor: 'background.default',
      borderColor: 'background.border'
    }
  }
}

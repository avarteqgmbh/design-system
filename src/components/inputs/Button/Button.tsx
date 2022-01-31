import React from 'react'
import { Box, Button as MuiButton, ButtonProps } from '@mui/material'

export const Button: React.FC<ButtonProps> = (props) => {
  const { variant = 'contained', color = 'primary' } = props
  return (
    <Box
      sx={{
        '& .MuiButton-root': {
          fontFamily: (theme): string => {
            return `${theme.typography.fontFamily}`
          },
          fontWeight: 'bold',
          borderRadius: (theme): string => {
            return `${theme.radius.button}px`
          }
        },
        '& .MuiButton-containedPrimary': {
          bgcolor: 'primary.main'
        },
        '& .MuiButton-textPrimary': {
          color: 'primary.main'
        },
        '& .MuiButton-outlinedPrimary': {
          color: 'primary.main',
          borderColor: 'primary.main'
        },
        '& .MuiButton-containedSecondary': {
          bgcolor: 'secondary.main'
        },
        '& .MuiButton-textSecondary': {
          color: 'secondary.main'
        },
        '& .MuiButton-outlinedSecondary': {
          color: 'secondary.main',
          borderColor: 'secondary.main'
        },
        '& .MuiButton-containedSuccess': {
          bgcolor: 'success.main'
        },
        '& .MuiButton-textSuccess': {
          color: 'success.main'
        },
        '& .MuiButton-outlinedSuccess': {
          color: 'success.main',
          borderColor: 'success.main'
        },
        '& .MuiButton-containedError': {
          bgcolor: 'error.main'
        },
        '& .MuiButton-textError': {
          color: 'error.main'
        },
        '& .MuiButton-outlinedError': {
          color: 'error.main',
          borderColor: 'error.main'
        },
        '& .MuiButton-containedWarning': {
          bgcolor: 'warning.main'
        },
        '& .MuiButton-textWarning': {
          color: 'warning.main'
        },
        '& .MuiButton-outlinedWarning': {
          color: 'warning.main',
          borderColor: 'warning.main'
        },
        '& .MuiButton-containedInfo': {
          bgcolor: 'info.main'
        },
        '& .MuiButton-textInfo': {
          color: 'info.main'
        },
        '& .MuiButton-outlinedInfo': {
          color: 'info.main',
          borderColor: 'info.main'
        }
      }}
    >
      <MuiButton variant={variant} color={color} {...props} />
    </Box>
  )
}

// display: 'flex',
// paddingTop: 3,
// paddingBottom: 3,
// paddingLeft: 5,
// paddingRight: 5,
// borderWidth: 1,
// borderStyle: 'solid',
// borderColor: 'bg.border'
// borderRadius: (theme): string => {
//   return `${theme.radius.button}px`
// },
// bgcolor: 'bg.paper',
// boxShadow: 'none'
// text: {
//   borderColor: 'transparent',
//   bgcolor: 'transparent',
//   '&:hover': {
//     bgcolor: 'bg.light'
//   }
// },
// textPrimary: {
//   borderColor: 'transparent',
//   bgcolor: 'transparent',
//   color: 'primary.main',
//   '&:hover': {
//     color: 'common.white',
//     bgcolor: 'primary.main'
//   }
// },
// sizeLarge: {
//   paddingTop: 4,
//   paddingBottom: 4,
//   paddingLeft: 6,
//   paddingRight: 6
// },
// sizeSmall: {
//   paddingTop: 2,
//   paddingBottom: 2,
//   paddingLeft: 4,
//   paddingRight: 4
// },
// outlined: {
//   borderColor: 'text.primary',
//   color: 'text.primary',
//   '&:hover': {
//     bgcolor: 'bg.light',
//     borderColor: 'text.primary'
//   }
// },
// outlinedPrimary: {
//   borderColor: 'primary.main',
//   color: 'primary.main',
//   '&:hover': {
//     bgcolor: 'primary.main',
//     color: 'bg.paper',
//     borderColor: 'primary.dark'
//   }
// },
// contained: {
//   bgcolor: 'bg.paper',
//   color: 'text.primary',
//   '&:hover': {
//     bgcolor: 'bg.light'
//   }
// },
// containedPrimary: {
//   bgcolor: 'primary.main',
//   color: 'common.white',
//   borderColor: 'primary.light',
//   '&:hover': {
//     color: 'common.white',
//     bgcolor: 'primary.dark'
//   }
// },
// containedSecondary: {
//   bgcolor: 'bg.light',
//   '&:hover': {
//     bgcolor: 'bg.medium'
//   }
// },
// disabled: {
//   '&$disabled': {
//     color: 'text.disabled',
//     bgcolor: 'bg.default',
//     borderColor: 'bg.border'
//   }
// }

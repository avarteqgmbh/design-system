import React from 'react'
import { Box } from '../../components'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded'

export interface ToggleModeProps {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
  size?: 'small' | 'medium' | 'large'
}

export const ToggleMode: React.FC<ToggleModeProps> = ({
  darkMode,
  setDarkMode,
  size = 'medium'
}) => {
  return (
    <Box
      onClick={(): void => {
        return setDarkMode(!darkMode)
      }}
      sx={classes.root}
      className={size}
    >
      {darkMode ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </Box>
  )
}

const classes = {
  root: {
    height: 40,
    width: 40,
    bgcolor: 'background.light',
    border: '1px solid',
    borderColor: 'background.medium',
    borderRadius: '8px',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    '&.small': {
      height: 30,
      width: 30
    },
    '&.large': {
      height: 50,
      width: 50
    },
    '& .MuiSelect-select': {
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center'
    },
    '& svg': {
      color: 'text.primary',
      maxWidth: 20
    },
    '&:hover': {
      bgcolor: 'background.medium'
    }
  }
}

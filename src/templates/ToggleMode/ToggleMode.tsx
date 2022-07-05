import React from 'react'
import { Box } from '../../components'
import { styled } from '@mui/material/styles'
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
    <StyledToggleMode
      onClick={(): void => {
        return setDarkMode(!darkMode)
      }}
      className={size}
    >
      {darkMode ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </StyledToggleMode>
  )
}

const StyledToggleMode = styled(Box)(({ theme }) => {
  return {
    height: 40,
    width: 40,
    backgroundColor: theme.palette.background.light,
    border: '1px solid',
    borderColor: theme.palette.background.medium,
    borderRadius: theme.radius.button,
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
      color: theme.palette.text.primary,
      maxWidth: 20
    },
    '&:hover': {
      backgroundColor: theme.palette.background.medium
    }
  }
})

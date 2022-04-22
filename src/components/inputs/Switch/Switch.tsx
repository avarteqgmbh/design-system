import React from 'react'
import {
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps
} from '@mui/material'

export interface SwitchProps extends MuiSwitchProps {
  inline?: boolean | undefined
}

export function Switch(props: SwitchProps): JSX.Element {
  const { inline, sx } = props

  return (
    <MuiSwitch
      className={inline ? 'inline' : ''}
      sx={{
        ...sx,
        ...styles
      }}
      {...props}
    />
  )
}

const styles = {
  '&.inline': {
    padding: 8,
    '& .MuiSwitch-track': {
      borderRadius: 22 / 2,
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 16,
        height: 16
      }
    },
    '& .MuiSwitch-thumb': {
      boxShadow: 'none',
      width: 16,
      height: 16,
      margin: 2
    }
  }
}

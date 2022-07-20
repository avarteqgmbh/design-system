import React from 'react'
import {
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps
} from '@mui/material'
import { removeKeysFromProps } from '../../../util'

export interface SwitchProps extends MuiSwitchProps {
  inline?: boolean | undefined
}

export function Switch(props: SwitchProps): JSX.Element {
  const { inline, sx } = props

  const muiProps = removeKeysFromProps(props as Record<string, unknown>, [
    'inline'
  ])

  return (
    <MuiSwitch
      className={inline ? 'inline' : ''}
      {...muiProps}
      sx={{ ...styles, ...sx }}
    />
  )
}

const styles = {
  '& .MuiSwitch-track': {
    bgcolor: 'text.hint',
    opacity: 1
  },
  '&.inline': {
    padding: '8px',
    '& .MuiSwitch-track': {
      borderRadius: 22 / 2,
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '16px',
        height: '16px'
      }
    },
    '& .MuiSwitch-thumb': {
      boxShadow: 'none',
      width: '16px',
      height: '16px',
      margin: '2px'
    }
  }
}

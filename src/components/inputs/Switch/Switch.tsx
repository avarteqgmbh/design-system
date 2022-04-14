import React from 'react'
import {
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export interface SwitchProps extends MuiSwitchProps {
  inline?: boolean | undefined
}

export function Switch(props: SwitchProps): JSX.Element {
  const classes = useStyles()
  const { inline } = props

  return (
    <MuiSwitch
      classes={{
        root: classes.root
      }}
      className={inline ? 'inline' : ''}
      {...props}
    />
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {
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
  }
})

import React from 'react'
import {
  Select as MuiSelect,
  SelectProps as MuiSelectProps
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export function Select(props: MuiSelectProps): JSX.Element {
  const classes = useStyles()
  const { variant = 'outlined' } = props
  return (
    <MuiSelect
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
      '& .MuiSelect-iconFilled': {
        color: theme.palette.text.primary
      }
    }
  }
})

import React from 'react'
import MuiBottomNavigationAction, {
  BottomNavigationActionProps as MuiBottomNavigationActionProps
} from '@mui/material/BottomNavigationAction'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export interface BottomNavigationActionProps
  extends MuiBottomNavigationActionProps {
  counter?: boolean
}

const BottomNavigationAction: React.FC<BottomNavigationActionProps> = (
  props
) => {
  const classes = useStyles()
  const { counter } = props

  return (
    <MuiBottomNavigationAction
      className={counter ? classes.counter : ''}
      {...props}
    />
  )
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    counter: {
      '&:after': {
        position: 'absolute',
        content: '""',
        display: 'block',
        borderStyle: 'solid',
        width: 10,
        height: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: theme.palette.background.paper,
        background: theme.palette.primary.main,
        transform: 'translate(14px, -16px)',
        boxSizing: 'content-box'
      }
    }
  }
})

export default BottomNavigationAction

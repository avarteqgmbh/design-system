import React from 'react'
import MuiBottomNavigationAction, {
  BottomNavigationActionProps as MuiBottomNavigationActionProps
} from '@mui/material/BottomNavigationAction'
import { styled } from '@mui/material/styles'

export interface BottomNavigationActionProps
  extends MuiBottomNavigationActionProps {
  counter?: boolean
}

const BottomNavigationAction: React.FC<BottomNavigationActionProps> = (
  props
) => {
  const { counter } = props

  return (
    <StyledBottomNavigation className={counter ? 'counter' : ''} {...props} />
  )
}

const StyledBottomNavigation = styled(MuiBottomNavigationAction)(
  ({ theme }) => {
    return {
      '&.counter': {
        '&:after': {
          position: 'absolute',
          content: '""',
          display: 'block',
          borderStyle: 'solid',
          width: '10px',
          height: '10px',
          borderRadius: theme.radius.button,
          borderWidth: '2px',
          borderColor: theme.palette.background.paper,
          backgroundColor: theme.palette.primary.main,
          transform: 'translate(14px, -16px)',
          boxSizing: 'content-box'
        }
      }
    }
  }
)

export default BottomNavigationAction

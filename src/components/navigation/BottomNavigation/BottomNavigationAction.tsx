import React from 'react'
import MuiBottomNavigationAction, {
  BottomNavigationActionProps as MuiBottomNavigationActionProps
} from '@mui/material/BottomNavigationAction'
import { styled } from '@mui/material/styles'
import { removeKeysFromProps } from '../../../util'

export interface BottomNavigationActionProps
  extends MuiBottomNavigationActionProps {
  counter?: boolean
}

const BottomNavigationAction: React.FC<BottomNavigationActionProps> = (
  props
) => {
  const { counter } = props

  const muiProps = removeKeysFromProps(props as Record<string, unknown>, [
    'counter'
  ])

  return (
    <StyledBottomNavigation
      className={counter ? 'counter' : ''}
      {...muiProps}
    />
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

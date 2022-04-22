import React from 'react'
import MuiBottomNavigationAction, {
  BottomNavigationActionProps as MuiBottomNavigationActionProps
} from '@mui/material/BottomNavigationAction'

export interface BottomNavigationActionProps
  extends MuiBottomNavigationActionProps {
  counter?: boolean
}

const BottomNavigationAction: React.FC<BottomNavigationActionProps> = (
  props
) => {
  const { counter, sx } = props

  return (
    <MuiBottomNavigationAction
      className={counter ? 'counter' : ''}
      sx={{ ...sx, ...styles }}
      {...props}
    />
  )
}

const styles = {
  '&.counter': {
    '&:after': {
      position: 'absolute',
      content: '""',
      display: 'block',
      borderStyle: 'solid',
      width: '10px',
      height: '10px',
      borderRadius: '10px',
      borderWidth: '2px',
      borderColor: 'background.paper',
      bgcolor: 'primary.main',
      transform: 'translate(14px, -16px)',
      boxSizing: 'content-box'
    }
  }
}

export default BottomNavigationAction

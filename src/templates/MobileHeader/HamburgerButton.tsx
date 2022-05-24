import React from 'react'

import { Box } from '../../components'
import { MenuItem } from '../Header/MenuItem'

export interface HamburgerButtonProps {
  mainMenuActive?: boolean
  toggleMainMenu?: () => void
}

export const HamburgerButton: React.FC<HamburgerButtonProps> = React.memo(
  (props) => {
    const { mainMenuActive, toggleMainMenu } = props

    return (
      <MenuItem
        lastItem
        onClick={toggleMainMenu && toggleMainMenu}
        icon={
          <Box sx={classes.wrapper} className={mainMenuActive ? 'active' : ''}>
            <Box sx={classes.pipe} className='pipe' />
            <Box sx={classes.pipe} className='pipe' />
            <Box sx={classes.pipe} className='pipe' />
          </Box>
        }
        size='small'
      />
    )
  }
)

const classes = {
  root: {
    background: 'transparent'
  },

  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: 18,
    height: 18,

    '&.active': {
      '& .pipe': {
        '&:first-child': {
          top: 8,
          left: 0,
          width: 18,
          transform: 'rotate(-135deg)'
        },

        '&:nth-child(2)': {
          left: 10,
          opacity: 0,
          width: 0
        },

        '&:nth-child(3)': {
          bottom: 8,
          left: 0,
          width: 18,
          transform: 'rotate(135deg)'
        }
      }
    }
  },

  pipe: {
    position: 'absolute',
    left: 2,
    bgcolor: 'text.primary',
    width: 16,
    height: 2,
    borderRadius: 2,
    transition: 'var(--transition)',

    '&:first-child': {
      top: 3
    },

    '&:nth-child(2)': {
      width: 13
    },

    '&:nth-child(3)': {
      bottom: 3,
      width: 10
    }
  }
}

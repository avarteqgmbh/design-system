import React from 'react'
import { Box, Typography, Icon } from '@mui/material'

import { ChevronRight } from '@mui/icons-material'

interface Props {
  active: boolean
  label: string
  onClick: () => void
  setActiveCategory?: (label: string) => void
  hasChildren?: boolean
}

const Item: React.FC<Props> = (props) => {
  const { active, label, onClick, setActiveCategory, hasChildren } = props

  return (
    <Box
      className={active ? 'active' : ''}
      sx={styles}
      onMouseEnter={(): void => {
        return setActiveCategory && setActiveCategory(label)
      }}
      onClick={onClick}
    >
      <Typography variant='body2' color='textSecondary' className='label'>
        {label}
      </Typography>
      {hasChildren && (
        <Icon
          sx={{
            opacity: 0,
            color: active ? 'primary.contrastText' : 'primary.main',
            transition: 'all ease-in-out 200ms'
          }}
          className='icon'
        >
          <ChevronRight />
        </Icon>
      )}
    </Box>
  )
}

const styles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
  borderRadius: '8px',
  transition: 'all ease-in-out 200ms',
  p: 2,
  pl: 0,

  '&:hover': {
    bgcolor: 'background.default',
    pl: 3,
    boxShadow: 1,

    '& .icon': {
      opacity: 1
    }
  },

  '&.active': {
    bgcolor: 'primary.main',
    pl: 3,

    '& .label': {
      color: 'primary.contrastText'
    },

    '&:hover': {
      '& .label': {
        color: 'primary.contrastText'
      }
    }
  }
}

export default Item

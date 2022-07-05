import React from 'react'
import { styled } from '@mui/material/styles'
import { Box, Typography, Icon } from '@mui/material'

import ChevronRight from '@mui/icons-material/ChevronRight'

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
    <StyledShopNavItem
      className={active ? 'active' : ''}
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
    </StyledShopNavItem>
  )
}

const StyledShopNavItem = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: theme.radius.button,
    transition: 'all ease-in-out 200ms',
    padding: theme.spacing(2),
    paddingLeft: 0,

    '&:hover': {
      backgroundColor: theme.palette.background.default,
      paddingLeft: theme.spacing(3),

      '& .icon': {
        opacity: 1
      }
    },

    '&.active': {
      backgroundColor: theme.palette.primary.main,
      paddingLeft: theme.spacing(3),

      '& .label': {
        color: theme.palette.primary.contrastText
      },

      '&:hover': {
        '& .label': {
          color: theme.palette.primary.contrastText
        }
      }
    }
  }
})

export default Item

import React from 'react'

import { Box, MenuItem, Typography } from '../../../components'
import ChevronLeft from '@mui/icons-material/ChevronLeft'
import ChevronRight from '@mui/icons-material/ChevronRight'

export interface MobileShopNavItemProps {
  active?: boolean
  label: string
  linkTo: () => void
  backToMain?: () => void
  onClickChildren?: () => void
  count?: number
}

export const MobileShopNavItem = (
  props: MobileShopNavItemProps
): JSX.Element => {
  const {
    active = false,
    label,
    linkTo,
    count = 0,
    onClickChildren,
    backToMain
  } = props

  return (
    <MenuItem className={`${active ? 'active' : ''}`} sx={classes.root}>
      {backToMain && (
        <Box
          className='button'
          sx={classes.button}
          onClick={(): void => {
            backToMain()
          }}
        >
          <ChevronLeft />
        </Box>
      )}
      <Box
        display='flex'
        flex={1}
        onClick={(): void => {
          linkTo()
        }}
        px={3}
      >
        <Typography mr={2} sx={{ fontSize: 14 }} className='categoryLabel'>
          {label}
        </Typography>
        <Typography
          sx={{ fontSize: 14 }}
          color='text.hint'
          className='productCount'
        >
          {`(${count || ''})`}
        </Typography>
      </Box>
      {onClickChildren && (
        <Box
          className='button'
          sx={classes.button}
          onClick={(): void => {
            onClickChildren()
          }}
        >
          <ChevronRight />
        </Box>
      )}
    </MenuItem>
  )
}

const classes = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 40,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'background.border',
    bgcolor: 'background.light',
    overflow: 'hidden',
    p: 0,

    '&.active': {
      bgcolor: 'primary.main',
      borderColor: 'primary.dark',
      color: 'primary.contrastText',
      '& .button': {
        bgcolor: 'primary.dark'
      },
      '& .categoryLabel': {
        color: 'primary.contrastText'
      },
      '& .productCount': {
        color: 'primary.contrastText',
        opacity: 0.5
      }
    }
  },
  button: {
    height: 40,
    width: 40,
    boxSizing: 'border-box',
    bgcolor: 'background.border',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

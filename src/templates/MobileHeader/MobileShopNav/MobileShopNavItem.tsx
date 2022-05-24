import React from 'react'

import { Box, Typography } from '../../../components'
import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded'
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded'

interface Props {
  label: string
  linkTo: () => void
  backToMain?: () => void
  onClickChildren?: () => void
  count?: number
}

export const MobileShopNavItem = (props: Props): JSX.Element => {
  const { label, linkTo, count = 0, onClickChildren, backToMain } = props

  return (
    <Box className={`${backToMain ? 'active' : ''}`} p={0} sx={classes.root}>
      {backToMain && (
        <Box
          sx={classes.button}
          ml={3}
          onClick={(): void => {
            backToMain()
          }}
        >
          <ArrowLeftRoundedIcon />
        </Box>
      )}
      <Box
        display='flex'
        flex={1}
        onClick={(): void => {
          linkTo()
        }}
        p={3}
      >
        <Typography mr={2}>{label}</Typography>
        <Typography sx={{ opacity: 0.66 }}>{`(${count || ''})`}</Typography>
      </Box>
      {onClickChildren && (
        <Box
          sx={classes.button}
          mr={3}
          onClick={(): void => {
            onClickChildren()
          }}
        >
          <ArrowRightRoundedIcon />
        </Box>
      )}
    </Box>
  )
}

const classes = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 2,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'background.border',
    backgroundColor: 'background.default',
    overflow: 'hidden',

    '&.active': {
      backgroundColor: 'primary.main',
      borderColor: 'primary.dark',

      '& .MuiTypography-root': {
        color: 'common.white',
        fontWeight: 800
      }
    }
  },
  button: {
    borderRadius: 1,
    height: 32,
    width: 32,
    padding: 4,
    boxSizing: 'border-box',
    backgroundColor: 'background.paper',
    boxShadow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

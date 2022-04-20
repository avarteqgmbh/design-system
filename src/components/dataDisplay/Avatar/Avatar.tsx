import React from 'react'
import {
  Avatar as MuiAvatar,
  AvatarProps as MuiAvatarProps
} from '@mui/material'
import { Badge } from '../Badge/Badge'

import { styled } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export interface AvatarProps extends MuiAvatarProps {
  badge?: boolean | undefined
}

const StyledBadge = styled(Badge)(({ theme }) => {
  return {
    '& .MuiBadge-badge': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
    }
  }
})

export function Avatar(props: AvatarProps): JSX.Element {
  const classes = useStyles()
  const { badge } = props

  return badge ? (
    <StyledBadge
      overlap='circular'
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant='dot'
    >
      <MuiAvatar
        classes={{
          root: classes.root
        }}
        {...props}
      />
    </StyledBadge>
  ) : (
    <MuiAvatar
      classes={{
        root: classes.root
      }}
      {...props}
    />
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})

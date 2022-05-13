import React from 'react'
import TextTruncate from 'react-text-truncate'
import { AnyIcon, Box, Typography } from '../../components'

export interface UserMenuItemProps {
  active?: boolean
  avatar?: string
  title: string
  subtitle?: string
  onClick?: () => void
}

export const UserMenuItem = (props: UserMenuItemProps): JSX.Element => {
  const { active = false, avatar, title, subtitle, onClick } = props
  const classes = {
    root: {
      display: 'flex',
      alignItems: 'center',
      borderRadius: '8px',
      cursor: 'pointer',
      bgcolor: 'background.light',
      color: 'text.primary',
      overflow: 'hidden',
      minHeight: 48,
      pr: 3,
      '&:hover, &.active': {
        bgcolor: 'background.medium'
      }
    },
    avatarWrapper: {
      backgroundImage: `url(${avatar})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: 48,
      width: 48
    }
  }

  return (
    <Box
      className={active ? 'active' : ''}
      sx={classes.root}
      onClick={(): void => {
        return onClick && onClick()
      }}
    >
      <Box sx={classes.avatarWrapper} />
      <Box sx={{ pl: 2, pr: 3, minWidth: 100, maxWidth: 160 }}>
        <Typography variant='subtitle1' color='textPrimary' fontSize={14}>
          <TextTruncate line={1} truncateText='…' text={title} />
        </Typography>
        {subtitle && (
          <Typography variant='caption' color='textSecondary' fontSize={12}>
            <TextTruncate line={1} truncateText='…' text={subtitle} />
          </Typography>
        )}
      </Box>
      <AnyIcon icon='caretDown' />
    </Box>
  )
}

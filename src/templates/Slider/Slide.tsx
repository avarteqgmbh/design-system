/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import TextTruncate from 'react-text-truncate'
import { Theme } from '../../theme/types'
import { Box, Chip, Typography } from '../../components'

export interface SlideItem {
  title: string
  subtitle?: string
  description?: string
  onClick?: () => void
  fullWidth?: boolean
  image?: string
  tags: string[]
}

export const Slide = (props: SlideItem): JSX.Element => {
  const {
    title,
    subtitle,
    description,
    onClick,
    fullWidth = false,
    image,
    tags
  } = props

  const gradientBgImage = (theme: Theme): string | undefined => {
    return theme.palette.background.gradient
  }

  const classes = {
    root: {
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      color: 'common.white',
      borderRadius: !fullWidth && '8px',
      height: 360,
      backgroundImage: image ? `url(${image})` : gradientBgImage,
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    },
    contentWrapper: {
      height: 'inherit',
      minWidth: { xs: 0, lg: 1200 },
      boxSizing: 'border-box',
      p: fullWidth ? 4 : 6,
      pb: 7,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'stretch'
    },
    titleWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    title: {
      color: image ? 'common.white' : 'text.primary',
      textShadow: image ? '0 0 4px #000' : ''
    },
    subTitle: {
      textAlign: 'left',
      color: image ? 'grey.100' : 'text.secondary',
      textShadow: image ? '0 0 4px #000' : ''
    }
  }

  return (
    <Box
      // @ts-ignore
      sx={classes.root}
      onClick={(): void => {
        return onClick && onClick()
      }}
      tabIndex={0}
    >
      <Box sx={{ position: 'absolute', top: 10, right: 10 }}>
        {tags && (
          <Box display='flex'>
            {tags.map((tag) => {
              return (
                <Chip
                  color='primary'
                  label={tag}
                  size='small'
                  sx={{ mt: 2, mr: 2 }}
                />
              )
            })}
          </Box>
        )}
      </Box>
      <Box sx={classes.contentWrapper}>
        <Box sx={classes.titleWrapper}>
          {subtitle && (
            <Typography sx={classes.subTitle} gutterBottom variant='body2'>
              {subtitle}
            </Typography>
          )}
          <Typography sx={classes.title} gutterBottom variant='h4'>
            {title}
          </Typography>
          {description && (
            <Typography sx={classes.subTitle}>
              <TextTruncate line={3} truncateText='…' text={description} />
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  )
}

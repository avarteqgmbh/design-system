/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import { Theme } from '../../theme/types'
import { Box, Chip, Typography } from '../../components'

export interface SlideItem {
  title: string
  subtitle: string
  description: string
  onClick: () => void
  image: string
  tags: string[]
}

export const Slide = (props: SlideItem): JSX.Element => {
  const { title, subtitle, description, onClick, image, tags } = props

  const gradientBgImage = (theme: Theme): string | undefined => {
    return theme.palette.background.gradient
  }

  const classes = {
    root: {
      bgcolor: 'gradients.midnight',
      color: 'common.white',
      height: 360,
      backgroundImage: image ? `url(${image})` : gradientBgImage,
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    },
    contentWrapper: {
      height: 'inherit',
      boxSizing: 'border-box',
      p: 4,
      pb: 6,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'stretch'
    },
    title: {
      color: image ? 'common.white' : 'text.primary',
      textShadow: image ? '0 0 4px #000' : ''
    },
    subTitle: {
      color: image ? 'grey.100' : 'text.secondary',
      textShadow: image ? '0 0 4px #000' : ''
    }
  }

  return (
    <Box
      // @ts-ignore
      sx={classes.root}
      onClick={(): void => {
        onClick()
      }}
      tabIndex={0}
    >
      <Box sx={classes.contentWrapper}>
        <Box
          sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}
        >
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
        <Box>
          {subtitle && (
            <Typography sx={classes.subTitle} gutterBottom variant='body2'>
              {subtitle}
            </Typography>
          )}
          <Typography sx={classes.title} gutterBottom variant='h4'>
            {title}
          </Typography>
          {description && (
            <Typography sx={classes.subTitle}>{description}</Typography>
          )}
        </Box>
      </Box>
    </Box>
  )
}

/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import TextTruncate from 'react-text-truncate'
import { Theme } from '../../../theme/types'
import { Box, Chip, Typography } from '../../../index'
import Points from '../Points'

export interface ProductCardProps {
  name: string
  points?: number
  backgroundImage?: boolean
  imageUrl?: string
  hoverAnimation?: boolean
  novelty?: boolean
  tags?: string[]
  onClick: () => void
}

export const ProductCard: React.FC<ProductCardProps> = (props) => {
  const {
    name,
    points,
    backgroundImage = true,
    imageUrl,
    novelty,
    hoverAnimation = true,
    tags,
    onClick
  } = props

  const classes = {
    root: {
      borderRadius: (theme: Theme): string => {
        return `${theme.radius.card}px`
      },
      bgcolor: 'background.paper',
      overflow: 'hidden',
      transition: '200ms all ease-in-out',
      boxShadow: 1,
      cursor: 'pointer',
      height: '100%',
      minWidth: 260,
      '&:hover': {
        transform: hoverAnimation ? 'translateY(-4px)' : '',
        '& .image': {
          transform: hoverAnimation ? 'scale(1.05)' : ''
        }
      }
    },
    backgroundImageWrapper: {
      position: 'relative',
      width: '100%',
      height: 180,
      display: 'flex',
      overflow: 'hidden'
    },
    imageWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      width: '100%',
      height: 180,
      '& img': {
        maxHeight: 150
      }
    },
    backgroundImage: {
      transition: '200ms all ease-in-out',
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100%',
      width: '100%'
    },
    noveltyLabel: {
      position: 'absolute',
      top: 16,
      right: 16
    },
    tagsWrapper: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      mb: 2
    }
  }

  return (
    <Box
      onClick={(): void => {
        return onClick()
      }}
      // @ts-ignore
      sx={classes.root}
    >
      <Box sx={classes.backgroundImageWrapper}>
        {backgroundImage ? (
          <Box className='image' sx={classes.backgroundImage} />
        ) : (
          <Box sx={classes.imageWrapper}>
            <img src={imageUrl} alt={name} />
          </Box>
        )}
        {novelty && (
          <Chip
            label='Neu'
            color='primary'
            size='small'
            sx={classes.noveltyLabel}
          />
        )}
      </Box>
      <Box sx={{ p: 4 }}>
        <Typography gutterBottom variant='h6' sx={{ minHeight: 52 }}>
          <TextTruncate line={2} truncateText='…' text={name} />
        </Typography>
        {tags && (
          <Box sx={classes.tagsWrapper}>
            {tags.map((item) => {
              return <Chip label={item} size='small' sx={{ mr: 2, mb: 2 }} />
            })}
          </Box>
        )}
        <Points points={points} />
      </Box>
    </Box>
  )
}

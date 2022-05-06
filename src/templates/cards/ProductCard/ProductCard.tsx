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
  listView?: boolean
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
    listView = false,
    tags,
    onClick
  } = props

  const classes = {
    root: {
      display: listView && 'flex',
      borderRadius: (theme: Theme): string => {
        return `${theme.radius.card}px`
      },
      bgcolor: 'background.paper',
      overflow: 'hidden',
      transition: '200ms all ease-in-out',
      boxShadow: 1,
      cursor: 'pointer',
      height: '100%',
      minWidth: !listView && { xs: 160, sm: 260 },
      '&:hover': {
        transform: hoverAnimation ? 'translateY(-4px)' : '',
        '& .image': {
          transform: hoverAnimation ? 'scale(1.05)' : ''
        }
      }
    },
    productTitle: {
      minHeight: { xs: 36, sm: 52 },
      fontSize: { xs: 14, sm: 20 }
    },
    backgroundImageWrapper: {
      position: 'relative',
      bgcolor: 'common.white',
      width: listView ? { xs: 120, sm: 240 } : '100%',
      height: listView ? '100%' : { xs: 144, sm: 180 },
      display: 'flex',
      overflow: 'hidden'
    },
    imageWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      width: '100%',
      height: listView ? '100%' : { xs: 144, sm: 180 },
      '& img': {
        maxHeight: listView ? 80 : { xs: 120, sm: 150 }
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
      top: 12,
      left: listView ? 12 : 'auto',
      right: listView ? 'auto' : 12
    },
    tagsWrapper: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      mb: 2
    },
    tags: {
      mr: { xs: 1, sm: 2 },
      mb: { xs: 1, sm: 2 },
      fontSize: { xs: 10, sm: 13 }
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
      <Box sx={{ p: { xs: 3, sm: 4 }, flex: listView ? 1 : 'none' }}>
        <Typography gutterBottom variant='h6' sx={classes.productTitle}>
          <TextTruncate line={2} truncateText='…' text={name} />
        </Typography>
        {tags && (
          <Box sx={classes.tagsWrapper}>
            {tags.map((item) => {
              return <Chip label={item} size='small' sx={classes.tags} />
            })}
          </Box>
        )}
        <Points points={points} />
      </Box>
    </Box>
  )
}

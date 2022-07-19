import React from 'react'
import TextTruncate from 'react-text-truncate'
import { styled } from '@mui/material/styles'
import { Box, Chip, Typography } from '../../../components'
import { Points } from '../Points'

export interface ProductCardProps {
  name: string
  points?: number
  isBgImage?: boolean
  image?: string
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
    isBgImage = true,
    image,
    novelty,
    hoverAnimation = true,
    listView = false,
    tags,
    onClick
  } = props
  return (
    <StyledProductCard
      onClick={(): void => {
        return onClick()
      }}
      sx={{
        display: listView ? 'flex' : 'block',
        boxShadow: 1,
        minWidth: listView ? '100%' : { xs: 160, sm: 260 },
        '&:hover': {
          transform: hoverAnimation ? 'translateY(-4px)' : '',
          '& .backgroundImage': {
            transform: hoverAnimation ? 'scale(1.05)' : ''
          }
        }
      }}
    >
      <Box
        className='backgroundImageWrapper'
        sx={{
          width: listView ? { xs: 120, sm: 240 } : '100%',
          height: listView ? '100%' : { xs: 144, sm: 180 }
        }}
      >
        {isBgImage ? (
          <Box
            className='backgroundImage'
            sx={{ backgroundImage: `url(${image})` }}
          />
        ) : (
          <Box
            className='imageWrapper'
            sx={{
              height: listView ? '100%' : { xs: 144, sm: 180 },
              '& img': {
                maxHeight: listView ? 80 : { xs: 120, sm: 150 }
              }
            }}
          >
            <img src={image} alt={name} />
          </Box>
        )}
        {novelty && (
          <Chip
            className='noveltyLabel'
            label='Neu'
            color='primary'
            size='small'
            sx={{ left: listView ? 12 : 'auto', right: listView ? 'auto' : 12 }}
          />
        )}
      </Box>
      <Box sx={{ p: { xs: 3, sm: 4 }, flex: listView ? 1 : 'none' }}>
        <Typography
          gutterBottom
          variant='h6'
          sx={{ minHeight: { xs: 36, sm: 52 }, fontSize: { xs: 14, sm: 20 } }}
        >
          <TextTruncate line={2} truncateText='…' text={name} />
        </Typography>
        {tags && (
          <Box className='tagsWrapper'>
            {tags.map((item) => {
              return (
                <Chip
                  label={item}
                  key={item}
                  size='small'
                  sx={{
                    mr: { xs: 1, sm: 2 },
                    mb: { xs: 1, sm: 2 },
                    fontSize: { xs: 10, sm: 13 }
                  }}
                />
              )
            })}
          </Box>
        )}
        <Points points={points} />
      </Box>
    </StyledProductCard>
  )
}

const StyledProductCard = styled(Box)(({ theme }) => {
  return {
    borderRadius: theme.radius.card,
    backgroundColor: theme.palette.background.paper,
    overflow: 'hidden',
    transition: '200ms all ease-in-out',
    cursor: 'pointer',
    height: '100%',
    '& .backgroundImageWrapper': {
      display: 'flex',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: theme.palette.common.white,
      '& .imageWrapper': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: '100%'
      },
      '& .backgroundImage': {
        transition: '200ms all ease-in-out',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100%',
        width: '100%'
      }
    },
    '& .noveltyLabel': {
      position: 'absolute',
      top: 12
    },
    '& .tagsWrapper': {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginBottom: theme.spacing(2)
    }
  }
})

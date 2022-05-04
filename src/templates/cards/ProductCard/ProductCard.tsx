import React from 'react'
import { Box, Typography } from '../../../index'
import Points from './Points'

export interface ProductCardProps {
  name: string
  points?: number
  image?: string
  onClick: () => void
}

export const ProductCard: React.FC<ProductCardProps> = (props) => {
  const { name, points, onClick, image } = props

  return (
    <Box
      onClick={(): void => {
        return onClick()
      }}
      sx={{
        borderRadius: '8px',
        height: '100%',
        bgcolor: 'background.paper',
        overflow: 'hidden',
        transition: '200ms all ease-in-out',
        boxShadow: 1,
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-4px)',
          '& .image': {
            transform: 'scale(1.05)'
          }
        }
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: 180,
          overflow: 'hidden'
        }}
      >
        <Box
          className='image'
          sx={{
            transition: '200ms all ease-in-out',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '100%',
            width: '100%'
          }}
        />
      </Box>
      <Box sx={{ p: 4 }}>
        <Typography gutterBottom sx={{ fontSize: 16 }} variant='h6'>
          {name}
        </Typography>
        <Points points={points} />
      </Box>
    </Box>
  )
}

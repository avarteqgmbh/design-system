import React from 'react'

import { AnyIcon, Box, Skeleton, Typography } from '../../components'

interface Props {
  points?: number
  size?: 'small' | 'large'
}

export const Points = ({ points, size = 'small' }: Props): JSX.Element => {
  const height = size === 'large' ? 20 : 16

  return (
    <Box
      alignItems='center'
      display='flex'
      sx={{
        '& .icon svg': {
          color: 'primary.main',
          maxHeight: height,
          height
        }
      }}
    >
      <AnyIcon icon='points' />
      <Typography
        color='primary'
        fontWeight='800'
        ml={1}
        sx={{ fontSize: height }}
      >
        {(points && points) || <Skeleton />}
      </Typography>
    </Box>
  )
}

Points.defaultProps = {
  points: null
}

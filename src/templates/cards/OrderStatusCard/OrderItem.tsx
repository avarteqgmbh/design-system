import React from 'react'
import { styled, SxProps } from '@mui/material/styles'
import { Points } from '../Points'
import { Button, Box, Typography } from '../../../components'

export interface OrderItemProps {
  title: string
  image: string
  backgroundImage?: boolean
  variant?: {
    label: string
    value: string
  }
  amount?: {
    label: string
    value: number
  }
  points: number
  sendAt?: {
    label: string
    value: string
  }
  onImageClick?: () => void
  onClick?: () => void
  trackingLabel?: string
  sx?: SxProps
}

export const OrderItem: React.FC<OrderItemProps> = (props) => {
  const {
    title,
    image,
    backgroundImage = false,
    variant,
    amount,
    points,
    sendAt,
    onImageClick,
    onClick,
    trackingLabel,
    sx
  } = props

  return (
    <StyledOrderItem sx={sx}>
      {backgroundImage ? (
        <Box className='image' sx={{ backgroundImage: `url(${image})` }} />
      ) : (
        <Box className='imageWrapper' onClick={onImageClick}>
          <img src={image} alt={title} />
        </Box>
      )}
      <Box className='leftContent'>
        <Typography variant='h6' sx={{ fontSize: 16 }}>
          {title}
        </Typography>
        {variant && (
          <Box className='infoItem'>
            <Typography
              variant='label2'
              color='text.secondary'
              className='label'
            >
              {variant.label}:
            </Typography>
            <Typography variant='button2'>{variant.value}</Typography>
          </Box>
        )}
        {amount && (
          <Box className='infoItem' sx={{ mb: 2 }}>
            <Typography
              variant='label2'
              color='text.secondary'
              className='label'
            >
              {amount.label}:
            </Typography>
            <Typography variant='button2'>{amount.value}</Typography>
          </Box>
        )}
        <Points points={points} />
      </Box>
      {(sendAt || onClick) && (
        <Box className='rightContent'>
          {sendAt && (
            <Box className='infoItem'>
              <Typography
                variant='label2'
                color='text.secondary'
                className='label'
              >
                {sendAt.label}:
              </Typography>
              <Typography variant='button2'>{sendAt.value}</Typography>
            </Box>
          )}
          {onClick && <Button onClick={onClick}>{trackingLabel}</Button>}
        </Box>
      )}
    </StyledOrderItem>
  )
}

const StyledOrderItem = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    padding: theme.spacing(4),
    borderTop: '1px solid',
    borderColor: theme.palette.background.border,
    '& .image': {
      border: '1px solid',
      borderColor: theme.palette.background.border,
      borderRadius: theme.radius.card,
      height: 80,
      width: 80,
      backgroundColor: theme.palette.common.white,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    },
    '& .imageWrapper': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.common.white,
      cursor: 'pointer',
      borderRadius: theme.radius.card,
      border: '1px solid',
      borderColor: theme.palette.background.border,
      overflow: 'hidden',
      height: 80,
      width: 80,
      '& img': {
        maxHeight: 64,
        maxWidth: 64
      }
    },
    '& .leftContent': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flex: 1,
      height: '100%',
      marginLeft: theme.spacing(4),
      '& .infoItem': {
        marginTop: theme.spacing(2)
      }
    },
    '& .rightContent': {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginLeft: theme.spacing(4)
    },
    '& .infoItem': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      '& .label': {
        minWidth: 90,
        marginRight: theme.spacing(2)
      }
    }
  }
})

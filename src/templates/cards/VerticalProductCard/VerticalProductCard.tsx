import React from 'react'
import TextTruncate from 'react-text-truncate'
import { styled } from '@mui/material/styles'
import { Points } from '../Points'
import { Box, Typography, Chip } from '../../../components'
import { AmountInput } from '../AmountInput'

export interface VerticalProductCardProps {
  title: string
  image: string
  points?: number
  amount: number
  tags: string[]
  variant: {
    label: string
    value: string
  }
  onClick: () => void
  onAdd: () => void
  onRemove: () => void
  children: React.ReactNode
}

export const VerticalProductCard: React.FC<VerticalProductCardProps> = (
  props
) => {
  const {
    title,
    image,
    points,
    amount,
    tags,
    variant,
    onClick,
    onAdd,
    onRemove,
    children
  } = props

  return (
    <StyledVerticalProductCard sx={{ boxShadow: 1 }}>
      <Box
        className='contentWrapper'
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
          mb: { xs: 4, sm: 0 }
        }}
      >
        <Box
          className='imageWrapper'
          sx={{
            height: { xs: 140, sm: 80 },
            width: { xs: '100%', sm: 80 },
            mb: { xs: 4, sm: 0 }
          }}
          onClick={(): void => {
            return onClick()
          }}
        >
          <img src={image} alt={title} />
        </Box>
        <Box sx={{ ml: { xs: 0, sm: 5 }, flex: 1 }}>
          <Typography variant='h6' sx={{ fontSize: 16 }}>
            <TextTruncate line={2} truncateText='…' text={title} />
          </Typography>
          <Typography variant='body2' color='text.secondary' mb={2}>
            {variant.label} {variant.value}
          </Typography>
          {tags.map((tag) => {
            return (
              <Chip key={tag} label={tag} size='small' sx={{ mr: 2, mb: 2 }} />
            )
          })}
          <Box className='pointsWrapper'>
            <Points points={points} />
            <AmountInput
              amount={amount}
              onAdd={(): void => {
                return onAdd()
              }}
              onRemove={(): void => {
                return onRemove()
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box className='footer'>{children}</Box>
    </StyledVerticalProductCard>
  )
}

const StyledVerticalProductCard = styled(Box)(({ theme }) => {
  return {
    borderRadius: theme.radius.card,
    backgroundColor: theme.palette.background.paper,
    overflow: 'hidden',
    transition: '200ms all ease-in-out',
    height: '100%',
    padding: theme.spacing(4),
    '& .contentWrapper': {
      display: 'flex',
      width: '100%'
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
      '& img': {
        maxHeight: 64,
        maxWidth: 64
      }
    },
    '& .pointsWrapper': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    '& .footer': {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: { xs: 'column-reverse', sm: 'row' },
      marginTop: theme.spacing(5)
    }
  }
})

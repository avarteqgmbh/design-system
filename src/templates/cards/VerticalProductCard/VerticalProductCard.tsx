/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import { Theme } from '../../../theme/types'
import Points from '../Points'
import { Box, Typography, Chip } from '../../../index'
import { AmountInput } from '../AmountInput'

export interface VerticalProductCardProps {
  name: string
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
    name,
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
    <Box
      // @ts-ignore
      sx={classes.root}
      onClick={(): void => {
        return onClick()
      }}
    >
      <Box sx={classes.contentWrapper}>
        {/* @ts-ignore */}
        <Box sx={classes.imageWrapper}>
          <img src={image} alt={name} />
        </Box>
        <Box sx={{ ml: 5, flex: 1 }}>
          <Typography variant='h6' sx={{ fontSize: 16 }}>
            {name}
          </Typography>
          <Typography variant='body2' color='text.secondary' mb={2}>
            {variant.label} {variant.value}
          </Typography>
          {tags.map((tag) => {
            return (
              <Chip key={tag} label={tag} size='small' sx={{ mr: 2, mb: 2 }} />
            )
          })}
          <Box sx={classes.pointsWrapper}>
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
      <Box sx={classes.footer}>{children}</Box>
    </Box>
  )
}

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
    p: 4
  },
  contentWrapper: {
    display: 'flex',
    width: '100%'
  },
  imageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: (theme: Theme): string => {
      return `${theme.radius.card}px`
    },
    border: '1px solid',
    borderColor: 'background.border',
    height: 80,
    width: 80,
    overflow: 'hidden',
    '& img': {
      maxHeight: 64,
      maxWidth: 64
    }
  },
  pointsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    mt: 5
  }
}

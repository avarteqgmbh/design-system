/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import TextTruncate from 'react-text-truncate'
import { Theme } from '../../../theme/types'
import { Points } from '../Points'
import { Box, Typography, Chip } from '../../../components'
import { AmountInput } from '../AmountInput'

export interface VerticalProductCardProps {
  title: string
  image: string
  points?: number
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
    tags,
    variant,
    onClick,
    onAdd,
    onRemove,
    children
  } = props
  const [amount, setAmount] = React.useState(1)

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
          <Box sx={classes.pointsWrapper}>
            <Points points={points} />
            <AmountInput
              amount={amount}
              onAdd={(): void => {
                setAmount(amount + 1)
                return onAdd()
              }}
              onRemove={(): void => {
                setAmount(amount - 1)
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
    flexDirection: { xs: 'column', sm: 'row' },
    mb: { xs: 4, sm: 0 },
    width: '100%'
  },
  imageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bgcolor: 'common.white',
    borderRadius: (theme: Theme): string => {
      return `${theme.radius.card}px`
    },
    border: '1px solid',
    borderColor: 'background.border',
    height: { xs: 140, sm: 80 },
    width: { xs: '100%', sm: 80 },
    mb: { xs: 4, sm: 0 },
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
    flexDirection: { xs: 'column-reverse', sm: 'row' },
    mt: 5
  }
}

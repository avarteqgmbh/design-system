/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import { Remove, Add } from '@mui/icons-material'
import { Theme } from '../../theme/types'
import { Box, Button, Typography } from '../../components'

export interface AmountInputProps {
  amount: number
  onAdd: () => void
  onRemove: () => void
}

export const AmountInput: React.FC<AmountInputProps> = (props) => {
  const { amount = 1, onAdd, onRemove } = props

  return (
    <Box
      // @ts-ignore
      sx={{
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'background.light',
        borderRadius: (theme: Theme): string => {
          return `${theme.radius.card}px`
        },
        border: '1px solid',
        borderColor: 'background.border'
      }}
    >
      <Button
        variant='text'
        color='secondary'
        onClick={(): void => {
          return onRemove()
        }}
        sx={{ p: 2, minWidth: 25 }}
      >
        <Remove sx={{ height: 16 }} />
      </Button>
      <Typography sx={{ minWidth: 25, textAlign: 'center' }}>
        {amount}
      </Typography>
      <Button
        variant='text'
        color='secondary'
        onClick={(): void => {
          return onAdd()
        }}
        sx={{ p: 2, minWidth: 25 }}
      >
        <Add sx={{ height: 16 }} />
      </Button>
    </Box>
  )
}

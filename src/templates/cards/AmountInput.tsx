import React from 'react'
import Add from '@mui/icons-material/Add'
import Remove from '@mui/icons-material/Remove'
import { styled } from '@mui/material/styles'
import { Box, Button, Typography } from '../../components'

export interface AmountInputProps {
  amount: number
  onAdd: () => void
  onRemove: () => void
}

export const AmountInput: React.FC<AmountInputProps> = (props) => {
  const { amount = 1, onAdd, onRemove } = props

  return (
    <StyledAmountInput>
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
    </StyledAmountInput>
  )
}

const StyledAmountInput = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.light,
    borderRadius: theme.radius.card,
    border: '1px solid',
    borderColor: theme.palette.background.border
  }
})

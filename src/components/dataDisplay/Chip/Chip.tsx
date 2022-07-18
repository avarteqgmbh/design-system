import React from 'react'
import { Chip as MuiChip, ChipProps as MuiChipProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import { removeKeysFromProps } from '../../../util'

export interface ChipProps extends MuiChipProps {
  rounded?: boolean
}

export const Chip: React.FC<ChipProps> = (props) => {
  const { rounded = true } = props

  const muiProps = removeKeysFromProps(props as Record<string, unknown>, [
    'rounded'
  ])

  return <StyledMuiChip className={rounded ? 'rounded' : ''} {...muiProps} />
}

const StyledMuiChip = styled(MuiChip)(({ theme }) => {
  return {
    '&.rounded': {
      borderRadius: '100px'
    },
    borderRadius: theme.radius.button
  }
})

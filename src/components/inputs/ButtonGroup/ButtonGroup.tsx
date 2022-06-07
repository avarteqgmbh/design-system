import React from 'react'
import { ButtonGroup as MuiButtonGroup, ButtonGroupProps } from '@mui/material'
import { styled } from '@mui/material/styles'

export const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  return <StyledMuiButtonGroup {...props} />
}

const StyledMuiButtonGroup = styled(MuiButtonGroup)(({ theme }) => {
  return { borderRadius: theme.radius.button }
})

import React from 'react'

import { ArrowBackRounded } from '@mui/icons-material'
import { MenuItem } from '../Header/MenuItem'

export interface BackBtnProps {
  callback?: () => void
}

export const BackBtn: React.FC<BackBtnProps> = ({ callback }) => {
  return (
    <MenuItem
      lastItem
      onClick={callback && callback}
      icon={<ArrowBackRounded />}
      size='small'
    />
  )
}

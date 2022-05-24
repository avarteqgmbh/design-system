import React from 'react'

import { ArrowBackRounded } from '@mui/icons-material'
import { MainMenuItem } from '../MainMenuItem/MainMenuItem'

export interface BackBtnProps {
  callback?: () => void
}

export const BackBtn: React.FC<BackBtnProps> = ({ callback }) => {
  return (
    <MainMenuItem
      onClick={callback && callback}
      icon={<ArrowBackRounded />}
      size='small'
    />
  )
}

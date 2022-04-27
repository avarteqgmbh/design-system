import React from 'react'
import { Pagination as MuiPagination } from '@mui/material'
import { PaginationProps } from '@mui/lab'

export function Pagination(props: PaginationProps): JSX.Element {
  const { variant = 'outlined', color = 'primary' } = props

  return <MuiPagination {...props} variant={variant} color={color} />
}

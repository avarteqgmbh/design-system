import React from 'react'
import { Pagination as MuiPagination } from '@mui/material'
import { PaginationProps } from '@mui/lab'

export function Pagination(props: PaginationProps): JSX.Element {
  const { variant = 'outlined', color = 'primary', sx } = props

  return (
    <MuiPagination
      {...props}
      sx={{ ...sx, ...styles }}
      variant={variant}
      color={color}
    />
  )
}

const styles = {
  '&.MuiPagination-outlined': {
    '& button': {
      '&.MuiPaginationItem-root': {
        bgcolor: 'background.medium',
        '&.Mui-selected': {
          bgcolor: 'primary.main',
          color: 'primary.contrastText'
        }
      }
    }
  }
}

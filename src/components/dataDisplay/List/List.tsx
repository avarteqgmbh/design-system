import React from 'react'
import { List as MuiList, ListProps as MuiListProps } from '@mui/material'

export interface ListProps extends MuiListProps {
  component?: string | undefined
}

export function List(props: ListProps): JSX.Element {
  return <MuiList {...props} />
}

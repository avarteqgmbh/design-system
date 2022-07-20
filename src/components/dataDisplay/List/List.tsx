import React from 'react'
import { List as MuiList, ListProps as MuiListProps } from '@mui/material'
import { removeKeysFromProps } from '../../../util'

export interface ListProps extends MuiListProps {
  component?: string | undefined
}

export function List(props: ListProps): JSX.Element {
  const muiProps = removeKeysFromProps(props as Record<string, unknown>, [
    'component'
  ])

  return <MuiList {...muiProps} />
}

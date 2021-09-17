import React from 'react'
import {
  DataGrid as MuiDataGrid,
  DataGridProps as MuiDataGridProps,
  GridToolbar
} from '@material-ui/data-grid'

export interface DataGridProps extends MuiDataGridProps {
  toolbar?: boolean
}

export function DataGrid(props: DataGridProps): JSX.Element {
  const { toolbar = false, autoHeight = true } = props

  return (
    <MuiDataGrid
      autoHeight={autoHeight}
      components={toolbar ? { Toolbar: GridToolbar } : {}}
      {...props}
    />
  )
}

import React from 'react'
import {
  DataGrid as MuiDataGrid,
  DataGridProps as MuiDataGridProps,
  GridToolbar
} from '@material-ui/data-grid'
import { makeStyles } from '@material-ui/core'
import { Theme } from '../../../theme/types'

export interface DataGridProps extends MuiDataGridProps {
  toolbar?: boolean
}

export function DataGrid(props: DataGridProps): JSX.Element {
  const { toolbar = false, autoHeight = true } = props
  const classes = useStyles()

  return (
    <MuiDataGrid
      classes={{
        root: classes.root
      }}
      autoHeight={autoHeight}
      className={`${classes.root}`}
      components={toolbar ? { Toolbar: GridToolbar } : {}}
      {...props}
    />
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})

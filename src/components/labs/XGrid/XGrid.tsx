import React from 'react'
import {
  XGrid as MuiXGrid,
  XGridProps as MuiXGridProps,
  GridToolbar
} from '@material-ui/x-grid'
import { makeStyles } from '@material-ui/core'
import { Theme } from '../../../theme/types'

export interface XGridProps extends MuiXGridProps {
  toolbar?: boolean
}

export function XGrid(props: XGridProps): JSX.Element {
  const { toolbar = false, autoHeight = true } = props
  const classes = useStyles()

  return (
    <MuiXGrid
      classes={{
        root: classes.root
      }}
      localeText={{
        toolbarDensity: 'Dichte',
        toolbarDensityLabel: 'Dichte',
        toolbarDensityCompact: 'Eng',
        toolbarDensityStandard: 'Mittel',
        toolbarDensityComfortable: 'Weit',
        toolbarColumns: 'Spalten',
        toolbarColumnsLabel: 'Spalten',
        toolbarFilters: 'Filter',
        toolbarFiltersLabel: 'Filter',
        columnMenuHideColumn: 'Alle verbergen',
        columnMenuShowColumns: 'Alle anzeigen'
      }}
      autoHeight={autoHeight}
      autoPageSize={autoHeight}
      className={classes.root}
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

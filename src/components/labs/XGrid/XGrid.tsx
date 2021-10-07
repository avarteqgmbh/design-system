import React from 'react'
import {
  DataGrid,
  DataGridProps,
  GridToolbar,
  getGridStringOperators,
  getGridNumericColumnOperators
} from '@mui/x-data-grid'
import { GRID_DE_LOCALE_TEXT } from './locales'

export interface XGridProps extends DataGridProps {
  toolbar?: boolean
  language?: 'DE' | 'EN'
}

export function XGrid(props: XGridProps): JSX.Element {
  const { toolbar = false, autoHeight = true, language = 'EN' } = props

  let lang = {}

  if (language === 'DE') {
    lang = GRID_DE_LOCALE_TEXT
  }

  return (
    <DataGrid
      localeText={lang}
      autoHeight={autoHeight}
      autoPageSize={autoHeight}
      components={toolbar ? { Toolbar: GridToolbar } : {}}
      {...props}
    />
  )
}

export { getGridStringOperators, getGridNumericColumnOperators }

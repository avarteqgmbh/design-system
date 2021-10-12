import React from 'react'
import {
  DataGridPro,
  DataGridProProps,
  GridToolbar,
  getGridStringOperators,
  getGridNumericColumnOperators,
  getGridDateOperators
} from '@mui/x-data-grid-pro'
import { GRID_DE_LOCALE_TEXT } from './locales'
import { makeStyles } from '../../../theme/ThemeProvider'
import { Theme } from '../../../theme/types'

export interface XGridProps extends DataGridProProps {
  toolbar?: boolean
  language?: 'DE' | 'EN'
}
export function XGrid(props: XGridProps): JSX.Element {
  const { toolbar = false, autoHeight = true, language = 'EN' } = props
  const classes = useStyles()

  let lang = {}

  if (language === 'DE') {
    lang = GRID_DE_LOCALE_TEXT
  }

  return (
    <DataGridPro
      localeText={lang}
      autoHeight={autoHeight}
      autoPageSize={autoHeight}
      components={toolbar ? { Toolbar: GridToolbar } : {}}
      className={classes.root}
      {...props}
    />
  )
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      borderColor: theme.palette.background.border,

      '& *': {
        fontFamily: theme.typography.fontFamily
      },

      '& .MuiDataGrid-toolbarContainer': {
        backgroundColor: theme.palette.background.paper,

        '& .MuiButton-textPrimary': {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.background.paper,

          '&:hover': {
            backgroundColor: theme.palette.background.light
          }
        }
      }
    }
  }
})

export {
  getGridStringOperators,
  getGridNumericColumnOperators,
  getGridDateOperators
}

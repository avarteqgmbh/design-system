import React from 'react'
import {
  DataGridPro,
  DataGridProProps,
  getGridStringOperators,
  getGridNumericColumnOperators,
  getGridDateOperators,
  GridToolbarExport,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridCsvExportOptions
} from '@mui/x-data-grid-pro'
import GlobalStyles from '@mui/material/GlobalStyles'
import { GRID_DE_LOCALE_TEXT } from './locales'
import { makeStyles } from '../../../theme/ThemeProvider'
import { Theme } from '../../../theme/types'
import { QuickSearch } from './QuickSearch'

export interface XGridProps extends DataGridProProps {
  language?: 'DE' | 'EN'
  toolbar?: boolean
  csvOptions?: GridCsvExportOptions
  quickSearch?: boolean
  searchText: string
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  clearSearch: () => void
}

export function XGrid(props: XGridProps): JSX.Element {
  const {
    autoHeight = true,
    language = 'EN',
    csvOptions,
    quickSearch = true,
    clearSearch,
    onSearchChange,
    searchText,
    toolbar = false
  } = props
  const classes = useStyles()

  const CustomToolbar = (): JSX.Element => {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        {csvOptions ? (
          <GridToolbarExport csvOptions={csvOptions} />
        ) : (
          <GridToolbarExport />
        )}
        {quickSearch && (
          <QuickSearch
            clearSearch={clearSearch}
            onChange={onSearchChange}
            value={searchText}
          />
        )}
      </GridToolbarContainer>
    )
  }

  let lang = {}

  if (language === 'DE') {
    lang = GRID_DE_LOCALE_TEXT
  }

  return (
    <>
      {GridGlobalStyles}
      <DataGridPro
        localeText={lang}
        autoHeight={autoHeight}
        autoPageSize={autoHeight}
        components={toolbar ? { Toolbar: CustomToolbar } : {}}
        className={classes.root}
        {...props}
      />
    </>
  )
}

const GridGlobalStyles = (
  <GlobalStyles
    styles={{
      '& .MuiGridMenu-root .MuiPaper-root': {
        background: 'white'
      },
      '& .MuiGridPanel-paper': {
        '& .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track': {
          backgroundColor: '#cdcdcd'
        },
        '& .MuiFormControl-root': {
          '& .MuiFormLabel-root.Mui-focused': {
            color: '#2e2e2e'
          },
          '& .MuiInput-underline:after': {
            borderColor: '#2e2e2e'
          }
        },
        '& .MuiButton-textPrimary': {
          color: '#2e2e2e',
          backgroundColor: 'white',
          '&:hover': {
            backgroundColor: '#efefef'
          }
        },
        '& .MuiInputBase-input': {
          backgroundColor: 'transparent'
        },
        '& .MuiSwitch-colorPrimary.Mui-checked': {
          color: '#2e2e2e'
        }
      }
    }}
  />
)

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      borderColor: theme.palette.background.border,

      '& *': {
        fontFamily: theme.typography.fontFamily
      },

      '& .MuiDataGrid-columnHeader:focus, .MuiDataGrid-cell:focus': {
        outline: `solid ${theme.palette.primary.main} 1px`
      },

      '& .MuiCheckbox-colorPrimary.Mui-checked': {
        color: theme.palette.primary.main
      },

      '& .MuiDataGrid-row:hover': {
        backgroundColor: `${theme.palette.background.default} !important`
      },

      '& .MuiDataGrid-row.Mui-selected': {
        backgroundColor: `${theme.palette.background.light} !important`
      },

      '& .MuiDataGrid-columnHeaderTitle, .MuiDataGrid-cell, .MuiDataGrid-footerContainer *':
        {
          fontSize: 16
        },

      '& .MuiBadge-colorPrimary': {
        backgroundColor: theme.palette.primary.main
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

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
  GridCsvExportOptions,
  useGridApiRef,
  GridApiRef
} from '@mui/x-data-grid-pro'
import GlobalStyles from '@mui/material/GlobalStyles'
import { GRID_DE_LOCALE_TEXT } from './locales'
import { makeStyles } from '../../../theme/ThemeProvider'
import { Theme } from '../../../theme/types'
import { QuickSearch } from './QuickSearch'
import {
  useLocalStorage,
  LocalStorageEvents,
  LoadLocalStorage
} from './localStorageHelper'

export interface XGridProps extends DataGridProProps {
  apiRef?: GridApiRef
  localStorageKey?: string
  language?: 'DE' | 'EN'
  toolbar?: boolean
  csvOptions?: GridCsvExportOptions
  quickSearch?: boolean
  searchText: string
  setSearchText: React.Dispatch<React.SetStateAction<string>>
  onSearchClick: (term: string) => void
  clearSearch: () => void
}

export function XGrid(props: XGridProps): JSX.Element {
  const {
    apiRef,
    localStorageKey = '',
    autoHeight = true,
    language = 'EN',
    csvOptions,
    quickSearch = true,
    clearSearch,
    onSearchClick,
    searchText,
    setSearchText,
    toolbar = false
  } = props
  const classes = useStyles()
  const dsApiRef = useGridApiRef(apiRef)
  const [tableConfig, setTableConfig] = useLocalStorage<object>(
    localStorageKey,
    {}
  )
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
            onClick={onSearchClick}
            value={searchText}
            setValue={setSearchText}
          />
        )}
      </GridToolbarContainer>
    )
  }

  let lang = {}

  if (language === 'DE') {
    lang = GRID_DE_LOCALE_TEXT
  }

  React.useEffect(() => {
    if (localStorageKey) {
      LocalStorageEvents(dsApiRef, tableConfig, setTableConfig)
    }
  }, [dsApiRef])

  React.useEffect(() => {
    if (localStorageKey) {
      LoadLocalStorage(dsApiRef, localStorageKey, tableConfig)
    }
  })

  return (
    <>
      {GridGlobalStyles}
      <DataGridPro
        apiRef={dsApiRef}
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
  getGridDateOperators,
  useGridApiRef
}

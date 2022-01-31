import React from 'react'
import {
  DataGridPro,
  DataGridProProps,
  getGridStringOperators,
  GridLinkOperator,
  GridToolbarExport,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  getGridNumericOperators,
  GridCsvExportOptions,
  useGridApiRef,
  LicenseInfo
} from '@mui/x-data-grid-pro'
import GlobalStyles from '@mui/material/GlobalStyles'
import { GRID_DE_LOCALE_TEXT } from './locales'
import { QuickSearch } from './QuickSearch'
import {
  useLocalStorage,
  RegisterLocalStorageEvents,
  LoadLocalStorage
} from './localStorageHelper'

LicenseInfo.setLicenseKey(process.env.REACT_APP_MUI_LICENSE || '')

export interface XGridProps extends DataGridProProps {
  localStorageKey?: string
  language?: 'DE' | 'EN'
  toolbar?: boolean
  csvExport?: boolean
  csvOptions?: GridCsvExportOptions
  quickSearch?: boolean
  searchText: string
  setSearchText: React.Dispatch<React.SetStateAction<string>>
  onSearchClick: (term: string) => void
  clearSearch: () => void
}

export function XGrid(props: XGridProps): JSX.Element {
  const {
    localStorageKey = '',
    autoHeight = true,
    language = 'EN',
    csvExport = true,
    csvOptions,
    quickSearch = true,
    clearSearch,
    onSearchClick,
    searchText,
    setSearchText,
    toolbar = false
  } = props
  const dsApiRef = useGridApiRef()
  const [tableConfig, setTableConfig] = useLocalStorage<object>(
    localStorageKey,
    {}
  )
  const CustomToolbar = (): JSX.Element => {
    return (
      <GridToolbarContainer>
        {quickSearch && (
          <QuickSearch
            clearSearch={clearSearch}
            onClick={onSearchClick}
            value={searchText}
            setValue={setSearchText}
          />
        )}
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        {csvOptions
          ? csvExport && <GridToolbarExport csvOptions={csvOptions} />
          : csvExport && <GridToolbarExport />}
      </GridToolbarContainer>
    )
  }

  let lang = {}

  if (language === 'DE') {
    lang = GRID_DE_LOCALE_TEXT
  }

  React.useEffect(() => {
    if (
      localStorageKey !== '' &&
      localStorageKey !== 'null' &&
      localStorageKey !== null
    ) {
      RegisterLocalStorageEvents(dsApiRef, tableConfig, setTableConfig)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dsApiRef, localStorageKey])

  React.useEffect(() => {
    if (
      localStorageKey !== '' &&
      localStorageKey !== 'null' &&
      localStorageKey !== null
    ) {
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
        sx={{
          borderColor: 'bg.border',
          '& .MuiDataGrid-columnHeaderTitle': {
            color: 'white !important'
          },
          '& .MuiDataGrid-columnHeader:focus, .MuiDataGrid-cell:focus': {
            outline: (theme): string => {
              return `solid ${theme.palette.primary.main} 1px`
            }
          },

          '& .MuiCheckbox-colorPrimary.Mui-checked': {
            color: 'primary.main'
          },

          '& .MuiDataGrid-row:hover': {
            bgcolor: 'bg.default'
          },

          '& .MuiDataGrid-row.Mui-selected': {
            bgcolor: 'bg.light'
          },

          '& .MuiDataGrid-columnHeaderTitle, .MuiDataGrid-cell': {
            fontSize: 16
          },

          '.MuiDataGrid-footerContainer *': {
            fontSize: 16
          },

          '& .MuiBadge-colorPrimary': {
            bgcolor: 'primary.main'
          },

          '& .MuiDataGrid-toolbarContainer': {
            bgcolor: 'bg.paper',

            '& .MuiButton-textPrimary': {
              color: 'primary.main',
              bgcolor: 'bg.paper',

              '&:hover': {
                bgcolor: 'bg.light'
              }
            }
          }
        }}
        {...props}
      />
    </>
  )
}

const GridGlobalStyles = (
  <GlobalStyles
    styles={{
      '& .MuiGridMenu-root .MuiPaper-root': {
        bgcolor: 'white'
      },
      '& .MuiGridPanel-paper': {
        '& .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track': {
          bgcolor: '#cdcdcd'
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
          bgcolor: 'white',
          '&:hover': {
            bgcolor: '#efefef'
          }
        },
        '& .MuiInputBase-input': {
          bgcolor: 'transparent'
        },
        '& .MuiSwitch-colorPrimary.Mui-checked': {
          color: '#2e2e2e'
        }
      }
    }}
  />
)
export {
  getGridStringOperators,
  getGridNumericOperators,
  GridLinkOperator,
  useGridApiRef
}

import React from 'react'
import {
  DataGridPro,
  DataGridProProps,
  getGridStringOperators,
  getGridNumericOperators,
  getGridDateOperators,
  GridLinkOperator,
  GridToolbarExport,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridCsvExportOptions,
  useGridApiRef,
  GridApiRef,
  LicenseInfo
} from '@mui/x-data-grid-pro'
import { GRID_DE_LOCALE_TEXT } from './locales'
import { QuickSearch } from './QuickSearch'
import {
  useLocalStorage,
  RegisterLocalStorageEvents,
  LoadLocalStorage
} from './localStorageHelper'

LicenseInfo.setLicenseKey(process.env.REACT_APP_MUI_LICENSE || '')

export interface XGridProps extends DataGridProProps {
  customApiRef: GridApiRef
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
    customApiRef,
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
    sx,
    toolbar = false
  } = props

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
      RegisterLocalStorageEvents(customApiRef, tableConfig, setTableConfig)
    }
  }, [customApiRef, localStorageKey, setTableConfig, tableConfig])

  React.useEffect(() => {
    if (
      localStorageKey !== '' &&
      localStorageKey !== 'null' &&
      localStorageKey !== null
    ) {
      LoadLocalStorage(customApiRef, localStorageKey, tableConfig)
    }
  })

  return (
    <>
      <DataGridPro
        apiRef={customApiRef}
        localeText={lang}
        autoHeight={autoHeight}
        autoPageSize={autoHeight}
        components={toolbar ? { Toolbar: CustomToolbar } : {}}
        sx={{ ...sx, ...styles }}
        {...props}
      />
    </>
  )
}

const styles = {
  '& .MuiDataGrid-columnHeaderTitle, .MuiDataGrid-cell': {
    fontSize: 16
  },

  '.MuiDataGrid-footerContainer *': {
    fontSize: 16
  },

  '& .MuiDataGrid-toolbarContainer': {
    padding: 2,

    '& .MuiButton-root.MuiButton-text': {
      marginRight: 2
    }
  }
}

export {
  getGridStringOperators,
  getGridNumericOperators,
  getGridDateOperators,
  GridLinkOperator,
  useGridApiRef
}

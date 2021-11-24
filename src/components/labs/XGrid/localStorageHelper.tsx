import { useState } from 'react'
import {
  GridColumnResizeParams,
  GridApiRef,
  GridFilterModel,
  GridColumnVisibilityChangeParams
} from '@mui/x-data-grid-pro'

// Hook
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useLocalStorage<T>(key: string, initialValue: T): any {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key)
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // If error also return initialValue
      console.log(error)
      return initialValue
    }
  })
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setValue = (value: T | ((val: T) => T)): any => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error)
    }
  }
  return [storedValue, setValue] as const
}

// LocalStorageEvents
export function LocalStorageEvents(
  dsApiRef: GridApiRef,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tableConfig: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setTableConfig: any
): void {
  dsApiRef.current.subscribeEvent(
    'filterModelChange',
    (params: GridFilterModel): void => {
      tableConfig.filterModel = params
      setTableConfig(tableConfig)
    }
  )

  // hide all and show all will not trigger this event
  dsApiRef.current.subscribeEvent(
    'columnVisibilityChange',
    (params: GridColumnVisibilityChangeParams): void => {
      const hiddenColumns = { [params.field]: params.isVisible }

      tableConfig.hiddenColumns = {
        ...tableConfig.hiddenColumns,
        ...hiddenColumns
      }

      setTableConfig(tableConfig)
    }
  )

  dsApiRef.current.subscribeEvent('columnOrderChange', (): void => {
    // columns = columns.splice(index, 0, item)
    tableConfig.orderedColumns = dsApiRef.current.state.columns.all
    setTableConfig(tableConfig)
  })

  dsApiRef.current.subscribeEvent(
    'columnResize',
    (params: GridColumnResizeParams): void => {
      const columnWidths = { [params.colDef.field]: params.width }

      tableConfig.columnWidths = {
        ...tableConfig.columnWidths,
        ...columnWidths
      }

      setTableConfig(tableConfig)
    }
  )
}

export function LoadLocalStorage(
  dsApiRef: GridApiRef,
  localStorageKey: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tableConfig: any
): void {
  if (localStorageKey !== '') {
    if (tableConfig.columnWidths) {
      Object.entries(tableConfig.columnWidths).forEach(
        (value: [string, unknown]): void => {
          const field = value[0]
          const width = value[1]

          if (typeof field !== 'undefined') {
            dsApiRef.current.setColumnWidth(field, width as number)
          }
        }
      )
    }

    if (tableConfig.hiddenColumns) {
      Object.entries(tableConfig.hiddenColumns).forEach(
        (value: [string, unknown]): void => {
          const field = value[0]
          const hide = value[1]

          if (typeof field !== 'undefined') {
            dsApiRef.current.setColumnVisibility(field, hide as boolean)
          }
        }
      )
    }

    if (tableConfig.orderedColumns) {
      Object.entries(tableConfig.orderedColumns).forEach(
        (value: [string, unknown]): void => {
          if (typeof value !== 'undefined') {
            dsApiRef.current.setColumnIndex(
              value[1] as string,
              parseInt(value[0] as string, 10)
            )
          }
        }
      )
    }

    if (tableConfig.filterModel) {
      dsApiRef.current.setFilterModel(tableConfig.filterModel)
    }
  }
}

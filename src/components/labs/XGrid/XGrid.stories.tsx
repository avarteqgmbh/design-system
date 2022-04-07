import React from 'react'
import { Story } from '@storybook/react'
import { XGrid, XGridProps, useGridApiRef } from './XGrid'
import { useDemoData } from '@mui/x-data-grid-generator'
import { GridRowModel } from '@mui/x-data-grid-pro'

export default {
  title: 'Lab/XGrid',
  component: XGrid,
  argTypes: {
    autoHeight: {
      control: 'boolean',
      defaultValue: true
    },
    checkboxSelection: {
      control: 'boolean',
      defaultValue: false
    },
    autoPageSize: {
      control: 'boolean',
      defaultValue: false
    },
    density: {
      control: 'select',
      options: ['standard', 'comfortable', 'compact'],
      defaultValue: 'standard'
    },
    disableSelectionOnClick: {
      control: 'boolean',
      defaultValue: true
    }
  },
  parameters: {
    muiDocSrc: 'https://mui.com/components/data-grid/'
  }
}

const Template: Story<XGridProps> = (args) => {
  const customApiRef = useGridApiRef()

  const { loading, data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 20,
    maxColumns: 40,
    editable: true
  })

  function escapeRegExp(value: string): string {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
  }

  const [searchText, setSearchText] = React.useState('')

  const [rows, setRows] = React.useState<GridRowModel[]>(data.rows)

  const requestSearch = (searchValue: string): void => {
    setSearchText(searchValue)
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i')
    const filteredRows = data.rows.filter((row: GridRowModel) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field].toString())
      })
    })
    setRows(filteredRows)
  }

  React.useEffect(() => {
    setRows(data.rows)
  }, [data.rows])

  return (
    <XGrid
      {...args}
      customApiRef={customApiRef}
      localStorageKey={rows && 'fooBar'}
      rows={rows}
      columns={data.columns}
      searchText={searchText}
      setSearchText={setSearchText}
      onSearchClick={(): void => {
        return requestSearch(searchText)
      }}
      clearSearch={(): void => {
        return requestSearch('')
      }}
      loading={loading}
      initialState={{
        ...data.initialState,
        pinnedColumns: { left: ['__check__', 'desk'] }
      }}
    />
  )
}

export const Default = Template.bind({})

export const Toolbar = Template.bind({})
Toolbar.args = {
  checkboxSelection: true,
  toolbar: true,
  csvOptions: { delimiter: ';' },
  rowsPerPageOptions: [5, 10],
  pageSize: 5
}

export const DE = Template.bind({})
DE.args = {
  checkboxSelection: true,
  toolbar: true,
  rowsPerPageOptions: [5, 10],
  pageSize: 5,
  language: 'DE'
}

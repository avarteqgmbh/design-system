import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { XGrid, XGridProps } from './XGrid'
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
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=285%3A1900'
    }
  }
}

const Template: Story<XGridProps> = (args) => {
  const sampleRows = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' }
  ]

  const sampleColumns = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 }
  ]

  function escapeRegExp(value: string): string {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
  }

  const [searchText, setSearchText] = React.useState('')
  const [rows, setRows] = React.useState<GridRowModel[]>(sampleRows)

  const requestSearch = (searchValue: string): void => {
    setSearchText(searchValue)
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i')
    const filteredRows = sampleRows.filter((row: GridRowModel) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field].toString())
      })
    })
    setRows(filteredRows)
  }

  React.useEffect(() => {
    setRows(sampleRows)
  }, [sampleRows])

  return (
    <XGrid
      {...args}
      localStorageKey={rows && 'fooBar'}
      rows={rows}
      columns={sampleColumns}
      searchText={searchText}
      setSearchText={setSearchText}
      onSearchClick={(): void => {
        return requestSearch(searchText)
      }}
      clearSearch={(): void => {
        return requestSearch('')
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

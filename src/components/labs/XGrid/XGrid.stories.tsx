import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { XGrid, XGridProps } from './XGrid'
import { useDemoData, DataRowModel } from '@mui/x-data-grid-generator'

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
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6
  })
  function escapeRegExp(value: string): string {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
  }

  const [searchText, setSearchText] = React.useState('')
  const [rows, setRows] = React.useState<DataRowModel[]>(data.rows)

  const requestSearch = (searchValue: string): void => {
    setSearchText(searchValue)
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i')
    const filteredRows = data.rows.filter((row: DataRowModel) => {
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
      rows={rows}
      columns={data.columns}
      searchText={searchText}
      onSearchChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
        return requestSearch(event.target.value)
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

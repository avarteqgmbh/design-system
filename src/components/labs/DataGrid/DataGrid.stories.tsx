import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { DataGrid, DataGridProps } from './DataGrid'
import { rows, columns } from './mocks'

export default {
  title: 'Lab/DataGrid',
  component: DataGrid,
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

const Template: Story<DataGridProps> = (args) => {
  return <DataGrid {...args} />
}

export const Default = Template.bind({})
Default.args = {
  rows,
  columns
}

export const Toolbar = Template.bind({})
Toolbar.args = {
  rows,
  columns,
  checkboxSelection: true,
  toolbar: true,
  rowsPerPageOptions: [5, 10],
  pageSize: 5
}

import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { SelectProps } from '@material-ui/core'
import { Select } from './Select'
import { MenuItem } from '../../index'

export default {
  title: 'Input/Select',
  component: Select,
  argTypes: {
    id: {
      control: { type: 'text' },
      table: { type: { summary: 'string' } }
    },
    open: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    native: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    autoWidth: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    defaultValue: {
      control: { type: 'text' },
      table: { type: { summary: 'string' } }
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    displayEmpty: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    labelId: {
      control: { type: 'text' },
      table: { type: { summary: 'string' } }
    },
    labelWidth: {
      control: 'number',
      defaultValue: 0,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 }
      }
    },
    multiple: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    variant: {
      control: 'radio',
      options: ['filled', 'outlined', 'standard'],
      defaultValue: 'outlined',
      table: {
        type: { summary: 'filled | outlined | standard' },
        defaultValue: { summary: 'outlined' }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=392%3A24801'
    }
  }
}

const Template: Story<SelectProps> = (args) => {
  return (
    <Select {...args}>
      <MenuItem value=''>None</MenuItem>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  )
}

export const Default = Template.bind({})
Default.args = {
  id: 'select-default',
  value: '20'
}

export const Filled = Template.bind({})
Filled.args = {
  id: 'select-filled',
  value: '20',
  variant: 'filled'
}

export const Opened = Template.bind({})
Opened.args = {
  id: 'select-default',
  value: '20',
  open: true
}

export const DisplayEmpty = Template.bind({})
DisplayEmpty.args = {
  id: 'display-empty-default',
  value: '',
  displayEmpty: true
}

export const Disabled = Template.bind({})
Disabled.args = {
  id: 'select-disabled',
  value: '20',
  disabled: true
}

export const ReadOnly = Template.bind({})
ReadOnly.args = {
  id: 'select-readonly',
  value: '20',
  inputProps: { readOnly: true }
}

export const AutoWidth = Template.bind({})
AutoWidth.args = {
  id: 'select-autowidth',
  value: '20',
  autoWidth: true
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  id: 'select-full-width',
  value: '20',
  fullWidth: true
}

export const Multiple = Template.bind({})
Multiple.args = {
  id: 'select-multiple',
  value: ['10', '30'],
  multiple: true
}
export const MultipleOpend = Template.bind({})
MultipleOpend.args = {
  id: 'select-multiple-opend',
  value: ['10', '30'],
  open: true,
  multiple: true
}

const RenderValueTemplate: Story<SelectProps> = (args) => {
  return (
    <Select
      {...args}
      renderValue={(value): string => {
        return `⚠️  - ${value}`
      }}
    >
      <MenuItem value=''>None</MenuItem>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  )
}

export const RenderValue = RenderValueTemplate.bind({})
RenderValue.args = {
  id: 'select-render-value',
  value: '20'
}

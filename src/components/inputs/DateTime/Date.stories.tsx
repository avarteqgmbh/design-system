import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Date } from './Date'
import { DatePicker, DatePickerProps } from '@material-ui/pickers'

export default {
  title: 'Input/Date',
  component: Date,
  argTypes: {
    id: {
      control: { type: 'text' },
      table: { type: { summary: 'string' } }
    },
    label: {
      control: { type: 'text' },
      table: { type: { summary: 'string' } }
    },
    type: {
      control: 'select',
      options: ['date', 'datetime-local', 'time'],
      table: {
        type: { summary: 'date | datetime-local | time' },
        defaultValue: { summary: 'text' }
      }
    },
    defaultValue: {
      control: { type: 'text' },
      table: {
        type: { summary: 'text' }
      }
    },
    color: {
      control: 'radio',
      options: ['primary', 'secondary'],
      table: {
        type: { summary: 'primary | secondary' },
        defaultValue: { summary: 'primary' }
      }
    },
    variant: {
      control: 'radio',
      options: ['filled', 'outline', 'standard'],
      defaultValue: 'outlined',
      table: {
        type: { summary: 'filled | outlined | standard' },
        defaultValue: { summary: 'outline' }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: ''
    }
  }
}

const Template: Story<DatePickerProps> = (args) => {
  return <DatePicker {...args} />
}

export const Default = Template.bind({})
Default.args = {}

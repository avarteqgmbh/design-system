import React from 'react'
import { Story } from '@storybook/react'
import { PaperProps } from '@mui/material'
import { Paper } from './Paper'

export default {
  title: 'Surfaces/Paper',
  component: Paper,
  argTypes: {
    square: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    elevation: {
      control: 'range',
      min: 0,
      max: 24,
      defaultValue: 1,
      table: {
        type: { summary: 'number: accepts values between 0 and 24 inclusive' },
        defaultValue: { summary: 1 }
      }
    },
    variant: {
      control: 'radio',
      options: ['elevation', 'outline'],
      defaultValue: 'elevation',
      table: {
        type: { summary: 'elevation | outlined' },
        defaultValue: { summary: 'elevation' }
      }
    }
  },
  parameters: {
    controls: { expanded: true },
    muiDocSrc: 'https://mui.com/components/paper/'
  }
}

const Template: Story<PaperProps> = (args) => {
  return <Paper style={{ height: 140, width: 100 }} {...args} />
}

export const Default = Template.bind({})
Default.args = {}

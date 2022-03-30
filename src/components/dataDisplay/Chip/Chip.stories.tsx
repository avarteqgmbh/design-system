import React from 'react'
import { Story } from '@storybook/react'
import { ChipProps } from '@mui/material'
import { Chip } from './Chip'

export default {
  title: 'Data Display/Chip',
  component: Chip,
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'Label',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'Label' }
      }
    }
  },
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: ''
    }
  }
}

const Template: Story<ChipProps> = (args) => {
  return <Chip {...args} />
}

export const Default = Template.bind({})

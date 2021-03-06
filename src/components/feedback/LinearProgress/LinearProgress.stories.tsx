import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { LinearProgressProps } from '@mui/material'
import { LinearProgress } from './LinearProgress'

export default {
  title: 'Feedback/LinearProgress',
  component: LinearProgress,
  argTypes: {
    color: {
      control: 'radio',
      options: ['primary', 'secondary'],
      defaultValue: 'primary',
      table: {
        type: { summary: 'primary | secondary' },
        defaultValue: { summary: 'primary' }
      }
    },
    value: {
      control: 'range',
      min: 0,
      max: 100,
      defaultValue: 0,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 }
      }
    },
    valueBuffer: {
      control: 'range',
      min: 0,
      max: 100,
      defaultValue: 0,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 }
      }
    },
    variant: {
      control: 'radio',
      options: ['buffer', 'determinate', 'indeterminate', 'query'],
      defaultValue: 'indeterminate',
      table: {
        type: { summary: 'buffer, determinate | indeterminate | query' },
        defaultValue: { summary: 'indeterminate' }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=917%3A7572'
    },
    muiDocSrc: 'https://mui.com/components/progress/'
  }
}

const Template: Story<LinearProgressProps> = (args) => {
  return <LinearProgress {...args} />
}

export const Default = Template.bind({})
Default.args = {}

export const Buffer = Template.bind({})
Buffer.args = {
  variant: 'buffer',
  value: 30,
  valueBuffer: 47
}

import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { CircularProgressProps } from '@mui/material'
import { CircularProgress } from './CircularProgress'

export default {
  title: 'Feedback/CircularProgress',
  component: CircularProgress,
  argTypes: {
    color: {
      control: 'radio',
      options: ['inherit', 'primary', 'secondary'],
      defaultValue: 'primary',
      table: {
        type: { summary: 'inherit | primary | secondary' },
        defaultValue: { summary: 'primary' }
      }
    },
    disableShrink: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: {
          summary: false
        }
      }
    },
    size: {
      control: { type: 'text' },
      defaultValue: '40px',
      table: {
        type: { summary: 'number | string' },
        defaultValue: {
          summary: '40px'
        }
      }
    },
    thickness: {
      control: { type: 'number' },
      defaultValue: 3.6,
      table: {
        type: { summary: 'number' },
        defaultValue: {
          summary: 3.6
        }
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
    variant: {
      control: 'radio',
      options: ['determinate', 'indeterminate', 'static'],
      defaultValue: 'indeterminate',
      table: {
        type: { summary: 'determinate | indeterminate | static' },
        defaultValue: { summary: 'indeterminate' }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=383%3A3833'
    }
  }
}

const Template: Story<CircularProgressProps> = (args) => {
  return <CircularProgress {...args} />
}

export const Default = Template.bind({})
Default.args = {}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary'
}

export const Shrink = Template.bind({})
Shrink.args = {
  disableShrink: true
}

export const Determinate = Template.bind({})
Determinate.args = {
  variant: 'determinate',
  value: 42
}

export const Progress: Story<CircularProgressProps> = (args) => {
  return (
    <>
      <CircularProgress {...args} variant='determinate' value={10} />
      <CircularProgress {...args} variant='determinate' value={20} />
      <CircularProgress {...args} variant='determinate' value={40} />
      <CircularProgress {...args} variant='determinate' value={60} />
      <CircularProgress {...args} variant='determinate' value={80} />
    </>
  )
}

export const Size: Story<CircularProgressProps> = (args) => {
  return (
    <>
      <CircularProgress {...args} size='20px' />
      <CircularProgress {...args} size='40px' />
      <CircularProgress {...args} size='60px' />
      <CircularProgress {...args} size='80px' />
      <CircularProgress {...args} size='100px' />
    </>
  )
}

import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Radio, RadioProps } from '@mui/material'

export default {
  title: 'Inputs/Radio',
  component: Radio,
  argTypes: {
    id: 'radio',
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
      defaultValue: 'medium',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'medium' }
      }
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary'],
      defaultValue: 'secondary',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'secondary' }
      }
    },
    checked: {
      control: { type: 'boolean' },
      options: ['true', 'false'],
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    disabled: {
      control: { type: 'boolean' },
      options: ['true', 'false'],
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    onChange: {
      action: { type: 'changed' },
      table: {
        type: { summary: 'func' }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=384%3A10377'
    }
  }
}

const Template: Story<RadioProps> = (args) => {
  return <Radio {...args} />
}

export const Default = Template.bind({})
Default.args = {
  color: 'secondary',
  size: 'medium',
  checked: true
}

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  size: 'medium',
  checked: true
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  color: 'primary',
  checked: true
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
  color: 'primary',
  checked: true
}

export const Unchecked = Template.bind({})
Unchecked.args = {
  size: 'medium',
  color: 'primary',
  checked: false
}

export const Disabled = Template.bind({})
Disabled.args = {
  size: 'medium',
  color: 'primary',
  checked: true,
  disabled: true
}

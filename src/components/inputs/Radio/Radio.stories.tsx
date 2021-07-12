import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Radio, RadioProps } from '@material-ui/core'

export default {
  title: 'Input/Radio',
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
      defaultValue: 'false',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    disabled: {
      control: { type: 'boolean' },
      options: ['true', 'false'],
      defaultValue: 'false',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    onChange: {
      action: { argTypesRegex: '^on.*' }
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
  return <Radio {...args}> Radio </Radio>
}

export const Default = Template.bind({})
Default.args = {
  color: 'secondary',
  size: 'medium'
}

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  size: 'medium'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small'
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium'
}

export const Checked = Template.bind({})
Checked.args = {
  size: 'medium',
  color: 'secondary',
  checked: true
}

export const Disabled = Template.bind({})
Disabled.args = {
  size: 'medium',
  color: 'secondary',
  disabled: true
}

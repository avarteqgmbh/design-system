import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { TextField } from './TextField'
import { TextFieldProps } from '@mui/material'

export default {
  title: 'Inputs/TextField',
  component: TextField,
  decorators: [withDesign],
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'Label',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'Label' } }
    }
  },
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=392%3A24801'
    }
  }
}

const Template: Story<TextFieldProps> = (args) => {
  return <TextField {...args} />
}

export const Default = Template.bind({})

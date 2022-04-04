import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Button } from './Button'
import { ButtonProps } from '@mui/material'
import { Check, Delete } from '@mui/icons-material'

export default {
  title: 'Inputs/Button',
  component: Button,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=1630%3A14396'
    }
  }
}

const Template: Story<ButtonProps> = (args) => {
  return <Button {...args} />
}

const ButtonLabel = <span>Label</span>

export const Default = Template.bind({})
Default.args = {
  children: ButtonLabel
}

export const WithStartIcon = Template.bind({})
WithStartIcon.args = {
  children: ButtonLabel,
  startIcon: <Check />
}

export const WithEndIcon = Template.bind({})
WithEndIcon.args = {
  children: ButtonLabel,
  endIcon: <Delete />
}

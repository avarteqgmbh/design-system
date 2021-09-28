import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { ButtonProps } from '@mui/material'
import { Button } from './Button'
import WbSunnyIcon from '@mui/icons-material/WbSunny'

export default {
  title: 'Inputs/Button',
  component: Button,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium'
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'default', 'inherit'],
      defaultValue: 'primary'
    },
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
      defaultValue: 'contained'
    },
    onClick: {
      action: { type: 'clicked' },
      table: {
        type: { summary: 'func' }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=181%3A375'
    }
  }
}

const Template: Story<ButtonProps> = (args) => {
  return <Button {...args}>Button</Button>
}

export const Default = Template.bind({})
Default.args = {
  color: 'default',
  variant: 'contained'
}

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  variant: 'contained'
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  variant: 'contained'
}

export const Inherit = Template.bind({})
Inherit.args = {
  color: 'inherit',
  variant: 'contained'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large'
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small'
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  fullWidth: true
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true
}

export const Contained = Template.bind({})
Contained.args = {
  variant: 'contained'
}

export const Outlined = Template.bind({})
Outlined.args = {
  variant: 'outlined'
}

export const Text = Template.bind({})
Text.args = {
  variant: 'text'
}

export const StartIconMui = Template.bind({})
StartIconMui.args = {
  startIcon: <WbSunnyIcon />
}

export const EndIconMui = Template.bind({})
EndIconMui.args = {
  endIcon: <WbSunnyIcon />
}

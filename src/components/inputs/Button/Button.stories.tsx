import { ButtonProps } from '@mui/material'
import { Story } from '@storybook/react'
import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import { Button } from './Button'

export default {
  title: 'Inputs/Button',
  component: Button,
  argTypes: {},
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true }
  }
}

const Template: Story<ButtonProps> = (args) => {
  return <Button {...args} />
}

export const Default = Template.bind({})
Default.args = {
  children: 'Click me'
}

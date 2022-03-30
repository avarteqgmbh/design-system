import React from 'react'
import { Story } from '@storybook/react'
import { IconProps } from '@mui/material'
import { Icon } from './Icon'

export default {
  title: 'Data Display/Icon',
  component: Icon,
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: ''
    }
  }
}

const Template: Story<IconProps> = (args) => {
  return <Icon {...args}>add_circle</Icon>
}

export const Default = Template.bind({})

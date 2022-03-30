import React from 'react'
import { Story } from '@storybook/react'
import { BadgeProps } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
import { Badge } from './Badge'

export default {
  title: 'Data Display/Badge',
  component: Badge,
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: ''
    }
  }
}

const Template: Story<BadgeProps> = (args) => {
  return (
    <>
      <Badge badgeContent={4} color='primary' {...args}>
        <MailIcon />
      </Badge>
    </>
  )
}

export const Default = Template.bind({})

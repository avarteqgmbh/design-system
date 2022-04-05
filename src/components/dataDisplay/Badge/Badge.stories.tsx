import React from 'react'
import { Story } from '@storybook/react'
import { BadgeProps } from '@mui/material'
import { Mail, ShoppingCart } from '@mui/icons-material'

import { Badge } from './Badge'

export default {
  title: 'Data Display/Badge',
  component: Badge,
  argTypes: {
    max: {
      defaultValue: 99,
      table: {
        defaultValue: { summary: 99 }
      }
    },
    overlap: {
      control: 'select',
      options: ['circle', 'rectangle', 'circular', 'rectangular'],
      defaultValue: 'rectangular',
      table: {
        type: { summary: 'circle | rectangle | circular | rectangular' },
        defaultValue: { summary: 'rectangle' }
      }
    },
    showZero: {
      defaultValue: false,
      table: {
        defaultValue: { summary: false }
      }
    }
  },
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=849%3A7539'
    },
    muiDocSrc: 'https://mui.com/components/badges/'
  }
}

const Template: Story<BadgeProps> = (args) => {
  return <Badge {...args} />
}

export const Default = Template.bind({})
Default.args = {
  children: <Mail />,
  badgeContent: 4,
  color: 'primary'
}

export const Position = Template.bind({})
Position.args = {
  children: <ShoppingCart />,
  badgeContent: 4,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'right'
  }
}

export const ShowZero = Template.bind({})
ShowZero.args = {
  children: <ShoppingCart />,
  badgeContent: 0,
  showZero: true
}

export const Overlap = Template.bind({})
Overlap.args = {
  children: <Mail />,
  variant: 'dot',
  color: 'error',
  overlap: 'circle'
}

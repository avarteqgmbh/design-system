import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { BadgeProps } from '@material-ui/core'
import { Badge } from './Badge'
import MailIcon from '@material-ui/icons/Mail'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

export default {
  title: 'Data Display/Badge',
  component: Badge,
  argTypes: {
    color: {
      defaultValue: 'primary',
      table: {
        defaultValue: { summary: 'primary' }
      }
    },
    component: {
      defaultValue: 'span',
      table: {
        defaultValue: { summary: 'span' }
      }
    },
    max: {
      defaultValue: 99,
      table: {
        defaultValue: { summary: 99 }
      }
    },
    overlap: {
      control: 'select',
      options: ['circle', 'rectangle', 'circular', 'rectangular'],
      defaultValue: 'rectangle',
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
    },
    variant: {
      defaultValue: 'standard',
      table: {
        defaultValue: { summary: 'standard' }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: ''
    }
  }
}

const Template: Story<BadgeProps> = (args) => {
  return <Badge {...args} />
}

export const Default = Template.bind({})
Default.args = {
  children: <MailIcon />,
  badgeContent: 4
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: <MailIcon />,
  badgeContent: 4,
  color: 'secondary'
}

export const ErrorColor = Template.bind({})
ErrorColor.args = {
  children: <MailIcon />,
  badgeContent: 4,
  color: 'error'
}

export const TopLeft = Template.bind({})
TopLeft.args = {
  children: <ShoppingCartIcon />,
  badgeContent: 4,
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left'
  }
}

export const BottomLeft = Template.bind({})
BottomLeft.args = {
  children: <ShoppingCartIcon />,
  badgeContent: 4,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  }
}

export const BottomRight = Template.bind({})
BottomRight.args = {
  children: <ShoppingCartIcon />,
  badgeContent: 4,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'right'
  }
}

export const ShowZero = Template.bind({})
ShowZero.args = {
  children: <ShoppingCartIcon />,
  badgeContent: 0,
  showZero: true
}

export const MaximumValue = Template.bind({})
MaximumValue.args = {
  children: <MailIcon />,
  badgeContent: 100,
  max: 99
}

export const DotBadge = Template.bind({})
DotBadge.args = {
  children: <MailIcon />,
  variant: 'dot',
  color: 'error'
}

export const Overlap = Template.bind({})
Overlap.args = {
  children: <MailIcon />,
  variant: 'dot',
  color: 'error',
  overlap: 'circle'
}

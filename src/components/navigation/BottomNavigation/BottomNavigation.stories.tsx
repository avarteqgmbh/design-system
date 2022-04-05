import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { BottomNavigationProps } from '@mui/material'
import { Home, Mail, Shop } from '@mui/icons-material'

import { BottomNavigation } from './BottomNavigation'
import BottomNavigationAction from './BottomNavigationAction'

const Icons = [
  <BottomNavigationAction
    label='Home'
    icon={<Home />}
    centerRipple
    value='home'
  />,
  <BottomNavigationAction
    label='News'
    icon={<Mail />}
    centerRipple
    value='news'
  />,
  <BottomNavigationAction
    label='Shop'
    icon={<Shop />}
    centerRipple
    value='shop'
  />
]

export default {
  title: 'Navigation/BottomNavigation',
  component: BottomNavigation,
  args: {
    showLabels: {
      control: { type: 'node' },
      table: {
        type: { summary: 'node' }
      }
    },
    onChange: { action: 'clicked' }
  },
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=405%3A6259'
    },
    muiDocSrc: 'https://mui.com/components/bottom-navigation/'
  }
}

const Template: Story<BottomNavigationProps> = (args) => {
  return <BottomNavigation {...args} />
}

export const Default = Template.bind({})
Default.args = {
  children: Icons
}

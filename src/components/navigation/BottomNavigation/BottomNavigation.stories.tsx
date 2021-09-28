import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { BottomNavigation } from './BottomNavigation'
import { BottomNavigationProps } from '@mui/material'
import { BottomNavigationAction } from './BottomNavigationAction'
import RestoreIcon from '@mui/icons-material/Restore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const Icons = [
  <BottomNavigationAction
    label='Recent'
    icon={<RestoreIcon />}
    centerRipple
    value='recents'
  />,
  <BottomNavigationAction
    label='Favorite'
    icon={<FavoriteIcon />}
    centerRipple
    value='favorites'
  />,
  <BottomNavigationAction
    label='Neaby'
    icon={<LocationOnIcon />}
    centerRipple
    value='nearby'
  />
]

export default {
  title: 'Navigation/BottomNavigation',
  component: BottomNavigation,
  args: {
    showLabels: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    onChange: {
      action: { type: 'changed' },
      table: {
        type: { summary: 'func' }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  }
}

const Template: Story<BottomNavigationProps> = (args) => {
  return <BottomNavigation {...args} />
}

export const Default = Template.bind({})
Default.args = {
  children: Icons
}

export const LabelsOff = Template.bind({})
LabelsOff.args = {
  children: Icons,
  showLabels: false
}

export const DynamicDefault = Template.bind({})
DynamicDefault.args = {
  children: Icons
}

export const DynamicLabelOff = Template.bind({})
DynamicLabelOff.args = {
  children: Icons,
  showLabels: false
}

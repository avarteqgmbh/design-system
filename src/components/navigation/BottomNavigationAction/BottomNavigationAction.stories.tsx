import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { BottomNavigationAction } from './BottomNavigationAction'
import { BottomNavigationActionProps } from '@material-ui/core'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'

export default {
  title: '💧 Atoms/BottomNavigationAction',
  component: BottomNavigationAction,
  args: {
    label: {
      control: { type: 'object' },
      table: {
        type: { summary: 'object' }
      }
    },
    icon: {
      control: { type: 'node' },
      table: {
        type: { summary: 'node' }
      }
    },
    showLabel: {
      control: { type: 'boolean' },
      options: ['true', 'false'],
      table: {
        type: { summary: 'node' }
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

const Template: Story<BottomNavigationActionProps> = (args) => {
  return <BottomNavigationAction {...args} />
}

export const DefaultRestoreIcon = Template.bind({})
DefaultRestoreIcon.args = {
  label: 'Recent',
  icon: <RestoreIcon />,
  showLabel: true
}

export const DefaultFavoriteIcon = Template.bind({})
DefaultFavoriteIcon.args = {
  label: 'Favorite',
  icon: <FavoriteIcon />,
  showLabel: true
}

export const DefaultLocationOnIcon = Template.bind({})
DefaultLocationOnIcon.args = {
  label: 'Nearby',
  icon: <LocationOnIcon />,
  showLabel: true
}

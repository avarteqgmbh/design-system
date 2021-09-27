import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { BottomNavigationAction } from './BottomNavigationAction'
import { BottomNavigationActionProps } from '@material-ui/core'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'

export default {
  title: 'Navigation/BottomNavigationAction',
  component: BottomNavigationAction,
  args: {
    label: {
      control: { type: 'object' },
      table: {
        type: { summary: 'object' }
      }
    },
    showLabel: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' }
      }
    },
    selected: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' }
      }
    },
    centerRipple: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' }
      }
    },
    icon: {
      control: { type: 'node' },
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
  return <BottomNavigationAction {...args} style={{ padding: ' 1em ' }} />
}

export const DefaultRestore = Template.bind({})
DefaultRestore.args = {
  label: 'Recent',
  icon: <RestoreIcon />,
  showLabel: false,
  selected: false,
  centerRipple: false
}

export const DefaultFavorite = Template.bind({})
DefaultFavorite.args = {
  label: 'Favorite',
  icon: <FavoriteIcon />,
  showLabel: false,
  selected: false,
  centerRipple: false
}

export const DefaultLocation = Template.bind({})
DefaultLocation.args = {
  label: 'Nearby',
  icon: <LocationOnIcon />,
  showLabel: false,
  selected: false,
  centerRipple: false
}

export const LabelRestore = Template.bind({})
LabelRestore.args = {
  label: 'Recent',
  icon: <RestoreIcon />,
  showLabel: true,
  selected: false,
  centerRipple: false
}

export const LabelFavorite = Template.bind({})
LabelFavorite.args = {
  label: 'Favorite',
  icon: <FavoriteIcon />,
  showLabel: true,
  selected: false,
  centerRipple: false
}

export const LabelLocation = Template.bind({})
LabelLocation.args = {
  label: 'Nearby',
  icon: <LocationOnIcon />,
  showLabel: true,
  selected: false,
  centerRipple: false
}

export const SelectedRestore = Template.bind({})
SelectedRestore.args = {
  label: 'Recent',
  icon: <RestoreIcon />,
  selected: true,
  centerRipple: false
}

export const SelectedFavorite = Template.bind({})
SelectedFavorite.args = {
  label: 'Favorite',
  icon: <FavoriteIcon />,
  selected: true,
  centerRipple: false
}

export const SelectedLocation = Template.bind({})
SelectedLocation.args = {
  label: 'Nearby',
  icon: <LocationOnIcon />,
  selected: true,
  centerRipple: false
}

export const CenteredRippleRestore = Template.bind({})
CenteredRippleRestore.args = {
  label: 'Recent',
  icon: <RestoreIcon />,
  selected: true,
  centerRipple: true
}

export const CenteredRippleFavorite = Template.bind({})
CenteredRippleFavorite.args = {
  label: 'Favorite',
  icon: <FavoriteIcon />,
  selected: true,
  centerRipple: true
}

export const CenteredRippleLocation = Template.bind({})
CenteredRippleLocation.args = {
  label: 'Nearby',
  icon: <LocationOnIcon />,
  selected: true,
  centerRipple: true
}

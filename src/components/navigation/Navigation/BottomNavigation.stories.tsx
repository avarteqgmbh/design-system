import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { BottomNavigation } from './BottomNavigation'
import { BottomNavigationProps } from '@material-ui/core'
import { BottomNavigationAction } from './BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'

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
      control: { type: 'node' },
      table: {
        type: { summary: 'node' }
      }
    },
    onChange: {
      control: { type: 'func' },
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

const DynamicView: Story<BottomNavigationProps> = (args) => {
  const [value, setValue] = React.useState('recents')
  const handleChange = (
    // eslint-disable-next-line @typescript-eslint/ban-types
    event: React.ChangeEvent<{}>,
    newValue: string
  ): void => {
    setValue(newValue)
  }

  return <BottomNavigation {...args} value={value} onChange={handleChange} />
}

export const DynamicDefault = DynamicView.bind({})
DynamicDefault.args = {
  children: Icons
}

export const DynamicLabelOff = DynamicView.bind({})
DynamicLabelOff.args = {
  children: Icons,
  showLabels: false
}

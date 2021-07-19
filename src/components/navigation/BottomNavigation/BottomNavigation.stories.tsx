import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { BottomNavigation } from './BottomNavigation'
import { BottomNavigationProps } from '@material-ui/core'
import { BottomNavigationAction } from '../BottomNavigationAction/BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore'

export default {
  title: '💧 Atoms/BottomNavigation',
  component: BottomNavigation,
  args: {},
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
  children: <BottomNavigationAction label='Recents' icon={<RestoreIcon />} />
}

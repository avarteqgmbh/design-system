import React from 'react'
import { Story } from '@storybook/react'

import { withDesign } from 'storybook-addon-designs'
import { FabProps } from '@material-ui/core'
import {
  Add as AddIcon,
  Navigation as NavigationIcon,
  Favorite as FavoriteIcon
} from '@material-ui/icons'
import { FloatingActionButton as Fab } from './FloatingActionButton'

export default {
  title: 'Input/Floating Action Button',
  component: Fab,
  argTypes: {},
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: ''
    }
  }
}
const Template: Story<FabProps> = (args) => {
  return <Fab {...args} />
}

export const Default = Template.bind({})
Default.args = {
  children: 'Text'
}

export const Icon = Template.bind({})
Icon.args = {
  children: <AddIcon />,
  color: 'primary',
  ariaLabel: 'add',
  size: 'small'
}

export const IconAndText = Template.bind({})
IconAndText.args = {
  children: (
    <>
      <NavigationIcon />
      Navigate
    </>
  ),
  variant: 'extended',
  size: 'large'
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: <FavoriteIcon />,
  disabled: true
}

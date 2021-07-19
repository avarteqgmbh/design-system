import React from 'react'
import { Story, Meta } from '@storybook/react'

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
  decorators: [
    (Component): JSX.Element => {
      return (
        <div style={{ margin: '3em' }}>
          <Component />
        </div>
      )
    }
  ],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=384%3A8015'
    }
  }
} as Meta

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
  ariaLabel: 'add'
}

export const IconAndText = Template.bind({})
IconAndText.args = {
  children: (
    <>
      <NavigationIcon />
      Navigate
    </>
  ),
  variant: 'extended'
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: <FavoriteIcon />,
  disabled: true
}

export const Color: Story<FabProps> = (args) => {
  return (
    <>
      <Fab {...args} color='primary'>
        <AddIcon />
      </Fab>
      <Fab {...args} color='secondary'>
        <AddIcon />
      </Fab>
    </>
  )
}

export const Size: Story<FabProps> = (args) => {
  return (
    <>
      <Fab {...args} size='small'>
        <AddIcon />
      </Fab>
      <Fab {...args} size='medium'>
        <AddIcon />
      </Fab>
      <Fab {...args} size='large'>
        <AddIcon />
      </Fab>
    </>
  )
}

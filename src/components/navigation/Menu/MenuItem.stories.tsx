import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { MenuItem, MenuItemProps } from './MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import SendIcon from '@material-ui/icons/Send'

export default {
  title: 'Navigation/MenuItem',
  component: MenuItem,
  argTypes: {},
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=181%3A375'
    }
  }
}

const Template: Story<MenuItemProps> = (args) => {
  return <MenuItem {...args} />
}

export const Default = Template.bind({})
Default.args = {
  children: 'Menu Item'
}

export const IconLeft = Template.bind({})
IconLeft.args = {
  children: (
    <>
      <ListItemIcon>
        <SendIcon fontSize='small' />
      </ListItemIcon>
      <ListItemText primary='Sent mail' />
    </>
  )
}

export const IconRight = Template.bind({})
IconRight.args = {
  children: (
    <>
      <ListItemText primary='Sent mail' />
      <ListItemIcon>
        <SendIcon fontSize='small' />
      </ListItemIcon>
    </>
  )
}

export const IconLeftAndRight = Template.bind({})
IconLeftAndRight.args = {
  children: (
    <>
      <ListItemIcon>
        <SendIcon fontSize='small' />
      </ListItemIcon>
      <ListItemText primary='Sent mail' />
      <ListItemIcon>
        <SendIcon fontSize='small' />
      </ListItemIcon>
    </>
  )
}

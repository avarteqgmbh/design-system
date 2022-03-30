import React from 'react'
import { Story } from '@storybook/react'
import { AvatarProps } from '@mui/material'
import { Folder as FolderIcon } from '@mui/icons-material'

import { Avatar } from './Avatar'
import { AvatarGroup } from './AvatarGroup'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: ''
    }
  }
}

const Template: Story<AvatarProps> = (args) => {
  return (
    <Avatar
      alt='Remy Sharp'
      src='https://mui.com/static/images/avatar/1.jpg'
      {...args}
    />
  )
}

export const Default = Template.bind({})

export const Letter: Story<AvatarProps> = (args) => {
  return <Avatar {...args}>H</Avatar>
}

export const Icon: Story<AvatarProps> = (args) => {
  return (
    <Avatar {...args}>
      <FolderIcon />
    </Avatar>
  )
}

export const Group: Story<AvatarProps> = (args) => {
  return (
    <AvatarGroup max={4}>
      <Avatar
        alt='Remy Sharp'
        src='https://mui.com/static/images/avatar/1.jpg'
        {...args}
      />
      <Avatar
        alt='Travis Howard'
        src='https://mui.com/static/images/avatar/2.jpg'
        {...args}
      />
      <Avatar
        alt='Cindy Baker'
        src='https://mui.com/static/images/avatar/3.jpg'
        {...args}
      />
      <Avatar
        alt='Agnes Walker'
        src='https://mui.com/static/images/avatar/4.jpg'
        {...args}
      />
      <Avatar
        alt='Trevor Henderson'
        src='https://mui.com/static/images/avatar/5.jpg'
        {...args}
      />
    </AvatarGroup>
  )
}

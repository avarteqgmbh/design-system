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
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=884%3A7613'
    },
    muiDocSrc: 'https://mui.com/components/avatars/'
  }
}

const Template: Story<AvatarProps> = (args) => {
  return <Avatar {...args} />
}

export const Default = Template.bind({})
Default.args = {
  alt: 'Remy Sharp',
  src: 'https://mui.com/static/images/avatar/1.jpg'
}

export const Letter = Template.bind({})
Letter.args = {
  children: <span>H</span>
}

export const Icon = Template.bind({})
Icon.args = {
  children: <FolderIcon />
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

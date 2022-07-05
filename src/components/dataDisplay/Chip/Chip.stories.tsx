import React from 'react'
import { Story } from '@storybook/react'
import { ChipProps } from '@mui/material'
import Check from '@mui/icons-material/Check'
import Delete from '@mui/icons-material/Delete'

import { Chip } from './Chip'
import { Avatar } from '../Avatar/Avatar'

export default {
  title: 'Data Display/Chip',
  component: Chip,
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'Label',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'Label' }
      }
    }
  },
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=925%3A7591'
    },
    muiDocSrc: 'https://mui.com/components/chips/'
  }
}

const Template: Story<ChipProps> = (args) => {
  return <Chip {...args} />
}

export const Default = Template.bind({})

export const WithAvatar = Template.bind({})
WithAvatar.args = {
  label: 'Avatar',
  avatar: (
    <Avatar alt='Remy Sharp' src='https://mui.com/static/images/avatar/1.jpg' />
  ),
  color: 'primary'
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  label: 'With Icon',
  icon: <Check />,
  color: 'primary'
}

export const WithDeleteIcon = Template.bind({})
WithDeleteIcon.args = {
  label: 'With Custom Delete Icon',
  deleteIcon: <Delete />,
  color: 'primary'
}

import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { ChipProps, Avatar } from '@material-ui/core'
import { Chip } from './Chip'
import FaceIcon from '@material-ui/icons/Face'
import DoneIcon from '@material-ui/icons/Done'

export default {
  title: 'Data Display/Chip',
  component: Chip,
  argTypes: {
    color: {
      defaultValue: 'default',
      table: {
        defaultValue: { summary: 'default' }
      }
    },
    size: {
      defaultValue: 'medium',
      table: {
        defaultValue: { summary: 'medium' }
      }
    },
    variant: {
      defaultValue: 'default',
      table: {
        defaultValue: { summary: 'default' }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: ''
    }
  }
}

const Template: Story<ChipProps> = (args) => {
  return <Chip {...args} onDelete={undefined} />
}

const DeleteTemplate: Story<ChipProps> = (args) => {
  return <Chip {...args} />
}

export const Default = Template.bind({})
Default.args = {
  label: 'Default'
}

export const Primary = Template.bind({})
Primary.args = {
  label: 'Primary',
  color: 'primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Secondary',
  color: 'secondary'
}

export const Small = Template.bind({})
Small.args = {
  label: 'Small',
  size: 'small'
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Disabled',
  disabled: true
}

export const WithAvatar = Template.bind({})
WithAvatar.args = {
  label: 'Avatar',
  avatar: <Avatar>M</Avatar>,
  color: 'primary'
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  label: 'With Icon',
  icon: <FaceIcon />,
  color: 'primary'
}

export const Outlined = Template.bind({})
Outlined.args = {
  label: 'Avatar',
  variant: 'outlined',
  avatar: <Avatar>M</Avatar>
}

export const Clickable = Template.bind({})
Clickable.args = {
  label: 'Clickable',
  avatar: <Avatar>M</Avatar>,
  onClick: (): void => {},
  color: 'primary'
}

export const Deletable = DeleteTemplate.bind({})
Deletable.args = {
  label: 'Deletable',
  avatar: <Avatar>M</Avatar>,
  onClick: (): void => {},
  onDelete: (): void => {},
  color: 'primary'
}

export const DeleteIcon = DeleteTemplate.bind({})
DeleteIcon.args = {
  label: 'Deletable',
  avatar: <Avatar>M</Avatar>,
  onClick: (): void => {},
  onDelete: (): void => {},
  deleteIcon: <DoneIcon />,
  color: 'primary'
}

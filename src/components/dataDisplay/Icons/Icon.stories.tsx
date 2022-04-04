import React from 'react'
import { Story } from '@storybook/react'
import { IconButtonProps, SvgIconProps } from '@mui/material'
import { AccessAlarm } from '@mui/icons-material'

import { IconButton as MUIIconButton } from './IconButton'
import { SvgIcon as MUISvgIcon } from './SvgIcon'

export default {
  title: 'Data Display/Icon',
  component: MUIIconButton,
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Mn3vM3hPdsVrAAj7SwiLNi/Happy-Icons?node-id=1%3A427'
    }
  }
}

const IconButtonTemplate: Story<IconButtonProps> = (args) => {
  return <MUIIconButton {...args} />
}

const SvgIconTemplate: Story<SvgIconProps> = (args) => {
  return (
    <MUISvgIcon {...args}>
      <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' />
    </MUISvgIcon>
  )
}

export const IconButton = IconButtonTemplate.bind({})
IconButton.args = {
  children: <AccessAlarm />
}

export const SvgIcon = SvgIconTemplate.bind({})
SvgIcon.args = {
  color: 'primary'
}

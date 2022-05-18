import React from 'react'
import { Story } from '@storybook/react'

import { AnyIcon, IconProps } from './AnyIcon'

export default {
  title: 'Data Display/AnyIcon',
  component: AnyIcon,
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Mn3vM3hPdsVrAAj7SwiLNi/Happy-Icons?node-id=1%3A427'
    },
    muiDocSrc: 'https://mui.com/components/icons/'
  }
}

const Template: Story<IconProps> = (args) => {
  return <AnyIcon {...args} />
}

export const ExtraSmall = Template.bind({})
ExtraSmall.args = { size: 'xsmall' }

export const Small = Template.bind({})
Small.args = { size: 'small' }

export const Medium = Template.bind({})
Medium.args = { size: 'medium' }

export const Large = Template.bind({})
Large.args = { size: 'large' }

export const ExtraLarge = Template.bind({})
ExtraLarge.args = { size: 'xlarge' }

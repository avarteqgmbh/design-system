import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Chip } from './Chip'
import { ChipProps } from '@mui/material'

export default {
  title: 'Data Display/Chip',
  component: Chip,
  argTypes: {},
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true }
  }
}

const Template: Story<ChipProps> = (args) => {
  return <Chip {...args} />
}

export const Default = Template.bind({})
Default.args = {
  label: 'My Chip'
}

import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Rating } from './Rating'
import { RatingProps } from '@mui/material'

export default {
  title: 'Inputs/Rating',
  component: Rating,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=392%3A24801'
    }
  }
}
const Template: Story<RatingProps> = (args) => {
  return <Rating {...args} />
}

export const Default = Template.bind({})

import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Slider } from './Slider'
import { SliderProps } from '@mui/material'

export default {
  title: 'Inputs/Slider',
  component: Slider,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=387%3A5249'
    }
  }
}

const Template: Story<SliderProps> = (args) => {
  return <Slider {...args} />
}

export const Default = Template.bind({})

import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Slider } from './Slider'
import { Box, SliderProps } from '@mui/material'

export default {
  title: 'Inputs/Slider',
  component: Slider,
  argTypes: {
    onChange: {
      action: { type: 'onChange' },
      table: {
        type: { summary: 'func' }
      }
    },
    valueLabelDisplay: {
      control: { type: 'select' },
      options: ['on', 'auto', 'off'],
      defaultValue: 'auto',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'auto' }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=387%3A5249'
    },
    muiDocSrc: 'https://mui.com/components/slider/'
  }
}

const Template: Story<SliderProps> = (args) => {
  return (
    <Box marginTop={5}>
      <Slider {...args} />
    </Box>
  )
}

export const Default = Template.bind({})
Default.args = {
  valueLabelDisplay: 'auto'
}

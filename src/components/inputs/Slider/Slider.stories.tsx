import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Typography } from '@material-ui/core'
import { Slider, SliderPropsMui } from './Slider'

export default {
  title: 'Input/Slider',
  component: Slider,
  argTypes: {
    'aria-label': 'string',
    'aria-labelledby': 'string',
    defaultValue: {
      control: { type: 'multiselect' },
      table: {
        type: { summary: 'number' }
      }
    },
    min: {
      control: { type: 'number' },
      table: {
        type: { summary: 'number' }
      }
    },
    max: {
      control: { type: 'number' },
      table: {
        type: { summary: 'number' }
      }
    },
    color: {
      control: { type: 'select' },
      options: ['primay', 'secondary'],
      defaultValue: 'primary',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'primary' }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=387%3A5249'
    }
  }
}

const Template: Story<SliderPropsMui> = (args) => {
  return <Slider {...args} />
}

export const Default = Template.bind({})
Default.args = {
  children: <Typography> Default Slider</Typography>
}

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary'
}

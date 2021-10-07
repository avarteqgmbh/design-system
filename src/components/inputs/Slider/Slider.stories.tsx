import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { SliderProps } from '@mui/material'
import { Typography } from '../../index'
import { Slider } from './Slider'

export default {
  title: 'Inputs/Slider',
  component: Slider,
  argTypes: {
    'aria-label': 'string',
    'aria-labelledby': 'string',
    defaultValue: {
      control: { type: 'number' },
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
    step: {
      control: { type: 'number' },
      defaultValue: 1,
      table: {
        type: {
          summary: 'number',
          detail:
            'The granularity with which the slider can step through values. '
        },
        defaultValue: { summary: 1 }
      }
    },
    marks: {
      control: { type: 'boolean' },
      options: ['true', 'false'],
      table: {
        type: { summary: 'boolean' }
      }
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      defaultValue: 'primary',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'primary' }
      }
    },
    disabled: {
      control: { type: 'boolean' },
      options: ['true', 'false'],
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    valueLabelDisplay: {
      control: { type: 'select' },
      options: ['on', 'auto', 'off'],
      defaultValue: 'off',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'off' }
      }
    },
    ortientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      defaultValue: 'horizontal',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'horizontal' }
      }
    },
    onChange: {
      action: { type: 'changed' },
      table: {
        type: { summary: 'func' }
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

const Template: Story<SliderProps> = (args) => {
  return <Slider {...args} style={{ marginTop: ' 2em ' }} />
}

export const Default = Template.bind({})
Default.args = {
  children: <Typography> Default Slider</Typography>,
  color: 'primary',
  disabled: false
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  defaultValue: 20,
  disabled: false
}

export const Step = Template.bind({})
Step.args = {
  defaultValue: 20,
  color: 'primary',
  step: 10,
  marks: true,
  disabled: false
}

export const LabelOn = Template.bind({})
LabelOn.args = {
  color: 'primary',
  defaultValue: 20,
  valueLabelDisplay: 'on',
  disabled: false
}
export const LabelAuto = Template.bind({})
LabelAuto.args = {
  color: 'primary',
  defaultValue: 20,
  valueLabelDisplay: 'auto',
  disabled: false
}

export const Disabled = Template.bind({})
Disabled.args = {
  color: 'primary',
  defaultValue: 20,
  disabled: true
}

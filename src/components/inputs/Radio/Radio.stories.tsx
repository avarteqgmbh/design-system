import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import {
  FormLabel,
  FormControlLabel,
  RadioGroup,
  RadioProps
} from '@mui/material'

import { Radio } from './Radio'
import { FormControl, Typography } from '../../index'

export default {
  title: 'Inputs/Radio',
  component: Radio,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
      defaultValue: 'medium',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'medium' }
      }
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary'],
      defaultValue: 'secondary',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'secondary' }
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
    onChange: {
      action: { type: 'onChange' },
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
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=384%3A10377'
    },
    muiDocSrc: 'https://mui.com/components/radio-buttons/'
  }
}

const Template: Story<RadioProps> = (args) => {
  return (
    <>
      <FormControl>
        <FormLabel id='demo-radio-buttons-group-label'>Gender</FormLabel>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          defaultValue='female'
          name='radio-buttons-group'
        >
          <FormControlLabel
            value='female'
            control={<Radio {...args} />}
            label={<Typography color='textPrimary'>Female</Typography>}
          />
          <FormControlLabel
            value='male'
            control={<Radio {...args} />}
            label={<Typography color='textPrimary'>Male</Typography>}
          />
          <FormControlLabel
            value='other'
            control={<Radio {...args} />}
            label={<Typography color='textPrimary'>Other</Typography>}
          />
        </RadioGroup>
      </FormControl>
    </>
  )
}

export const Default = Template.bind({})

import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Radio } from './Radio'
import { FormControl } from '../FormControl/FormControl'
import {
  FormLabel,
  FormControlLabel,
  RadioGroup,
  RadioProps
} from '@mui/material'

export default {
  title: 'Inputs/Radio',
  component: Radio,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=392%3A24801'
    }
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
            label='Female'
          />
          <FormControlLabel
            value='male'
            control={<Radio {...args} />}
            label='Male'
          />
          <FormControlLabel
            value='other'
            control={<Radio {...args} />}
            label='Other'
          />
        </RadioGroup>
      </FormControl>
    </>
  )
}

export const Default = Template.bind({})

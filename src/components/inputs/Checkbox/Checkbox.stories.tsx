import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Checkbox } from './Checkbox'
import { FormControl } from '../FormControl/FormControl'
import { CheckboxProps, FormControlLabel } from '@mui/material'

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=392%3A24801'
    }
  }
}

const Template: Story<CheckboxProps> = (args) => {
  return (
    <>
      <FormControl>
        <FormControlLabel control={<Checkbox {...args} />} label='Label' />
      </FormControl>
    </>
  )
}

const CheckboxLabel = <span>Label</span>

export const Default = Template.bind({})
Default.args = {
  children: CheckboxLabel
}

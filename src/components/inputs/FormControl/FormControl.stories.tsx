import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { FormControlProps } from '@mui/material'

import { FormControl } from './FormControl'
import { Input } from './Input'
import { InputLabel } from './InputLabel'

export default {
  title: 'Inputs/FormControl',
  component: FormControl,
  argTypes: {},
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: ''
    }
  }
}

export const Default: Story<FormControlProps> = (args): JSX.Element => {
  return (
    <FormControl {...args}>
      <InputLabel htmlFor='my-input'>Email address</InputLabel>
      <Input id='my-input' aria-describedby='my-helper-text' />
    </FormControl>
  )
}

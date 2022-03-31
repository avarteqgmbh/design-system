import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { TextField } from '../TextField/TextField'
import { FormControl } from './FormControl'
import { FormHelperText, FormControlProps } from '@mui/material'

export default {
  title: 'Inputs/FormControl',
  component: FormControl,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=392%3A24801'
    }
  }
}

const Template: Story<FormControlProps> = (args) => {
  return <FormControl {...args} />
}

const FormControlChildren = (
  <>
    <TextField id='standard-basic' label='E-Mail' variant='standard' />
    <FormHelperText id='my-helper-text'>
      <span>We would never share your email.</span>
    </FormHelperText>
  </>
)

export const Default = Template.bind({})
Default.args = {
  children: FormControlChildren
}

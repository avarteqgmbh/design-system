import React from 'react'
import { Story } from '@storybook/react'
import { TextField } from '../TextField/TextField'
import { FormControl } from './FormControl'
import { FormHelperText, FormControlProps } from '@mui/material'

export default {
  title: 'Inputs/FormControl',
  component: FormControl,
  parameters: {
    controls: { expanded: true }
  }
}

const Template: Story<FormControlProps> = (args) => {
  return <FormControl {...args} />
}

const FormControlChildren = (
  <TextField id='standard-basic' label='E-Mail' variant='standard' />
)

const FormControlChildrenWithHelper = (
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

export const WithFormHelperText = Template.bind({})
WithFormHelperText.args = {
  children: FormControlChildrenWithHelper
}

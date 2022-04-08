import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { CheckboxProps, FormControlLabel } from '@mui/material'
import { Check, Delete } from '@mui/icons-material'

import { Checkbox } from './Checkbox'
import { FormControl, Typography } from '../../index'

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=383%3A3833'
    },
    muiDocSrc: 'https://mui.com/components/checkboxes/'
  }
}

const CheckboxLabel = (
  <Typography variant='body1' color='textPrimary'>
    Label
  </Typography>
)

const Template: Story<CheckboxProps> = (args) => {
  return (
    <>
      <FormControl>
        <FormControlLabel
          control={<Checkbox {...args} />}
          label={CheckboxLabel}
        />
      </FormControl>
    </>
  )
}

export const Default = Template.bind({})

export const CustomIcon = Template.bind({})
CustomIcon.args = {
  id: 'checkbox-CustomIcon',
  icon: <Check />,
  checkedIcon: <Delete />
}

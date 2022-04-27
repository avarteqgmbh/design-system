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
  argTypes: {
    id: {
      control: { type: 'text' },
      table: { type: { summary: 'string' } }
    },
    color: {
      control: 'radio',
      options: ['default', 'primary', 'secondary'],
      table: {
        type: { summary: 'default | primary | secondary' },
        defaultValue: { summary: 'secondary' }
      }
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    disableRipple: {
      control: { type: 'boolean' },
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
    },
    indeterminate: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    required: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    size: {
      control: 'radio',
      options: ['medium', 'small'],
      defaultValue: 'medium',
      table: {
        type: { summary: 'medium | small' },
        defaultValue: { summary: 'medium' }
      }
    }
  },
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

const CheckboxLabel = <Typography variant='body1'>Label</Typography>

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

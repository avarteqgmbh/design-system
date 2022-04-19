import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { FormControlLabel, SwitchProps } from '@mui/material'
import Check from '@mui/icons-material/Check'

import { Switch } from './Switch'
import { FormControl, Typography } from '../../index'

export default {
  title: 'Inputs/Switch',
  component: Switch,
  argTypes: {
    id: {
      control: { type: 'text' },
      table: { type: { summary: 'string' } }
    },
    color: {
      control: 'radio',
      options: ['default', 'primary', 'secondary', 'success'],
      table: {
        type: { summary: 'default | primary | secondary | success' },
        defaultValue: { summary: 'primary' }
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
    edge: {
      control: 'radio',
      options: ['end', 'start', false],
      defaultValue: false,
      table: {
        type: { summary: 'end | start | false' },
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
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=388%3A6093'
    },
    muiDocSrc: 'https://mui.com/components/switches/'
  }
}

const Template: Story<SwitchProps> = (args) => {
  return (
    <>
      <FormControl>
        <FormControlLabel
          control={<Switch {...args} />}
          label={<Typography color='textPrimary'>Label</Typography>}
        />
      </FormControl>
    </>
  )
}

export const Default = Template.bind({})

export const CustomIcon = Template.bind({})
CustomIcon.args = {
  id: 'Switch-CustomIcon',
  color: 'default',
  checkedIcon: <Check fontSize='small' />
}

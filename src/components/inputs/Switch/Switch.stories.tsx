import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Switch } from './Switch'
import { FormControl } from '../FormControl/FormControl'
import { FormControlLabel, SwitchProps } from '@mui/material'
import Check from '@mui/icons-material/Check'

export default {
  title: 'Inputs/Switch',
  component: Switch,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=388%3A6093'
    }
  }
}

const Template: Story<SwitchProps> = (args) => {
  return (
    <>
      <FormControl>
        <FormControlLabel control={<Switch {...args} />} label='Label' />
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

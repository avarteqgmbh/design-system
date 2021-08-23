import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { SwitchProps } from '@material-ui/core'
import { Switch } from './Switch'
import CancelIcon from '@material-ui/icons/Cancel'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

export default {
  title: 'Inputs/Switch',
  component: Switch,
  argTypes: {
    id: {
      control: { type: 'text' },
      table: { type: { summary: 'string' } }
    },
    checked: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
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
    },
    value: {
      control: { type: 'text' },
      table: { type: { summary: 'string' } }
    },
    onChange: { action: 'checked' }
  },
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=388%3A6093'
    }
  }
}
// TODO: - adding examples with FormControlLabel
//         https://material-ui.com/components/switches/#switch-with-formcontrollabel

const Template: Story<SwitchProps> = (args) => {
  return <Switch {...args} inputProps={{ 'aria-label': 'primary Switch' }} />
}

export const Default = Template.bind({})
Default.args = {
  id: 'Switch-default'
}

export const Primary = Template.bind({})
Primary.args = {
  id: 'Switch-Primary',
  checked: true,
  color: 'primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
  id: 'switch-secondary',
  checked: true,
  color: 'secondary'
}

export const Disabled = Template.bind({})
Disabled.args = {
  id: 'Switch-Disabled',
  checked: true,
  disabled: true
}

export const CustomIcon = Template.bind({})
CustomIcon.args = {
  id: 'Switch-CustomIcon',
  color: 'default',
  icon: <CancelIcon fontSize='small' />,
  checkedIcon: <CheckCircleIcon fontSize='small' />
}

export const StatefulSwitch: Story<SwitchProps> = (args) => {
  const [checked, setChecked] = React.useState(true)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setChecked(event.target.checked)
  }
  return <Switch {...args} checked={checked} onChange={handleChange} />
}

import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { TextFieldProps } from '@material-ui/core'
import { DateTime } from './DateTime'

export default {
  title: 'Input/DateTime',
  component: DateTime,
  argTypes: {
    id: {
      control: { type: 'text' },
      table: { type: { summary: 'string' } }
    },
    label: {
      control: { type: 'text' },
      table: { type: { summary: 'string' } }
    },
    defaultValue: {
      control: { type: 'text' },
      table: {
        type: { summary: 'text' }
      }
    },
    color: {
      control: 'radio',
      options: ['primary', 'secondary'],
      table: {
        type: { summary: 'primary | secondary' },
        defaultValue: { summary: 'primary' }
      }
    },
    variant: {
      control: 'radio',
      options: ['filled', 'outline', 'standard'],
      defaultValue: 'outlined',
      table: {
        type: { summary: 'filled | outlined | standard' },
        defaultValue: { summary: 'outline' }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=392%3A36790'
    }
  }
}

const Template: Story<TextFieldProps> = (args) => {
  return <DateTime {...args} />
}

export const Default = Template.bind({})
Default.args = {
  id: 'textfield-default',
  label: 'Label',
  placeholder: 'Placeholder'
}

export const Date = Template.bind({})
Date.args = {
  id: 'textfield-date',
  type: 'date',
  label: 'Date',
  defaultValue: '2017-05-24',
  InputLabelProps: {
    shrink: true
  }
}

export const DateTimeLocal = Template.bind({})
DateTimeLocal.args = {
  id: 'textfield-datetime-local',
  type: 'datetime-local',
  label: 'Datetime',
  defaultValue: '2017-05-24T04:20',
  InputLabelProps: { shrink: true }
}

export const Email = Template.bind({})
Email.args = {
  id: 'textfield-email',
  type: 'email',
  label: 'Email',
  placeholder: 'john@doe.com'
}

export const Hidden = Template.bind({})
Hidden.args = {
  id: 'textfield-hidden',
  type: 'hidden'
}

export const Number = Template.bind({})
Number.args = {
  id: 'textfield-number',
  type: 'number',
  label: 'Number',
  placeholder: '42.02'
}

export const Tel = Template.bind({})
Tel.args = {
  id: 'textfield-tel',
  type: 'tel',
  label: 'Phone',
  placeholder: 'Enter your phone number'
}

export const Time = Template.bind({})
Time.args = {
  id: 'textfield-time',
  type: 'time',
  label: 'Time',
  placeholder: '04:20',
  defaultValue: '04:20',
  InputLabelProps: {
    shrink: true
  }
}

export const Url = Template.bind({})
Url.args = {
  id: 'textfield-url',
  type: 'url',
  label: 'Url',
  placeholder: 'https://anynines.com'
}

export const Week = Template.bind({})
Week.args = {
  id: 'textfield-week',
  type: 'week',
  label: 'Week',
  InputLabelProps: {
    shrink: true
  }
}

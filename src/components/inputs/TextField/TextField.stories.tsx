import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { TextFieldProps, InputAdornment } from '@material-ui/core'
import { TextField } from './TextField'
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded'
import Visibility from '@material-ui/icons/Visibility'

export default {
  title: 'Inputs/TextField',
  component: TextField,
  argTypes: {
    id: {
      control: { type: 'text' },
      table: { type: { summary: 'string' } }
    },
    label: {
      control: { type: 'text' },
      table: { type: { summary: 'string' } }
    },
    placeholder: {
      control: { type: 'text' },
      table: { type: { summary: 'string' } }
    },
    helperText: {
      control: { type: 'text' },
      table: { type: { summary: 'string' } }
    },
    value: {
      control: { type: 'text' },
      table: { type: { summary: 'string' } }
    },
    required: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    fullWidth: {
      control: { type: 'boolean' },
      defaultValue: true,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true }
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
    autoFocus: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    type: {
      control: 'select',
      options: [
        'text',
        'date',
        'datetime-local',
        'email',
        'hidden',
        'number',
        'password',
        'tel',
        'time',
        'url',
        'week'
      ],
      defaultValue: 'text',
      table: {
        type: { summary: 'text | email | number | password | tel' },
        defaultValue: { summary: 'text' }
      }
    },
    color: {
      control: 'radio',
      options: ['primary', 'secondary'],
      table: {
        type: { summary: 'primary | secondary' },
        defaultValue: { summary: 'text' }
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
    variant: {
      control: 'radio',
      options: ['filled', 'outline', 'standard'],
      table: {
        type: { summary: 'filled | outlined | standard' }
      }
    },
    multiline: {
      control: 'boolean',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    rows: {
      control: 'range',
      min: 1,
      max: 100,
      defaultValue: 1,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 }
      }
    },
    rowsMax: {
      control: 'range',
      min: 1,
      max: 100,
      defaultValue: 5,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 5 }
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
  return <TextField {...args} />
}

export const Default = Template.bind({})
Default.args = {
  id: 'textfield-default',
  placeholder: 'Placeholder',
  variant: 'outlined'
}

export const WidthLabel = Template.bind({})
WidthLabel.args = {
  id: 'textfield-default',
  placeholder: 'Placeholder',
  label: 'Lorem ipsum',
  variant: 'outlined'
}

export const WidthLabelShrink = Template.bind({})
WidthLabelShrink.args = {
  id: 'textfield-default',
  placeholder: 'Placeholder',
  label: 'Lorem ipsum',
  variant: 'outlined',
  InputLabelProps: {
    shrink: true
  }
}

export const WidthLabelIcon = Template.bind({})
WidthLabelIcon.args = {
  id: 'textfield-default',
  placeholder: 'Placeholder',
  label: 'Lorem ipsum',
  variant: 'outlined',
  InputProps: {
    startAdornment: (
      <InputAdornment position='start'>
        <ArrowBackRoundedIcon />
      </InputAdornment>
    )
  }
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

export const Password = Template.bind({})
Password.args = {
  id: 'textfield-password',
  type: 'password',
  label: 'Password',
  placeholder: 'Enter your password',
  InputProps: {
    endAdornment: (
      <InputAdornment position='start'>
        <Visibility />
      </InputAdornment>
    )
  }
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

export const WithIcon = Template.bind({})
WithIcon.args = {
  id: 'textfield-with-icon',
  type: 'text',
  label: 'With icon',
  placeholder: 'Placeholder',
  InputProps: {
    startAdornment: (
      <InputAdornment position='start'>
        <ArrowBackRoundedIcon />
      </InputAdornment>
    )
  }
}

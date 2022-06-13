import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { TextField } from './TextField'
// import TextField from '@mui/material/TextField'
import { InputAdornment, TextFieldProps } from '@mui/material'
import ArrowBack from '@mui/icons-material/ArrowBack'

export default {
  title: 'Inputs/TextField',
  component: TextField,
  decorators: [withDesign],
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
      options: ['filled', 'outlined', 'standard'],
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
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=1382%3A12286'
    },
    muiDocSrc: 'https://mui.com/components/text-fields/'
  }
}

const Template: Story<TextFieldProps> = (args) => {
  const [value, setValue] = React.useState('')
  return <TextField value={value} onChange={(event) => setValue(event.target.value)} {...args} />
}

export const Default = Template.bind({})

export const WithLabelShrink = Template.bind({})
WithLabelShrink.args = {
  id: 'textfield-default',
  placeholder: 'Placeholder',
  label: 'Lorem ipsum',
  variant: 'outlined',
  InputLabelProps: {
    shrink: true
  }
}

export const WithLabelIcon = Template.bind({})
WithLabelIcon.args = {
  id: 'textfield-default',
  placeholder: 'Placeholder',
  label: 'Lorem ipsum',
  variant: 'outlined',
  InputProps: {
    startAdornment: (
      <InputAdornment position='start'>
        <ArrowBack />
      </InputAdornment>
    )
  }
}

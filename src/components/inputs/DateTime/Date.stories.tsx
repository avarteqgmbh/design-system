import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { DatePicker } from './Date'
import {
  DatePickerProps,
  KeyboardDatePicker,
  KeyboardDatePickerProps,
  MuiPickersUtilsProvider
} from '@material-ui/pickers'
import { Moment } from 'moment'
import MomentUtils from '@date-io/moment'

export default {
  title: 'Input/Date',
  component: Date,
  argTypes: {
    label: {
      control: { type: 'text' },
      table: { type: { summary: 'string' } }
    },
    type: {
      control: 'select',
      options: ['date'],
      table: {
        type: { summary: 'date' }
      }
    },
    defaultValue: {
      control: { type: 'text' },
      options: ['date'],
      table: {
        type: { summary: 'date' }
      }
    },
    allowKeyboardControl: {
      control: { type: 'boolean' },
      options: ['true', 'false'],
      defaultValue: true,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true }
      }
    },
    animateYearScrolling: {
      control: { type: 'boolean' },
      options: ['true', 'false'],
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    autoOk: {
      control: { type: 'boolean' },
      options: ['true', 'false'],
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    disabled: {
      control: { type: 'boolean' },
      options: ['true', 'false'],
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    disableFuture: {
      control: { type: 'boolean' },
      options: ['true', 'false'],
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    disablePast: {
      control: { type: 'boolean' },
      options: ['true', 'false'],
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    disableToolbar: {
      control: { type: 'boolean' },
      options: ['true', 'false'],
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    initialFocusedDate: {
      control: { type: 'text' },
      table: {
        type: { summary: 'text' }
      }
    },
    minDate: {
      control: { type: 'date' },
      options: [new Date('1900-01-01')],
      table: {
        type: { summary: 'text' }
      }
    },
    maxDate: {
      control: { type: 'date' },
      options: [new Date('2100-01-01')],
      table: {
        type: { summary: 'text' }
      }
    },
    views: {
      control: 'object',
      options: ['year | date | month'],
      table: {
        type: { summary: 'year | date | month' }
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
      url: ''
    }
  }
}

const Template: Story<DatePickerProps> = (args) => {
  return <DatePicker {...args} />
}

export const DefaultDate = Template.bind({})
DefaultDate.args = {}

export const DateLabel = Template.bind({})
DateLabel.args = {
  label: 'Birthday'
}

export const DateClearable = Template.bind({})
DateClearable.args = {
  label: 'Clearable',
  autoOk: true,
  clearable: true
}

export const YearOnly = Template.bind({})
YearOnly.args = {
  views: ['year'],
  label: 'Year only'
}

export const YearMonthOnly = Template.bind({})
YearMonthOnly.args = {
  views: ['year', 'month'],
  label: 'Year and Month',
  helperText: 'With min and max',
  minDate: new Date('2018-03-01'),
  maxDate: new Date('2028-06-01')
}

export const CalendarOnly = Template.bind({})
CalendarOnly.args = {
  disableToolbar: true,
  variant: 'inline',
  label: 'Only calendar',
  helperText: 'No year selection'
}

export const StaticVertical = Template.bind({})
StaticVertical.args = {
  autoOk: true,
  variant: 'static',
  openTo: 'year'
}

export const StaticHorizontal = Template.bind({})
StaticHorizontal.args = {
  autoOk: true,
  variant: 'static',
  openTo: 'year',
  orientation: 'landscape'
}

const KeyboardPicker: Story<KeyboardDatePickerProps> = (args) => {
  const [selectedDate, setDate] = React.useState<Moment | null>()

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <KeyboardDatePicker
        {...args}
        value={selectedDate}
        onChange={(newDate): void => {
          return setDate(newDate)
        }}
      />
    </MuiPickersUtilsProvider>
  )
}

export const KeyboardInput = KeyboardPicker.bind({})
KeyboardInput.args = {
  label: 'Clearable',
  autoOk: true,
  clearable: true,
  placeholder: '10/10/2018',
  format: 'DD/MM/YYYY'
}

export const KeyboardInline = KeyboardPicker.bind({})
KeyboardInline.args = {
  autoOk: true,
  variant: 'inline',
  inputVariant: 'outlined',
  label: 'With keyboard',
  format: 'dd/MM/yyyy',
  InputAdornmentProps: { position: 'start' }
}

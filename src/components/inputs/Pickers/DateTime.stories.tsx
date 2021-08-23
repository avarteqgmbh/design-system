import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { DateTimePicker } from './DateTime'
import {
  DateTimePickerProps,
  KeyboardDateTimePicker,
  KeyboardDateTimePickerProps,
  MuiPickersUtilsProvider
} from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import { Moment } from 'moment'

export default {
  title: 'Inputs/Pickers/DateTime',
  component: DateTimePicker,
  argTypes: {
    label: {
      control: { type: 'text' },
      table: { type: { summary: 'string' } }
    },
    ampm: {
      control: { type: 'boolean' },
      options: ['true', 'false'],
      defaultValue: true,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true }
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
      options: ['standard | outlined | filled'],
      table: {
        type: { summary: 'standard | outlined | filled' }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=388%3A8623'
    }
  }
}

const Template: Story<DateTimePickerProps> = (args) => {
  return <DateTimePicker {...args} />
}

export const DefaultDateTime = Template.bind({})
DefaultDateTime.args = {}

export const DateTimeLabel = Template.bind({})
DateTimeLabel.args = {
  label: 'DateTimePicker',
  inputVariant: 'outlined'
}

export const RegularClock = Template.bind({})
RegularClock.args = {
  autoOk: false,
  ampm: false,
  disableFuture: true,
  label: '24h clock'
}

export const TodayButton = Template.bind({})
TodayButton.args = {
  disablePast: true,
  label: 'With Today Button',
  showTodayButton: true
}

const KeyboardPicker: Story<KeyboardDateTimePickerProps> = (args) => {
  const [selectedDate, setDate] = React.useState<Moment | null>()

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <KeyboardDateTimePicker
        {...args}
        value={selectedDate}
        onChange={(newDate): void => {
          return setDate(newDate)
        }}
      />
    </MuiPickersUtilsProvider>
  )
}

export const DateTimeKeyboardInput = KeyboardPicker.bind({})
DateTimeKeyboardInput.args = {
  variant: 'inline',
  ampm: false,
  label: 'With keyboard',
  disablePast: false,
  format: 'yyyy/MM/dd HH:mm'
}

import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { TimePicker } from './Time'
import {
  TimePickerProps,
  MuiPickersUtilsProvider,
  KeyboardTimePickerProps,
  KeyboardTimePicker
} from '@material-ui/pickers'
import { Moment } from 'moment'
import MomentUtils from '@date-io/moment'

export default {
  title: 'Inputs/Pickers/Time',
  component: TimePicker,
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
    openTo: {
      control: 'text',
      options: ['hours | minutes | seconds'],
      table: {
        type: { summary: 'hours | minutes | seconds' }
      }
    },
    views: {
      control: 'object',
      options: ['hours | minutes | seconds'],
      table: {
        type: { summary: 'hours | minutes | seconds' }
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
      options: ['dialog | inline | static'],
      defaultValue: 'dialog',
      table: {
        type: { summary: 'dialog | inline | static' },
        defaultValue: { summary: 'dialog' }
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

const Template: Story<TimePickerProps> = (args) => {
  return <TimePicker {...args} />
}

export const DefaultTime = Template.bind({})
DefaultTime.args = {}

export const TimeLabel = Template.bind({})
TimeLabel.args = {
  label: 'Birthday'
}

export const WithSeconds = Template.bind({})
WithSeconds.args = {
  ampm: false,
  openTo: 'hours',
  views: ['hours', 'minutes', 'seconds'],
  format: 'HH:mm:ss',
  label: 'With seconds'
}

export const TimeStaticVertical = Template.bind({})
TimeStaticVertical.args = {
  autoOk: true,
  variant: 'static',
  openTo: 'hours'
}

export const TimeStaticHorizontal = Template.bind({})
TimeStaticHorizontal.args = {
  autoOk: true,
  ampm: false,
  variant: 'static',
  openTo: 'minutes',
  orientation: 'landscape'
}

const KeyboardPicker: Story<KeyboardTimePickerProps> = (args) => {
  const [selectedDate, setDate] = React.useState<Moment | null>()

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <KeyboardTimePicker
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
  label: 'Masked timepicker',
  placeholder: '08:00 AM',
  mask: '__:__ _M'
}

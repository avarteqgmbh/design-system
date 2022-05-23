import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { DatePickerProps,DateTimePickerProps } from '@mui/x-date-pickers'
import { DateRange, DateRangePickerProps } from '@mui/x-date-pickers-pro'
import { TextField } from '../../index'

import { DatePicker } from './Date'
import { DateTimePicker as DsDateTimePicker } from './DateTime'
import {
  DateRangePicker as DsDateRangePicker
} from './DateRange'
import { TextFieldProps } from '@mui/material'

export default {
  title: 'Lab/DateTime',
  component: DsDateRangePicker,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=1908%3A10896'
    },
    muiDocSrc: 'https://mui.com/components/date-picker/'
  }
}

export const BasicDatePicker: Story<DatePickerProps<unknown, Date>> = (args) => {
  const [value, setValue] = React.useState<Date | null>(new Date())

  return (
    <DatePicker
      {...args}
      label='Basic Date Picker'
      value={value}
      onChange={(newValue): void => {
        setValue(newValue as React.SetStateAction<Date>)
      }}
      renderInput={(params): React.ReactElement => {
        return <TextField {...params} />
      }}
    />
  )
}

export const DateTimePicker: Story<DateTimePickerProps<unknown, Date>> = (args) => {
  const [value, setValue] = React.useState<Date | null>(new Date())

  return (
    <DsDateTimePicker
      {...args}
      label='Date Time Picker'
      value={value}
      onChange={(newValue): void => {
        setValue(newValue as React.SetStateAction<Date>)
      }}
      renderInput={(params): React.ReactElement => {
        return <TextField {...params} />
      }}
    />
  )
}

export const DateRangePicker: Story<DateRangePickerProps<unknown, Date>> = (args) => {
  const getInitialDateFilters = (): DateRange<Date> => {
    const thirtyDaysInMilliSeconds = 30 * 24 * 60 * 60000
    const from = new Date(Date.now() - thirtyDaysInMilliSeconds)
    const to = new Date()

    return [from, to]
  }

  const isDateRangeValid = (dateRange: DateRange<Date>): boolean => {
    return dateRange[0] !== null && dateRange[1] !== null
  }

  const [dates, setDates] = React.useState<DateRange<Date>>(
    getInitialDateFilters()
  )

  return (
    <DsDateRangePicker
      {...args}
      onChange={(dateRange: DateRange<Date>): void => {
        const valid = isDateRangeValid(dateRange)
        if (valid) {
          setDates(dateRange)
        }
      }}
      startText='Von'
      endText='Bis'
      value={dates}
      toolbarTitle='Wähle einen Zeitraum'
      renderInput={(
        startProps: TextFieldProps,
        endProps: TextFieldProps
      ): JSX.Element => {
        return (
          <>
            <TextField
              {...startProps}
              label='Von'
              variant='filled'
              sx={{ marginRight: 4 }}
            />
            <TextField {...endProps} label='Bis' variant='filled' />
          </>
        )
      }}
    />
  )
}

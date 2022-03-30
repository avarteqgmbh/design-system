import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { DateRange } from '@mui/lab/DateRangePicker'
import { DateRangePicker, DatetimeProps } from './DateRange'

export default {
  title: 'Lab/DateTime',
  component: DateRangePicker,
  decorators: [withDesign]
}

const Template: Story<DatetimeProps> = (args) => {
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
    <DateRangePicker
      {...args}
      dateRange={dates}
      onChange={(dateRange): void => {
        const valid = isDateRangeValid(dateRange)
        if (valid) {
          setDates(dateRange)
        }
      }}
    />
  )
}

export const Default = Template.bind({})

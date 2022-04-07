import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { DateRange } from '@mui/lab/DateRangePicker'
import { DateRangePicker, DatetimeProps } from './DateRange'

export default {
  title: 'Lab/DateTime',
  component: DateRangePicker,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=1908%3A10896'
    },
    muiDocSrc: 'https://mui.com/components/date-picker/'
  }
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

import * as React from 'react'
import TextField from '@mui/material/TextField'
import StaticDateRangePicker, {
  StaticDateRangePickerProps
} from '@mui/lab/StaticDateRangePicker'
import DateAdapter from '@mui/lab/AdapterDayjs'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import Box from '@mui/material/Box'
import { DateRange } from '@mui/lab/DateRangePicker'

export function DateRangePicker(
  props: StaticDateRangePickerProps
): JSX.Element {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null])

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <StaticDateRangePicker
        {...props}
        startText='Check-in'
        endText='Check-out'
        displayStaticWrapperAs='desktop'
        value={value}
        onChange={(newValue): void => {
          return setValue(newValue as DateRange<Date>)
        }}
        renderInput={(startProps, endProps): JSX.Element => {
          return (
            <>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </>
          )
        }}
      />
    </LocalizationProvider>
  )
}

import React from 'react'
import MuiDatePicker, { DatePickerProps } from '@mui/lab/DatePicker'
import Moment from '@mui/lab/AdapterMoment'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

export function DatePicker(props: DatePickerProps): JSX.Element {
  const [selectedDate, setDate] = React.useState<Moment | null>()

  return (
    <LocalizationProvider dateAdapter={Moment}>
      <MuiDatePicker
        {...props}
        value={selectedDate}
        onChange={(newDate): void => {
          return setDate(newDate as Moment)
        }}
      />
    </LocalizationProvider>
  )
}

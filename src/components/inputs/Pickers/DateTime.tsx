import React from 'react'
import MuiDateTimePicker, { DateTimePickerProps } from '@mui/lab/DateTimePicker'
import Moment from '@mui/lab/AdapterMoment'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

export function DateTimePicker(props: DateTimePickerProps): JSX.Element {
  const [selectedDate, setDate] = React.useState<Moment | null>()

  return (
    <LocalizationProvider dateAdapter={Moment}>
      <MuiDateTimePicker
        {...props}
        value={selectedDate}
        onChange={(newDate): void => {
          return setDate(newDate as Moment)
        }}
      />
    </LocalizationProvider>
  )
}

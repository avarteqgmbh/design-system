import React from 'react'
import MuiTimePicker, { TimePickerProps } from '@mui/lab/TimePicker'
import Moment from '@mui/lab/AdapterMoment'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

export function TimePicker(props: TimePickerProps): JSX.Element {
  const [selectedDate, setDate] = React.useState<Moment | null>()

  return (
    <LocalizationProvider dateAdapter={Moment}>
      <MuiTimePicker
        {...props}
        value={selectedDate}
        onChange={(newDate): void => {
          return setDate(newDate as Moment)
        }}
      />
    </LocalizationProvider>
  )
}

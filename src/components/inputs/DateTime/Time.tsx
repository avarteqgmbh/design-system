import React, { SetStateAction, useState } from 'react'
import DateFnsUtils from '@date-io/date-fns'
import {
  TimePicker,
  TimePickerProps,
  MuiPickersUtilsProvider
} from '@material-ui/pickers'

export function Date(props: TimePickerProps): JSX.Element {
  const [selectedDate, setDob] = useState(null)
  const handleDateChange = (date: SetStateAction<null>): void => {
    setDob(date)
  }
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <TimePicker {...props} value={selectedDate} onChange={handleDateChange} />
    </MuiPickersUtilsProvider>
  )
}

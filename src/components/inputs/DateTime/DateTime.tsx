import React, { SetStateAction, useState } from 'react'
import DateFnsUtils from '@date-io/date-fns'
import {
  DateTimePicker,
  DateTimePickerViewsProps,
  MuiPickersUtilsProvider
} from '@material-ui/pickers'

export function Date(props: DateTimePickerViewsProps): JSX.Element {
  const [selectedDate, setDob] = useState(null)
  const handleDateChange = (date: SetStateAction<null>): void => {
    setDob(date)
  }
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateTimePicker
        {...props}
        value={selectedDate}
        onChange={handleDateChange}
      />
    </MuiPickersUtilsProvider>
  )
}

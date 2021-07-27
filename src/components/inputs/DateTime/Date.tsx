import React, { SetStateAction, useState } from 'react'
import MomentUtils from '@date-io/moment'
import {
  DatePicker,
  DatePickerProps,
  MuiPickersUtilsProvider
} from '@material-ui/pickers'

export function Date(props: DatePickerProps): JSX.Element {
  const [selectedDate, setDate] = useState(null)
  const handleDateChange = (date: SetStateAction<null>): void => {
    setDate(date)
  }
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DatePicker {...props} value={selectedDate} onChange={handleDateChange} />
    </MuiPickersUtilsProvider>
  )
}

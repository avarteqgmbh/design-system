import React from 'react'
import MomentUtils from '@date-io/moment'
import {
  DatePicker as MuiDatePicker,
  DatePickerProps,
  MuiPickersUtilsProvider
} from '@material-ui/pickers'
import { Moment } from 'moment'

export function DatePicker(props: DatePickerProps): JSX.Element {
  const [selectedDate, setDate] = React.useState<Moment | null>()

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <MuiDatePicker
        {...props}
        value={selectedDate}
        onChange={(newDate): void => {
          return setDate(newDate)
        }}
      />
    </MuiPickersUtilsProvider>
  )
}

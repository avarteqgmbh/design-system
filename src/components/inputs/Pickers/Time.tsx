import React from 'react'
import {
  TimePicker as MuiTimePicker,
  TimePickerProps,
  MuiPickersUtilsProvider
} from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import { Moment } from 'moment'

export function TimePicker(props: TimePickerProps): JSX.Element {
  const [selectedDate, setDate] = React.useState<Moment | null>()

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <MuiTimePicker
        {...props}
        value={selectedDate}
        onChange={(newDate): void => {
          return setDate(newDate)
        }}
      />
    </MuiPickersUtilsProvider>
  )
}

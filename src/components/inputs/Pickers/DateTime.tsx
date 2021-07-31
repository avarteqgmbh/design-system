import React from 'react'
import {
  DateTimePicker as MuiDateTimePicker,
  DateTimePickerViewsProps,
  MuiPickersUtilsProvider
} from '@material-ui/pickers'
import { Moment } from 'moment'
import MomentUtils from '@date-io/moment'

export function DateTimePicker(props: DateTimePickerViewsProps): JSX.Element {
  const [selectedDate, setDate] = React.useState<Moment | null>()

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <MuiDateTimePicker
        {...props}
        value={selectedDate}
        onChange={(newDate): void => {
          return setDate(newDate)
        }}
      />
    </MuiPickersUtilsProvider>
  )
}

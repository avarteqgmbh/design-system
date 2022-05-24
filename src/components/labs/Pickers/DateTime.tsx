import React from 'react'
import {
  DateTimePicker as MuiDateTimePicker,
  DateTimePickerProps
} from '@mui/x-date-pickers/DateTimePicker'
import deLocale from 'date-fns/locale/de'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

export function DateTimePicker(
  props: DateTimePickerProps<unknown, Date>
): JSX.Element {
  return (
    <LocalizationProvider locale={deLocale} dateAdapter={AdapterDateFns}>
      <MuiDateTimePicker {...props} />
    </LocalizationProvider>
  )
}

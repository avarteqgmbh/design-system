import React from 'react'
import {
  DatePicker as MuiDatePicker,
  DatePickerProps
} from '@mui/x-date-pickers/DatePicker'
import deLocale from 'date-fns/locale/de'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

export function DatePicker(props: DatePickerProps): JSX.Element {
  const [selectedDate, setDate] = React.useState<AdapterDateFns | null>()

  return (
    <LocalizationProvider locale={deLocale} dateAdapter={AdapterDateFns}>
      <MuiDatePicker
        {...props}
        value={selectedDate}
        onChange={(newDate): void => {
          return setDate(newDate as AdapterDateFns)
        }}
      />
    </LocalizationProvider>
  )
}

import React from 'react'
import {
  DateRange,
  DateRangePicker as MuiDateRangePicker
} from '@mui/x-date-pickers-pro/DateRangePicker'
import { LicenseInfo } from '@mui/x-license-pro'
import deLocale from 'date-fns/locale/de'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import TextField, { TextFieldProps } from '@mui/material/TextField'

LicenseInfo.setLicenseKey(process.env.REACT_APP_MUI_LICENSE_KEY as string)

export interface DatetimeProps {
  dateRange: DateRange<Date>
  onChange: (dateRange: DateRange<Date>) => void
}

export const DateRangePicker: React.FC<DatetimeProps> = (props) => {
  const { dateRange, onChange } = props

  return (
    <LocalizationProvider locale={deLocale} dateAdapter={AdapterDateFns}>
      <MuiDateRangePicker
        startText='Von'
        endText='Bis'
        value={dateRange}
        toolbarTitle='Wähle einen Zeitraum'
        okText='Anwenden'
        cancelText='Abbrechen'
        onChange={(newValue: DateRange<Date>): void => {
          onChange(newValue)
        }}
        renderInput={(
          startProps: TextFieldProps,
          endProps: TextFieldProps
        ): JSX.Element => {
          return (
            <>
              <TextField
                {...startProps}
                label='Von'
                variant='filled'
                sx={{ marginRight: 4 }}
              />
              <TextField {...endProps} label='Bis' variant='filled' />
            </>
          )
        }}
      />
    </LocalizationProvider>
  )
}
